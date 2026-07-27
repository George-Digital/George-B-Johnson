# Knowledge Document Schema

A schema is the plan for what a database should track. This page includes SQL, which is code used to create a database table. Give this page to Pi. Ask Pi to explain the plan before it runs or changes any database code.

Use this as a guide. Do not skip the project’s normal safety and login rules.

## File record

The protected part of the app is called the server. It checks the file and makes the values below.

- **id:** a unique ID for this record. The code uses a UUID, which is one kind of unique ID.
- **title:** the name a person sees
- **original_filename:** the file name the uploader sees
- **storage_path:** the safe place where the private file was saved
- **mime_type:** a code that tells the file type
- **size_bytes:** the file size
- **category:** the kind of file
- **source_name:** the person, team, or place that supplied the file
- **source_url:** an optional link to the source
- **notes:** an optional note from the uploader
- **status:** `uploaded`, `under_review`, `approved`, `rejected`, or `archived`
- **uploaded_at:** the date and time the file arrived
- **uploaded_by:** the signed-in user who sent the file
- **reviewed_at:** the date and time the file was checked
- **reviewed_by:** the reviewer who checked the file
- **review_notes:** the reason for approval, rejection, or archive
- **replaces_document_id:** an optional link to the older record

One deployment represents one project. Do not add a project selector to the upload form.

## Database code

The code below uses Postgres, which is one type of database. Give this code to Pi. Do not run it until Pi explains how it fits your project.

```sql
create table knowledge_documents (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  original_filename text not null,
  storage_path text not null unique,
  mime_type text not null,
  size_bytes bigint not null check (size_bytes > 0),
  category text not null,
  source_name text not null,
  source_url text,
  notes text,
  status text not null default 'uploaded'
    check (status in ('uploaded', 'under_review', 'approved', 'rejected', 'archived')),
  uploaded_at timestamptz not null default now(),
  uploaded_by uuid,
  reviewed_at timestamptz,
  reviewed_by uuid,
  review_notes text,
  replaces_document_id uuid references knowledge_documents(id),
  constraint review_state_is_coherent check (
    (status in ('uploaded', 'under_review') and reviewed_at is null)
    or
    (status in ('approved', 'rejected', 'archived') and reviewed_at is not null)
  )
);

create index knowledge_documents_status_uploaded_at_idx
  on knowledge_documents (status, uploaded_at desc);

create index knowledge_documents_replaces_idx
  on knowledge_documents (replaces_document_id);
```

Ask Pi to match the IDs, record links, login system, and database change tools already used by your project. Review the change before it runs.

## Files the AI can use

This database search asks for approved records only:

```sql
select
  id,
  title,
  storage_path,
  mime_type,
  category,
  source_name,
  source_url,
  reviewed_at
from knowledge_documents
where status = 'approved'
order by reviewed_at desc;
```

This search does not make the private file safe by itself. The server must check the signed-in user and give a safe, short-lived file link.

## User rules to build

- A signed-in uploader can add a file and its database record.
- A normal uploader cannot approve a file.
- A reviewer can change status and add review notes.
- The web browser never gets a password that can open the whole database or file area.
- Private file links work for a short time only.
- Test the database and file-area safety rules with a normal uploader and a reviewer before real use.

Do not turn off the safety rules just to finish the course. Ask Pi to use the project’s real login and user-right system.
