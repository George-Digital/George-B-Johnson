# Keep Each File Safe and Tracked

**Put this video on:** `Build the Portal/02 - Keep each file safe and tracked.md`
**Target time:** About 4 minutes
**Goal:** Show the difference between the real file and its database record.

## Show on screen

1. One fake file in private storage.
2. Its matching database record.
3. The five status labels.
4. One approved file and one rejected file.

## Script

[ON SCREEN: Put a fake file next to its database record.]

When a client uploads a file, our system saves two things.

The first thing is the real file. It goes into private storage. Think of this as a locked cabinet.

The second thing is a database record. Think of this as the label on the drawer.

The label helps us answer simple questions.

What is the file called? Who sent it? When did it arrive? Has someone checked it? Can the AI use it?

[ON SCREEN: Show a short database record.]

A database is an organized list. Each row is one file record. Each box in the row is called a field.

You will see field names such as title, source name, status, and upload date.

You do not need to memorize every field. Use the schema file that comes with this course. A schema is just the plan for what the database should track.

[ON SCREEN: Show the five status labels.]

We use five status labels.

Uploaded means the file arrived.

Under review means a person is checking it.

Approved means the AI may use it.

Rejected means the AI may not use it.

Archived means the file is old and should not be used.

Every new file starts as uploaded. It never starts as approved.

Now we need one more rule.

The person who uploads a file should not get approval power by accident.

A client may be allowed to upload. A manager may be allowed to approve. The system needs to know the difference.

Hiding the approve button is not enough. The protected part of the app is called the server. It must also block people who do not have approval rights.

[ON SCREEN: Show one approved record and one rejected record.]

In this fake project, the finished training guide is approved. The unfinished draft is rejected.

When we ask for files the AI may use, the system gives us the finished guide only.

Now imagine the client uploads a new guide.

Do not erase the old record. Make a new record. Mark the old one as archived. The new guide must be checked before the AI can use it.

This gives us a simple history. We can see which file was used and when it changed.

Your task is to make the database table and private file area in a test project. Add two fake records with different status labels.

Keep all keys, passwords, and private links off the screen and out of anything you share.

## Member task

Create the database table and private storage area. Add one approved fake record and one rejected fake record.

## Recording check

- [ ] Use the locked-cabinet and drawer-label example.
- [ ] Define database, field, and schema in plain words.
- [ ] Read each status label slowly.
- [ ] Explain that upload and approval are different powers.
- [ ] Show fake data only.
