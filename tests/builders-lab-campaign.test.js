import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import { onRequest } from "../functions/go/skool/[[path]].js";
import {
  SKOOL_DESTINATION,
  allowedMetaCampaignParams,
} from "../src/lib/builders-lab-attribution.js";
import {
  SKOOL_CTA_EVENT,
  initBuildersLabTracking,
  trackedSkoolPath,
} from "../src/scripts/builders-lab.js";

const metaQuery = [
  "utm_source=meta",
  "utm_medium=paid_social",
  "utm_campaign=builders_lab_direct_membership",
].join("&");

async function callRedirect(path, method = "GET") {
  return onRequest({
    request: new Request(`https://georgebjohnson.com${path}`, { method }),
    next: () => new Response("Not Found", { status: 404 }),
  });
}

function redirectUrl(response) {
  const location = response.headers.get("location");
  assert.ok(location, "redirect response should include Location");
  return new URL(location);
}

test("the redirect preserves only the allowlisted Meta campaign values", async () => {
  const response = await callRedirect(
    `/go/skool?${metaQuery}&utm_content=creative_one&utm_term=audience.2`,
  );
  assert.equal(response.status, 302);
  assert.equal(response.headers.get("cache-control"), "no-store");
  assert.equal(response.headers.get("referrer-policy"), "no-referrer");
  assert.equal(
    response.headers.get("location"),
    `${SKOOL_DESTINATION}?${metaQuery}&utm_content=creative_one&utm_term=audience.2`,
  );
});

test("click IDs, arbitrary parameters, uppercase keys, and URL overrides are dropped", async () => {
  const response = await callRedirect(
    `/go/skool?${metaQuery}&utm_content=creative_one&fbclid=click-id&gclid=google-id&utm_id=not-allowed&x=1&UTM_SOURCE=evil&next=https%3A%2F%2Fevil.example%2F&url=https%3A%2F%2Fevil.example%2F`,
  );
  const destination = redirectUrl(response);
  assert.equal(destination.origin + destination.pathname, SKOOL_DESTINATION);
  assert.deepEqual([...destination.searchParams.keys()], [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
  ]);
});

test("duplicates suppress attribution instead of forwarding polluted values", async () => {
  for (const duplicate of [
    `utm_source=meta&utm_source=evil&utm_medium=paid_social&utm_campaign=builders_lab_direct_membership`,
    `${metaQuery}&utm_content=one&utm_content=two`,
  ]) {
    const destination = redirectUrl(await callRedirect(`/go/skool?${duplicate}`));
    assert.equal(destination.href, SKOOL_DESTINATION);
  }
});

test("malformed, mixed-case, control-character, and overlong values are omitted", async () => {
  const values = [
    "MixedCase",
    "creative%2Foverride",
    "creative%0Aheader",
    "caf%C3%A9",
    "x".repeat(101),
  ];
  for (const value of values) {
    const destination = redirectUrl(
      await callRedirect(`/go/skool?${metaQuery}&utm_content=${value}`),
    );
    assert.equal(destination.searchParams.get("utm_content"), null);
    assert.equal(destination.searchParams.get("utm_source"), "meta");
  }
});

test("valid encoded unreserved values round-trip without changing the fixed host", async () => {
  const destination = redirectUrl(
    await callRedirect(`/go/skool?${metaQuery}&utm_content=creative%7Eone&utm_term=audience%2E2`),
  );
  assert.equal(destination.origin + destination.pathname, SKOOL_DESTINATION);
  assert.equal(destination.searchParams.get("utm_content"), "creative~one");
  assert.equal(destination.searchParams.get("utm_term"), "audience.2");
});

test("all supported short-link paths are one-hop redirects and wider paths do not redirect", async () => {
  for (const path of ["/go/skool", "/go/skool/", "/go/skool/index.html"]) {
    const response = await callRedirect(`${path}?next=https%3A%2F%2Fevil.example%2F`);
    assert.equal(response.status, 302);
    assert.equal(response.headers.get("location"), SKOOL_DESTINATION);
  }
  const wider = await callRedirect("/go/skool/https://evil.example/");
  assert.equal(wider.status, 404);
  assert.equal(wider.headers.get("location"), null);
  assert.equal((await callRedirect("/go/skool", "POST")).status, 405);
});

test("the browser path uses the same campaign allowlist", () => {
  assert.equal(
    trackedSkoolPath(
      `https://georgebjohnson.com/builders-lab/?${metaQuery}&utm_content=creative_one&fbclid=drop-me&next=https://evil.example/`,
    ),
    `/go/skool?${metaQuery}&utm_content=creative_one`,
  );
  assert.equal(
    allowedMetaCampaignParams("utm_source=meta&utm_source=meta").toString(),
    "",
  );
});

test("CTA clicks emit skool_cta_click and never a membership event", () => {
  const events = [];
  const listeners = {};
  const attributes = new Map([["data-skool-cta", "final-review"]]);
  const link = {
    setAttribute: (name, value) => attributes.set(name, value),
    getAttribute: (name) => attributes.get(name) ?? null,
    addEventListener: (name, handler) => { listeners[name] = handler; },
  };
  const browserWindow = {
    location: { href: `https://georgebjohnson.com/builders-lab/?${metaQuery}` },
    gtag: (...args) => events.push(args),
  };
  const browserDocument = { querySelectorAll: () => [link] };

  initBuildersLabTracking(browserWindow, browserDocument);
  listeners.click();

  assert.equal(SKOOL_CTA_EVENT, "skool_cta_click");
  assert.deepEqual(events.map((entry) => entry[1]), ["builders_lab_view", "skool_cta_click"]);
  assert.equal(events.some((entry) => String(entry[1]).includes("membership")), false);
  assert.equal(attributes.get("href"), `/go/skool?${metaQuery}`);
});

test("analytics CSP uses only the exact additional runtime hosts", async () => {
  const headers = await readFile(new URL("../public/_headers", import.meta.url), "utf8");
  assert.match(headers, /script-src[^\n]*https:\/\/static\.cloudflareinsights\.com/);
  assert.match(headers, /connect-src[^\n]*https:\/\/www\.google\.com/);
  assert.doesNotMatch(headers, /connect-src[^\n]*https:\/\/cloudflareinsights\.com/);
  assert.doesNotMatch(headers, /\*\.cloudflareinsights\.com/);
});

test("the landing page states the approved offer and keeps both CTAs on the Skool route", async () => {
  const page = await readFile(
    new URL("../src/pages/builders-lab/index.astro", import.meta.url),
    "utf8",
  );
  const monthlyPrices = [...page.matchAll(/\$\d+(?:\.\d+)?\/month/g)].map(
    ([price]) => price,
  );
  const skoolCtas = page.match(/href=\{site\.skoolUrl\}/g) ?? [];

  assert.ok(monthlyPrices.length >= 2, "price should be repeated near the offer and CTAs");
  assert.deepEqual([...new Set(monthlyPrices)], ["$7/month"]);
  assert.match(
    page,
    /George Johnson will be active in (?:the )?(?:Builders Lab )?Skool group daily and will share his current projects/,
  );
  assert.equal(skoolCtas.length, 2);
  assert.match(page, /Join Builders Lab on Skool — \$7\/month/);
  assert.match(page, /price: "7"/);
  assert.match(page, /billingDuration: "P1M"/);
});
