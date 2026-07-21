# Create representative test cases

**I build an evaluation set from the ordinary cases the system is meant to handle, not from a handful of convenient examples that make the workflow look better than it is.**

I select safe cases that reflect the common inputs, variations, and user needs of the intended use, then record the expected behavior before I score an output.

I start with the real shape of the work. A representative evaluation set does not mean every possible situation. It means the cases resemble the normal situations covered by my scope closely enough that a result tells me something about the workflow. I look at safe, authorized past examples or realistic synthetic cases and ask what repeats: input completeness, request type, source quality, user role, timing, format, and the decisions the reviewer must make.

I create a case inventory before I choose individual examples. I list the common categories the workflow is designed to handle and the variations that could change an output without taking it outside scope. A project-brief system might need a complete standard request, a request with an optional constraint, and a request from a different approved service line. A case does not need private personal details to be useful; the important part is the decision-relevant structure.

I do not select cases only because they passed in the past. That creates a false sense of reliability. I include ordinary cases that have enough variation to test the stated criteria: short and long inputs, all required fields present, different but authorized source formats, and requests that require the system to label uncertainty. I also keep the evaluation set separate from the examples I used to design the prompt when practical. If I only test on familiar examples, I may be checking whether the workflow repeats a pattern it already saw rather than whether it handles the intended work.

For every case, I write expected behavior before running the system. Expected behavior includes more than a target answer. I record what sources are allowed, what required fields should appear, which unknowns should be labeled, what route or reviewer should receive the output, and whether any gate should be triggered. This keeps me from changing my definition of “good” after I see a fluent result. When the right outcome is a request for clarification rather than a completed draft, I write that plainly.

I use a meaningful but manageable number of cases. A first set may contain six to twelve cases across the common patterns. The exact number is less important than coverage and review capacity. I would rather score eight well-described, safely handled cases than collect fifty outputs nobody can inspect. I record why each case belongs so a future reviewer can see which part of the intended use it represents.

I also think about who is represented. If the workflow processes different regions, languages, account types, job roles, or formats within its intended use, I ask whether the set contains the meaningful variation I expect it to handle. I do not make unsupported claims about fairness from a small test set. I do use the inventory to notice an obvious blind spot and either add a safe case, restrict the scope, or seek appropriate domain review.

Data handling remains part of the test design. I obtain appropriate permission for real examples, minimize fields, use approved tools and locations, and remove details that do not affect the evaluation. I do not paste employee records, client details, medical information, financial data, or other sensitive material into a general testing workspace. If a realistic synthetic case is safer, I label it as synthetic and preserve the reason it reflects the real workflow.

In high-impact contexts, I make the expected behavior advisory and reviewer-led. For example, an employment-support workflow may summarize stated qualifications against a job description, but it must not rank applicants or make a hiring determination. A qualified human decides what evidence matters and what action follows. The test set should show that the workflow respects this boundary, not encourage it to cross one.

A representative set is a living asset. I version it, note additions and removals, and add cases when a real failure exposes a missing pattern. I do not quietly replace a difficult case with an easier one. If a case becomes stale or outside scope, I retire it with a reason. That history helps me see whether the evaluation became more honest over time.

## Concrete example

I build an eight-case set for a membership-support request brief. Five cases cover complete standard requests across two approved membership types. Two contain an optional but relevant account note. One is a realistic synthetic request with an unclear renewal date that should produce a clarification question. Every case lists approved sources, required brief fields, the expected owner, and a safe reference. None contains member contact details.

## Action checklist

- List the common input categories and meaningful in-scope variations.
- Create a case inventory before selecting individual examples.
- Choose safe, authorized, or clearly labeled synthetic cases across that inventory.
- Write expected behavior and gates before each system run.
- Record why each case represents the intended use.
- Review the set for obvious user, format, or source-variation blind spots.

## Required deliverable

Create the first **Representative Evaluation Set** with at least six cases. For each case, include its category, safe input reference, approved sources, expected behavior, required output elements, expected route, and reason it belongs in scope.

## Community prompt

Which ordinary variation in your real workflow could make an output less useful even when the core request looks similar? Add that variation to your case inventory and explain the expected behavior.
