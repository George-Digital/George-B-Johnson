# Run grounding and retrieval tests

**Grounding and retrieval tests check whether the workflow finds the approved context, traces important claims, labels what is missing, and routes conflict or access limits to a human instead of inventing an answer.**

I test the Context Pack with safe, representative questions before I rely on it, because an organized source collection is not evidence that the right material will be retrieved or used correctly.

I do not ask a broad question like “Does the knowledge system work?” I write small test questions tied to the use case and expected behavior. One may test a common factual lookup. Another may test the rule that controls an ordinary decision. A third may test a missing required source. A fourth may present two conflicting sources. A fifth may ask for material outside the operator’s access or the pack’s scope. Together, these cases show whether the system can retrieve, ground, and stop in the right places.

Grounding means that an important statement in the output is supported by the approved source for that statement. I inspect claims that change the user’s next action: dates, requirements, commitments, instructions, exceptions, and recommendations. For each one, I ask: Is there a source reference? Is that source authoritative for this question? Is it current enough? Does the claim accurately reflect the source? If the answer is no, the output should be revised, labeled unknown, or stopped. A fluent explanation is not a pass.

Retrieval means the operator or workflow can find the relevant approved material when given a realistic question. I test the retrieval path, not just the content. Could a capable person find the current rule using the pack’s labels and cues? Did the system retrieve a secondary example instead of the controlling policy? Did it pull a retired decision because the active source was hard to locate? These failures usually point to structure, metadata, authority labels, or scope—not simply a need for a more forceful prompt.

I write expected behavior before I run each test. For a complete common-path case, I might expect a source-backed draft with references to the current scope and procedure. For a missing-date case, I expect the output to say “Needs confirmation,” identify the owner, and avoid supplying a date. For a conflict case, I expect both source references, the conflict stated plainly, and a route to the owner. Precommitting to the expected behavior prevents me from accepting a persuasive but unsafe result after the fact.

I use authorized, minimized test material. When a real case is not approved for testing, I create a realistic synthetic one that has the same structure and ambiguity without private identities or unnecessary confidential details. I record the test version, input summary, expected response, actual response, sources retrieved, reviewer, and rubric result. I keep restricted content in approved locations and use safe references in the shared test log.

A useful test set includes negative tests. I ask questions the pack should not answer: a request outside the use case, a request that needs a restricted source, or a consequential determination reserved for a qualified person. The expected result is a boundary response and handoff, not a refusal without explanation or an improvised answer. This is where human review and access boundaries become observable rather than merely written policy.

I score each result against a simple rubric: correct source selection, claim traceability, factual fidelity, missing-context behavior, conflict handling, access handling, usability for the operator, and correct human escalation. I mark any non-negotiable source, access, privacy, or high-impact decision failure clearly. A polished format cannot compensate for an unsupported claim or a bypassed reviewer.

When a test fails, I classify the cause before changing anything. Was the controlling source absent from the pack? Was its status unclear? Did the retrieval cue lead to an example? Was the prompt or intake process treating source content as instructions? Was the claim too broad for the evidence? Did the reviewer lack access to verify it? I choose one bounded revision, update the version record, and rerun the relevant case. I preserve the prior result so the change remains testable.

A few representative tests do not prove future reliability. They give me evidence about the first pack’s behavior and its limits. The honest output of testing may be to narrow the scope, add an owner review, remove a misleading source, or pause the workflow until a permission problem is resolved. That is useful learning, and it is safer than claiming the pack can answer more than it can support.

## Concrete example

A support lead tests a pack for drafting account-setup guidance. The common test retrieves the current setup procedure and traces each step to it. A missing-plan test labels the plan as unknown and routes the draft to the account owner. A conflict test finds two feature documents with different dates; the pack directs the lead to the current approved procedure rather than the older example. A request to determine a customer’s eligibility is stopped and routed to the authorized team. The lead reviews every result before it is used.

## Action checklist

- Copy the Grounding and Missing Context Test Template.
- Write tests for the common path, missing context, conflict, stale source, access limit, and out-of-scope request.
- Define expected source, claim reference, output behavior, and human handoff before each run.
- Use authorized, minimized, or clearly labeled synthetic test material.
- Check source selection, fidelity, traceability, missing-context response, access response, and reviewer route.
- Record one bounded revision or scope decision for each meaningful failure.

## Required deliverable

Complete at least six **Grounding and Retrieval Test Records**, including a common-path test, missing-context test, conflicting-source test, stale-source test, access-limited test, and out-of-scope or consequential-decision test, all with human-review results.

## Community prompt

Which test did your pack handle least well: finding the right source, tracing a claim, admitting missing context, or routing a conflict? What single revision will you test next?
