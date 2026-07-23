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

The mistakenly added general `/go` and `/go/` aliases were removed from the corrected source, build, and production deployment.

## Implementation and verification

- Source file: `public/_redirects`
- Cloudflare Pages project: `george-b-johnson`
- Corrected source commit: `f64e1b6`
- Corrected deployment: `e03d7c15` (`https://e03d7c15.george-b-johnson.pages.dev`)
- Redirect status: `302`, allowing the destination to change later
- No HTML page or sitemap entry was created
- Astro production build passed
- `dist/_redirects` matched `public/_redirects`
- Local Cloudflare Pages runtime preserved the redirect destination and query string
- Local and production `/go` and `/go/` requests returned `404`, confirming the generic aliases are absent
- Production `/go/skool` GET checks returned `302` to the Skool root and preserved both the supplied and standard tracking parameters

Automated requests to the final Skool destination may receive bot-protection responses. The production redirect is verified; the final Skool page should also be opened manually before the YouTube description is published.
