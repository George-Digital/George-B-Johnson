# georgebjohnson.com Cloudflare Email Routing cutover — 2026-07-25

## Final disposition

The explicitly approved production cutover is complete.

- Active exact route: `george@georgebjohnson.com` → verified destination `georgej@georgedigital.net`
- Cloudflare Email Routing: `enabled: true`, `status: unlocked`, `synced: true`
- Exact custom rule: enabled
- Catch-all/drop rule: disabled
- Inbound MX: three provider-generated Cloudflare Email Routing hosts only
- Apex SPF: exactly one reconciled record; legacy outbound authorizations were retained and only Cloudflare's required include was added
- Cloudflare routing DKIM: installed
- DMARC, SiteGround service/DKIM evidence, Google verification, and all seven Encharge records: unchanged
- Encharge activation, marketing sends, test email, Meta ads, registrar settings, unrelated DNS, and SiteGround account/service state: untouched

The final mutation window was `2026-07-25T14:54:39Z`–`2026-07-25T14:54:44Z`. API verification was repeated at `2026-07-25T14:56:04Z` and after Cloudflare's synchronization state settled.

Receipt remains the only human acceptance check: the operator should send an ordinary external message to `george@georgebjohnson.com` and confirm it reaches `georgej@georgedigital.net`. No message was sent during this run because the project has no clearly authorized, side-effect-free transactional test mechanism.

## Approval and protected scope

Approval covered the domain-wide SiteGround MX replacement, Cloudflare Email Routing activation, the already-staged exact route, necessary Cloudflare routing DNS, single-SPF reconciliation, and documented rollback.

Approval did not cover Encharge activation, campaigns or marketing sends, Meta ads, unrelated DNS, registrar changes, SiteGround cancellation, or deletion of historical provider evidence. Those exclusions were observed.

## Repository preflight and work protection

- Managed-site config: `/home/heman1320/AtsKaleSEO/cli/sites/georgebjohnson.yaml`
- Site repository: `/home/heman1320/GeorgeBJohnson`
- Branch: `main`
- Pre-cutover HEAD and `origin/main`: `2be850a`
- The site repo had unrelated pre-existing modified/deleted/untracked work under `design/`, `opendesign/`, `src/`, and `tests/`.
- During the cutover, an independent concurrent commit advanced local/remote `main` to `10e998f` (`Update Builders Lab membership offer`) with only `src/pages/builders-lab/index.astro` and `tests/builders-lab-campaign.test.js`. This mail run did not create, amend, stage, reset, deploy, or otherwise touch that commit.
- No unrelated file was edited, staged, reset, cleaned, or deployed by this mail run. This ops note is the only cutover repository artifact and will be committed separately on top of `10e998f`.
- Server-held Cloudflare credentials were loaded without printing or storing the credential value.

## Cloudflare zone and destination preflight

Read-only API snapshot: `2026-07-25T14:46:23Z`.

- Token verification: HTTP `200`, `success: true`, token status active
- Zone: `georgebjohnson.com`
- Zone ID: `2c23c29e39dc54a290f59494dd3124cd`
- Account ID: `5d7429854a0e672061cb53c8316b88ab`
- Zone: active, full, not paused
- Authoritative nameservers: `nena.ns.cloudflare.com`, `sri.ns.cloudflare.com`
- Original nameservers retained in Cloudflare metadata: `ns1.siteground.net`, `ns2.siteground.net`
- Destination ID: `9fb75ee7164048c9922d3edd20e2c6fe`
- Destination: `georgej@georgedigital.net`
- Destination status: verified
- Destination verified at: `2026-05-07T05:16:04.626174Z`

Pre-change Email Routing settings:

```text
enabled: false
status: unconfigured
synced: true
admin_locked: false
```

All pre-change rules:

1. Custom rule `6e2d66aa8e28436093d87fe8974ab04b`
   - Name: `Forward george to georgej (staged)`
   - Literal `to`: `george@georgebjohnson.com`
   - Forward: `georgej@georgedigital.net`
   - Enabled: `false`
   - Priority: `0`
2. Default catch-all `48247db54ada4d4eba277ca28ccf006f`
   - Matcher: `all`
   - Action: `drop`
   - Enabled: `false`
   - Priority: `2147483647`

## Before records

