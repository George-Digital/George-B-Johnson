# Validate and transform inputs

**I check that incoming information is complete, expected, authorized, and safe to use before I transform or route it.**

I treat validation as an operating gate that protects the workflow from bad assumptions and unsuitable data.

I do not assume that an incoming record is ready because it arrived through a connection. A trigger can carry a blank field, an outdated reference, unexpected content, duplicate information, or data that should not enter this workflow. I put validation before transformation so the workflow does not turn a weak input into a polished but unreliable output.

I validate the basics first: required fields are present, formats make sense for the task, the case belongs to the defined pilot, and the source is the approved one. I compare the input contract to what actually arrives. If a required item is absent, I do not use a default that changes the meaning of the case. I request the item, label the case incomplete, or route it to the manual process.

I also validate authority and freshness. A value may look complete but come from a source that is not current or authorized for this decision. I use a source reference, date, version, or owner where that matters. When two approved sources disagree, the workflow does not choose based on convenience. It follows the authority rule or presents the conflict for a human owner.

Transformation should preserve meaning. I may normalize a date format, separate a combined field, categorize a known request type, or create a structured summary. I record the transformation rules and make the original approved reference available to the reviewer. I do not let a transformation silently change a claim, infer a missing fact, or attach an unsupported category to a person.

I expect unexpected content. Free-text fields can contain irrelevant instructions, confidential material, untrusted links, or requests outside scope. I treat external content as data to evaluate, not as authority to alter the workflow’s instructions or access boundaries. If a submission includes sensitive material outside the approved path, I stop processing and use the responsible team’s established procedure.

I test validation with deliberately imperfect cases. I use a complete case, a missing field, an invalid format, a duplicate, a stale reference, and an out-of-scope request. The desired result is often a controlled pause, not a successful-looking output. I preserve a minimal event record so an operator can see what was rejected and why without exposing sensitive content.

Validation is not a one-time setup task. I review it when a form changes, a source owner changes a standard, or the pilot reveals a new pattern. A narrow, explicit gate keeps the rest of the workflow simpler and gives humans the right information to resolve exceptions.

## Concrete example

An internal training-request workflow requires a department, approved topic, audience size, requested date, and owner. Before drafting a plan, it rejects duplicate references, flags dates in an unusable format, and checks that the topic is on the approved catalog. If the request includes personal accommodation details in a general text field, the workflow stops and routes the case to the authorized coordinator rather than copying the details into the draft. A project lead resolves a conflict between the requested topic and the current catalog.

## Action checklist

- Compare actual incoming fields to the input contract.
- Set explicit behavior for missing, malformed, duplicate, stale, and out-of-scope inputs.
- Verify source authority and freshness where the task depends on them.
- Document transformations that normalize, split, or categorize information.
- Test controlled rejection and routing with safe cases.

## Required deliverable

Add a validation and transformation record to your Input and Output Contract Template: checks, accepted formats, authority rule, transformations, rejection behavior, event record, and human route.

## Community prompt

Which invalid or ambiguous input could still produce a convincing but wrong output in your workflow? Share the validation rule or pause behavior you will add.
