# Design a usable knowledge structure

**A usable knowledge structure lets an operator find the current source for a known question, see its authority and limits, and return to the human owner when the pack does not contain a safe answer.**

I design the structure around how the workflow retrieves and reviews context, not around an idealized archive or the names of whatever folders already exist.

After the inventory, it is tempting to organize everything by document type: policies in one place, notes in another, examples in a third. That can be tidy, but it may not match the moment of work. A coordinator preparing a brief needs to find the current case facts, the applicable procedure, the output template, and the escalation owner. I start with those workflow questions, then choose a structure that makes the answers and their authority visible.

I make the active context pack intentionally small. It may have a brief overview, a source map, a current rules section, a fact-reference area, labeled examples, decision records, a missing-context route, and a change log. The exact names can change, but the functions should not. An operator should be able to answer: What is this pack for? Which sources are approved for this case? Which rule applies? What does a good draft look like? What is unknown? Who decides the exception?

I separate a source of truth from a working view. The source of truth is the approved location or controlled reference owned by the responsible person. The working view is the concise selection, summary, or link set an operator uses for the common path. A working view may make retrieval faster, but it does not erase the original source or its access boundary. When an important claim matters, a reviewer can follow the reference back to the approved source.

Labels do a lot of work. I use clear names such as Current Facts for This Case, Operating Rules, Examples Only, Decisions and Exceptions, and Review Needed. I avoid vague labels like Helpful Information or Miscellaneous. The point is not taxonomy for its own sake. The label tells the operator what they may infer from an item and what they must not. An example belongs in an example area even when it is more readable than the policy.

I include retrieval cues that match real questions. If a workflow often asks “What information is required before this can proceed?” I make the intake rule easy to locate. If it asks “Which source controls this claim?” I include the authority map near the relevant material. If it asks “What happens when the source is missing?” I place the stop or escalation route where the operator sees it before drafting. I do not rely on an AI assistant to guess the right section from a large undifferentiated collection.

The structure needs a maintenance path. Every active section has an owner, a review date or trigger, and a way to point to superseded material without leaving it in the active path. I archive or mark old versions according to the responsible organization’s practice; I do not delete evidence needed for an approved record without authority. The key is that the operator can recognize the current version and does not accidentally retrieve an obsolete one.

Access boundaries shape structure too. I use separate references or views when different roles need different information. I do not solve a permission problem by putting restricted facts next to broad operating rules and asking people to ignore what they should not see. If an operator needs a conclusion from a restricted source, I define the approved human review or handoff rather than exposing the source. Access is enforced by the environment and process; labels alone are not permission.

I test the structure with ordinary tasks. I ask a capable person to find the source for one important claim, locate the relevant rule, identify the source owner, and explain what they would do when context is absent. If they browse through several outdated files or cannot tell whether an example is current, the structure is not yet usable. I simplify labels, move the retrieval cue, or remove material from the active view.

The goal is not a perfect universal hierarchy. It is a first structure that helps a real person retrieve the right bounded context and see when they need more. That is enough to support responsible AI assistance and a practical handoff.

## Concrete example

A property-operations pack has a Start Here overview, a source map, Current Request Facts, Approved Operating Rules, Example Briefs, Decisions and Exceptions, and a Review Needed route. The coordinator uses links to the current property guide and approved procedure rather than copying the full restricted records into the pack. If access instructions are missing, the structure directs the coordinator to request confirmation from the property lead. The coordinator reviews the draft before work is assigned.

## Action checklist

- List the real questions an operator must answer on the common path.
- Create sections that separate facts, rules, examples, decisions, and review-needed items.
- Link each active item to an approved source or source-map entry.
- Add retrieval cues for the most frequent questions and stop conditions.
- Name an owner and review trigger for each active section.
- Keep restricted material in approved access-controlled locations and define the human handoff.

## Required deliverable

Create a **Knowledge Structure Map** showing the active sections, their purpose, source references, owner, access boundary, review trigger, and the operator’s route for missing context.

## Community prompt

Which question should a new operator answer in under a minute from your structure? What label, retrieval cue, or source reference makes that possible?
