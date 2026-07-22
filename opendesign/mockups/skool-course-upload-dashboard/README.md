# Builders Lab course upload desk

A local, private copy-and-track workspace for manually assembling the five Builders Lab courses in Skool.

## Open the dashboard

From the GeorgeBJohnson project:

```bash
./opendesign/mockups/skool-course-upload-dashboard/start-dashboard.sh
```

Then open:

`http://localhost:8289/opendesign/mockups/skool-course-upload-dashboard/`

## Workflow

1. Open Skool from the dashboard header.
2. Work through each course in order.
3. Copy the course name and description, then create its folders.
4. For each lesson, use **Copy rendered lesson** and paste into Skool's rich-text editor.
5. Confirm headings, bold text, lists, and links survived the paste. Member-facing tables have been converted into labeled heading-and-list blocks because Skool rich text does not support tables.
6. Keep the Skool item in Draft, save it, and select **Mark uploaded** in the dashboard.
7. Copy or attach each resource where the course README directs.

The first course shell, first folder, and first three lesson pages are marked **Exists — verify** so they are not duplicated. Progress is stored in the browser's local storage.

The 22 files under each course's `Video Scripts/` directory are private recording guides and are intentionally excluded.

## Refresh after course edits

Run from the project root:

```bash
node opendesign/mockups/skool-course-upload-dashboard/build-course-data.mjs
```

The generator reads the course Markdown packages and rebuilds `course-data.js`. It currently validates to 5 courses, 22 folders, 80 lessons, and 29 resources. The build fails if a member-facing lesson or resource contains a Markdown table, preventing unsupported table formatting from entering the upload queue.
