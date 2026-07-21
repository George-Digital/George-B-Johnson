# Classify expected errors

**I name predictable failures before the pilot so operators can respond consistently instead of improvising under pressure.**

I group errors by what failed, what risk exists, who owns recovery, and whether the workflow should retry, pause, or route.

I do not design for a world where every input, connection, and reviewer behaves as planned. Errors are normal operating conditions. My job is to make common errors recognizable and give the operator a safe response. I begin by collecting what already goes wrong in the manual baseline and what could go wrong when information moves between systems.

I classify errors by type. Input errors include missing, invalid, duplicate, stale, or unauthorized information. Processing errors include a transformation that cannot complete or an unexpected result. Connection errors include an unavailable source or destination. Review errors include a stalled, rejected, or unavailable approver. Delivery errors include a failed handoff or a result sent to an incorrect state. Each type needs a different response.

Then I classify by impact. Some errors can wait for an operator and are reversible. Others may expose sensitive information, create duplicate action, or affect a consequential decision. I do not use the same automatic recovery for both. A potentially sensitive, unauthorized, or consequential error should stop and route to the responsible owner; it should not loop through retries or quietly continue with a substitute.

I write the first operator action in plain language. It may be to check the case reference, confirm whether a run actually completed, stop duplicate processing, request a missing field, or use the manual fallback. I also state what evidence to preserve: a timestamp, case reference, error category, safe status, and owner notification. I avoid copying private content into a general incident note.

I separate a technical symptom from a business decision. “Destination unavailable” describes a symptom. The operating decision may be “hold the draft, alert the operator, and do not mark the case complete.” This distinction helps the team recover even if the technical cause is not immediately clear. The workflow should not announce success merely because one intermediate step ran.

I make room for unknown errors. If an operator sees behavior that does not match the classified cases, the response is to pause, preserve the minimal record, and escalate rather than force it into a familiar category. That protects the pilot from becoming a source of unexamined edge cases.

An error catalog is useful when it is short and used. I start with the cases most likely to occur or most harmful to mishandle. I revise it after each dry run and pilot observation, so the operating team learns from actual failure patterns instead of relying on a theoretical list.

## Concrete example

A workflow prepares a draft service update from a complete internal request. I classify a missing owner as an input error: request the owner and leave the case waiting for input. An unavailable approved source is a connection error: do not use a cached substitute without permission; route the case to the manual path. A draft containing unsupported details is a processing or quality error: return it for revision and require reviewer confirmation. An unexpected confidential attachment is a sensitive-data error: stop and follow the authorized incident route.

## Action checklist

- List errors from the manual baseline and plausible integration failures.
- Group them by input, processing, connection, review, delivery, and sensitive-data conditions.
- Assign impact and choose retry, pause, manual fallback, or escalation.
- Write the first operator action and minimal evidence record for each error.
- Include an unknown-error response that stops unsupported improvisation.

## Required deliverable

Create an expected-error table in the Error Recovery and Manual Fallback Template with error category, signal, impact, operator action, owner, event record, retry rule, and manual route.

## Community prompt

Which expected error would be most tempting to ignore because the workflow still appears to run? Share how an operator will detect it and what they must do next.
