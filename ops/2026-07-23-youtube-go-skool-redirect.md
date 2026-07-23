# YouTube `/go/skool` redirect to Builders Lab

Date: 2026-07-23

## Final short link

Use this tracked URL in the YouTube video description:

```text
https://georgebjohnson.com/go/skool?utm_source=yt&utm_campaign=intro
```

The standard parameter name is `utm_source`. The originally supplied `utmsource` spelling is also preserved by the redirect, but most analytics platforms will not classify it as a standard UTM source.

## Redirect behavior

All three path forms use a temporary HTTP `302` redirect to the supplied Skool community URL:

```text
/go/skool/index.html -> https://www.skool.com/local-seo-engineering-7047/
/go/skool/           -> https://www.skool.com/local-seo-engineering-7047/
/go/skool            -> https://www.skool.com/local-seo-engineering-7047/
```

Cloudflare Pages preserves query parameters, so the tracked link resolves to:

```text
https://www.skool.com/local-seo-engineering-7047/?utm_source=yt&utm_campaign=intro
```

The mistakenly added general `/go` and `/go/` aliases are removed from the corrected source and build. They will stop resolving after the corrected deployment replaces the current production version.

## Implementation and verification

- Source file: `public/_redirects`
- Cloudflare Pages project: `george-b-johnson`
- Redirect status: `302`, allowing the destination to change later
- No HTML page or sitemap entry was created
- Astro production build passed
- `dist/_redirects` matched `public/_redirects`
- Local Cloudflare Pages runtime preserved the redirect destination and query string
- Local `/go` and `/go/` requests returned `404`, confirming the generic aliases are absent from the corrected build
- Corrected production deployment and post-deployment GET/HEAD verification are pending

Automated requests to the final Skool destination may receive bot-protection responses. The redirect is locally verified; production behavior and the final Skool page should be checked after deployment before the YouTube description is published.
