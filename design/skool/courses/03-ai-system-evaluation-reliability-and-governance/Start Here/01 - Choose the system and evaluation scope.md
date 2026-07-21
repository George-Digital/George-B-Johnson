# Choose the system and evaluation scope

**I make reliability work useful by evaluating one defined system, one intended use, and one bounded output—not an abstract claim that AI is reliable.**

Before I build a test set, I decide exactly what system behavior I am evaluating, who uses it, and where the evaluation stops. A narrow scope gives me evidence I can act on.

I am George, and I start this course by resisting a tempting shortcut: treating “the AI system” as if it were one thing. A system is the whole path that turns an input into an outcome. It includes the approved source material, instructions, model or tool, input format, output template, operator, reviewer, handoff, and the decision someone makes afterward. If I evaluate only the model’s prose, I can miss the stale source, missing field, unclear review step, or unsafe handoff that causes the real failure.

I write a one-sentence system boundary first. Mine says: “For [specific user] in [specific situation], this workflow uses [approved inputs] to prepare [bounded output] for [named next action], with [human role] reviewing before use.” The sentence forces me to say whether the output is a draft, a triage summary, a recommendation, or a final record. It also prevents me from quietly expanding the job to every user, input type, and exception.

Next, I identify the intended use. Intended use is not what a tool could possibly do; it is the limited situation in which I am prepared to test and operate it. A service team may use a workflow to draft a complete-request brief from a standard intake form. That does not mean it can interpret every customer email, assign technicians, or make a safety judgment. I record the common path, the input range, the output format, and the user’s next action. Then I name what is out of scope for this version.

I choose an evaluation question that can be answered with observed outputs. “Is this system good?” is too broad. “On complete standard intake forms, does the system produce a reviewable brief that contains the required fields, labels unknown information, and does not make an unsupported commitment?” gives me something to test. I can collect cases, score them, and decide whether to keep the scope, revise the workflow, or pause it.

I separate system quality from business results. A useful evaluation can measure factual grounding, completeness, correct routing, privacy handling, clarity, and whether the human reviewer can take the next step. It cannot honestly promise that a support brief will raise retention, that a recruiting summary will improve hiring, or that a content review will create rankings. Those outcomes have many causes and usually need a different study. I start with the behavior I can inspect directly.

I also state the consequence boundary early. If a draft may influence a person’s health, legal status, job, pay, credit, housing, benefits, education, safety, discipline, or access to essential services, I do not describe it as a decision system. I keep the output advisory, ensure the evidence is visible, and assign final review to a qualified human with authority for that context. If I cannot name that person or provide an appropriate review path, I narrow the use or stop the evaluation.

Scope needs a time boundary as well. I state which source versions, tool configuration, prompt version, and operating date I am evaluating. A pass on last month’s prompt and policy document is not permanent evidence for today’s setup. I do not need a laboratory. I need enough version information that a later reviewer can tell what produced the result and what changed afterward.

Finally, I decide what evidence I will preserve. I use safe, authorized, anonymized, or synthetic inputs. I keep a case identifier, source status, system version, expected behavior, score, reviewer, and any failure reference. I do not duplicate confidential records in a shared evaluation document just to make the log feel complete. A secure reference and a sanitized description are enough when access is restricted.

This first scope note is a practical agreement with myself and the people who use the workflow. It says what I will test, what I will not claim, and who still owns the consequential judgment. That makes the rest of the course more honest and much easier to operate.

## Concrete example

I evaluate a workflow for an operations coordinator that turns a completed vendor request form into a routing brief. The scope is standard requests with an approved vendor name, item description, delivery need, and budget owner. The output lists required fields, missing information, and the next owner for review. It does not approve spend, select a vendor, or handle emergency purchases. The coordinator reviews every brief; a procurement lead handles exceptions.

## Action checklist

- Write a one-sentence boundary for the system, user, input, output, next action, and reviewer.
- Name the common path that the first evaluation covers.
- List the input types, users, outputs, and decisions that are out of scope.
- Write one observable evaluation question.
- Record the source, prompt or workflow, and tool versions being evaluated.
- State whether any high-impact decision boundary requires a qualified human or a narrower scope.

## Required deliverable

Create an **Evaluation Scope Note** in the Evaluation Set Template. Include the system boundary, intended use, common path, evaluation question, version details, out-of-scope cases, evidence location, and named human-review boundary.

## Community prompt

Post your one-sentence system boundary and evaluation question. What is one capability you are deliberately excluding so you can test the intended use honestly?
