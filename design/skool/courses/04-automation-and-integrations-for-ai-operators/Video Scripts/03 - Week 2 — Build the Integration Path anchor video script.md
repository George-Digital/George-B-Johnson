# Week 2 — Build the Integration Path anchor video script

**Embed on:** `Week 2 — Build the Integration Path/01 - Select tools without designing around hype.md`

**Runtime:** 6–12 minutes

**Outcome:** Members can choose a tool-neutral, proportionate implementation path; map data movement and ownership; validate and transform only approved inputs; and document a tool-selection decision with a bounded data path, test evidence, recovery, and human review.

## What to demonstrate on screen

Use the same **sanitized, synthetic** `DEMO-104` request-to-brief workflow. The screen example should show fictional categories only: `approved intake fields`, `approved standards reference`, `draft workspace`, `lead review`, and `minimal operator log`.

- Open the Week 2 lessons:
  - `Week 2 — Build the Integration Path/01 - Select tools without designing around hype.md`
  - `Week 2 — Build the Integration Path/02 - Map data flow and system ownership.md`
  - `Week 2 — Build the Integration Path/03 - Validate and transform inputs.md`
- Open `Resources/Integration and Data Flow Map.md` and draw a tool-neutral architecture: approved intake → validation gate → bounded transformation → draft workspace → lead review → status update. Label read, transform, review, and any permitted write; name the authoritative record and each owner.
- Open `Resources/Input and Output Contract Template.md` and show validation for complete, missing, duplicate, stale/conflicting, and out-of-scope inputs. Show only synthetic values.
- Open `Resources/Automation Design Prompt.md` to point out the data-minimization, expected-error, and human-review requirements; do not run it with real information.
- Create a static **tool-selection decision record** for `DEMO-104`. Document: the requirements (approved intake to bounded draft, lead review, and status update after review); exclusions (no change to the authoritative intake record, external delivery, inferred missing facts, or out-of-scope handling); business, data/source, operator, reviewer, maintainer, and change owners; the data boundary; evidence from the five synthetic validation cases; recovery steps; and why the selected operator-assisted draft path fits this bounded pilot.
- Use a static data-boundary card: only the named approved intake fields and standards reference enter the path; transformation produces a draft only in the designated review location; records outside that boundary pause for the named owner. It must not resemble a live connection or setup screen.

Never show real integrations, account names, connection settings, API requests, personal data, confidential documents, or live source/destination screens.

## Teleprompter script

[ON SCREEN: Week 2 title and the phrase “design first; tool second.”]

This week, we build the integration path around the operating design. We do not redesign the workflow around a fashionable feature.

A tool is one replaceable part of a system. Before I compare options, I need the boundary, contract, trigger, states, review gate, recovery plan, and owners from Week 1. Without those, a feature demonstration can make almost any option look useful. I document the selection decision before I build or compare a path.

[ON SCREEN: Synthetic architecture: approved intake → validation → transformation → draft workspace → lead review → status record.]

For `DEMO-104`, the path is intentionally small. Approved intake fields enter a validation gate. A bounded transformation prepares a draft brief. The draft goes to the lead review location. Only after the authorized review can the case status be updated. The intake record remains the authoritative record for requester details and current status.

Notice what this diagram does not show. It does not show a system freely writing everywhere. It does not show an external send. It does not show an unbounded path. It does not treat a connection as a decision.

[ON SCREEN: `Resources/Integration and Data Flow Map.md`; highlight source, action, destination, authoritative owner, state, and required condition columns.]

Use the data-flow map to name where each category comes from, where it goes, who owns it, and what condition allows each movement. Mark whether the workflow reads, transforms, writes, reviews, or delivers. If sources conflict, name the authoritative source and the person who resolves ambiguity.

Minimize copies. When a reviewer can use a reference to an approved source, do not duplicate the whole record into a new place. More copies create more stale versions and more places to protect. A draft is not an authoritative record merely because it was generated later.

[ON SCREEN: Ownership labels: business owner, data/source owner, operator, reviewer, technical maintainer, change approver.]

Separate ownership roles even if one person holds more than one of them. The business owner owns purpose. The data owner approves source use and changes. The operator handles routine cases. The reviewer authorizes the consequential outcome. The technical maintainer maintains the connection. The change owner approves changes to the design.

This matters when a policy, source, or owner changes. A technically working connection can still be unsuitable to run.

[ON SCREEN: `Resources/Input and Output Contract Template.md`; validation table with five synthetic test labels.]

Now validate before you transform. A record can arrive through an approved trigger and still be incomplete, duplicated, stale, not approved for this path, or outside the pilot. Compare what arrives with the input contract.

