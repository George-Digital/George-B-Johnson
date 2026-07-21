# Define success and acceptance criteria

**I define success as observable behavior that helps the intended user act within the system’s boundary, then set acceptance gates that a polished output cannot bypass.**

I turn “good output” into criteria a reviewer can inspect before I build more test cases or draw conclusions from a few fluent examples.

I begin with the user’s next action. A useful output is not merely well written; it gives the named user what they need to take a bounded next step without inventing facts, hiding uncertainty, or crossing authority. For an intake brief, success may mean the reviewer can see the request, required details, missing information, and correct next owner. For a research summary, it may mean claims are traceable to the supplied source and uncertainty is explicit. I write success from the user’s work backward.

I separate acceptance criteria from preferences. A preference is a stylistic choice that may make a result easier to read. An acceptance criterion is a condition that determines whether the output can move to review, revision, or stop. I do not let an attractive format compensate for a missing source, a private-data disclosure, an unsupported recommendation, or a missed escalation. Those are gates. When a gate fails, the output is not accepted for its stated use, even if every other score is strong.

I keep the first set small. I usually select four to six criteria: grounded in approved sources, complete required elements, correct handling of missing or conflicting information, usable format for the next action, correct scope and routing, and privacy or permission compliance. Then I add one domain criterion only when it materially changes usefulness. A facilities workflow may need an explicit safety-route criterion; a content workflow may need a claim-traceability criterion. I avoid overlapping labels such as “quality,” “professionalism,” and “clarity” when they ask a reviewer to judge the same thing three times.

For each criterion, I write an observable pass statement and an observable revision statement. “The brief is accurate” becomes “Every material statement appears in the approved input or is labeled unknown with a source reference.” “The result is clear” becomes “The first section identifies the user’s next action, missing information, and owner.” Specific language helps two reviewers explain why they disagree instead of debating a feeling.

I decide which criteria are hard gates and which can be improved after review. Privacy, unauthorized source use, a prohibited high-impact decision, and missing evidence for a material claim are usually gates for the intended use. A nonessential wording issue may trigger revision without requiring a full stop. I write the consequence beside each criterion so an operator knows whether to edit, return for missing information, escalate, or pause.

Acceptance criteria should include the review process itself. I state who checks the output, what they compare it against, and what evidence they must preserve. If the workflow affects health, legal standing, employment, housing, finance, benefits, education access, safety, discipline, or essential services, I treat the AI output as advisory. A qualified human reviews the evidence and makes the final determination. I do not use a rubric to simulate qualifications the workflow does not have.

I test the wording of my criteria on an example that looks good and one that contains a meaningful failure. If both pass, the criterion is too vague. If a capable human-produced output fails because of an irrelevant formatting detail, I have made it too rigid. The aim is not to create a scorecard that makes every output fail. The aim is to surface the failures that matter to the intended user and the people affected by the work.

Finally, I write an overall acceptance rule. It might say: “Accept for reviewer use only when all gates pass and at least four of five scored criteria meet the defined level; otherwise revise, request information, or escalate.” This rule does not prove future performance. It tells the operator what to do with the current observed output and gives the team a stable decision point for evaluation.

## Concrete example

I define acceptance for a customer-service handoff brief. It must use the approved account note, identify the request and missing information, avoid promising a resolution date, and route billing disputes to the account owner. Source grounding and correct routing are gates. The support lead reviews every case before contact. A concise but unsupported promise fails; a complete brief with a minor wording issue may be revised and used after review.

## Action checklist

- Name the user’s next action and the information required to take it.
- Choose four to six distinct, observable quality criteria.
- Write a pass and revision description for each criterion.
- Mark non-negotiable accuracy, privacy, scope, routing, and decision-boundary gates.
- Name the reviewer, evidence checked, and consequence of a failed gate.
- Test the criteria against one strong and one flawed safe example.

## Required deliverable

Add **Success and Acceptance Criteria** to the Output Scoring Rubric Template. Include observable pass and revision definitions, hard gates, reviewer evidence, and one overall accept, revise, or stop rule.

## Community prompt

What is one polished-looking output that should still fail your acceptance rule? State the gate it violates and the action the operator should take.
