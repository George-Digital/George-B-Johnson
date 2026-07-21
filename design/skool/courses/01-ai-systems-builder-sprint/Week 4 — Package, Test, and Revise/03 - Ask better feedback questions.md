# Ask better feedback questions

**Useful feedback comes from showing the right person a bounded artifact, explaining the decision you need to make, and asking questions that let them inspect clarity, fit, evidence, and risk instead of merely reacting to an idea.**

I do not ask, “What do you think of my AI system?” That question invites encouragement, broad opinions, and advice I may not be ready to use. I ask for feedback when I have a specific artifact, a specific audience or operator in mind, and a decision that the feedback can help me make. This turns critique into evidence for the next revision.

First, I decide who can observe the problem I need help with. An intended user can tell me whether the output supports their next action. A capable operator can tell me whether the runbook is clear enough to follow. A domain owner can inspect whether the rules and sources reflect real practice. A reviewer responsible for risk can check whether the boundary and escalation route are adequate. I do not need a large audience. One person with relevant experience and permission to see a sanitized artifact can be more useful than many people who only see a description.

Then I share the smallest artifact that allows a real response. That might be a screenshot of a blank template, one anonymized input and draft output, the one-page runbook, or a short demo of the common path. I include the intended user, the trigger, the output’s next action, and the current human-review boundary. I do not send a private client record, a credential, or a sensitive case to get quicker feedback. If the feedback cannot be gathered inside an approved environment, I redact the material or use a realistic synthetic case.

I explain what good means before I ask the question. For a scheduling handoff brief, good might mean that a coordinator can identify the request, missing details, ownership, and next action in under a minute. For a content-review memo, good might mean that an editor can trace key claims to sources and see which claims need verification. This gives the reviewer a standard stronger than personal taste. It also lets them tell me that the output is polished but not usable.

My best questions point to a decision. Instead of “Is this clear?” I ask, “After reading this draft, what would you do next, and what information is missing before you could act?” Instead of “Do you like the workflow?” I ask, “Which runbook step would a new coordinator misread or skip?” Instead of “Is the AI safe?” I ask, “Which statement could be mistaken for a final decision, and where should the workflow pause for a qualified human?” Those questions ask the reviewer to demonstrate their interpretation, which is more useful than asking them to predict mine.

I also ask for disconfirming evidence. If I believe my template prevents missing details, I ask a reviewer to find the field they would still have to chase. If I think the prompt keeps scope bounded, I ask them to identify the input that could lead it to overreach. I want to learn where the design fails under normal pressure, not persuade someone that the system is clever. A reviewer who says “I cannot tell what source this claim came from” has given me a practical revision target.

I keep the request small enough to respect the reviewer’s time. I might ask for a fifteen-minute review of one output and three questions, not an open-ended audit of the entire System Pack. I state what I will do with the response: use it to choose between two output formats, clarify one escalation rule, or decide whether to run another test. I do not imply that a colleague’s response transfers their responsibility to me. The named human owner still makes the final decision about the workflow and any consequential output.

When feedback arrives, I separate observations from suggested solutions. “I could not find the missing-information section” is an observation. “Put it at the top” is one possible solution. I record both, then compare the observation with the test evidence and rubric. A request to add a feature may be valid, but I do not add it just because it was suggested. I ask whether it improves the stated user’s next action, fits the current scope, and can be tested safely. Sometimes the right response is to defer it and record why.

Feedback needs a privacy and authority boundary too. I do not ask peers to decide a person’s eligibility, treatment, legal standing, hiring outcome, financial approval, safety response, or disciplinary action from an AI-generated draft. I can ask them whether the system clearly routes those matters to the qualified owner and preserves the needed evidence. Feedback can strengthen a workflow; it does not turn unqualified reviewers or an AI output into decision-makers.

Finally, I close the loop. I thank the reviewer, summarize the useful observation, record my decision, and share the revised artifact or next test when appropriate. This makes critique visible as part of building rather than as a one-time opinion poll. Over several rounds, I can see which feedback exposed real friction, which suggestions were out of scope, and what evidence supports the version I keep.

## Concrete example

I show a sanitized vendor-onboarding brief to a procurement coordinator who would use it after a supplier inquiry arrives. I explain that the brief should identify provided documents, missing required documents, source links, and the next owner; it must not approve a supplier. I ask: “What would you do next after reading this?”, “Which required detail is hardest to find?”, and “Where could this draft be mistaken for an approval?” The coordinator says the missing-documents list is buried and the approval boundary is too subtle. I record those observations, move the list above the summary, add a visible “Review required” label, and plan a retest with the same safe input.

## Action checklist

- Choose one reviewer whose role gives them relevant user, operator, domain, or risk perspective.
- Share only the smallest authorized or sanitized artifact needed for the review.
- State the intended user, trigger, desired next action, and human-review boundary.
- Define what good looks like using observable criteria from your rubric.
- Ask two to four questions that reveal what the reviewer would do, miss, distrust, or escalate.
- Ask for one counterexample, failure point, or boundary the workflow may not handle.
- Record the observations, suggested changes, your revision decision, and any request you defer.
- Thank the reviewer and schedule a retest only if the evidence points to a bounded change.

## Required deliverable

Add a **Feedback Request and Record** to your System Pack or Test and Revision Template. Include the artifact shared, reviewer role, safe-sharing boundary, definition of good, two to four feedback questions, feedback received, the decision it informed, and what you will change, defer, or keep.

## Community prompt

Post one feedback question you rewrote to make it answerable from an artifact. What decision will the answer help you make, and what should the reviewer not be asked to decide?
