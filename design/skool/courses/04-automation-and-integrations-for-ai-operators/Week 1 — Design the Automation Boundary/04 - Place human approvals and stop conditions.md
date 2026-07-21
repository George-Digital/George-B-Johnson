# Place human approvals and stop conditions

**I put review gates before consequential actions and define the signals that require the workflow to pause, route, or stop.**

I treat human review as an explicit operating step with authority, evidence, and a clear outcome.

I do not add “human in the loop” as a vague reassurance. I decide who reviews, what they inspect, what authority they have, and what happens after their decision. A useful approval gate occurs at the point where a wrong output could create a harmful or hard-to-reverse action, not after the action has already been taken.

I start by listing consequences. A draft summary may be low risk when it stays internal and is clearly labeled. Sending a message, changing a record, granting access, spending money, prioritizing a person, or giving advice in a regulated context can be much more consequential. I place the approval before the delivery, change, or recommendation is treated as an authorized outcome.

The reviewer needs evidence, not a blind button. I specify the source or reference they compare against, the required output fields, the quality criteria, and the known limitations. I make unknown information visible. A reviewer should be able to return a case because a required field is absent, a source conflicts, a claim is unsupported, or the request falls outside the pilot boundary.

Stop conditions are equally important. I write the signals that make normal processing unsafe: missing authorization, sensitive data outside the approved path, a stale or conflicting source, an unexpected destination, repeated failures, or an out-of-scope request. The action is explicit: pause, preserve an event record, notify the responsible owner, and use the manual process. I do not try to make the workflow creatively solve an exception it was not designed to handle.

I keep authority separate from availability. The nearest person may be able to look at a case, but that does not mean they can approve a hiring, legal, financial, health, safety, disciplinary, eligibility, or access decision. I name the authorized owner and an escalation route when that owner is unavailable. The integration can route information; it cannot confer authority.

I also consider reviewer capacity. A workflow that generates more drafts than a team can inspect may create a new backlog and invite rubber-stamping. I start with a volume that the named reviewers can actually handle. I track returned cases and review time during the pilot so I can see whether the boundary is working in practice.

The resulting design makes a pause a normal outcome rather than an embarrassing failure. A system earns broader use only when it has shown that it surfaces uncertainty, respects authority, and returns work safely to people when it should.

## Concrete example

An operator uses a workflow to prepare vendor onboarding summaries. The workflow may gather approved request details and create a checklist, but it stops if banking, tax, identity, or contract information is missing or arrives through an unapproved route. A procurement owner reviews the checklist against the authorized records and decides whether onboarding can proceed. The workflow records approved, returned, and manual-review states; it does not activate a vendor or approve payment details.

## Action checklist

- List actions that are hard to reverse or consequential for a person or organization.
- Place a named human approval before each such action.
- Define the evidence and quality checks the reviewer must inspect.
- Write stop signals for missing authority, sensitive data, source conflict, and out-of-scope cases.
- Name the escalation route and manual process for an unavailable reviewer.

## Required deliverable

Add an approval-and-stop matrix to your Automation Design Prompt or data-flow map: action, reviewer, evidence, pass condition, stop signal, and manual route.

## Community prompt

Which proposed action needs an earlier approval gate than you first assumed? Share the stop condition that would prevent the case from proceeding.
