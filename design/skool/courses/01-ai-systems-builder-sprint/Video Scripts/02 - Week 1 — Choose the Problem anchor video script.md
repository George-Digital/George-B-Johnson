# Week 1: Choose a Problem You Can Actually Test

**Embed on:** `Week 1 — Choose the Problem/01 - Start with repeated pain, not a tool.md`  
**Target duration:** 8–10 minutes  
**Viewer outcome:** The member can choose one repeated pain with accessible evidence, define one user and one reviewable output, and set a four-week finish line with clear exclusions and human review.

## What to demonstrate on screen

1. Open `Week 1 — Choose the Problem/01 - Start with repeated pain, not a tool.md` only to orient the viewer to the first lesson in the folder.
2. Open `Start Here/Resources/System Pack Template.md` at **Problem statement**, **Scope and finish line**, and **Input and output specification**. Open `Start Here/Resources/Build Log Template.md` at the opening post.
3. In a blank, unsaved working copy, create a clearly labeled synthetic **Repeated Pain Inventory** with three fictional candidates: “answer ad-hoc vendor questions,” “chase missing details in vendor requests,” and “replace the procurement process.” Mark the third as out of scope and compare the first two by recurrence, cost, recognizable judgment, safe examples, and reviewable output.
4. Choose the second synthetic candidate and enter: **Vendor Request Completeness Brief — synthetic demo**. Use three invented request snippets, with no real company, person, address, contact, price, or contract data.
5. Show the one-user/one-output decision: an operations lead receives a brief with supplied details, missing fields, and a draft follow-up. The system does not approve a vendor, set commercial terms, or make a purchasing decision.
6. Show an intentionally flawed mock brief that reads `Delivery date: Friday` when the synthetic request only says `next week`. Mark it **revise** in a human-review note, change it to `Delivery date: needs confirmation`, and add the missing-question field.
7. Complete a visible four-week finish line and out-of-scope list in the System Pack. Then add the same target and one next test to the build-log opening post.

## Teleprompter script

[ON SCREEN: `Week 1 — Choose the Problem/01 - Start with repeated pain, not a tool.md` selected in the course folder.]

This week is about a decision that looks simple but saves a lot of wasted effort: choosing the problem before you choose the tool.

I know the temptation. You see a new model, an automation feature, or an agent demo, and the idea arrives as, “I should build one of those for my business.” The trouble is that a tool name does not tell you what work is worth changing. It does not tell you who needs help, what a good result looks like, or how you would know whether a first version failed.

I want to start with repeated pain instead.

[ON SCREEN: Open `Start Here/Resources/System Pack Template.md` at `Problem statement`. Show a blank synthetic pain inventory.]

For this screen demo, everything is invented. I’m not using a supplier email, a client record, or a member’s work. I have three fictional starting points.

The first is “answer ad-hoc vendor questions.” The second is “chase missing details in vendor requests.” The third is “replace the procurement process.”

The third one sounds ambitious, and that is exactly why I am crossing it out for this sprint. Replacing procurement brings approval authority, purchasing policy, contracts, access, and many exceptions. Even if the idea is worthwhile someday, it is not a four-week first system.

[ON SCREEN: Mark `replace the procurement process` as out of scope. Add columns: repeats, cost, judgment, safe examples, reviewable output.]

I use a simple test for the remaining candidates. Does the pain recur? Does it cost time, delay, rework, mistakes, or attention? Is there recognizable judgment in the current work? Can I get a few safe examples? And can the workflow create an output a person can review?

Answering ad-hoc questions might recur, but it is still broad. The request could be about a delivery date, a policy, a commercial term, or something entirely different. Chasing missing details in vendor requests is narrower. It happens regularly. It delays the next handoff. An experienced operations lead knows which details matter. And the first output can be a plain completeness brief.

That is the trade-off I am making: I am deliberately choosing the less glamorous problem because it has better evidence and a cleaner test.

[ON SCREEN: Enter `Vendor Request Completeness Brief — synthetic demo`; show three fabricated snippets, such as `Need 40 cartons next week. — Avery, fictional supplier`, `Quote attached; please route`, and `Need delivery, but approval owner is still unknown.`]

I would collect three safe examples before I build anything. In this demo, these are fabricated snippets that mimic the structure of a request without using live names, prices, order numbers, or contract details. I am looking for patterns. In these made-up cases, delivery timing, quantity, and approval owner appear or go missing in different combinations.

That tells me the job is not “write a better email.” The job is to help an operations lead see what is present, what is missing, and what to ask for before routing the request.

[ON SCREEN: Move to `Input and output specification`; type the one-sentence definition.]

