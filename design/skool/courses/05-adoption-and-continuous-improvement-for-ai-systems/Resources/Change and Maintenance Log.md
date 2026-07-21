# Change and Maintenance Log

Use this log to connect the current system with the evidence, approvals, tests, and maintenance work behind it. Keep raw sensitive material, credentials, and restricted incident details in their authorized locations; use safe references here.

## Current operating record

- **System name:**
- **Current version or approved instruction reference:**
- **Operating owner:**
- **Current scope:**
- **Approved system home:**
- **Manual fallback:**
- **Next scheduled review or trigger:**

## Change log

| Date | Change category | What changed | Why it changed | Safe evidence reference | Affected users or workflow step | Approval required and received | Test or review required | Rollback, fallback, or pause action | User communication | Owner | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | routine / material / stop-level |  |  |  |  |  |  |  |  |  | proposed / tested / current / reverted |
|  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |

## Maintenance register

| Maintenance area | What to check | Accountable owner | Cadence or event trigger | Current source or evidence location | Result | Next action or escalation |
| --- | --- | --- | --- | --- | --- | --- |
| Current instructions and system home |  |  |  |  |  |  |
| Source or policy currency |  |  |  |  |  |  |
| Input form or data changes |  |  |  |  |  |  |
| Output quality and reviewer patterns |  |  |  |  |  |  |
| Privacy and access boundary |  |  |  |  |  |  |
| Tool, model, or connector dependency |  |  |  |  |  |  |
| Support and fallback patterns |  |  |  |  |  |  |
| Ownership and backup coverage |  |  |  |  |  |  |

## Material-change release record

- **Problem this change addresses:**
- **Affected scope and user roles:**
- **Prior approved version reference:**
- **Proposed current version reference:**
- **Source, policy, or dependency review needed:**
- **Privacy, access, or authorization review needed:**
- **Safe representative test cases:**
- **Quality checks and reviewer:**
- **Pass, revise, pause, or rollback condition:**
- **Resumption authority if a path was paused:**
- **User-facing communication:**

## Applied prompt: classify a proposed change

**Use case:** You need a first pass on whether a proposed change is routine, material, or requires a pause and authorized escalation.

**Inputs:** Current scope; description of proposed change; safe evidence; affected sources, inputs, outputs, access, tools, and user groups; current review and pause rules.

**Paste-ready prompt:**

> Assess the proposed operating change against the supplied system scope and change rules. List the affected workflow steps, sources, user roles, privacy or access boundaries, and human-review responsibilities. Classify it as routine, material, or stop-level only if the evidence supports that classification. For the classification, state the approval, communication, safe test, and rollback or manual-fallback action required. Do not approve a change, invent authority, or minimize a source, privacy, safety, authorization, or consequential-boundary concern. Mark uncertain items as “Owner must confirm.”

**Expected output:** A change-review draft that identifies impact and required human decisions.

**Failure mode:** The analysis may not know local policy, hidden dependencies, or the real consequence of an output change.

**Human review:** The operating owner validates the inventory. Source, domain, privacy, access, technical, or authorized decision owners approve changes within their responsibility before release.
