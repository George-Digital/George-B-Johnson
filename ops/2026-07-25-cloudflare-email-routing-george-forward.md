# georgebjohnson.com Cloudflare Email Routing staging — 2026-07-25

## Approved scope and safeguard outcome

Approved route: `george@georgebjohnson.com` → `georgej@georgedigital.net` through Cloudflare Email Routing.

The destination is already Cloudflare-verified, so no new verification email was triggered. Cloudflare Email Routing was **not enabled** and no MX, SPF, DMARC, DKIM, SiteGround, registrar, or Encharge record was changed. The existing inbound route is a live SiteGround-backed legacy mail service, not a safely removable stale MX set. Because the provider mailbox/alias inventory is unavailable, a domain-wide MX cutover would risk disrupting other addresses.

A single exact-address Cloudflare rule was therefore staged **disabled**. It cannot receive traffic while both the rule and zone Email Routing remain disabled. No test message was sent, Encharge was not activated, and no ad or paid action occurred.

## Configuration and repository preflight

- AtsKaleSEO root `.env` and `cli/.env` were inspected without displaying credential values. A valid server-held Cloudflare API token and Namecheap API credentials are configured.
- Managed-site sources checked: `cli/sites/georgebjohnson.yaml` and the `georgebjohnson.com` entry in `cli/admin-sites.json`.
- Site repository: `/home/heman1320/GeorgeBJohnson`, branch `main`.
- Pre-change repository HEAD and `origin/main`: `5569d12c2a2a0c5c008e6e92e44b0a7deeefb028`.
- The repo had 51 unrelated dirty status entries under `design/`, `opendesign/`, `src/`, and `tests/`. None was read for this mail change, edited, staged, or included in the ops-note commit.
- Prior mail/DNS source checked: `ops/2026-07-15-cloudflare-dns-cutover.md`, which explicitly preserved SiteGround mail hosts, MX, SPF, and DKIM during the Cloudflare nameserver cutover.

## Cloudflare account and zone preflight

Cloudflare API token verification returned `success: true`, `status: active`.

- Account ID: `5d7429854a0e672061cb53c8316b88ab`
- Zone: `georgebjohnson.com`
- Zone ID: `2c23c29e39dc54a290f59494dd3124cd`
- Zone state: `active`, full zone, not paused, Free Website plan
- Authoritative nameservers: `nena.ns.cloudflare.com`, `sri.ns.cloudflare.com`
- Original nameservers recorded by Cloudflare: `ns1.siteground.net`, `ns2.siteground.net`

Pre-change Email Routing API state:

- `enabled: false`
- `status: unconfigured`
- `synced: true`
- Existing rule: disabled default catch-all/drop only

## Registrar state

Read-only Namecheap API calls returned `Status=OK` with no errors.

- DNS provider type: `CUSTOM`
- Namecheap DNS in use: `false`
- Nameservers: `nena.ns.cloudflare.com`, `sri.ns.cloudflare.com`
- Registrar metadata reports email type `FWD`, but Namecheap is not authoritative and therefore does not control current public mail DNS.
- No registrar mutation, DNSSEC change, lock change, or SiteGround change was made.

## Destination verification and target-domain mail readiness

Cloudflare endpoint checked: `GET /accounts/{account_id}/email/routing/addresses`.

- Destination: `georgej@georgedigital.net`
- Destination ID: `9fb75ee7164048c9922d3edd20e2c6fe`
- Status: verified
- Verified at: `2026-05-07T05:16:04.626174Z`

Public MX for `georgedigital.net` matched through `1.1.1.1`, `8.8.8.8`, and `9.9.9.9`:

```text
1  aspmx.l.google.com
5  alt1.aspmx.l.google.com
5  alt2.aspmx.l.google.com
10 alt3.aspmx.l.google.com
10 alt4.aspmx.l.google.com
```

All five Google MX hostnames resolved publicly through both Cloudflare and Google public resolvers.

Human verification action: **none**. The destination was previously verified by its owner; no verification message or link is pending.

## Legacy MX determination

The current `mailspamprotection.com` MX records are treated as **active legacy SiteGround service, not merely stale**, based on converging provider and configuration evidence:

