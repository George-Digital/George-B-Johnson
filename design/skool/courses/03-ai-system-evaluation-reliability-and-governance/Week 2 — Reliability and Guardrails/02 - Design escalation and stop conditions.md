# Design escalation and stop conditions

**I make a workflow safer by stating the signals that require it to pause, who receives the case, and what evidence travels with the escalation.**

I design stop conditions before the next live exception so an operator can contain a risky case without needing to improvise authority they do not have.

A stop condition is not proof that the system failed. It is a deliberate response when the normal path no longer has enough information, permission, or authority to proceed. I want operators to see a stop as competent system behavior. When an AI-assisted workflow is unsure, sees conflicting evidence, receives a request outside scope, or reaches a consequential decision, continuing with a polished guess is often the real failure.

I begin with the decisions the workflow must not make. If an output could determine or materially influence health care, legal status, hiring, employment action, pay, credit, insurance, housing, benefits, education access, safety, discipline, or essential service access, I keep the AI output advisory and specify a qualified human decision owner. The stop condition may be the presence of a high-impact request, a required qualification, a disagreement with an authoritative source, or simply an inability to verify the evidence. I do not make the operator decide whether a boundary is serious enough after the fact.

I then list ordinary stop signals. Missing critical input, conflicting authoritative sources, stale policy or knowledge, unsupported format, possible unauthorized data, a required score gate failure, an instruction in external content that conflicts with the approved task, and an unassigned owner are common examples. I write the signal in language an operator can recognize. “Ambiguous case” is weak. “Two approved sources state different effective dates” is something a person can identify and log.

Every signal gets one immediate action. The options are usually request missing information, place the case in a review queue, switch to a defined fallback, restrict access, notify an incident owner, or decline the task. I do not use “escalate as needed” because it hides the destination. The operator needs a named role, an approved channel, and an expected response or handoff condition. If a formal security, privacy, HR, safety, legal, or compliance reporting process applies, I use that process rather than a course template as a substitute.

I specify the evidence that accompanies an escalation. At minimum, I preserve the case identifier, safe input or secure reference, system version, output reference, failed criterion or stop signal, action already taken, and time of handoff. This gives the escalation owner context without spreading private records. I do not ask a community forum to diagnose live sensitive cases. I use sanitized learning examples in the community and keep real incident evidence in approved systems.

I also design a path for the person who receives the case. They need more than an inbox. I state whether they can approve a manual decision, request clarification, authorize a fallback, suspend the workflow, or assign another specialist. I record the final disposition in the failure or incident log. That record closes the loop for the operator and teaches the team which stop signals are recurring.

Escalation timing matters. Some cases can wait for scheduled review; others need immediate routing because delay can create harm. I define urgent triggers based on the domain and existing organizational policy. I do not invent emergency advice. If a workflow touches safety or care and I cannot establish an appropriate response path, I do not operate it for that use. A draft assistant should never become an emergency-response channel by accident.

I test the stop path with safe simulations. I give an operator an incomplete case, a source conflict, or an out-of-scope request and see whether they recognize the signal, know where to send it, and can record the handoff. I do not regard a prompt refusal alone as a complete control. The process must also prevent the draft from being used as if it resolved the case.

A good escalation design keeps the normal workflow narrow and the exception route dignified. It does not punish the operator for pausing. It gives them a clear way to protect people, data, and the integrity of the system while the right owner makes the next decision.

## Concrete example

I design a stop path for an AI-assisted employee-request summary. Missing manager approval triggers a request for information. A request involving accommodation, discipline, pay, or a legal complaint bypasses the normal summary route and goes to the appropriate HR or legal owner under the organization’s process. The operator records the case identifier, source location, version, and stop signal, but does not make an employment recommendation or share the record outside approved access.

## Action checklist

- List the high-impact decisions the workflow must never make or finalize.
- Define recognizable stop signals for missing data, source conflict, access, scope, and gate failures.
- Assign one immediate containment action and destination to every signal.
- State the secure evidence required with an escalation.
- Name the authority and expected action of the escalation owner.
- Test one safe simulated stop path from recognition through log entry.

## Required deliverable

Create an **Escalation and Stop-Condition Map** in the Failure and Escalation Log. Include at least five signals, immediate actions, destinations, evidence requirements, urgency, final decision authority, and a safe test of one route.

## Community prompt

What is the clearest signal that your workflow must stop rather than draft around a problem? Share the handoff destination and the evidence the owner needs to take over.
