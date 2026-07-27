export const SKOOL_DESTINATION = "https://www.skool.com/local-seo-engineering-7047/about";

const META_CAMPAIGN = Object.freeze({
  utm_source: "meta",
  utm_medium: "paid_social",
  utm_campaign: "builders_lab_direct_membership",
});
const OPTIONAL_UTM_KEYS = Object.freeze(["utm_content", "utm_term"]);
const CLICK_ID_KEYS = Object.freeze([
  "fbclid",
  "gclid",
  "gbraid",
  "wbraid",
  "msclkid",
  "ttclid",
  "li_fat_id",
]);
const SAFE_CAMPAIGN_VALUE = /^[a-z0-9._~-]{1,100}$/;
const SAFE_CLICK_ID_VALUE = /^[A-Za-z0-9._~-]{1,256}$/;

function toSearchParams(input) {
  if (input instanceof URLSearchParams) return input;
  return new URLSearchParams(input);
}

function repeatedValue(source, key, isValid) {
  const values = source.getAll(key);
  if (values.length === 0) return null;

  const [value] = values;
  if (!isValid(value) || values.some((candidate) => candidate !== value)) return null;
  return value;
}

export function allowedMetaCampaignParams(input) {
  const source = toSearchParams(input);
  const clean = new URLSearchParams();

  const hasApprovedCampaign = Object.entries(META_CAMPAIGN).every(
    ([key, approvedValue]) => repeatedValue(
      source,
      key,
      (value) => value === approvedValue,
    ) === approvedValue,
  );
  if (!hasApprovedCampaign) return clean;

  for (const [key, value] of Object.entries(META_CAMPAIGN)) clean.set(key, value);
  for (const key of OPTIONAL_UTM_KEYS) {
    const value = repeatedValue(source, key, (candidate) => SAFE_CAMPAIGN_VALUE.test(candidate));
    if (value !== null) clean.set(key, value);
  }
  for (const key of CLICK_ID_KEYS) {
    const value = repeatedValue(source, key, (candidate) => SAFE_CLICK_ID_VALUE.test(candidate));
    if (value !== null) clean.set(key, value);
  }

  return clean;
}

export function buildSkoolDestination(input) {
  const destination = new URL(SKOOL_DESTINATION);
  const campaign = allowedMetaCampaignParams(input);
  for (const [key, value] of campaign) destination.searchParams.set(key, value);
  return destination;
}
