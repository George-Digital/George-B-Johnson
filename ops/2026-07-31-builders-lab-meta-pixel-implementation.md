# Builders Lab Meta Pixel implementation record

**Recorded:** 2026-07-31
**Scope:** Local website implementation; not yet deployed or remotely validated.

## Operator direction

During the live manual Builders Lab campaign setup, the operator directed that the owned website use Meta Pixel measurement, selected the owned website rather than Skool, created the Pixel in Events Manager, chose browser Pixel only, selected manual installation, and supplied the generated base code after requesting that the implementation proceed with the operator as the human gate.

This record treats that sequence as approval for the exact local implementation below. It is not legal advice and does not claim that Meta received an event, that the campaign is active, or that any visitor joined or paid.

## Selected asset reference

- Type: Meta browser Pixel/dataset
- Redacted asset fingerprint: `sha256:38da10005baeabcd5128eb3f882af47f7f534f3719ce865b2cdf3406d3b2c95f`
- Allowed production origin: `https://georgebjohnson.com`
- Page scope: `/builders-lab/` only
- No Conversions API, advanced matching, offline events, app events, custom audience, or custom conversion

## Measurement contract

After a current affirmative visitor choice only:

1. one Meta `PageView` on the Builders Lab page, with no site-supplied parameters; and
2. at most one `BuildersLabSkoolOutbound` event per CTA placement, with only `cta_placement=working-standard` or `cta_placement=final-review`.

Neither event represents a Skool arrival, registration, paid membership, purchase, lead, revenue, value, or currency. The site rewrites the two Builders Lab CTA destinations before removing the landing-page query string and loading Meta measurement. Reject, missing, malformed, changed-version, or expired preference states block Meta loading and events.

## Local implementation

- `src/components/MetaMeasurementConsent.astro`
- `src/scripts/builders-lab-meta.js`
- `src/scripts/builders-lab.js`
- `src/pages/builders-lab/index.astro`
- `src/pages/privacy/index.astro`
- `src/components/Footer.astro`
- `src/styles/meta-consent.css`
- `public/_headers`
- `tests/builders-lab-campaign.test.js`

The preference is first-party local storage only, expires after six months, and contains status, notice version, decision time, and expiry time. Allow and Reject have equal presentation. A persistent Privacy choices control supports changes. Same-tab withdrawal, cross-tab withdrawal, and expiry of an already-loaded runtime cause a reload into the no-Meta state.

## Deployment and validation boundary

No deployment is recorded here. Before activation, verify in a clean browser:

- no request to Meta before Allow;
- one PageView after Allow;
- only the bounded CTA event after a CTA selection;
- no query/click ID or personal detail in site-supplied event parameters;
- Reject and withdrawal stop later site-originated Meta requests;
- GA4 and the fixed Skool destination continue working.

## Rollback

Remove the Builders-Lab-only consent component and measurement module imports, revert the narrow Meta CSP hosts and privacy notice changes, and leave the campaign paused. A site rollback cannot retract data already received by Meta.
