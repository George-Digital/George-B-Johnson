# Builders Lab Course and Retention Plan

## Current decision

Builders Lab begins with one short, concrete build that reflects how George actually works rather than a broad four-week system-design sprint.

**Course 1: Client Knowledge Portal**

A member uses VS Code and Pi to build a web portal for one configured project. An authorized client can upload source documents. Original files remain private, database records preserve provenance and status, a human controls approval, and only approved documents enter the AI agent’s handoff.

The former AI Systems Builder Sprint was too broad for the first member experience and was difficult to follow after the classroom changed. Its local package is archived at:

`design/skool/archive/AI Systems Builder Sprint — Skool Upload Package v1/`

## Member baseline

This is not a generic AI-from-zero program. Members should already be able to use an AI assistant and review its output.

George’s demonstrations use:

- VS Code as the IDE and visible project workspace;
- Pi as the minimal terminal coding harness;
- project files and instructions as durable context;
- a database for structured records and state;
- private object storage for source documents; and
- ICM-inspired boundaries for explicit inputs, outputs, context scope, and human review.

Members do not need to understand every part before joining. A separate setup course should teach installation and configuration. Course 1 explains enough of the stack for a member to understand what George is doing and why.

## Course 1 — Client Knowledge Portal

- **Status:** Rebuilt locally; not verified live in Skool
- **Member effort:** One focused build sequence; validate the actual time through a complete reference build and first member cycle
- **Classroom size:** Four lessons, four resources, four short anchor videos
- **Outcome:** Build and verify one single-project document upload and approval path for AI-agent knowledge.

### Lesson 1 — See how a file reaches the AI

Members map:

- authorized uploader;
- private file storage;
- structured database metadata;
- human reviewer;
- approved-only handoff; and
- the agent workspace that receives scoped context.

They learn the roles of VS Code, Pi, the database, object storage, project files, and ICM-inspired review boundaries without turning the lesson into installation training.

### Lesson 2 — Keep each file safe and tracked

Members create:

- a document metadata table;
- a small status model;
- provenance and replacement fields;
- private storage; and
- an explicit `approved` filter for the controlled handoff.

They distinguish authentication from authorization and keep uploader and reviewer permissions separate.

### Lesson 3 — Build the upload page with Pi

Members use Pi inside the real repository to:

- inspect the existing stack;
- approve a small implementation plan;
- build one upload vertical slice;
- validate type and size on the server;
- store the original privately;
- create the matching metadata record; and
- review the diff and existing project checks.

There is no project selector. One deployment represents one project.

### Lesson 4 — Test what the AI is allowed to use

Members prove that:

- new uploads begin unapproved;
- only authorized reviewers can approve;
- rejected and archived documents stay excluded;
- approved documents carry provenance into the handoff;
- replacement preserves history; and
- failures do not silently leave unexplained objects or records.

They complete a buyer read-through and record production blockers honestly.

## Course 1 completion standard

A completing member has:

- a working development or staging web UI;
- one supported synthetic upload;
- a private storage object;
- a matching structured record;
- visible review status;
- verified separate uploader and reviewer authorization, including rejection of an unauthorized approval attempt;
- an approved-only agent handoff;
- one included approved document and one excluded unapproved document; and
- a completed acceptance checklist with evidence.

Chat, embeddings, automatic classification, autonomous ingestion, and Open Brain are intentionally out of scope.

## Planned separate courses

These are approved directions, not finished or live course claims.

### Set Up Your Builder Workspace

A dedicated setup course should cover:

- installing and using VS Code;
- opening the correct project folder;
- basic terminal and file navigation;
- installing, authenticating, and safely running Pi;
- project trust and context files;
- Markdown and repository structure;
- Git status, diffs, and recovery;
- environment variables and credential hygiene; and
- one verified read-plan-edit-check session.

This course exists so tool setup does not overwhelm the first build.

### ICM Workspaces and Context Routing

A dedicated ICM course should cover:

- where filesystem orchestration fits and where it does not;
- one stage, one job;
- global routing, workspace routing, and stage contracts;
- reference material versus working artifacts;
- explicit inputs and outputs;
- human review gates;
- observable handoffs; and
- improving source instructions from repeated output corrections.

Present ICM’s early practitioner evidence as preliminary rather than controlled proof.

### Build a Second Brain with Open Brain

Open Brain should be its own implementation course after the member understands structured records, source provenance, permissions, and context routing.

Before building the course, confirm the exact Open Brain repository and deployment path, database and retrieval architecture, account and API costs, privacy expectations, backup and deletion behavior, and how Open Brain connects to Pi and the project workspace.

## Existing Courses 2–5

The following complete local packages predate the new stack-specific direction:

1. Context & Knowledge Systems for AI Workflows
2. AI System Evaluation, Reliability & Governance
3. Automation & Integrations for AI Operators
4. Adoption & Continuous Improvement for AI Systems

Keep them local and unreleased until they are reconciled against Course 1, the setup course, the ICM course, and the Open Brain course. Do not record or upload them automatically merely because the files exist.

## Public founder introduction

Use the current public founder video:

`design/skool/Video Scripts/Builders Lab introduction.md`

The 20–30 second script introduces Builders Lab as a hands-on working lab, states that George is active daily and shares current projects, and directs viewers to the current membership details. Keep any longer member orientation or stack walkthrough separate from this public script.

## Retention model

Courses establish a shared operating model. Retention comes from helping members finish and improve real artifacts.

### Weekly participation loop

- **Monday:** state the smallest build target.
- **Wednesday:** share one artifact or failed check for critique.
- **Friday:** report what changed, what the evidence showed, and what will be tested next.

### Recurring support

- one scheduled build or triage clinic each month;
- one artifact teardown or review each month;
- bounded submission and review capacity;
- community Q&A for setup blockers; and
- revision of course material from repeated member confusion.

### First-course signals

Track:

- members who begin the portal;
- members who complete one upload;
- members who verify storage and database records;
- members who implement or identify the approval blocker;
- members who prove approved-only handoff;
- failed tests shared with useful evidence;
- setup problems that belong in the separate setup course; and
- cancellation or confusion reasons.

## Release rules

1. Migrate Course 1 in Draft and verify the full Skool path before unpublishing the former Sprint.
2. Publish the four lessons and resources as one short course, not a four-week drip.
3. Record the Builders Lab introduction and the four Course 1 anchors before broad promotion.
4. Use only synthetic or explicitly authorized material in lessons, recordings, screenshots, and member examples.
5. Do not invite real client uploads until authentication, authorization, database policies, storage policies, file handling, privacy, deletion, backups, and deployment are independently verified.
6. Observe at least one member cycle before finalizing the next course.
7. Build the setup and Open Brain courses separately rather than expanding Course 1.