Cloudflare API, both authoritative nameservers, `1.1.1.1`, `8.8.8.8`, and `9.9.9.9` agreed at the `2026-07-25T14:47:14Z` pre-change snapshot.

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
A ftp.georgebjohnson.com 34.174.41.163
```

Cloudflare's documented `GET /zones/{zone_id}/email/routing/dns` endpoint generated these exact routing requirements before mutation:

```text
MX 72 georgebjohnson.com route1.mx.cloudflare.net
MX 10 georgebjohnson.com route2.mx.cloudflare.net
MX 35 georgebjohnson.com route3.mx.cloudflare.net
TXT cf2024-1._domainkey.georgebjohnson.com "v=DKIM1; h=sha256; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAiweykoi+o48IOGuP7GR3X0MOExCUDY/BCRHoWBnh3rChl7WhdyCxW3jgq1daEjPPqoi7sJvdg5hEQVsgVRQP4DcnQDVjGMbASQtrY4WmB1VebF+RPJB2ECPsEDTpeiI5ZyUAwJaVX7r6bznU67g7LvFq35yIo4sdlmtZGV+i0H4cpYH9+3JJ78km4KXwaf9xUJCWF6nxeD+qG6Fyruw1Qlbds2r85U9dkNDVAS3gioCvELryh1TxKGiVTkg4wqHTyHfWsp7KD3WQHYJn0RyfJJu6YEmL77zonn7p2SRMvTMP3ZEXibnC9gz3nnhR6wcYL8Q7zXypKTMD58bTixDSJwIDAQAB"
TXT georgebjohnson.com "v=spf1 include:_spf.mx.cloudflare.net ~all"
```

The generated priorities were used exactly; no MX values or priorities were guessed.

## Exact production changes

Cloudflare API mutations were limited to the approved mail scope:

1. Reconciled the existing apex SPF in place, retaining every prior outbound term and adding only `include:_spf.mx.cloudflare.net`.
2. Deleted the three SiteGround/mailspamprotection apex MX records.
3. Added the three provider-generated Cloudflare MX records with exact generated priorities.
4. Added Cloudflare's provider-generated `cf2024-1._domainkey` TXT record.
5. Called `POST /zones/{zone_id}/email/routing/enable`.
6. Used the documented `PATCH /zones/{zone_id}/email/routing/dns` root-zone unlock with body `{}` because Cloudflare activation otherwise replaces and locks the apex SPF to its Cloudflare-only policy.
7. Restored the one valid combined SPF after unlock.
8. Updated staged rule `6e2d66aa8e28436093d87fe8974ab04b` to enabled, retaining its exact literal matcher and verified destination.
9. Rechecked the default catch-all and left it disabled.

Guarded attempts that did not satisfy the SPF/API assertions were automatically rolled back to the exact SiteGround MX/SPF/rule state before the successful window. No rollback reported an error. This exposed two provider behaviors now accounted for in the final sequence:

- Email Routing activation normalizes the existing apex SPF to Cloudflare's provider-only SPF instead of merging existing sender authorizations.
- The root unlock must omit the optional `name`; supplying the full zone name is interpreted as a subdomain and returns Cloudflare code `2033` (`Subdomain not found`).

## After records

Final Cloudflare DNS API records use TTL Auto (`ttl: 1`); authoritative responses return a 300-second TTL.

```text
MX 72 georgebjohnson.com route1.mx.cloudflare.net
MX 10 georgebjohnson.com route2.mx.cloudflare.net
MX 35 georgebjohnson.com route3.mx.cloudflare.net
TXT georgebjohnson.com "v=spf1 ip4:34.174.41.163 +mx ip4:34.174.193.71 include:georgebjohnson.com.spf.auto.dnssmarthost.net include:_spf.mx.cloudflare.net ~all"
TXT cf2024-1._domainkey.georgebjohnson.com "v=DKIM1; h=sha256; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAiweykoi+o48IOGuP7GR3X0MOExCUDY/BCRHoWBnh3rChl7WhdyCxW3jgq1daEjPPqoi7sJvdg5hEQVsgVRQP4DcnQDVjGMbASQtrY4WmB1VebF+RPJB2ECPsEDTpeiI5ZyUAwJaVX7r6bznU67g7LvFq35yIo4sdlmtZGV+i0H4cpYH9+3JJ78km4KXwaf9xUJCWF6nxeD+qG6Fyruw1Qlbds2r85U9dkNDVAS3gioCvELryh1TxKGiVTkg4wqHTyHfWsp7KD3WQHYJn0RyfJJu6YEmL77zonn7p2SRMvTMP3ZEXibnC9gz3nnhR6wcYL8Q7zXypKTMD58bTixDSJwIDAQAB"
TXT _dmarc.georgebjohnson.com "v=DMARC1; p=none; aspf=r; adkim=r;"
CNAME default._domainkey.georgebjohnson.com georgebjohnson.com.default.dkim.auto.dnssmarthost.net
A mail.georgebjohnson.com 34.174.41.163
A autodiscover.georgebjohnson.com 34.174.41.163
A autoconfig.georgebjohnson.com 34.174.41.163
A ftp.georgebjohnson.com 34.174.41.163
```

The Cloudflare DKIM value is one logical TXT record. DNS presentation splits it into two quoted character strings because of the per-string TXT length limit; resolvers concatenate those strings for the logical value.

There is exactly one apex SPF record. The policy retains:

- explicit SiteGround/former-origin authorization `ip4:34.174.41.163`
- the existing `mx` mechanism
- explicit authorization `ip4:34.174.193.71`
- `include:georgebjohnson.com.spf.auto.dnssmarthost.net`, which resolves to the still-live `_spf.mailspamprotection.com` authorization
- Cloudflare's required `include:_spf.mx.cloudflare.net`
- the prior `~all` policy; it was not weakened

The evaluated SPF chain contains four DNS-lookup mechanisms (`mx` plus three total includes), below the SPF limit of ten. The provider targets resolved during verification.

### Intentional `unlocked` API state

Final Email Routing API state:

```text
enabled: true
status: unlocked
synced: true
admin_locked: false
support_subaddress: false
```

`unlocked` is intentional, not a `misconfigured` state. It is the API state produced by Cloudflare's documented routing-DNS unlock, which was required to keep one combined SPF rather than discard the still-needed outbound terms. Cloudflare subsequently reported `synced: true`; the exact MX/DKIM records and required SPF include are present.

## Final rule state

All Email Routing rules after cutover:

1. Custom rule `6e2d66aa8e28436093d87fe8974ab04b`
   - Name: `Forward george to georgej`
   - Literal `to`: `george@georgebjohnson.com`
   - Forward: `georgej@georgedigital.net`
   - Enabled: `true`
   - Priority: `0`
2. Default catch-all `48247db54ada4d4eba277ca28ccf006f`
   - Matcher: `all`
   - Action: `drop`
   - Enabled: `false`
   - Priority: `2147483647`

Any address other than the one exact route is not forwarded by Cloudflare. This is the approved consequence of the domain-wide inbound MX replacement with catch-all disabled.

## Preserved records and exclusions

An API before/after comparison confirmed all 13 protected DMARC, Encharge, SiteGround service-host, FTP, and SiteGround DKIM records were byte-for-byte unchanged in type/name/content/priority/TTL/proxy state.

All seven Encharge records remain DNS-only and unchanged:

```text
TXT encverify.georgebjohnson.com fb09fc62cf073620b0234b59041d9fbe
CNAME en1._domainkey.georgebjohnson.com 171696.dkim-s.encharge-mail.com
CNAME m1._domainkey.georgebjohnson.com 171696.dkim-s6.encharge-mail.com
CNAME maillinkforward.georgebjohnson.com maillinkforward.encharge-mail.com
CNAME maillinkforwarding.georgebjohnson.com maillinkforwarding.encharge-mail.com
CNAME smtpapi.georgebjohnson.com 171696.smtpapi.encharge-mail.com
CNAME smtpapi2.georgebjohnson.com 171696.smtpapi2.encharge-mail.com
```

Encharge was not activated and its pending sender/campaign work was not touched. DMARC remains monitoring-only. Historical SiteGround service hosts and `default._domainkey` remain available as outbound/rollback evidence; only the approved inbound MX records were replaced.

## DNS and SMTP verification

Final checks covered:

- Cloudflare DNS and Email Routing APIs
- both authoritative nameservers
- `1.1.1.1`, `8.8.8.8`, and `9.9.9.9`
- target-domain MX on all three public resolvers
- Cloudflare MX STARTTLS readiness without sending a message

Both authoritative nameservers and all three public resolvers returned the exact Cloudflare MX set and one combined SPF. No `mailspamprotection.com` MX remained in the Cloudflare API or authoritative/public answers.

The new DKIM was present on both authoritative nameservers and `1.1.1.1` by `2026-07-25T14:55:20Z`; Google and Quad9 initially retained expected pre-creation negative-cache answers from the required preflight. At `2026-07-25T15:17:38Z`, five consecutive queries to each of `1.1.1.1`, `8.8.8.8`, and `9.9.9.9` all returned the exact DKIM. A fresh independent API/DNS verifier passed at `2026-07-25T15:19:01Z` across both authoritative nameservers and all three public resolvers.

Target-domain MX matched on `1.1.1.1`, `8.8.8.8`, and `9.9.9.9`:

```text
1  aspmx.l.google.com
5  alt1.aspmx.l.google.com
5  alt2.aspmx.l.google.com
10 alt3.aspmx.l.google.com
10 alt4.aspmx.l.google.com
```

All five target MX hostnames resolved on each resolver.

Certificate-only SMTP probes connected to port 25 on `route1`, `route2`, and `route3.mx.cloudflare.net`, negotiated TLS 1.2, matched the `*.mx.cloudflare.net` certificate, and returned `Verification: OK`. The probes issued no `MAIL FROM`, `RCPT TO`, or `DATA`; no test email was sent.

## Rollback records and commands

Rollback restores the exact pre-change inbound state while preserving DMARC, SiteGround service hosts/default DKIM, Google verification, and Encharge records.

Exact rollback records:

```text
MX 10 georgebjohnson.com mx10.mailspamprotection.com
MX 20 georgebjohnson.com mx20.mailspamprotection.com
MX 30 georgebjohnson.com mx30.mailspamprotection.com
TXT georgebjohnson.com "v=spf1 ip4:34.174.41.163 +mx ip4:34.174.193.71 include:georgebjohnson.com.spf.auto.dnssmarthost.net ~all"
```

Use the server-held token; do not paste it into the note or shell history:

```bash
export ZONE_ID='2c23c29e39dc54a290f59494dd3124cd'
export RULE_ID='6e2d66aa8e28436093d87fe8974ab04b'
export CF_API='https://api.cloudflare.com/client/v4'
# CLOUDFLARE_API_TOKEN must already be present in the environment.

