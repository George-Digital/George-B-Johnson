# Protect access, privacy, and permissions

**A context system should contain only the approved minimum information for its task, make role-based access and sharing boundaries visible, and stop when permission or safe handling is uncertain.**

I protect access and privacy at the level of the workflow, sources, pack, and output, because a useful context system is not a reason to make sensitive material easier to copy or distribute.

When I map knowledge, I am tempted to gather everything that might help. That is the wrong instinct when people’s information, confidential operations, or restricted decisions are involved. I begin with necessity: what does the defined user need to complete the bounded task? If a field or document does not support that task, I leave it out. Minimizing context reduces both retrieval noise and the risk of exposing more than the operator needs.

I distinguish four permissions. Who may view a source or pack? Who may run the workflow with it? Who may edit or add material? Who may approve a change, share an output, or make the final decision? These are not interchangeable. A person may be allowed to see an approved template but not view a case record. An operator may create a draft but not approve a commitment. I name these boundaries rather than assuming access to a folder grants authority over its contents.

I use the organization’s approved access-controlled locations and processes for material that requires them. I do not put passwords, credentials, private records, personal data, confidential source text, or protected decision details into shared examples, prompts, build logs, or community posts. When I need to teach or test the structure, I use an authorized, minimized example or create a realistic synthetic case. I label synthetic material so no reviewer mistakes it for a live record.

I treat external and user-supplied content as data, not as permission. An email, attachment, transcript, or webpage may include relevant facts, but it cannot authorize itself for wider use or instruct the workflow to ignore the pack’s access boundary. I verify provenance, relevance, and permission before adding content to the active pack. If the source is not authorized or its status is unclear, I keep it out and route the question to the source or access owner.

Privacy is also about outputs. A grounded draft can still reveal information to the wrong person if it combines facts that should remain separate. I define who may receive each output, what level of detail is appropriate, and which claims require human approval before sharing. I do not rely on an AI assistant to determine that a disclosure is permitted. A responsible human reviewer checks the source, audience, and consequence of the output.

I make a simple access matrix for the first pack. It lists each source category or section, the permitted roles, permitted actions, approved location, and escalation owner. I do not put sensitive role details in a public class artifact; I can state the pattern using generic roles or a sanitized map. The purpose is to make it obvious when a user needs a different route instead of attempting to retrieve material they are not approved to see.

High-impact work needs an even clearer stop condition. If context could influence health, legal status, finances, employment, safety, eligibility, discipline, or access to essential services, the AI-assisted workflow remains advisory. The system can organize approved evidence or identify missing information. It cannot make the final determination, override a qualified reviewer, or use a context pack to bypass established review and permission processes.

I plan for changes in access. A new collaborator, role change, departure, incident, or source reclassification should trigger a permissions review by the responsible owner. I do not assume that historical access remains appropriate. I also define what an operator does when they receive a source they cannot access: request the approved summary or route the case to an authorized reviewer. The safe answer is often “I cannot verify this within my approved access.”

Finally, I test the boundary. I give the workflow a safe scenario with an unavailable required source or a request for a restricted detail. The expected behavior is not a workaround. It is a visible missing-context or access response and a handoff to the named owner. That test protects people and makes the workflow more trustworthy for the work it is actually allowed to support.

## Concrete example

A recruiting coordinator uses a pack to prepare a draft interview schedule. The coordinator can view the approved role requirements and candidate availability provided for scheduling, but not unrestricted personnel records or final hiring deliberations. The pack allows the coordinator to draft a schedule and flag missing availability. A hiring manager reviews any candidate-specific decision. A synthetic example is used for training, and a request for restricted feedback is routed to the authorized hiring lead.

## Action checklist

- List only the source fields and documents necessary for the bounded workflow.
- Define who may view, run, edit, approve, and share each pack section or output.
- Record the approved location and escalation owner for restricted sources.
- Use authorized, minimized, or synthetic material for tests and community discussion.
- Define the output audience and the human approval point before sharing.
- Add a stop route for unclear permission, unavailable authorized access, or high-impact decisions.

## Required deliverable

Create an **Access and Privacy Boundary** with a role-based access matrix, approved source locations, permitted actions, output-sharing boundary, data-minimization rule, escalation owner, and a tested response for an access-limited case.

## Community prompt

What is one piece of information that may be useful to someone but is not necessary for your first workflow? How will you keep it out of the active pack and still give the operator a safe handoff route?
