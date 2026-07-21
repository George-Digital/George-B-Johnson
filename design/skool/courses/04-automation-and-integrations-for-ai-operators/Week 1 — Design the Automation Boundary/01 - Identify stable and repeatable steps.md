# Identify stable and repeatable steps

**I isolate repeatable work from judgment-heavy work so the pilot automates a bounded action rather than a vague role.**

I look for steps with a recognizable trigger, known inputs, consistent transformation, and reviewable result.

I do not automate a job title or a department. I automate, if at all, a specific step that occurs inside a workflow. The step needs a clear beginning and end: a complete request arrives, a defined check is performed, a structured draft is produced, or a status is recorded. If I cannot draw that boundary, I cannot test the step responsibly.

Stability means the step behaves similarly across enough real cases. I look for recurring inputs, an established source of truth, and rules that an experienced operator can explain. Repeatability does not mean every case is identical. It means I can identify the common path and recognize the signals that take a case out of it.

I make variation visible instead of averaging it away. I sort recent cases into common path, missing-information, exception, sensitive, and out-of-scope groups. Then I ask whether the candidate step can safely handle only the common path. Often the answer is yes: the workflow can format a complete request or create a draft, while exceptions pause for a person. A narrow scope is not a failure of imagination; it is a useful design constraint.

I inspect dependencies too. A step may look repeatable because one experienced operator fills in missing context from memory. If the source is informal, stale, unavailable, or limited to a person’s judgment, the step is not ready to run unattended. I either document and authorize the source, retain an operator checkpoint, or keep the work manual.

I avoid automating irreversible outcomes early. Sending a message, changing a record, assigning work, or initiating a transaction can create harm when the input or destination is wrong. I first prefer reversible work such as preparing a draft, creating a review queue, or flagging a condition. Where an action affects a person’s rights, safety, access, employment, health, finances, or legal position, a qualified human must retain the appropriate decision and approval.

I write inclusion and exclusion rules in plain language. The inclusion rule says which case enters the pilot. The exclusion rule says which signals require a pause, route, or manual process. These rules make it possible for an operator to use the workflow consistently and for a reviewer to audit whether the boundary held.

By the end of this exercise, I have one candidate step with a stable common path, not a wish to eliminate all manual work. That gives me something small enough to contract, test, and recover when conditions change.

## Concrete example

A facilities coordinator receives repair requests. I separate the work into receiving the request, checking whether location and issue are present, identifying safety signals, drafting a summary, and deciding priority. The first four steps have repeatable elements, but priority depends on safety and building conditions. My pilot accepts only complete, non-emergency requests, produces a standardized summary, and routes every safety term or missing location to the coordinator. Priority remains a human decision.

## Action checklist

- Review recent safe cases and group them by common path and exceptions.
- Choose one step with a clear start, end, input, and output.
- Name the approved source or operator knowledge the step depends on.
- Write inclusion and exclusion rules for the pilot.
- Mark every irreversible or consequential action for human approval.

## Required deliverable

Add a stable-step boundary to your Automation Readiness Scorecard: common-path definition, included cases, excluded cases, required source, human decision, and pause or route condition.

## Community prompt

What single step are you isolating, and which case types are deliberately outside its boundary? Share one exclusion rule that protects the operator or user.
