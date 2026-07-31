import { allowedMetaCampaignParams } from "../lib/builders-lab-attribution.js";
import {
  initMetaMeasurementConsent,
  trackMetaSkoolOutbound,
} from "./builders-lab-meta.js";

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
  const metaEventsSent = new Set();
  browserDocument.querySelectorAll("[data-skool-cta]").forEach((link) => {
    link.setAttribute("href", trackedPath);
    link.addEventListener("click", () => {
      const placement = link.getAttribute("data-skool-cta") || "unknown";
      if (typeof browserWindow.gtag === "function") {
        browserWindow.gtag("event", SKOOL_CTA_EVENT, {
          cta_placement: placement,
          link_url: "/go/skool",
        });
      }
      if (!metaEventsSent.has(placement) && trackMetaSkoolOutbound(browserWindow, placement)) {
        metaEventsSent.add(placement);
      }
    });
  });
  initMetaMeasurementConsent(browserWindow, browserDocument, { enableMeasurement: true });
}

if (typeof window !== "undefined" && typeof document !== "undefined") {
  initBuildersLabTracking(window, document);
}
