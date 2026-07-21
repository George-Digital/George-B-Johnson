# Give the system a simple home

**Give your system one visible, low-friction home where an operator can find the current instructions, run the common path, review the draft, and see what to do when the case does not fit.**

A system is not usable because its prompt exists in a chat history. I want you to choose a simple home that makes the work easy to locate, run, inspect, and hand to another capable person.

I choose the home after I understand the workflow, not before. A polished portal can make an unfinished process look finished, while a clear document can make the real work visible. At this stage, I am looking for the smallest place that supports the common path: the operator can open it, gather the approved input, use the current instructions, create a draft, send it through human review, and record what happened. If the home cannot make those steps visible, it is not helping yet.

For many first systems, I use a shared document or workspace page. It can hold the one-sentence system definition, the current prompt stack, the runbook, links to approved sources, the quality rubric, the test log, and a clear owner. This is a strong choice when the operator needs context while they work and when the instructions will change during testing. I keep the live instructions separate from old experiments, so nobody accidentally runs an obsolete version.

A reusable template is better when every run begins with the same fields or output structure. A project coordinator might open an intake-brief template with spaces for the request, required details, missing information, source references, reviewer decision, and handoff. The template does not need to perform the AI step itself. Its job is to make the required information and review gate hard to overlook. I avoid a template with so many fields that the operator starts inventing answers just to make it look complete.

A short internal page is useful when several people need one stable reference. I use a page for a workflow that has a named owner, a defined trigger, and an approved source location. The page should say where the current version lives, who may run it, which data is allowed, and what happens after a failed check. It should not become a public catalog of sensitive examples, credentials, private client details, or decisions that require authorized access.

A simple demo has a different purpose. I use a demo to show the workflow moving from a safe input to a reviewable draft. It can be a short screen recording, a sequence of annotated screenshots, or a live walkthrough with a sanitized example. A demo is especially useful when a colleague needs to see where they paste the input, what the output should look like, and where the human review occurs. I do not use a demo as proof that the system works in every situation. One smooth example only shows that one path was demonstrated.

I choose among these homes by asking what the operator actually needs at the moment of work. If they need to collect repeated fields, I start with a template or form. If they need to understand context and rules, I start with a document or page. If adoption is the immediate problem, I add a short demo beside the instructions. Often the right first home is a small combination: one workspace page as the source of truth, one copyable template for each run, and one sanitized demo that explains the common path.

I make ownership explicit. Every home needs a person responsible for keeping the prompt, examples, rules, and reference links current. It also needs a visible version date or version label. Otherwise, a colleague may follow a useful-looking page without knowing that a rule changed after a test. I do not need elaborate version control for a first sprint; a dated revision note and a link to the current artifact are enough to tell an operator what to trust.

I also design for the moment something goes wrong. Near the run steps, I put the stop conditions and the human owner. If a required field is missing, sources conflict, the request is outside scope, or the case touches health, legal, employment, finance, safety, access, or another consequential decision, the operator pauses. AI may organize approved information or prepare a draft, but it does not get authority from being placed on a page. A qualified human checks evidence, resolves uncertainty, and approves any consequential next action.

Privacy belongs in the choice of home as much as in the prompt. I use approved access-controlled locations for real work, limit each page or template to the data needed for the task, and use anonymized or authorized material in a demo. I never place passwords, private records, confidential source material, or reusable personal data in a shared example. If I cannot safely show a real case, I create a realistic synthetic case and label it as such.

Before I build a more technical interface, I run the system from this simple home myself. I watch for the small friction that documentation can solve: an unclear source link, a missing input field, a reviewer who does not know what to check, or an output that has no clear destination. Those findings are more valuable than a new tool. A simple home is successful when it makes the actual workflow and its boundaries easier for a person to follow.

## Concrete example

I am building a service-request brief for a small property-operations team. I create one access-controlled workspace page with the current runbook, Prompt Stack Version 1, the rubric, and a link to a copyable brief template. The template captures the approved request details, unknown fields, source reference, draft brief, and reviewer decision. I add a three-minute sanitized demo that shows an incomplete request being flagged rather than guessed at. The coordinator reviews urgency and any safety-related issue before assigning work; the AI-assisted draft does not classify emergencies or contact a tenant.

## Action checklist

- Choose a document, template, page, demo, or small combination that supports your common path.
- Name the operator, the human reviewer, and the person who owns updates to the home.
- Place the current runbook, prompt or workflow instructions, quality rubric, and input or output template where the operator can reach them.
- Add a visible version date and a short revision note location.
- State the approved data location, privacy boundary, and stop or escalation condition.
- Create one sanitized or authorized example that shows the draft and the human-review point.
- Run the common path from the home once and note any instruction, access, or handoff friction.

## Required deliverable

Add a **System Home** section to your System Pack. Include the location or format you chose, what lives there, the current version, operator, reviewer, update owner, approved data boundary, stop condition, and either a safe example or a short demo plan for the common path.

## Community prompt

Where will a new operator open your system, and what will they see first? Share the one element you added to prevent an outdated instruction, private input, or unreviewed draft from being used.
