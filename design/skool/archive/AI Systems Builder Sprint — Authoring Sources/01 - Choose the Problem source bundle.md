# Skool folder: Week 1 — Choose the Problem

Create **Week 1 — Choose the Problem** with Skool’s **Add folder** action inside the single **AI Systems Builder Sprint** course. Add the three lessons below as separate pages with **Add page**. The live page editor has one rich-text content area, so each lesson summary is the opening paragraph—not a separate description field.

---

# Start with repeated pain, not a tool

**The right first AI-assisted system begins with a recurring costly or confusing task, then uses a tool only where it helps the workflow.**

## Opening paragraph

Good first systems begin with a repeated pain, not a favorite AI tool. Find a task that recurs, costs attention, follows recognizable judgment, and can produce a reviewable output. Then write down the evidence before you design the workflow.

## Page body / recording script

When people hear “AI system,” they often begin by naming a tool: a chatbot, an agent, an automation platform, or a new model. I want you to begin somewhere more reliable: a repeated pain.

A repeated pain is a task or handoff that keeps asking for attention. It might create delays, rework, inconsistent answers, missing information, or mental overhead. The key is repetition. If the situation happens once a year, you may not have enough examples to understand it. If it happens every day or every week, you can observe the pattern, name the decisions, and measure whether a change helps.

Look for the work around the work. An operator may not spend the most time on the final decision; they may spend it finding missing details, translating a messy request, checking a known constraint, or explaining the same next step. Those smaller frictions are often better first systems than the headline job.

Do not confuse annoyance with system potential. I use four questions. First, does the pain recur? Second, does it cost time, attention, mistakes, or delays? Third, can someone describe at least some of the judgment used to handle it? Fourth, can the workflow produce an output that a human can review? If the answer is yes to all four, you may have a good candidate.

The tool comes after this diagnosis. You might discover that the best first version is not automation at all. It could be a structured intake form and a checklist. It could be a prompt that produces a first draft for review. It could be a runbook that makes a handoff consistent. AI is useful when it assists a bounded step; it is not a reason to automate a messy or untrusted process end to end.

Gather evidence before you design. Save three anonymized examples of the task. Notice what repeats and what varies. Estimate how often it occurs. Write down the consequences of handling it poorly. You do not need a perfect time study. You need enough reality to avoid building for an imagined problem.

Be careful with high-stakes work. If the workflow touches health, legal decisions, hiring outcomes, financial eligibility, safety, or another consequential area, keep the AI-assisted output clearly advisory and ensure qualified human review. Do not make a first sprint project a system that independently makes decisions people have a right to challenge.

A narrow pain can still be valuable. A system that turns unstructured requests into a complete brief may save less time than a broad “AI operations assistant,” but you can test it, inspect it, and improve it. That is how trust is built: not by claiming autonomy, but by showing that a small workflow produces a useful, reviewable artifact.

There is a practical test for a candidate pain: remove the AI label and explain it to the person who feels it. If they recognize the delay or confusion immediately, you are likely close to a real problem. If you can only describe the idea through features, model names, or future possibilities, go back to the work itself. Good system design starts with a truthful account of the current process.

Today, make a pain inventory. Start with the recurring work you already understand. The strongest candidate is usually not the flashiest idea. It is the problem you can describe with real examples and test within the sprint.

## Concrete example

An operations lead repeatedly receives vendor requests missing delivery dates, quantities, or approval owners. The pain is not “we need an AI agent.” The repeated pain is incomplete request triage. A first system can turn each request into a completeness check, a list of missing fields, and a draft follow-up message for the lead to review.

## Action checklist

- [ ] List five tasks or handoffs that recur in my domain.
- [ ] For each, note frequency and the cost of getting it wrong.
- [ ] Select one task with recognizable judgment and a reviewable output.
- [ ] Collect or describe three safe, anonymized examples.
- [ ] State where human review remains necessary.

## Required deliverable

Add a **Repeated Pain Inventory** to your System Pack: one selected pain, its frequency, who feels it, what it costs, three example situations, and one sentence explaining why a human still reviews the output.

## Community prompt

What repeated pain are you choosing, and what evidence tells you it is real? Name the task—not the tool—and say what would make a bad output risky or unhelpful.

---

# Define one user and one useful output

**A first system becomes buildable when one specific user can receive one output that helps them take a clear next step.**

## Opening paragraph

Define your first system around one specific user and one useful output. A clear output gives you a boundary for inputs, decisions, quality review, and testing—without pretending the first version solves every related problem.

## Page body / recording script

Once you have a repeated pain, the next job is to create a boundary. The most useful boundary is one user and one output.

“User” does not mean a broad audience such as small businesses, teams, or customers. It means a person in a specific situation with a job to do. A field supervisor reviewing a work order is different from a technician carrying it out. A client success manager preparing for a renewal call is different from the client receiving the email. If you try to serve both in version one, their needs and quality standards will blur together.

“Output” means the thing your system produces for that user. It should be concrete enough to open, read, compare, approve, or act on. A useful output might be a cleaned intake brief, a priority list with reasons, a first-draft response, a meeting summary with decisions and owners, a research card, or a quality-check report. “Insight” is not an output until you say what form it takes and what the user does with it.

Use this definition: “For [specific user] who is trying to [job in context], this system takes [input] and produces [output] so they can [next action].” If any bracket contains a paragraph, keep narrowing.

The output is also a promise you can inspect. Define what must be present, what must not happen, and who has final judgment. For a meeting-summary system, required elements might be decisions, owners, deadlines, and open questions. A prohibited behavior might be inventing a deadline when nobody stated one. The meeting owner still checks the summary before it becomes a record.

