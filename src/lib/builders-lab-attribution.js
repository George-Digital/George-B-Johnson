export const SKOOL_DESTINATION = "https://www.skool.com/local-seo-engineering-7047/about";

const META_CAMPAIGN = Object.freeze({
  utm_source: "meta",
  utm_medium: "paid_social",
  utm_campaign: "builders_lab_direct_membership",
});
const OPTIONAL_UTM_KEYS = Object.freeze(["utm_content", "utm_term"]);
const ALLOWED_UTM_KEYS = Object.freeze([
  ...Object.keys(META_CAMPAIGN),
  ...OPTIONAL_UTM_KEYS,
]);
const SAFE_CAMPAIGN_VALUE = /^[a-z0-9._~-]{1,100}$/;

function toSearchParams(input) {
  if (input instanceof URLSearchParams) return input;
  return new URLSearchParams(input);
}

export function allowedMetaCampaignParams(input) {
  const source = toSearchParams(input);
  const clean = new URLSearchParams();

  if (ALLOWED_UTM_KEYS.some((key) => source.getAll(key).length > 1)) return clean;
  if (!Object.entries(META_CAMPAIGN).every(([key, value]) => source.get(key) === value)) {
    return clean;
  }

  for (const [key, value] of Object.entries(META_CAMPAIGN)) clean.set(key, value);
  for (const key of OPTIONAL_UTM_KEYS) {
    const value = source.get(key);
    if (value && SAFE_CAMPAIGN_VALUE.test(value)) clean.set(key, value);
  }

  return clean;
}

export function buildSkoolDestination(input) {
  const destination = new URL(SKOOL_DESTINATION);
  const campaign = allowedMetaCampaignParams(input);
  for (const [key, value] of campaign) destination.searchParams.set(key, value);
  return destination;
}
