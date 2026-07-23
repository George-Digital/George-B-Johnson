# YouTube `/go` redirect to Builders Lab

Date: 2026-07-23

## Change

Added temporary Cloudflare Pages redirects for both URL forms:

- `https://georgebjohnson.com/go`
- `https://georgebjohnson.com/go/`

Destination:

- `https://www.skool.com/local-seo-engineering-7047/`

The rules live in `public/_redirects` and use HTTP `302` so the YouTube short-link destination can be changed later without a permanently cached redirect.

## Deployment

- Cloudflare Pages project: `george-b-johnson`
- Code commit: `a117290` (`fix: add /go Skool redirect`)
- Deployment: `d11e4eb9-b338-4ee8-a8a9-a0c4b2b7a6e3`
- Preview URL: `https://d11e4eb9.george-b-johnson.pages.dev`

## Verification

The Astro production build passed, and `dist/_redirects` matched `public/_redirects`.

Cloudflare Pages local runtime returned the intended `302` for `/go` and `/go/`.

Post-deployment checks returned the intended redirect for repeated GET and HEAD requests:

```text
/go  -> 302 https://www.skool.com/local-seo-engineering-7047/
/go/ -> 302 https://www.skool.com/local-seo-engineering-7047/
```

Query strings are preserved:

```text
/go?utm_source=youtube -> 302 https://www.skool.com/local-seo-engineering-7047/?utm_source=youtube
```

The existing `/go/skool` redirect remains unchanged and continues to point to the Skool `/about` URL.

Automated requests to the final Skool destination received bot-protection responses, so browser availability should be confirmed manually before placing the short link in the YouTube description.
