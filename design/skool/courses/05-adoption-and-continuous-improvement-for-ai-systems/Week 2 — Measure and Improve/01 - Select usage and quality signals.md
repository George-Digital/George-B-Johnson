# Select usage and quality signals

**Useful measurement connects actual use with the quality and safety of the work, so I can improve a system without mistaking activity for value.**

I select signals after I know the user’s job and the system’s human-review boundary. A dashboard full of model activity can look impressive while telling me nothing about whether an operator had a better handoff or a reviewer received a usable draft. I prefer a small scorecard that supports a real decision: maintain, revise, narrow, pause, or retire.

I separate usage from quality. Usage answers whether the system is being reached and used in the intended situation. I may track eligible cases, starts, completed runs, reviewed outputs, manual fallbacks, and time to handoff. A low completion rate is a question, not a verdict. It may indicate poor onboarding, missing access, an unclear fit condition, or a sensible choice to use the manual route for cases outside scope.

Quality answers whether the output supports the next action and respects the system’s constraints. I choose measures that a qualified reviewer can inspect: required-field completeness, source support, correction or rework rate, adherence to the approved format, appropriate handling of missing information, and escalations. For a sensitive workflow, I may add a strict check that the output did not cross a privacy, authorization, or consequential-decision boundary. I do not use an AI-generated score as the only quality authority.

I also measure burden. A system can reduce drafting time but add reviewer time, source-search time, or support load. I ask users for a short friction signal and compare the total path with the baseline. The right measure is not always minutes saved. It may be fewer omissions, a clearer handoff, more consistent documentation, or a more visible escalation. I make the intended benefit explicit before interpreting the numbers.

I define each signal so two people would collect it similarly. “Good output” is not a measurement rule. “Reviewer marks all required sections present and no unsupported client commitment” is closer to one. I state the sample, source, owner, review frequency, and limitation. If the sample is too small or the cases changed, I say so. I resist combining different user groups or case types merely to make a number look stable.

I set thresholds as operating prompts, not as hidden performance quotas. For example, a repeated critical quality failure should trigger a pause and review; several manual fallbacks for the same reason should trigger a fit-condition or onboarding review. A threshold gives the owner permission to act before a concern becomes normalized. It does not replace judgment about context, severity, or affected people.

I make the scorecard visible to the people who need it and protect the people who do not need to be individually measured. I report aggregate patterns where possible, use approved records, and avoid turning system telemetry into covert monitoring or a basis for consequential decisions about workers. Measurement should help the team care for the process, not create a surveillance layer.

## Concrete example

For an AI-assisted service-request triage, I track the number of eligible requests, completed structured drafts, supervisor-reviewed drafts, manual fallbacks, and time until a dispatcher has a usable brief. The quality review checks whether location, urgency signals, missing details, and the escalation note are present; it does not let the system assign a safety priority on its own. If two reviewed drafts in a week hide a safety-relevant missing detail, the owner pauses use for that case type and asks the supervisor to inspect the source and instructions.

## Action checklist

- Name the decision the scorecard must support.
- Choose a small usage signal tied to the intended work moment.
- Choose quality checks a qualified human can inspect.
- Include a burden, fallback, or support signal where it affects adoption.
- Define source, sample, owner, frequency, and limitation for every signal.
- Set review prompts for recurring failure or boundary concerns.

## Required deliverable

Create a **Usage and Quality Scorecard** with the system purpose, intended decision, baseline reference, usage signals, quality checks, burden signals, data boundary, collection owner, review cadence, and clear actions for concerning patterns.

## Community prompt

Which number could look positive while hiding a problem in your workflow? Share the quality or burden signal you will pair with it and who will review it.
