# Adoption Feedback Plan

Use this plan to collect feedback close to the work and turn it into an owned decision. Keep general feedback separate from any secure incident or sensitive-evidence route.

## Purpose and boundaries

- **System name and current scope:**
- **Operating owner:**
- **Decision this feedback should support:** maintain / revise / narrow / pause / retire
- **Who may give feedback:**
- **What must not be entered in the general feedback channel:**
- **Authorized route for sensitive evidence or incidents:**
- **Manual fallback while a concern is reviewed:**

## Feedback moments and channels

| Moment | Role asked | Question or observation requested | Channel | Owner who reads it | Privacy boundary | Response or review timing |
| --- | --- | --- | --- | --- | --- | --- |
| After first use |  |  |  |  |  |  |
| After reviewer correction |  |  |  |  |  |  |
| When manual fallback is used |  |  |  |  |  |  |
| Periodic adoption check |  |  |  |  |  |  |
| Recipient handoff review |  |  |  |  |  |  |

## Post-use questions

- Did this case fit the system’s stated use condition? Why or why not?
- Could you complete the next work step after human review?
- What was missing, unclear, unsupported, or difficult to inspect?
- Did you use a fallback or ask for help? What prompted that choice?
- What current version and safe case reference apply?
- Does this observation require ordinary support, a change request, or immediate escalation?

## Feedback classification and response

| Category | Evidence to capture safely | Owner | Decision options | User response | Change-log or escalation reference |
| --- | --- | --- | --- | --- | --- |
| Onboarding or access friction |  |  |  |  |  |
| Common-path quality issue |  |  |  |  |  |
| Missing or conflicting source |  |  |  |  |  |
| Scope or user-fit issue |  |  |  |  |  |
| Privacy, safety, authorization, or consequential concern |  |  |  |  |  |

## Close-the-loop note

- **Period covered:**
- **What users and reviewers reported:**
- **Pattern or evidence observed:**
- **Decision:**
- **What changed now:**
- **What did not change and why:**
- **What users should do next:**
- **Next review date or trigger:**

## Applied prompt: synthesize safe feedback into operating decisions

**Use case:** You have several sanitized feedback records and need to identify actionable patterns without treating opinions as proof.

**Inputs:** Feedback records with role, case type, expected behavior, actual behavior, impact, version, fallback or escalation status; current scope; scorecard definitions.

**Paste-ready prompt:**

> Analyze the supplied sanitized feedback records as operating evidence. Group observations by recurring issue, user role, workflow step, and impact. Separate direct evidence from assumptions. For each pattern, propose one of these decisions only: maintain, clarify onboarding, revise a bounded instruction, retest a source or dependency, narrow scope, pause, or escalate to the named authorized owner. State what evidence supports the decision, what evidence is missing, and what safe test or review should happen next. Do not infer personal performance, create policy, or recommend continuing use after a privacy, safety, authorization, or consequential-boundary concern. Preserve the manual fallback in every recommendation.

**Expected output:** A short pattern summary with evidence, limitations, owner, and next decision.

**Failure mode:** A synthesis can overstate a small sample or miss the context behind one serious issue.

**Human review:** The operating owner checks the original approved records. A qualified domain, privacy, safety, or access owner handles concerns in their authority; the AI-assisted summary does not close an escalation.
