# Automation Readiness Scorecard

**Use this scorecard to decide whether one bounded workflow should remain manual, move to an assisted run, or enter a limited integration pilot.**

Use safe, authorized descriptions and secure references. A high score does not override a missing owner, a sensitive-data concern, a consequential decision boundary, or the absence of a manual fallback.

## Use case and required inputs

Use this before connecting a recurring workflow. Gather three recent safe or sanitized cases, the manual baseline map, the current input and output definition, the named business and review owners, and the approved data boundary.

| Readiness area | Evidence to inspect | Score: 0 absent, 1 partial, 2 established | Notes or secure reference |
| --- | --- | --- | --- |
| Repetition | The task occurs often enough to observe a common path. |  |  |
| Stable step | The proposed step has a clear start, end, input, and output. |  |  |
| Input quality | Required inputs and source authority are known. |  |  |
| Output quality | A reviewer can inspect the required output against clear criteria. |  |  |
| Variation boundary | Common-path, exception, and out-of-scope cases are named. |  |  |
| Human authority | Reviewer and consequential-decision owner are named. |  |  |
| Data and access | Approved data, minimum access, and credential owner are known. |  |  |
| Recovery | Manual fallback, stop conditions, and escalation route are documented. |  |  |
| Ownership | Operator, business, source, maintenance, and change owners are named. |  |  |
| Pilot measurement | Baseline measures and a limited pilot scope are defined. |  |  |

- **Total score:**
- **Non-negotiable blocker present:** yes / no
- **Blocker and responsible owner:**

## Decision guide and output

Use the score as a discussion aid, not permission to automate.

- **0–7:** improve the manual baseline or documentation before any connected pilot.
- **8–14:** consider an operator-assisted run or a narrower design; resolve named gaps first.
- **15–20:** consider a limited pilot only if every non-negotiable boundary is satisfied.

- **Decision:** remain manual / assisted run / limited pilot / pause
- **Bounded step:**
- **Included case type:**
- **Excluded case type:**
- **Human reviewer and decision authority:**
- **Manual fallback:**
- **Evidence needed for the next decision:**

## Limitations and failure mode

This scorecard cannot determine legal, privacy, security, safety, compliance, or organizational approval requirements. A stable common path can still be unsuitable for automation when a case is sensitive, consequential, poorly authorized, or difficult to recover. Do not use a numerical result to justify bypassing a human review or access boundary.

## Human review

- **Business owner who confirms the workflow purpose and scope:**
- **Qualified reviewer who confirms the quality and decision boundary:**
- **Data, security, privacy, legal, or compliance owner to consult when applicable:**
- **Date reviewed and next review date:**
