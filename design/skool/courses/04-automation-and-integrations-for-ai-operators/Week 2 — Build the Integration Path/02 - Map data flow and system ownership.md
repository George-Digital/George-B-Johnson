# Map data flow and system ownership

**I show where each piece of data comes from, where it goes, who owns it, and which system remains authoritative.**

I map data movement and responsibility together so a connection does not create conflicting records or unclear access.

I use a data-flow map to answer questions that a process map alone cannot. What information enters the workflow? Which source is authoritative? What is transformed, stored, or merely referenced? Where does the output go? Who owns the source, the result, the access, and the update rules? I want those answers before I allow a new connection to run on real work.

I classify each source. Some sources provide facts that the workflow may read. Some are destinations for a draft or status. Some are only references an operator uses during review. I do not treat every connected location as equally trustworthy. When sources conflict, the map names the authority and the human owner who resolves ambiguity.

I minimize copies. The more locations that hold a version of the same case, the more likely people are to act on stale or inconsistent information. Where possible, I pass a reference or the minimum approved fields rather than duplicating a complete record. If a copy is necessary for the workflow, I state its retention, access, and update expectation according to the organization’s approved practice.

Ownership has several dimensions. A business owner decides whether the workflow serves the right purpose. A data owner authorizes use and updates of a source. An operator handles routine runs. A technical or systems owner may maintain the connection. A reviewer approves the consequential output. One person may hold multiple roles in a small team, but I still name the responsibilities separately so no one assumes someone else is handling them.

I identify the direction of each movement and the condition that allows it. A request may move into a draft process only after required fields are present. A draft may move to a reviewer but never to an external recipient without approval. A status may return to the authoritative case record only after the operator confirms the outcome. These conditions prevent a diagram from implying that all connected systems may freely write to one another.

I keep the map safe to share. I use categories, field names, and secure references instead of actual credentials or unnecessary personal data. The map should support a useful review by an owner without becoming a copy of sensitive information. If I do not know whether a source may be used, I pause and ask the appropriate owner rather than testing access by moving the data.

The map becomes part of the operating handoff. It lets a future operator trace an unexpected output back to its source, know who can correct a record, and identify the right person when a policy or source changes.

## Concrete example

A project intake workflow reads approved request fields from the organization’s intake record, uses current project standards as a reference, creates a draft plan in a working area, and sends the draft to a project lead for review. The intake record remains authoritative for requester details and status. The project standards owner controls the reference material. The draft is not copied back as an approved plan until the lead accepts it. The map shows that the workflow never needs payment, personnel, or unrelated customer data.

## Action checklist

- List each source, destination, reference, and status record involved in the pilot.
- Name the authoritative system or owner for each important field.
- Mark read, write, reference-only, and human-review movements.
- Minimize copied data and document any approved retention expectation.
- Assign business, data, operator, technical, and review responsibilities.

## Required deliverable

Complete the Integration and Data Flow Map with data categories, direction of movement, authority rules, access boundaries, owners, and the condition for every write or handoff.

## Community prompt

Where could your pilot create a second, stale version of a record? Share how you will preserve one authoritative source and who can correct it.
