# georgebjohnson.com Cloudflare DNS cutover — 2026-07-15

## Initial staging safety state (historical)

At initial staging, public authority was not changed because a complete SiteGround zone export was unavailable and outbound-mail sources had not been confirmed. This historical state was superseded by the operator authorization and final cutover execution documented below.

- Public nameservers remained `ns1.siteground.net` and `ns2.siteground.net`.
- No Namecheap `setCustom` call had yet been made.
- Read-only Namecheap `namecheap.domains.getInfo` returned API status `OK`, provider type `CUSTOM`, and nameservers `ns1.siteground.net` / `ns2.siteground.net`.
- DNSSEC, registrar lock, and SiteGround were not changed.
- No SiteGround NS or SOA records were copied into Cloudflare.
- The untracked `design/` directory was not read, edited, added, or committed.

## Cloudflare zone API evidence

Cloudflare API token verification returned `success: true`, status `active`. A zone lookup in account `5d7429854a0e672061cb53c8316b88ab` initially returned zero matching zones. Zone creation then returned:

- Zone: `georgebjohnson.com`
- Zone ID: `2c23c29e39dc54a290f59494dd3124cd`
- Type/status: `full` / `pending`
- Plan: `Free Website`, price `0`
- Assigned nameservers:
  - `nena.ns.cloudflare.com`
  - `sri.ns.cloudflare.com`
- Original/current authority detected by Cloudflare:
  - `ns1.siteground.net`
  - `ns2.siteground.net`

The zone was created with jump-start disabled to avoid relying on an incomplete automatic import.

## Staged DNS inventory

Cloudflare DNS API returned 13 records after reconciliation. All non-web records are DNS-only. Both web records are proxied and point to the existing Pages project hostname.

| Type | Name | Value | Priority | Proxy |
|---|---|---|---:|---|
| CNAME | `georgebjohnson.com` | `george-b-johnson.pages.dev` | — | Proxied |
| CNAME | `www.georgebjohnson.com` | `george-b-johnson.pages.dev` | — | Proxied |
| A | `mail.georgebjohnson.com` | `34.174.41.163` | — | DNS-only |
| A | `ftp.georgebjohnson.com` | `34.174.41.163` | — | DNS-only |
| A | `autodiscover.georgebjohnson.com` | `34.174.41.163` | — | DNS-only |
| A | `autoconfig.georgebjohnson.com` | `34.174.41.163` | — | DNS-only |
| MX | `georgebjohnson.com` | `mx10.mailspamprotection.com` | 10 | DNS-only |
| MX | `georgebjohnson.com` | `mx20.mailspamprotection.com` | 20 | DNS-only |
| MX | `georgebjohnson.com` | `mx30.mailspamprotection.com` | 30 | DNS-only |
| TXT | `georgebjohnson.com` | `google-site-verification=bONGpojYCsEs_rwU1nWMKp-Cr557c0QAGOsko_MTOS0` | — | DNS-only |
| TXT | `georgebjohnson.com` | `v=spf1 ip4:34.174.41.163 +mx ip4:34.174.193.71 include:georgebjohnson.com.spf.auto.dnssmarthost.net ~all` | — | DNS-only |
| TXT | `_dmarc.georgebjohnson.com` | `v=DMARC1; p=none; aspf=r; adkim=r;` | — | DNS-only |
| CNAME | `default._domainkey.georgebjohnson.com` | `georgebjohnson.com.default.dkim.auto.dnssmarthost.net` | — | DNS-only |

No imported web A/AAAA records were present after zone creation. The reconciler nevertheless checked the apex and `www` for conflicting A/AAAA/CNAME records before creating the Pages CNAMEs; none required deletion.

### SPF adjustment

Current SiteGround SPF is:

```text
v=spf1 +a +mx +ip4:34.174.193.71  include:georgebjohnson.com.spf.auto.dnssmarthost.net ~all
```

Staged Cloudflare SPF is:

```text
v=spf1 ip4:34.174.41.163 +mx ip4:34.174.193.71 include:georgebjohnson.com.spf.auto.dnssmarthost.net ~all
```

This replaces `+a` with the explicit current SiteGround origin `ip4:34.174.41.163`, because after cutover the proxied apex will no longer resolve to the outbound-mail origin. It retains `+mx`, `ip4:34.174.193.71`, the domain-specific dnssmarthost include, and the soft-fail policy.

