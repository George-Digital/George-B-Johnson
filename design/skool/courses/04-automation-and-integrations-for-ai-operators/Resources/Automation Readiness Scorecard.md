# Automation Readiness Scorecard

**Use this scorecard to decide whether one bounded workflow should remain manual, move to an assisted run, or enter a limited integration pilot.**

Use safe, authorized descriptions and secure references. A high score does not override a missing owner, a sensitive-data concern, a consequential decision boundary, or the absence of a manual fallback.

## Use case and required inputs

Use this before connecting a recurring workflow. Gather three recent safe or sanitized cases, the manual baseline map, the current input and output definition, the named business and review owners, and the approved data boundary.

### Repetition

- **Readiness area:** Repetition
- **Evidence to inspect:** The task occurs often enough to observe a common path.
- **Score: 0 absent, 1 partial, 2 established:**
- **Notes or secure reference:**

### Stable step

- **Readiness area:** Stable step
- **Evidence to inspect:** The proposed step has a clear start, end, input, and output.
- **Score: 0 absent, 1 partial, 2 established:**
- **Notes or secure reference:**

### Input quality

- **Readiness area:** Input quality
- **Evidence to inspect:** Required inputs and source authority are known.
- **Score: 0 absent, 1 partial, 2 established:**
- **Notes or secure reference:**

### Output quality

- **Readiness area:** Output quality
- **Evidence to inspect:** A reviewer can inspect the required output against clear criteria.
- **Score: 0 absent, 1 partial, 2 established:**
- **Notes or secure reference:**

### Variation boundary

- **Readiness area:** Variation boundary
- **Evidence to inspect:** Common-path, exception, and out-of-scope cases are named.
- **Score: 0 absent, 1 partial, 2 established:**
- **Notes or secure reference:**

### Human authority

- **Readiness area:** Human authority
- **Evidence to inspect:** Reviewer and consequential-decision owner are named.
- **Score: 0 absent, 1 partial, 2 established:**
- **Notes or secure reference:**

### Data and access

- **Readiness area:** Data and access
- **Evidence to inspect:** Approved data, minimum access, and credential owner are known.
- **Score: 0 absent, 1 partial, 2 established:**
- **Notes or secure reference:**

### Recovery

- **Readiness area:** Recovery
- **Evidence to inspect:** Manual fallback, stop conditions, and escalation route are documented.
- **Score: 0 absent, 1 partial, 2 established:**
- **Notes or secure reference:**

### Ownership

- **Readiness area:** Ownership
- **Evidence to inspect:** Operator, business, source, maintenance, and change owners are named.
- **Score: 0 absent, 1 partial, 2 established:**
- **Notes or secure reference:**

### Pilot measurement

- **Readiness area:** Pilot measurement
- **Evidence to inspect:** Baseline measures and a limited pilot scope are defined.
- **Score: 0 absent, 1 partial, 2 established:**
- **Notes or secure reference:**


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