Now I define one user and one output. My user is not “the whole company.” It is an operations lead handling an incoming vendor request. My input is a vendor request plus any approved source fields the lead provides. My output is a vendor request completeness brief: supplied details, missing details, and a draft follow-up question.

The next action matters. The lead uses the brief to request missing information or route a complete request. That is a practical decision. It is not an automated vendor approval.

[ON SCREEN: Add `Required elements: request summary, supplied details, missing fields, next owner`; `Prohibited: approve vendor, set price, promise delivery`.]

I want to make the boundary inspectable. The brief must show the request summary, the supplied details, the missing fields, and the next owner. It must not approve a vendor, set terms, or make a purchasing decision. A human operations lead still reviews the source and decides what happens.

This is where a lot of early systems go wrong. A polished answer can look useful while silently turning an uncertain fact into a commitment. Let me show that failure.

[ON SCREEN: Show a mock `Draft 0` with `Delivery date: Friday` and the synthetic input `Need 40 cartons next week.`]

The input says “next week.” The draft says “Friday.” That is a confident-looking output, but it has invented a date. I am not going to smooth it over or say the model was confused. I am going to make the failure specific.

[ON SCREEN: Add a human-review note: `Revise — source does not specify a date.` Change field to `Delivery date: needs confirmation`; add `Question: Which delivery date is required?`]

The operations lead’s review catches it. The revision is not to add more enthusiasm or to pretend we can infer the date. The revision is to make uncertainty visible and ask the question the lead needs answered. This is the kind of output I can test and improve because the quality rule is clear: do not invent a delivery date.

[ON SCREEN: Scroll to `Scope and finish line`; fill a four-week statement.]

Next, I write a finish line that can be observed. By the end of four weeks, I will have a documented request-to-brief workflow for one operations lead. I will run it on three safe, realistic requests. I will review each output against a checklist. And I will document the next improvement.

Notice what is not on that list: launch a platform, connect every source, automate routing, or handle every kind of vendor exception. Those may be later ideas. They are not proof that this first version is ready.

[ON SCREEN: Type `Out of scope: purchasing approval, price negotiation, live vendor data, unsupported request types`.]

Being explicit about exclusions protects the project. When someone suggests a feature, you can ask: does it help the one user receive the one output on the common path? Can we test it safely now? If the answer is no, add it to a future list rather than quietly expanding the sprint.

[ON SCREEN: Open `Start Here/Resources/Build Log Template.md`; fill a synthetic opening post.]

I would now mirror this decision in my build log. The title is “Build Log: Vendor request completeness brief for operations lead.” The target says who it is for, what it turns into what, and what evidence I will show in four weeks.

My first decision question might be: “Does this output put the missing approval owner early enough for the operations lead to act?” That is much more useful than asking for a general reaction. It gives another person a job to do with the artifact.

[ON SCREEN: Add `Next test: Run one complete synthetic request and one missing-date request through the same output format.`]

And my next test is small. I will use a complete synthetic request and a missing-date synthetic request. I will not add automation yet. I am learning whether the problem, the output, and the review rule are sound.

Your problem can come from a very different domain. The pattern is the same. Find a repeated friction you understand. Choose one person who feels it. Make one output they can inspect. Decide what the output must never guess. Then set a modest finish line that gives you evidence instead of a giant unfinished promise.

[ON SCREEN: System Pack with the selected pain, output specification, finish line, and exclusions visible.]

If you can show the input, the output, the human reviewer, and the next test, you have enough to move forward. Next week, we will pull the judgment out of your head and turn it into rules a workflow can actually use.

## Member action

**Folder deliverable:** In the member’s working copy of `Start Here/Resources/System Pack Template.md`, complete **Problem statement**, **Scope and finish line**, and **Input and output specification** for one system. In the single thread created from `Start Here/Resources/Build Log Template.md`, post the same four-week finish line.

The deliverable must name one repeated pain, one specific user, one input type, one reviewable output, three required output elements, one prohibited behavior, a human reviewer, three planned safe tests, and an explicit out-of-scope list.

## Recording checklist

- [ ] Open the exact Week 1 lesson and Start Here templates named above; do not read their prose aloud.
- [ ] Label all three vendor-request snippets and every on-screen field as synthetic.
- [ ] Show the decision to reject the broad procurement-system idea and explain why the narrower problem is more testable.
- [ ] Show one specific invented-date failure, the human review note, and the revised `needs confirmation` field.
- [ ] Name what remains human-owned: vendor approval, commercial terms, and routing decisions.
- [ ] Make the four-week finish line, exclusions, and next test readable on screen.
- [ ] Do not use real vendor, client, member, price, contract, or account information.
- [ ] Avoid claims that the workflow will save money, make decisions, or work reliably beyond the planned tests.
