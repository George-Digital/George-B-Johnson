# Builders Lab: First Build Brief and paid campaign handoff

Status: **planned, not active**
Last updated: 2026-07-27

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

Initial-capture tags when activation is approved: `Builders Lab`, `First Build Brief`, `DOI Pending`, and `builders-lab-first-build-brief`. `DOI Confirmed` is reserved for a distinct provider-confirmed DOI transition. The browser, initial API request, form-submission event, ordinary tracked link click, and pending path must never set `DOI Confirmed` or `doiStatus=confirmed`. A valid confirmation transition must remove `DOI Pending`, add `DOI Confirmed`, and set `doiStatus=confirmed` only if Encharge documents a scanner-safe confirmation signal. Never send the sequence to `DOI Pending`. Do not send raw URLs, query strings, IP addresses, or platform click IDs to Encharge.

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
- From address: `george@georgebjohnson.com`, using the verified George-controlled domain.
- Reply-to: `george@georgebjohnson.com`, which is monitored through the approved forwarding route.
- Footer: include the sender’s accurate physical mailing address before any send.
- Unsubscribe: include Encharge’s global-unsubscribe and preference-center merge tags and honor suppression immediately. Encharge documents a provider-generated unsubscribe header only for senders with enough reputation; do not claim that every visible footer link or every account has one-click behavior.
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
- Recognized click-ID keys: `fbclid`, `gclid`, `gbraid`, `wbraid`, `msclkid`, `ttclid`, and `li_fat_id`; values must match `^[A-Za-z0-9._~-]{1,256}$`

The Builders Lab page and `/go/skool` Function use one shared sanitizer. They forward the optional values and recognized click IDs only with the complete valid three-key Meta campaign. Identical repeated allowlisted values collapse to one canonical value. A conflicting or non-approved required UTM returns the fixed Skool URL without attribution; a conflicting, malformed, or overlong optional UTM or click ID removes only that dimension and retains the other valid attribution values. The one-hop `302` always uses `https://www.skool.com/local-seo-engineering-7047/about`. It drops arbitrary parameters, mixed-case key variants, control characters, unknown click-ID keys, and destination overrides such as `next` or `url`. The site application does not persist click IDs or include them in GA4 event parameters; it forwards only validated allowlisted values to the fixed Skool destination. Untagged and non-Meta links still reach that destination without query parameters.

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

## Encharge workspace snapshot — 2026-07-27

The current documented Encharge REST API was used for the approved saved-email reconstruction and read-only verification. No private or speculative app endpoint was called. The workspace reports:

- account name: `Builders Lab`
- account status: `active`
- timezone: `America/Phoenix`
- site: `https://georgebjohnson.com/`
- account people count: `0`
- full documented people-list count: `0`
- sending domain: `georgebjohnson.com`, status `verified`; all seven required returned DNS checks are valid, the eighth check is optional DMARC and returned false, and the domain has no reported error

The documented REST API has no current list/read operation for native Forms or Flows. Their old zero-count snapshot must not be treated as current proof.

### Documented API boundary

The Encharge developer page points to the ReDoc REST reference as the recommended API reference. That current ReDoc specification documents the following safe account-asset mutations:

| Asset | Documented creation access | Safe disposition |
| --- | --- | --- |
| Email template | Yes: `POST /v1/emails` creates a saved template without sending; `PATCH /v1/emails/{id}` updates or archives one | Four active canonical Simple-editor templates now pass current/latest/editor parity; four superseded hazards are renamed and archived, not deleted |
| Native Form | No documented REST create/update path found | Dashboard-only; none created, attached, published, or activated in this reconstruction |
| Flow | No documented REST create/update path found | Dashboard-only; none created, attached, or activated in this reconstruction |
| Account tag | Yes: `POST /v1/tags-management` | Five inert account tags exist; no person was tagged in this reconstruction |
| Custom person field | Yes: `POST /v1/fields` | Twelve Builders Lab evidence fields exist; the default `marketingConsent` field already existed |
| Dynamic segment | Yes in the recommended ReDoc: `POST /v1/segments` | One empty, deny-by-default confirmed-recipient segment exists |
| DOI configuration | No documented REST path found | Dashboard-only; not configured |

