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
const clickIds = Object.freeze({
  fbclid: "IwAR3Example_123-abc",
  gclid: "EAIaIQobChMI_safe-123",
  gbraid: "0AAAA_SAFE-123",
  wbraid: "ClIK_SAFE.123",
  msclkid: "0123456789abcdef0123456789abcdef",
  ttclid: "E.C.P_safe-123",
  li_fat_id: "123e4567-e89b-12d3-a456-426614174000",
});
const clickIdQuery = new URLSearchParams(clickIds).toString();

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

test("the redirect preserves the allowlisted campaign and recognized click IDs", async () => {
  const approvedQuery = `${metaQuery}&utm_content=creative_one&utm_term=audience.2&${clickIdQuery}`;
  const response = await callRedirect(`/go/skool?${approvedQuery}`);

  assert.equal(response.status, 302);
  assert.equal(response.headers.get("cache-control"), "no-store");
  assert.equal(response.headers.get("referrer-policy"), "no-referrer");
  assert.equal(response.headers.get("location"), `${SKOOL_DESTINATION}?${approvedQuery}`);
});

test("arbitrary parameters, mixed-case keys, and URL overrides are dropped", async () => {
  const response = await callRedirect(
    `/go/skool?${metaQuery}&utm_content=creative_one&${clickIdQuery}&dclid=not-allowed&utm_id=not-allowed&x=1&UTM_SOURCE=evil&FBCLID=wrong-key&next=https%3A%2F%2Fevil.example%2F&url=https%3A%2F%2Fevil.example%2F`,
  );
  const destination = redirectUrl(response);

  assert.equal(destination.origin + destination.pathname, SKOOL_DESTINATION);
  assert.deepEqual([...destination.searchParams.keys()], [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    ...Object.keys(clickIds),
  ]);
  assert.equal(destination.searchParams.get("next"), null);
});

test("identical duplicate UTMs and click IDs collapse to one canonical value", async () => {
  const duplicateQuery = [
    `fbclid=${clickIds.fbclid}`,
    "utm_source=meta",
    "utm_content=creative_one",
    "utm_medium=paid_social",
    "utm_source=meta",
    `fbclid=${clickIds.fbclid}`,
    "utm_campaign=builders_lab_direct_membership",
    "utm_medium=paid_social",
    "utm_content=creative_one",
    "utm_campaign=builders_lab_direct_membership",
  ].join("&");
  const destination = redirectUrl(await callRedirect(`/go/skool?${duplicateQuery}`));

  assert.equal(
    destination.href,
    `${SKOOL_DESTINATION}?${metaQuery}&utm_content=creative_one&fbclid=${clickIds.fbclid}`,
  );
  assert.equal(destination.searchParams.getAll("utm_source").length, 1);
  assert.equal(destination.searchParams.getAll("fbclid").length, 1);
});

test("a conflicting required duplicate rejects the campaign set", async () => {
  const destination = redirectUrl(await callRedirect(
    `/go/skool?utm_source=meta&utm_source=evil&utm_medium=paid_social&utm_campaign=builders_lab_direct_membership&fbclid=${clickIds.fbclid}`,
  ));

  assert.equal(destination.href, SKOOL_DESTINATION);
});

test("conflicting optional UTMs and click IDs omit only their own dimensions", async () => {
  const destination = redirectUrl(await callRedirect(
    `/go/skool?${metaQuery}&utm_content=one&utm_content=two&utm_term=audience&utm_term=audience&fbclid=one&fbclid=two&gclid=${clickIds.gclid}&gclid=${clickIds.gclid}`,
  ));

  assert.equal(
    destination.href,
    `${SKOOL_DESTINATION}?${metaQuery}&utm_term=audience&gclid=${clickIds.gclid}`,
  );
});