# 1. Disable the exact route.
curl --fail-with-body -X PUT \
  "$CF_API/zones/$ZONE_ID/email/routing/rules/$RULE_ID" \
  -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
  -H 'Content-Type: application/json' \
  --data '{"name":"Forward george to georgej (staged)","enabled":false,"matchers":[{"type":"literal","field":"to","value":"george@georgebjohnson.com"}],"actions":[{"type":"forward","value":["georgej@georgedigital.net"]}],"priority":0}'

# 2. Disable Email Routing. Cloudflare normally removes its managed routing DNS.
curl --fail-with-body -X POST \
  "$CF_API/zones/$ZONE_ID/email/routing/disable" \
  -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
  -H 'Content-Type: application/json' \
  --data '{}'

# 3. Re-list DNS. Delete only any remaining route[1-3].mx.cloudflare.net MX
#    and cf2024-1._domainkey record by returned record ID. Do not delete
#    default._domainkey, DMARC, Encharge, Google verification, or service hosts.
curl --fail-with-body \
  "$CF_API/zones/$ZONE_ID/dns_records?per_page=500" \
  -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN"

# 4. Restore the three SiteGround MX records.
for record in \
  '{"type":"MX","name":"georgebjohnson.com","content":"mx10.mailspamprotection.com","priority":10,"ttl":1,"comment":"SiteGround mail routing restored by rollback"}' \
  '{"type":"MX","name":"georgebjohnson.com","content":"mx20.mailspamprotection.com","priority":20,"ttl":1,"comment":"SiteGround mail routing restored by rollback"}' \
  '{"type":"MX","name":"georgebjohnson.com","content":"mx30.mailspamprotection.com","priority":30,"ttl":1,"comment":"SiteGround mail routing restored by rollback"}'
