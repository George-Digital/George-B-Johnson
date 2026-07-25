# Builders Lab verifier remediation

Date: 2026-07-25

## Scope and safeguards

This remediation replaces broad query forwarding with a fixed-host Cloudflare Pages Function, removes browser click-ID handling, aligns campaign and privacy documentation, and resolves the Cloudflare Web Analytics CSP conflict. It does not activate Encharge, publish a form, connect Meta, launch ads, or authorize spend.

Before edits, `main` was at `657a1613a9fe30b3bbee8977da2209ab9b242383` with exactly 49 pre-existing short-status entries under `design/` and `opendesign/`. Their status, mode, size, and SHA-256 state was recorded outside the repository in `/tmp/george-builders-lab-unrelated-baseline.json` (manifest SHA-256 `1ec66e7bf1c9dde8dcb655c572a1181909786483aa41466b4975be249b11194f`). These paths are excluded from staging and the remediation commit:

```text
 M design/skool/builders-lab-course-plan.md
 M design/skool/builders-lab-launch-playbook.md
 D design/skool/courses/01-ai-systems-builder-sprint/Course Art/README.md
 D design/skool/courses/01-ai-systems-builder-sprint/Course Art/ai-systems-builder-sprint-cover-1280x720.png
 D design/skool/courses/01-ai-systems-builder-sprint/README.md
 D design/skool/courses/01-ai-systems-builder-sprint/Start Here/01 - Welcome and the Builders Lab standard.md
 D design/skool/courses/01-ai-systems-builder-sprint/Start Here/02 - Choose your first build.md
 D design/skool/courses/01-ai-systems-builder-sprint/Start Here/03 - Create your build-log thread.md
 D design/skool/courses/01-ai-systems-builder-sprint/Start Here/Resources/Build Log Template.md
 D design/skool/courses/01-ai-systems-builder-sprint/Start Here/Resources/System Pack Template.md
 D design/skool/courses/01-ai-systems-builder-sprint/Video Scripts/01 - Start Here anchor video script.md
 D design/skool/courses/01-ai-systems-builder-sprint/Video Scripts/02 - Week 1 — Choose the Problem anchor video script.md
 D design/skool/courses/01-ai-systems-builder-sprint/Video Scripts/03 - Week 2 — Extract the Expertise anchor video script.md
 D design/skool/courses/01-ai-systems-builder-sprint/Video Scripts/04 - Week 3 — Build the First Workflow anchor video script.md
 D design/skool/courses/01-ai-systems-builder-sprint/Video Scripts/05 - Week 4 — Package, Test, and Revise anchor video script.md
 D design/skool/courses/01-ai-systems-builder-sprint/Week 1 — Choose the Problem/01 - Start with repeated pain, not a tool.md
 D design/skool/courses/01-ai-systems-builder-sprint/Week 1 — Choose the Problem/02 - Define one user and one useful output.md
 D design/skool/courses/01-ai-systems-builder-sprint/Week 1 — Choose the Problem/03 - Set a narrow four-week finish line.md
 D design/skool/courses/01-ai-systems-builder-sprint/Week 2 — Extract the Expertise/01 - Extract your decision rules.md
 D design/skool/courses/01-ai-systems-builder-sprint/Week 2 — Extract the Expertise/02 - Create the minimum useful SOP.md
 D design/skool/courses/01-ai-systems-builder-sprint/Week 2 — Extract the Expertise/03 - Define inputs, constraints, and edge cases.md
 D design/skool/courses/01-ai-systems-builder-sprint/Week 2 — Extract the Expertise/04 - Build a quality rubric.md
 D design/skool/courses/01-ai-systems-builder-sprint/Week 2 — Extract the Expertise/Resources/Decision Rules and Quality Rubric Template.md
 D design/skool/courses/01-ai-systems-builder-sprint/Week 3 — Build the First Workflow/01 - Choose the simplest build path.md
 D design/skool/courses/01-ai-systems-builder-sprint/Week 3 — Build the First Workflow/02 - Build the prompt stack.md
 D design/skool/courses/01-ai-systems-builder-sprint/Week 3 — Build the First Workflow/03 - Add examples and constraints.md
 D design/skool/courses/01-ai-systems-builder-sprint/Week 3 — Build the First Workflow/04 - Create a repeatable runbook.md
 D design/skool/courses/01-ai-systems-builder-sprint/Week 3 — Build the First Workflow/Resources/Prompt Stack and Runbook Template.md
 D design/skool/courses/01-ai-systems-builder-sprint/Week 4 — Package, Test, and Revise/01 - Give the system a simple home.md
 D design/skool/courses/01-ai-systems-builder-sprint/Week 4 — Package, Test, and Revise/02 - Run a small manual test.md
 D design/skool/courses/01-ai-systems-builder-sprint/Week 4 — Package, Test, and Revise/03 - Ask better feedback questions.md
 D design/skool/courses/01-ai-systems-builder-sprint/Week 4 — Package, Test, and Revise/04 - Revise and complete the System Pack.md
 D design/skool/courses/01-ai-systems-builder-sprint/Week 4 — Package, Test, and Revise/Resources/Test and Revision Template.md
 M design/skool/courses/README.md
 M design/skool/courses/VIDEO-PRODUCTION-INDEX.md
 M design/skool/generate_course_cover.py
 M opendesign/manifest.json
 D opendesign/mockups/skool-course-cover-sprint/ai-systems-builder-sprint-cover-1280x720.png
 D opendesign/mockups/skool-course-cover-sprint/index.html
 M opendesign/mockups/skool-course-upload-dashboard/README.md
 M opendesign/mockups/skool-course-upload-dashboard/app.js
 M opendesign/mockups/skool-course-upload-dashboard/build-course-data.mjs
 M opendesign/mockups/skool-course-upload-dashboard/course-data.js
 M opendesign/mockups/skool-course-upload-dashboard/index.html
 M opendesign/mockups/skool-course-upload-dashboard/styles.css
?? design/skool/Video Scripts/
?? design/skool/archive/AI Systems Builder Sprint — Skool Upload Package v1/
?? design/skool/courses/01-client-knowledge-portal/
?? opendesign/mockups/skool-course-cover-client-knowledge-portal/
```

