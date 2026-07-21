# Create the failure log

**I learn from reliability work by logging failures, near misses, and unresolved uncertainty in a form that leads to an owner, a decision, and evidence—not blame.**

I create the failure log before broad testing so I have one place to capture what happened, what was affected, how the workflow was contained, and what I will inspect next.

I do not wait for a dramatic incident to start a failure log. Small failures are the raw material of reliable systems: a missing required field, an unsupported claim, a stale source, a wrong route, an inconsistent score, a reviewer who cannot find the evidence, or an output that should have stopped but continued. If I only record the failures that embarrass me, I lose the pattern that would help me improve the common path.

I make the log easy enough to use during work. Each entry starts with a case or incident identifier, date, system version, and a safe summary of the input. Then I record the expected behavior, observed behavior, impact or potential impact, and the point at which someone noticed the problem. I avoid pasting confidential content into a broadly shared log. Where evidence is restricted, I use a sanitized description and a secure reference that the authorized owner can access.

I classify the failure without rushing to assign fault. Was the input incomplete? Was the authoritative source missing, stale, or in conflict? Did the prompt or workflow instruct the wrong behavior? Did the output format conceal an uncertainty? Did the reviewer miss a gate? Did a permission or handoff path fail? A useful classification points to a part of the system I can inspect. “AI made a mistake” is too broad to guide a repair.

I distinguish a failure from a near miss. A failure reached a user, record, or downstream action in a way that required correction or caused harm. A near miss was caught before that point. Both matter. A near miss may show that the review gate worked, but it can also show that the system produces a risky pattern often enough that the reviewer is becoming the only safety control. I record whether the existing control caught the issue and whether it needs strengthening.

Every log entry has a containment decision. I may correct a draft before it is used, pause a case, remove access, notify the appropriate owner, switch to a manual process, or stop the workflow for that use. The choice depends on the stakes. If the output involves health, law, employment, finance, benefits, housing, education access, safety, discipline, or essential services, I do not let the operator improvise a final resolution. I route the matter to the qualified decision owner and preserve the relevant evidence in the approved system.

I assign an owner and a due point for investigation. The owner is responsible for moving the entry, not necessarily for fixing every problem alone. I ask them to identify a likely contributing condition, propose a bounded change or a reason to keep the current boundary, and specify the test needed before closure. I do not close an issue because someone rewrote a prompt. I close it when the immediate case is contained, the responsible person accepts the action, and the planned evidence or retest is recorded.

The log should also record uncertainty. Sometimes I cannot tell whether an output was incorrect because the source itself was ambiguous. Sometimes reviewers disagree about whether a threshold is appropriate. I log that uncertainty, name the person who can resolve it, and keep the output from moving forward if the decision requires more evidence. Honest uncertainty is a valid reliability result.

I review the log on a cadence, but I also define immediate triggers. Repeated gate failures, unauthorized data exposure, an output used beyond its scope, a missed high-impact escalation, or an inability to identify the current source warrants prompt attention. The log does not replace formal reporting or legal, security, HR, safety, or compliance processes. Where those processes exist, I follow them and link the authorized record rather than inventing a parallel investigation.

A failure log makes my system more inspectable. It lets a future operator see what has failed, how the team responded, and what remains unresolved. That is more useful than a claim that the workflow is dependable because it has not yet been challenged.

## Concrete example

I log a near miss in a scheduling-brief workflow. An input contains two different service dates; the draft chooses one instead of flagging the conflict. The reviewer catches it before the brief is sent. I record the version, safe case summary, expected stop behavior, observed choice, no external impact, and the reviewer’s containment action. The operations owner adds a source-conflict check, reruns the same safe case, and records the retest before closing the entry.

## Action checklist

- Copy the Failure and Escalation Log into an approved workspace.
- Define the fields required for every failure, near miss, and unresolved uncertainty.
- Set safe evidence and secure-reference practices for confidential cases.
- Choose categories that point to input, source, instruction, output, review, access, or handoff conditions.
- Name containment actions and the owner who can authorize each one.
- Define what evidence is required before an entry can close.

## Required deliverable

Create a **Failure Log Version 1** with one backfilled failure or near miss from a safe past or synthetic case. Include the observed behavior, impact, containment, owner, contributing condition, next test, and closure criterion.

## Community prompt

What small failure or near miss would be most useful to log in your workflow? Describe it without private details, and name the control that should catch or contain it.
