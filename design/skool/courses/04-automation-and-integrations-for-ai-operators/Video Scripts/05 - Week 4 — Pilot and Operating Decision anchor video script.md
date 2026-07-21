# Week 4 — Pilot and Operating Decision anchor video script

**Embed on:** `Week 4 — Pilot and Operating Decision/01 - Run a controlled dry run.md`

**Runtime:** 6–8 minutes

**Outcome:** Members can run a controlled dry run with safe cases, compare pilot evidence with the manual baseline across cost, capacity, and quality, create an operating handoff, and document a bounded operating decision: continue pilot, launch within scope, revise, narrow, or pause.

## What to demonstrate on screen

Use a **sanitized, synthetic** request-to-brief pilot. Do not present the fictional figures as performance claims. Label every number “illustrative only.” Keep the pilot internal, limited to complete requests, and subject to lead review.

- Open the Week 4 lessons:
  - `Week 4 — Pilot and Operating Decision/01 - Run a controlled dry run.md`
  - `Week 4 — Pilot and Operating Decision/02 - Measure cost, capacity, and quality.md`
  - `Week 4 — Pilot and Operating Decision/03 - Write the operating handoff.md`
  - `Week 4 — Pilot and Operating Decision/04 - Decide whether to launch, revise, or pause.md`
- Open `Resources/Pilot and Go Live Checklist.md`. Show a dry-run plan with four fictional safe tests: complete common path, missing input, stale/conflicting source, and stop-or-fallback condition. Show pause authority, operator, reviewer, time window, run cap, and evidence limits.
- Open `Resources/Input and Output Contract Template.md`, `Resources/Integration and Data Flow Map.md`, and `Resources/Error Recovery and Manual Fallback Template.md` as the operating-handoff source set. Point to contract, source/owner map, state, approvals, retries/limits, fallback, and minimal event record.
- Show an illustrative measurement table, not a live dashboard: eligible cases; completed/paused/manual-route cases; operator, reviewer, wait, recovery, and maintenance time; direct and staff-cost assumptions; quality, source, privacy, access, and approval gates. Compare each column to the manual baseline.
- Show a written decision card with five options: continue pilot, launch within scope, revise, narrow, or pause. Use a fictional conclusion such as “continue pilot only with the original case type while the intake field is revised because source-reference review remains burdensome.”

Do not show live pilot data, real financial figures, source documents, personal data, confidential outputs, production logs, connection settings, passwords, keys, tokens, secrets, or account screens.

## Teleprompter script

[ON SCREEN: Week 4 title and “evidence before expansion.”]

This week is about making an operating decision from evidence. A pilot does not need to end in expansion. The responsible next step may be to continue pilot, launch within scope, revise, narrow, or pause.

We begin with a controlled dry run. This is a rehearsal of the whole operating design, not a demonstration that one happy-path output looks good.

[ON SCREEN: `Resources/Pilot and Go Live Checklist.md`; dry-run test plan with four fictional cases.]

Use safe, authorized, sanitized, or realistic synthetic cases. For our request-to-brief example, we test four conditions: a complete common-path request; a request with a missing required field; a stale or conflicting approved reference; and a stop-or-fallback condition such as unexpected content outside the approved path.

Assign a named operator and reviewer. Set a time window, small run cap, and pause authority. Confirm the current version, approved sources, safe output location, visible states, review gate, manual fallback, and minimal log fields before the run begins.

[ON SCREEN: Dry-run observation flow: trigger → validation → draft → review → state/log → fallback when required.]

During the dry run, observe more than the output. Can the operator tell why the case started? Can they find its source reference and current state? Does a missing field pause instead of becoming a guess? Does the reviewer receive the evidence needed to approve or return the draft? Can the operator use the manual route without asking the builder for undocumented knowledge?

If a result differs from the design, record the observed fact first. Do not quietly patch the workflow in the middle of the test and call the result a clean pass. An intervention is evidence. A controlled pause is evidence. A fallback rehearsal is evidence.

[ON SCREEN: `Resources/Input and Output Contract Template.md`, `Resources/Integration and Data Flow Map.md`, and `Resources/Error Recovery and Manual Fallback Template.md` side by side.]

The operating handoff pulls the design together so an authorized colleague can run, review, recover, and update it. State the purpose, user, included cases, exclusions, current version, and limits of the evidence. Then document the run in operator order: trigger, inputs, approved sources, validation, transformation, destination, state changes, review, and status.

