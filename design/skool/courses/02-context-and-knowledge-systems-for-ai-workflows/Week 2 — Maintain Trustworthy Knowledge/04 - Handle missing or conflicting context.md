# Handle missing or conflicting context

**When required context is absent, stale, or inconsistent, the system should label the gap, preserve the relevant source references, and request, route, defer, or stop instead of guessing.**

I design the missing-context path as carefully as the common path, because the safest and most useful result is often a clear question for a human owner rather than a completed-looking answer.

A knowledge system earns trust through its response to uncertainty. In the common case, approved sources may line up cleanly and a draft can be prepared quickly. But real work includes missing dates, unconfirmed owners, contradictory instructions, documents with no status, and requests that sit outside the pack’s scope. If I only design for the complete input, an AI-assisted workflow may hide the problem with a plausible assumption.

I first define what is required to proceed. These are not every possible field; they are the facts, rules, permissions, or approvals without which the output would be unreliable or inappropriate. For a project kickoff brief, a signed scope, current project owner, and approved start date may be required. For a support response, the current policy and account context may be required. I state the consequence of absence: request information, use a defined non-consequential fallback, route to an owner, defer, or decline the run.

I make the missing state visible in the output. “Not provided,” “Needs confirmation from [role],” “Source is pending review,” and “Conflict requires owner decision” are useful labels. I do not use vague phrases such as “please verify” without identifying what is missing or why it matters. The operator and reviewer need enough detail to take the next safe step without mistaking the draft for a final answer.

Conflict needs its own route. I preserve the references to the conflicting sources, identify the specific difference, and apply the declared authority order where it clearly resolves the issue. If the authority order does not resolve the case, I stop the relevant part of the workflow. An authorized human owner interprets the materials, decides whether one source is superseded, records the decision’s scope, and updates the pack if needed. The system can summarize the conflict, but it does not choose a policy, commitment, or high-impact outcome.

I also check for stale context. A source may not directly conflict with another document but may be too old or lack a known review status. I treat unknown currency as a reason to ask, not as permission to use the material. The pack should show the last review or effective date where it affects use. A timed decision or temporary exception should expire visibly rather than remaining an attractive but unsafe retrieval result.

There are four useful responses that I choose deliberately. Request asks for the missing approved information. Fallback uses a documented lower-risk path, such as preparing an incomplete draft with clear labels. Route sends the case to a named authorized reviewer. Decline or stop states that the task cannot proceed within the approved boundary. I do not make “guess from the closest example” a fifth option. Examples explain format; they do not supply missing case facts.

I make the message to the user practical. Instead of only reporting a failure, I say what is needed, who can provide it, what will happen after it arrives, and what the system did not do. For example: “The approved delivery date is not available. I have left the date field blank and routed the brief to the project lead for confirmation. Do not send this as a final commitment.” That language supports human review and reduces the temptation to complete the field by memory.

Access boundaries can create missing context too. An operator may know that a restricted source exists but lack permission to view it. The correct response is not to seek a workaround or ask an unapproved person to share it. I route the case to the authorized reviewer or request an approved summary. The pack should document that route without exposing the restricted content.

I test the path with ordinary failures: a missing required source, a stale document, two contradictory rules, an out-of-scope request, and an access-limited fact. The tests reveal whether the label is understandable, whether the owner is clear, and whether the workflow truly stops before an unsupported claim reaches someone. I preserve these test results in the build log because they become part of the system’s safety case.

A context system does not need to answer every question to be useful. It needs to make uncertainty actionable. A well-handled gap is evidence that the system respects its boundaries and gives people the information they need to resolve it.

## Concrete example

An event coordinator prepares a volunteer shift brief and finds two schedules with different start times. The pack identifies the current schedule as the controlling source only if its effective date is confirmed. Because the dates are unclear, the draft lists both references, labels the start time “Needs event-lead confirmation,” and stops distribution. The coordinator does not select a time from a past example. The event lead reviews the sources, records the decision, and updates the pack before the brief is released.

## Action checklist

- Define the minimum facts, rules, permissions, and approvals required for the common path.
- Choose request, fallback, route, or stop handling for each important missing condition.
- Add visible output labels for unknown, pending, stale, and conflicting context.
- Define the authority order and owner route for conflicts.
- Prevent examples and unapproved sources from filling a missing factual gap.
- Test at least one missing, conflicting, stale, and access-limited case with human review.

## Required deliverable

Add a **Missing and Conflicting Context Playbook** to your Context Pack with required-context gates, visible labels, response routes, authority conflict procedure, access-limited route, human reviewers, and four safe test cases.

## Community prompt

Which missing fact or conflict would make your current output unsafe or misleading? Post the exact message the system should show and the person who must resolve it.
