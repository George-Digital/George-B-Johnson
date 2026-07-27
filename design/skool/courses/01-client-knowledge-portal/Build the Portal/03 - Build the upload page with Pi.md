# Build the upload page with Pi

**Ask Pi to learn the project first. Then build one small piece from start to finish.**

Open your project in VS Code. Start Pi from the main project folder.

Before Pi changes anything, ask it to read the project. It should find the tools, file layout, database code, login code, and tests you already use.

This matters because we do not want two database systems or two ways to save files. We want Pi to use what the project already has.

Give Pi the Client Knowledge Portal Build Brief. Then ask for a short plan.

Read the plan before you say yes.

Your first version needs only these parts:

- a file upload box;
- a title;
- a category;
- a source name;
- an optional source link;
- an optional note;
- a clear success message;
- a clear error message; and
- a list of uploaded files and their status.

Do not add a project menu. This portal is for one project.

Build one full path first:

1. Pick one fake file.
2. Upload it.
3. Save it in private storage.
4. Add its database record.
5. Show the `uploaded` status on the page.

Then test one bad file. The system should block a file that is too large or the wrong type. It should not leave half of the upload behind.

The real file name can be shown to the user, but the system should make its own safe name for saving the file.

Some services use special passwords called secret keys. These keys must stay in the protected part of the app, called the server. They must not appear in the web page code.

## Simple example

Pi reads an existing web app. It finds the current form style and database helper. It uses those tools instead of adding a whole new set of app tools.

You upload a fake training guide. The page says the upload worked. You check private storage and see the file. You check the database and see the matching record.

Then you try a blocked file. The page shows a useful error. No file and no database record are left behind.

## What to do

- Open the right project in VS Code.
- Run `git status` before you start. This command shows which project files have changed.
- Start Pi in the main project folder.
- Give Pi the build brief and the schema, which is the database plan.
- Ask Pi to inspect and plan before editing.
- Build one full upload path.
- Check the file and database record yourself.
- Test one good file and one bad file.
- Review the changed files and run the project checks.

## What to finish

Build a test page that uploads one fake file, saves it privately, makes the database record, and shows `uploaded` status.

## Share with the group

Share a safe screenshot. What choice did you check yourself instead of letting Pi decide on its own?
