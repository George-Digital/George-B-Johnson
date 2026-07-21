# Define permissions and data boundaries

**I define who may access which data, run which step, see which output, and approve which decision before I treat a workflow as ready for routine use.**

I make privacy, access, and authority visible in the operating design so convenience does not turn into unauthorized use or an unreviewed consequential decision.

A workflow can have a strong prompt and still be poorly governed if anyone can paste sensitive information into it, view the output, change the instructions, or act on a recommendation without authority. I treat permissions as part of reliability because the wrong access path can harm people, expose information, and make evidence impossible to trust. “Only use data you are allowed to use” is a principle; I need operational rules that a person can follow.

I begin by mapping data categories. I identify the minimum data needed for the intended output, the data that is optional, and the data that is prohibited or requires a more restricted process. I consider personal information, employee and applicant records, health details, financial information, credentials, client materials, confidential business information, legal documents, and regulated records. I do not assume that an AI tool is appropriate for a category merely because an operator can access the source elsewhere. I use the organization’s approved access, retention, and handling requirements.

Then I map roles to actions. An operator may prepare an approved input and run a draft. A reviewer may compare the draft to an authoritative source. A decision owner may approve a consequence. A system owner may change a prompt or source reference. A privacy, security, or domain owner may authorize a new data category or access group. I apply least privilege: each role receives only the access and action rights needed for the job. A member of a community or general support channel is not automatically an authorized reviewer of a private case.

I make source authority explicit. The workflow should know where current approved material lives, which source wins when records conflict, and how an operator checks freshness. I do not let a copied email, user-uploaded note, or external webpage quietly become the system’s policy source. External content can be evaluated as case data, but it cannot grant permission, override the instructions, or change the decision boundary. When the source is missing or stale, the workflow should request it or stop.

I also define output boundaries. Who can view the draft? Where is it stored? Can it be forwarded, exported, or copied into a record? Does the output contain more detail than the recipient needs? I minimize the output as well as the input. A routing brief may need a case ID and open question, not an entire private history. If a tool, workspace, or recipient is not approved for the data, I use a synthetic example or a manual process instead.

Change permissions matter. A prompt revision can change behavior just as surely as a software update. I state who may alter the workflow, examples, rubric, thresholds, integrations, source links, and access settings; who reviews material changes; and how the version is recorded. I do not give every operator edit rights just because they have valuable feedback. They can log a proposed change while the designated owner reviews its impact.

For high-impact domains, I draw an even clearer line between assistance and determination. An AI output may summarize authorized information, identify missing evidence, or prepare questions for a qualified professional. It must not make the final decision about health, legal rights, employment, pay, credit, insurance, housing, benefits, education access, safety, discipline, or essential services. The person with appropriate authority and qualification sees the evidence, exercises judgment, and is accountable for the result.

I test access boundaries with safe scenarios. Can an operator find the approved source without accessing unrelated records? Can a reviewer see the evidence they need but not more? Can a person without change authority accidentally alter a live prompt? Can an output be sent to an unapproved address? I do not simulate unauthorized access in a live environment without permission. I use a documented review with the appropriate security or privacy owner.

The goal is not to write a generic privacy policy inside a course document. The goal is to make the system’s permitted use clear enough that a capable operator knows what they may do, what they must not do, and who to ask when the case crosses a boundary.

## Concrete example

I define permissions for a client-onboarding brief. The coordinator may use approved discovery notes and create a draft in an access-controlled workspace. The account lead may review the brief and send an approved version to the client. Only the operations owner may change the prompt, source list, or output template. Payment details and credentials are excluded. Legal commitments and pricing exceptions route to the authorized account or legal owner; the workflow only flags them.

## Action checklist

- Classify the minimum, optional, restricted, and prohibited data for the intended use.
- Map each role to permitted viewing, running, reviewing, approving, and changing actions.
- Name approved source, tool, storage, and sharing locations.
- Define source freshness and conflict rules.
- Set output-minimization and recipient boundaries.
- Record who can approve data, permission, or workflow changes.

## Required deliverable

Complete the **Permissions and Data Boundary Map** in the Governance and Permissions Checklist. Include data categories, role permissions, source authority, approved locations, output recipients, prohibited data, change authority, and high-impact decision boundaries.

## Community prompt

What information could an operator include out of habit even though the workflow does not need it? Name the boundary that removes it and the approved place for the case if that information is required.
