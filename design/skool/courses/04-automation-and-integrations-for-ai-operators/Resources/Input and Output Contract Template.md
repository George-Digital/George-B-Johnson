# Input and Output Contract Template

**Use this template to make one automation boundary explicit: accepted inputs, authorized sources, required output, uncertainty behavior, and human review.**

Copy it for one bounded step. Keep real records in approved locations and use only the minimum data needed for the stated purpose.

## Use case and required inputs

- **Workflow and bounded step:**
- **User and next action:**
- **Trigger:**
- **Required input fields:**
- **Optional context:**
- **Expected formats or structures:**
- **Approved source and source owner:**
- **Freshness, version, or authorization check:**
- **Data excluded, minimized, or handled only through an approved path:**

## Contract fields and output

| Contract element | Definition for this workflow | Behavior when absent, invalid, conflicting, or unauthorized |
| --- | --- | --- |
| Required input |  |  |
| Optional context |  |  |
| Authoritative source |  |  |
| Transformation allowed |  |  |
| Required output fields |  |  |
| Output format and destination |  |  |
| Unknown or unsupported information label |  |  |
| Prohibited claim, recommendation, decision, or action |  |  |
| Case reference and state update |  |  |

- **Output name:**
- **Pass criteria before review:**
- **Draft, review, and final destination:**

## Limitations and failure mode

- **Missing-input response:** request / label incomplete / route / stop
- **Source-conflict response:**
- **Out-of-scope or sensitive-data response:**
- **Maximum scope of the output:**
- **Known input condition the workflow cannot safely handle:**
- **Manual fallback location or procedure:**

A contract cannot make an unsupported fact reliable. The workflow must not infer a missing fact, substitute an unapproved source, or treat an output as a final consequential decision.

## Human review

- **Operator who checks input completeness:**
- **Reviewer who checks output against source and quality criteria:**
- **Authorized owner of final decision or delivery:**
- **Access or data owner who approves source use:**
- **Review evidence or secure reference to preserve:**
