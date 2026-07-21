# Define source authority and traceability

**Source authority tells me which material controls when context conflicts; traceability lets a reviewer follow an important claim back to that material and its owner.**

I define authority and traceability before relying on retrieved context, because a readable answer is not useful if nobody can tell which source supports it or whether that source should control.

Every workflow has an authority question, even when nobody calls it that. A coordinator may have a current policy page, a private note from last month, a customer email, and a past output that all mention the same topic. The words may differ. The dates may differ. If I have not declared which source governs the task, an operator or AI assistant may select the clearest-looking sentence instead of the approved one.

I start by setting a simple authority order for the bounded use case. The exact order will vary, but I can state it plainly. For case-specific facts, an approved current record may control over a generic reference. For process rules, an effective policy or owned procedure may control over an old training document. A formal approved decision may control for its stated case and period. Examples, drafts, and unverified notes do not control; they can illustrate a pattern or trigger a question.

The word current matters. An authoritative source can still be stale if its effective period ended or its owner changed the process elsewhere. That is why I record a last-reviewed date, effective date, or explicit unknown status. I do not solve an uncertain date by quietly treating the document as current. I flag it and route it to the owner. A context pack should make staleness easy to see, especially where outdated instructions could affect people, money, safety, services, or commitments.

Traceability is the companion practice. For every important claim in a draft output, I want a reviewer to find the supporting source without reconstructing the entire search. A source title, stable reference, section, date, or case identifier may be enough. I do not need to attach private source contents to every output. In fact, copying restricted material can create an unnecessary access risk. I use an approved reference that a permitted reviewer can follow.

I decide which claims need traceability. Routine formatting choices may not need a citation, but a stated requirement, deadline, eligibility condition, commitment, safety instruction, policy interpretation, or claim that changes the user’s next action usually needs visible support. I also require a label for what is not supported: “Not provided,” “Needs confirmation,” or “Source conflict.” A reviewer should never have to guess whether a smooth sentence is grounded or inferred.

When sources conflict, I do not let the workflow choose a winner based on wording, length, or recency guessed from the file name. I preserve both references, describe the conflict, and follow the authority order. If the order does not resolve it, the named owner decides. I log the resolution and its scope. This is a human-review boundary: the system can identify and present the conflict, but an authorized person owns the interpretation or exception.

Access and authority are related but not identical. A source can be authoritative yet restricted. That does not mean I copy it into a broad context pack. I record that the source exists, its owner, the approved access path, and the fact that an authorized reviewer must verify claims against it. Conversely, a widely available webpage may be easy to retrieve but not approved for the workflow. Availability is not authority.

I make authority visible in the structure: labels such as “Authoritative for current scope,” “Secondary reference,” “Example only,” and “Pending owner review” help. I use a source map that identifies the controlling source by question type. For instance, one column can say which source determines current account facts, one which source governs procedure, and one who resolves exceptions. That turns authority from a personal memory into an inspectable part of the system.

Then I test it. I choose one draft output with three or four important claims and ask whether a qualified reviewer can trace each one. If they cannot, I improve the source reference, reduce the claim, or label it unknown. I do not ask the reviewer to accept a statement because the model or operator sounds confident. The evidence needs a route back to its source.

Authority and traceability do not make every answer correct. They make the limits of an answer visible. That is what allows an operator to review, correct, and safely hand off the work.

## Concrete example

A grant-program coordinator uses a current program policy for requirements, an approved applicant record for case facts, and an old FAQ as secondary background. When the FAQ and policy differ on a deadline, the policy controls. The draft summary lists the policy title and effective date next to the deadline. If the applicant record is incomplete, it says “Needs confirmation” and routes the question to program staff. The coordinator does not make an eligibility decision from the draft.

## Action checklist

- Define an authority order for case facts, operating rules, decisions, and examples.
- Record effective, last-reviewed, or unknown status for controlling sources.
- Choose which output claims require a source reference.
- Add a traceable source title, location, date, or identifier to those claims.
- Define the visible label for missing support and source conflict.
- Name the authorized reviewer who resolves an authority conflict.

## Required deliverable

Add a **Source Authority and Traceability Rule** to your Context Pack, including authority order, controlling sources by question type, required claim references, stale-source handling, conflict route, access limits, and one traced sample output.

## Community prompt

Name one question your workflow answers. Which source controls that answer, and how will a permitted reviewer trace the claim without exposing restricted material?
