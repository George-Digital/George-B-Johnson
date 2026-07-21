# Start Here: Build a small, reviewable context system

**Embed on:** `Start Here/01 - Confirm your knowledge-system use case.md`

**Estimated recording time:** 9–10 minutes

**Outcome:** Members will define one bounded use case, create a safe five-entry source inventory, and begin a dated build log that makes provenance, authority, access boundaries, retrieval questions, and human review visible before retrieval or drafting.

## What to demonstrate on screen

Use only a clearly labeled synthetic case: **Northstar Neighborhood Center volunteer shift-brief workflow — SYNTHETIC TRAINING EXAMPLE.** Do not open, paste, search, or display any real client, member, employee, volunteer, or confidential data.

1. Open `Resources/Context Inventory and Source Map Template.md`. Show the empty fields for source identifier, owner, authority status, approved access boundary, retrieval cue, traceability method, and active-pack disposition.
2. Enter and leave visible all five synthetic source-map rows below. Show safe references and metadata only, never source contents:
   - `Northstar Event Schedule v2.1 — synthetic` — Fact; event lead; authoritative for the current event date and shift time; coordinator view; reviewed `2026-09-12`; retrieval cue `current event / shift details`.
   - `Northstar Venue Access Guide v1.3 — synthetic` — Fact; venue lead; authoritative for the approved entry and check-in point; coordinator view; reviewed `2026-09-11`; retrieval cue `event date / venue entry`.
   - `Volunteer Safety Procedure v4 — synthetic` — Rule; safety lead; authoritative for volunteer safety procedure; coordinator view; reviewed `2026-09-01`; no credentials or contact details displayed.
   - `Severe Weather Escalation Procedure v2 — synthetic` — Rule; safety lead; authoritative for weather-escalation handling; coordinator view; reviewed `2026-08-30`.
   - `Prior Shift Brief — synthetic example only` — Example; training lead; example only, not authority; safe training view; reviewed `2026-08-15`.
3. Open `Resources/Context Intake Prompt.md` and point to the provenance, authority, access, conflict, and human-review fields. Do not run the prompt with real material.
4. Open a plain local note titled `Northstar Context Pack build log — synthetic`. Create and leave visible these three dated entries:
   - `2026-09-12 — Opening entry:` Created the five-entry inventory. The prior brief is useful for format, not proof of today’s shift time.
   - `2026-09-13 — Authority decision:` Event lead confirmed that Event Schedule v2.1 controls current shift-time claims; older planning notes cannot set the time.
   - `2026-09-14 — Access/missing-context retrieval question:` The coordinator needs the venue entry route, but that detail is not in the approved active view. Is retrieval from Venue Access Guide v1.3 permitted for this role, or should this route to the venue lead?
5. Show the safe boundary response for a fictional request for an unavailable restricted emergency-contact record: “I cannot verify that within approved access. Route to the event lead.” Do not show any contact information.

## Teleprompter script

[ON SCREEN: Title card: “Context & Knowledge Systems for AI Workflows — Start Here”]

Hi, I’m George. In this course, we are not trying to feed an AI every document we can find. We are building a small context system that a person can inspect, maintain, and safely use for one real workflow.

[ON SCREEN: A simple flow: one user → one bounded task → approved sources → draft → human review]

The starting point is one person, one repeated task, one draft output, and one human review point. For this walkthrough, I’m using a fictional volunteer shift-brief workflow for Northstar Neighborhood Center. Everything on screen is synthetic training material. It is not a real organization, and I will not use real confidential information in this course example.

[ON SCREEN: Synthetic use-case sentence]

My use case is: “For a volunteer coordinator, this context system provides approved schedule, venue, and safety references so they can prepare a draft shift brief for event-lead review.” Notice what that does not say. It does not say the system decides whether a volunteer is eligible, shares private records, or sends final instructions on its own. The event lead still checks the important details and owns the final decision.

[ON SCREEN: Open `Resources/Context Inventory and Source Map Template.md`]

Before I organize a pack, I need to know what each source is allowed to do. This inventory template is where I make that visible. I record a source identifier, its owner, authority status, access boundary, retrieval cue, traceability method, and whether it belongs in the active pack.

[ON SCREEN: Add and keep visible the five labeled synthetic inventory rows]

For this first inventory, I am entering five sources, not just a schedule and a sample. The Event Schedule v2.1 is my first fact source. Its event-lead owner, review date, and scope tell a reviewer that it can support the current event date and shift time.

The Venue Access Guide v1.3 is a second fact source. It is limited to the approved entry and check-in point, and it has a different owner. Separating those two facts means a schedule cannot quietly become evidence for a venue-access claim.

The Volunteer Safety Procedure v4 is a rule source. The Severe Weather Escalation Procedure v2 is a second rule source. Each has the safety lead as accountable owner, but each controls a different recurring question. I do not bury either rule inside a past brief just because that brief is easier to read.

