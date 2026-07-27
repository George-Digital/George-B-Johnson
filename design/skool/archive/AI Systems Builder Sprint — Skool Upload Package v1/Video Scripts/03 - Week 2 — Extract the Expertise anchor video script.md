# Week 2: Extract the Judgment Behind the Workflow

**Embed on:** `Week 2 — Extract the Expertise/01 - Extract your decision rules.md`  
**Target duration:** 9–10 minutes  
**Viewer outcome:** The member can turn observed operator judgment into testable decision rules, a minimum SOP, clear input boundaries, edge-case routes, and a human-applied quality rubric.

## What to demonstrate on screen

1. Open `Week 2 — Extract the Expertise/01 - Extract your decision rules.md` briefly as the folder entry point. Do not read the lesson text line by line.
2. Open `Week 2 — Extract the Expertise/Resources/Decision Rules and Quality Rubric Template.md`. Keep the **Decision rules**, **Minimum useful SOP**, **Inputs and boundaries**, **Quality rubric**, and **Test record** sections available.
3. Open `Start Here/Resources/System Pack Template.md` at **Workflow map**, **Decision rules and minimum SOP**, **Input and output specification**, and **Quality checklist** to show where the completed work belongs.
4. Use one clearly labeled, privacy-safe synthetic scenario: **Volunteer Shift Guide — synthetic demo**. In a blank note, show invented approved inputs: a schedule, venue note, task list, and emergency-procedure reference. Do not use real event dates, locations, volunteer names, contacts, safety plans, screenshots, or files.
5. Extract at least five visible rules in the template. Include a missing emergency-procedure rule, a conflicting-start-time rule, an unassigned-role rule, an approved-source rule, and an escalation rule for safety questions. Show the condition, action, evidence, exception, and human owner for each.
6. Build a five-to-seven-step common-path SOP, then deliberately show an imperfect draft guide choosing `Start time: 8:00` from two conflicting synthetic schedules. Mark the run **stop/route**, not pass. Have the fictional event lead resolve the conflict; do not let the workflow choose.
7. Build a five-criterion rubric with factual grounding and safety/scope as visible gates. Score the imperfect draft as **Test output 1** in the Test record so the conflict fails the gate; record one revision to the SOP or rule.
8. After the fictional event lead resolves the conflict in a clearly labeled synthetic approved record, show a revised guide as **Test output 2**. Score both sample outputs in the Test record against the visible rubric and preserve the first stop decision rather than overwriting it.

## Teleprompter script

[ON SCREEN: `Week 2 — Extract the Expertise/01 - Extract your decision rules.md` selected.]

Last week, you chose a bounded problem, a user, and an output. This week, we do the work that makes the system more than a good-looking prompt: we extract the judgment behind the workflow.

Most experienced people do not narrate every decision they make. They notice that a field is missing. They recognize that two sources do not agree. They know when a request should stop and go to someone else. Because those decisions happen quickly, they are easy to leave out when we ask AI to help.

So I am not trying to capture every thought an expert has ever had. I am trying to make the important common-path decisions visible enough for another capable person to inspect and challenge.

[ON SCREEN: Open `Week 2 — Extract the Expertise/Resources/Decision Rules and Quality Rubric Template.md` at the Decision rules table.]

I’ll use a safe synthetic example: a volunteer shift guide. The job is to take an approved event schedule, venue note, task list, and emergency-procedure reference, and assemble a shift guide for a shift lead. Nothing here is a real event. The dates, names, locations, and instructions are invented for the recording.

[ON SCREEN: Show blank note labeled `Synthetic only` with four invented input labels.]

Before I write any rules, I look at the source material as an operator would. What would make me pause? What would I ask before I handed a guide to a shift lead? What information is allowed to be used? Those moments are the raw material.

The first rule is simple. If the emergency-procedure reference is missing, do not write safety instructions from memory. Ask for the approved reference or route the case to the event lead. The evidence is the approved procedure itself. The human owner is the event lead.

