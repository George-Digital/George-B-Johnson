# Build a quality rubric

**A quality rubric makes “good” observable by defining the few criteria a reviewer uses to pass, revise, or reject an output.**

Build a rubric that checks whether the output is accurate, complete, usable, within scope, and fit for the user’s next action. Use it to inspect real outputs, not to replace the human judgment that owns the final decision.

A workflow is not ready to test just because it can generate an output. I need a way to decide whether that output helps the intended user or merely sounds competent. A quality rubric provides that standard. It turns a vague reaction—“this seems good” or “I do not like it”—into a small set of observable criteria a builder and reviewer can discuss.

A rubric is different from a decision rule. A decision rule tells the workflow what to do when a condition appears: if the source is missing, ask for it. A rubric evaluates the completed result: does the output clearly identify the missing source and prevent an unsupported conclusion? Rules guide the route; the rubric checks the destination. You need both.

I start with the user’s next action. What must be true for them to act with reasonable confidence? A supervisor using a shift handoff needs the correct date, staffing status, unresolved issues, and a clear owner for each next step. A researcher using a source summary needs claims separated from evidence and uncertainty. A project lead using an intake brief needs the missing information made visible before work is assigned. Those needs become criteria.

Most first rubrics can stay small. I usually begin with four to six criteria: factual grounding, completeness, format and usability, scope or safety, and support for the next action. Add a domain-specific criterion only if it changes whether the user can rely on the result. A ten-point rubric full of overlapping preferences is harder to use and less likely to improve the work.

Make each criterion observable. “Be high quality” and “be professional” cannot be scored consistently. Instead write, “Every factual claim is supported by the provided source or labeled as unknown,” “All required output fields are present,” or “The first section tells the user what to do next.” Then state what a pass, a revision, and a fail look like. If a criterion is non-negotiable—such as using approved sources or protecting sensitive information—treat it as a gate. A strong writing style cannot compensate for failing a safety or accuracy gate.

You can use a simple three-level scale: passes, needs revision, or fails the boundary. Or use a one-to-three score when comparison is helpful. The scale is less important than shared meaning. Two reviewers should be able to apply it to the same output and explain any disagreement with evidence. If they cannot, clarify the criterion rather than arguing over the score.

I use the rubric during development, not just at the end. Test it on a good past example, an imperfect output, and an edge case. If the rubric calls all three acceptable, it is too weak. If it rejects a useful human-produced example for a trivial reason, it is too rigid. Revise the criteria until they capture the failures that actually matter to the user.

AI can compare an output against a stated checklist, identify missing sections, and suggest where a claim lacks a source. That is useful assistance. I do not ask AI to certify its own output as safe, accurate, or ready for use. The responsible human reviews the evidence, applies the rubric, and decides whether the output can move forward. This is particularly important in consequential contexts, where an AI output must remain advisory and qualified people must make the final decision.

Keep a record of the rubric result with every test. Note which criterion failed, what evidence showed the failure, and what changed in the rule, SOP, input definition, or prompt. That record stops you from “fixing” outputs through random rewrites. Over time, it shows whether the system is improving and which failure still deserves human attention.

A useful rubric is a decision tool, not a performance score for the builder. It gives you a fair way to say: this output is ready for review, this one needs a specific revision, and this one is outside the workflow’s boundary. That clarity is what makes testing worth doing.

## Concrete example

A content operations manager uses a workflow to create an editorial review memo from a draft and an approved brief. The rubric checks that every priority recommendation points to a specific passage, that required brief elements are covered, that unsupported claims are labeled for verification, that the memo separates major revisions from optional polish, and that the editor can identify the next three actions without rereading the whole draft. AI can prepare the memo and check for missing sections; the editor decides whether a claim is supported and which revisions matter.

## Action checklist

- Name the user’s next action after receiving the output.
- Choose four to six criteria that determine whether the output supports that action.
- Write observable pass, revise, or fail descriptions for each criterion.
- Mark any accuracy, privacy, safety, or scope requirement as a non-negotiable gate.
- Score one useful example and one imperfect example with the rubric.
- Record the revision the results suggest.

## Required deliverable

Add a **Quality Rubric** to your System Pack. Include four to six observable criteria, pass or revise definitions, any non-negotiable gates, the human reviewer, and results from two sample outputs with one documented revision.

## Community prompt

Post one rubric criterion you are using and the evidence a reviewer would need to judge it. What kind of polished-looking output should fail that criterion?
