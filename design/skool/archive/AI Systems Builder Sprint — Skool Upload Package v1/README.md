# Builders Lab: AI Systems Builder Sprint — Skool Upload Package

## Course promise

Builders Lab helps builders and operators turn real domain expertise into **one practical AI-assisted system**. Members choose a repeated problem, document the judgment behind the work, create a prompt or lightweight workflow, test a real output, and revise it with critique. The first sprint ends with a usable **System Pack**, not a promise of an app, income, rankings, or fully automated work.

The paid value is application: scoped artifacts, build-log accountability, feedback, and revision. The public-facing teaching can explain the method; this classroom asks members to use it on their own work.

## Paste-ready course setup

**Course name — 25 characters:**

```text
AI Systems Builder Sprint
```

**Course description — 348 characters:**

```text
Build one practical AI-powered workflow from your own domain expertise. In this sprint, you’ll choose a real problem, map the workflow, create prompts or AI automation, test outputs, document the system, and share your build for feedback. No hype or one-size-fits-all templates — just practical systems thinking, live examples, and useful critique.
```

## Member baseline and support

This course assumes a member already has access to an AI assistant and can submit, review, and revise a basic prompt. It does not require any specific AI product, coding tool, terminal, API, or automation platform.

A member who needs occasional account setup or foundational help can bring that need to the community Q&A or scheduled support window. Helping members through an early obstacle can create stronger participation and retention, but the course should not become a separate zero-to-AI curriculum or imply unlimited private technical support.

## Skool UI upload order

The current screenshots show the Classroom menu and rich-text page editor. **AI Systems Builder Sprint** already exists as one course. Build its curriculum with Skool’s verified **Add folder** and **Add page** controls.

### Step 1 — Create the verified folder/page hierarchy

Use the **⋯** menu beside `AI Systems Builder Sprint`. The live menu provides exactly two content actions: **Add page** and **Add folder**.

Create this hierarchy:

The physical course package mirrors the Skool course:

```text
01-ai-systems-builder-sprint/
├── README.md
├── Start Here/
│   ├── 01 - Welcome and the Builders Lab standard.md
│   ├── 02 - Choose your first build.md
│   ├── 03 - Create your build-log thread.md
│   └── Resources/
│       ├── Build Log Template.md
│       └── System Pack Template.md
├── Week 1 — Choose the Problem/
│   ├── 01 - Start with repeated pain, not a tool.md
│   ├── 02 - Define one user and one useful output.md
│   └── 03 - Set a narrow four-week finish line.md
├── Week 2 — Extract the Expertise/
│   ├── 01 - Extract your decision rules.md
│   ├── 02 - Create the minimum useful SOP.md
│   ├── 03 - Define inputs, constraints, and edge cases.md
│   ├── 04 - Build a quality rubric.md
│   └── Resources/
│       └── Decision Rules and Quality Rubric Template.md
├── Week 3 — Build the First Workflow/
│   ├── 01 - Choose the simplest build path.md
│   ├── 02 - Build the prompt stack.md
│   ├── 03 - Add examples and constraints.md
│   ├── 04 - Create a repeatable runbook.md
│   └── Resources/
│       └── Prompt Stack and Runbook Template.md
└── Week 4 — Package, Test, and Revise/
    ├── 01 - Give the system a simple home.md
    ├── 02 - Run a small manual test.md
    ├── 03 - Ask better feedback questions.md
    ├── 04 - Revise and complete the System Pack.md
    └── Resources/
        └── Test and Revision Template.md
```

In Skool, create the five top-level course folders shown above. The local `Resources` directories represent files to attach or link from the relevant lessons; they do not require extra Skool folders unless the UI supports and benefits from them.

The screenshot’s existing `(Draft) Start Here` item is a **page**, not the intended folder. Preserve its copy until the new folder exists. If Skool offers a move action, repurpose it as the first page; otherwise copy its contents into the correct page before removing anything.

Use the resources stored inside each physical course folder. In Start Here, make **System Pack Template** available from `01 - Welcome and the Builders Lab standard`, and make **Build Log Thread Template** available from `03 - Create your build-log thread`. Week 2 contains the Decision Rules and Quality Rubric template; Week 3 contains the Prompt Stack and Runbook template; Week 4 contains the Test and Revision template. Set the Week 1 submission so members post a problem statement, output specification, and four-week finish line in their build-log thread.

## Course art (local upload asset)

Use `Course Art/ai-systems-builder-sprint-cover-1280x720.png` as the course-level Skool Classroom cover/thumbnail. It is a 1280 × 720 PNG at the required 16:9 ratio. Upload the image through the live course image field; do not create a `Course Art` folder or page in the member curriculum.

## Video Scripts (local production only)

`Video Scripts/` is a local-only production directory, **not a Skool folder**. Do not create it in Skool or upload its private recording scripts as classroom pages. Each folder-anchor script is mapped to the first lesson in its course folder:

| Local video script | Embed on lesson |
| --- | --- |
| `Video Scripts/01 - Start Here anchor video script.md` | `Start Here/01 - Welcome and the Builders Lab standard.md` |
| `Video Scripts/02 - Week 1 — Choose the Problem anchor video script.md` | `Week 1 — Choose the Problem/01 - Start with repeated pain, not a tool.md` |
| `Video Scripts/03 - Week 2 — Extract the Expertise anchor video script.md` | `Week 2 — Extract the Expertise/01 - Extract your decision rules.md` |
| `Video Scripts/04 - Week 3 — Build the First Workflow anchor video script.md` | `Week 3 — Build the First Workflow/01 - Choose the simplest build path.md` |
| `Video Scripts/05 - Week 4 — Package, Test, and Revise anchor video script.md` | `Week 4 — Package, Test, and Revise/01 - Give the system a simple home.md` |

### Step 2 — Populate each page in the verified page editor

The live page editor contains one rich-text content area. It does **not** show a separate title or description field.

For each page:

1. Use **Add page**.
2. Open the matching numbered lesson file inside its physical course folder in a **rendered Markdown preview**. Copy the rendered page—not the raw Markdown symbols—and paste it into Skool’s rich-text editor.
3. Confirm the first line is formatted **H1** and the `Concrete example`, `Action checklist`, `Required deliverable`, and `Community prompt` lines are **H2**.
4. Confirm the action checklist appears as ordinary bullets. Use the toolbar’s bullet control if formatting was lost during paste.
5. Keep the page in **Draft** until its title, body, resources, and formatting are checked; confirm `(Draft)` appears in the left navigation, then select **Save**.

The visible toolbar supports H1–H4, bold, italic, strikethrough, inline code, bulleted and numbered lists, quotes, code blocks, images, links, dividers, and YouTube embeds. The bottom bar also shows **Add**, **Draft**, **Cancel**, and **Save**. Do not invent a separate lesson-description field or character limit.

After the classroom pages are ready, publish the Start Here, This Month’s Sprint, and Feedback Standard community posts from `../../builders-lab-launch-playbook.md`. Open the Monday Build Target, Wednesday Critique Desk, and Friday Build Log loop. Reply to every first build target; schedule only the critique capacity George can sustain.

Do not promote broadly until Start Here, Sprint Weeks 1 and 2, the templates, the pinned posts, at least three visible examples/discussions, a recurring critique time, and capacity for one direct teardown per week are in place.

## Lesson format

Every classroom lesson source file uses the same member-facing structure:

- **Title** — the decision or action at hand.
- **Opening paragraph** — introductory copy placed directly below the page’s H1 title in the rich-text editor.
- **Lesson script** — public copy that can also support a 4–7 minute recording. If recorded, deliver it in first person; the written lesson must remain complete without video.
- **Concrete example** — a transferable, bounded example, not a success claim.
- **Action checklist** — the smallest actions that turn watching into work.
- **Required deliverable** — the artifact a member must post or save.
- **Community prompt** — a precise request that invites useful replies.

Keep the public lesson visible and useful on its own. Do not add hidden text, AI-only instructions, unavailable 1:1 promises, or claims that a workflow will guarantee a business result.

## Minimum launch workload for George

The course can launch **text-first**. Do not delay the member experience while recording every lesson as a polished video.

### Record before launch

- One short Welcome recording using the first lesson script.
- One simple screen walkthrough of the System Pack and build-log templates. Use a sanitized example with no client or member details.

### Video cadence after launch

- Record the five mapped folder-anchor videos in `Video Scripts/` as their corresponding course folders are released. Embed each anchor on its mapped first lesson.
- There is **no requirement to record one video per lesson**. The text lessons and templates are complete member resources; additional lesson videos are optional.
- A public video from the single George B. Johnson YouTube channel may be reused only when it exactly fulfills its mapped folder-anchor video. A merely relevant public biweekly video does not replace one of the five planned anchor scripts.
- Record a course-only explanation beyond those anchors only when member questions show that the text, example, or template is not enough.
- Prefer one useful monthly teardown or recorded Q&A over a growing passive video library.
- Show human judgment in every workflow example: state what AI may assist and what the builder still reviews.

### Upload and configure

- Paste each opening paragraph directly below its page’s H1 title; the verified page editor has no separate lesson-description field.
- Publish the public lesson copy as a complete text lesson; attach a recording when available.
- Make all five template resources copyable and link them where requested.
- Add the Week 1 submission requirement and the three pinned posts before inviting people into the sprint.
- Add a community post for each lesson’s prompt if Skool discussions are not enabled below the lesson.

### Keep ready for the first member cycle

- A public or member-visible example build log with one decision, one imperfect output, and one next test.
- A defined critique window and a clear limit: feedback is artifact-based and scheduled, not unlimited private access.
- A short list of real member questions and failures. These should guide the next lessons rather than prebuilding a large passive library.

## Completion standard for this package

A member who completes all eighteen pages should finish with a usable System Pack containing: a chosen domain and repeated problem, one defined user and output specification, a narrow finish line, a build log, explicit decision rules, a minimum SOP, documented inputs and constraints, named edge cases, a quality rubric, a selected build path, a prompt stack, examples and constraints, a repeatable runbook with human review, a simple home for the system, manual test evidence, useful feedback, documented revisions, known limitations, and a next-improvement decision.

That completes the core four-week sprint. Build future lessons from observed member questions and failures rather than expanding the classroom speculatively.
