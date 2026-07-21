# Week 3 — Errors, Recovery, and Visibility anchor video script

**Embed on:** `Week 3 — Errors, Recovery, and Visibility/01 - Classify expected errors.md`

**Runtime:** 6–8 minutes

**Outcome:** Members can classify predictable errors, set safe retry, timeout, and run-limit rules, rehearse a manual fallback, and design minimal logs that let an authorized operator trace a case and decide what happens next.

## What to demonstrate on screen

Use a **sanitized, synthetic** `DEMO-104` case and fictional case references only. Keep the bounded workflow as internal request → draft brief → lead review; no external delivery or real connection is needed.

- Open the Week 3 lessons:
  - `Week 3 — Errors, Recovery, and Visibility/01 - Classify expected errors.md`
  - `Week 3 — Errors, Recovery, and Visibility/02 - Set retries, timeouts, and limits.md`
  - `Week 3 — Errors, Recovery, and Visibility/03 - Create a manual fallback.md`
  - `Week 3 — Errors, Recovery, and Visibility/04 - Log what operators need to see.md`
- Open `Resources/Error Recovery and Manual Fallback Template.md`. Demonstrate fictional rows for missing input, duplicate or uncertain prior run, unavailable source, quality failure, review delay, unexpected sensitive content, and unknown error.
- Show a static recovery decision diagram: detect → verify case reference → retry only a safe temporary read once → otherwise wait visibly, pause, route, or use manual fallback. Include a volume/run cap and retry-exhausted state.
- In the manual-fallback section of `Resources/Error Recovery and Manual Fallback Template.md`, show the fictional procedure: move to manually handled; verify no draft exists; retrieve approved inputs; use approved manual template; send to reviewer; record result; escalate sensitive/unknown conditions.
- Open the `## Operator log design` section in `Resources/Error Recovery and Manual Fallback Template.md`. Show a small synthetic row with event/time, workflow/case safe ID, state, trigger, validation result, error class, attempt/retry count, stop/timeout, fallback, human owner, decision, resolution, and a safe evidence reference. Apply its privacy/redaction rules and connect the state to `Resources/Integration and Data Flow Map.md`.
- Open `Resources/Pilot and Go Live Checklist.md` only to preview that a dry run will test errors, fallback, and visibility with safe cases next week.

Do not show a production error dashboard, incident ticket, source content, authentication screen, secret, credential, personal data, confidential case, or real log entry.

## Teleprompter script

[ON SCREEN: Week 3 title and “a controlled pause is an operating outcome.”]

This week, we design for the normal fact that things go wrong. Inputs arrive incomplete. Sources become unavailable. A review stalls. A connection reports uncertainty. An output fails a quality check. The goal is not to make every error disappear. The goal is to make the right response visible and repeatable.

[ON SCREEN: `Resources/Error Recovery and Manual Fallback Template.md`; recovery-table headings.]

Start by classifying expected errors. I group them by what failed and by the risk of continuing. Input errors include missing, malformed, duplicate, stale, or unauthorized information. Processing errors include a failed transformation or an output that does not meet the contract. Connection errors involve an unavailable source or destination. Review and delivery errors involve a stalled, rejected, or incomplete handoff.

For each error, write the signal, impact, first operator action, owner, minimal event record, retry rule, and manual route. This separates a technical symptom from the operating decision.

[ON SCREEN: Synthetic error cards: missing deadline; unavailable approved source; uncertain draft creation; unexpected sensitive attachment; unknown error.]

For `DEMO-104`, a missing deadline is an input error. The case moves to waiting for input. The operator requests the field. No draft proceeds on a guess.

An unavailable approved source is a connection or source error. Do not substitute a cached version without permission. Pause the affected case and use the manual route or consult the source owner.

An uncertain draft-creation result is different. Before anyone retries, the operator checks the case reference to see whether a draft already exists. A repeat action can create duplicates. A workflow that cannot tell whether it completed should not claim success.

Unexpected sensitive content is a stop condition. Do not copy it into a log, prompt, shared note, or test case. Follow the organization’s established route and preserve only the minimal safe event record. An unknown error also pauses and escalates; it is not an invitation to improvise a workaround.

