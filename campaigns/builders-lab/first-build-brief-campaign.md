# Builders Lab: First Build Brief and paid campaign handoff

Status: **planned, not active**
Last updated: 2026-07-25

This is the tracked, paste-ready campaign source for Builders Lab by George Johnson. It does not authorize sending, ad launch, or spend. The public Skool path is always available without email signup.

## Current activation gate

The optional **Get the First Build Brief** form remains hidden and inactive. Do not publish or enable the form until all of these are independently confirmed:

1. The Encharge workspace and sender are approved.
2. A verified George-controlled sender identity and sending domain are active.
3. The double-opt-in confirmation email and Flow are live and tested.
4. The later sequence can enter only a confirmed-recipients segment.
5. Unsubscribe, privacy, physical mailing address, suppression, and test-send checks pass.
6. A George-specific server-side endpoint with a streaming body limit, strict allowlists, honeypot and timing checks, rate limiting, neutral responses, and a server-only secret is deployed and tested.

The current Cloudflare Pages project serves a static Astro site plus one narrow server-side redirect Function. There is no signup endpoint, rate-limit binding, form capture, or server-only Encharge secret on georgebjohnson.com.

Before double opt-in is live, there is no form success state because the form must not be active. After double opt-in is genuinely configured and tested, the approved success copy is: **“Check your inbox to confirm your email address. The brief starts only after you confirm.”**

## Public form copy for later activation

- Eyebrow: `Optional email brief`
- Heading: `Get the First Build Brief`
- Supporting copy: `Three short emails for choosing one inspectable system, mapping its review path, and preparing a sanitized artifact. The email brief is optional and never required to review Builders Lab on Skool.`
- Email label: `Email address`
- Unticked checkbox label: `Yes, email me the three-part First Build Brief and related Builders Lab updates from George Johnson. I can unsubscribe at any time. Joining the email list is optional and is not required to review Builders Lab on Skool.`
- Submit button: `Get the First Build Brief`
- Direct membership link beside the form: `Review Builders Lab on Skool` → `https://georgebjohnson.com/go/skool`
- Privacy link: `https://georgebjohnson.com/privacy/`

Character counts:

- Heading: 25 characters
- Checkbox label: 219 characters
- Submit button: 25 characters

## Structured consent evidence

Only new Builders Lab signups from this form may enter the pending-confirmation path. Do not migrate, retag, import, or reuse Peptide Hacker Lab people.

Store the email plus this server-authored evidence after strict validation:

```json
{
  "email": "validated lowercase email",
  "marketingConsent": true,
  "consentTextVersion": "builders_lab_first_build_brief_v1",
  "consentStatement": "first_build_brief_and_builders_lab_updates",
  "consentCapturedAt": "server-generated ISO-8601 timestamp",
  "sourceSite": "georgebjohnson.com",
  "sourcePath": "/builders-lab/",
  "formPlacement": "builders-lab-first-build-brief",
  "offerSlug": "builders-lab-first-build-brief",
  "utmSource": "meta or null",
  "utmMedium": "paid_social or null",
  "utmCampaign": "builders_lab_direct_membership or null",
  "utmContent": "strictly validated value or null",
  "doiStatus": "pending_confirmation"
}
```

Server-fixed tags when activation is approved: `Builders Lab`, `First Build Brief`, `DOI Pending`, and `builders-lab-first-build-brief`. The DOI Flow, not the browser or initial API request, must move a confirmed person into the confirmed-recipients segment. Never send the sequence to `DOI Pending`. Do not send raw URLs, query strings, IP addresses, or platform click IDs to Encharge.

## Sequence timing

Day 0 begins after double-opt-in confirmation, not after the initial form submission. Day 2 and Day 5 are relative to confirmed entry. Every editorial CTA goes through the local Skool redirect.

## Day 0 — choose one system another person can inspect

- Subject: `Choose one system another person can inspect` (44 characters)
- Preheader: `Start with a real workflow, a clear output, and one narrow finish line.` (71 characters)
- CTA: `Review Builders Lab membership`
- CTA URL: `https://georgebjohnson.com/go/skool`

