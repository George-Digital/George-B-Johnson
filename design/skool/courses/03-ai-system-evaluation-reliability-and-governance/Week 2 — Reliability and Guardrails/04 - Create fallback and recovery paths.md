# Create fallback and recovery paths

**I make reliability practical by deciding how work continues safely when the AI step, source, tool, access, or review path is unavailable or fails.**

I create a manual fallback and a recovery sequence that preserve the workflow’s human review and decision boundaries instead of forcing a broken system to continue.

A workflow is not reliable because it never encounters a problem. Tools become unavailable, source links break, permissions change, models behave differently, inputs arrive in an unexpected format, and reviewers are absent. I plan for those conditions before they create pressure to bypass the controls I designed. A fallback is the defined alternate way to complete, defer, or decline the work; recovery is the sequence that restores the normal path after I understand the failure.

I start with the critical dependencies. These may include the approved source location, intake form, AI tool, prompt or configuration, integration, secure workspace, reviewer availability, and escalation channel. For each dependency, I ask what happens if it is unavailable, incorrect, stale, or unauthorized. I focus on the dependencies that would cause a wrong output, a missed deadline, a privacy problem, or an unreviewed decision—not every minor inconvenience.

The simplest fallback is often a manual process that already exists. I document the minimum safe version: use the approved template, collect the required source material, have the named human prepare or review the draft, and follow the same stop conditions. I do not call it a fallback if it asks an unqualified person to make a decision that normally belongs to a qualified owner. The alternate path must preserve the essential authority and privacy boundaries.

I define triggers precisely. “When AI is down” is not enough. I might say: when the tool returns an error, when the output fails a critical gate twice on the same approved case, when the current source cannot be verified, when an integration duplicates or loses a record, when the reviewer cannot access the evidence, or when an unauthorized-data concern arises. The operator needs a clear moment to stop using the normal path and open the fallback.

For each trigger, I write immediate containment, fallback owner, communication, and recovery evidence. If an output may have been sent with unsupported information, I follow the authorized incident process and notify the right owner; I do not silently correct the internal prompt and hope nobody notices. If a source is stale, I pause use until the source owner confirms or replaces it. If the tool is unavailable, I route the case through the manual template and log the disruption. I preserve only safe references in the shared log.

Recovery needs a verification step. I do not return to normal operation merely because an error message disappears. I confirm the dependency is restored, check the current version, run a safe test if a behavior-affecting change occurred, and obtain the appropriate owner’s approval where required. If a prompt, model, integration, access rule, or authoritative source changed, I treat it as a change event and consider whether the evaluation set or threshold needs a fresh review.

I also decide how to handle a queue. A failed workflow can leave pending cases that grow in urgency. I identify who monitors the queue, how they prioritize within their authority, when they notify users of delay, and when they suspend intake. I do not let an automation backlog become a reason to make a rushed high-impact decision. For health, legal, employment, financial, safety, benefits, housing, education, disciplinary, or essential-service matters, the qualified decision owner and existing procedures remain in charge.

I test fallback with a safe tabletop exercise. I simulate a missing source, unavailable tool, or failed gate, then ask the operator to follow the written path. Can they locate the manual template? Do they know who approves the alternative? Does the recovery log capture the version and next test? Any hesitation is useful evidence. I revise the runbook before a real disruption forces a decision.

A fallback is not an admission that automation was a mistake. It is a sign that I understand the service or decision matters more than keeping the automated path running. The workflow remains dependable when people can safely continue, pause, or recover under pressure.

## Concrete example

I create a fallback for a field-service intake brief. If the AI tool is unavailable or the approved service catalog cannot be verified, the coordinator uses a protected manual template, checks the same required fields, and sends the draft to the service lead for review. No technician is assigned automatically. The coordinator logs the outage, case references, and manual path. After the catalog is restored, the operations owner runs a safe test before re-enabling the AI-assisted workflow.

## Action checklist

- List the source, tool, access, reviewer, and integration dependencies that matter to safe operation.
- Define specific triggers that move a case to fallback or pause.
- Document the minimum manual process that preserves review, privacy, and decision authority.
- Name fallback owners, communication paths, and queue-monitoring responsibilities.
- Define recovery verification, retest, and reauthorization steps.
- Run one safe tabletop exercise and log the gaps it reveals.

## Required deliverable

Create a **Fallback and Recovery Plan** in the Reliability Review Template. Include critical dependencies, triggers, containment, manual fallback steps, owners, communication, queue rules, recovery checks, retest requirement, and one safe exercise result.

## Community prompt

If your AI step disappeared for one day, what safe manual path would keep the important work moving? Name the review point that the fallback must not bypass.
