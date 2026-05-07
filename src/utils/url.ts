const baseUrl = import.meta.env.BASE_URL ?? "/";

export function withBase(href: string) {
  if (!href || /^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(href)) {
    return href;
  }

  const base = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
  const path = href.startsWith("/") ? href : `/${href}`;

  return base ? `${base}${path}` : path;
}