### Paste-ready body

```text
Hi there,

Your First Build Brief starts with one decision: choose one system worth making inspectable.

Look for a repeated workflow you already understand. It should have a clear source, a record of what happened, a human review point, and an output another person can check.

Write down:

- who uses it;
- what starts it;
- what it produces;
- what must remain a human decision; and
- one small test that would tell you whether it works.

Keep the scope narrow. The goal is evidence you can inspect, not a claim that the whole job is automated.

If you want to develop this kind of work alongside other builders and operators, review Builders Lab on Skool.

Review Builders Lab membership
https://georgebjohnson.com/go/skool
```

## Day 2 — map the path before you automate it

- Subject: `Map the path before you automate it` (35 characters)
- Preheader: `Make the source, record, review, approved handoff, and test visible.` (68 characters)
- CTA: `Review Builders Lab membership`
- CTA URL: `https://georgebjohnson.com/go/skool`

### Paste-ready body

```text
Hi there,

Now map the path your system must make visible:

Source → Record → Review → Approved handoff → Test

Source: Name the material, request, or event that starts the work.

Record: Decide where the input, status, decisions, and output will be saved.

Review: Write the rules, constraints, or examples a person will use to check the result.

Approved handoff: Name who owns the decision and what the system may do next.

Test: Choose one bounded case and define the evidence you will keep.

If any step is vague, keep the work manual there. A visible gap is more useful than hidden automation.

Review Builders Lab membership
https://georgebjohnson.com/go/skool
```

## Day 5 — bring one sanitized artifact and the evidence

- Subject: `Bring one sanitized artifact and the evidence` (45 characters)
- Preheader: `Use a safe example to show what the system did, what failed, and what changes next.` (83 characters)
- CTA: `Review Builders Lab membership`
- CTA URL: `https://georgebjohnson.com/go/skool`

### Paste-ready body

```text
Hi there,

Your next step is to bring one sanitized artifact and the evidence around it.

Use material you are allowed to share. Remove personal, client, account, financial, medical, credential, and other restricted information. Synthetic data is a good choice when the real material is sensitive.

Bring:

- the input or trigger;
- the output;
- the review rule;
- the test result; and
- the next change you would make.

Do not polish away the failure. A failed check can show exactly where the system needs a better record, constraint, review point, or handoff.

If this is how you want to build, review the current Builders Lab membership details on Skool.

Review Builders Lab membership
https://georgebjohnson.com/go/skool
```

## Sender, unsubscribe, and privacy requirements

- From name: `George Johnson`
- From address: use only a provider-approved address on the verified George-controlled domain; exact address remains a dashboard decision.
- Reply-to: a monitored George-controlled mailbox.
- Footer: include the sender’s accurate physical mailing address before any send.
- Unsubscribe: use Encharge’s functional one-click unsubscribe mechanism and honor suppression immediately.
- Privacy: link `https://georgebjohnson.com/privacy/`; update that page before activating the form so it accurately names Encharge, purposes, retention, consent evidence, and rights.
- Sequence eligibility: confirmed-recipients segment only. A person record, form submission, ad lead, or link click is not confirmation.
- Test requirements: verify From, Reply-to, confirmation link, confirmed-segment entry, suppression, unsubscribe, mobile rendering, plain text, and all `/go/skool` links before activation.

## Meta direct-membership pattern

Required paid URL pattern:

```text
https://georgebjohnson.com/builders-lab/?utm_source=meta&utm_medium=paid_social&utm_campaign=builders_lab_direct_membership&utm_content=<approved_creative_slug>
```

- `utm_source`: exact value `meta`
- `utm_medium`: exact value `paid_social`
- `utm_campaign`: exact value `builders_lab_direct_membership`
- `utm_content`: optional lowercase creative slug matching `^[a-z0-9._~-]{1,100}$`
- `utm_term`: optional lowercase audience/test slug matching the same pattern