## Redirect and attribution contract

- `/go/skool`, `/go/skool/`, and `/go/skool/index.html` return a one-hop `302` to exactly `https://www.skool.com/local-seo-engineering-7047/about`.
- The Function forwards the fixed lowercase values `utm_source=meta`, `utm_medium=paid_social`, and `utm_campaign=builders_lab_direct_membership` only as one complete valid set.
- Optional `utm_content` and `utm_term` values must match `^[a-z0-9._~-]{1,100}$`.
- Platform click IDs, arbitrary or uppercase keys, malformed and overlong values, duplicates, control characters, and `next`/URL overrides are discarded.
- Duplicate allowlisted keys suppress the complete attribution set rather than selecting an attacker-controlled first or last value.
- The browser and Function share the same UTM sanitizer. CTA clicks emit `skool_cta_click`; a click never emits or implies a membership event.
- Google Analytics page locations and referrers are sent without URL query strings. No click identifier is stored in session storage or carried to Skool.

## Cloudflare Web Analytics and CSP decision

A browser-user-agent response contained Cloudflare's injected module at `https://static.cloudflareinsights.com/beacon.min.js/v4513226cdae34746b4dedf0b4dfa099e1781791509496`. Chromium reported that the script violated `script-src` and blocked it. The loaded beacon source identifies `https://cloudflareinsights.com/cdn-cgi/rum` as its measurement endpoint.

The Cloudflare API confirmed that the `georgebjohnson.com` Web Analytics site has automatic installation and its ruleset enabled. An API attempt to disable it returned Cloudflare error `10000` (`403 Authentication error`), so the available token could read but not edit that account-level setting. The implementation therefore intentionally retains Cloudflare Web Analytics and adds only its two exact required origins:

- `script-src`: `https://static.cloudflareinsights.com`
- `connect-src`: `https://cloudflareinsights.com`

No Cloudflare wildcard was added. The privacy page now accurately identifies Cloudflare Web Analytics, its aggregate measurement purpose, automatic script injection, and Cloudflare's stated no-cookie/no-local-storage/no-fingerprinting design.

## DNS policy correction

Live authoritative DNS plus `1.1.1.1` and `8.8.8.8` all returned:

```text
v=DMARC1; p=none; aspf=r; adkim=r;
```

Documentation now calls this a monitoring-only `p=none` policy. No DMARC or other DNS record was changed.

## Local validation

- `npm test`: 9 regression tests passed.
- `npm run build`: 9 Astro pages built successfully.
- `wrangler pages dev`: all three supported short-link forms returned the expected fixed-host `302`; `/go/skool/evil`, `/go`, and `/go/` returned `404`.
- Local internal-link check: 10 unique internal targets passed; 10 fragment references and 6 sitemap routes passed.
- Chromium desktop `1440x900` and mobile `390x844`: no console or CSP errors, no horizontal overflow, no click-ID session storage, correct sanitized CTA paths, and the mobile menu opened correctly.
- Axe Core 4.10.3 WCAG 2 A/AA and 2.1 A/AA checks: 0 violations on desktop and mobile.
- Browser network assertion: Google Analytics page-view requests contained the page path but no query string or click ID.
- Human buyer read-through: the public Builders Lab page still gives a clear audience, working standard, fit decision, and Skool next step. The Privacy page clearly distinguishes site analytics from the fixed-destination campaign redirect. Neither page contains internal activation, provenance, or routing instructions.

## Activation and provider boundaries

Encharge remains inactive. No email form, signup endpoint, Meta Pixel, Meta connection, ad launch, or spend was added. Encharge workspace rename, sender/domain approval, double-opt-in Flow, confirmed-recipient segmentation, unsubscribe testing, and any future ad approval remain human/provider-gated work.
