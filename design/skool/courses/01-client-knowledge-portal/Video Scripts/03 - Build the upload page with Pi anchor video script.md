# Build the Upload Page with Pi

**Put this video on:** `Build the Portal/03 - Build the upload page with Pi.md`
**Target time:** About 5 minutes
**Goal:** Build one file upload from start to finish.

## Show on screen

1. A clean fake project in VS Code.
2. Pi reading the project and making a short plan.
3. One good file upload.
4. The matching private file and database record.
5. One blocked file upload.

## Script

[ON SCREEN: Open a clean project in VS Code.]

Now we are ready to build the upload page.

I am using VS Code. It lets me see the project files, code, and changes in one window.

I will start Pi from the main project folder.

[ON SCREEN: Start Pi.]

Pi is my AI helper for this project. It can read files, change files, and run checks.

But I do not start by saying, “Build the whole app.”

First, I ask Pi to read the project.

I want Pi to find the tools that are already here. Does the app already have a database helper? Does it already have login code? How does it make forms? Which checks does it run?

This keeps Pi from adding a second way to do the same job.

[ON SCREEN: Give Pi the first prompt from the Pi Build Session Guide.]

Next, I give Pi the build brief and ask for a short plan.

Then I stop and read the plan.

If the plan adds a whole new set of app tools or a second database tool, I ask why. I want the smallest change that fits this project.

[ON SCREEN: Show the approved plan.]

Our first version needs a file box, title, category, source, optional note, and clear messages.

There is no project menu. This portal is for one project.

Now we build one full path.

[ON SCREEN: Upload a fake training guide.]

I pick a fake file and upload it.

The page tells me the upload worked.

Now I check the private file area. The file is there.

Then I check the database. The matching record is there. Its status is uploaded.

I do not stop just because the page looks right. I check where the data really went.

[ON SCREEN: Try a blocked file.]

Next, I try a bad file. It may be too large or the wrong type.

The system should block it and show a clear message.

It should not leave half of the work behind. We do not want a file with no record. We do not want a record with no file.

The system should also make its own safe name and save location. It can still show the real file name to the client, but it should not use that name to decide where the file goes.

Some services use special passwords called secret keys. These keys must stay in the protected part of the app, called the server. They must never appear in the web page code.

After the test, I read the changed files. I run the project checks. I look at the proof instead of trusting Pi’s summary.

That is the way I want you to use Pi in Builders Lab.

Let Pi help with the build. Keep the plan small. Check the real result yourself.

## Member task

Build one full upload path. Test one good fake file and one blocked file. Check private storage, the database record, and the changed code.

## Recording check

- [ ] Start Pi from the main project folder.
- [ ] Show Pi reading and planning before it edits.
- [ ] Use one good fake file and one bad fake file.
- [ ] Check the real file and database row on screen.
- [ ] Do not show passwords, keys, private links, or real client data.
