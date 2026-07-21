# Maintain incident and change logs

**I keep separate, connected records for what failed in operation and what changed in the system so I can trace current behavior back to evidence instead of memory.**

I use an incident log to contain and learn from failures and a change log to document approved modifications, tests, owners, and decisions.

A failure log answers, “What went wrong or nearly went wrong in a case?” A change log answers, “What did we alter in response, who approved it, and what evidence did the new version produce?” I keep them separate because they serve different purposes. When I mix them into a single informal notes page, I often lose the connection between a real observed failure and the prompt edit someone made weeks later.

I log incidents and near misses when behavior departs from the intended boundary. That includes unsupported output, a missed required field, incorrect routing, a failed stop condition, stale source use, unauthorized data handling, unavailable review, or a case that was used outside its scope. I record a safe summary, severity or potential consequence, containment, owner, evidence reference, and disposition. I do not turn the log into public blame or copy restricted records into it. If an established security, privacy, safety, HR, legal, or compliance process applies, I follow it and point to the authorized record.

I log changes when I alter any part that could affect behavior: source material, prompt, examples, output template, scoring rubric, threshold, tool configuration, integration, access rule, reviewer role, or fallback path. I include a version identifier, the reason for the change, the evidence or incident that prompted it, expected impact, approval owner, safe test plan, result, and rollout decision. “Updated prompt” is not enough for a future reviewer to understand what changed.

I do not assume every incident demands a prompt change. The source may need correction, the intake template may need a required field, the operator may need a clearer runbook, or the safest decision may be to narrow the use. The incident record helps me classify the cause; the change record documents the chosen response. If I defer a change, I record why and who will revisit it. This prevents a known limitation from disappearing because it was inconvenient to fix.

I establish change categories. A wording edit that does not affect the decision path may receive simple review. A change that affects a gate, data boundary, source authority, routing, high-impact output, or access permission deserves stronger review and retesting. I do not rely on a generic course rule to determine organizational obligations; I use the responsible domain, privacy, security, or compliance owner where relevant. The point is that material changes should not silently enter live use.

Versioning can stay simple. I use a dated version or a clear label, preserve the previous approved version or an authorized reference, and note when the new version became active. Operators need to know which version to run; reviewers need to know which version produced an output; investigators need to know whether a failure occurred before or after a change. I avoid overwriting the only copy of a prompt or rubric when the change matters to behavior.

I review the logs for patterns. Several incidents involving missing dates may point to the input contract. A rise in reviewer disagreement may point to a rubric drift. A change that improves common-path scores but increases escalations may be appropriate—or may mean I unintentionally narrowed the workflow. I bring these patterns to the scheduled reliability review rather than declaring success from one favorable retest.

For high-impact use, I preserve the line between system records and human decisions. An incident log can show that a workflow produced an advisory summary with an unsupported inference; it cannot resolve the person’s eligibility, treatment, employment, legal, financial, housing, safety, benefit, education, or disciplinary outcome. The authorized decision owner handles that matter through the appropriate process.

Clear logs make responsible iteration possible. They let me tell a future operator: this is the current version, this is why it exists, this is the evidence behind it, and this is the limitation we still need to watch.

## Concrete example

I log an incident where an event-brief workflow omitted an accessibility request that was present in an approved note. The event lead catches it before distribution and contains the issue by using the manual checklist. The change log records that Version 1.2 adds a required accessibility field, the source note to inspect, the event lead’s approval, and a retest on a safe incomplete case. The log does not treat the workflow as a substitute for the event lead’s safety or accessibility judgment.

## Action checklist

- Define which events create an incident or near-miss entry.
- Define which workflow, source, access, and operating changes require a change entry.
- Record safe evidence references, containment, owners, approvals, versions, tests, and outcomes.
- Categorize material changes that require stronger review or retesting.
- Preserve prior approved versions or secure references.
- Review both logs for patterns, deferred items, and unresolved limitations.

## Required deliverable

Add one **Incident or Near-Miss Record** and one connected **Change Record** to your Reliability Pack, using a safe past or synthetic case if needed. Include the version, evidence, owner, approval, retest plan, and current status.

## Community prompt

What kind of change could alter your system’s behavior even if the user interface looks the same? Name the evidence and approval you would require before using it.
