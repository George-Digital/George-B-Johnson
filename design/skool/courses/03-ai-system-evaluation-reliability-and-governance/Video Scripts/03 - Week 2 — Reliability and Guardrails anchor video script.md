# Week 2 — Turn Scores Into Guardrails, Escalation, and Recovery

**Embed on:** `Week 2 — Reliability and Guardrails/01 - Set quality thresholds.md`

**Length:** 8–10 minutes

**Outcome:** I will help members convert evaluation evidence into operating controls: thresholds that lead to clear actions, recognizable stop and escalation conditions, permissions and data boundaries, and a manual fallback with recovery checks. They will be able to show what happens when a case should not continue normally.

## What to demonstrate on screen

Use a **synthetic field-service intake brief**. It may organize fictional request details for a service-lead review. It must not assign a technician automatically, make safety decisions, or handle real customer, location, payment, or credential data.

Open these exact local resources in rendered Markdown preview:

1. `Resources/Output Scoring Rubric Template.md` — show **Case-level acceptance rule**, **Stop or escalation rule**, and **Set-level quality threshold**.
2. `Resources/Failure and Escalation Log.md` — show **Escalation and stop-condition map** and a synthetic source-conflict entry.
3. `Resources/Governance and Permissions Checklist.md` — show **Data boundary**, **Role and decision map**, and **Change and emergency authority**.
4. `Resources/Reliability Review Template.md` — show **Fallback and recovery plan**.

Use only fictional examples: `SYN-FS-04` with two conflicting service dates; a missing approved service catalog; an unauthorized-data marker; and a fictional tool outage. Do not attempt unauthorized access or show a real tool, account, or incident record.

## Teleprompter script

[ON SCREEN: Synthetic field-service intake brief and a simple “draft for service-lead review” label.]

I’m George. In Week 1, I used cases and a rubric to observe behavior. This week, I make the next action clear when the evidence is good enough for the current scope, when an output needs revision, and when the normal workflow must stop.

A score by itself does not protect anyone. A guardrail is the rule that tells an operator what to do next.

[ON SCREEN: Open `Resources/Output Scoring Rubric Template.md` at the acceptance and threshold rules.]

I begin with critical gates. For this synthetic field-service brief, source grounding, correct routing, and the privacy boundary are gates. If the workflow cannot verify the approved service catalog, routes a safety-related request incorrectly, or exposes data outside the approved location, the case does not proceed as a normal draft. I do not average that failure with the rest of the score.

[ON SCREEN: Show a simple synthetic action band: all gates pass / revise and retest / stop and escalate.]

Then I write thresholds that produce actions. At the case level, all gates must pass before a draft enters service-lead review. A noncritical missing detail can trigger revision or a request for information. A failed gate triggers a stop, containment, and escalation.

At the set level, I look for patterns. If several recent synthetic cases omit the same required field, I do not declare the workflow sound because the average looks acceptable. I investigate the input form, prompt, source, or rubric, then retest the affected cases. A threshold is not a license to remove human judgment, and a small sample does not establish future performance.

[ON SCREEN: Open `Resources/Failure and Escalation Log.md` at **Escalation and stop-condition map**.]

Now I make the stop path practical. A stop condition is not proof that the system is broken. It is the safe response when the workflow lacks information, permission, or authority to continue.

For `SYN-FS-04`, two approved sources state different service dates. The recognizable signal is specific: two authorized sources conflict. The immediate operator action is to pause the normal route and preserve the safe case reference. The destination is the service lead or source owner. The log records the system version, failed criterion, containment, and final disposition.

[ON SCREEN: Point to rows for missing critical input, unauthorized-data concern, and unavailable reviewer.]

Other ordinary stop signals include missing critical input, a stale or missing approved source, an unauthorized-data concern, a failed gate, untrusted external content that conflicts with the approved task, no assigned reviewer, or an out-of-scope request. Every signal needs one immediate action and a named destination. “Escalate as needed” is not enough for a busy operator.

