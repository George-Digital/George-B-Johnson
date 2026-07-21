# Start Here: Build One Small, Reviewable AI-Assisted System

**Embed on:** `Start Here/01 - Welcome and the Builders Lab standard.md`  
**Target duration:** 8–9 minutes  
**Viewer outcome:** The member can name a narrow first system, set up a System Pack and one build-log thread, and understand that AI prepares bounded drafts while a human owns review and decisions.

## What to demonstrate on screen

1. Open `Start Here/01 - Welcome and the Builders Lab standard.md` briefly to establish where this folder begins. Do not scroll through or read the lesson.
2. Open `Start Here/Resources/System Pack Template.md`. Point out only the working areas that make a first build inspectable: **System name and status**, **Problem statement**, **Scope and finish line**, **Input and output specification**, and the later **Quality checklist** and **test evidence** sections.
3. Open `Start Here/Resources/Build Log Template.md`. Show the opening-post fields and the seven fields in the update template.
4. In a blank, unsaved working copy of the System Pack, enter this clearly labeled synthetic example: **“Maintenance Request Completeness Brief — synthetic demo.”** Use an invented request such as: “Kitchen sink leaking in the back unit. Please send somebody.” Do not show real names, addresses, phone numbers, screenshots, account records, or community posts.
5. On screen, narrow the example to: “For a property-operations coordinator, this system turns a short maintenance request into a completeness brief and missing-question list, so the coordinator can decide what to clarify before routing it.” Mark emergency classification, tenant contact, and work assignment as human-owned decisions.
6. Show a deliberately imperfect draft in a blank note: `Urgency: emergency` and `Location: back unit`. Pause on it. Cross out or label it **fails review** because neither claim is supported by the synthetic input. Replace it with `Urgency: needs coordinator review` and `Location: needs confirmation`.
7. Return to the Build Log template and complete a synthetic opening post—not only a title. Show the specific user, repeated problem, and useful output; four-week finish line; specific evidence to collect; first artifact; one decision question; and one next test. Then point to all seven update fields: what changed, what was tested, evidence, what worked, what broke or remains unclear, next test, and decision question. Keep the example visibly labeled **synthetic** throughout.

## Teleprompter script

[ON SCREEN: Course folder with `Start Here/01 - Welcome and the Builders Lab standard.md` selected.]

Welcome to Builders Lab. I’m George, and before we talk about prompts, tools, or automation, I want to set the standard for this sprint.

We are not here to collect clever AI ideas. We are here to make one small system that another person can look at, test, and improve. By the end of this course, I want you to have a useful operating package for one piece of work you understand—not a promise that everything is automated, and not a claim that a draft can make decisions without you.

[ON SCREEN: Open `Start Here/Resources/System Pack Template.md`; highlight the first four sections.]

This is the System Pack. Think of it as the place where the receipts live. It gives your build a name, a user, a problem, an input, an output, a review point, and later, test evidence and revision notes.

I do not expect you to fill all of this in today. In fact, trying to fill it all in today is a good way to turn a small build into paperwork. Today, I want you to make the container and put a truthful first definition inside it.

I’m going to use a synthetic example. Nothing on this screen is from a client, a member, or a real property record. I’m calling it a maintenance-request completeness brief.

[ON SCREEN: Type `Maintenance Request Completeness Brief — synthetic demo` in a working copy.]

The tempting version of this idea would be, “I’m going to build an AI system for property operations.” That sounds important, but it is not a buildable first decision. It leaves too many questions unanswered. Who uses it? What does it make? What happens when the request involves safety? What information is it allowed to use?

So I’m making a smaller choice. For one property-operations coordinator, this system turns a short maintenance request into a completeness brief and a missing-question list. The coordinator uses that brief to decide what to clarify before routing the request.

[ON SCREEN: Enter the one-sentence definition and highlight `human reviewer: coordinator or safety lead`.]

Notice the trade-off I’m making. I am giving up the impressive story of an automated maintenance desk. In return, I get a workflow I can actually inspect. A coordinator can look at the brief, see what is missing, and decide what happens next. That is a much better first system.

I also want to be explicit about what stays with the person. This draft does not classify an emergency. It does not contact a tenant. It does not assign a technician. If the request contains a safety signal, a coordinator or safety lead reviews it. AI can help organize the stated information. It does not inherit authority because it produced fluent language.

[ON SCREEN: Scroll to `Scope and finish line`; add `Common path: short, non-safety maintenance request` and `Out of scope: emergency classification, work assignment, tenant contact`.]

This is how I use scope. It is not an apology for a small build. It is a way to make the boundary visible. The common path is a short, ordinary request. Safety cases, unclear locations, and decisions about priority have a different owner. We will record those stops instead of pretending they do not exist.

Here is the invented request I’ll use today: “Kitchen sink leaking in the back unit. Please send somebody.” It is deliberately thin, because thin inputs are where a workflow often reveals its hidden assumptions.