1. The July 15 cutover note explicitly identifies and preserves the SiteGround MX, mail/autodiscover/autoconfig hosts, outbound SPF sources, and SiteGround DKIM.
2. Cloudflare DNS record comments identify the three MX records as `SiteGround mail routing preserved for cutover`, the mail hosts as preserved SiteGround service, and the default DKIM as preserved SiteGround DKIM.
3. SiteGround-specific SPF and DKIM downstream targets still resolve with a live SPF policy and DKIM public key.
4. The DNS-only legacy origin `34.174.41.163` currently accepts SMTPS, SMTP submission, IMAPS, and POP3S connections. Its SMTP submission banner identifies `siteground.biz`, and the encrypted services present a currently valid certificate for `georgebjohnson.com` / `*.georgebjohnson.com`.
5. All three `mailspamprotection.com` MX hosts currently resolve.

This proves an intentionally configured and reachable provider mail stack. It does not expose the provider's mailbox, alias, forwarder, or catch-all inventory, so removing its MX records is not route-safe yet.

## Safe staged rule

Documented endpoint used: `POST /zones/{zone_id}/email/routing/rules`.

- Rule ID: `6e2d66aa8e28436093d87fe8974ab04b`
- Name: `Forward george to georgej (staged)`
- Enabled: `false`
- Priority: `0`
- Matcher: literal `to` = `george@georgebjohnson.com`
- Action: forward to `georgej@georgedigital.net`

The existing default catch-all/drop rule remains disabled and unchanged.

## Previous and current public mail DNS

No DNS mutation occurred. Before and after staging, Cloudflare API, both authoritative nameservers, and `1.1.1.1`, `8.8.8.8`, and `9.9.9.9` returned the same values:

```text
MX 10 georgebjohnson.com mx10.mailspamprotection.com
MX 20 georgebjohnson.com mx20.mailspamprotection.com
MX 30 georgebjohnson.com mx30.mailspamprotection.com
TXT georgebjohnson.com "v=spf1 ip4:34.174.41.163 +mx ip4:34.174.193.71 include:georgebjohnson.com.spf.auto.dnssmarthost.net ~all"
TXT _dmarc.georgebjohnson.com "v=DMARC1; p=none; aspf=r; adkim=r;"
CNAME default._domainkey.georgebjohnson.com georgebjohnson.com.default.dkim.auto.dnssmarthost.net
A mail.georgebjohnson.com 34.174.41.163
A autodiscover.georgebjohnson.com 34.174.41.163
A autoconfig.georgebjohnson.com 34.174.41.163
```

There is exactly one apex SPF record. No duplicate SPF was added.

All seven existing Encharge records remain unchanged: `encverify`, `en1._domainkey`, `m1._domainkey`, `maillinkforward`, `maillinkforwarding`, `smtpapi`, and `smtpapi2`. Encharge remains inactive/pending per existing campaign ops notes.

## Exact human/provider action required before activation

In SiteGround for `georgebjohnson.com`, open **Site Tools → Email → Accounts** and **Site Tools → Email → Forwarders** (including aliases and any catch-all/default address), then:

1. Export or record every inbound mailbox, alias, forwarder, and catch-all currently dependent on SiteGround MX.
2. Confirm whether any address other than `george@georgebjohnson.com` must continue receiving mail.
3. If other routes exist, provide and verify a destination for each before the MX cutover, or keep SiteGround as the inbound provider.
4. If no other routes exist and SiteGround inbound mail can be retired, explicitly approve the domain-wide MX cutover window.

Only after that inventory/approval should the operator enable the staged exact-address rule, reconcile the single SPF record with Cloudflare's documented include without creating a second SPF record, add Cloudflare's required DKIM record, replace the three SiteGround MX records with Cloudflare Email Routing MX records, enable Email Routing, and verify API/public DNS. Existing DMARC and Encharge records must remain unchanged unless a provider's documented exact requirement is separately reviewed.

## Current status and rollback

Current safe state:

- Destination: verified
- Exact custom rule: created but disabled
- Cloudflare Email Routing: disabled / unconfigured / synced
- Inbound MX: unchanged SiteGround/mailspamprotection service
- SPF/DMARC: unchanged
- Encharge: unchanged and not activated
- Test mail: not sent

Rollback of this staging-only change: delete disabled rule `6e2d66aa8e28436093d87fe8974ab04b`. No DNS or registrar rollback is currently needed.

If a later Cloudflare cutover must be reversed, disable Cloudflare Email Routing, disable/delete the custom rule, restore the three exact SiteGround MX records and the exact single SPF value documented above, remove only Cloudflare Email Routing's own DKIM/SPF additions, and retain the existing SiteGround mail hosts/default DKIM, DMARC, Google verification, and all Encharge records. Verify restored API state and public DNS through both authoritative nameservers plus `1.1.1.1`, `8.8.8.8`, and `9.9.9.9`.
