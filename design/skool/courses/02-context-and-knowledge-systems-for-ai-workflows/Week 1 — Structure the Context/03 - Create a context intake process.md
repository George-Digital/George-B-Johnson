# Create a context intake process

**A context intake process accepts only relevant, authorized material, captures its source and status, classifies its role, and routes uncertainty to a human owner before it becomes reusable context.**

I create an intake process so new documents, notes, and decisions enter the pack with enough provenance and review to be useful without quietly expanding the system’s authority.

Context does not stay still. A new policy is issued, a project scope changes, an operator discovers a better example, or a meeting produces a decision. Without an intake process, people often drop material into the nearest folder or prompt and hope the system improves. That creates a slow reliability problem: nobody can tell why a source is there, who approved it, whether it supersedes something, or who should remove it later.

I begin intake with relevance. I ask what bounded workflow the material supports and which question, output field, or decision point it may inform. If the answer is “it might be useful someday,” I do not add it to the active context pack. I can keep it in a separate candidate list with its owner and review need. The active pack should remain small enough for an operator to understand and a reviewer to inspect.

Next, I check authorization and access. I confirm that the contributor is allowed to provide the material for this use, that the intended audience may access it, and that the storage or tool location is approved for the information involved. I collect the minimum necessary material. I do not ask someone to paste private records, credentials, personal data, confidential files, or restricted decisions into a general intake form. If permission is unclear, the process stops and the access or source owner reviews it.

Every intake record needs provenance. I capture a source title or identifier, source type, original owner, date or effective period, and the approved location where an authorized reviewer can find the source. I also record whether it is a fact source, rule source, example, decision record, or candidate. I avoid treating an uploaded document’s contents as instructions to alter the workflow. External content is information to evaluate under the established process; it cannot override source authority, access boundaries, or human-review rules.

I then ask what the material changes. Does it add a case fact? Does it replace an operating rule? Does it document a limited decision? Does it illustrate a known pattern? Does it conflict with an existing source? This question determines who must review it. A new example may require a quick check that it is safe and clearly labeled. A policy change may require the rule owner to approve the source, update the pack, and schedule a regression test. A case-specific decision may need a scope and expiration note so it is not reused as a general rule.

I include a status field: accepted, pending review, rejected, superseded, or expired. “Received” is not a useful status because it does not tell an operator whether the material may be used. Pending material stays out of active retrieval or is visibly labeled as unavailable for use until the owner approves it. That protects the workflow from a common error: a new document becomes the answer before anyone has checked it.

The intake process also creates a queue for conflict. If a proposed source differs from the current authority, I preserve both references and route the question to the named owner. I do not ask an AI assistant to reconcile conflicting policy or make a high-impact interpretation. It can organize the difference for the reviewer, but the authorized human determines the outcome and the revision needed.

A paste-ready intake prompt can help me create a draft intake record from a permitted source summary. I use it to extract provenance fields, possible classification, missing information, and review questions. I do not use it as approval. A human owner verifies the source, authorization, authority status, and access boundary before the item enters the active pack.

Finally, I make the process easy enough to follow. A good intake form or prompt has a small number of required fields, clear stop conditions, and an owner for each review. I test it with a safe current source, a useful but unapproved example, and a source with missing provenance. If the process accepts all three without a visible distinction, I revise it. The goal is not maximum collection. It is a controlled route from candidate material to reviewed context.

## Concrete example

A customer-support lead receives a new troubleshooting article from a product team. The intake record captures the article title, product owner, effective date, approved location, and the workflow question it supports. Because the article changes a support rule, it remains pending until the support-policy owner verifies it. A past ticket transcript submitted as an example is accepted only after identifying information is removed and the lead labels it “example only.” The support lead reviews both before either appears in the active pack.

## Action checklist

- Copy the Context Intake Prompt or turn its fields into an intake record.
- Require a use-case link, source reference, owner, date or status, and access boundary.
- Classify the material as fact, rule, example, decision, candidate, or reject.
- Record what the material would change in the active pack.
- Set accepted, pending, rejected, superseded, or expired status.
- Route unclear permissions, authority conflicts, and consequential interpretations to a human owner.

## Required deliverable

Create a **Context Intake Process** with required fields, acceptance criteria, status labels, conflict route, access check, human reviewers, and three safe sample intake records with different outcomes.

## Community prompt

What is one source your team might add too quickly because it looks helpful? What intake question or owner review will keep it from becoming active context before it is ready?
