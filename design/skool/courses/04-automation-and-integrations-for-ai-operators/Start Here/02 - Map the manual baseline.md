# Map the manual baseline

**I map the current work before changing it so I can preserve necessary judgment and compare the pilot to reality.**

I use a manual baseline map to show what happens now, including the wait, rework, and human decisions that a simple diagram can hide.

When I map a workflow, I do not begin with the future automation. I follow one real request from its trigger to its final handoff. I ask who starts it, what information arrives, where that information is checked, what gets created, who waits, who decides, and what record is left behind. This makes the current system visible enough to improve without guessing.

I keep the map concrete. “Process request” is too broad to build from. I instead write the observable actions: receive request, check required details, compare the request with the approved source, ask for missing information, prepare a draft, route it for review, deliver the approved result, and record the status. The level of detail should let another operator recognize the path without reading my mind.

The baseline needs the messy parts. I mark rework loops, delayed approvals, duplicate entry, informal messages, source conflicts, and exceptions. Those are not embarrassing failures to erase from the diagram; they are evidence about the real operating conditions. If I leave them out, an automation may appear elegant while quietly moving the burden to the next person.

I distinguish information movement from accountability. A file may move from one place to another, but a person still owns its accuracy, approval, retention, or update. I name the owner at each meaningful handoff. This prevents a vague “the system handles it” explanation that leaves an operator responsible without the authority or access to fix a problem.

I estimate the baseline without pretending to have perfect measurement. I can record frequency, typical touch time, wait time, correction rate, and the cost of a bad outcome. I also write the non-measurable value of a human check when it catches an important exception. The goal is a comparison point for the pilot, not a business case built from optimistic assumptions.

I protect information while mapping. A baseline map can use role names, categories, and secure references rather than copying personal, confidential, or credential material into a shared document. I document where the approved source lives and who may access it. A map should make the boundary clearer, not create a new data leak.

At the end, I can point to one or two candidate steps, not an entire process, that may benefit from a controlled pilot. The map may tell me that the better fix is a clearer form, a new review rule, or a simpler manual template. That is still a useful result because I have reduced uncertainty before adding technical dependency.

## Concrete example

For an internal content-request process, I map the path from a manager’s request to an approved brief. The coordinator reads the request, checks the current campaign notes, asks for missing audience or deadline details, drafts a brief, and routes it to a lead. The map reveals that most delay comes from missing details, not drafting. I select only the completeness check and draft structure as possible pilot steps; the lead retains responsibility for campaign claims and approval.

## Action checklist

- Trace one recent safe case from trigger to final handoff.
- Write each observable action instead of summarizing the whole process.
- Mark every wait, rework loop, source check, and human decision.
- Name the owner and approved source at each handoff.
- Record a simple baseline for frequency, touch time, and correction or escalation.

## Required deliverable

Create an Integration and Data Flow Map of the current manual path, including inputs, outputs, owners, source locations, review points, and one manual fallback route.

## Community prompt

Which manual step causes the most avoidable delay or rework, and what evidence on your map supports that conclusion? State the owner who would review a changed version.
