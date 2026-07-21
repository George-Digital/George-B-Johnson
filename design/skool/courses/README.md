# Builders Lab Classroom — Complete Course Catalogue

## Build status

All five finite courses are built locally as Skool-ready upload packages. They are not considered live until their folders, pages, and resources are uploaded, reviewed in Draft, and published inside Builders Lab.

| Order | Course | Local folder | Lesson pages | Template resources | Anchor video scripts |
|---|---|---|---:|---:|---:|
| 1 | AI Systems Builder Sprint | `01-ai-systems-builder-sprint/` | 18 | 5 | 5 |
| 2 | Context & Knowledge Systems for AI Workflows | `02-context-and-knowledge-systems-for-ai-workflows/` | 13 | 5 | 4 |
| 3 | AI System Evaluation, Reliability & Governance | `03-ai-system-evaluation-reliability-and-governance/` | 15 | 7 | 4 |
| 4 | Automation & Integrations for AI Operators | `04-automation-and-integrations-for-ai-operators/` | 19 | 6 | 5 |
| 5 | Adoption & Continuous Improvement for AI Systems | `05-adoption-and-continuous-improvement-for-ai-systems/` | 15 | 6 | 4 |
| **Total** |  |  | **80** | **29** | **22** |

## Physical structure

```text
courses/
├── README.md
├── VIDEO-PRODUCTION-INDEX.md
├── 01-ai-systems-builder-sprint/
├── 02-context-and-knowledge-systems-for-ai-workflows/
├── 03-ai-system-evaluation-reliability-and-governance/
├── 04-automation-and-integrations-for-ai-operators/
└── 05-adoption-and-continuous-improvement-for-ai-systems/
```

Use `VIDEO-PRODUCTION-INDEX.md` as the master recording checklist for all 22 folder-anchor videos.

Each course directory contains:

- its own `README.md` with paste-ready course name and description, prerequisites, outcome, exact physical tree, upload workflow, resources, and completion standard
- physical folders named to match the intended Skool folders
- numbered Markdown lesson pages in upload order
- a `Resources/` directory containing copyable templates and prompts
- a local-only `Video Scripts/` directory with one folder-anchor recording script per course folder, including exact embed destination, screen demonstration, teleprompter copy, member action, and recording checklist

## Skool upload workflow

1. Open the course’s `README.md` and use its course name and description.
2. Create the physical course folders in Skool with **Add folder**, in the order shown in that README.
3. Create each numbered lesson with **Add page** inside the matching folder.
4. Open the local lesson in a rendered Markdown preview.
5. Copy the rendered content—not the raw Markdown—and paste it into Skool’s rich-text editor.
6. Confirm the page title is H1; the takeaway remains bold; and `Concrete example`, `Action checklist`, `Required deliverable`, and `Community prompt` are H2.
7. Keep pages in Draft until content, formatting, and relevant resources are checked; then Save.
8. Make each course’s templates and prompts available from the lesson named in its README, using only resource controls verified in the live Skool interface.
9. Record each folder-anchor video from its local-only script, using the named synthetic demonstration and screen cues, then embed the finished video on the exact first lesson mapped in the course README. Do not upload the production script as a member lesson or resource.

## Recommended release order

The files are complete, but member access should remain sequenced:

1. AI Systems Builder Sprint
2. Context & Knowledge Systems for AI Workflows
3. AI System Evaluation, Reliability & Governance
4. Automation & Integrations for AI Operators
5. Adoption & Continuous Improvement for AI Systems

This progression takes a member from defining one useful system through knowledge design, reliability, automation, adoption, and ongoing maintenance. It avoids requiring a specific AI provider, coding assistant, automation platform, or technical stack.

## Living resources outside the finite-course count

Keep these as maintained member resources rather than adding more course shells:

- Templates & Prompts Library
- System Blueprint & Implementation Archive
- Relevant AI Change Notes

The finite courses create progression. Retention should also come from scheduled help, implementation clinics, member teardowns, artifact-based critique, monthly build cycles, updated resources, and support improving systems used in real work.