[ON SCREEN: Recovery diagram: detect → verify → one safe retry only for a temporary read → visible wait/pause/manual route.]

Retries, timeouts, and limits are operating rules, not background technical details. I use a retry only when the problem is likely temporary and repeating the step cannot create an unsafe or irreversible result.

In our example, a read of an approved source may get one bounded retry after a short wait if no output exists. A draft creation, status write, delivery, or approval does not retry blindly. First, verify the case reference and the actual state. For a sensitive or consequential action, a human confirms before any repeat attempt.

Set a practical timeout and a visible next state. A timeout may mean a slow source, a large request, an absent reviewer, or an outside condition. The case should move to waiting, notify the owner, or enter manual handling. It should never disappear behind an invisible clock.

[ON SCREEN: Pilot limits: fictional “small daily cap,” “one approved case type,” “named approval to raise cap,” “retry exhausted → manual handling.”]

Use pilot limits for volume, frequency, and case type. Limits protect reviewer capacity and reduce the impact of a trigger that misfires. When attempts are exhausted, the case moves to a visible exception state, the named owner is notified, and the manual route takes over. Higher volume is not automatically progress.

[ON SCREEN: Manual fallback section in `Resources/Error Recovery and Manual Fallback Template.md`.]

A manual fallback is a complete procedure, not a note that says “do it manually.” For `DEMO-104`, the operator moves the case to manually handled. They verify whether any draft already exists using the case reference. They retrieve approved inputs, use the existing manual brief template, obtain the same lead review, record the result and reason for fallback, and follow the named escalation route for sensitive or unknown conditions.

The fallback preserves the same data, access, review, and authority boundaries. It does not grant extra permission because the automation is unavailable. Rehearse it with a safe case. The intended operator should be able to complete it without the builder’s private memory.

[ON SCREEN: `Resources/Error Recovery and Manual Fallback Template.md`, `## Operator log design`; synthetic operator-log row and state labels.]

Use the Operator log design to make recovery practical. It lets an authorized operator answer what started a case, which workflow/case safe ID and state apply, what happened, who owns it, and what happens next.

For each synthetic event, record event/time; workflow/case safe ID; state; trigger; validation result; error class; attempt/retry count; stop or timeout; fallback; human owner; decision; resolution; and a safe evidence reference. States might include received, waiting for input, ready for review, manually handled, delivered, or stopped. Apply the template’s privacy and redaction rules: do not put credentials, raw confidential content, or whole source records in the log.

The Operator log design is not surveillance or a second ungoverned database. Keep access, retention, and redaction aligned with approved practice. Review patterns that affect operation: repeated missing fields, frequent manual routes, stalled review, duplicate signals, error counts, queue size, and recovery time.

[ON SCREEN: `Resources/Pilot and Go Live Checklist.md`; highlight safe dry-run cases and recovery evidence.]

Next week, we will use safe cases to dry-run this full path. A happy-path demonstration is not enough. We will inspect validation, state, review, the Operator log design, retries, fallback, capacity, cost, quality, and the evidence for one decision: continue pilot, launch within scope, revise, narrow, or pause.

## Member action

1. Complete the expected-error and recovery rows in `Resources/Error Recovery and Manual Fallback Template.md` for the bounded pilot step.
2. Set a retry, timeout, duplicate-check, pilot run-limit, retry-exhaustion, pause, and resumption rule. Use a manual route whenever the outcome is uncertain.
3. Rehearse the manual fallback with a safe case and complete the Operator log design, including its required fields, privacy/redaction rules, access boundary, retention owner, current owner, and next action.

## Recording checklist

- [ ] Embed path is shown exactly as `Week 3 — Errors, Recovery, and Visibility/01 - Classify expected errors.md`.
- [ ] Runtime is rehearsed to 6–8 minutes.
- [ ] Expected errors, bounded retries, timeouts, limits, fallback, and minimal logs are demonstrated.
- [ ] The screen example uses synthetic case references and no real incidents or records.
- [ ] The no-blind-retry rule for uncertain writes, sends, approvals, and consequential actions is stated.
- [ ] Sensitive and unknown conditions visibly pause and escalate.
- [ ] No credential, secret, authentication screen, production dashboard, or raw log content is displayed.
- [ ] No recovery, uptime, cost, or quality promise is made.