do
  curl --fail-with-body -X POST \
    "$CF_API/zones/$ZONE_ID/dns_records" \
    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
    -H 'Content-Type: application/json' \
    --data "$record"
done

# 5. Restore exactly one legacy SPF. If disable removed SPF, create it:
curl --fail-with-body -X POST \
  "$CF_API/zones/$ZONE_ID/dns_records" \
  -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
  -H 'Content-Type: application/json' \
  --data '{"type":"TXT","name":"georgebjohnson.com","content":"v=spf1 ip4:34.174.41.163 +mx ip4:34.174.193.71 include:georgebjohnson.com.spf.auto.dnssmarthost.net ~all","ttl":1,"comment":"SPF restored by Email Routing rollback"}'
```

If step 2 leaves an apex SPF instead of removing it, update that one record by ID with `PUT /zones/{zone_id}/dns_records/{record_id}` to the rollback value rather than posting a second SPF. Before accepting rollback, assert exactly one SPF and exactly the three SiteGround MX records.

Rollback verification:

```bash
dig +short MX georgebjohnson.com @nena.ns.cloudflare.com
dig +short MX georgebjohnson.com @sri.ns.cloudflare.com
dig +short MX georgebjohnson.com @1.1.1.1
dig +short MX georgebjohnson.com @8.8.8.8
dig +short MX georgebjohnson.com @9.9.9.9
dig +short TXT georgebjohnson.com @1.1.1.1
```

Also recheck `GET /zones/{zone_id}/email/routing`, all rules, catch-all, destination state, DMARC, both DKIM selectors, and every Encharge record.

## Remaining receipt verification

Infrastructure and configuration checks pass. End-to-end receipt is intentionally not claimed until the operator confirms a real external message arrives at `georgej@georgedigital.net` through the exact `george@georgebjohnson.com` route. Preserve the message headers for troubleshooting if delivery fails or is delayed.
