# Protect credentials and sensitive data

**I minimize data and access, keep credentials out of content, and route uncertainty through the authorized security or data owner.**

I treat access and privacy boundaries as design requirements, not cleanup work after a pilot is built.

I cannot make a workflow safe by adding a warning at the end. I decide what data is necessary, who may use it, and how access is authorized before I connect anything. The starting rule is minimization: the pilot should receive only the fields, references, and permissions needed for the bounded step. Less unnecessary movement means fewer places for an error to spread.

Credentials are never workflow content. I do not paste passwords, keys, tokens, or other secrets into a prompt, template, shared note, screenshot, lesson submission, or test example. I use the organization’s approved access method and follow its rotation, revocation, and audit expectations. If I cannot connect the needed source without sharing a credential in an unsafe way, I stop and involve the appropriate owner.

I use least privilege. The workflow should have only the access it needs, ideally limited to the pilot’s sources, actions, and duration. Read access does not imply write access. A draft-creation step does not need permission to send, delete, change approvals, or browse unrelated records. I periodically ask whether an access grant is still needed and remove it when the pilot ends or the owner changes.

I distinguish sensitive information from merely inconvenient information. Personal, confidential, financial, health, legal, personnel, security, and access details may have specific handling rules. I do not assume anonymizing a visible name makes a record safe, because combinations of fields or a case reference can still identify someone. When the permitted handling is unclear, I use a synthetic or sanitized test case and seek guidance from the data, privacy, security, legal, or compliance owner as appropriate.

I plan for incidents in proportion to the workflow. An operator needs to know how to stop a run, who to notify, what minimal record to preserve, and where not to copy sensitive details. The response should follow the organization’s established process; this course does not replace security, legal, privacy, or compliance advice. A quick pause and correct escalation is better than trying to diagnose a sensitive issue in a public or informal channel.

I also check outputs. A safe input can produce an output that reveals more than the recipient needs, goes to the wrong audience, or includes confidential context in a draft. I set a review gate and destination boundary before delivery. For any consequential decision, the qualified owner verifies the relevant evidence and authorizes the outcome.

A secure design remains useful to operators. I document the approved source, access owner, data categories, retention expectation, and stop route in plain language. That allows someone to recognize a boundary without exposing the data itself.

## Concrete example

A team pilots a workflow that creates internal meeting briefs. It needs agenda fields and approved project references, but not employee performance notes, private contact lists, or account credentials. The owner grants only the access needed to read the approved request and create a draft in the designated work area. The operator uses synthetic cases for training. If an unexpected confidential attachment arrives, the workflow pauses; the operator does not download it into a shared test folder and instead follows the organization’s established escalation route.

## Action checklist

- List the minimum data categories needed for the bounded step.
- Remove credentials, secrets, and unnecessary sensitive fields from all prompts, templates, and examples.
- Define the minimum approved access for read, write, and delivery actions.
- Name the data and security owners for questions or incidents.
- Set a stop-and-escalate response for unexpected sensitive content or access.

## Required deliverable

Document the pilot’s data and credential boundary: required data, prohibited data, approved source, minimum access, credential owner, output destination, retention expectation, incident route, and human review gate.

## Community prompt

What information or access is convenient but unnecessary for your pilot? Share one reduction you can make and the person who must authorize the remaining access.
