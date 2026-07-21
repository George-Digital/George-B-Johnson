# Start Here — Scope One AI Workflow Before You Evaluate It

**Embed on:** `Start Here/01 - Choose the system and evaluation scope.md`

**Length:** 7–9 minutes

**Outcome:** I will help members choose one bounded AI-assisted workflow, define the intended use, stakes, and review ownership, and begin a safe failure log. By the end, they will have a scope note and Stakes and Review Ownership Map that give the evaluation a useful boundary rather than an unsupported claim that an AI system is reliable.

## What to demonstrate on screen

Use a **synthetic vendor-request routing brief** only. It turns a fictional completed request form into a draft that lists required fields, missing information, and the next review owner. It does not approve spending, select vendors, or make any high-impact determination. Do not show live accounts, client records, credentials, or sensitive data.

Open these exact local resources in rendered Markdown preview:

1. `Resources/Evaluation Set Template.md` — show **System scope**, **Success and acceptance summary**, and the first **Case inventory** row.
2. `Resources/Governance and Permissions Checklist.md` — show **System boundary** and **Role and decision map**.
3. `Resources/Failure and Escalation Log.md` — show **Log governance**, one synthetic near-miss entry, and **Escalation and stop-condition map**.

In a blank, unshared local working note, create a completed **Stakes and Review Ownership Map — SYNTHETIC TRAINING EXAMPLE**. Use the required-deliverable criteria in `Start Here/02 - Define stakes and review ownership.md` and show these seven labeled fields:

| Map field | Synthetic vendor-request routing entry |
| --- | --- |
| Affected people | Fictional requester, operations coordinator, procurement reviewer, and procurement lead; a wrong or delayed draft can create rework or an unsupported request handoff. |
| Material failure types | Missing required field, unsupported catalog claim, conflicting delivery date chosen without a flag, incorrect routing, privacy disclosure, or reviewer overreliance. |
| Review level | Procurement reviewer checks every draft against the synthetic request form and `Approved Vendor Catalog v1.0` before any handoff; conflicts stop and route for clarification. |
| Roles | Coordinator: operator. Procurement reviewer: output reviewer. Procurement lead: decision and escalation owner. Operations owner: change owner. Privacy owner: access-boundary escalation route. |
| Decision rights | The reviewer may reject or return a draft; only the procurement lead may decide the next procurement action or approve an exception; only the operations owner may approve behavior-affecting workflow changes. |
| Privacy boundary | Synthetic, minimized request fields only; no real requester, vendor, contact, financial, account, or restricted data in the workflow, recording, shared log, or community discussion. |
| Prohibited high-impact decisions | The workflow must not make employment, housing, education-access, health, legal, insurance or benefits, credit or financial-eligibility, safety, discipline, or essential-services determinations. It also must not select vendors, approve spending, or authorize exceptions. |

Use only synthetic labels and content on screen, including `SYN-VR-01`, `Approved Vendor Catalog v1.0`, and `Two delivery dates conflict`. Blur or avoid any browser sidebar, notification, account name, or file location that could reveal unrelated information.

## Teleprompter script

[ON SCREEN: Course title, then the synthetic vendor-request workflow boundary.]

I’m George. Welcome to AI System Evaluation, Reliability, and Governance.

This course is about making one AI-assisted workflow measurable, reviewable, and dependable enough for one intended use. It is not about proving that a model is reliable in every situation. I want to begin with that boundary because it changes the quality of every decision we make from here.

[ON SCREEN: Open `Resources/Evaluation Set Template.md` at **System scope**.]

Before I test anything, I define the system I am actually evaluating. That means more than the model or prompt. I include the approved source material, the input format, the instructions, the tool, the output template, the operator, the reviewer, and the handoff after the output is created.

For this walkthrough, I am using a synthetic vendor-request routing brief. A coordinator enters a fictional completed request form. The workflow prepares a draft that identifies the request, required details, anything missing, and the next person who should review it. The draft does not approve spend, choose a supplier, or authorize an exception.

[ON SCREEN: Type a one-sentence scope statement into the template using synthetic placeholders.]

My scope statement is simple: “For an operations coordinator handling a standard vendor request, this workflow uses approved request fields and an approved vendor catalog to prepare a routing brief for procurement review.”

That sentence names the user, input, output, next action, and human review point. It also makes exclusions visible. Emergency purchases, conflicting information, unapproved vendors, and spending decisions are outside this first scope. If a case contains one of those conditions, the correct behavior may be to stop or route it, not to generate a more confident draft.

[ON SCREEN: Highlight **Evaluation question** and **What this evaluation will not establish**.]

Next, I write an observable evaluation question. I do not ask whether the system is generally good. I ask whether, on complete standard synthetic request forms, it produces a reviewable brief with the required fields, labels unknown information, and routes the case without making an unsupported commitment.

I also write what this evaluation will not establish. A small, bounded set of cases does not guarantee future performance, certify safety, or justify expanding the workflow to new users or decisions. It is evidence about this version, these sources, and this scope.

[ON SCREEN: Open `Resources/Governance and Permissions Checklist.md` at **Role and decision map**.]

Now I assign people, not vague teams, to the work. The operator runs the approved workflow. The reviewer compares the draft with the approved source. The decision owner decides what happens next. The escalation owner receives exceptions. The change owner approves a behavior-affecting revision.