[ON SCREEN: Fill first rule: missing procedure → request/route → verify approved reference → event lead.]

The second rule handles conflicting schedules. If two approved-looking sources contain different start times, stop the normal path and flag the conflict. The workflow does not select the time that sounds more likely. It does not average the two. It keeps the evidence visible and asks the event lead to resolve it.

Third, if a role has no named assignment, label it open. Do not invent a volunteer just to make the guide look complete.

Fourth, use only the current approved schedule, venue note, task list, and emergency-procedure reference. A chat message, old example, or copied note is not automatically authoritative.

And fifth, if the input asks for a safety decision beyond the guide’s scope, route it to the event lead. This system can organize stated information. It does not own event safety planning.

[ON SCREEN: Fill all five rows. Pause on the `Evidence to check`, `Exception`, and `Human owner` columns.]

I want you to notice the difference between a rule and a vague aspiration. “Be careful with safety” is not a rule a new operator can follow. “If the approved emergency procedure is missing, do not generate instructions; route to the event lead” is observable. We can test it. We can disagree with it. We can revise it if the real process changes.

Now I turn those decisions into a minimum SOP.

[ON SCREEN: Scroll to `Minimum useful SOP`; number seven short steps.]

Minimum is important. I am not writing a massive manual. I want the shortest reliable sequence for the common path.

For this example, the trigger is a request for a shift guide with the current schedule and task list available. The operator gathers the approved inputs. They check the schedule, venue note, role list, and emergency reference. They use the rules for missing fields or conflicts. They assemble a draft guide. A human reviewer checks it. Then it is delivered or routed, and the run is recorded.

That is enough structure to run and inspect the work. It also gives each step a visible artifact or decision.

[ON SCREEN: Link the schedule-conflict rule at the check step; highlight human review and stop condition.]

Here is the trade-off. I could try to make this SOP cover every weather change, late arrival, accessibility request, and venue exception from day one. That would make the page longer, but not necessarily more useful. Instead, I am documenting the common path and the stops that matter now. New failures can earn their way into the procedure after evidence shows they recur.

Let’s run an imperfect example.

[ON SCREEN: Show synthetic Schedule A: `Start 8:00`; Schedule B: `Start 8:30`; then a mock draft guide with `Start time: 8:00`.]

The draft guide has selected 8:00 even though the inputs disagree. It looks tidy, and that is the danger. A tidy output can hide an unsupported decision.

[ON SCREEN: Human-review note: `STOP — conflicting approved sources. Event lead must resolve.` Mark the draft’s start-time field as failed.]

The right response is not to ask the system to be more confident. The right response is to stop. The fictional event lead checks the source, confirms the correct start time in the approved process, and the operator records what happened. We do not need to show a real event lead or a real event record to demonstrate this. We just need to make the human ownership visible.

[ON SCREEN: Add revision to SOP: `At step 3, compare start time across schedule and venue note; route any mismatch before drafting.`]

That failed run teaches us something specific. The source check needs to happen before the draft is assembled, and the rule needs to be connected to that step. That is a useful revision. It is much stronger than a generic note that the output needs improvement.

[ON SCREEN: Open Quality rubric section; add five rows: source grounding, required fields, usability, scope/safety, next action. Mark source grounding and scope/safety as gates.]

Now we need a way to judge outputs consistently. This is the rubric. A decision rule tells the workflow what to do when a condition appears. A rubric tells the reviewer whether the completed output can move forward.

For this guide, I am using five criteria. Is every key detail grounded in an approved source? Are the required fields present? Can a shift lead find their next action quickly? Does the guide stay within the safety and privacy boundary? And does it clearly show unresolved items and their owner?

The first and fourth criteria are gates. A guide that looks polished does not pass if it invents a start time or gives unsupported safety instructions.

[ON SCREEN: Score the flawed draft: `Factual grounding: fail`; `Scope/safety: fail gate`; `Overall: stop/route`.]

