# Create a manual fallback

**I document and rehearse the manual path so the team can continue essential work when the pilot pauses or fails.**

I treat fallback as a complete operating procedure, not a note that says “do it manually.”

I build a manual fallback before I depend on an automated path. “Someone can handle it manually” is not enough when the usual operator is unavailable, the current state is unclear, or a source has changed. I write the exact human procedure for receiving the case, finding the approved inputs, completing the bounded task, obtaining review, delivering the result, and recording the final status.

The fallback begins with a trigger. I define which signals send a case to manual handling: a failed validation, unavailable connection, exhausted retry, unexpected sensitive data, rejected review, or a stop condition. I make the state visible so an operator does not accidentally work the same case in both paths. If there is any uncertainty about whether an automated action completed, the operator verifies the case reference before continuing.

I preserve the same boundaries in the fallback. The manual route does not give someone permission to access extra data, skip the reviewer, or make a decision reserved for a qualified owner. It uses the approved source, the same input and output contract, and the same escalation route. A fallback that abandons the safety design is not a recovery plan.

I make the instructions usable by someone other than the builder. They name the template or approved location, required fields, common-path steps, review criteria, destination, status update, and owner to contact. I include a secure reference to prior work when useful, but I do not rely on a private chat history or an undocumented personal shortcut.

I also decide what happens to the automation while fallback is active. The operator may pause new runs, disable a narrow trigger through the approved process, or route only affected cases to the manual queue. I record the decision and its reason. I do not leave a faulty path running while people quietly repair its outputs, because that hides the problem and complicates later review.

I rehearse the fallback with a safe case. I time the handoff, check that the operator can locate the right source and template, and confirm that the reviewer sees the same necessary evidence. A rehearsal may expose that the baseline process needs improvement too. I make that correction rather than assuming the automation will always be available.

A good fallback keeps the organization in control. It turns a failure from a scramble into a visible, owned decision: pause the automated step, complete the bounded work safely, preserve the record, and decide what evidence is needed before resuming the pilot.

## Concrete example

A workflow normally prepares a structured internal project brief. During a dry run, the approved standards source is unavailable. The coordinator moves the case to manual handling, uses the current approved brief template, confirms the source with the standards owner, and sends the draft to the project lead for the normal review. The case record notes that the automated path was paused and why. The coordinator does not create a second automated run later unless the case reference shows no draft exists and the owner authorizes a retest.

## Action checklist

- Define the signals that move a case to manual handling.
- Write the manual steps, approved inputs, template, review, destination, and status record.
- Preserve the same access, privacy, and approval boundaries in the fallback.
- Decide who may pause or resume the automated path.
- Rehearse one safe fallback case with the intended operator and reviewer.

## Required deliverable

Complete the manual-fallback section of the Error Recovery and Manual Fallback Template, including trigger, operator, steps, source, reviewer, status handling, pause owner, and resumption criteria.

## Community prompt

If your pilot stopped for a day, who would complete the work and where would they find the approved manual procedure? Share the weakest point you found in that fallback.
