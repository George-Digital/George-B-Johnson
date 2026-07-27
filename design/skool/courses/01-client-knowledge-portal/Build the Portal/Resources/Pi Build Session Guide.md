# Pi Build Session Guide

This page gives you prompts to copy into Pi. A prompt is the message that tells Pi what to do.

Pi runs in the terminal. A terminal is a place where you type commands. Start Pi inside your main project folder so it can read the real code, instructions, and tests.

## Before you start Pi

- Open the right project in VS Code.
- Run `git status`. This command shows which files have changed.
- Add the build brief and database plan to the project.
- Prepare fake files for testing.
- Know which database and private file area the project uses.
- Keep passwords and secret keys in the project’s safe settings. Do not place them in a prompt or saved file.

## Prompt 1: read and plan

```text
Read the project instructions and inspect this project before changing anything.

I need the Client Knowledge Portal described in [path to build brief]. This website is for one project, so do not add a project menu.

Use the app tools, database code, login code, file-saving code, page parts, and tests that already exist. Do not add a second way to do the same job unless the current project cannot do it and you explain why.

First tell me:
1. which files and tools matter;
2. how login and user rights work now;
3. the smallest build plan;
4. any safety or database problem that blocks the build; and
5. which checks you will run.

Do not change files until I approve the plan.
```

## Prompt 2: build one full upload path

```text
Build the first full upload path only:
- one good fake file can be sent with a title, category, source name, optional source link, and optional note;
- the real file is saved in the private file area;
- one matching database record is made with uploaded status;
- the page shows a clear success or error message; and
- no secret key or special password is sent to the web browser.

If the file saves but the database step fails, or the other way around, show the problem and clean up the half-finished work when possible.

Use the tools already in this project. Run the normal project checks. Then show me the changed files and the proof. Stop before adding approve buttons or design polish.
```

## Prompt 3: add the person check

```text
Now add the smallest safe review step.

A normal uploader must not get approval rights. A reviewer can mark a file as under_review, approved, rejected, or archived and can add a review note.

The list made for the AI must include approved files only. It must also include the file ID and source.

Use the login and user-right rules already in the project. If the project cannot tell an uploader from a reviewer, stop and explain the missing rule. Do not use an unsafe shortcut.

Add or update tests that prove an approved file gets through and a normal uploader cannot approve a file.
```

## Questions to ask after Pi builds

- Did Pi use the tools already in the project?
- Does the server, which is the protected part of the app, check file type and size?
- Can a normal uploader approve a file?
- Can a secret key reach the web page code?
- Can a file save without a matching database record?
- Does the AI list ask for approved files only?
- Are rejected and archived files blocked?
- Did the normal project checks pass?
- Did you read the changed files yourself?

## Stop and ask for help when

- the app has no clear login or user-right rules;
- the file area cannot be kept private;
- the file type needs a safety check you have not built;
- you would need real client data to keep going;
- Pi wants to add a whole new set of app tools without a clear reason; or
- the only way to make the demo work is to make files public or turn off safety rules.
