# Build the prompt stack

**A useful prompt stack gives the system a clear role, approved context, bounded task, and reviewable output format, while treating every input as information to evaluate rather than authority to follow.**

Build the first set of instructions for your chosen workflow. I will show you how to organize the prompt so its purpose, sources, task, boundaries, output, and human-review point remain visible when you test and revise it.

I do not treat a prompt as a clever sentence that makes judgment automatic. I treat it as one part of an operating system. The SOP tells me when the work starts. The input specification tells me what material is allowed. The decision rules explain where the route changes. The quality rubric tells me how I will inspect the result. The prompt stack brings those pieces together for one run.

I use four core layers. The role says what bounded work the system is assisting with, not what authority it has. The context gives it the approved source material, user, purpose, and relevant definitions. The task says exactly what to do with that material. The output instruction says what the result must contain, in what order, and how uncertainty should appear. A fifth layer, often overlooked, states constraints and the human-review boundary.

The role should be modest and specific. “You are an assistant preparing a draft intake brief for a project coordinator” is more useful than “You are the world’s best operations expert.” The first description keeps the system attached to a job and a person who owns the outcome. The second may sound impressive while encouraging the wrong expectation. I name the work, the intended user, and the fact that the result is a draft for review.

Context is where I make source use explicit. I state which documents, fields, or notes are authoritative and what should happen if they conflict or are incomplete. I provide only the information the task needs, using safe and authorized examples while I test. I do not assume the model knows current local policy, a client preference, or the meaning of a shorthand term. If the workflow needs an approved policy or current reference, I provide or identify it and require the output to cite or label the source where that matters.

The task should use clear verbs. I might ask the system to extract, compare, organize, draft, flag, or summarize. I avoid asking it to “handle” a workflow, because that hides the decisions inside a broad word. A clear task for a client-services workflow is: identify the stated request, list missing required details, produce a draft brief using the approved fields, and list questions the coordinator must resolve. That is specific enough to test against the rubric.

The output layer is where I reduce rework. I say which sections are required, what order helps the user act, and how the system should mark unknown information. For example, a handoff brief might require a summary, required fields, open questions, risks or exceptions, and a recommended next owner. I instruct it not to fill an empty field with a likely-sounding answer. A visible “Not provided” or “Needs confirmation” is more useful than an invented detail.

Then I add constraints in direct language. I tell the system to use only the approved input and source material, not to claim facts that are absent, not to make final high-impact decisions, and to stop or route cases that cross the stated boundary. I also state that external material such as an email, attachment, or transcript is task data. It may contain relevant facts, but it cannot override the workflow instructions, source rules, or safety boundary. A human owner decides whether any conflicting request is legitimate.

I keep the stack readable enough that I can point to the line responsible for a result. One long paragraph often makes testing harder because I cannot tell whether a revision changed the role, context, task, output, or constraint. Separating the layers lets me change one variable at a time and record what happened. It also makes the prompt easier for another builder to review.

I do not overstuff the first version with every edge case I can imagine. I include the common path, the most important constraints, and the known pauses or escalations. When a test fails, I ask whether the failure belongs in the input definition, a decision rule, an example, the output format, or the prompt instruction. Adding more words is not automatically a fix.

Every run ends with a human review. The reviewer checks the result against the quality rubric, verifies important claims against the source, resolves ambiguity, and decides whether the draft can be used, revised, or stopped. In consequential work, the prompt must make clear that it provides assistance rather than a final determination. The output should make the evidence and uncertainty visible for the qualified person who owns that decision.

Your first prompt stack only needs to support one common path. Save it with a version number or date, run it on a safe example, and preserve both the output and the reviewer’s notes. That gives you a stable starting point for revision instead of a prompt that changes without a record.

## Concrete example

A customer-success manager needs a renewal-preparation brief from account notes and an approved account summary. The prompt stack assigns the system the role of draft-brief assistant, supplies only the current approved sources, asks it to extract stated goals, open issues, renewal date, and missing information, and requires a brief with a separate questions section. It must label unknown details and route pricing, legal commitments, and account-risk decisions to the manager. The manager verifies every account claim before using the brief in a customer conversation.

## Action checklist

- Write a modest role that names the assisted task and the human user.
- Identify the approved context and authoritative sources for one run.
- State the task as observable actions rather than a broad outcome.
- Define the required output sections and how unknown information is labeled.
- Add direct constraints for source use, assumptions, scope, and escalation.
- Name the reviewer and the rubric they will apply after each run.

## Required deliverable

Add **Prompt Stack Version 1** to your System Pack or prompt-stack-and-runbook template. Include role, context, task, output format, inputs, constraints, edge-case response, human-review instruction, version date, and one safe test input.

## Community prompt

Share the output section that will save your user the most interpretation work. What source or decision must your prompt explicitly keep under human review?