The developer page's separate raw-OpenAPI download currently serves an older, smaller definition that omits several operations present in the recommended ReDoc. Mutations were limited to operations visible in the recommended ReDoc UI. No Broadcast, send, Flow, Form, person, import, webhook, integration, or delete mutation was used.

The recommended OpenAPI schema was re-fetched on 2026-07-27. `POST /v1/emails`, `PATCH /v1/emails/{id}`, and `PATCH /v1/emails/{id}/versions/latest` accept `type`, `html`, and an optional `editor` value. `editor` remains described only as Encharge's internal UI representation and has no published properties or format; the create schema still has no `editorMode`, `builder`, or documented Simple-editor selector. Supplying an invented editor object remains unsafe.

### Operator-created Simple-editor base evidence

Before any mutation, operator-created base email `472872` was inspected through documented `GET /v1/emails/{id}` and version-history operations. It provided a safe, exact UI-created representation without requiring an invented schema:

- current `email.editor` had exactly two returned keys: `type` and `state`
- `editor.type` was exactly `richtext`
- `editor.state` was byte-identical to current `email.html`
- versions `1` / record `357893` and `2` / record `357895` had the same raw/editor parity
- version `2` had `changeReason=content_updated`, providing an operator UI save-and-read round-trip for that exact representation
- all returned versions had `metadata.isSelected=false`

The reconstruction reused only that exact two-property representation and `richtext` type, setting `state` to each approved Simple-editor body and setting documented top-level `html` to the same byte-identical value. No extra editor key, private endpoint, guessed mode value, or visual-editor schema was used.

### Canonical Simple-editor email assets

All four current canonical assets are active, standalone saved templates. Current `email.html`, latest-version `data.html`, current `editor.state`, and latest-version `data.editor.state` are byte-identical for each asset. Every current/latest editor object has exactly `type=richtext` plus `state`; no version is selected in returned history.

| Email | Encharge ID | Latest version / record | Selected-version evidence | Current/latest/editor/archive evidence |
| --- | ---: | --- | --- | --- |
| `BUILDERS LAB — First Build Brief — Day 0` | `472872` | `3` / `357905`; `changeReason=content_updated` | None; every returned version has `isSelected=false` | Raw/latest/current editor/latest editor pass; `archived=false`; `isStandalone=true` |
| `BUILDERS LAB — First Build Brief — Day 2` | `472875` | `2` / `357910`; `changeReason=content_updated` | None; every returned version has `isSelected=false` | Raw/latest/current editor/latest editor pass; `archived=false`; `isStandalone=true` |
| `BUILDERS LAB — First Build Brief — Day 5` | `472876` | `2` / `357911`; `changeReason=content_updated` | None; every returned version has `isSelected=false` | Raw/latest/current editor/latest editor pass; `archived=false`; `isStandalone=true` |
| `BUILDERS LAB — First Build Brief — Confirm subscription` | `472877` | `2` / `357912`; `changeReason=content_updated` | None; every returned version has `isSelected=false` | Raw/latest/current editor/latest editor pass; `archived=false`; `isStandalone=true` |

Day 0's immutable base history versions `1` and `2` retain the operator's pre-reconstruction starter body. They are unselected and are not current/latest/editor surfaces. Current version `3`, its current editor state, and all selectable evidence are clean. The three API-created replacements contained approved content from version `1`; their version `2` records reflect the final canonical-name update with the same approved raw/editor content.

Each canonical asset independently passed all of these documented-API checks:

- exact tracked subject and preheader
- `George Johnson` From and Reply-to names
- `george@georgebjohnson.com` From and Reply-to addresses
- empty CC/BCC
- communication category ID `322189`
- exact approved visible source copy
- exact editorial CTA `https://georgebjohnson.com/go/skool`, or only `{{person.confirmationLink}}` as the confirmation email's primary CTA
- `https://georgebjohnson.com/privacy/`, `{{account.mailingAddress}}`, `{{person.unsubscribeAllURL}}`, and `{{person.managePreferencesURL}}`
- no unexpected or invalid merge token
- no starter phrase in current raw, latest, current editor, latest editor, or selected-version surfaces
- API-returned CAN-SPAM compliance `approved`
- `archived=false` and `isStandalone=true`

The documented `GET /v1/emails/{id}/versions/selected` operation still returns provider HTTP `422` because the implementation validates the literal path segment `selected` as a numeric version. Version history is the available documented selection evidence and marks no replacement version selected.

### Archived visual-editor hazards

Only after a pre-archive pass succeeded for all four replacements, the four hazardous IDs were renamed and archived through documented `PATCH /v1/emails/{id}` operations. They were not deleted.

| Old Encharge ID | Archived name | Final version / record | Archive evidence |
| ---: | --- | --- | --- |
| `472553` | `ARCHIVED — EDITOR HAZARD — BUILDERS LAB — First Build Brief — Day 0` | `7` / `357906` | `archived=true`; `isStandalone=true` |
| `472554` | `ARCHIVED — EDITOR HAZARD — BUILDERS LAB — First Build Brief — Day 2` | `6` / `357907` | `archived=true`; `isStandalone=true` |
| `472555` | `ARCHIVED — EDITOR HAZARD — BUILDERS LAB — First Build Brief — Day 5` | `6` / `357908` | `archived=true`; `isStandalone=true` |
| `472564` | `ARCHIVED — EDITOR HAZARD — BUILDERS LAB — First Build Brief — Confirm subscription` | `2` / `357909` | `archived=true`; `isStandalone=true` |

A final readback of all eight controlled IDs shows exactly one active canonical asset for each tracked email and all four hazards archived. The documented API does not provide an all-email listing, so this is exact for the eight known and controlled IDs rather than a claim based on an undocumented workspace-list endpoint.

### Reconstruction and independent verification result

The safe sequence was: create and verify Day 2, Day 5, and confirmation replacements; convert base `472872` to Day 0; verify all four together; archive the four old hazards; remove temporary replacement prefixes; then perform a fresh independent read-only check.

The final independent pass verified current/latest/editor parity, selection history, exact visible copy, exact links and merge-token sets, no current/latest/selected starter content, compliance, canonical names, archive state, and standalone state for every controlled ID. Account `peopleCount` and the complete documented people list both remained zero.

No send endpoint was called. Saved-email responses expose no lifetime send counter, so zero sends is an operation/state assertion rather than a provider send-metric read. No Form, Flow, Broadcast, person, or attachment operation was called. All replacements return `isStandalone=true`; because the documented API cannot enumerate native Forms or Flows, unattached status is supported by creation/operation history and standalone state rather than a provider attachment-list response.

### Provider documentation reviewed

Current terminology and safeguards were checked on 2026-07-27 against:

- [API Documentation](https://docs.encharge.io/api-documentation) and its recommended [ReDoc REST reference](https://app-encharge-resources.s3.amazonaws.com/redoc.html)
- [Double Opt-in](https://help.encharge.io/en/article/double-opt-in-14ncbnq/) — updated 2026-04-14
- [Native Forms](https://help.encharge.io/en/article/native-forms-sd5ief/) — updated 2026-05-04
- [Create a New Email](https://help.encharge.io/en/article/create-a-new-email-em1pt1/) — updated 2026-01-26
- [Create and Manage Custom Fields](https://help.encharge.io/en/article/create-and-manage-custom-fields-19w6lg8/) and [Contact Tags](https://help.encharge.io/en/article/contact-tags-1xefu2r/)
- [Create a Segment](https://help.encharge.io/en/article/create-a-segment-ykpylx/) and [Entered Segment](https://help.encharge.io/en/article/trigger-entered-segment-1wdhks1/)
- [Send Email](https://help.encharge.io/en/article/action-send-email-gr83ma/), [Wait](https://help.encharge.io/en/article/action-wait-1khk84l/), [Add Tag](https://help.encharge.io/en/article/action-add-tag-1v9tbnl/), [Remove Tag](https://help.encharge.io/en/article/action-remove-tag-ptz9yz/), and [Change Field](https://help.encharge.io/en/article/action-change-field-9htfu4/)
- [Insert Unsubscribe Link](https://help.encharge.io/en/article/insert-unsubscribe-link-1ubjurz/), [Unsubscribing from Emails and Email Categories](https://help.encharge.io/en/article/unsubscribing-from-emails-and-email-categories-2tyntt/), [Unsubscribed People](https://help.encharge.io/en/article/unsubscribed-people-a4aw5y/), and [How to Set Your Mailing Address](https://help.encharge.io/en/article/how-to-set-your-mailing-address-1trm19x/)

These inert account tags now exist with zero people attached:

- `Builders Lab`
- `First Build Brief`
- `DOI Pending`
- `DOI Confirmed`
- `builders-lab-first-build-brief`

These evidence fields now exist with the exact API names used by the approved evidence object:

- existing default: `marketingConsent`
- created: `consentTextVersion`, `consentStatement`, `consentCapturedAt`, `sourceSite`, `sourcePath`, `formPlacement`, `offerSlug`, `utmSource`, `utmMedium`, `utmCampaign`, `utmContent`, and `doiStatus`

Segment `Builders Lab — Confirmed First Build Brief recipients` (ID `1252463`) exists with all of these conditions:

1. has tag `DOI Confirmed`
2. `Unsubscribed` is `false`
3. has tag `Builders Lab`
4. has tag `First Build Brief`
5. has tag `builders-lab-first-build-brief`

The segment returned zero people and the account still returned zero people after all mutations. The segment intentionally does not use `doiStatus` or `marketingConsent` as conditions yet: Encharge's documented segment API accepted those fields but its documented people-in-segment read then returned a provider `500` saying the corresponding column did not exist. The segment was immediately changed to the working tag-plus-suppression conditions above. Treat custom-field segment conditions as provider-blocked until Encharge resolves or documents the correct behavior.

## DOI decision and link-scanner risk

Use Encharge Native Forms' built-in **Double Opt-In** feature if the provider can answer the confirmation-state questions below. Encharge's April 2026 help article calls this the native DOI method and requires `{{person.confirmationLink}}` in the confirmation email.

Do **not** use the article's alternative Flow pattern that defines consent as an **Email Activity** click on a normal URL. The current help article does not guarantee that tracked-link activity excludes malware scanners, corporate Safe Links systems, privacy proxies, deliverability crawlers, or other automated fetches. An automated fetch could therefore be mistaken for human confirmation.

The native `{{person.confirmationLink}}` is the safest provider-supported option found because it is a purpose-built DOI token rather than a generic click metric. However, the current Encharge documentation still does not state that this URL is scanner-resistant, requires a second intentional action, ignores automated GET requests, or exposes a distinct confirmation event/field that a Flow can use. Native DOI therefore remains **blocked from production activation** until Encharge support confirms both:

1. how the native confirmation link prevents or handles link-scanner false confirmations; and
2. the exact, segmentable event/field/action that proves native DOI completion without relying on ordinary email-click tracking.

Also note that Encharge documents native Forms as **active by default when created**. The dashboard flow below immediately deactivates the unshared form, but there is a short provider-created active window. If even that unshared window is unacceptable, stop and ask Encharge support how to create a Form in a deactivated state.

## Single first dashboard action

**Open `https://app.encharge.io/account/info`, click the value in `Mailing Address`, enter or verify George's accurate physical mailing address, and click `Save`.** Do this before opening, testing, or attaching any email. The API cannot verify that account setting, and every draft currently relies on `{{account.mailingAddress}}`.

## Exact Encharge dashboard handoff

Do not turn on a Form or Flow, use **Send test**, or submit an address while completing the draft-build steps below. The later self-test is a separate, explicitly controlled window.

### 1. Verify the four canonical emails before any other dashboard work

Use only these independently verified Simple-editor IDs: Day 0 `472872`, Day 2 `472875`, Day 5 `472876`, and confirmation `472877`. IDs `472553`, `472554`, `472555`, and `472564` are archived editor hazards; do not restore, attach, or select them.

Before any later Form/Flow attachment, visually confirm each canonical asset still opens as a Simple-editor email and shows **Marketing Emails**, `george@georgebjohnson.com` From/Reply-to, `George Johnson` names, the tracked preheader, empty CC/BCC, the exact approved body/CTA, `{{account.mailingAddress}}`, privacy, global unsubscribe, and preferences. The API representation is round-trip safe, but this reconstruction intentionally did not send a test. Do not click **Send test** outside the later controlled test window.

### 2. Verify consent fields and tags

1. Open **Manage → Custom Fields** or `https://app.encharge.io/settings/fields`.
2. Search for each exact API name in the field list above. Confirm `consentCapturedAt` is **Date and time**, `doiStatus` is **Select**, `marketingConsent` is **True or False**, and the remaining Builders Lab fields are **Text**.
3. Do not add the technical evidence fields as visible native-form inputs. The source, path, offer, timestamp, text version, DOI state, and UTM values must be fixed or strictly validated by a trusted provider/server action, not supplied by the visitor.
4. Open **Manage → Tags** or `https://app.encharge.io/settings/tags`.
5. Confirm the five exact tags above exist. Never select `DOI Confirmed` in a Form's initial submit actions.

### 3. Build the deactivated native Form draft

1. Open **Forms** in the top navigation or `https://app.encharge.io/forms`.
2. Click the blue **+** button.
3. Name the Form `Builders Lab — First Build Brief DOI`; leave Folder blank unless a Builders Lab folder already exists; click **Create Form**.
4. Because Encharge documents new Forms as active by default, immediately open **Integrate Form** and deactivate the Form. Return to **All Forms** and verify the status dot is gray, then reopen it. Do not copy, visit, or share its public Link and do not embed its code.
5. In **Edit Form → Fields**, keep the required **Email** field and remove any unapproved default field such as Full Name.
6. Set the top text to the approved heading and supporting copy:
   - `Get the First Build Brief`
   - `Three short emails for choosing one inspectable system, mapping its review path, and preparing a sanitized artifact. The email brief is optional and never required to review Builders Lab on Skool.`
7. Set the Email label to `Email address`.
8. Add **Marketing consent** and use the exact unticked checkbox label from **Public form copy for later activation** above. Confirm the visitor must check it before submission. Encharge documents that this control sets `Unsubscribed=false` and all email categories to `Opted in`; this is consent evidence but is not DOI completion.
9. Set the button to `Get the First Build Brief`.
10. Set the **Success message** text to `Check your inbox to confirm your email address. The brief starts only after you confirm.`
11. Still in **Fields**, scroll to **Double Opt-In** and enable **Enable double opt-in** on the deactivated Form draft.
12. Click **Choose confirmation email**. Select only the independently verified Simple-editor confirmation email ID `472877`. Do not select archived hazardous ID `472564`.
13. Confirm its subject is `Confirm your First Build Brief` and its preview text is `Confirm your email address before the three-part brief begins.` Confirm Category, From, Reply-to, mailing address, privacy, global unsubscribe, and preferences exactly as in step 1.
14. Use this minimal confirmation body:

```text
Hi there,

Please confirm your email address to receive the three-part First Build Brief and related Builders Lab updates from George Johnson.

Confirm my email address

If you did not request this email, do not confirm. The brief will not start.

George Johnson
```

15. Link only `Confirm my email address` to `{{person.confirmationLink}}`. Do not substitute a normal tracked URL. Save and close the confirmation email, then select it for the Form.
16. For **Confirmation Redirect URL**, use Encharge's provider-hosted default confirmation page. Do not point it to the homepage and do not invent a public confirmation route. If the dashboard requires a custom URL instead of offering the provider default, stop and leave the Form deactivated.
17. In **Options**, use **Show success page**, keep **Redirect to page** off, keep **Send internal email** off, and keep the general **Send email to contact** action off; the built-in Double Opt-In email is the only contact email at this stage.
18. In **Options → Add tag**, select only `Builders Lab`, `First Build Brief`, `DOI Pending`, and `builders-lab-first-build-brief`. Do not select `DOI Confirmed`.
19. Return to **Integrate Form** and verify the Form remains deactivated. Do not copy its embed code or public Link into the site.

### 4. Obtain the missing provider confirmation contract

Send Encharge support this exact question before building a confirmation-transition Flow:

> For a Native Form using built-in Double Opt-In and `{{person.confirmationLink}}`, do automated link scanners, Safe Links systems, privacy proxies, or security crawlers confirm a subscription merely by requesting the URL? Is a second human action or bot/scanner filtering enforced? After a real confirmation, what documented event, person field, tag action, or Flow trigger uniquely represents native DOI completion? Are Form submit tags/actions applied before or only after confirmation?

Do not create a Flow based on **Email Activity → clicked**, a clicked specific URL, opens, page visits, or a generic Form submission. None of those proves human DOI under the current documentation.

Only after Encharge identifies a distinct scanner-safe native-confirmation signal may a deactivated confirmation-transition Flow be drafted. Its confirmed branch must, in this order:

1. remove tag `DOI Pending`;
2. add tag `DOI Confirmed`; and
3. change `doiStatus` to `confirmed`.

The initial Form/API path may set only `doiStatus=pending_confirmation`. If Encharge cannot provide a distinct scanner-safe signal, the automated email sequence must remain off and the public form must remain hidden.

### 5. Verify the deny-by-default confirmed-recipient segment

1. Open **People**.
2. Select `Builders Lab — Confirmed First Build Brief recipients`.
3. Click **Show Conditions**.
4. Verify the five conditions match the API-created segment table above and that the count is `0` before self-test.
5. Do not broaden the segment to **Subscribers**, **All People**, Marketing Emails `Opted in`, Form submitted, email clicked, or `DOI Pending`. Encharge's category documentation says both `Opted in` and `Not opted in or out` can receive; a category alone is not this campaign's affirmative DOI gate.

### 6. Draft the editorial sequence Flow and keep it off

1. Open **Flows**.
2. Click **Add**, choose **Start blank**, and name the Flow `Builders Lab — First Build Brief sequence — DRAFT`.
3. Add **Entered Segment** and select `Builders Lab — Confirmed First Build Brief recipients`.
4. Select **People who enter this segment in the future**. Do not include people currently in the segment.
5. Build three paths from the trigger so timing is relative to confirmed segment entry:
   - **Send Email** → select `BUILDERS LAB — First Build Brief — Day 0` (ID `472872`).
   - **Wait** for `2 days` → **Send Email** → select `BUILDERS LAB — First Build Brief — Day 2` (ID `472875`).
   - **Wait** for `5 days` → **Send Email** → select `BUILDERS LAB — First Build Brief — Day 5` (ID `472876`).
6. On every **Send Email** step, leave **People can receive email more than once** off and **Track replies** off. Reply tracking would replace the approved Reply-to and Encharge warns it can reduce deliverability.
7. Confirm there is no Broadcast, no All People/Subscriber trigger, no click/open branch, and no unconnected Send Email step.
8. Leave the Flow switch **Off**. Flows auto-save; do not click the On switch.

### 7. Suppression and unsubscribe checks

1. Open **Settings → Categories** or `https://app.encharge.io/settings/communication-categories` and confirm **Marketing Emails** is active. Do not use **Transactional Emails** for this campaign.
2. Confirm each editorial and confirmation email has a visible global unsubscribe link and preference-center link plus `{{account.mailingAddress}}`.
3. Keep the default **Unsubscribed** segment. A person with `Unsubscribed=true`, an invalid address, a spam report, or a provider suppression/bounce must not receive later sequence emails.
4. Do not manually change `Unsubscribed` back to false except within a separately approved remediation for a documented user request.
5. Do not enable Broadcast reply tracking, create a Broadcast, schedule a send, or activate either Flow.
6. Treat Encharge's provider-generated unsubscribe header as additional protection, not as a guaranteed account-wide feature; its help article says the header's one-click presentation depends on sender reputation.

## Controlled self-test plan — operator address only

This plan is for a later explicit test window. It is not authorization to run it now.

1. Prerequisites: accurate mailing address saved; sending domain and From identity verified; Encharge has answered the scanner/confirmation questions; the deactivated native Form, confirmation-transition Flow, confirmed segment, three email templates, and deactivated sequence Flow have been reviewed; no public embed exists.
2. Use only the operator's existing address. Do not use a list, import, seed audience, Peptide Hacker Lab person, colleague, or ad lead.
3. Send dashboard **Send test** messages for the confirmation template and each of the three editorial templates only to the operator. Check From, Reply-to, subject, preview text, visible physical address, privacy, mobile, desktop, plain-text fallback, and the `/go/skool` CTA. Do not infer DOI or suppression from a test-email click.
4. Open the deactivated native Form's provider Link only for the controlled window, activate the Form, and submit the operator address once with Marketing consent checked. This is the only permitted person creation in the future test.
5. Do **not** click the confirmation link immediately. Allow the operator's normal mail-security/link-scanning window to pass. Verify the operator is not in the confirmed segment, has no `DOI Confirmed` tag, has received none of Day 0/2/5, and remains `DOI Pending`. If confirmation occurs before the human click, stop: the scanner test failed.
6. Manually click the purpose-built `{{person.confirmationLink}}` once. Verify the provider confirmation page, the documented native-confirmation signal, removal of `DOI Pending`, addition of `DOI Confirmed`, `doiStatus=confirmed`, and entry into the confirmed segment. A generic email-click event is not acceptance evidence.
7. Activate the editorial sequence Flow only for this test after confirmed-segment entry is proven. Verify Day 0 reaches only the operator. On the Day 2 Wait step, use the documented **People → People that are here → three dots → Skip waiting** control only for the operator, then inspect the delivered Day 2 message.
8. Use Day 2's **Unsubscribe from all emails** link and complete the provider confirmation page. Verify the person's `Unsubscribed` field becomes true and the default **Unsubscribed** segment includes the operator. Skip the operator's Day 5 Wait only to confirm the Day 5 Send Email is suppressed; Day 5 was already rendered with **Send test** in step 3 and must not arrive through the Flow.
9. Turn the sequence Flow, confirmation-transition Flow, and Form off immediately after the test. Keep the public site form hidden. Do not manually resubscribe the operator as part of this test.
10. Record timestamps and screenshots for pre-click pending state, post-click confirmed state, confirmed-segment entry, From/Reply-to/footer rendering, CTA destination, unsubscribe state, suppression, and all final Off statuses.

## Remaining activation blockers

- Encharge must document scanner-safe behavior and a distinct native DOI completion signal.
- The four canonical Simple-editor assets pass documented-API parity and the old editor hazards are archived. Dashboard visual rendering, mobile/plain-text review, and controlled test sends remain intentionally unperformed until the later approved self-test window.
- The native Form's active-by-default creation behavior needs operator acceptance or provider guidance.
- The custom-field segment API issue needs provider resolution before `doiStatus` or `marketingConsent` can be used as segment conditions.
- The accurate mailing address must be set and visually rendered.
- The privacy page still must accurately name Encharge, purposes, retention, consent evidence, and rights.
- The hardened George-specific server endpoint and rate-limit binding remain required by the current activation gate if the public site form is used.
- The controlled operator-only self-test and an independent verification must pass.

No sending, Flow activation, Form publication, contact creation, public-site edit, Meta connection, ad launch, or spend is authorized.