## Direct authoritative DNS verification

Both newly assigned Cloudflare nameservers were queried directly with non-recursive `dig` requests. Both returned authoritative `NOERROR` answers for all staged records:

- Apex flattened/proxied A answers: `172.66.47.121`, `172.66.44.135`. An apex CNAME query has no CNAME answer because Cloudflare flattens it; the DNS API confirms the proxied CNAME target.
- `www` CNAME: `george-b-johnson.pages.dev`.
- `mail`, `ftp`, `autodiscover`, and `autoconfig` A: `34.174.41.163`.
- MX: priorities 10/20/30 to the three `mx10`/`mx20`/`mx30.mailspamprotection.com` hosts.
- Apex TXT: the Google verification token and adjusted SPF above.
- `_dmarc` TXT and `default._domainkey` CNAME: values above.

Cloudflare returned automatic TTLs as 300 seconds from both assigned nameservers.

## Pages attachment and deployment status

Cloudflare Pages API successfully attached both custom domains to project `george-b-johnson`:

| Domain | Pages domain ID | Current status | Validation | Verification/certificate |
|---|---|---|---|---|
| `georgebjohnson.com` | `a455ecea-33cd-4238-ab6a-2f455cbbdf26` | `pending` | HTTP `pending` | `pending`; API says `CNAME record not set`; CA `google` |
| `www.georgebjohnson.com` | `5f3635b6-a85d-42aa-9179-d3a148b220ec` | `pending` | HTTP `pending` | `pending`; API says `CNAME record not set`; CA `google` |

The message is expected while the public delegation still points to SiteGround even though both Cloudflare nameservers answer the staged records directly. Certificate readiness cannot complete until authority changes.

Current successful production deployment:

- Deployment ID: `1f6b0aa0-58d1-4ad8-ae63-e42b73d7466a`
- URL: `https://1f6b0aa0.george-b-johnson.pages.dev`
- Production alias: `https://george-b-johnson.pages.dev`
- Source commit: `93513d3829cf28dc2ebc30689cb976b893c98afe`
- Deploy stage: `success`

Both the production alias and pinned deployment returned HTTP 200 during staging.

## Canonical-host redirect

Cloudflare dynamic Redirect Rules creation was attempted first but the current token returned HTTP 403 `request is not authorized` for Rulesets writes. The supported Cloudflare Page Rules API was available and created active rule `3348fcad75650281b17fd6402e44c93a`:

```text
www.georgebjohnson.com/* -> https://georgebjohnson.com/$1  (301)
```

The wildcard preserves the path and the forwarding URL carries the original query string when it does not define a replacement query. Runtime testing is blocked while the zone is pending: a forced HTTP request to the staged edge returned Cloudflare 409, and HTTPS has no ready certificate. Verify after activation with a path and multi-parameter query before declaring cutover complete.

No Pages `_redirects` host rule was added because Cloudflare Pages documents domain-level `_redirects` sources as unsupported. No site-code change or redeploy was needed.

## Rollback values

There is nothing to roll back publicly at this stage because registrar authority remains on SiteGround. If a later cutover must be reversed, restore Namecheap nameservers to:

```text
ns1.siteground.net
ns2.siteground.net
```

Current SiteGround web rollback records:

```text
A georgebjohnson.com     34.174.41.163
A www.georgebjohnson.com 34.174.41.163
```

Current SiteGround non-web values are the staged mail/service, MX, Google verification, DMARC, and DKIM values above. The original SPF rollback value is:

```text
v=spf1 +a +mx +ip4:34.174.193.71  include:georgebjohnson.com.spf.auto.dnssmarthost.net ~all
```

## Pre-authorization blockers and cutover gate (superseded)

The original staging gate was as follows; it was superseded by the operator’s explicit residual-risk acceptance below. Before cutover:

1. Obtain a complete SiteGround zone export or equivalent authoritative inventory and reconcile any unknown subdomains, SRV records, verification records, and service records missing from this known-record preflight.
2. Confirm every legitimate outbound-mail source, especially whether `34.174.41.163`, `34.174.193.71`, the MX hosts, and the dnssmarthost include are all still required.
3. Have the operator approve the final staged inventory and cutover window.
4. After any future nameserver change, wait for the zone and both Pages domains/certificates to become active, then verify DNS via multiple public resolvers, mail records, apex HTTPS, and the `www` 301 with path/query preservation.