For urgent legal, safety, privacy, health, employment, financial, housing, benefits, education-access, disciplinary, or essential-service matters, I follow the organization’s established route. This course’s log can point to the authorized record; it does not replace formal reporting or qualified investigation.

[ON SCREEN: Open `Resources/Governance and Permissions Checklist.md` at **Data boundary**.]

Permissions are part of reliability. I define the minimum data this synthetic workflow needs, who may enter it, who may run the draft, who may review the output, and who may approve a next action. I use approved sources, approved storage, and least privilege. If data is outside the approved boundary, I use a synthetic example or a manual route rather than treating access to a source as permission to put it into an AI workflow.

[ON SCREEN: Highlight source freshness, external content, and change authority fields.]

I also make source authority visible. An external attachment can be evaluated as case data, but it cannot change the approved instructions or grant itself authority. A missing or stale catalog should trigger a request, pause, or fallback. And not every operator gets permission to revise a prompt, threshold, source list, or access rule. A behavior-affecting change needs the right owner, a version record, and a safe test.

[ON SCREEN: Open `Resources/Reliability Review Template.md` at **Fallback and recovery plan**.]

A dependable workflow has a path for normal failures. Here, the approved catalog is unavailable. The trigger is not merely “the AI is down”; it is that the operator cannot verify the current source. The immediate containment is to stop using the AI-assisted path for that case. The fallback is a protected manual template that the coordinator completes from approved material, followed by service-lead review.

The fallback preserves the same review and authority boundaries. It does not let the coordinator assign a technician or make a safety decision just because the automated path is unavailable.

[ON SCREEN: Show the recovery-verification and retest columns.]

Recovery is more than waiting for an error message to disappear. I confirm the source or tool is restored, check the active version, run a safe test if behavior changed, and obtain required reauthorization before returning to normal use. I log the outage or failed gate, any incident, the change if we alter something, and the retest evidence.

[ON SCREEN: Return to the threshold, escalation, permissions, and fallback resources.] 

This is the purpose of guardrails: a person can recognize the problem, know what to stop, use a safe alternate path, and reach someone who owns the next decision. The AI can organize authorized information and prepare an advisory draft. In high-impact use, the qualified human still makes the final determination.

By the end of this week, I want the normal path and the exception path to be equally clear. A workflow is not more reliable because it continues through every exception. It is more trustworthy when it can safely pause, route, fall back, and recover within its actual boundary.

## Member action

1. In `Resources/Output Scoring Rubric Template.md`, add critical gates plus case-level and set-level actions for continue, revise, route, restrict, or pause.
2. In `Resources/Failure and Escalation Log.md`, map at least five recognizable stop signals to immediate containment, destination, urgency, evidence, and final decision authority.
3. Complete the data, role, source-freshness, output-recipient, and change-authority fields in `Resources/Governance and Permissions Checklist.md`.
4. In `Resources/Reliability Review Template.md`, document a manual fallback, queue owner, recovery verification, retest, and reauthorization step for one dependency.
5. Run a safe tabletop exercise with synthetic data; log the gap rather than improvising around it.

## Recording checklist

- [ ] The embed location is `Week 2 — Reliability and Guardrails/01 - Set quality thresholds.md`.
- [ ] The recording is 8–10 minutes and shows all four named local resources.
- [ ] Only synthetic field-service cases and fictional owners are shown.
- [ ] Critical gates are kept separate from aggregate thresholds and lead to explicit actions.
- [ ] A source conflict, escalation destination, evidence handoff, and authority boundary are demonstrated.
- [ ] Permissions, data minimization, source authority, and change permission are demonstrated.
- [ ] The manual fallback, queue rule, recovery verification, and safe retest are demonstrated.
- [ ] High-impact AI output is described as advisory; no real sensitive data or performance guarantee is shown or claimed.
