const PAID_CAMPAIGN = Object.freeze({
  utm_source: "meta",
  utm_medium: "paid_social",
  utm_campaign: "builders_lab_direct_membership",
});
const SAFE_CAMPAIGN_VALUE = /^[A-Za-z0-9._~-]{1,100}$/;
const CLICK_ID = /^[A-Za-z0-9._-]{1,300}$/;

function trackedSkoolPath() {
  const current = new URL(window.location.href);
  const target = new URL("/go/skool", window.location.origin);
  const paidPatternMatches = Object.entries(PAID_CAMPAIGN)
    .every(([key, value]) => current.searchParams.get(key) === value);

  if (paidPatternMatches) {
    for (const [key, value] of Object.entries(PAID_CAMPAIGN)) target.searchParams.set(key, value);
    for (const key of ["utm_content", "utm_term"]) {
      const value = current.searchParams.get(key);
      if (value && SAFE_CAMPAIGN_VALUE.test(value)) target.searchParams.set(key, value);
    }
  }

  let clickId = null;
  try { clickId = sessionStorage.getItem("builders_lab_fbclid"); } catch {}
  if (clickId && CLICK_ID.test(clickId)) target.searchParams.set("fbclid", clickId);

  return `${target.pathname}${target.search}`;
}

const gtag = window.gtag;
if (typeof gtag === "function") {
  gtag("event", "builders_lab_view", { page_path: "/builders-lab/" });
}

document.querySelectorAll("[data-skool-cta]").forEach((link) => {
  link.setAttribute("href", trackedSkoolPath());
  link.addEventListener("click", () => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "skool_cta_click", {
        cta_placement: link.getAttribute("data-skool-cta") || "unknown",
        link_url: "/go/skool",
      });
    }
  });
});
