(function registerAnalyticsPageLocationSanitizer(browserWindow) {
  function sanitizeAnalyticsPageLocation(locationHref, policy) {
    try {
      const current = new URL(locationHref);
      const queryFreeLocation = `${current.origin}${current.pathname}`;
      if (
        !policy
        || current.pathname !== policy.pathname
        || !Array.isArray(policy.tuple)
        || policy.tuple.length === 0
      ) {
        return queryFreeLocation;
      }

      const cleanQuery = new URLSearchParams();
      const seenKeys = new Set();
      for (const entry of policy.tuple) {
        if (!Array.isArray(entry) || entry.length !== 2) return queryFreeLocation;
        const [key, approvedValue] = entry;
        if (
          typeof key !== "string"
          || typeof approvedValue !== "string"
          || seenKeys.has(key)
        ) {
          return queryFreeLocation;
        }

        seenKeys.add(key);
        const values = current.searchParams.getAll(key);
        if (values.length !== 1 || values[0] !== approvedValue) {
          return queryFreeLocation;
        }
        cleanQuery.append(key, approvedValue);
      }

      return `${queryFreeLocation}?${cleanQuery.toString()}`;
    } catch {
      return "";
    }
  }

  Object.defineProperty(browserWindow, "__sanitizeAnalyticsPageLocation", {
    configurable: true,
    value: sanitizeAnalyticsPageLocation,
  });
})(window);
