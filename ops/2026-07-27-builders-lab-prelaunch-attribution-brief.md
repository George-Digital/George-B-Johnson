# Builders Lab pre-launch attribution — minimum safe implementation brief

**Status:** Local sanitizer, tests, privacy, and campaign wording implemented on July 27, 2026. No platform, provider, analytics-account, ad-account, or paid-campaign changes were made.

## Objective and scope

Make the local handoff to Skool reliably retain the approved Meta UTM campaign and a narrow allowlist of recognized platform click identifiers when values are safe, including when a platform repeats an identical allowed parameter. The site application must not persist click IDs or include them in analytics events. Establish the proof gates required before any paid-media spend.

**Primary business event:** a newly completed, paid Builders Lab membership for the configured Skool community. A landing-page view and a click to Skool are diagnostic micro-events only; neither is a membership, purchase, nor an optimization event.

## Verified pre-implementation state

- `src/lib/builders-lab-attribution.js` permits only the fixed Meta source/medium/campaign values plus valid `utm_content` and `utm_term`. Any duplicate allowlisted key returns an empty query set.
- The shared sanitizer is used by both the browser CTA path and `functions/go/skool/[[path]].js`; the production redirect reproduces the duplicate-UTM loss.
- A live valid Meta request forwarded the canonical UTM set and removed `fbclid`; a live request with a repeated `utm_source=meta` forwarded no UTM parameters.
- The live Builders Lab page loads one Google tag. Source and live HTML show no Meta Pixel marker and no CAPI endpoint/handler. There is no local paid-membership event.
- Local GA4 calls only emit `builders_lab_view` and `skool_cta_click`. Their implementation deliberately strips query strings from GA4 page location/referrer. Reporting receipt, event configuration, property access, timezone, and conversion/key-event configuration were not verified.
- `cli/sites/georgebjohnson.yaml` records a GA4 measurement ID, but `gsc_enabled` is false. Safe config inspection found no George-local environment file and no Meta or GA4 reporting client/credential in the project or AtsKaleSEO CLI. Existing Encharge credentials/configuration are not a Skool payment-conversion source and must not be repurposed.
- Read-only checks at **2026-07-27 20:44 UTC** confirmed that the live first-party page and public Skool offer both state **$7 USD/month** (`price: "7"` and `displayPrice.amount: 700`, monthly). Treat `$7/month` as the canonical current public offer; the launch playbook is reconciled in this release. Recheck Skool immediately before launch because provider pricing can change.

## Local-only change batch

**Files:**

1. `src/lib/builders-lab-attribution.js`
2. `tests/builders-lab-campaign.test.js`
3. `campaigns/builders-lab/first-build-brief-campaign.md` and `src/pages/privacy/index.astro` — wording only, to match the final duplicate and click-ID policy.
4. This ops record — implementation disposition and provider-side conversion blocker only.

**Implementation contract:**

1. Keep the fixed destination, one-hop `302`, no-store response, strict query allowlist, query-free GA4 location/referrer, and no application-side click-ID storage unchanged.
2. For each required fixed key (`utm_source`, `utm_medium`, `utm_campaign`): accept one value, or repeated values only when every decoded value is identical and equals the approved value. Collapse identical repeats to one canonical value. A conflicting, missing, or non-approved required value yields no forwarded campaign set.
3. For optional `utm_content` and `utm_term`: accept one valid value, or repeated identical valid values and collapse them to one. If values conflict, are invalid, or exceed the current format constraint, omit only that optional dimension while preserving a valid required campaign set.
4. For recognized click-ID keys (`fbclid`, `gclid`, `gbraid`, `wbraid`, `msclkid`, `ttclid`, and `li_fat_id`): forward them only with a complete valid required campaign and only when every decoded value for that key is identical and matches `^[A-Za-z0-9._~-]{1,256}$`. Collapse identical repeats to one. Omit a conflicting, malformed, empty, or overlong click ID without suppressing other valid dimensions.
5. Do not choose a first or last value from a conflict. Do not broaden the allowlist or pass arbitrary query parameters.

This is a small, reversible code change. The Function and browser will remain aligned because they already use the same sanitizer.

## Exact local acceptance criteria

All must pass before deployment:

1. `npm test` and `npm run build` pass in `/home/heman1320/GeorgeBJohnson`.
2. A request with the required Meta UTM set plus valid representative `fbclid`, `gclid`, `gbraid`, `wbraid`, `msclkid`, `ttclid`, and `li_fat_id` values returns the fixed Skool host/path with those recognized IDs and only the canonical approved UTM keys. Unknown identifiers are discarded.
3. Repeating every required value, an optional valid value, or a valid click ID identically returns one canonical copy of each approved value.
4. A conflicting repeated required key returns the fixed Skool URL with no attribution query. A conflicting repeated optional or click-ID key omits only that dimension and retains the other valid campaign and click-ID values.
5. Mixed-case keys, invalid/overlong/control-character optional or click-ID values, destination overrides, non-GET/HEAD requests, and wider `/go/skool/*` paths retain their rejection behavior.
6. Browser CTA rewriting produces the same sanitized `/go/skool` query as the Function for each case above. It emits only `builders_lab_view` and `skool_cta_click`; it never emits a paid-membership, purchase, subscribe, lead, or checkout event.
7. The revised privacy/campaign wording says that identical repeated allowlisted values are canonicalized, recognized valid click IDs are passed only to the fixed Skool destination, and conflicting or malformed dimensions are discarded. It must not claim that click IDs are persisted, sent to GA4, or prove a paid membership.
8. Production read-only header checks reproduce the same result for a normal valid UTM request, an identical duplicate, and a conflicting duplicate. No account setting, campaign, or provider object is changed during the check.

