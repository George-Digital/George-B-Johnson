# Week 4: Package, Test, and Revise the System Honestly

**Embed on:** `Week 4 — Package, Test, and Revise/01 - Give the system a simple home.md`  
**Target duration:** 10–11 minutes  
**Viewer outcome:** The member can put the current workflow in one simple home, run safe manual tests with human review, request bounded feedback, make traceable revisions, and complete a System Pack that states its limits.

## What to demonstrate on screen

1. Open `Week 4 — Package, Test, and Revise/01 - Give the system a simple home.md` briefly as the first lesson in this folder. Do not read the lesson prose as narration.
2. Open these exact local artifacts side by side: `Start Here/Resources/System Pack Template.md`, `Week 3 — Build the First Workflow/Resources/Prompt Stack and Runbook Template.md`, and `Week 4 — Package, Test, and Revise/Resources/Test and Revision Template.md`.
3. In a blank, unsaved mock workspace titled **System Home — Maintenance Request Completeness Brief — synthetic demo**, show a simple home with links or headings for the current prompt/runbook, input template, quality rubric, test log, current version/date, operator, reviewer, approved data boundary, stop route, update owner, recipient/next owner, incident route, handoff-review date, and accepting owner. Do not create or show a live system, client workspace, access credentials, tenant records, addresses, contacts, photos, or support tickets.
4. Use three clearly labeled synthetic inputs: a complete ordinary maintenance request; a request missing the exact location/access details; and a request with a possible safety concern that must route to a human. In the Test and Revision Template, record expected behavior before showing outcomes.
5. Show two manual test results. Test 1 can pass review. In Test 2, show an imperfect draft inventing `Gate code: 4582` from no source. Mark the factual-grounding gate failed, show the human reviewer stopping use, and record the specific failure without blaming the model.
6. Demonstrate a bounded revision: add `Access details: needs confirmation` to the output template and a pre-run/access check to the runbook. Rerun the same synthetic Test 2 and record the revised result. Explain that a retest is evidence for this case, not a guarantee.
7. Show a clearly labeled **synthetic reviewer-note rehearsal** in the feedback section: “I cannot find missing information before the summary.” Record the observation separately from the suggested solution. State on camera that members must request real, authorized feedback from a relevant human when appropriate; the rehearsal is only a privacy-safe recording example.
8. Complete the final-handoff and limitations fields: current location/version, who may operate, human reviewer, update owner, recipient/next owner, approved source location, stop/escalation and incident route, handoff-review date, accepting owner, known limitation, and next smallest improvement.

## Teleprompter script

[ON SCREEN: `Week 4 — Package, Test, and Revise/01 - Give the system a simple home.md` selected.]

This final week is where we turn a collection of work into one honest, usable package.

That word—honest—matters. A System Pack is not a declaration that the workflow is finished forever. It is a clear record of what the current version does, what it does not do, what evidence you collected, and where a person still has to make the decision.

[ON SCREEN: Open `Start Here/Resources/System Pack Template.md`, `Week 3 — Build the First Workflow/Resources/Prompt Stack and Runbook Template.md`, and `Week 4 — Package, Test, and Revise/Resources/Test and Revision Template.md` side by side.]

These three documents now need to work together. The System Pack is the handoff. The prompt stack and runbook tell an operator how to run the common path. The test and revision record gives us the evidence for keeping, changing, narrowing, or pausing the system.

I’m going back to a completely synthetic maintenance-request completeness brief. No client, tenant, member, address, contact, ticket, screenshot, or credential is on screen. The point is to show the structure of the work, not to display private data.

[ON SCREEN: Blank mock workspace titled `System Home — Maintenance Request Completeness Brief — synthetic demo`. Add headings: Current version, Runbook, Prompt stack, Input template, Rubric, Test log, Stop route, Update owner, Recipient/next owner, Incident route, Handoff-review date, Accepting owner.]

First, I give the system a simple home. I do not need a polished portal to begin. I need one visible place where the operator can find the current instructions, prepare the approved input, make a draft, apply human review, and record what happened.

For this synthetic example, the home has the current version and date at the top. It has the prompt stack and runbook, the input and output template, the quality rubric, and the test record. It also says who operates the system, who reviews it, what data location is approved, and where the work stops.

It also makes handoff ownership visible. I include an update owner responsible for recording the next revision, the recipient or next owner of the approved draft, an incident route, the date the handoff was reviewed, and the person accepting the current version. Those are role labels in this synthetic demonstration, not real staff or contact details.

