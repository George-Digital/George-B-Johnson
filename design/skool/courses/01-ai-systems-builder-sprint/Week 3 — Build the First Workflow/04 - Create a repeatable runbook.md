# Create a repeatable runbook

**A repeatable runbook records the same controlled steps, inputs, review gates, and evidence for each common-path run; it does not promise that a model output can replace human judgment.**

Turn your prompt stack into a short operating guide another capable person can follow, inspect, and revise. I will help you document the trigger, preparation, run steps, review, handoff, test log, and version history that make the first workflow usable beyond one session.

A prompt can work once and still be hard to use again. The missing piece is often not more prompt language. It is a runbook: the practical sequence that tells an operator when to start, what to gather, where to place the approved context, what to run, how to inspect the draft, when to stop, and what evidence to record. I create this before I call a workflow repeatable.

Repeatable does not mean identical output every time. Language-model outputs can vary, source material changes, and human judgment remains necessary. For me, repeatable means the operator can follow the same controlled process on the same kind of input, apply the same quality rubric, and see why a result passed, needed revision, or stopped. That is a much more useful standard than pretending the workflow is fully automatic.

I begin the runbook with a clear trigger and owner. “When a completed service request arrives” is a trigger. “When someone thinks this might be useful” is not. I name who starts the run, who prepares the input, who reviews the output, and who receives the final artifact. One person can hold several roles in an early build, but the responsibilities should still be visible.

Next, I specify preparation. The operator gathers only the required, approved inputs and checks that the source is current enough for the task. They remove or anonymize information that is not necessary for the test, confirm access is authorized, and record missing or conflicting fields before running the prompt. If a required field is absent, the runbook should say whether to request it, use a defined fallback, or route the case to a human owner. It should never imply that the operator should quietly fill the gap.

The run steps should be short and concrete. Open the current prompt-stack version. Add the approved context and current safe input in the designated places. Run the prompt. Save the draft with a reference to the input and version. Apply the quality rubric. Send the draft to the named reviewer or return it for revision. Record the result. I avoid instructions such as “use good judgment” without saying what evidence the operator should check, because a new operator cannot reliably reproduce a hidden habit.

I include the review gate as part of the run, not as an optional final step. The reviewer verifies material claims against the approved source, checks required output elements, confirms the constraints were followed, and decides whether the draft can move forward. If a gate fails, the runbook says what happens next: revise the input, revise the prompt, ask for missing information, or stop and escalate. A fluent draft does not get to bypass that gate.

The stop conditions deserve their own attention. I list the signals that make the common path unsafe or inappropriate: conflicting authoritative sources, missing critical information, an out-of-scope request, sensitive data without approved handling, or a decision reserved for a qualified person. In areas such as health, law, employment, finance, safety, eligibility, or access to essential services, the runbook keeps AI assistance advisory and routes the final decision to the responsible human. The operator should be able to stop without feeling that they failed the workflow.

A test log turns the runbook into a learning tool. For each run, I record the date, prompt-stack version, safe input summary, output location, rubric result, reviewer, failure or uncertainty, and next revision. I do not need to preserve confidential content in the log. A sanitized description and a secure link or reference are enough when the original material cannot be shared. The point is to create a receipt for the decision to keep, revise, or pause the system.

I also keep a revision history. When I change a constraint, an example, the output format, or a prompt instruction, I note what changed, why, and what test prompted it. This prevents a familiar problem: an operator remembers that “we fixed that last week,” but nobody can tell which version contains the fix or whether it worked on another input. Small version notes are easier to maintain than a long narrative written at the end.

Run the guide yourself first, then ask a capable colleague to read it or follow it with a safe example if that is appropriate. Watch for places where they need to ask what a term means, which source is current, or what to do after a failed check. Those are not signs that the colleague is incapable. They are evidence that the runbook needs a clearer step, boundary, or owner.

Your first runbook should fit the common path. It can point to a separate edge-case list rather than trying to solve every exception inside every step. Once it produces a few logged, reviewed tests, you will have something that can be improved responsibly: not merely a prompt you remember using, but a documented workflow another person can inspect.

## Concrete example

A content operations coordinator runs a workflow that turns an approved article brief and draft into an editorial review memo. The runbook starts when both documents are current and safe to process. The coordinator checks that the brief, draft, and source list are present, runs Prompt Stack Version 1, saves the draft memo, and applies the quality rubric. The editor verifies claims and decides the revision priorities. If the source list is missing or a draft contains a sensitive legal claim, the coordinator pauses the run and routes it to the editor rather than issuing a recommendation. The test log records the prompt version, rubric result, and next revision.

## Action checklist

- Name the trigger, operator, reviewer, recipient, and final human owner.
- List the approved inputs and pre-run checks for the common path.
- Write the ten fixed run steps: start when; prepare approved inputs; check completeness, source authority, and data boundary; open the prompt-stack version; add context and current input in their locations; run the prompt or workflow; save the draft output and input reference; apply the review gate; deliver, revise, request information, or escalate; and record the result in the test log.
- Add a review gate with the quality rubric and a pass, revise, or stop decision.
- List the signals that require missing-information requests, escalation, or a declined run.
- Create a test log and revision history for the first three safe runs.

## Required deliverable

Add a **Repeatable Runbook Version 1** to your System Pack or prompt-stack-and-runbook template. Include trigger and roles; approved inputs and pre-run checks; the ten fixed run steps—start when, prepare approved inputs, check completeness/source authority/data boundary, open the prompt-stack version, add context and current input, run the prompt or workflow, save the draft output and input reference, apply the review gate, deliver/revise/request information/escalate, and record the result in the test log; stop or escalation conditions; test-log fields; revision history; and results from one safe run.

## Community prompt

Where could a capable new operator make the wrong assumption in your runbook? Share the step you clarified, the review gate that catches it, and the evidence you will record after the next run.
