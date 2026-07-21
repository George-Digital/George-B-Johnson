# Monitor source and dependency changes

**A system stays trustworthy only when its owners notice changes in the sources, access, tools, and dependencies that shape its output.**

I do not assume that a workflow remains current because the prompt still runs. AI-assisted systems depend on things outside the visible prompt: policies, knowledge bases, forms, data fields, permissions, integrations, model behavior, vendor terms, and the people who maintain them. A useful monitoring plan tells the operating owner what may change, who notices it, and what to retest or pause when it does.

I start with an inventory of dependencies. I list the authoritative sources that provide facts or rules, the input forms and data structures, the output destination, the access groups, any tools or connectors, and the human review roles. I do not need to predict every possible failure. I need to identify the parts whose change could make the current instructions incomplete, inaccurate, inaccessible, or inappropriate.

For each dependency, I name a source owner and a signal. A policy owner may publish a revision notice. A form owner may announce a new required field. A technical owner may receive an integration error or vendor change notice. An operator may notice that an approved source no longer matches a real case. The operating owner should not be expected to discover every update by chance; they need agreed routes for receiving material changes.

I distinguish monitoring from blind automation. A notification that a source changed is not proof that the AI-assisted workflow needs no human inspection. I ask what part of the process uses that source, whether the change affects a common or edge case, and whether a qualified person must review the revised instructions. A version number alone does not tell me whether the meaning of a rule changed.

I set a response for each class of change. A minor wording update may be noted and checked at the next review. A revised eligibility rule, altered data permission, broken connector, unknown model behavior, or source conflict may require an immediate pause for the affected use. The response includes the manual fallback and who can authorize resumption. I keep the boundary proportionate: a low-risk team draft may resume after a simple source check, while a consequential workflow may need formal review.

I monitor dependency drift through operating evidence too. Rising manual fallbacks, new missing fields, repeated reviewer corrections, access denials, or outputs that cite a retired source can be early signals. I record these in the change and maintenance log. I do not ask users to troubleshoot around them silently, because their workaround can hide the fact that the system no longer fits the work.

Finally, I test changes with safe, representative cases. I preserve the test result and any limitation. If I cannot verify the new source or dependency within the system’s boundary, I keep the affected case on the manual path. Being able to pause an unreliable path is part of maintaining it responsibly.

## Concrete example

An HR operations team uses a workflow to draft onboarding checklists from approved role information. The workflow depends on a role-profile form, an approved policy library, access to a secure workspace, and a review by the HR operations lead. When the role-profile form adds a location field and the policy library changes remote-work guidance, the form owner and policy owner notify the operating owner. The owner pauses only checklist sections affected by location and remote work, tests the revised instructions with a synthetic role profile, and asks the HR lead to approve the new common path. The workflow never decides employment eligibility or access permissions.

## Action checklist

- Inventory authoritative sources, forms, access groups, tools, connectors, outputs, and review roles.
- Name an owner and change signal for each material dependency.
- Identify the workflow step and user group each dependency can affect.
- Define note, retest, pause, and resumption actions for different changes.
- Watch operating evidence for source drift or access problems.
- Use approved or synthetic cases to test material changes before resuming use.

## Required deliverable

Create a **Source and Dependency Monitoring Register** with each dependency, its owner, change signal, affected workflow step, review requirement, safe test method, manual fallback, pause trigger, and resumption authority.

## Community prompt

Which source or dependency could quietly make your output less reliable? Share the signal that should reach the operating owner and the action you will take before users continue with the affected path.