The trade-off here is deliberate. A complex interface might look more finished. But a simple, access-controlled page or document is easier to update while I am still learning. I would rather make the source of truth obvious than build an attractive home around instructions that are already out of date.

[ON SCREEN: Add `Operator: coordinator`; `Reviewer: coordinator/safety lead`; `Update owner: coordinator`; `Recipient/next owner: property-operations lead`; `Approved data: authorized workspace only`; `Stop and incident route: missing critical details or source conflict → coordinator; possible safety concern → safety lead through the approved incident process`; `Handoff reviewed: 2025-03-08`; `Accepting owner: property-operations lead`.]

The system home does not give the draft authority. The operator still checks the input. The reviewer still verifies important claims. And if there is a safety concern, a conflict, or missing critical information, the workflow pauses and routes to the right human owner.

Now we test it manually.

[ON SCREEN: Open `Week 4 — Package, Test, and Revise/Resources/Test and Revision Template.md` at Test plan and Safe test inputs.]

I begin with a question small enough to answer. In this case: can the workflow turn a complete synthetic request into a reviewable completeness brief without inventing key details? And, when the location or access information is missing, does it make the gap visible instead of guessing?

Before I run anything, I record the version, the operator, the reviewer, the expected behavior, and the gate that matters. For this workflow, factual grounding is a gate. If the output states an important detail that is not in an approved source, it cannot move forward just because the rest is nicely formatted.

[ON SCREEN: Fill safe test-input table with three labels: `1 — complete common path`, `2 — missing location/access`, `3 — possible safety concern: route`. Keep all input text synthetic.]

I have three invented cases. The first has the ordinary details needed for the common path. The second lacks exact location and access details. The third contains a possible safety concern, so the expected behavior is a pause and route—not an automated classification.

Three manual tests are not statistical proof. They are enough to see whether the workflow can be operated, reviewed, and revised without hiding the weak spots.

[ON SCREEN: Test 1 observed outcome. Show a synthetic brief with stated issue, confirmed location, missing fields if any, and reviewer decision `pass for coordinator use`.]

In the first test, the brief uses the stated synthetic input and makes the next action clear. The coordinator checks the source, applies the rubric, and passes it for the limited purpose of clarifying and routing the request. That does not mean the system has proved itself in every situation. It means this one documented common-path run met the stated criteria.

[ON SCREEN: Test 2 input clearly lacks access details. Show `Draft 0` with `Gate code: 4582`.]

Here is the more useful test. The synthetic input has no gate code. But Draft 0 has inserted one. This is the imperfect output I want us to see clearly. It may have come from an example, a prior assumption, or a badly bounded instruction. The cause still needs investigation. What matters right now is the evidence: the gate code is unsupported.

[ON SCREEN: In Rubric results, mark `Test 2 / Factual grounding / fail / Gate passed? No`. In Observed outcomes, enter `Human reviewer’s decision: stop/revise`.]

The human reviewer stops the output. We do not quietly correct the code and call the test a pass. We record the intervention because it tells us the current workflow is not safe to use for this case.

I also avoid the vague explanation that the model was confused. That does not guide a revision. A useful record says: “The draft invented an access detail when the input was incomplete. The factual-grounding gate failed. The operator could not use the output without correction.”

[ON SCREEN: In Revision decisions, add `Revise`; `Output template: add Access details — Needs confirmation`; `Runbook: pre-run access check`; `Version 1.1`; `Retest Test 2`.]

Now I make one bounded change. In the output template, I add a visible field: “Access details: needs confirmation.” In the runbook, I add a pre-run check for location and access information. I do not change five parts of the system at once. If I did, I would not know what made the difference.

[ON SCREEN: Rerun Test 2 with `Access details: Needs confirmation`; show reviewer decision `revise/request information`, not `pass`.]

When I rerun the same safe case, the revised output labels the gap and asks for the missing information. The reviewer can now route a question without inventing a fact. That is improvement for this case. It is not a guarantee about every future input, and it is not a reason to remove review.

[ON SCREEN: Show Test 3 expected route only: `Possible safety concern → pause and route to safety lead`.]

For the third case, I do not ask the workflow to decide whether the situation is an emergency. It can summarize the stated concern and preserve the source reference. The qualified human owns the assessment and the next action. A stop route is a successful outcome when the workflow has reached its boundary.

Now let’s talk about feedback.

[ON SCREEN: Scroll to Feedback questions. Enter `Artifact: synthetic brief; no real records shown` and a clearly labeled `Synthetic reviewer-note rehearsal`.]

