/**
 * Resolve a public-folder asset path against Astro's configured base URL.
 *
 * Use for any reference to files in `docs/public/`, e.g. videos, images,
 * favicons. Internal page hrefs (`/`, `#anchor`) do not need this helper.
 *
 * Examples (with `base: "/vlapilot/"`):
 *   asset("demo/cleandesk.mp4") → "/vlapilot/demo/cleandesk.mp4"
 *   asset("/profile/foo.jpg")   → "/vlapilot/profile/foo.jpg"
 */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL
    : import.meta.env.BASE_URL + "/";
  return `${base}${path.replace(/^\//, "")}`;
}
