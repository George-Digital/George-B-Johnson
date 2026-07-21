# Run a small manual test

**Run your system manually on a few safe, realistic inputs, score the actual drafts against your rubric, and treat a failed gate or unclear result as evidence to investigate rather than something to smooth over.**

A small manual test turns a documented workflow into observable evidence. I will show you how I test the common path before I add automation, how I protect real information, and how I record results that can support a responsible revision.

I begin with a question that a small test can answer. I do not ask whether the system is universally good. I ask something bounded, such as: “Can this workflow turn a complete approved request into a reviewable brief without inventing required details?” A second test question might be: “Does it visibly pause when a required source is missing?” The question tells me which inputs to choose, which rubric criteria matter most, and what result would change my next decision.

I usually run two or three manual cases. The first represents the ordinary common path with complete, authorized information. The second contains a realistic gap, ambiguity, or missing field that the workflow should expose. The third can be a conflict, an out-of-scope request, or another known edge case that should cause a pause or escalation. Three cases are not a statistical proof. They are enough to reveal whether the system can be operated, reviewed, and improved without hiding its weak spots.

I use real work only when I have permission, approved access, and a safe way to process it. If those conditions are not present, I create a realistic synthetic case from the actual structure of the work, without copying names, addresses, account details, employee information, health information, financial details, or other unnecessary confidential material. I label a synthetic case clearly. A realistic test is useful when its fields, ambiguity, and expected route resemble the work; it does not need private facts to create learning.

For each case, I freeze the version I am testing. I note the date, system-home location, prompt-stack or runbook version, safe input summary, operator, and reviewer. Then I follow the runbook exactly as it is written. I do not quietly correct a missing field, add an explanation halfway through, or rewrite the output before I score it. If I need to intervene, that is an observed outcome. It may mean the runbook is unclear, the input contract is incomplete, or the prompt needs a boundary it does not yet have.

After I generate the draft, I apply the rubric criterion by criterion. I look first at the gates: factual grounding, required elements, privacy and scope boundaries, and any domain-specific rule that makes the output unsafe to use if it fails. I compare important statements to the approved input. I check whether unknown details are labeled, whether the next action is clear, and whether the reviewer can see what requires judgment. A fluent draft can still fail if it creates a plausible but unsupported claim or moves beyond its authority.

I record outcomes in plain language. “Test two failed the required-input gate because the draft chose a deadline from an example instead of labeling the deadline as unknown” is useful evidence. “The model was confused” is not specific enough to guide revision. I capture the output or a secure reference to it, the rubric result, what worked, what failed, the reviewer’s decision, and the smallest suspected cause. When live outputs cannot be stored in the test record, I keep a sanitized description and an approved secure reference instead of copying confidential material into a shared log.

A manual test also shows whether the system’s home works. I watch the operator experience. Could I find the current instructions? Did I know which source was authoritative? Did the output template make missing information visible? Did the reviewer understand what they had to approve? A good draft is not enough if the process depends on someone remembering an undocumented step or searching through old messages for the current prompt.

I do not let the system act on the test output without the normal human review. The reviewer verifies source-backed claims and retains decisions about safety, legal, financial, health, employment, eligibility, access, discipline, or any other high-impact outcome. If an input contains sensitive material that the chosen tool or location is not approved to handle, I stop the test. The test plan must respect the same boundaries as live work.

When a case fails, I resist changing five things at once. I classify the failure: input problem, source conflict, unclear rule, weak example, prompt instruction, output format, runbook step, or review gap. Then I choose one small revision and rerun the relevant safe case. Keeping the original result matters. It lets me show what changed, why I changed it, and whether the next version actually behaved differently.

A small test is complete when I can make an honest next decision: keep the common path as a draft workflow, revise one component, narrow the scope, or pause because the system is not safe or useful enough yet. The goal is not a pass rate that looks impressive. The goal is evidence that a human owner can understand and use.

## Concrete example

I test a grant-program inquiry summary workflow with three anonymized inputs. The complete inquiry includes the program name, stated request, deadline, and approved policy link. The incomplete inquiry omits the deadline, so I expect the draft to label it “Needs confirmation” rather than supply one. The third input asks whether an applicant is eligible, which is a decision reserved for program staff; I expect the workflow to summarize the question and route it to the staff reviewer. I score each draft against the rubric, save secure references, and record that the second test needs a clearer instruction not to copy dates from examples.

## Action checklist

- Write one narrow question your manual test will answer.
- Select two or three safe inputs: a common-path case, a missing or ambiguous case, and an edge case if appropriate.
- Confirm permission, approved access, and data minimization; use a clearly labeled realistic synthetic input when real data is not appropriate.
- Record the system version, input summary, operator, reviewer, and expected behavior before each run.
- Follow the current runbook without silent corrections and save the draft or an approved secure reference.
- Score each output against every rubric criterion and mark any gate failure clearly.
- Record what worked, what failed, the human-review decision, and one suspected cause for each result.
- Choose one bounded revision or a pause decision based on the evidence.

## Required deliverable

Complete the **Test Plan and Results** portion of the Test and Revision Template for at least two manual runs. Include safe input summaries, expected behavior, observed outcomes, rubric results, human-review decisions, secure output references where needed, and one evidence-based next step.

## Community prompt

What did your smallest test reveal that you could not see from the prompt or runbook alone? Share the case type, the rubric result, and the one part you will revise or keep under human review.
