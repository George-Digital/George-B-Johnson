# Define inputs, constraints, and edge cases

**A reliable AI-assisted workflow accepts clearly defined input, follows non-negotiable constraints, and has an explicit response when the normal path does not apply.**

Define what the system may use, what it must never assume or do, and how it handles incomplete, conflicting, unusual, or sensitive cases. Clear boundaries make the common path safer and more useful than a broad promise to handle everything.

Most weak workflow outputs can be traced to a missing boundary. The system was given an unclear input, asked to satisfy an unstated constraint, or treated an exception as if it were ordinary. When that happens, AI often fills the gap with plausible language. The answer may look finished while hiding an assumption that a human operator would have stopped to check.

I define the input before I try to improve the prompt. An input is not simply “the information we have.” It is the specific material the workflow is allowed to use: a completed form, selected fields from a spreadsheet row, approved product documentation, a transcript, or a set of notes. I name which fields are required, which context is optional, what format is expected, and which source is authoritative when two sources disagree.

Work backward from the output. If the user needs a shift brief with assignments, arrival details, and open issues, then the workflow needs a schedule, location information, task list, and any approved safety notes. If one of those is absent, the system should flag the gap. It should not invent an assignment, an address, or a safety instruction just to make the brief look complete.

Constraints are the rules that remain true even when a request is urgent or a draft sounds persuasive. They can cover source use, privacy, tone, format, scope, approvals, and prohibited decisions. A constraint might say, “Use only the current policy document provided in this workspace,” “Do not include personal health information,” or “Do not recommend a price outside the approved range.” I write them in direct language so they can be checked after the fact.

Edge cases are situations that do not fit the normal path or that make a normal action unsafe. They are not only rare disasters. A missing required field, an unreadable attachment, a conflicting date, a request in an unsupported language, a stale source document, or a user asking for a decision outside the workflow’s authority can all be edge cases. The key question is not whether the case is interesting. It is whether the common procedure gives a trustworthy response.

For each important edge case, I choose one of four responses: request missing information, use a defined fallback, route it to a human owner, or decline the task and explain the boundary. “Proceed anyway” should not be the default. A good workflow can say what it does not know. In many systems, surfacing uncertainty is more useful than producing a polished but unreliable output.

Keep a clear separation between source material and instructions. A customer email, uploaded document, or pasted note may contain requests that are relevant to the task, but it should not be able to rewrite the system’s constraints. Treat external content as data to evaluate, not as authority to ignore the workflow’s rules. This is practical process design, not a technical trick: the human owner still decides what sources are trusted and what instructions govern the work.

I also decide how to protect sensitive information before testing. Use anonymized or authorized examples, minimize the fields you include, and make sure the chosen tool is appropriate for the data. If a workflow touches consequential decisions involving people’s health, legal status, finances, employment, safety, or access to essential services, do not let an AI output make the final call. Keep evidence visible and route the decision to a qualified human.

AI can help identify missing fields, compare an input against a known format, summarize approved source material, or prepare a draft that labels its assumptions. It cannot know which local constraint is current unless you provide it, and it should not silently resolve ambiguity that the operator needs to own. The more clearly you define the boundary, the easier it is for a reviewer to trust the output for the limited job it serves.

Start with the edge cases you have already seen. Review past examples, support tickets, failed handoffs, or awkward exceptions. Add only the cases that materially change the next action. You can expand the list after testing. A short list with clear handling is stronger than an imagined catalog of every possible failure.

## Concrete example

An event operations team uses a workflow to turn an approved event brief into a volunteer shift guide. Required inputs are the current schedule, venue instructions, role list, and emergency contact procedure. Constraints say the guide must use only approved venue details, must not include volunteers’ private contact information, and must label unassigned roles as open. If the schedule has two different start times, the workflow flags the conflict and routes it to the event lead; it does not choose one. AI can assemble the guide, while the event lead confirms the final schedule and safety information.

## Action checklist

- List the required inputs and the authoritative source for each.
- Identify optional context and information the workflow must exclude.
- Write the non-negotiable constraints for source use, scope, format, and privacy.
- List three edge cases that change the normal next action.
- Choose a response for each edge case: request, fallback, route, or decline.
- Test one incomplete or conflicting input and record the system’s response.

## Required deliverable

Add an **Input and Boundary Specification** to your System Pack. Include required and optional inputs, authoritative sources, excluded data, at least five constraints, three edge cases with their handling paths, and the human owner for escalations.

## Community prompt

What input is your workflow most tempted to guess? Share the constraint that prevents the guess and the exact response your system should give when that information is missing or conflicts.
