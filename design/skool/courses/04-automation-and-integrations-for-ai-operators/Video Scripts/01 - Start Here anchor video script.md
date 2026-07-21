# Start Here anchor video script

**Embed on:** `Start Here/01 - Confirm the workflow is ready to automate.md`

**Runtime:** 6–8 minutes

**Outcome:** Members can decide whether one validated workflow is ready for a narrow automation pilot, map its manual baseline, and select a proportionate manual, assisted, or limited-integration path with a human review and fallback boundary.

## What to demonstrate on screen

Use one **sanitized, synthetic** example throughout: an internal request-to-brief workflow with a fictional case reference such as `DEMO-104`. It accepts only a complete internal request, prepares a draft brief, and sends that draft to a named lead for review. It never sends an external message or makes a final decision.

- Open the course-local lesson folder: `Start Here/` and briefly show these three pages in order:
  - `Start Here/01 - Confirm the workflow is ready to automate.md`
  - `Start Here/02 - Map the manual baseline.md`
  - `Start Here/03 - Choose the implementation path.md`
- Open `Resources/Automation Readiness Scorecard.md`. Point to the non-negotiable blocker, named owners, human authority, data and access, recovery, and the decision guide. Do not fill it with real case data.
- Open `Resources/Integration and Data Flow Map.md`. Sketch the **current manual** path for `DEMO-104`: received → coordinator checks required fields and the approved standards reference → coordinator drafts → lead reviews → coordinator records status. Mark waits, rework, owner, and manual fallback.
- Open `Resources/Automation Design Prompt.md` only to show its required safe inputs and limitations. Do not paste real workflow data, credentials, secrets, personal data, or confidential content.
- Show a simple, tool-neutral three-rung decision graphic: improve the manual template; run an operator-assisted draft; add one limited connection. Circle the smallest path that tests the observed problem.

Do not open a live automation platform, account settings, API console, connection screen, token store, or browser tab containing operational data. If a diagram needs an access boundary, label it only as “approved access managed by the authorized owner.”

## Teleprompter script

[ON SCREEN: Course title, then the three `Start Here/` lesson filenames.]

Welcome. I’m George, and this course starts from a simple position: automation is a change to an operating process. It is not a prize for finding a clever tool.

By the end of this course, you will have evidence for one bounded decision. You may decide to continue pilot, launch within scope, revise, narrow, or pause. All five can be responsible outcomes.

[ON SCREEN: Synthetic case card — `DEMO-104`, “complete internal request → draft brief → lead review.”]

For the demonstrations, I am using a sanitized, synthetic request-to-brief workflow. A complete internal request arrives. A coordinator checks the required details and an approved reference. The coordinator prepares a draft brief. A lead reviews it. Nothing is delivered externally, and no final decision is delegated to the workflow.

That boundary matters. We are not automating a department, a job title, or “operations.” We are considering one repeatable step with a visible beginning, a useful output, and a human who can judge the result.

[ON SCREEN: `Resources/Automation Readiness Scorecard.md`; highlight “non-negotiable blocker present.”]

Start with readiness. I want evidence from real manual work, not confidence from a demonstration. Can I show a repeated trigger? Do I know the common-path input and output? Is there a named operator, reviewer, and owner? Do I know which cases are exceptions? Can someone complete the work manually if a connection is unavailable or the input is wrong?

The scorecard is a discussion aid, not permission to automate. A high number does not override unclear access, a missing owner, an unsafe data boundary, a consequential decision, or the absence of a manual fallback.

[ON SCREEN: Scorecard rows for stable step, human authority, data and access, recovery, and ownership.]

For `DEMO-104`, I would score only what I can support. The draft step may be stable. The lead still owns approval. The approved reference has an owner. A coordinator can use the existing manual brief template if the pilot pauses. If any of those facts are missing, the next action is not to connect more systems. It is to improve the baseline.

[ON SCREEN: `Resources/Integration and Data Flow Map.md`; draw the manual path with the state labels “received,” “waiting for input,” “ready for review,” and “completed.”]

That brings us to the manual baseline. Map one recent safe case from trigger to final handoff. Write observable actions, not a vague label like “process request.” Include the check for required fields, the source check, the draft, the review, the wait, the rework, and the status record.

The messy parts belong on the map. If the request is often incomplete, that is not a reason to hide the problem behind an automation. It may be the real bottleneck. If a lead uses judgment to resolve a source conflict, that is a human boundary, not an unspoken system feature.

[ON SCREEN: Manual baseline annotations: “missing deadline,” “lead review wait,” “approved standards reference,” “coordinator owns next action.”]

Separate information movement from accountability. A draft can move to a review queue, but a person still owns accuracy and approval. The system does not inherit authority because it moves a field from one place to another.

Record a light baseline: frequency, operator touch time, review or wait time, correction work, and the cost of a bad outcome. We are creating a comparison point, not a savings promise.

[ON SCREEN: Three-rung implementation graphic: manual improvement → assisted run → limited integration.]

Now choose the least complex implementation path that can test the observed problem safely. Sometimes the right next move is a clearer form or a better manual template. Sometimes it is an operator-assisted run with a repeatable prompt and a human review. A limited integration may be justified only when the boundary, access, maintenance, and recovery arrangements are already clear.

For our synthetic workflow, I would begin with a structured intake check and an operator-assisted draft. I would not connect an automatic send. That more connected option is premature while the lead must review source references and exceptions.

[ON SCREEN: `Resources/Automation Design Prompt.md`; highlight “Use only the information I provide” and “Do not include credentials.”]

You can use the Automation Design Prompt to draft questions and a design outline from safe information. Treat its output as a draft for the owners to review. It cannot verify permissions, source freshness, security, privacy, or future performance. Never put credentials, secrets, or live confidential material into it or into any course document.

[ON SCREEN: Start Here summary: readiness evidence, manual map, proportionate path, manual fallback.]

This is the standard for the rest of the course: evidence before connection, a narrow boundary before scale, and a manual path before dependency. Next, we will make the automation boundary explicit with stable-step rules, a data contract, visible state, approvals, and stop conditions.

## Member action

1. Complete `Resources/Automation Readiness Scorecard.md` for one bounded workflow using three safe or sanitized manual examples.
2. Map the current path in `Resources/Integration and Data Flow Map.md`, including owners, waits, rework, approved sources, and the manual route.
3. Write a one-sentence implementation-path decision: manual improvement, operator-assisted run, or limited integration; include the pilot scope, reviewer, and condition that would pause it.

## Recording checklist

- [ ] Embed path is shown exactly as `Start Here/01 - Confirm the workflow is ready to automate.md`.
- [ ] Runtime is rehearsed to 6–8 minutes.
- [ ] The example is visibly labelled sanitized and synthetic.
- [ ] The readiness scorecard, manual baseline map, and implementation ladder are demonstrated.
- [ ] No live tools, accounts, data, credentials, secrets, tokens, or connection settings are displayed.
- [ ] The script states that human authority and manual fallback remain in place.
- [ ] No outcome, time-saving, reliability, or automation promise is made.
