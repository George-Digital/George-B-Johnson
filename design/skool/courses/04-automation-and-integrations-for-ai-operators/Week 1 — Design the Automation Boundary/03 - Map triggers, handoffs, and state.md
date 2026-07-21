# Map triggers, handoffs, and state

**I define how work starts, who owns it at each handoff, and how an operator can tell what has happened to a case.**

I map the lifecycle of one case so a trigger does not create invisible work or ambiguous ownership.

An integration is more than information moving from one place to another. It creates a lifecycle for each case: something starts it, a process takes action, a person may review it, an outcome is recorded, and exceptions may require recovery. I map that lifecycle before I build so each participant can tell what a case is waiting for and who owns the next move.

I define the trigger narrowly. It may be a complete internal request, an approved status change, or an operator-initiated run. I do not use an ambiguous event such as “when something changes” without deciding which change counts, how duplicates are identified, and whether the source is authorized. A precise trigger keeps accidental or repeated runs from appearing as normal activity.

Then I name the handoffs. A handoff has a sender, receiver, artifact, expected time, and ownership change. I write who confirms receipt and what happens if no one acts. “Notify the team” is not a handoff plan; it leaves people guessing whether a notification was seen, whether the task was accepted, and who should resolve a delay.

State is the small set of visible labels that tells an operator where a case is. I prefer plain states such as received, waiting for required input, ready for review, approved, returned for revision, completed, and routed to manual handling. I avoid status names that sound complete but hide an unresolved risk. A case should not be marked complete until the required human review and delivery conditions are actually met.

I also plan for duplicates and late changes. A request may be submitted twice, a source may update after the draft exists, or a reviewer may reject an output. I need an identifier or reference that lets the operator find the current case, avoid sending two versions, and preserve the reason for a revision. The map does not need to expose sensitive content to accomplish this; secure references and minimal case identifiers are usually enough.

For a human approval, I decide whether the workflow waits, expires, or routes after a defined period. I do not leave a stalled case in a hidden middle state. If an approval has implications for safety, legal, financial, employment, access, or another consequential decision, the named authorized person makes the decision; an automated status can document the wait but not replace approval.

My finished map gives me a traceable common path and a visible exception path. It makes support easier because an operator can answer three basic questions: what started this, what state is it in, and who owns the next action?

## Concrete example

A marketing operations team prepares internal campaign briefs. A complete request starts the case. The system assigns a reference, checks required fields, prepares a draft, and marks it ready for lead review. The lead can approve, return it for revision, or route it to manual handling if the campaign has a regulated claim. If the lead does not act within the agreed window, the state changes to waiting for review and the coordinator follows the existing manual escalation path. Nothing is delivered externally from the draft state.

## Action checklist

- Define one precise, authorized trigger for the pilot.
- List the case states from receipt through completion or manual route.
- Name sender, receiver, artifact, and owner for each handoff.
- Decide how duplicate, late, rejected, and stale cases are identified.
- Set a visible response for stalled review or failed delivery.

## Required deliverable

Add the trigger, state labels, handoffs, ownership changes, and exception routes to your Integration and Data Flow Map.

## Community prompt

Where can a case become invisible or ownerless in your current process? Share one state label or handoff rule that would make the next action clear.
