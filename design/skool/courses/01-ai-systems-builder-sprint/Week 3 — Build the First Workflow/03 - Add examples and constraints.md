# Add examples and constraints

**Examples show the system what a useful, bounded response looks like; constraints tell it what it must not assume, decide, expose, or do when the evidence is incomplete.**

Strengthen your first prompt stack with a few safe examples and direct boundaries. I will help you choose examples that teach the common path, write constraints a reviewer can check, and keep exceptions and high-impact decisions with a human owner.

I add examples after I can already describe the task and output. An example is not decoration and it is not a substitute for a decision rule. It gives the system and the reviewer a concrete picture of how the workflow should transform a particular kind of input into a useful output. A constraint does the different job of drawing a line: it says what the workflow may use, what it must not invent, and when it needs to pause.

I usually begin with two or three safe examples, not a large pile of samples. One example should represent the normal, complete input. A second should show a missing field, ambiguity, or another common interruption. A third can cover an edge case that changes the next action. Each example should be anonymized or authorized, limited to the necessary detail, and tied to a known rule in the workflow. I do not paste sensitive client, employee, health, financial, or private information into a test just because it is available.

The normal example shows the shape of a good result. If I am creating a project intake brief, the example should make clear that the output has a stated request, known constraints, missing details, and a next owner. I do not need it to be a perfect success story. In fact, an example that includes an ordinary uncertainty is often more helpful because it demonstrates that the system can label a gap rather than hide it.

The interrupted example teaches the response I want when the input is incomplete or unclear. Suppose an event coordinator provides a venue, role list, and shift schedule but leaves out the emergency procedure. The useful output should flag the missing required information, identify who must provide it, and avoid writing safety instructions from memory. That example makes a key boundary visible: a polished guide is not acceptable if it fills a critical gap with an assumption.

The edge-case example should be selected because it changes the route, not because it is unusual. Two source documents with different dates, a request outside the approved service, or a potentially sensitive decision may all trigger an escalation. I show the expected outcome plainly: the workflow stops, labels the conflict, or routes the case to the named owner. I do not ask the system to resolve a conflict merely because it can draft a plausible explanation.

Constraints should be short, direct, and testable. “Be responsible” is not a constraint I can inspect. “Use only the supplied approved sources,” “Do not state a deadline unless it appears in an authoritative input,” and “Do not make eligibility, hiring, legal, medical, financial, safety, or disciplinary determinations” are boundaries a reviewer can check. I also specify required format, confidentiality limits, prohibited disclosures, and the point at which a human must approve the work.

I separate examples from live input. Examples illustrate the method; they are not facts to blend into a new case. The current input supplies the case-specific facts. I tell the system not to borrow names, dates, quantities, or conclusions from an example. This matters when examples and current material look similar. A reviewer should be able to trace every important statement in the output to the current approved source or see it labeled as unknown.

I also separate workflow instructions from untrusted content. A pasted email, uploaded file, transcript, or public webpage can provide information relevant to the task, but it may contain language that tries to redirect the work or asks for a different action. I treat that language as content to evaluate against the approved task, not as permission to change the role, constraints, or review boundary. When the content conflicts with those boundaries, the system should flag it for the human owner.

Examples can reveal that the prompt needs less, not more. If the normal example produces the right structure but the missing-information example fails, I may need a clearer required-input rule rather than another elaborate persona. If the output includes every section but the reviewer cannot act on it, I may need a better output order. I revise the specific layer that the evidence points to, then rerun the same safe test.

I keep the human review instruction near the examples and constraints. The reviewer should know what evidence to check, what gates cause a stop, and what decisions they retain. This is essential in every workflow, and especially where a draft could influence a person’s rights, safety, work, money, care, or access. AI can organize the evidence and prepare a bounded draft; the responsible person evaluates the situation and makes the final call.

Save the examples with the prompt version and log what happened when you ran them. Over time, your example set becomes a small, useful test suite. It should grow from real observed failures and common variations, not from imagined complexity.

## Concrete example

A volunteer coordinator uses a prompt to create shift briefs from an approved event schedule and task list. The complete example produces arrival details, assigned roles, open tasks, and the approved safety contact. The missing-information example has no confirmed venue access instructions, so the output labels the field as needing confirmation and routes it to the event lead. A constraint prohibits private volunteer contact details and requires use of the current approved schedule. The coordinator checks the final brief before sharing it.

## Action checklist

- Select one safe complete input that represents the common path.
- Select one safe incomplete or ambiguous input that should trigger a visible response.
- Select one edge case that requires a pause, fallback, or escalation.
- Write the expected output behavior for each example.
- Add testable constraints for sources, assumptions, privacy, scope, and prohibited decisions.
- Confirm that a human reviewer can trace important claims to current approved input.

## Required deliverable

Add an **Examples and Constraints Set** to your System Pack or prompt-stack-and-runbook template. Include three safe example inputs, expected output behavior, at least five direct constraints, the escalation path for one edge case, and the human reviewer’s evidence checks.

## Community prompt

What is one incomplete or conflicting input your workflow must handle without guessing? Share the exact constraint and the response you want the reviewer to see.