The Builders Lab page and `/go/skool` Function preserve those five lowercase keys only when the three fixed Meta values match exactly and no allowlisted key is duplicated. The one-hop `302` always uses `https://www.skool.com/local-seo-engineering-7047/about`. It drops platform click IDs, arbitrary parameters, uppercase variants, malformed or overlong values, duplicates, control characters, and destination overrides such as `next` or `url`. No platform click identifier is collected, stored, or forwarded by the site. Untagged and non-Meta links still reach the fixed Skool page without query parameters.

### Paste-ready Meta ad copy

Primary text (250 characters):

> A useful AI system should show where information came from, what was recorded, who reviewed it, what was approved, and how it was tested. Builders Lab is a working membership for builders and operators developing practical systems people can inspect.

Headline (38 characters):

> Build inspectable practical AI systems

Description (45 characters):

> Review current Builders Lab details on Skool.

CTA button: `Learn more`

### Meta lead consent copy

Use only if a separate Meta lead form is later approved and connected. It must not replace the direct membership destination.

> By selecting the email consent option and submitting, you agree that George Johnson may email you the three-part First Build Brief and related Builders Lab updates. Consent is optional, is not required to review Builders Lab on Skool, and can be withdrawn at any time using the unsubscribe link. See the Privacy Policy: https://georgebjohnson.com/privacy/

Do not import a Meta lead unless its record includes the approved consent text/version, capture timestamp, source fields, and a pending-confirmation state. A Meta lead must complete the same double-opt-in path before the sequence begins.

## GA4 event definitions

| Event | Trigger | Allowed parameters | Must not mean |
| --- | --- | --- | --- |
| `builders_lab_view` | Builders Lab page loads | `page_path=/builders-lab/` | A member or lead |
| `skool_cta_click` | A tracked `/go/skool` link is activated | `cta_placement`, `link_url=/go/skool` | Membership, purchase, or join |
| `email_optin_started` | First interaction with an active optional form | `form_name`, `source_path` | Submission or consent |
| `email_optin_submitted` | Server accepts a valid consented request into DOI pending | `form_name`, `source_path`, `doi_status=pending_confirmation` | Confirmation or membership |

Never emit a membership event from a click. Never put email addresses, raw queries, or personal or platform click identifiers into GA4 event parameters.

## Meta Pixel and connection status

No Meta Pixel is installed. Do not install one without an approved Pixel ID plus a privacy, consent, and Content Security Policy review. No ad has been launched and no spend is authorized. The Meta-to-Encharge connection is not active.

## Encharge workspace snapshot and required human actions

API checks on 2026-07-24 found an empty active workspace named `Peptide Hacker Lab`: zero people, zero native forms, zero saved emails, and zero broadcasts. The documented API exposes account read, people/tags, email-domain, email, and broadcast capabilities, but no safe account-rename, sender-approval, Meta-connection, native DOI configuration, or Flow-configuration endpoint was found.

The documented domain API was used to add `georgebjohnson.com` and the required DNS records. Public DNS resolves all expected records, but Encharge still reports the domain as `pending`; sender/domain approval is not complete. The old PHL domain was removed from the workspace through the documented API.

Complete these actions in authenticated dashboards before enabling collection or sending:

1. Encharge account settings: rename the workspace from `Peptide Hacker Lab` to `Builders Lab` and confirm the correct owner/timezone/site fields.
2. Encharge email settings: create and verify the exact From identity and Reply-to address after the George sending domain is verified.
3. Encharge account/provider approval: confirm the workspace and sender are approved for sending.
4. Encharge Forms/Flows: build the confirmation email and DOI Flow; tag initial records `DOI Pending`; move only clicked confirmations into a named confirmed-recipients segment.
5. Encharge sequence: paste and test Day 0, Day 2, and Day 5; connect entry only to the confirmed segment; add unsubscribe and physical-address footer.
6. Encharge integrations: connect Meta only after field mapping proves that approved consent and UTM fields are retained and raw click/query IDs are excluded.
7. Meta Events/Ads Manager: if later approved, configure the approved campaign pattern and event mapping; do not infer membership from `skool_cta_click`.
8. Cloudflare Pages: add the server-only Encharge secret and a rate-limit binding only when the hardened endpoint is implemented, tested, and ready to activate.

No sending is permitted until a confirmed-recipients segment is operational and independently tested.
