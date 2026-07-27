# Keep each file safe and tracked

**The file holds the information. The database record tells us what happened to that file.**

When a client uploads a file, the system saves two things.

First, it saves the real file in private storage. This is the locked cabinet.

Second, it makes a database record. This is the label that helps us track the file.

The record should answer these questions:

- What is the file called?
- Where is it saved?
- Who sent it?
- When was it added?
- What kind of file is it?
- Has someone checked it?
- Was it approved or rejected?
- Is there a newer version?

You will see field names such as `title`, `source_name`, `status`, and `uploaded_at`. A field is just one box in the database record.

We will use five status labels:

- `uploaded` — the file arrived;
- `under_review` — someone is checking it;
- `approved` — the AI may use it;
- `rejected` — the AI may not use it; and
- `archived` — the file is old and should not be used.

A new file always starts as `uploaded`. It does not start as `approved`.

The person who uploads a file should not get approval power by accident. The portal needs a clear rule for who may upload and who may approve.

If a new file replaces an old one, keep both records. Mark the old one as archived. This helps you see which version was used at any point in time.

## Simple example

The fake plumbing company has two training guides. The finished guide is approved. An unfinished draft is rejected. The AI gets the finished guide only.

Later, the company uploads a new guide. The old guide is archived. The new guide must still be checked before the AI can use it.

## What to do

- Use the Knowledge Document Schema. A schema is the plan for what the database should track.
- Create a private place to save the files.
- Make sure new records start as `uploaded`.
- Decide who can upload and who can approve.
- Make a rule that gives the AI approved files only.
- Keep passwords and special app passwords, called secret keys, out of the web page code.

## What to finish

Create the database table and private file area in a test project. Add two fake file records with different status labels.

Do not share passwords, keys, or private file links.

## Share with the group

Which database field will help you spot an old or unsafe file?