When I score the flawed draft, it fails the source-grounding gate. I record this as Test output 1 in the Test record: the safe source summary contains the 8:00 and 8:30 conflict, the draft selected 8:00, factual grounding and the scope/safety gate fail, and the reviewer’s decision is stop/route. I also record the revision to the pre-run check. This creates a receipt for why the current version changed.

[ON SCREEN: Add a clearly labeled synthetic approved event-lead resolution: `Start time: 8:30`. Show revised guide `Start time: 8:30 — grounded in approved resolution`; record Test 2 with factual grounding, required fields, usability, scope/safety, and next action scored pass; reviewer decision: `pass for bounded shift-lead use`.]

For Test output 2, the fictional event lead—not the workflow—has resolved the source conflict in an approved synthetic record. The revised guide can use that stated time and still preserve the source. I score the second sample output against the same five criteria. It passes this bounded test because the source is now explicit, the required fields and next action are clear, and no safety decision was invented.

Two scored sample outputs in the Test record matter here. The second record does not erase the first failure; it shows exactly what changed, who resolved the conflict, and why the revised guide can move forward for this one safe case.

[ON SCREEN: Open `Start Here/Resources/System Pack Template.md`; point to Workflow map, Decision rules and minimum SOP, Input and output specification, Quality checklist.]

Your System Pack is where these pieces come together. The rules tell you where the route changes. The SOP gives the common path an order. The input boundary says what is allowed and what is missing. The rubric lets a human judge the finished output.

AI may help you cluster notes or turn a spoken walkthrough into a draft rule list. But you validate the rules. You decide which source is authoritative. You decide which outcome can move forward. And you name the person who owns a stop or escalation.

Keep the examples safe. Use authorized material only where it belongs, and use a realistic synthetic scenario when you are recording, sharing, or testing outside an approved environment. If a workflow touches safety, health, money, employment, access, legal decisions, or another consequential area, keep the output advisory and send the decision to a qualified person.

[ON SCREEN: Template with completed synthetic rules, SOP, rubric, and test record side by side.]

By the end of this week, I want you to have visible judgment—not a claim that you captured every edge case. Start with the decisions that protect the common path, make the stops clear, and run one example that proves whether your instructions hold up. Next week, we’ll turn that foundation into the simplest workflow you can actually run.

## Member action

**Folder deliverable:** Complete a working copy of `Week 2 — Extract the Expertise/Resources/Decision Rules and Quality Rubric Template.md` and transfer the current rules, minimum SOP, inputs/boundaries, and rubric into the matching sections of the member’s `System Pack — [system name]` created from `Start Here/Resources/System Pack Template.md`.

Include at least five decision rules; a five-to-seven-step common-path SOP; required inputs and authoritative sources; five direct constraints; three edge cases with request, fallback, route, or decline behavior; four to six rubric criteria; named human owners; and **two scored safe sample outputs in the template’s Test record**—Test output 1, a failed or stopped run with its documented revision, and Test output 2, a rerun or second case with its reviewer decision.

## Recording checklist

- [ ] Open the exact Week 2 lesson, Week 2 template, and System Pack template listed above.
- [ ] Use only the clearly labeled synthetic volunteer-shift scenario; show no real schedule, venue, volunteer, contact, or safety data.
- [ ] Demonstrate five rules with condition, action, evidence, exception, and human owner—not vague advice.
- [ ] Show the scope trade-off between a usable common path and an imagined catalog of every exception.
- [ ] Show the conflicting 8:00/8:30 draft failure and stop it in human review rather than choosing a time.
- [ ] Score the flawed draft as Test output 1 in the Test record against visible rubric gates and record the precise SOP revision.
- [ ] Show and score Test output 2 after the fictional event lead resolves the conflict; preserve the Test output 1 stop decision and show the reviewer decision for both sample outputs.
- [ ] State that safety decisions remain with the event lead or another qualified human.
- [ ] Do not imply that the synthetic test validates real-world safety, event operations, or any consequential decision.
