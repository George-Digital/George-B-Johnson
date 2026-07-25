# YouTube `/go/skool` redirect to Builders Lab

Date: 2026-07-23
Current behavior updated: 2026-07-25

## Current short-link behavior

The earlier query-preserving redirect described in this note has been superseded. `/go/skool`, `/go/skool/`, and `/go/skool/index.html` now return a one-hop `302` to exactly:

```text
https://www.skool.com/local-seo-engineering-7047/about
```

The server-side Function preserves only the approved lowercase Meta campaign UTM set. YouTube, email, misspelled, arbitrary, duplicate, malformed, and destination-override parameters are discarded. Existing untagged YouTube short links continue to reach Builders Lab, but the local redirect no longer forwards YouTube attribution parameters.

## Historical release record

The original static `_redirects` implementation was committed as `f64e1b6` and deployed as `e03d7c15`. It preserved the complete query string and is no longer the active contract. `public/_redirects` no longer owns the Skool route; the narrow Cloudflare Pages Function is the current source of truth.

The generic `/go` and `/go/` aliases remain absent.
