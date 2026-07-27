# Choose the simplest build path

**Choose the lowest-complexity path that can produce one reviewable output on the common case; add automation only after you can explain, test, and safely review the manual version.**

Choose how you will make the first workflow real without turning a small operational problem into a software project. I will help you select a build path that fits your inputs, output, evidence, and human-review boundary.

I start with the work, not with the most capable-looking tool. By this point, I know the user, the intended output, the common path, the decision rules, the boundaries, and the quality rubric. That is enough to choose a build path. If I still cannot say what goes in, what comes out, and who checks it, choosing an automation platform will only hide the missing design work.

For most first systems, I choose one of three paths. The first is a manual prompt run: I paste or attach a safe input, use a structured prompt, inspect the output, and record the result. The second is a structured intake plus prompt: a form, document, or spreadsheet row gathers the repeated fields before I run the prompt. The third is a lightweight workflow that moves a predictable input to a draft output or review queue. These are not status levels. They are different ways to make the same bounded work easier to run.

I begin with a manual prompt run when I am still learning the task. It keeps the moving parts visible. I can see whether the failure came from an incomplete input, a missing instruction, a weak example, an unclear output format, or an exception that needs a person. A manual step is not a failed automation. It is often the fastest way to learn what should and should not be automated.

I move to a structured intake when the same missing details keep slowing down the work. If a dispatcher needs location, access information, urgency signals, and a contact method before creating a service brief, a short intake form may improve the workflow more than another paragraph in a prompt. The form does not need to cover every scenario. It only needs to make the common-path inputs visible and let the operator identify what is absent.

I consider a lightweight workflow only when the trigger is clear, the input has a stable format, the output format is known, and a named person owns review. For example, a submitted project request can create a draft brief in a shared workspace for a coordinator to check. It should not silently send commitments, update records of consequence, or make a decision that belongs to a manager. The workflow should pause when required fields are absent, sources conflict, or an edge case appears.

I use a simple selection test. First, can I run the process on three safe examples this week? Second, can a capable colleague understand where the source material came from? Third, can the reviewer see the draft before it affects a customer, colleague, or record? Fourth, can I revise one part without rebuilding everything? If the answer to any of these is no, I choose a simpler path or reduce the scope.

Cost and technical access matter, but they are not the only constraints. A path that needs new permissions, an integration with confidential records, or a tool the team cannot administer is usually not the best first version. I document those needs as future possibilities. I do not let them delay a manual or form-based test that can teach me whether the output is useful.

I also distinguish assistance from authority. AI may assemble a draft, sort stated information, identify missing fields, or apply an approved format. A human still verifies sources, resolves ambiguity, approves consequential language, and decides what happens next. If the work concerns safety, health, employment, legal status, finances, access, or another high-impact outcome, I keep the system advisory and route the final decision to an appropriately qualified person.

The simplest build path should make failure easy to see. A hidden chain of steps may look efficient until it duplicates an error across many outputs. In an early test, I would rather open a draft, mark a missing detail, and improve one instruction than discover later that an unattended workflow made unsupported claims. I build for observability before convenience.

Write down the path you are choosing and the reason it fits the current evidence. Then write down what would need to become true before you add the next layer of complexity. That gives you permission to stay small now without losing sight of a future improvement.

## Concrete example

A facilities coordinator needs to turn maintenance emails into work-order briefs. The first build path is a manual prompt run using an anonymized email and an approved output template. The coordinator reviews location, access details, urgency signals, and missing information before creating the work order. After three tests show that the same four fields recur, the next version may use a short intake form. It does not automatically assign technicians or classify safety emergencies; those decisions remain with the coordinator or safety lead.

## Action checklist

- List the common-path trigger, input, draft output, reviewer, and handoff.
- Compare a manual prompt run, structured intake plus prompt, and lightweight workflow against that path.
- Choose the lowest-complexity option I can test on three safe examples.
- Name the step that still requires human judgment or approval.
- List the missing conditions that would block automation or require a pause.
- Record what evidence would justify adding a more complex layer later.

## Required deliverable

Add a **Build Path Decision** to your System Pack: the path you chose, the trigger, input, output, tools or documents used, human reviewer, stop condition, and the evidence you need before adding complexity.

## Community prompt

What build path are you choosing for the common case, and what did you deliberately leave manual? Share the review point that keeps a draft from being treated as a finished decision.