This is not bureaucracy. These details make it possible to test. Without them, members cannot tell whether the system is useful or merely fluent. A polished paragraph can hide a missing owner, an unsupported claim, or an action that belongs to the wrong person. A simple output specification makes those failures visible.

Think about the input at the same time. What will the user provide? Is it a form, an email, a transcript, a set of notes, a spreadsheet row, or a conversation? The first version should accept a small, predictable input type. Do not try to handle every file format or every edge case in four weeks. You can add variations once you know that the core path works.

An SEO-related example can make this concrete, but the principle travels. An experienced content editor might use a system that turns a draft article and a brief into an editorial review memo. The user is the editor, not “anyone publishing content.” The output is the memo: missing claims, unsupported statements, unclear sections, and a prioritized revision list. It does not guarantee rankings or publish without an editor’s judgment.

I want the output specification to be short enough that you can hand it to a skeptical colleague. They should be able to say, “Yes, that would help me decide what to do next,” or point out what is missing. If they need a long explanation to understand the value, the output is probably too abstract. Use their confusion as a signal to simplify the user, input, or next action.

Choose an output that reduces one form of uncertainty for the user. If it gives them a clearer next action, it is useful. If it merely generates more text for them to interpret, keep refining.

## Concrete example

A nonprofit program coordinator prepares weekly volunteer briefings. For a volunteer shift lead, the system takes the schedule, location notes, and open tasks and produces a one-page shift brief with arrival details, assigned roles, safety notes, and unanswered questions. The coordinator reviews it before distribution.

## Action checklist

- [ ] Name one specific user and the situation they are in.
- [ ] Write the job they need to complete.
- [ ] Define one input type for the first version.
- [ ] Name one output someone can inspect or act on.
- [ ] List three required output elements and one prohibited behavior.
- [ ] Name the person responsible for final review.

## Required deliverable

Add an **Output Specification** to your System Pack with: user, job, input, output, next action, three required elements, one prohibited behavior, and the human reviewer.

## Community prompt

Post your definition: “For [user], this system takes [input] and produces [output] so they can [next action].” What is the one failure your output must not make?

---

# Set a narrow four-week finish line

**A good four-week finish line is a small system with a visible artifact, a few real or realistic tests, evidence of review, and one documented next improvement.**

## Opening paragraph

Set a four-week finish line for a small system you can show, test, and revise. Limit the user, output, workflow path, and proof so you finish with evidence and a next-improvement list instead of an ambitious unfinished idea.

## Page body / recording script

A finish line protects the sprint from two problems: endless building and vague disappointment. If you do not define what “done enough to learn from” means, every new feature will look necessary and every unfinished idea will feel like failure.

For this sprint, done does not mean perfect. It means you can show a usable version of one workflow, run it on a small set of inputs, inspect the results with a quality checklist, and record what you will change next. That is a meaningful finish because it creates evidence.

Write your finish line as an observable statement. Avoid phrases like “build an agent,” “launch the platform,” or “automate onboarding.” Instead write something like: “By the end of four weeks, I will have a documented intake-to-brief workflow for one customer-success manager, tested on three anonymized requests, with a review checklist and a list of the two most important revisions.” Anyone can look at that statement and tell whether you reached it.

You will narrow four things. First, narrow the user: one role, in one situation. Second, narrow the output: one document, recommendation, checklist, or draft. Third, narrow the path: handle the common case before you handle exceptions. Fourth, narrow the proof: choose a small number of safe tests and a clear review method.

The common case is especially important. A system that handles one frequent path well teaches you more than a system that claims to handle everything poorly. You can write down the edge cases you are excluding. That is not failure; it is responsible scope. It tells users and reviewers where the workflow stops and human judgment takes over.

Choose a simple home for the finished system. It might be a document with instructions, a shared template, a form plus prompt, a lightweight automation, or a basic page. Do not build software simply because software feels more official. The system needs to be understandable and testable by someone else. A clear document is often the right first home.

Set weekly checkpoints now. In Week 1, define the problem and output. In Week 2, map the hidden decisions and make a quality checklist. In Week 3, create the first prompt or runbook and inspect an output. In Week 4, package it, run a small test, and revise the documentation. If a checkpoint slips, reduce scope before adding hours or features.

Your next-improvement list is part of the finish line, not an admission that the work failed. Good builders can say: this part worked, this part did not, this is the evidence, and this is the next smallest change. That is the record a System Pack should preserve.

I also want you to decide now what you will call a pass and what will trigger a revision. For example, a brief may pass only if it includes every required field, flags missing information, and lets the reviewer make a next decision without opening the original notes. If it fails one of those tests, your job is not to hide it. Record the failure, revise the rule or prompt, and run the next test.

Commit publicly to a finish line that feels almost modest. It will make your first completed artifact more valuable than a large plan nobody can inspect.

## Concrete example

A restaurant operations manager wants to improve shift handoffs. The narrow finish line is not a restaurant-management tool. In four weeks, the manager will produce a closing-shift handoff brief from a manager’s notes, test it against three past shifts, use a checklist to verify staffing, inventory, maintenance, and guest issues, and document revisions. Payroll, scheduling, and inventory automation are explicitly out of scope.

## Action checklist

- [ ] Write an observable “By the end of four weeks…” statement.
- [ ] Limit the system to one user, one output, and one common workflow path.
- [ ] Choose three real or realistic safe test inputs.
- [ ] Select a simple home: document, template, form, page, or lightweight workflow.
- [ ] List the edge cases and features that are out of scope.
- [ ] Add four weekly checkpoints to my build log.

## Required deliverable

Post a **Four-Week Finish Line** in your build log. Include the user, output, common path, three planned tests, quality-review method, simple home, and explicit out-of-scope list.

## Community prompt

Share your finish line and one thing you are deliberately leaving out. What evidence would let another member say, “This first version is ready to learn from”?