For our synthetic example, the coordinator is the operator, the procurement reviewer checks the brief, the procurement lead owns procurement decisions and escalations, and the operations owner approves workflow changes. A privacy owner is the route for an access-boundary concern. One person can have more than one role in a small team, but I still name the roles separately. That makes an absence, conflict, or decision gap visible before it becomes an incident.

[ON SCREEN: Create the completed **Stakes and Review Ownership Map — SYNTHETIC TRAINING EXAMPLE** in a blank, unshared local working note. Keep all seven field labels visible.]

Scope tells me what the workflow does. This map tells me who could be affected if it is wrong, what failures matter, and how much human review the consequence requires. I do not assign a review level because a draft sounds polished; I assign it based on the impact and reversibility of a failure.

For this fictional vendor-request routing brief, the affected people are the fictional requester, operations coordinator, procurement reviewer, and procurement lead. A wrong or delayed brief can cause rework or an unsupported handoff. The material failures I record are a missing required field, an unsupported catalog claim, a conflicting delivery date chosen without a flag, incorrect routing, privacy disclosure, and reviewer overreliance.

The review level is review of every draft before any handoff. The procurement reviewer checks the synthetic request form and `Approved Vendor Catalog v1.0`. If information conflicts, the draft stops and routes for clarification. That is a boundary for this practice scope, not evidence that every future case will be handled correctly.

I then make the roles and decision rights explicit. The coordinator may run the workflow but cannot approve an outcome. The procurement reviewer may reject or return a draft. Only the procurement lead may decide the next procurement action or approve an exception. Only the operations owner may approve a behavior-affecting workflow change. The privacy owner receives an access-boundary escalation. These assignments give the operator permission to pause rather than guess.

The privacy boundary is equally visible: this map uses only synthetic, minimized request fields. No real requester, vendor, contact, financial, account, or other restricted data belongs in the workflow, recording, shared failure log, or community discussion.

[ON SCREEN: Highlight **Prohibited high-impact decisions** in the completed map and in **System boundary**.]

There is one boundary I want to make especially clear. This workflow must not select vendors, approve spending, or authorize exceptions. It also must not make determinations about employment, housing, education access, health, legal matters, insurance or benefits, credit or financial eligibility, safety, discipline, or essential services. In high-impact areas, AI output remains advisory. It may organize authorized information or prepare a draft, but the final determination stays with an appropriately qualified human. A good score does not remove that responsibility.

[ON SCREEN: Open `Resources/Failure and Escalation Log.md`; show a synthetic near miss.] 

I create a failure log before broad testing. I do not wait for a major problem. A near miss is useful evidence. Here, case `SYN-VR-01` contains two different delivery dates. The expected behavior is to flag the conflict and route the request. The observed draft chose one date instead. The reviewer caught it before anyone used the brief.

I record a safe summary, the version, expected and observed behavior, the immediate containment, the owner, and the retest needed before I close the entry. I do not paste real request details into a shared log. For restricted evidence, I use an approved secure reference and a sanitized description.

[ON SCREEN: Show the escalation map row for conflicting authoritative source.]

A failure log is not a blame document. It tells the operator what to do when the normal path is not appropriate. A conflict can trigger a pause, a request for clarification, or a route to the named owner. That is competent system behavior, not a failure to automate enough.

[ON SCREEN: Return to the three open resources side by side or switch among their headings.]

By the end of Start Here, I want you to have four connected things: one narrow scope note, a completed Stakes and Review Ownership Map, named review and decision ownership, and a usable failure log. Keep the system synthetic, authorized, or safely minimized while you learn. The aim is not to make the workflow sound impressive. The aim is to make its boundaries and human ownership easy to inspect.

In Week 1, I will use that scope to build a representative evaluation set, add edge and adversarial cases, and score outputs consistently. For now, choose one workflow small enough to examine honestly.

## Member action

1. In `Resources/Evaluation Set Template.md`, complete the **System scope** section for one bounded workflow.
2. Complete a **Stakes and Review Ownership Map** in an approved workspace, using the required-deliverable criteria in `Start Here/02 - Define stakes and review ownership.md`. It must name affected people, material failure types, review level, operator, reviewer, decision owner, escalation owner, change owner, decision rights, privacy boundary, and prohibited high-impact decisions.
3. In `Resources/Governance and Permissions Checklist.md`, record the same role assignments and decision rights in the **Role and decision map** and the high-impact boundary in **System boundary**.
4. Copy `Resources/Failure and Escalation Log.md` into an approved workspace and add one synthetic or safely sanitized near miss.
5. Keep AI output advisory for any high-impact use and assign the appropriately qualified human final decision owner; do not use real or restricted data in the map, log, or course discussion.

## Recording checklist

- [ ] The embed location is `Start Here/01 - Choose the system and evaluation scope.md`.
- [ ] The recording is 7–9 minutes and opens with the course boundary, not a product demonstration.
- [ ] Only the three named local resources, a blank unshared working note for the map, and a synthetic vendor-request example are shown.
- [ ] No real sensitive data, accounts, notifications, credentials, or private file paths are visible.
- [ ] A completed **Stakes and Review Ownership Map — SYNTHETIC TRAINING EXAMPLE** is shown. It visibly covers affected people, material failure types, review level, roles, decision rights, privacy boundary, and prohibited high-impact decisions.
- [ ] The scope, out-of-scope cases, human roles, near miss, containment, and escalation route are demonstrated.
- [ ] The advisory-only boundary for high-impact AI use is stated clearly.
- [ ] No outcome, reliability, safety, compliance, or future-performance guarantee is made.