Do not alter DNSSEC, registrar lock, or SiteGround as part of that follow-up unless separately approved.

## Final cutover authorization

- UTC timestamp: `2026-07-15T21:08:34Z`
- Exact operator risk acceptance: `Proceed with the 13 discovered records`, accepting residual unknown-record risk.

## Final cutover execution and validation

This section supersedes the historical staging-only state and pre-authorization gate above.

### Pre-mutation gate

Immediately after recording the authorization at `2026-07-15T21:08:34Z`, read-only preflight confirmed:

- Cloudflare zone `2c23c29e39dc54a290f59494dd3124cd` was still `pending`, assigned only `nena.ns.cloudflare.com` and `sri.ns.cloudflare.com`, and reported the original nameservers as `ns1.siteground.net` and `ns2.siteground.net`.
- The Cloudflare DNS API returned exactly the verified 13-record inventory documented above, with both web CNAMEs proxied and all 11 mail/service/verification records DNS-only.
- Both Pages domains remained attached to project `george-b-johnson`; both were pending before delegation changed.
- The rollback nameservers and web-only fallback A value `34.174.41.163` were already documented above.
- Namecheap read-only `namecheap.domains.getInfo` returned API status `OK`, provider type `CUSTOM`, and the two SiteGround nameservers before mutation.

### Registrar mutation

At `2026-07-15T21:09:25Z`, the approved Namecheap command was sent:

```text
namecheap.domains.dns.setCustom
SLD=georgebjohnson
TLD=com
Nameservers=nena.ns.cloudflare.com,sri.ns.cloudflare.com
```

Sanitized API response:

```text
ApiResponse Status=OK
Errors=[]
DomainDNSSetCustomResult Domain=georgebjohnson.com Updated=true
```

Immediate `namecheap.domains.getInfo` readback returned API status `OK`, no errors, provider type `CUSTOM`, and exactly:

```text
nena.ns.cloudflare.com
sri.ns.cloudflare.com
```

During the final registrar readback at approximately `2026-07-15T21:29:48Z`, the same-value `setCustom` request was idempotently reasserted with exactly those two Cloudflare nameservers; it returned `OK` / `Updated=true` and introduced no different registrar value. No other registrar setting was changed. SiteGround hosting and its legacy zone were left intact. DNSSEC was not enabled: the `.com` parent returned no DS record, and the Cloudflare DNSSEC API reported `disabled`.

### Cloudflare and Pages activation window

Polling covered `2026-07-15T21:10:13Z` through a final API check at `2026-07-15T21:32:03Z`:

- The Cloudflare zone changed from `pending` to `active` by `2026-07-15T21:10:46Z` and still had exactly 13 DNS records at the end of the window.
- Both Pages domain ownership/verification states changed to `active`.
- `www.georgebjohnson.com` reached full Pages status `active`, verification `active`, and HTTP/certificate validation `active` by `2026-07-15T21:25:05Z`.
- The apex Pages API remained status `pending` with verification `active`, HTTP validation `pending`, no verification error, and certificate authority `google` at `2026-07-15T21:32:03Z`.
- Despite that lagging apex Pages API state, direct requests to the newly authoritative Cloudflare edge completed a valid TLS handshake and returned the correct Pages deployment. The served certificate covered `georgebjohnson.com` and `*.georgebjohnson.com`, was issued by Google Trust Services, and was valid during testing. There was no web outage, so the web-only A-record fallback and full nameserver rollback were not used.

### Delegation and DNS propagation observed

The `.com` parent referral and a fresh `dig +trace` returned the current authoritative delegation:

```text
nena.ns.cloudflare.com
sri.ns.cloudflare.com
```

Direct non-recursive queries to both assigned Cloudflare nameservers returned the same authoritative records: Cloudflare web-edge A answers for apex/`www`; the three expected MX records; the adjusted SPF; Google verification; DKIM; DMARC; and `mail`, `ftp`, `autodiscover`, and `autoconfig` at `34.174.41.163`.