**Rollback:** restore the prior sanitizer/test/doc commit. The change does not alter destination, spend, audiences, user records, or provider data.

## Conversion and reporting gates — not locally solvable

### 1. Skool paid-membership source (provider/operator approval required)

No membership conversion event was added locally because the repository has no deterministic post-payment callback, webhook, export, or other truthful paid-membership signal. Before tagging or spend, verify in the exact Builders Lab community that Skool can provide a reproducible paid-membership record and whether it persists/reports the approved UTM and click-ID dimensions through checkout. The evidence must show a test transaction's timestamp, community, payment status, initial charge amount/currency, subscription status, and refund/cancellation treatment. Do not assume a redirect or UTM alone proves a paid join.

If Skool cannot expose a compliant post-payment return, webhook, integration, or export with that data, retain a first-party/manual reconciliation ledger and report paid memberships as unattributed/unknown where appropriate. Do not fabricate a Meta conversion from the outbound click.

### 2. GA4 verification (GA4 property access and explicit approval required)

The existing tag can measure the two diagnostic events only after an operator verifies the correct property/data stream, consent configuration, property timezone, and receipt in DebugView/Realtime using a controlled test. After processing, export a reproducible event report with property, measurement ID, timezone, test time, event names, filters, and data-pull time.

Do not mark `skool_cta_click` as the paid-membership conversion or use it as the primary optimization signal. Whether GA4 receives an off-site paid membership depends on a verified Skool/first-party post-payment source, not the landing-page tag.

### 3. Meta Pixel/CAPI (explicit legal, technical, and account approval required)

No Pixel or CAPI implementation belongs in the local attribution patch.

A later approved integration must identify the exact Meta business/ad account and Pixel/data set, legal basis/consent behavior, supported event naming, and data-sharing policy. It must separately prove:

- browser Pixel receipt for landing-page diagnostic events;
- a provider/first-party paid-membership event only after payment succeeds;
- an opaque server-generated `event_id` for browser/server deduplication where both are used;
- actual amount, currency, event time, initial-versus-renewal/refund status, and documented source provenance;
- no email address, raw query string, IP address, or click identifier sent to analytics or CAPI from the current local redirect; the redirect may send only validated allowlisted click IDs to the fixed Skool destination; and
- Meta Events Manager Test Events evidence and a subsequent read-only report.

The event name and whether it is eligible for optimization must be confirmed against current Meta documentation and the approved account. Until then, `builders_lab_paid_membership` is a business-reporting label, not a claimed Meta event type.

## Unit economics and budget impact

**Spend now:** $0. No campaign, draft, budget, bid, event, audience, or account change is authorized.

Before a spend request, treat **$7/month as gross subscription revenue, not contribution margin or allowable CAC**, recheck the live Skool offer, and document payment fees, taxes/discounts, refunds, chargebacks, George's support/critique and fulfillment cost, contribution margin, realized or explicitly assumed retention/LTV, cancellation timing, target CAC/CPA or ROAS calculation, maximum approved test loss, budget ceiling, cash-flow limit, and support capacity. The launch playbook's daily-activity/support promise also needs an explicit capacity owner and response window.

## Measurement and decision rules

Use a three-layer scorecard, never one blended platform number:

1. **Site diagnostic:** Builders Lab views and local outbound Skool clicks (GA4, clearly labelled as events before checkout).
2. **Provider/first-party outcome:** confirmed new paid memberships, cash collected, refunds/cancellations, and net contribution (Skool/finance evidence).
3. **Meta-reported lens:** spend, impressions, reach, frequency, CPM, link/outbound clicks, CPC, reported conversion event, attribution window, and attribution model — only after account access is verified.

For every report record account/currency, property/provider, timezone, data-pull time, reporting/comparison periods, level, event/optimization goal, attribution window, filters, and source. Reconcile platform credit with the provider/first-party paid-membership ledger. Platform-modelled or view-through credit is not causal lift.

**Pre-spend stop condition:** if the paid-membership source cannot be reconciled to a controlled test, GA4 receipt is unverified, Pixel/CAPI requirements are unapproved, or economics/capacity are unresolved, do not launch or spend.

## Approval required

- **No approval needed:** review this brief and implement only the local sanitizer/tests/documentation batch after normal repository approval.
- **Explicit operator approval needed:** exact Skool community/dashboard actions or export; GA4 property access/configuration; Pixel/data-set selection; any Pixel/CAPI/server secret/webhook; legal/privacy review; a controlled test transaction; and any Meta campaign, budget, event configuration, audience, or spend.

## Sources

- `src/lib/builders-lab-attribution.js`
- `functions/go/skool/[[path]].js`
- `src/scripts/builders-lab.js`
- `src/layouts/BaseLayout.astro`
- `tests/builders-lab-campaign.test.js`
- `campaigns/builders-lab/first-build-brief-campaign.md`
- `ops/2026-07-25-builders-lab-verifier-remediation.md`
- `cli/sites/georgebjohnson.yaml` and `cli/admin-sites.json`
- Blueprint guidance read in full: `Deep Dives - attribution settings.txt`; `Lead Gen - low ticket.txt` (guidance only, not live-account evidence).

## Next review date

Review before deployment and again before any request to add a tag, provider connection, paid-membership event, or spend.
