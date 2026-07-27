# Extract your decision rules

**Decision rules turn experienced judgment into visible, testable instructions: when a recognizable condition appears, the system takes a defined action or hands the case to a person.**

Extract the decisions you already make before asking AI to help with the work. A useful rule names the signal, the action, the evidence needed, and the point where human judgment or escalation is required.

When I look at a workflow that seems simple from the outside, I usually find that the experienced operator is making a series of fast decisions that nobody has written down. They notice a missing detail, recognize a familiar risk, decide which request comes first, or know when the normal path no longer applies. Those decisions are the expertise worth extracting. If they remain only in someone’s head, an AI-assisted workflow can sound capable while missing the reason the work was reliable.

I do not begin by trying to capture every thought an expert has. I begin with the common path and ask, “What do I notice, what do I do because of it, and what would make me do something different?” That sequence produces a decision rule. For example: “If a customer request does not identify the product version, ask for the version before drafting troubleshooting steps.” It is not a vague reminder to be careful. It names a condition and a response.

The best source material is real work. Pull up three safe, anonymized past examples and walk through them slowly. Mark the places where you paused, asked a question, changed the order of work, rejected an assumption, or involved another person. Those pauses are often more valuable than the obvious steps. They show where the workflow needs judgment rather than more fluent text.

I separate four things while I do this. An observation is what appears in the input: a missing deadline, two conflicting dates, or an unclear request. A rule is the response: ask for the deadline, flag the conflict, or return the request for clarification. A threshold is a boundary that changes the response, such as a request that affects more than one team. An escalation is the point where the system stops and a responsible person decides. Keeping these separate makes the workflow easier to inspect and revise.

Write each rule in plain language. A useful format is: “When [condition], [take this action], because [reason]. Before acting, confirm [evidence]. If [exception], stop or escalate to [person].” The reason matters. It helps another operator decide whether the rule applies when the wording of a request changes. It also exposes rules that are merely habits or preferences and need more evidence before they become part of a shared system.

Start with five to ten rules that change the output or protect against a meaningful failure. Do not fill a document with advice such as “be helpful,” “use good judgment,” or “make it clear.” Those are quality aspirations, not instructions a system can follow. Replace them with observable behavior: “List missing required fields before recommending a next step,” or “Do not state a delivery date unless the source provides one.”

AI can help me cluster notes, turn a spoken walkthrough into draft rules, and point out possible contradictions. I still validate every rule against real examples. The model cannot reliably tell whether an unwritten local practice is correct, current, fair, or safe. A human owner has to decide which rules are legitimate, what evidence supports them, and which cases should never be handled automatically.

Be especially careful when a rule could affect a person’s rights, safety, access, eligibility, health, finances, employment, or legal position. In those cases, keep the system advisory, make the evidence visible, and route the decision to an appropriately qualified human. “Not enough information to proceed” is a useful system outcome. It is better than a confident guess.

A decision-rule list is not yet an SOP. The rules explain how choices are made; the SOP will put those choices in a workable sequence. For now, aim for clarity. If another experienced person can read a rule, recognize the trigger, and challenge the exception, you have captured something the workflow can actually use.

## Concrete example

A customer-support lead reviews incoming integration questions. Looking at past tickets, the lead extracts these rules: if the account plan is missing, ask for it before promising feature access; if the error message is absent, request the exact message and time of occurrence; if the question involves data loss, stop the normal draft process and route the ticket to the incident owner. AI can prepare a structured ticket summary and draft questions, but the lead still verifies the account context and decides whether an incident needs escalation.

## Action checklist

- Gather three safe examples of the repeated workflow.
- Mark every point where I noticed, chose, rejected, or escalated something.
- Write five to ten rules with a condition, action, reason, and evidence needed.
- Identify the thresholds that change the normal response.
- Name the cases that must stop or go to a human owner.
- Test each rule against at least one past example.

## Required deliverable

Add a **Decision-Rule List** to your System Pack. Include at least five rules, the trigger for each rule, the action it causes, the evidence required, one exception or escalation path, and the human owner responsible for validating the rules.

## Community prompt

What is one decision you make so quickly that a beginner might miss it? Post the condition, the action you take, and the case where you would not use that rule.
