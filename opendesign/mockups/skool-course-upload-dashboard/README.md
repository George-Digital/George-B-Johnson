# Builders Lab course upload desk

A local, private copy-and-track workspace for assembling Builders Lab course packages in Skool.

Course 1 has been rebuilt as **Client Knowledge Portal**. It is not marked live because the replacement has not been independently verified in Skool. Courses 2–5 remain visible as local legacy drafts but are on hold for curriculum reconciliation.

## Open the dashboard

From the GeorgeBJohnson project:

```bash
./opendesign/mockups/skool-course-upload-dashboard/start-dashboard.sh
```

Then open:

`http://localhost:8289/opendesign/mockups/skool-course-upload-dashboard/`

## Workflow

1. Open Skool from the dashboard header.
2. Start with Client Knowledge Portal only.
3. Copy the course name and description, then create its documented folder.
4. Use **Copy rendered lesson** and paste into Skool’s rich-text editor.
5. Confirm headings, bold text, lists, and links survived the paste.
6. Keep every new item in Draft until the complete member path has been checked.
7. Copy or attach each resource where the course README directs.
8. Mark an item uploaded in the dashboard only after checking the saved Skool draft.
9. Do not upload Courses 2–5 until their sequence has been approved.

Progress is stored in the browser’s local storage. Video scripts are private recording guides and are intentionally excluded from the upload queue.

## Refresh after course edits

Run from the project root:

```bash
node opendesign/mockups/skool-course-upload-dashboard/build-course-data.mjs
```

The generator reads the numbered course packages and rebuilds `course-data.js`. It fails when a member-facing lesson or Markdown resource contains a table because the verified Skool rich-text flow does not support table pasting reliably.