At the `2026-07-15T21:28:35Z` public-resolver snapshot, propagation was still mixed:

| Source | NS view | Web/SPF view | Interpretation |
|---|---|---|---|
| `.com` parent | Cloudflare | N/A | Current delegation/source of truth |
| `nena` / `sri` direct | Cloudflare authoritative | Cloudflare edge; adjusted SPF | Current authoritative zone |
| System resolver | SiteGround | SiteGround A and original SPF | Stale cached delegation |
| `1.1.1.1` | Cloudflare in the first snapshot, but five immediate samples still returned SiteGround | Apex current while `www` and SPF were stale in that snapshot | Mixed anycast/cache propagation |
| `8.8.8.8` | Cloudflare in the first snapshot; four of five immediate samples were current and one stale | `www` and SPF current while apex A was stale in that snapshot | Mixed anycast/cache propagation |

A final `2026-07-15T21:32:18Z` snapshot still showed the system resolver on SiteGround; `1.1.1.1` had a stale SiteGround NS/apex view but current Cloudflare `www` and adjusted SPF answers; and `8.8.8.8` returned Cloudflare NS, web-edge A, and adjusted SPF answers throughout that snapshot. The `.com` parent continued to return only the two Cloudflare nameservers.

The differing records from the public resolvers are cached SiteGround answers, not the current parent delegation. Direct queries proved the retained SiteGround zone still answered its prior records, as required for rollback safety, but it was no longer parent-delegated. The old authoritative NS RRset had an 86,400-second TTL and the new parent referral showed 172,800 seconds, so uneven resolver convergence is expected during the residual cache window.

### Live web and mail validation

At `2026-07-15T21:29:14Z`, TLS-valid requests forced to the currently authoritative Cloudflare edge verified:

- Apex HTTP returned `301` to the same HTTPS URL; apex HTTPS returned `200`.
- Both HTTP and HTTPS `www` requests returned `301` to apex while preserving `/cutover-check/path?one=1&two=two` exactly.
- `/`, `/about/`, `/projects/`, `/my-books/`, `/insights/`, `/community-consulting/`, `/builders-lab/`, and `/privacy/` each returned `200` HTML.
- `/robots.txt`, `/sitemap.xml`, and `/images/george-b-johnson-og.jpg` each returned `200` with the expected text, XML, and JPEG content types.
- The apex robots meta was `index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1`; no apex `noindex` was present. The OG image meta referenced the tested image URL.
- HTTPS included the deployed CSP, Permissions Policy, Referrer Policy, one-year HSTS, `X-Content-Type-Options: nosniff`, and `X-Frame-Options: SAMEORIGIN` headers.
- Local `npm run build` completed successfully with all nine static pages generated. No site deployment was needed for the registrar-only cutover.

Email DNS on both Cloudflare authoritative nameservers returned:

- MX priorities `10`, `20`, and `30` for `mx10`, `mx20`, and `mx30.mailspamprotection.com`.
- The adjusted SPF containing explicit `ip4:34.174.41.163`, `+mx`, `ip4:34.174.193.71`, and the dnssmarthost include.
- The expected DKIM CNAME and a resolvable downstream DKIM public key.
- DMARC `v=DMARC1; p=none; aspf=r; adkim=r;`.
- `mail`, `autodiscover`, and `autoconfig` A records at `34.174.41.163`.
- All three MX hosts and the downstream SPF/DKIM targets resolved through both `1.1.1.1` and `8.8.8.8`.

### Final status and residual follow-up

The registrar and `.com` parent now delegate to Cloudflare; the Cloudflare zone is active; authoritative web and mail DNS are correct; and apex/`www` HTTP and HTTPS are live on Pages. No rollback was performed.

Residual follow-up:

1. Continue polling until the apex Pages custom-domain API changes from `pending/active/pending` to fully `active`, even though valid HTTPS and correct content are already live at the authoritative edge.
2. Recheck system, `1.1.1.1`, and `8.8.8.8` after the old SiteGround delegation/record caches expire and confirm consistent Cloudflare NS, web A, and adjusted SPF answers.
3. Retain SiteGround hosting/zone and the documented rollback values until propagation and a suitable post-cutover observation period complete.
4. Residual unknown-record risk remains explicitly accepted under the operator’s exact authorization recorded above.
