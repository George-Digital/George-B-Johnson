# Select tools without designing around hype

**I select capabilities that fit the approved workflow, ownership, and recovery plan rather than redesigning the work around a fashionable feature.**

I evaluate a tool as one replaceable part of an operating system, not as the system itself.

I begin tool selection after I have a boundary, a contract, a trigger, and a review path. Without those decisions, a feature demonstration can make nearly any tool look like the answer. My question is not “what can this tool automate?” It is “what must this bounded workflow do, and can this option do it without creating an ownership or safety problem?”

I write a short requirement list in ordinary language. I include the approved inputs and destinations, the needed transformation, the volume and timing, the review gate, the event record, the credential model, and the manual fallback. I also list what I do not need. This prevents me from paying for complexity or granting access merely because an option offers it.

I examine how the option handles failure. I need to know whether an operator can see a failed run, identify the affected case, stop additional processing, and rerun or complete the work manually. I avoid designs that turn a small fault into a hidden queue of wrong actions. Observability and recovery matter more in an early pilot than a long feature list.

I consider ownership before convenience. Someone must maintain the connection, review changes, manage authorized access, respond to failures, and retire the path if it no longer fits. If that owner cannot understand the basic flow or access the records needed for recovery, I choose a simpler path. I do not make a critical process depend on a single person’s undocumented setup.

I evaluate data handling and permissions in the actual use case. I confirm which data can enter the tool, where it is retained, who can access it, how credentials are scoped, and whether a sensitive workflow has the necessary organizational approval. I do not put secrets in prompts, shared documents, screenshots, or sample payloads. For higher-risk contexts, I seek the appropriate security, privacy, legal, or compliance review rather than assuming a general workflow pattern is sufficient.

I test with safe data before live use. A test should show that the tool can accept the contract, produce the required output shape, preserve the review gate, and expose a failure. It does not prove future reliability. I document what I observed and keep the implementation interchangeable enough that the operating design survives a future tool change.

The final choice may be a simple manual template, an assisted run, or a limited connection. I make that choice defensible by tying it to the workflow and its boundaries, not to novelty or claims about autonomy.

## Concrete example

I need a process that turns approved internal request details into a draft project brief. I compare options against a short list: accept only structured internal inputs, create a draft in the required format, retain an operator review, show a case reference and failure record, use authorized access, and allow a manual template if the connection fails. An option that offers elaborate autonomous actions but cannot provide a clear review queue is a poor fit. I choose the simpler option that supports the contract and recovery plan.

## Action checklist

- Write the workflow requirements before comparing options.
- Evaluate review, visibility, access, maintenance, and manual recovery alongside capability.
- Name an owner for configuration, failures, and future changes.
- Use safe or synthetic cases to test the agreed contract.
- Reject any option that requires unapproved data access or obscures a consequential action.

## Required deliverable

Document a proportionate tool-selection decision: requirements, excluded needs, ownership, data boundary, test evidence to collect, recovery requirement, and reason the selected path fits the pilot.

## Community prompt

What requirement would make an impressive option unsuitable for your workflow? Share the requirement and ask peers whether your chosen path actually meets it.
