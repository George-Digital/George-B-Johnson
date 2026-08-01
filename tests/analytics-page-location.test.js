import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";

import { BUILDERS_LAB_GA4_PAGE_LOCATION_POLICY as buildersLabPolicy } from "../src/lib/analytics-attribution.js";
const approvedQuery = buildersLabPolicy.tuple
  .map(([key, value]) => `${key}=${value}`)
  .join("&");

async function loadSanitizer() {
  const source = await readFile(
    new URL("../public/scripts/analytics-page-location.js", import.meta.url),
    "utf8",
  );
  const browserWindow = {};
  vm.runInNewContext(source, {
    window: browserWindow,
    URL,
    URLSearchParams,
  });
  assert.equal(typeof browserWindow.__sanitizeAnalyticsPageLocation, "function");
  return browserWindow.__sanitizeAnalyticsPageLocation;
}

test("the Builders Lab GA4 policy is one exact finite tuple", () => {
  assert.deepEqual(buildersLabPolicy, {
    pathname: "/builders-lab/",
    tuple: [
      ["utm_source", "meta"],
      ["utm_medium", "paid_social"],
      ["utm_campaign", "builders_lab_direct_membership"],
      ["utm_content", "builders_lab_cover_static_v1"],
    ],
  });
});

test("GA4 page_location keeps only the exact approved Builders Lab UTM tuple", async () => {
  const sanitize = await loadSanitizer();
  const location = sanitize(
    `https://georgebjohnson.com/builders-lab/?fbclid=click-id&utm_term=audience&${approvedQuery}&next=https%3A%2F%2Fevil.example%2F#details`,
    buildersLabPolicy,
  );

  assert.equal(
    location,
    `https://georgebjohnson.com/builders-lab/?${approvedQuery}`,
  );
});

test("GA4 page_location is query-free unless the complete tuple is exact and singular", async () => {
  const sanitize = await loadSanitizer();
  const queryFree = "https://georgebjohnson.com/builders-lab/";
  const rejectedQueries = [
    "",
    "utm_source=meta&utm_medium=paid_social&utm_campaign=builders_lab_direct_membership",
    approvedQuery.replace("utm_source=meta", "utm_source=Meta"),
    approvedQuery.replace("utm_content=builders_lab_cover_static_v1", "utm_content=other_creative"),
    `${approvedQuery}&utm_source=meta`,
    `${approvedQuery}&utm_content=builders_lab_cover_static_v1`,
  ];

  for (const query of rejectedQueries) {
    const suffix = query ? `?${query}` : "";
    assert.equal(sanitize(`${queryFree}${suffix}`, buildersLabPolicy), queryFree);
  }

  assert.equal(
    sanitize(`https://georgebjohnson.com/?${approvedQuery}`, buildersLabPolicy),
    "https://georgebjohnson.com/",
  );
  assert.equal(sanitize("not a URL", buildersLabPolicy), "");
});

test("the reusable sanitizer fails closed for malformed tuple policies", async () => {
  const sanitize = await loadSanitizer();
  const href = `https://georgebjohnson.com/builders-lab/?${approvedQuery}`;
  const queryFree = "https://georgebjohnson.com/builders-lab/";

  assert.equal(sanitize(href, null), queryFree);
  assert.equal(sanitize(href, { pathname: "/builders-lab/", tuple: [] }), queryFree);
  assert.equal(
    sanitize(href, {
      pathname: "/builders-lab/",
      tuple: [["utm_source", "meta"], ["utm_source", "meta"]],
    }),
    queryFree,
  );
});
