# Operating SOP and Support Template

Copy this document for the current operating version. It describes the common path and its boundaries. Keep sensitive evidence in approved systems rather than pasting it into this template.

## Operating SOP

- **System name:**
- **Current version or approved instruction reference:**
- **Operating owner:**
- **Purpose and user:**
- **Trigger:**
- **Output and next action:**
- **Included common path:**
- **Excluded cases:**
- **Approved input location:**
- **Authoritative source or policy location:**
- **Privacy and access boundary:**
- **Manual fallback:**

| Step | Operator action | Required input or source | AI-assisted action, if any | Human check or decision | Record to keep | If incomplete, conflicting, or out of scope |
| --- | --- | --- | --- | --- | --- | --- |
| 1 |  |  |  |  |  |  |
| 2 |  |  |  |  |  |  |
| 3 |  |  |  |  |  |  |
| 4 |  |  |  |  |  |  |
| 5 |  |  |  |  |  |  |

## Review gate

- **Reviewer role:**
- **What the reviewer verifies against approved sources:**
- **Required output elements:**
  -
  -
  -
- **Ready to use when:**
- **Revise when:**
- **Stop and escalate when:**
- **Final authorized decision-maker:**

## Support plan

| Issue type | Examples | First contact and channel | Safe evidence to include | Expected review window or event | Manual fallback | Escalate immediately when |
| --- | --- | --- | --- | --- | --- | --- |
| Routine how-to or access question |  |  |  |  |  |  |
| Output quality or missing information |  |  |  |  |  |  |
| Source conflict or stale reference |  |  |  |  |  |  |
| Change request |  |  |  |  |  |  |
| Privacy, safety, authorization, or consequential concern |  |  |  |  |  |  |

## Safe issue record

- **Date and system version:**
- **Issue category:**
- **Safe case reference or sanitized summary:**
- **Expected behavior:**
- **Actual behavior:**
- **Impact on user or recipient:**
- **Fallback or stop action taken:**
- **Owner and next action:**
- **Decision or resolution:**
- **Change-log reference, if relevant:**

## Applied prompt: turn a workflow map into an SOP draft

**Use case:** You have a mapped common path and want a first SOP draft that makes sources, review, and exceptions visible.

**Inputs:** Trigger; user; approved sources; step-by-step workflow map; required output; human-review rules; data boundary; known edge cases; support and escalation routes.

**Paste-ready prompt:**

> Act as an operations documentation assistant. Convert the supplied workflow map into a concise operating SOP. State the trigger, scope, exclusions, approved inputs, authoritative sources, and manual fallback first. Write each common-path step as an observable action. For every AI-assisted step, state what the human operator or reviewer must still verify or decide. Add a clear response for missing information, source conflicts, sensitive data, and out-of-scope cases. Do not create new policy, permission, escalation contact, or approval authority. Label missing details as “Owner must confirm.” Finish with a review gate and a safe issue-report format.

**Expected output:** A reviewable SOP draft with observable steps, human decisions, and exception handling.

**Failure mode:** The draft may flatten specialized judgment into generic steps or omit a real local escalation path.

**Human review:** The operating owner tests the common path. Domain, source, privacy, and authorized reviewers confirm their portions before the SOP becomes current.
