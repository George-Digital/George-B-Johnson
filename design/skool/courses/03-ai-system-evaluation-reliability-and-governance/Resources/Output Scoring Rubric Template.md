# Output Scoring Rubric Template

**Use this rubric to score observable behavior, preserve reviewer evidence, and separate non-negotiable gates from preferences or aggregate scores.**

A score supports an operating decision for the stated use; it does not certify future performance or transfer a consequential decision from a qualified human to an AI system.

## System and review context

- **System name:**
- **Current version and date:**
- **Intended use and bounded output:**
- **Specific user and next action:**
- **Authoritative source location:**
- **Operator:**
- **Human reviewer:**
- **Decision owner:**
- **Restricted data or secure-reference boundary:**
- **High-impact decision the system must not make:**

## Scale definitions

Choose one scale and define it before scoring.

| Level | Definition | Required operator action |
| --- | --- | --- |
| Pass | The criterion is met with the required evidence. | Continue to the next defined review or handoff. |
| Revise | The criterion is partly met or a noncritical issue needs correction. | Revise, request information, or use the defined fallback. |
| Fail gate | A critical boundary, evidence, permission, routing, or decision rule is not met. | Stop the case, contain it, and escalate as defined. |

## Criteria and acceptance rules

| Criterion | Observable pass behavior | Revision behavior | Critical gate? | Evidence the reviewer checks | Owner who resolves disagreement |
| --- | --- | --- | --- | --- | --- |
| Source grounding |  |  | Yes / No |  |  |
| Required elements and completeness |  |  | Yes / No |  |  |
| Missing or conflicting information handling |  |  | Yes / No |  |  |
| Usability for the named next action |  |  | Yes / No |  |  |
| Scope and correct routing |  |  | Yes / No |  |  |
| Privacy, permissions, and disclosure boundary |  |  | Yes / No |  |  |
| Domain-specific criterion |  |  | Yes / No |  |  |

- **Case-level acceptance rule:**
- **Revision rule:**
- **Stop or escalation rule:**
- **Set-level quality threshold:**
- **Who may change this rubric or threshold:**

## Individual output scorecard

- **Case ID:**
- **Run date:**
- **System version:**
- **Safe input summary or secure reference:**
- **Output secure reference:**
- **Reviewer:**
- **Expected behavior:**

| Criterion | Result: pass, revise, fail gate | Evidence note or secure reference | Reviewer note | Required action |
| --- | --- | --- | --- | --- |
| Source grounding |  |  |  |  |
| Required elements and completeness |  |  |  |  |
| Missing or conflicting information handling |  |  |  |  |
| Usability for the named next action |  |  |  |  |
| Scope and correct routing |  |  |  |  |
| Privacy, permissions, and disclosure boundary |  |  |  |  |
| Domain-specific criterion |  |  |  |  |

- **Overall case decision:** accept for defined review / revise / route / stop
- **Any gate failure and containment action:**
- **Failure-log or escalation reference:**
- **Change proposed, if any:**

## Calibration record

Use safe shared cases where an independent or second qualified review is appropriate.

| Calibration case | Reviewer A result and evidence | Reviewer B result and evidence | Difference found | Rubric clarification or no-change decision | Owner and date |
| --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |
|  |  |  |  |  |  |

- **Reason independent review is not used, if applicable:**
- **Next calibration date or trigger:**
