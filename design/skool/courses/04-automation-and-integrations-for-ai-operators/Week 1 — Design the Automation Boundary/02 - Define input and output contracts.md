# Define input and output contracts

**I make the workflow explicit about what it may accept, what it must produce, and what it does when required information is absent.**

I use contracts to replace assumptions with fields, source rules, output requirements, and a clear response to uncertainty.

A workflow cannot be dependable if its inputs are “whatever someone sends” and its output is “something helpful.” I write an input and output contract before I connect systems or ask an operator to rely on a result. The contract describes the minimum information needed to start, the optional context that may improve the work, the authoritative source, and the format the output must follow.

I begin with the user’s next action. If a reviewer needs to decide whether a request can proceed, the output needs the relevant facts, missing information, source references, and a clear status. It does not need a persuasive paragraph that obscures uncertainty. Thinking from the next action keeps me from collecting data because it is available rather than because it is necessary.

For each input, I identify who supplies it, where it comes from, what format is acceptable, and how I know it is current enough for the task. I do not silently substitute guesses when a required field is missing. I choose an explicit behavior: request the field, label the output incomplete, route the case, or stop. A predictable pause is safer than an apparently complete answer built on an assumption.

The output contract needs boundaries as well. I specify required fields, allowed claims, presentation order, and labels for unknown or unsupported information. I also state what the output must not decide or send on its own. If a workflow prepares a recommendation, I distinguish the recommendation from the evidence and name the human who authorizes the actual decision.

I use identifiers carefully. A stable reference can help an operator trace a case, but a shared template does not need to duplicate personal, confidential, or sensitive data. I minimize the information that enters the workflow and use approved storage and access arrangements. Credentials never belong in an input contract, sample record, or prompt. Access is configured through approved controls, not passed around as content.

I test the contract with three cases: complete, incomplete, and conflicting. The complete case should produce the required shape. The incomplete case should pause or ask for the right thing. The conflicting case should cite the authority rule or route to a human. These tests expose ambiguity early, while the workflow is still easy to change.

A contract is an operating agreement, not a technical ornament. It gives the requester, operator, reviewer, and future maintainer the same definition of a valid run. When the work changes, I revise the contract and retest rather than expecting people to infer a new rule.

## Concrete example

An internal recruiting coordinator wants a draft interview packet. The input contract requires an approved role brief, candidate-provided materials allowed for this purpose, interview stage, and named hiring owner. Optional context includes a job-specific rubric. The output contract requires a factual summary, unanswered questions, and a draft interview agenda; it must not rank candidates or make a hiring recommendation. If the role brief is missing or conflicts with the request, the workflow pauses for the hiring owner.

## Action checklist

- List the required inputs separately from optional context.
- Name the authoritative source when information conflicts.
- Define acceptable format, freshness, and access boundary for each input.
- Specify the required output fields and labels for unknown information.
- Test complete, incomplete, and conflicting cases before connecting a live source.

## Required deliverable

Complete the Input and Output Contract Template for one bounded step, including the missing-input response, prohibited action, source authority, and human reviewer.

## Community prompt

Which input is most often assumed instead of supplied, and what should the workflow do when it is absent? Share the exact pause, question, or routing behavior you chose.
