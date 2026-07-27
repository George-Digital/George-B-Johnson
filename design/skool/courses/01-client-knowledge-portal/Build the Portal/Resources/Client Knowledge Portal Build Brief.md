# Client Knowledge Portal Build Brief

This page is a set of build rules for Pi. Add it to your project. Ask Pi to explain any rule that is not clear before it starts building.

## What to build

Build a simple website for one AI project. A signed-in client can upload files. The real files stay in a private place. The database keeps a record for each file. A person must approve a file before the AI can use it.

## Who uses it

### Uploader

- Can upload an allowed file.
- Adds a title, category, source name, optional source link, and optional note.
- Sees a clear success or error message.
- Cannot approve a file unless they also have reviewer rights.

### Reviewer

- Can see the file record and open the private file through a safe link.
- Can mark a file as `under_review`, `approved`, `rejected`, or `archived`.
- Can add a note about the choice.
- Can replace an old file without deleting its history.

### AI

- Gets approved files only.
- Gets the file ID and source with each file.
- Cannot search every file in the private file area.

## What the page needs

- No project menu. This website is for one project.
- A file upload box.
- A list of allowed file types and the largest allowed size.
- Title.
- Category.
- Source name.
- Optional source link.
- Optional note.
- A message while the file uploads.
- Clear success and error messages.
- A list that shows the file name, category, source, upload date, and status.
- Approve and reject tools that only a reviewer can use.

## What the system must do

- Save the real file in private file storage. Think of this as a locked online cabinet.
- Make one database record for each uploaded version.
- Start every new record with `uploaded` status.
- Make its own safe name and save location for the file.
- Track who uploaded and reviewed the file when the login system allows it.
- Make a new record when a file is replaced. Mark the old record as archived.
- Give the AI records with `approved` status only.
- Show or clean up half-finished work if the file saves but the database record fails, or the other way around.

## Safety rules

The protected part of the app is called the server. Use it to check the file and protect secret information.

- Use fake files or files you have clear permission to use.
- Check file type and size on the server.
- Make a safe save name. Do not trust the uploaded file name as a location.
- Keep special app passwords, called secret keys, out of the web page code.
- Test the login and permission rules before a real client uses the portal.
- Keep the file area private.
- Do not treat upload as approval.
- Plan for bad-file scanning, old-file removal, backups, and a clear privacy notice before real use.

## Do not add yet

- A project menu.
- A chat page.
- Smart search across the files.
- An AI summary made at upload time.
- Automatic approval.
- Open Brain.
- AI choices that should belong to a person.

## How to know it works

- A good fake file uploads.
- The real file is private.
- A matching database record starts as `uploaded`.
- The AI cannot get an unapproved file.
- A reviewer can approve or reject a file.
- The AI can get an approved file and see where it came from.
- A rejected file stays blocked.
- A bad or too-large file fails cleanly.
- A replacement keeps the old history.
- A normal uploader cannot approve a file.
- The project checks pass.
