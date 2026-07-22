# Usage and Quality Scorecard

Use a small scorecard that helps an owner decide whether the current operating process fits its stated purpose. Collect only approved data, use aggregate patterns where practical, and do not turn the scorecard into covert worker monitoring or a basis for consequential personnel decisions.

## Scorecard purpose

- **System name and current scope:**
- **Decision this scorecard informs:**
- **Operating owner:**
- **Baseline period or safe baseline reference:**
- **Current observation period:**
- **Included case types:**
- **Excluded case types:**
- **Data and privacy boundary:**
- **Known comparison limitations:**

## Usage signals

### Eligible cases

- **Signal:** Eligible cases
- **Definition:**
- **Source:**
- **Sample or denominator:**
- **Collection owner:**
- **Review frequency:**
- **What a concerning pattern may mean:**

### Started uses

- **Signal:** Started uses
- **Definition:**
- **Source:**
- **Sample or denominator:**
- **Collection owner:**
- **Review frequency:**
- **What a concerning pattern may mean:**

### Completed and human-reviewed outputs

- **Signal:** Completed and human-reviewed outputs
- **Definition:**
- **Source:**
- **Sample or denominator:**
- **Collection owner:**
- **Review frequency:**
- **What a concerning pattern may mean:**

### Manual fallbacks

- **Signal:** Manual fallbacks
- **Definition:**
- **Source:**
- **Sample or denominator:**
- **Collection owner:**
- **Review frequency:**
- **What a concerning pattern may mean:**

### Time to usable handoff, if appropriate

- **Signal:** Time to usable handoff, if appropriate
- **Definition:**
- **Source:**
- **Sample or denominator:**
- **Collection owner:**
- **Review frequency:**
- **What a concerning pattern may mean:**


## Quality and boundary checks

### Required information is present

- **Check:** Required information is present
- **What a qualified reviewer inspects:**
- **Sample:**
- **Result: pass, revise, stop, or escalate:**
- **Owner:**
- **Action when recurring:**

### Claims are supported by approved source

- **Check:** Claims are supported by approved source
- **What a qualified reviewer inspects:**
- **Sample:**
- **Result: pass, revise, stop, or escalate:**
- **Owner:**
- **Action when recurring:**

### Missing or conflicting information is labeled

- **Check:** Missing or conflicting information is labeled
- **What a qualified reviewer inspects:**
- **Sample:**
- **Result: pass, revise, stop, or escalate:**
- **Owner:**
- **Action when recurring:**

### Output supports the user’s next action

- **Check:** Output supports the user’s next action
- **What a qualified reviewer inspects:**
- **Sample:**
- **Result: pass, revise, stop, or escalate:**
- **Owner:**
- **Action when recurring:**

### Privacy, authorization, and scope boundary is respected

- **Check:** Privacy, authorization, and scope boundary is respected
- **What a qualified reviewer inspects:**
- **Sample:**
- **Result: pass, revise, stop, or escalate:**
- **Owner:**
- **Action when recurring:**

### Additional domain-specific check

- **Check:** Additional domain-specific check
- **What a qualified reviewer inspects:**
- **Sample:**
- **Result: pass, revise, stop, or escalate:**
- **Owner:**
- **Action when recurring:**


## Burden and adoption signals

### User friction

- **Signal:** User friction
- **Question or collection method:**
- **Role:**
- **Frequency:**
- **Safe interpretation limit:**
- **Owner:**
- **Follow-up route:**

### Reviewer burden

- **Signal:** Reviewer burden
- **Question or collection method:**
- **Role:**
- **Frequency:**
- **Safe interpretation limit:**
- **Owner:**
- **Follow-up route:**

### Support demand

- **Signal:** Support demand
- **Question or collection method:**
- **Role:**
- **Frequency:**
- **Safe interpretation limit:**
- **Owner:**
- **Follow-up route:**

### Recipient handoff quality

- **Signal:** Recipient handoff quality
- **Question or collection method:**
- **Role:**
- **Frequency:**
- **Safe interpretation limit:**
- **Owner:**
- **Follow-up route:**


## Review record

- **Period reviewed:**
- **Usage pattern:**
- **Quality pattern:**
- **Burden or feedback pattern:**
- **Source or dependency context:**
- **Decision:** maintain / revise / retest / narrow / pause / retire
- **Decision owner and required approvals:**
- **User communication:**
- **Next review date or trigger:**

## Applied prompt: create a cautious scorecard summary

**Use case:** You have approved aggregate measures and reviewer notes and need a concise summary for an operating review.

**Inputs:** Scorecard definitions; baseline summary; current aggregate values; sample size; quality-review results; fallback count; sanitized feedback themes; source or dependency context.

**Paste-ready prompt:**

> Summarize the supplied scorecard for an operating review. Compare current values with the stated baseline only where the case types, observation period, and data conditions are comparable. Separate usage, quality, burden, and boundary findings. State sample sizes and limitations. Identify patterns that require maintain, clarify, retest, narrow, pause, or escalation; do not declare that the system is successful or safe from a single metric. Do not infer employee performance or make a consequential decision about a person. End with the evidence that a qualified human reviewer should inspect before a decision.

**Expected output:** A cautious, decision-ready summary that preserves limitations and review needs.

**Failure mode:** Aggregate data can hide a serious edge case, and a baseline may be invalid after a change in case mix or staffing.

**Human review:** The operating owner verifies definitions and context; the qualified reviewer checks quality evidence and any boundary concern before acting.
