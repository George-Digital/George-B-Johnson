# Maintain the change log

**A change log lets me connect a system’s current behavior to the reason it changed, the evidence behind it, and the review still required.**

I maintain a change log because an operating system is never just its latest prompt or configuration. It is a set of decisions made in response to evidence: a source changed, a user found an unclear handoff, a reviewer identified a quality failure, or an access boundary was updated. Without a record, people cannot tell whether a difference in output is intentional, temporary, or an unexamined drift.

I keep the log practical. Each entry says what changed, why it changed, what evidence prompted it, who approved or implemented it, which version is current, and what must be retested. I include the affected user group or workflow step and any communication needed. I do not write “updated instructions” when I can name the field, source, rule, example, review gate, or dependency that changed.

I classify changes by their operating impact. A wording clarification in onboarding may be a routine change. A new source, a changed output field, a different model setting, a modified access permission, or a revised escalation rule may require a pilot check, reviewer approval, or a temporary pause. The classification helps the owner avoid treating every edit as equally urgent while also avoiding silent changes to a consequential path.

I preserve an approved reference to the prior version when comparison matters. That may be a document history, a controlled workspace, a release note, or a secure technical record. I do not duplicate confidential prompts, inputs, or credentials in a general log. The shared entry can point to the authorized location and explain the decision in a safe summary.

Before I release a material change, I ask four questions. What problem is this change solving? Which cases or users could it affect? What test will show whether it behaves as intended? Who needs to approve or be told? These questions slow down unhelpful tinkering and make a small revision easier to inspect. If I cannot name a test or an owner, I defer the change until I can.

I treat rollback and pause as normal options. If a revision creates a new failure, the owner should know whether to return to the previous approved version, use the manual fallback, or stop the affected case type. A change log that only celebrates additions makes people reluctant to admit a revision was wrong. Honest operating records include reversals and unresolved questions.

At each review, I look for patterns across entries. Several fixes to the same source may signal that the source ownership is weak. Repeated onboarding changes may signal that the system is too hard to use at the work moment. A growing list of deferred changes may mean the system needs a scope decision rather than more patches. The log is not paperwork; it is a way to see the system’s maintenance story.

## Concrete example

A team changes an AI-assisted invoice-query response because users report that the draft does not distinguish an estimate from a confirmed amount. The log records the affected output section, three safe issue references, the new instruction to label unconfirmed values, the finance reviewer’s approval, and a retest of five representative queries. It also notes that any query involving a disputed charge remains outside the workflow and follows the existing manual route. When one retest exposes a stale billing policy, the team pauses that case type rather than adding a guess to the prompt.

## Action checklist

- Record what changed, why, evidence, owner, version, impact, and retest requirement.
- Classify the change by routine, material, or stop-level operating impact.
- Keep prior versions or approved references available when comparison is needed.
- Do not place confidential data, credentials, or raw sensitive records in the shared log.
- Name the approval and communication needed before a material release.
- Define rollback, fallback, or pause actions for an unsuccessful change.

## Required deliverable

Create a **Change Log** with a current-version record, change categories, evidence references, approval fields, test and rollback fields, user communication field, privacy-safe recordkeeping rule, and a review routine for recurring patterns.

## Community prompt

What is one change you have already made or expect to make? Share the evidence that would justify it, the test you would run, and the person who should approve it.