For this recording, I’m showing a synthetic reviewer-note rehearsal. The note says, “I cannot find missing information before the summary.” This is not a claim that a real person reviewed this demo. It is a privacy-safe way to show how to record feedback.

In your own work, ask a relevant, authorized human when appropriate: an intended user, a capable operator, a domain owner, or a reviewer responsible for the boundary. Share the smallest safe artifact they need. Do not send a private record to get quicker feedback, and do not ask a peer to make a decision that belongs to a qualified person.

[ON SCREEN: Split `Observation: missing information is hard to find` from `Suggested solution: move it above the summary`.]

I separate the observation from the suggested solution. The observation is evidence: the reviewer could not find a field. Moving it above the summary is one possible response. I compare that idea against the user’s next action and the rubric before I change the design.

[ON SCREEN: In System Pack, show sections or links for scope, workflow map, rules, runbook, examples, rubric, test evidence, feedback, revision history, limitations, next improvement.]

Finally, I assemble the System Pack as a handoff. Someone opening it should be able to answer: What is this system for? Who is it for? What input does it accept? What output does it make? Who reviews it? Where is the approved version? What tests have been run? What changed? And when must the workflow stop?

The limitations are part of the handoff, not a footnote. This synthetic system cannot decide urgency, access, or work assignment. It cannot use unapproved data. It cannot resolve conflicting source information. Those limits make it safer and easier to operate honestly.

[ON SCREEN: Complete Final handoff and Next-improvement fields: `Update owner: coordinator`; `Recipient/next owner: property-operations lead`; `Stop, escalation, and incident route: possible safety concern → safety lead through approved incident process`; `Handoff reviewed: 2025-03-08`; `Accepting owner: property-operations lead`; `Next improvement: test a conflicting-location case`; `Evidence needed: reviewer result from a safe synthetic test`; `Decision: keep, improve, or pause after review.`]

The handoff is not complete until those owners and routes are explicit. The update owner knows who records the next revision. The recipient or next owner knows who receives the approved draft. The incident route says who receives a possible safety concern through the approved process. The handoff-review date makes the version’s review point visible, and the accepting owner confirms who takes responsibility for the current version. These can be role labels in a safe demo; never publish real contact or incident details.

Then I name one next smallest improvement and the evidence I need before making it. Maybe the next test is a conflicting-location case. Maybe I need a reviewer to inspect the new output order. Maybe I need to pause because the approved data access is not in place. All of those are responsible decisions.

[ON SCREEN: Final System Pack checklist beside the current version, limitation, human reviewer, and next test.]

You do not finish this sprint by declaring victory. You finish it by leaving behind a current, reviewable system with evidence, boundaries, and a clear next decision. That is a System Pack another capable person can understand and improve.

## Member action

**Folder deliverable:** Complete and save the member’s **Final System Pack** based on `Start Here/Resources/System Pack Template.md`, with the current runbook/prompt linked from `Week 3 — Build the First Workflow/Resources/Prompt Stack and Runbook Template.md` and at least two manual test records completed in `Week 4 — Package, Test, and Revise/Resources/Test and Revision Template.md`.

The final folder deliverable must include the current system home and version; scope; workflow map; decision rules; runbook; prompt or workflow instructions; examples and constraints; rubric; at least two safe manual test records; one feedback request and record; revision evidence; limitations; privacy and human-review boundaries; and final handoff details that name the update owner, recipient or next owner, stop/escalation and incident route, handoff-review date, and accepting owner. Include one next-improvement decision with the evidence required before acting on it.

## Recording checklist

- [ ] Open the exact Week 4 lesson and all three local templates named above.
- [ ] Use only the clearly labeled synthetic maintenance-request cases; do not show real client, tenant, location, access, ticket, image, account, credential, or community data.
- [ ] Show a simple system home and explain why a visible source of truth beats premature interface work.
- [ ] Record expected behavior before showing the manual-test outcomes.
- [ ] Show the invented gate-code failure, score the factual-grounding gate as failed, and have a human reviewer stop use.
- [ ] Make one bounded revision, rerun the same safe case, and state that the result is not a guarantee.
- [ ] Label the feedback note as a synthetic rehearsal; direct members to seek appropriate authorized human feedback for real work.
- [ ] Show limitations, the safety stop route, privacy boundary, final handoff, and next evidence-based improvement.
- [ ] In the demo and final handoff, visibly name the update owner, recipient/next owner, incident route, handoff-review date, and accepting owner; use only synthetic role labels and no real contact or incident details.
- [ ] Do not imply the system makes urgency, safety, access, routing, or other consequential decisions on its own.
