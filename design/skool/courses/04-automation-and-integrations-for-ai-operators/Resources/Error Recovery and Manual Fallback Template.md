# Error Recovery and Manual Fallback Template

**Use this template to prepare operators for predictable failures, safe recovery, visible escalation, and a complete manual path.**

Complete it before a live pilot. Keep error records minimal and use secure references rather than copying sensitive content.

## Use case and required inputs

- **Workflow and bounded pilot step:**
- **Operator and backup operator:**
- **Business, source, review, and technical owners:**
- **Case reference and visible states:**
- **Approved manual template or process location:**
- **Human approval boundary:**
- **Data, access, and credential boundary:**

## Recovery scenarios and operating rules

### Missing or invalid input

- **Error category or signal:** Missing or invalid input
- **Impact:**
- **First operator action:**
- **Retry, timeout, or limit:**
- **Stop or manual-fallback condition:**
- **Owner or escalation route:**
- **Minimal event record:**

### Duplicate or uncertain prior run

- **Error category or signal:** Duplicate or uncertain prior run
- **Impact:**
- **First operator action:**
- **Retry, timeout, or limit:**
- **Stop or manual-fallback condition:**
- **Owner or escalation route:**
- **Minimal event record:**

### Unavailable or stale source

- **Error category or signal:** Unavailable or stale source
- **Impact:**
- **First operator action:**
- **Retry, timeout, or limit:**
- **Stop or manual-fallback condition:**
- **Owner or escalation route:**
- **Minimal event record:**

### Transformation or quality failure

- **Error category or signal:** Transformation or quality failure
- **Impact:**
- **First operator action:**
- **Retry, timeout, or limit:**
- **Stop or manual-fallback condition:**
- **Owner or escalation route:**
- **Minimal event record:**

### Review delay or rejection

- **Error category or signal:** Review delay or rejection
- **Impact:**
- **First operator action:**
- **Retry, timeout, or limit:**
- **Stop or manual-fallback condition:**
- **Owner or escalation route:**
- **Minimal event record:**

### Delivery or destination failure

- **Error category or signal:** Delivery or destination failure
- **Impact:**
- **First operator action:**
- **Retry, timeout, or limit:**
- **Stop or manual-fallback condition:**
- **Owner or escalation route:**
- **Minimal event record:**

### Unexpected sensitive or out-of-scope content

- **Error category or signal:** Unexpected sensitive or out-of-scope content
- **Impact:**
- **First operator action:**
- **Retry, timeout, or limit:**
- **Stop or manual-fallback condition:**
- **Owner or escalation route:**
- **Minimal event record:**

### Unknown error

- **Error category or signal:** Unknown error
- **Impact:**
- **First operator action:**
- **Retry, timeout, or limit:**
- **Stop or manual-fallback condition:**
- **Owner or escalation route:**
- **Minimal event record:**


- **State after retry is exhausted:**
- **Who may pause the automated path:**
- **Conditions required to resume it:**

## Operator log design

Use a minimal operator log to make the current case state, recovery work, and accountable decision visible. Record only what an authorized operator needs to trace a bounded workflow event; keep the log separate from source content, output content, and credentials.

### Required event fields

- **Event/time:** Record the event and its time with the applicable time zone or agreed time standard.
- **Workflow/case safe ID:** Use an opaque or approved reference that identifies the workflow version and case without copying sensitive case content.
- **State:** Record the visible state before or after the event, such as validating, waiting for input, ready for review, manually handled, stopped, or completed.
- **Trigger:** Record the approved trigger or event category that started or changed the case.
- **Validation result:** Record pass, missing, conflicting, stale, duplicate, out of scope, or another bounded result from the input contract.
- **Error class:** Use the matching recovery scenario category, or `none` when no error applies.
- **Attempt/retry count:** Record the attempt number, retry count, and whether the retry limit was exhausted.
- **Stop/timeout:** Record the stop condition or timeout state, including `none` when neither occurred.
- **Fallback:** Record whether the manual fallback was required, its visible state, and the approved procedure reference.
- **Human owner:** Record the current responsible role or approved owner reference; use a role where a personal name is unnecessary.
- **Decision:** Record the documented operating decision. For a pilot decision, use only **continue pilot, launch within scope, revise, narrow, or pause**. Record a case-response action in the fallback field instead.
- **Resolution:** Record the observed outcome, resolution time, and next state; do not label an uncertain action as resolved.
- **Safe evidence reference:** Use a minimal, approved reference to the reviewed record, test result, or incident route; do not copy its contents into the log.

### Privacy and redaction rules

- Use the workflow/case safe ID and approved references instead of raw requests, prompts, source records, outputs, attachments, or personal data.
- Do not record credentials, passwords, keys, tokens, connection settings, authentication details, or secrets.
- Redact or omit unnecessary names, free text, identifiers, and sensitive categories. Use a role, category, or approved reference when that still supports recovery.
- Give access only through the organization’s approved process, name the retention owner and retention period, and remove or archive entries through that process when they are no longer needed.
- Before sharing a log excerpt for review or a dry run, verify that it is synthetic or sanitized and that its evidence references are safe for the intended audience.

- **Log access owner:**
- **Log retention owner and period:**
- **Approved location for safe evidence references:**
- **Operator who verifies redaction before sharing:**

## Limitations and failure mode

### Manual fallback procedure

1. **Move case to this visible state:**
2. **Verify whether any automated action completed using this reference:**
3. **Retrieve approved inputs from this source:**
4. **Complete the manual bounded step using this template or procedure:**
5. **Send the output to this reviewer and apply these quality checks:**
6. **Deliver or hand off only after authorization:**
7. **Record the result and reason for fallback:**
8. **Escalate sensitive, consequential, or unknown conditions to:**

- **Fallback rehearsal date and result:**
- **Known recovery limitation:**
- **Data that must not be copied into an error record:**

## Human review

- **Operator confirms the current state and follows the first action:**
- **Reviewer checks the manual output before consequential delivery:**
- **Owner who authorizes retry after an uncertain write or send:**
- **Security, privacy, legal, compliance, or safety escalation route when applicable:**
- **Owner who approves resumption after a paused pilot:**
