import { buildSkoolDestination } from "../../../src/lib/builders-lab-attribution.js";

const REDIRECT_PATHS = new Set(["/go/skool", "/go/skool/", "/go/skool/index.html"]);

export async function onRequest(context) {
  const requestUrl = new URL(context.request.url);

  if (!REDIRECT_PATHS.has(requestUrl.pathname)) return context.next();
  if (!new Set(["GET", "HEAD"]).has(context.request.method)) {
    return new Response("Method Not Allowed", {
      status: 405,
      headers: { Allow: "GET, HEAD" },
    });
  }

  const destination = buildSkoolDestination(requestUrl.searchParams);
  return new Response(null, {
    status: 302,
    headers: {
      "Cache-Control": "no-store",
      Location: destination.href,
      "Referrer-Policy": "no-referrer",
    },
  });
}
