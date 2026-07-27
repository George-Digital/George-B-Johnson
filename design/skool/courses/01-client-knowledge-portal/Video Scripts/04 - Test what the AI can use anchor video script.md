# Test What the AI Can Use

**Put this video on:** `Build the Portal/04 - Test what the AI is allowed to use.md`
**Target time:** About 4 minutes
**Goal:** Prove that the AI gets approved files only.

## Show on screen

1. Three fake files with different status labels.
2. The list of files the AI may use.
3. A reviewer approving a file.
4. A normal uploader being blocked from approval.
5. The Acceptance Test Checklist.

## Script

[ON SCREEN: Show three fake file records.]

Our upload page works. Now we need to prove that the safety rule works too.

I have three fake files.

The first file has uploaded status. No one has checked it yet.

The second file is approved.

The third file is rejected.

[ON SCREEN: Show the list made for the AI.]

When I ask for files the AI may use, I should see one file only.

The approved file appears.

The uploaded file does not appear.

The rejected file does not appear.

This test is more important than asking the AI a question and deciding that the answer sounds good.

We are testing the rule itself.

[ON SCREEN: Sign in as a reviewer and approve the new file.]

Now I sign in as a reviewer. I check the new file and approve it.

When I check the AI list again, the new file appears.

[ON SCREEN: Try the same action as a normal uploader.]

Next, I sign in as a normal uploader and try to approve a file.

The system says no.

The protected part of the app is called the server. The server must block this action. It is not enough to hide the button on the page.

[ON SCREEN: Replace one file.]

Now I test a new version of a file.

The system makes a new record. It marks the old record as archived. The new file starts as uploaded and must be checked again.

This stops the AI from using two different versions at the same time.

[ON SCREEN: Open the Acceptance Test Checklist.]

The checklist helps us test the full path.

Can we upload a good file? Can we block a bad file? Does private storage hold the real file? Does the database hold the matching record? Can only the reviewer approve? Does the AI list show approved files only?

Write down what passes and what fails.

A failed test is useful. It shows you where the system needs work.

Finally, read the page like a client.

Can the client tell which files are allowed? Does the page explain what happens after upload? Is it clear that a person must check the file?

A tool can work and still be hard to understand. We need to check both.

Your final proof is simple. Show one approved file in the AI list. Show one unapproved file that is blocked. Share the test checklist and a safe screenshot.

Now you have a small system you can explain. A client adds a file. The file stays private. A person checks it. The AI gets approved files only.

## Member task

Run the full test checklist. Share safe proof of one approved file getting through and one unapproved file being blocked.

## Recording check

- [ ] Use fake files and fake users only.
- [ ] Show the AI list before and after approval.
- [ ] Show a normal uploader being blocked.
- [ ] Show the old version becoming archived.
- [ ] Read the page once as a client.
- [ ] Do not call the test app ready for real clients.
