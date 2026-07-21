# Write the operating handoff

**I document the current process so an authorized operator can run, review, recover, and update it without relying on my memory.**

I turn the pilot design and evidence into a clear handoff with ownership, boundaries, and a practical change path.

I consider a workflow incomplete if only its builder knows how it works. An operating handoff translates the pilot into instructions another authorized person can follow. It does not need to be long, but it must make the common path, review point, exception route, and ownership visible.

I start with purpose and scope. I state the user, the bounded task, the included case types, the output, and what the workflow does not do. This protects the next operator from treating a pilot as a general-purpose system. I include the current version and the evidence that supports its present use, while being clear about what the evidence does not establish.

Then I document the run. I name the trigger, required inputs, approved sources, validation checks, transformation, destination, state changes, and human review. I write it in the order an operator experiences it. Where a step depends on authorized access, I name the access owner and approved process rather than including credentials or secrets in the handoff.

I make recovery usable. The handoff includes expected errors, retry and timeout limits, duplicate checks, manual fallback, stop conditions, incident route, and the minimum event record. An operator should know when to wait, when to request information, when to use the manual process, and when to escalate. They should never need to invent a workaround for sensitive or consequential cases.

Ownership is explicit. I distinguish the business owner, data or source owner, operator, reviewer, connection maintainer, and change approver. I also name a practical backup or escalation route for absences. This matters because a technical connection may still work while the approved source, policy, reviewer capacity, or business need has changed.

I write a change rule. Any change to the contract, source, access, transformation, destination, approval boundary, or retry behavior gets a version record and an appropriate test before routine use. A change that affects sensitive or consequential work may require additional authorized review. I do not let someone silently alter the workflow because a new feature seems convenient.

Finally, I walk through the handoff with the intended operator using a safe case. I watch where they hesitate, ask them to locate the fallback and owner, and revise the document based on what they cannot find. A handoff works when it supports real operation, not when it merely describes the builder’s intent.

## Concrete example

A coordinator takes over an internal brief-preparation pilot. The handoff states that only complete requests from one team enter the flow, that the intake record is authoritative, and that every draft waits for the project lead. It lists the current version, the source owner, the operator, and the maintainer who can change the connection. It explains that an unavailable source sends the case to the manual template, while unexpected confidential material requires the established escalation route. The coordinator rehearses a missing-field case and notices the destination owner is absent from the document, so the handoff is revised before the pilot continues.

## Action checklist

- State purpose, user, bounded scope, exclusions, version, and evidence limits.
- Document the common path in operator order from trigger through review and status.
- Name approved sources, access owners, and data boundaries without exposing credentials.
- Include errors, limits, fallback, stop conditions, event record, and escalation.
- Assign operating, business, data, review, maintenance, and change responsibilities.

## Required deliverable

Write an operating handoff that an authorized colleague can use for the current pilot, including scope, run steps, review, recovery, ownership, source and access boundaries, change rule, and a safe rehearsal record.

## Community prompt

What would a new operator be unable to learn from your current notes? Share one missing ownership, recovery, or change detail you will make explicit.
