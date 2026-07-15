# georgebjohnson.com Cloudflare DNS cutover staging — 2026-07-15

## Safety state

This is **staging only**. Public authority was not changed because a complete SiteGround zone export was unavailable and outbound-mail sources have not been confirmed.

- Public nameservers remain `ns1.siteground.net` and `ns2.siteground.net`.
- No Namecheap `setCustom` call was made.
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

## Remaining blockers and cutover gate

Do **not** change Namecheap nameservers yet. Before cutover:

1. Obtain a complete SiteGround zone export or equivalent authoritative inventory and reconcile any unknown subdomains, SRV records, verification records, and service records missing from this known-record preflight.
2. Confirm every legitimate outbound-mail source, especially whether `34.174.41.163`, `34.174.193.71`, the MX hosts, and the dnssmarthost include are all still required.
3. Have the operator approve the final staged inventory and cutover window.
4. After any future nameserver change, wait for the zone and both Pages domains/certificates to become active, then verify DNS via multiple public resolvers, mail records, apex HTTPS, and the `www` 301 with path/query preservation.

Do not alter DNSSEC, registrar lock, or SiteGround as part of that follow-up unless separately approved.
