# Test what the AI is allowed to use

**The build is not done until you prove that the AI gets approved files only.**

A good-looking upload page is not enough. We must test the full path.

Use fake files for every test.

Start with three files:

- one new file with `uploaded` status;
- one file with `approved` status; and
- one file with `rejected` status.

Now check the list made for the AI. It should show the approved file only.

Next, sign in as a reviewer and approve the new file. Check the AI list again. The new file should now appear.

Then sign in as a normal uploader. Try to approve a file. The system must block that action. Hiding the approve button is not enough. The protected part of the app, called the server, must say no too.

Test a replacement file. The new file should make a new record. The old file should become archived. The new file must be checked before the AI can use it.

Also test a file that is too large or the wrong type. The system should show a clear error. It should not leave an extra file or an empty database record behind.

Finally, read the page like a client.

Can the client tell which files are allowed? Is it clear what happened after the upload? Does the page explain that the file still needs to be checked?

Can the reviewer see the source and status without opening every file?

## Simple example

The fake plumbing project has three files. The approved guide appears in the AI list. The rejected draft does not. The new file does not appear until a manager approves it.

A normal uploader tries to approve the file. The system blocks the action. This proves that the rule works in the protected part of the app, not just on the screen.

## What to do

- Run every item in the Acceptance Test Checklist.
- Check the database records.
- Check private storage.
- Check the list of files the AI may use.
- Test the uploader and reviewer as separate users.
- Save safe proof for each important test.
- Write down anything that still blocks real client use.

## What to finish

Share:

- the completed test checklist;
- a safe screenshot of the portal;
- proof that one approved file is included; and
- proof that one unapproved file is blocked.

## Share with the group

Which test failed first? What did you change to fix the real cause?
