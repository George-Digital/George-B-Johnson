# Run a controlled dry run

**I test the bounded design with safe cases, real operators, and a clear stop rule before I expose the workflow to routine work.**

I use a dry run to inspect behavior and recovery, not to declare the workflow ready because one happy-path case worked.

I run a dry run as a rehearsal of the operating system around the integration. I use authorized, sanitized, or realistic synthetic cases when live data is not appropriate. The purpose is to see whether the trigger, contract, validation, transformation, handoff, review, logging, and fallback work together as documented. A successful technical response alone is not the standard.

I start with a small test plan. I include at least one complete common-path case, one missing or malformed input, one source conflict or stale reference, and one condition that should stop or route to the manual path. I assign an operator and reviewer, set a time window, and state what would cause me to pause the run. I keep volume low enough that everyone can observe the evidence rather than rushing through it.

Before the run, I check authorized access and remove unnecessary sensitive material. I confirm the current workflow version, approved source, safe destination, case references, and manual template. I do not use a dry run to test whether I can access a source I may not be allowed to use. Permission uncertainty is a stop condition, not an experiment.

During the run, I observe the operator experience. Can they tell why a case started? Can they find the input reference and current state? Does the workflow request missing information rather than assume it? Does the reviewer receive the evidence needed to approve or return a draft? Can the operator identify a failure and follow the manual route without asking the builder for hidden knowledge?

I compare the observed behavior with the written design. When something differs, I record the fact first: a field was not validated, the state was unclear, the reviewer did not receive a reference, or the fallback instruction was incomplete. I do not patch the workflow in the middle of the test without recording the intervention, because that makes the result impossible to interpret.

Afterward, I hold a short review. I score the quality and boundary checks, list defects, estimate operator and reviewer effort, and decide whether to revise and rerun, narrow the scope, or pause. The dry run may show that the manual baseline is preferable for now. That is a decision supported by evidence, not a wasted build.

A controlled dry run gives me a credible first look at the whole path. It does not establish long-term reliability or permission for broad rollout. It tells me what the next smallest safe decision should be.

## Concrete example

I dry-run an internal request-to-brief workflow using four safe cases. A complete case produces a draft and reaches the lead review queue. A missing deadline case pauses and asks the coordinator for the field. A stale standards reference routes to the standards owner. A case with unexpected confidential content stops and uses the established manual route. The team finds that the draft state is clear but the fallback instructions do not tell the coordinator how to record a resumed case. They revise the runbook and rehearse that case again before any limited pilot.

## Action checklist

- Choose safe, authorized, sanitized, or synthetic test cases.
- Include common-path, invalid-input, conflict, and stop-or-fallback cases.
- Assign operator, reviewer, time window, and pause authority.
- Observe the full workflow, including state, handoff, review, logging, and manual route.
- Record interventions, findings, rubric results, and a next decision.

## Required deliverable

Complete a controlled dry-run record using the Pilot and Go Live Checklist, with test cases, observed states, review results, errors, fallback evidence, effort notes, and a revise, narrow, or pause decision.

## Community prompt

What did your dry run reveal that a happy-path demonstration would have missed? Share one observed fact, the boundary it affected, and the next test you need.