The fifth item is a Prior Shift Brief. It is useful because it shows the shape of a clear brief, but I label it “example only.” I do not let an example supply today’s start time, venue entry, or safety instruction. That one label prevents a common mistake: turning a past output into evidence for a new case.

[ON SCREEN: Highlight “Approved access boundary,” “Retrieval cue,” and “Traceability method”]

Access is part of the source map, not a clean-up step later. I only include the minimum information the coordinator needs for this bounded task. The access boundary says who may use the source; the retrieval cue says how an approved user finds the relevant material; and the traceability method lets a permitted reviewer verify an important claim. None of those labels grants access or replaces a human check.

[ON SCREEN: Synthetic boundary response appears]

For example, if the coordinator needs a restricted emergency-contact record but does not have approved access, the system should not guess, search around, or ask someone to paste it into a chat. The safe response is: “I cannot verify that within approved access. Route to the event lead.” A useful context system makes this next step clear.

[ON SCREEN: Open `Resources/Context Intake Prompt.md`]

New material needs the same discipline. This intake prompt helps create a draft record for a proposed source. It asks about provenance, likely classification, authority, access, overlap, conflict, and the human reviewer. It does not approve a document, grant access, or decide that a source controls. The owner still verifies those things.

[ON SCREEN: Open `Northstar Context Pack build log — synthetic`; add the dated opening entry]

I also keep a build log. Its opening entry is dated 2026-09-12: “Created the five-entry inventory. The prior brief is useful for format, not proof of today’s shift time.” This records what I observed at the start rather than pretending that the initial pack is complete.

[ON SCREEN: Add dated update: `2026-09-13 — Authority decision`]

The first update is dated 2026-09-13 and records an authority decision. The event lead confirmed that Event Schedule v2.1 controls current shift-time claims. Older planning notes may explain why someone is confused, but they cannot set the time. A dated, accountable decision gives the next reviewer a reason for the authority order.

[ON SCREEN: Add dated update: `2026-09-14 — Access/missing-context retrieval question`]

The second update is dated 2026-09-14. It records an access and missing-context retrieval question: the coordinator needs the venue entry route, but that detail is not in the approved active view. Can this role retrieve the Venue Access Guide, or must the request route to the venue lead? I record the question instead of filling the gap with a plausible answer.

[ON SCREEN: Four labels: Fact, Rule, Example, Decision]

As we move forward, I will keep separating facts, rules, examples, and decisions. Facts need a source. Rules need authority. Examples need labels. Decisions need an accountable person. When context is unavailable, stale, or contradictory, the system needs to say so and route the issue rather than complete the blank with confidence.

[ON SCREEN: Course path: Start Here → Week 1 → Week 2 → Week 3]

Your job this week is deliberately small. Pick one workflow that genuinely needs context, write its boundary, map at least five sources that matter on the common path, and start the dated record of what needs review. Keep private material in its approved location. Use a clearly labeled synthetic example whenever you need to practice or share your process.

[ON SCREEN: Closing checklist]

By the end of Start Here, you should have a use-case statement, a five-entry initial source map, and a build log with an opening entry plus an authority update and an access or retrieval question. That gives us something inspectable to structure, maintain, test, and hand off. Let’s start with the workflow, not the pile of documents.

## Member action

1. Complete `Start Here/01 - Confirm your knowledge-system use case.md` and state one user, bounded task, approved source types, draft output, reviewer, and access boundary.
2. Copy `Resources/Context Inventory and Source Map Template.md` for your own first inventory. Add **at least five** safe source entries, each with a classification, source owner or owner-unknown status, authority status, approved access boundary, retrieval cue, and traceability method. Do not copy restricted contents.
3. Create a dated build log with all three entries: a dated opening observation, a later dated authority decision naming the accountable owner and the source that controls, and a later dated access, missing-context, or retrieval question naming the safe route for review.
4. If you need a practice case, create and label it as synthetic. Do not use real confidential data in course work or community discussion.

## Recording checklist

- [ ] The first on-screen source is `Resources/Context Inventory and Source Map Template.md`.
- [ ] All five named synthetic inventory entries are shown together, with classification, owner, authority status, approved access boundary, retrieval cue, and traceability method visible or called out.
- [ ] The build log shows a dated opening entry and two later dated updates: one authority decision and one access, missing-context, or retrieval question.
- [ ] Every example is visibly labeled “SYNTHETIC TRAINING EXAMPLE.”
- [ ] No real names, records, credentials, contact details, accounts, or confidential files appear in tabs, notifications, or screen share.
- [ ] Explain provenance, source authority, fact/rule/example separation, access minimization, and the build-log routes in your own words; do not read the lesson page verbatim.
- [ ] Show the safe response for unavailable restricted context and name a human route.
- [ ] Do not promise that the pack or an AI output is correct; frame it as a reviewable first version.
- [ ] Confirm the video is embedded only on the mapped first lesson after the live course upload is reviewed.
