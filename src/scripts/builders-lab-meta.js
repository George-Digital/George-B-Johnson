export const META_CONSENT_KEY = "builders_lab_meta_measurement_preference_v1";
export const META_NOTICE_VERSION = "2026-07-31";
export const META_OUTBOUND_EVENT = "BuildersLabSkoolOutbound";
export const META_OUTBOUND_PLACEMENTS = Object.freeze([
  "working-standard",
  "final-review",
]);

const META_PIXEL_ID = "1350014696841325";
const META_RUNTIME_URL = "https://connect.facebook.net/en_US/fbevents.js";
const SIX_MONTHS_MS = 183 * 24 * 60 * 60 * 1000;

function exactPreference(value, nowMs) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  const keys = Object.keys(value).sort();
  const expected = ["decisionAt", "expiresAt", "noticeVersion", "status"].sort();
  if (keys.length !== expected.length || keys.some((key, index) => key !== expected[index])) return null;
  if (!['allow', 'reject'].includes(value.status) || value.noticeVersion !== META_NOTICE_VERSION) return null;
  const decisionAt = Date.parse(value.decisionAt);
  const expiresAt = Date.parse(value.expiresAt);
  if (!Number.isFinite(decisionAt) || !Number.isFinite(expiresAt) || expiresAt <= decisionAt || expiresAt <= nowMs) return null;
  return value;
}

export function readMetaPreference(storage, now = Date.now()) {
  try {
    const raw = storage.getItem(META_CONSENT_KEY);
    if (!raw) return null;
    const preference = exactPreference(JSON.parse(raw), now);
    if (!preference) storage.removeItem(META_CONSENT_KEY);
    return preference;
  } catch {
    return null;
  }
}

export function writeMetaPreference(storage, status, now = Date.now()) {
  if (!['allow', 'reject'].includes(status)) throw new Error("Meta preference status is invalid");
  const preference = {
    status,
    noticeVersion: META_NOTICE_VERSION,
    decisionAt: new Date(now).toISOString(),
    expiresAt: new Date(now + SIX_MONTHS_MS).toISOString(),
  };
  storage.setItem(META_CONSENT_KEY, JSON.stringify(preference));
  return preference;
}

function stripQueryBeforeMeta(browserWindow) {
  try {
    const current = new URL(browserWindow.location.href);
    if (current.search) {
      browserWindow.history.replaceState(
        browserWindow.history.state,
        "",
        `${current.pathname}${current.hash}`,
      );
    }
  } catch {}
}

function installMetaPixel(browserWindow, browserDocument) {
  if (typeof browserWindow.fbq === "function") return;
  stripQueryBeforeMeta(browserWindow);

  const fbq = function (...args) {
    if (fbq.callMethod) fbq.callMethod(...args);
    else fbq.queue.push(args);
  };
  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = "2.0";
  fbq.queue = [];
  browserWindow.fbq = fbq;
  browserWindow._fbq = fbq;

  const script = browserDocument.createElement("script");
  script.async = true;
  script.src = META_RUNTIME_URL;
  const firstScript = browserDocument.getElementsByTagName("script")[0];
  if (firstScript?.parentNode) firstScript.parentNode.insertBefore(script, firstScript);
  else browserDocument.head.appendChild(script);

  fbq("init", META_PIXEL_ID);
  fbq("track", "PageView");
}

export function metaMeasurementAllowed(browserWindow, now = Date.now()) {
  return readMetaPreference(browserWindow.localStorage, now)?.status === "allow";
}

export function trackMetaSkoolOutbound(browserWindow, placement) {
  if (!META_OUTBOUND_PLACEMENTS.includes(placement)) return false;
  if (!metaMeasurementAllowed(browserWindow) || typeof browserWindow.fbq !== "function") return false;
  browserWindow.fbq("trackCustom", META_OUTBOUND_EVENT, { cta_placement: placement });
  return true;
}

export function initMetaMeasurementConsent(browserWindow, browserDocument, options = {}) {
  const panel = browserDocument.querySelector?.("[data-meta-consent-panel]");
  const manage = browserDocument.querySelector?.("[data-meta-consent-manage]");
  if (!panel || !manage) return;
  const enableMeasurement = options.enableMeasurement === true;

  const showPanel = () => {
    panel.hidden = false;
    manage.hidden = true;
  };
  const hidePanel = () => {
    panel.hidden = true;
    manage.hidden = false;
  };

  const respondToPreference = (preference) => {
    if (!preference) {
      if (enableMeasurement && typeof browserWindow.fbq === "function") {
        browserWindow.location.reload();
        return;
      }
      showPanel();
      return;
    }
    hidePanel();
    if (enableMeasurement && preference.status === "allow") {
      installMetaPixel(browserWindow, browserDocument);
    } else if (enableMeasurement && typeof browserWindow.fbq === "function") {
      browserWindow.location.reload();
    }
  };

  const scheduleExpiryCheck = (preference) => {
    if (typeof browserWindow.setTimeout !== "function" || !preference) return;
    const remaining = Math.max(0, Date.parse(preference.expiresAt) - Date.now());
    const delay = Math.min(remaining + 25, 24 * 60 * 60 * 1000);
    browserWindow.setTimeout(() => {
      const current = readMetaPreference(browserWindow.localStorage);
      respondToPreference(current);
      if (current) scheduleExpiryCheck(current);
    }, delay);
  };

  const preference = readMetaPreference(browserWindow.localStorage);
  respondToPreference(preference);
  scheduleExpiryCheck(preference);

  browserWindow.addEventListener?.("storage", (event) => {
    if (event.key !== META_CONSENT_KEY) return;
    const current = readMetaPreference(browserWindow.localStorage);
    respondToPreference(current);
    scheduleExpiryCheck(current);
  });

  manage.addEventListener("click", showPanel);
  panel.querySelectorAll("[data-meta-consent-choice]").forEach((button) => {
    button.addEventListener("click", () => {
      const status = button.getAttribute("data-meta-consent-choice");
      if (!['allow', 'reject'].includes(status)) return;
      const pixelWasLoaded = typeof browserWindow.fbq === "function";
      try {
        writeMetaPreference(browserWindow.localStorage, status);
      } catch {
        return;
      }
      hidePanel();
      const current = readMetaPreference(browserWindow.localStorage);
      scheduleExpiryCheck(current);
      if (status === "allow" && enableMeasurement) installMetaPixel(browserWindow, browserDocument);
      if (status === "reject" && enableMeasurement && pixelWasLoaded) browserWindow.location.reload();
    });
  });
}