The handoff must also name expected errors, retries, timeouts, run limits, duplicate checks, stop conditions, manual fallback, incident route, and minimal event record. It names the business owner, data or source owner, operator, reviewer, connection maintainer, and change approver. It refers to the approved access process and access owner; it never contains credentials or secrets.

[ON SCREEN: Illustrative-only measurement table compared with manual baseline.]

Now measure whether the bounded process is practical to operate. Compare it with the manual baseline you mapped in Start Here. Record eligible cases, completed cases, pauses, manual routes, review returns, and errors. Record operator touch time, reviewer time, wait time, recovery time, and maintenance work.

Keep quality as a gate. Use the output contract and quality criteria to inspect completeness, source grounding, usefulness for the next action, boundary adherence, and any domain-specific review requirement. Track unsupported claims, missing fields, correction work, and cases that should never have entered the pilot. A fast draft that crosses a source, privacy, access, or approval boundary is not a quality success.

For cost, be honest about the assumptions. Direct service use is one category. Staff time, review time, configuration, monitoring, storage, access, rework, and incident response can also matter. Early figures are estimates; they can vary with volume, source changes, tool behavior, and team practice. Do not project a broad financial result from a small sample.

Capacity matters too. A process that produces more drafts than the named reviewer can inspect creates a faster backlog. Look at distributions, not just averages. A few difficult cases, a repeated source conflict, or a queue that grows during a failure may matter more than an encouraging average.

[ON SCREEN: Decision gates first: input/source/privacy/access/approval/recovery; then quality/capacity/cost; then evidence limits.]

When you decide, review gates before efficiency. Did the workflow stay within its input, source, privacy, access, and approval boundaries? Could operators identify errors and use fallback? Did the qualified human retain consequential decisions? If a required gate fails, pause or revise the affected path before considering broader use.

Then consider quality, capacity, cost, recovery, maintenance ownership, and evidence limits. A small sample, synthetic-only run, short period, or one request type may support a constrained next step. It does not establish long-term reliability or permission for broad use.

[ON SCREEN: Fictional decision card: “Continue pilot only with original request type while the intake field is revised.” Include owners, monitoring, fallback, and pause trigger.]

For this synthetic example, the decision is continue pilot only with the original complete request type. The observed reason could be that source-reference review still takes too long, even though the draft structure is useful. The next change is small and testable: revise the intake field and make the source reference more visible before the next measured run. The lead remains reviewer. The coordinator retains the manual template. A source or access-boundary change triggers a pause and retest.

A launch-within-scope decision would need equally clear language: exact scope, start date, owners, review rule, monitoring period, fallback, and pause triggers. Do not call it fully automated when people still review, resolve exceptions, maintain sources, and authorize decisions.

[ON SCREEN: Final summary: dry run, baseline comparison, handoff, documented decision.]

The course outcome is not a promise of hands-free work, savings, or a particular tool result. It is a controlled recurring process only where the evidence and boundaries support one. Preserve the record, communicate the decision to the people who operate and own the work, and let the next smallest safe decision guide what happens next.

## Member action

1. Complete a controlled dry-run record in `Resources/Pilot and Go Live Checklist.md` with safe common-path, invalid-input, conflict, and stop/fallback cases.
2. Create a pilot measurement summary against the manual baseline: volume, capacity, quality and gate results, operator/reviewer/wait/recovery/maintenance effort, costs and assumptions, exceptions, and evidence limits.
3. Write an operating handoff from the contract, data-flow map, and recovery template, then document one decision: continue pilot, launch within scope, revise, narrow, or pause. Include owners, monitoring, fallback, and the next review or evidence threshold.

## Recording checklist

- [ ] Embed path is shown exactly as `Week 4 — Pilot and Operating Decision/01 - Run a controlled dry run.md`.
- [ ] Runtime is rehearsed to 6–8 minutes.
- [ ] The dry run includes safe complete, invalid, conflict, and stop/fallback cases.
- [ ] Manual baseline, cost, capacity, quality, review load, recovery, and evidence limits are all shown.
- [ ] The handoff uses the contract, data-flow map, and recovery template without exposing secrets.
- [ ] The decision card includes the five options: continue pilot, launch within scope, revise, narrow, or pause, plus a bounded fictional choice.
- [ ] No live pilot data, account, connection, credential, secret, or confidential content is displayed.
- [ ] No promise of savings, reliability, autonomy, approval, or expansion is made.
