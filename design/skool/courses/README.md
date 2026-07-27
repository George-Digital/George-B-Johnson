# Builders Lab Classroom — Course Catalogue

## Current direction

Course 1 has been rebuilt around George’s actual operating philosophy: track source data, preserve provenance, separate private files from structured records, route only approved context, and keep human review visible. George demonstrates the build in VS Code with Pi.

The former four-week AI Systems Builder Sprint is archived at:

`design/skool/archive/AI Systems Builder Sprint — Skool Upload Package v1/`

Courses 2–5 remain complete local drafts, but they predate the new stack-specific direction. Do not upload or market them until their sequence and overlap have been reconciled. A detailed VS Code/Pi setup course and an Open Brain course are planned as separate builds; they are not currently represented as finished course packages.

## Build status

| Order | Course | Local folder | Lesson pages | Resources | Anchor scripts | Status |
|---|---|---|---:|---:|---:|---|
| 1 | Client Knowledge Portal | `01-client-knowledge-portal/` | 4 | 4 | 4 | Rebuilt locally; requires Skool migration and verification |
| 2 | Context & Knowledge Systems for AI Workflows | `02-context-and-knowledge-systems-for-ai-workflows/` | 13 | 5 | 4 | Legacy draft; hold for reconciliation |
| 3 | AI System Evaluation, Reliability & Governance | `03-ai-system-evaluation-reliability-and-governance/` | 15 | 7 | 4 | Legacy draft; hold for reconciliation |
| 4 | Automation & Integrations for AI Operators | `04-automation-and-integrations-for-ai-operators/` | 19 | 6 | 5 | Legacy draft; hold for reconciliation |
| 5 | Adoption & Continuous Improvement for AI Systems | `05-adoption-and-continuous-improvement-for-ai-systems/` | 15 | 6 | 4 | Legacy draft; hold for reconciliation |
| **Total** |  |  | **66** | **28** | **21** |  |

## Course 1 outcome

A member builds a web portal for one configured project where an authorized client can upload knowledge documents. Original files remain private, metadata and status are stored in a database, a human controls approval, and only approved documents enter the agent handoff.

The course deliberately excludes chat, embeddings, autonomous ingestion, and Open Brain. Its one inspectable artifact is the working portal plus acceptance evidence.

## Physical structure

```text
courses/
├── README.md
├── VIDEO-PRODUCTION-INDEX.md
├── 01-client-knowledge-portal/
├── 02-context-and-knowledge-systems-for-ai-workflows/
├── 03-ai-system-evaluation-reliability-and-governance/
├── 04-automation-and-integrations-for-ai-operators/
└── 05-adoption-and-continuous-improvement-for-ai-systems/
```

Each numbered course directory contains a course README, member lesson pages, resources, and local-only video scripts. Course art and recording scripts are production assets, not Skool curriculum folders.

## Skool upload workflow

1. Open the course README and use its current course name and description.
2. Create the intended Skool folders and pages in the documented order.
3. Copy the rendered lesson content into Skool’s rich-text editor.
4. Confirm headings, bold text, bullets, links, and resources survived the paste.
5. Keep the content in Draft until the full member path is checked.
6. Upload the current course art through the course image field.
7. Record and embed only the scripts mapped in the README.
8. Perform a buyer read-through and verify that every action and label makes sense without access to internal files.
9. Do not describe a local package as live until the Skool version has been checked directly.

## Recommended release order

Release **Client Knowledge Portal** first and observe where members stall. Do not release the existing Courses 2–5 automatically. Use evidence from the first member builds to decide the next sequence.

Likely separate follow-on courses are:

- **Set Up Your Builder Workspace** — VS Code, Pi, project folders, Markdown, Git, credentials, and a verified first session.
- **ICM Workspaces and Context Routing** — stage contracts, reference versus working context, outputs, and human review gates.
- **Build a Second Brain with Open Brain** — capture, database and retrieval architecture, privacy, and integration with the project workspace.

These are planning directions, not claims that the courses are already available.
