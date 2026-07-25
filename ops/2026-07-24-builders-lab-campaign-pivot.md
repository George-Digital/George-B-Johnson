# Builders Lab campaign pivot

Date: 2026-07-24
Redirect and verifier corrections: 2026-07-25

## Approved public destination

- Existing page refreshed: `https://georgebjohnson.com/builders-lab/`
- Local tracked route: `https://georgebjohnson.com/go/skool`
- External destination: `https://www.skool.com/local-seo-engineering-7047/about`
- Redirect contract: one-hop `302` to the fixed Skool `/about` URL; preserve only the exact allowlisted lowercase Meta UTM set and discard every other parameter

## Managed-site evidence

- `supabase_sync_sites.py`: completed for the managed-site registry.
- `supabase_inventory_content.py georgebjohnson`: inventoried 9 repo files and 9 content items.
- Preflight topic: `Builders Lab working membership for builders and operators developing inspectable practical AI systems /builders-lab/`.
- Highest overlap: existing `/builders-lab/` at score `0.28`; no meaningful backlog overlap. The approved work refreshes that URL and creates no duplicate page.

## Public form state

The optional First Build Brief form is hidden and inactive. The site serves static Astro output plus one narrow Cloudflare Pages redirect Function; it has no signup endpoint or rate-limit binding, and Encharge sender approval and double opt in are not ready. No signup endpoint, form capture, Encharge secret, success promise, Meta Pixel, ad launch, or spend was added.

The complete planned form copy, consent evidence, three-email sequence, UTM schema, Meta copy, events, and dashboard actions are tracked in `campaigns/builders-lab/first-build-brief-campaign.md`.

## Encharge workspace state

- Account API: workspace active and empty, with zero people, zero native forms, zero saved emails, and zero broadcasts.
- George email domain ID `16335` was created through the documented Encharge API.
- Seven Encharge DNS records were added as DNS-only records in Cloudflare. The existing monitoring-only DMARC record, `v=DMARC1; p=none; aspf=r; adkim=r;`, was preserved without a policy change.
- All eight expected records, including DMARC, resolve through both `1.1.1.1` and `8.8.8.8`.
- Encharge still reports the domain as `pending` and recognized five of eight records at the last API check. Domain/sender approval is not complete.
- The old PHL domain was deleted from Encharge through the documented API. Workspace rename, sender identity/approval, Meta connection, and the DOI Flow remain dashboard actions listed in the tracked campaign handoff.

## Original release evidence (superseded redirect implementation)

- Site commit: `a080cee`
- Cloudflare Pages deployment: `cbf5e109-e3f9-457c-b18f-8ccc80cf3cce`
- Deployment URL: `https://cbf5e109.george-b-johnson.pages.dev`
- Production and deployment-origin Builders Lab responses were byte-identical at verification.
- `/builders-lab/`: HTTP `200`, self-canonical to `https://georgebjohnson.com/builders-lab/`.
- At this original release, `/go/skool`, `/go/skool/`, and `/go/skool/index.html` used static redirects that preserved the complete query. The 2026-07-25 verifier remediation replaced that behavior with the fixed-host allowlisting contract above.
- `www` Builders Lab route: HTTP `301` to the apex canonical route.
- Live page contains no form, Encharge integration, Meta Pixel, price, or delivery promise.

## Original validation and buyer read-through

- `npm run build`: passed, 9 pages generated.
- The original attribution assertions included click-ID forwarding. The 2026-07-25 verifier rejected that behavior; the current implementation discards platform click IDs and retains only the narrow Meta UTM allowlist.
- Cloudflare Pages does not support a deploy dry-run flag; the attempted flag was rejected before production deployment.
- Buyer read-through: the page identifies the membership and audience immediately, explains the inspectable-system standard, gives a practical fit decision, keeps AtsKaleSEO supporting, and labels both primary actions as Skool membership review. No internal workflow, provenance, routing, or activation language appears on the public page.
