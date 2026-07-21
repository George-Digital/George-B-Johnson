# Set the evaluation cadence

**I review reliability on a scheduled rhythm and after meaningful changes or failures, because a one-time evaluation becomes stale as sources, tools, users, and operating conditions change.**

I set a cadence that fits the workflow’s stakes and rate of change, then define the events that require an earlier review.

An evaluation set is a snapshot. It tells me how a particular version behaved on particular cases with particular sources and reviewers. The system can change even when nobody deliberately edits the main prompt: an authoritative document is revised, an integration changes a field, access permissions shift, a model update affects output, a new user group arrives, or operators start using the workflow for a broader task. I treat reliability as an operating practice because the conditions around the system keep moving.

I begin by identifying the signals that drive review frequency. Higher consequence, higher volume, faster-changing sources, more complex dependencies, a newer workflow, and repeated reviewer disagreement all call for closer monitoring. A stable, low-consequence internal draft with strong human review may need a lighter scheduled sample. A workflow touching sensitive information or consequential decisions needs an appropriate qualified review path and should not be loosened simply because a short period looked favorable.

I define a normal cadence in plain language. It might be a weekly review during the first month, then a monthly sample once the common path is stable; or a review after every batch of ten cases when volume is low. I write what the review includes: sample selection, rubric scores, gate failures, escalation patterns, source freshness, reviewer calibration, permission changes, fallback use, and open incidents. A meeting date alone is not a cadence unless people know what evidence they will inspect and what decisions they can make.

Then I define event-based triggers. I review early after a material prompt or configuration change, a new source type, new user group, permission or access change, integration change, model or tool behavior change that may affect the workflow, repeated gate failure, privacy concern, missed escalation, new high-impact use, or a major incident. The trigger does not guarantee that the workflow is broken; it requires me to check the evidence before I continue as if nothing changed.

I choose samples deliberately. I include common-path cases, a recent failure pattern, any changed component, and in-scope variation that may be underrepresented. I do not sample only the best outputs or only the cases an operator remembers. For restricted data, I use authorized reviewers and secure references; I do not export private cases into a convenience spreadsheet. If the necessary review cannot be conducted safely, I pause or narrow the use.

I assign cadence roles. An operational owner prepares the evidence; a reviewer or domain owner examines quality; a change owner decides whether a revision can proceed; and an escalation, privacy, safety, or compliance owner joins where the subject requires it. I record absent roles and unresolved decisions. The meeting or review does not transfer accountability from the person who must make a qualified final decision in a high-impact case.

I make the outputs of the review concrete. The group may keep the current scope, revise a component, add an evaluation case, recalibrate the rubric, restrict access, update a fallback, seek specialized review, or pause operation. Every decision goes into the change log with the evidence and owner. I also record what the evidence does not establish. For example, a small evaluation set may support continued close-review use but not expansion to new languages, users, or autonomous decisions.

I revisit the cadence itself. If incidents are rare but sources change weekly, I may need more source checks. If the workflow has little volume but each case has high consequence, I may need review of every output rather than a monthly sample. I do not treat a scheduled calendar event as sufficient when the actual risk condition changes.

A cadence is how I keep the Reliability Pack alive. It makes review expected rather than reactive, turns change into a reason to inspect, and keeps the system connected to the people who own its limits.

## Concrete example

I set a weekly evaluation review for the first month of an internal support-routing workflow. The operations owner brings five safely referenced cases, scores, all gate failures, source-version changes, and failure-log entries. After a prompt change or a new request category, the team reviews before the next scheduled meeting. The support manager decides whether to keep the scope; billing and account decisions remain with their authorized owners.

## Action checklist

- Identify consequence, volume, source-change rate, dependency, and uncertainty signals for your workflow.
- Set a scheduled review rhythm and a clear evidence agenda.
- Define event triggers that require an earlier review.
- Choose a safe, representative sampling method.
- Assign preparation, review, change, escalation, and recordkeeping roles.
- Record the possible keep, revise, restrict, pause, or seek-review decisions.

## Required deliverable

Create an **Evaluation Cadence Plan** in the Reliability Review Template. Include scheduled frequency, event triggers, sample method, evidence reviewed, participants, decision rights, record location, and a date or condition for reassessing the cadence.

## Community prompt

What change could make last month’s good score no longer sufficient evidence? Name the trigger that would make you review early and the artifact you would inspect.