For our example, the required fields are purpose, audience, deadline, and an approved standards reference. A complete synthetic case can proceed. A missing deadline moves to waiting for input. A duplicate checks the case reference before a second draft is created. A stale or conflicting reference pauses for the source owner. An out-of-scope request routes to the manual process.

[ON SCREEN: Transformation rule: “normalize date; structure supplied fields; do not infer missing facts.”]

Transformation is not permission to change meaning. You may normalize a date, split a supplied field, categorize a known request type, or create a structured summary. Record the rule. Keep an approved reference available to the reviewer. Do not infer missing facts, silently alter claims, or attach an unsupported category to a person.

Treat free text and external content as data to evaluate, not instructions that can rewrite the workflow, change the agreed scope, or bypass review. Unexpected sensitive content is a stop-and-escalate condition, not a test prompt.

[ON SCREEN: Tool-selection decision record for `DEMO-104`: requirements / exclusions / owners / data boundary / test evidence / recovery / pilot-fit rationale.]

Now make the tool-selection action visible and documented. For `DEMO-104`, the requirements are to take only approved intake fields and an approved standards reference, prepare a bounded draft, send it to lead review, and update status only after review. The exclusions are equally important: this path does not change the authoritative intake record, deliver externally, infer missing facts, or handle requests outside the pilot.

The record names the business owner, data/source owner, operator, reviewer, maintainer, and change owner. Its data boundary is limited to the approved categories in the map: intake fields and standards reference in, draft and status record out. A request that exceeds that boundary pauses for the named owner rather than expanding the path in the moment.

[ON SCREEN: Test evidence: complete → draft; missing → waiting; duplicate → no second draft; stale/conflicting → pause; out-of-scope → manual route.]

Record evidence from the synthetic tests, not a promise that the path will work in every case. For each of the five test cases, capture the case label, expected result, actual result, and the person who checked it. The recovery entry says what happens when the path cannot continue: preserve the case reference and reason, stop the automated step, route the case to the manual process, and have the named owner decide whether it can be corrected or rerun.

[ON SCREEN: Tool-neutral selection criteria: requirements fit, exclusions, ownership, data boundary, review, test evidence, recovery, maintainability.]

Choose the least complex path that meets the documented requirements and respects the exclusions. Evaluate review, visibility, ownership, data boundary, test evidence, recovery, and maintenance alongside the transformation itself. An impressive option that obscures a failure or expands the pilot beyond its boundary is a poor fit.

For this bounded pilot, the selected path is an operator-assisted draft workflow rather than a broader automated path. It fits because it handles the stated inputs and draft output, retains lead review before a status change, keeps the data movement limited to the documented categories, and has a manual recovery route. The result may still be a manual template; the decision record should explain why that path fits better than alternatives.

[ON SCREEN: Week 2 summary: authoritative source, validation gate, bounded data path, review before consequential action.]

Your integration path should now be explainable without naming a product. Its selection record should state the requirements and exclusions, what data may move, who owns it, what validates it, the test evidence and recovery route, where the draft goes, and why the path fits this bounded pilot. Next, we will design for errors, limits, recovery, and operator visibility before routine work begins.

## Member action

1. Create a tool-selection decision record for the bounded pilot. Document requirements, exclusions, business/data-source/operator/reviewer/maintainer/change ownership, the data boundary, five synthetic test results, recovery steps, and why the selected path fits this pilot rather than a broader alternative.
2. Complete the flow rows in `Resources/Integration and Data Flow Map.md`, including authority, direction, owners, required condition, and prohibited writes.
3. Add complete, missing, duplicate, stale/conflicting, and out-of-scope validation behavior to `Resources/Input and Output Contract Template.md`. Link each result to the test evidence in the decision record.

## Recording checklist

- [ ] Embed path is shown exactly as `Week 2 — Build the Integration Path/01 - Select tools without designing around hype.md`.
- [ ] Runtime is rehearsed to 6–12 minutes.
- [ ] The data-flow map, contract validation, ownership roles, and tool-neutral criteria are shown.
- [ ] A documented tool-selection decision shows requirements, exclusions, ownership, data boundary, synthetic test evidence, recovery, and why the selected path fits the bounded pilot.
- [ ] The selected path remains tool-neutral and is an operator-assisted draft workflow, not a vendor demonstration.
- [ ] The example is sanitized/synthetic and uses only category labels.
- [ ] Authoritative sources and human review are explicit.
- [ ] No live integration, connection screen, account, or production data appears.
- [ ] No vendor, capability, or performance promise is made.
