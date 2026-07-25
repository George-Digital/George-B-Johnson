import { allowedMetaCampaignParams } from "../lib/builders-lab-attribution.js";

export const SKOOL_CTA_EVENT = "skool_cta_click";

export function trackedSkoolPath(locationHref) {
  const current = new URL(locationHref);
  const campaign = allowedMetaCampaignParams(current.searchParams);
  const query = campaign.toString();
  return query ? `/go/skool?${query}` : "/go/skool";
}

export function initBuildersLabTracking(browserWindow, browserDocument) {
  if (typeof browserWindow.gtag === "function") {
    browserWindow.gtag("event", "builders_lab_view", { page_path: "/builders-lab/" });
  }

  const trackedPath = trackedSkoolPath(browserWindow.location.href);
  browserDocument.querySelectorAll("[data-skool-cta]").forEach((link) => {
    link.setAttribute("href", trackedPath);
    link.addEventListener("click", () => {
      if (typeof browserWindow.gtag === "function") {
        browserWindow.gtag("event", SKOOL_CTA_EVENT, {
          cta_placement: link.getAttribute("data-skool-cta") || "unknown",
          link_url: "/go/skool",
        });
      }
    });
  });
}

if (typeof window !== "undefined" && typeof document !== "undefined") {
  initBuildersLabTracking(window, document);
}