[ON SCREEN: Show the synthetic request in a blank note, then show a blank `Draft 0` note with `Urgency: emergency` and `Location: back unit`.]

Let me show you an imperfect output on purpose. This first draft says the urgency is emergency and the location is the back unit. It may look decisive. But neither statement is supported by the input. “Back unit” is not a unit number, and a leak alone does not give this draft the authority to make an emergency classification.

[ON SCREEN: Mark both fields `fails review`; change them to `needs coordinator review` and `needs confirmation`.]

This is a useful failure. I would rather see it now than bury it under a more polished prompt. The human reviewer can say: this is not ready to route. Ask for the exact location, ask the approved safety questions, and make the urgency decision using the real process. The system has helped by making the gap visible. That is enough for a first version.

[ON SCREEN: Open `Start Here/Resources/Build Log Template.md`; highlight opening post and update headings.]

The other half of the sprint is this build log. I want one thread, not a trail of disconnected updates. A single thread lets you see the sequence: what you intended, what you tested, what failed, and what changed because of the evidence. Its update template has seven fields: what changed, what you tested, evidence, what worked, what broke or remains unclear, your next test, and one decision question.

For this synthetic example, I would complete the opening post, not just give it a title. The specific user is a property-operations coordinator handling a short, non-emergency maintenance request. The repeated problem is that thin requests create clarification delays and unsupported routing assumptions. The useful output is a completeness brief and missing-question list, so the coordinator can decide what to clarify before routing.

My four-week finish line is: by the end of the sprint, show one usable completeness-brief workflow, test it on three realistic synthetic requests, review each with the factual-grounding checklist, and document one revision. The evidence I will collect is three labeled test records, the reviewer’s pass, revise, or stop decision for each, and the revision note that follows the failure. My first artifact is the one-sentence system definition plus a pasted synthetic missing-question list.

My first decision question is not, “What do you think of my AI system?” That is too broad to help. I would ask: “Does this brief make the missing location and urgency decision visible before the coordinator routes the request?” The next test is: “Use a complete synthetic request by Friday and compare the reviewer result.”

[ON SCREEN: Complete the synthetic opening post with title; user, repeated pain, and output; four-week finish line; named evidence; first artifact; decision question; and next test. Then highlight the seven update fields.]

That completed opening post gives someone an artifact, evidence to look for, and a decision they can inspect. The next test is small: use a more complete synthetic request and see whether the same brief is useful without guessing.

Your own build does not need to resemble property operations. It may be a handoff brief, an editorial review memo, a research card, an intake checklist, or a first-draft response. What matters is that it begins with work you know, produces one inspectable output, and names the person who still reviews it.

[ON SCREEN: Return to the System Pack; show the status field and build-log link field.]

As you start, keep two promises to yourself. First, do not hide the rough output. The rough output is where you learn what is missing. Second, do not use private information just because the work is familiar. Start with authorized material or a realistic synthetic case, minimize what you include, and label it clearly.

At the end of this folder, I want you to have a System Pack workspace, one build-log thread, a one-sentence target, and one small next test. That is a real start. We will add the rules, prompts, tests, and revisions as the sprint moves forward.

[ON SCREEN: System Pack and Build Log side by side; show `Synthetic demo — not live use` note.]

Start narrow. Keep the review visible. Bring the evidence with you. I’ll see you in the first week, where we choose the repeated pain worth solving.

## Member action

**Folder deliverable:** Copy `Start Here/Resources/System Pack Template.md` into the member’s own approved workspace as **`System Pack — [system name]`**. Create one community thread from `Start Here/Resources/Build Log Template.md` titled **`Build Log: [system name] for [specific user]`**.

Complete the Build Log opening post before posting it. It must name the specific user, repeated problem, and useful output in the exact one-sentence definition: **“For [specific user], this system takes [input/problem] and produces [useful output] so they can [next action].”** It must also set a four-week finish line; state the specific evidence to collect; link, paste, or describe a first artifact; ask one inspectable decision question; and name one dated or conditional next test. Record one named human reviewer. Use only authorized or clearly labeled synthetic material.

## Recording checklist

- [ ] Open the three exact local files listed above; do not present the lesson copy as the script.
- [ ] Use the labeled synthetic maintenance-request example only; remove all real names, addresses, contacts, records, and community activity.
- [ ] Show the scope trade-off: a reviewable completeness brief, not an automated operations system.
- [ ] Show `Draft 0` making unsupported urgency and location claims, then visibly fail it in human review.
- [ ] State that emergency classification, contact, and assignment remain human decisions.
- [ ] Keep the System Pack and build log text large enough to read; pause on the completed opening post: user/problem/output, four-week finish line, specific evidence, first artifact, decision question, and next test.
- [ ] Show and name all seven Build Log update fields; do not describe the update template as having five fields.
- [ ] Do not claim outcomes, income, automation, or reliability beyond the bounded test.
- [ ] End with the member action and confirm that the build log contains no confidential data.
