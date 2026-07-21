# Set retries, timeouts, and limits

**I use bounded retries and visible limits so a temporary fault does not create duplicate, stale, or uncontrolled work.**

I decide in advance when the workflow may try again, when it must stop, and how an operator sees the difference.

A retry is not a harmless technical detail. Repeating an action can create duplicate drafts, repeated notices, conflicting records, or unnecessary cost. I use retries only for failures that are likely temporary and only when repeating the step cannot produce an unsafe or irreversible result. For anything that writes, sends, approves, or changes a case state, I first design a way to detect whether the earlier attempt actually completed.

I distinguish a timeout from a failure. A timeout may mean a source is slow, the request is too large, a reviewer has not responded, or the workflow is waiting on an external condition. I set a practical waiting period based on the user’s need and the manual process, then define the next state: retry, wait visibly, notify an owner, or move to manual handling. I do not let a case disappear because it exceeded an invisible clock.

I set run limits for the pilot. A cap on volume, frequency, and affected case types lets me observe behavior without flooding a reviewer or destination. A limit is also a safety control when a trigger misfires. I decide who can raise the cap and what evidence they need, rather than treating higher volume as an automatic sign of progress.

I make repeatability identifiable. Each case needs a reference that lets the operator see whether a step ran, which version ran, and what output or destination was affected. If I cannot tell whether an action completed, I choose a safe pause and manual verification rather than retrying blindly. The goal is not to eliminate every wait; it is to avoid making uncertain work look finished.

I define an exhaustion rule. After the allowed attempts, the case stops, enters a visible exception state, and notifies the named owner or manual queue. The operator should not need to remember a hidden threshold. For sensitive or consequential actions, I normally prefer no automatic retry until a human confirms the condition, because a duplicate can be more harmful than a delay.

I also watch capacity. A retry policy that is reasonable for one request may overwhelm a source, a reviewer, or an operator when many cases fail together. I record the error count, queue size, review backlog, and time in each state during the pilot. Those observations inform a later operating decision; they are not a reason to remove limits prematurely.

The result is a controlled rhythm: attempt, verify, wait or retry within a boundary, then stop and route. An operator can explain every state and recover a case without guessing what the system did.

## Concrete example

A draft-brief workflow reads an approved internal request and creates a draft. If the read step is temporarily unavailable, it may make one bounded retry after a short wait because no output has been created. If the draft-creation response is uncertain, the workflow does not retry immediately; the operator first checks the case reference for an existing draft. After the allowed attempt, the case moves to manual handling and the coordinator completes the brief using the baseline template. The pilot accepts only a small daily volume so the lead can review every exception.

## Action checklist

- Identify actions that may safely retry and actions that require human verification first.
- Set a practical timeout and visible next state for each wait.
- Define case references and checks that prevent duplicate work.
- Set pilot caps for volume, frequency, and case type.
- Write the exhaustion rule, notification owner, and manual route.

## Required deliverable

Add retry, timeout, run-limit, duplicate-check, and exhaustion rules to the Error Recovery and Manual Fallback Template for each step in your pilot.

## Community prompt

Which action in your flow could create harm if repeated? Share the verification step that must occur before anyone retries it.
