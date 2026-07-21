# Define stakes and review ownership

**I match the depth of evaluation and human review to the consequence of a wrong output, not to how polished or convenient the workflow appears.**

I define what a failure could affect, who can recognize it, and who has authority to approve, pause, or change the system before I rely on a score.

When I assess a workflow, I do not begin with a generic risk label. I ask what happens if this specific output is wrong, late, incomplete, disclosed to the wrong person, or treated as more authoritative than it is. The answer changes the evaluation design. A mistaken internal meeting summary may create rework. A mistaken benefit, hiring, medical, legal, financial, housing, safety, disciplinary, or eligibility recommendation can affect a person’s rights, livelihood, care, or access. I do not give those situations the same review path simply because both use an AI assistant.

I map stakes by looking at the people and operations touched by the output. I ask who receives it, who might act on it, who is excluded or harmed by an error, how easily the error can be corrected, and whether the system could expose private or confidential information. I also ask whether a fluent output might cause a user to skip the verification they would normally do. That last question matters because reliability failures often come from misplaced trust, not only from an obviously false sentence.

I then identify the types of failure that matter. Accuracy is one, but it is not the whole picture. I look for omissions, unsupported inferences, incorrect routing, inconsistent treatment of comparable cases, stale source use, privacy leakage, missed escalation, unavailable fallback, and unclear ownership. A workflow can be factually accurate yet still fail because it delivers a draft to the wrong person or leaves nobody responsible for a critical review.

For each meaningful failure type, I name a human review role. The operator runs the workflow; the reviewer checks the output against the rubric and source; the decision owner authorizes the next action; and an escalation owner handles cases outside the normal path. In a small team, one person may hold more than one role. I still write the roles separately, because “the team will check it” is not a reliable control. When someone is absent or a case becomes urgent, vague ownership turns into no ownership.

I make the review method proportionate. Low-consequence drafts may receive sampling and a clear edit before use. Work that creates customer commitments, changes records, spends money, affects service availability, or carries privacy risk may need review of every output until evidence supports a different approach. High-impact decisions require a qualified human to make the final determination; the AI can organize evidence or prepare an advisory draft, but it cannot substitute for the responsible decision-maker. I do not let a high score turn into permission to remove that boundary.

I also consider reviewer competence and independence. A reviewer needs access to the authoritative source and enough domain knowledge to recognize a harmful omission. If the same person designs the prompt, runs the output, and marks every result as passing, I may be measuring their confidence more than the system. I use a second reviewer or periodic calibration when the stakes, volume, or uncertainty make it practical. I record disagreements as useful evidence, not as an inconvenience to hide.

Privacy belongs in this map too. I decide what data a reviewer may see, where they may see it, and what needs redaction, authorization, or secure handling. I do not ask a community peer to inspect a private client case, employee record, health detail, or financial record. A synthetic or sanitized case can reveal a process failure without widening access to the underlying data.

I finish with a plain decision-rights statement. It says who can accept an output, who can override it, who can pause it, and who approves a change to the workflow. This gives an operator permission to stop when something feels wrong. It also makes the system safer to hand off because another person can see where their responsibility begins and ends.

## Concrete example

I map an AI-assisted claims-intake summary used by an insurance operations team. The system may extract stated facts and missing documents from an authorized intake. A trained claims professional reviews every summary, verifies the source, and decides the next action. The system cannot determine coverage, payment, fraud, or eligibility. A privacy lead owns access rules; the claims manager owns escalations; and a process owner approves prompt changes. A public or community review uses a synthetic case only.

## Action checklist

- List who could be affected by a wrong, late, incomplete, or disclosed output.
- Name the accuracy, omission, routing, privacy, and overreliance failures that matter.
- Separate operator, reviewer, decision owner, escalation owner, and change owner roles.
- Set a review level that fits the consequence and reversibility of the output.
- State which decisions remain with a qualified human.
- Record what data each reviewer may access and what must be sanitized or kept in an approved location.

## Required deliverable

Create a **Stakes and Review Ownership Map**. Include affected people, material failure types, review level, role assignments, decision rights, privacy boundary, and the high-impact decisions the system must not make.

## Community prompt

What is the most consequential way your output could be misunderstood or misused? Name the review role that catches it and the decision that stays with a human.
