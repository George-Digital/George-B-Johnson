# Client Knowledge Portal Test Checklist

Use this list to prove that the portal works. If a line is not clear, ask Pi to explain it before you mark the test complete.

Use fake files or files you have clear permission to use. Do not show passwords, private links, client names, or file contents in your proof.

## Upload and save

- [ ] A good file uploads.
- [ ] The real file is saved in a private place.
- [ ] The database record points to the same safe file location.
- [ ] The new record starts as `uploaded`.
- [ ] The title, category, source, file name, file type, size, and date are correct.
- [ ] A blocked file type shows a useful error.
- [ ] A file that is too large shows a useful error.
- [ ] A blocked file makes no saved file and no database record.
- [ ] If one save step fails, the page shows the problem and does not hide half-finished work.

## Person check

- [ ] A normal uploader cannot approve a file.
- [ ] A reviewer can mark a file as `under_review`.
- [ ] A reviewer can approve a file and add a note.
- [ ] A reviewer can reject a file and add a note.
- [ ] The system tracks who checked the file and when.
- [ ] A replacement makes a new record.
- [ ] The old record becomes `archived` instead of being deleted.

## Files the AI can use

- [ ] A file with `uploaded` status is blocked.
- [ ] A file with `under_review` status is blocked.
- [ ] A rejected file is blocked.
- [ ] An archived file is blocked.
- [ ] An approved file is included.
- [ ] The AI can see the approved file’s ID, source, category, and review date.
- [ ] The real file stays private and opens through a safe, short-lived link.
- [ ] The AI does not get every file in the private file area.

## Read the page like a client

- [ ] The page says which file types and sizes are allowed.
- [ ] The form makes required information clear.
- [ ] Success and error messages explain what happened.
- [ ] The page does not make upload look like approval.
- [ ] A reviewer can see the source and status without opening every file.
- [ ] The page does not show build notes, Pi prompts, or private work.

## Check the project

- [ ] The normal project tests pass.
- [ ] The app builds without an error.
- [ ] You read the changed files.
- [ ] No password, key, or private client data appears in the code, logs, or screenshots.
- [ ] You tested login and user rights with a normal uploader and a reviewer.
- [ ] You wrote down what must be fixed before a real client uses the portal.

## Test notes

- **Where I tested:**
- **Fake files I used:**
- **Tests that passed:**
- **Tests that failed:**
- **What I changed:**
- **What blocks real client use:**
- **My next test:**
