# Choose the implementation path

**I choose the least complex path that can test the change safely and leave a clear operating record.**

I select a manual, assisted, or connected path based on evidence, not on the status of the tool.

I think of implementation as a ladder, not a binary choice between doing nothing and full automation. At the bottom, I may improve a checklist or structured form. Next, I may use a repeatable assisted run with a human operator. Only after that may I connect a trigger, source, or destination for a bounded step. Each level changes the risk, maintenance, access, and recovery needs.

I begin with the desired operating behavior. I ask how often the task occurs, how quickly it needs a response, whether inputs are already structured, and whether a human is already present at the important decision. A frequent, low-variation task with a review gate may justify a limited connection. A rare, ambiguous task may be better served by a runbook and a prepared template.

I do not let volume alone decide. A high-volume workflow that handles sensitive records, changing policies, or consequential judgments needs stronger controls than a low-volume internal draft. The right path may be to automate a notification or draft while leaving source retrieval, authorization, and final action in the approved human process. Convenience does not remove the need for appropriate permissions.

I count maintenance as part of the implementation. Every connection has an owner, an access boundary, a source that may change, failures to inspect, and a manual path to rehearse. If nobody can own those responsibilities, I do not add the connection. A simple process used reliably can be more valuable than an elaborate one that only one person understands.

I use a small decision record. I state the candidate step, the path I chose, why the less complex alternative was insufficient, what review remains, what data may be used, and what would cause me to stop. This record protects me from later rewriting history when the pilot reveals a constraint I did not anticipate.

I also set the pilot scope before building. I may use a single internal team, one approved request type, a capped number of runs, or synthetic cases first. I exclude new sources, unusual cases, and irreversible actions. A pilot is meant to generate evidence about a narrow design, not to prove that every future case belongs in the workflow.

The result is a proportionate choice: manual improvement, operator-assisted repeatable run, or a limited integration. I can move up the ladder when evidence supports it and move down when the work becomes less stable. Keeping the path reversible gives the team room to learn without forcing a broad rollout.

## Concrete example

A support coordinator answers a recurring category of internal questions. The volume is moderate, but the approved policy changes often. I choose an operator-assisted path: a structured request is prepared, a draft answer is generated from the current approved policy, and the coordinator checks it before sending. I do not connect it to send responses automatically because policy freshness and exceptions still need a human check. After a measured pilot, I can decide whether a bounded routing step is worth adding.

## Action checklist

- List the manual, assisted, and limited-integration options for one step.
- Compare each option on variation, urgency, access, review, recovery, and maintenance.
- Choose the least complex option that addresses the observed problem.
- Define a limited pilot audience, case type, and run cap.
- Record the conditions that would move the work back to a manual path.

## Required deliverable

Write an implementation-path decision: the selected step, chosen path, scope, review boundary, data boundary, manual fallback, owner, and the evidence needed before adding complexity.

## Community prompt

What is the least complex path you could test this month, and what makes a more connected approach premature? Ask the group to challenge one assumption in your decision.
