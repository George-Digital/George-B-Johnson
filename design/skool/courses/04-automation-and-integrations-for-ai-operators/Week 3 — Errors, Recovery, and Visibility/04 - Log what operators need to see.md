# Log what operators need to see

**I record enough operational evidence to trace a case, support recovery, and improve the pilot without collecting unnecessary sensitive content.**

I design logs for the person who must answer what happened, what is waiting, and what to do next.

I do not log everything simply because I can. An operator needs a useful record of a case’s lifecycle, not a pile of content that creates privacy and review problems. I begin with the questions the log must answer: did the case start, which version handled it, what state is it in, did validation or review pass, what output or secure reference exists, and who owns the next action?

For each run, I record a minimal case reference, time, trigger category, workflow version, current state, result category, and responsible owner. If a failure occurs, I add the error category, the action taken, and the route or escalation. I avoid recording credentials, full sensitive inputs, confidential source content, or raw details that an operator does not need to recover the case.

I make state changes visible. A workflow that simply reports “success” is not enough if a draft still waits for review or a delivery step failed. I use clear events such as validated, waiting for input, draft created, ready for review, returned, manually handled, delivered, and stopped. The status should correspond to an actual operating condition, not an optimistic interpretation of partial technical activity.

I connect each record to the appropriate secure source or output location where necessary. A safe reference lets an authorized operator investigate without copying content into the log. I define who can view operational records and how long they are kept according to the organization’s approved practice. If I am unsure about retention or access, I involve the responsible owner rather than treating the pilot log as an informal archive.

I design for handoff. Another authorized operator should be able to open the record and tell whether to wait, review, retry, use fallback, or escalate. I include the current owner and next action, not just a timestamp. I also make it possible to distinguish a new case from a duplicate or a rerun, so the team does not create two outcomes for one request.

I review logs during the pilot for patterns: repeated missing fields, frequent manual routes, review delays, recurring source conflicts, unexpected volume, or a step that consumes more operator time than expected. A log does not explain every cause, but it gives me evidence to investigate and improve the design.

Good visibility supports accountability without becoming surveillance or a second ungoverned database. I keep the record purposeful, access-controlled, and tied to real operator decisions.

## Concrete example

For a request-to-brief pilot, the operator log records case reference, received time, request type, workflow version, validation result, current state, reviewer, and secure output reference. A case with a missing owner is marked waiting for input, not failed. A case with an unavailable standards source is marked manually handled with the coordinator as owner. The log does not copy the requester’s entire message or the source content. During the pilot review, the team sees that most manual routes come from one missing field and decides to improve the intake form.

## Action checklist

- List the operator questions the log must answer.
- Record minimal case, version, state, result, owner, and next-action information.
- Add error category and recovery action for exceptions.
- Use secure references instead of unnecessary raw or sensitive content.
- Define access, retention, and a recurring review of useful patterns.

## Required deliverable

Create an operator-log design in the Error Recovery and Manual Fallback Template: required event fields, states, secure references, access boundary, retention owner, and the decisions the record supports.

## Community prompt

What is the smallest set of fields that would let another operator recover one of your cases? Share your fields and one category of content you will deliberately exclude.
