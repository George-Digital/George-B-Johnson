# Builders Lab: Client Knowledge Portal — Skool Upload Package

## Course promise

Build a simple website where a client can upload files for one AI project. The file stays private. The database tracks what it is and if a person checked it. The AI can use the file only after it is approved.

This course also shows how George works. VS Code is the workbench. Pi is the AI helper. The database is the organized list. ICM gives us a simple way to split the job into small steps that a person can check.

## Paste-ready course setup

**Course name:**

```text
Client Knowledge Portal
```

**Course description:**

```text
Build a simple website where a client can upload files for one AI project. Save each file in a private place, keep a clear database record, and make sure a person checks it before the AI can use it. I will show the build in VS Code with Pi. One small project. No magic prompts or automatic approval.
```

## Member baseline

This is not an AI-from-zero course. Members should already be able to use an AI assistant and should have, or be willing to set up, a development workspace. George demonstrates the build in VS Code with Pi. A separate setup course should cover installing and configuring VS Code, Pi, a runtime, Git, and credentials in detail.

For this course, members need:

- VS Code or another IDE that can open a project folder;
- Pi or a comparable coding harness that can inspect and edit the project;
- a web-app repository or permission to create one;
- a database plus private object storage; and
- only synthetic or explicitly authorized documents for testing.

The reference implementation assumes a Postgres-compatible database and private object storage. Supabase is a practical default because it provides both, but members may adapt the build brief to an existing stack. Production client access also requires authentication, authorization, storage policies, secret management, and deployment review.

## What members build

One deployment represents one project. The uploader never chooses a project.

The finished minimum build can:

- accept an authorized document upload with title, category, source, and optional note;
- store the original file in private object storage;
- create a structured metadata record in the database;
- show upload and review status;
- let an authorized reviewer approve, reject, replace, or archive a document;
- expose only approved documents through the controlled agent handoff; and
- preserve enough provenance to identify where each document came from and when it changed.

The course does not add chat, embeddings, automatic summarization, autonomous ingestion, or Open Brain. Those belong in later courses after the capture and approval path works.

## Course structure

```text
01-client-knowledge-portal/
├── README.md
├── Build the Portal/
│   ├── 01 - See how a file reaches the AI.md
│   ├── 02 - Keep each file safe and tracked.md
│   ├── 03 - Build the upload page with Pi.md
│   ├── 04 - Test what the AI is allowed to use.md
│   └── Resources/
│       ├── Acceptance Test Checklist.md
│       ├── Client Knowledge Portal Build Brief.md
│       ├── Knowledge Document Schema.md
│       └── Pi Build Session Guide.md
├── Course Art/
│   ├── README.md
│   └── client-knowledge-portal-cover-1280x720.png
└── Video Scripts/
    ├── 01 - See how files move anchor video script.md
    ├── 02 - Keep files safe and tracked anchor video script.md
    ├── 03 - Build the upload page with Pi anchor video script.md
    └── 04 - Test what the AI can use anchor video script.md
```

Create one Skool folder named **Build the Portal**, then add the four numbered lessons in order. Attach or link the four resources from the matching lessons. `Video Scripts` and `Course Art` are local production folders; do not create them in the member curriculum.

## Resource map

- Lesson 1: **Client Knowledge Portal Build Brief**
- Lesson 2: **Knowledge Document Schema**
- Lesson 3: **Pi Build Session Guide**
- Lesson 4: **Acceptance Test Checklist**

## Video map

- `01 - See how files move anchor video script.md` → Lesson 1
- `02 - Keep files safe and tracked anchor video script.md` → Lesson 2
- `03 - Build the upload page with Pi anchor video script.md` → Lesson 3
- `04 - Test what the AI can use anchor video script.md` → Lesson 4

Keep each recording between approximately four and seven minutes. Show a synthetic project only. Never display real client documents, credentials, storage URLs, database keys, member activity, or production records.

## Safe migration from the current classroom

The existing AI Systems Builder Sprint content was the former Course 1. Preserve it until this replacement course is complete in Skool.

1. Create the new course or rename the existing draft shell only after confirming Skool preserves its contents.
2. Add the new four-lesson course in Draft.
3. Upload and verify every resource, link, heading, and video embed.
4. Test the member path using synthetic files.
5. Archive or unpublish the former Sprint only after the replacement is verified.
6. Do not describe this course as live until the Skool version has been checked directly.

The former local package is preserved at:

`design/skool/archive/AI Systems Builder Sprint — Skool Upload Package v1/`

## Completion standard

A member completes the course when a synthetic or authorized test user can upload a supported document, the original file lands in private storage, its metadata record is visible, a reviewer can change its status, unapproved material is excluded from the agent handoff, and the acceptance checks are recorded.

Passing a local or staging test does not prove that the portal is production-safe. Before a real client uses it, independently verify authentication, authorization, row-level and storage policies, file limits, malware handling, privacy terms, backups, deletion behavior, logging, and deployment configuration.