test("malformed, control-character, and overlong attribution values are omitted", async () => {
  const campaignValues = [
    "MixedCase",
    "creative%2Foverride",
    "creative%0Aheader",
    "caf%C3%A9",
    "x".repeat(101),
  ];
  for (const value of campaignValues) {
    const destination = redirectUrl(
      await callRedirect(`/go/skool?${metaQuery}&utm_content=${value}`),
    );
    assert.equal(destination.searchParams.get("utm_content"), null);
    assert.equal(destination.searchParams.get("utm_source"), "meta");
  }

  const clickIdValues = [
    "click%2Foverride",
    "click%0Aheader",
    "caf%C3%A9",
    "click%25value",
    "x".repeat(257),
    "",
  ];
  for (const value of clickIdValues) {
    const destination = redirectUrl(
      await callRedirect(`/go/skool?${metaQuery}&fbclid=${value}&gclid=${clickIds.gclid}`),
    );
    assert.equal(destination.searchParams.get("fbclid"), null);
    assert.equal(destination.searchParams.get("gclid"), clickIds.gclid);
    assert.equal(destination.searchParams.get("utm_source"), "meta");
  }
});

test("valid encoded unreserved values round-trip without changing the fixed host", async () => {
  const destination = redirectUrl(
    await callRedirect(
      `/go/skool?${metaQuery}&utm_content=creative%7Eone&utm_term=audience%2E2&fbclid=click%7Eid`,
    ),
  );

  assert.equal(destination.origin + destination.pathname, SKOOL_DESTINATION);
  assert.equal(destination.searchParams.get("utm_content"), "creative~one");
  assert.equal(destination.searchParams.get("utm_term"), "audience.2");
  assert.equal(destination.searchParams.get("fbclid"), "click~id");
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

test("the browser and Function use the same attribution sanitizer", async () => {
  const cases = [
    `${metaQuery}&utm_content=creative_one&${clickIdQuery}&next=https://evil.example/`,
    `utm_source=meta&utm_source=meta&utm_medium=paid_social&utm_medium=paid_social&utm_campaign=builders_lab_direct_membership&utm_campaign=builders_lab_direct_membership&fbclid=${clickIds.fbclid}&fbclid=${clickIds.fbclid}`,
    `${metaQuery}&utm_content=one&utm_content=two&fbclid=one&fbclid=two&gclid=${clickIds.gclid}`,
    `utm_source=meta&utm_source=evil&utm_medium=paid_social&utm_campaign=builders_lab_direct_membership&fbclid=${clickIds.fbclid}`,
  ];

  for (const query of cases) {
    const trackedPath = trackedSkoolPath(
      `https://georgebjohnson.com/builders-lab/?${query}`,
    );
    const trackedUrl = new URL(trackedPath, "https://georgebjohnson.com");
    const destination = redirectUrl(await callRedirect(trackedPath));

    assert.equal(destination.origin + destination.pathname, SKOOL_DESTINATION);
    assert.equal(destination.searchParams.toString(), trackedUrl.searchParams.toString());
  }

  assert.equal(
    allowedMetaCampaignParams(`${metaQuery}&utm_source=meta&fbclid=${clickIds.fbclid}`).toString(),
    `${metaQuery}&fbclid=${clickIds.fbclid}`,
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
    location: {
      href: `https://georgebjohnson.com/builders-lab/?${metaQuery}&fbclid=${clickIds.fbclid}`,
    },
    gtag: (...args) => events.push(args),
  };
  const browserDocument = { querySelectorAll: () => [link] };

  initBuildersLabTracking(browserWindow, browserDocument);
  listeners.click();

  assert.equal(SKOOL_CTA_EVENT, "skool_cta_click");
  assert.deepEqual(events.map((entry) => entry[1]), ["builders_lab_view", "skool_cta_click"]);
  for (const forbiddenEvent of ["membership", "purchase", "subscribe", "lead", "checkout"]) {
    assert.equal(events.some((entry) => String(entry[1]).includes(forbiddenEvent)), false);
  }
  assert.equal(
    attributes.get("href"),
    `/go/skool?${metaQuery}&fbclid=${clickIds.fbclid}`,
  );
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
