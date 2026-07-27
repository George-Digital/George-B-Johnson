# See how a file reaches the AI

**Before an AI uses a client’s file, we need to know what it is, where it came from, and if a person approved it.**

In this course, you will build a small website called a Client Knowledge Portal.

The portal is for one project. A client can use it to upload helpful files. These might be guides, policies, notes, or research.

There is no project menu. The portal already knows which project it belongs to.

The file moves through five simple steps:

1. The client uploads a file.
2. The system saves the file in a private place.
3. The system adds a line to an organized list called a database.
4. A person checks the file.
5. The AI can use the file only after it is approved.

Think of the private file area as a locked cabinet. Think of the database as the label on the drawer. The label tells us the file name, its source, when it arrived, and if it was checked.

Here is how my tools fit into the build:

- **VS Code** is the workbench. I can see the project files, code, and changes.
- **Pi** is the AI helper. It can read the project, change files, and run checks.
- **The database** is the organized list of file records.
- **Private storage** is the locked place where the real files stay.
- **A person** decides if a file is safe and useful for the AI.

I also use an idea from ICM. ICM breaks a big job into small steps. Each step has one job. We can check the result before moving on.

For this portal, uploading and approving are two different steps. A client can add a file. That does not mean the AI should trust it.

## Simple example

A fake plumbing company uploads a training guide for its AI helper. The guide is marked as a test file. The portal saves it, but the AI cannot use it yet. A manager reads the guide and approves it. Now the file can be added to the AI’s trusted files.

## What to do

- Pick one fake or approved example project.
- Write down who can upload files.
- Write down who can approve files.
- Choose the file types you will allow.
- Draw the five steps from upload to AI use.
- Copy the Client Knowledge Portal Build Brief into your project.

## What to finish

Make a one-page map that shows:

- who uploads;
- where the file is saved;
- what the database tracks;
- who checks the file; and
- when the AI is allowed to use it.

## Share with the group

What kind of file will your portal accept, and who must check it before the AI can use it?
