# Week 1 — Design the Automation Boundary anchor video script

**Embed on:** `Week 1 — Design the Automation Boundary/01 - Identify stable and repeatable steps.md`

**Runtime:** 6–8 minutes

**Outcome:** Members can define one stable common-path step, write an input and output contract, map an authorized trigger and visible states, and place human approvals and stop conditions before consequential action.

## What to demonstrate on screen

Keep using the **sanitized, synthetic** `DEMO-104` internal request-to-brief workflow. Show only fictional field names and safe placeholders; the workflow creates a draft and stops for lead review.

- Open the Week 1 lessons in order:
  - `Week 1 — Design the Automation Boundary/01 - Identify stable and repeatable steps.md`
  - `Week 1 — Design the Automation Boundary/02 - Define input and output contracts.md`
  - `Week 1 — Design the Automation Boundary/03 - Map triggers, handoffs, and state.md`
  - `Week 1 — Design the Automation Boundary/04 - Place human approvals and stop conditions.md`
- Open `Resources/Automation Readiness Scorecard.md` to connect the stable-step boundary to prior readiness evidence.
- Open `Resources/Input and Output Contract Template.md`. Enter only fictional examples: required fields `purpose`, `audience`, `deadline`, and `approved standards reference`; output fields `draft brief`, `missing-information label`, and `case reference`.
- Open `Resources/Integration and Data Flow Map.md`. Draw the authorized trigger and states: received → validating → waiting for input / ready for review → returned for revision / manually handled → completed. Add sender, receiver, artifact, owner, and expected response at each handoff.
- Show a simple approval-and-stop matrix on screen, based on the fields in `Resources/Automation Design Prompt.md`: action, reviewer, evidence, pass condition, stop signal, manual route.

Use a static tool-neutral diagram, document editor, or whiteboard. Never display a real request, source record, destination, API configuration, credential, password, key, token, or secret.

## Teleprompter script

[ON SCREEN: Week 1 title and a box around “one stable step, not a whole role.”]

This week, we turn a possible automation into a bounded operating design. I am not trying to automate a role. I am isolating one step that has a clear start, a clear end, known inputs, and a result a person can inspect.

[ON SCREEN: Synthetic workflow: “complete request → validate → create draft brief → lead review.”]

Our synthetic example is still `DEMO-104`. The candidate step is not “handle internal requests.” It is: for a complete, approved internal request, check the required fields and prepare a structured draft brief for lead review. The lead remains responsible for approval. The workflow does not send externally and does not make a final decision.

[ON SCREEN: `Resources/Automation Readiness Scorecard.md`; highlight stable step, variation boundary, and human authority.]

The readiness work from Start Here gives this boundary its evidence. Look at recent safe cases and sort them into common-path, missing-information, exception, sensitive, and out-of-scope groups. A step is repeatable when we can explain the common path and recognize the signals that take a case out of it.

A narrow boundary is not a compromise. It is how we avoid pretending that hidden judgment is a rule. If an experienced coordinator relies on private context, a changing policy, or a consequential judgment, that work stays with the authorized person or returns to the manual path.

[ON SCREEN: Inclusion rule: “complete internal requests with approved reference.” Exclusion rule: “missing field, conflicting source, sensitive content, unusual request type.”]

Write inclusion and exclusion rules in plain language. For this example, a complete internal request with the approved reference enters the pilot. A missing deadline, a conflicting reference, unexpected sensitive content, or an unusual request type does not. It pauses, routes, or stays manual. That is a successful boundary doing its job.

[ON SCREEN: `Resources/Input and Output Contract Template.md`; fill fictional required and optional fields.]

Next, make the contract explicit. A workflow cannot safely accept “whatever someone sends” and return “something helpful.” The input contract names the required fields, optional context, approved source, allowed format, freshness check, and behavior when something is absent or conflicting.

For `DEMO-104`, the required fields are purpose, audience, deadline, and an approved standards reference. Optional context might be a safe internal category. If the deadline is absent, the workflow does not invent one. It marks the case waiting for input or asks the operator to obtain the field.

[ON SCREEN: Contract output section; highlight “required output fields,” “unknown label,” and “prohibited action.”]

The output contract starts from the reviewer’s next action. The draft brief needs the request facts, the source reference, a clear missing-information label, and a case reference. It does not need to claim that a decision is approved. It must not send the brief, change an authoritative record, or make a consequential recommendation on its own.

Test the contract with a complete case, an incomplete case, and a conflicting case. The desired outcome for two of those may be a controlled pause. A polished output based on an unsupported assumption is not a pass.

[ON SCREEN: `Resources/Integration and Data Flow Map.md`; draw trigger, states, owners, and handoffs.]

Then map the lifecycle. A trigger must be precise and authorized. “When something changes” is not enough. For our example, the trigger is a complete internal request in the approved intake process. Give the case a reference so a duplicate or late update can be recognized.

Use state labels an operator can understand: received, validating, waiting for input, ready for review, returned for revision, manually handled, and completed. A case is not complete merely because a draft exists. It is complete only after the required review and the documented handoff occur.

At every handoff, name the sender, receiver, artifact, expected time, and owner of the next action. A notification is not a handoff until someone owns what happens next.

[ON SCREEN: Approval-and-stop matrix.]

Finally, place approval before consequential action. “Human in the loop” is too vague. Name the reviewer, the evidence they check, their authority, and the outcomes they can choose: approve, return, or route to manual handling.

Also name the stop conditions. Missing authorization, an unapproved source, conflicting facts, unexpected sensitive content, an unexpected destination, repeated failure, or an out-of-scope request should pause the normal path. Preserve a minimal event record, notify the responsible owner, and use the manual procedure. The automation cannot grant someone authority just because it can route information.

[ON SCREEN: Boundary summary: common path, contract, trigger/state, approval, stop/manual route.]

At the end of this week, your design should be small enough for another operator to explain. It should say what enters, what is produced, where it waits, who decides, and when it stops. Next, we will build a proportionate integration path around that design without exposing credentials or expanding the data boundary.

## Member action

1. Add common-path, inclusion, exclusion, human-decision, and pause rules to `Resources/Automation Readiness Scorecard.md`.
2. Complete `Resources/Input and Output Contract Template.md` for one step, including missing-input behavior, source authority, required output, and prohibited actions.
3. Update `Resources/Integration and Data Flow Map.md` with the exact trigger, visible states, handoffs, owners, review gate, and stop/manual route.

## Recording checklist

- [ ] Embed path is shown exactly as `Week 1 — Design the Automation Boundary/01 - Identify stable and repeatable steps.md`.
- [ ] Runtime is rehearsed to 6–8 minutes.
- [ ] The synthetic workflow has a clear common path and explicit exclusions.
- [ ] The contract, trigger, states, handoffs, approval, and stop matrix are shown.
- [ ] Screen examples use only fictional fields, references, and roles.
- [ ] No secret, credential, account, source record, or real destination is displayed.
- [ ] Consequential actions are explicitly kept with an authorized human.
- [ ] No tool capability or operating result is promised.
