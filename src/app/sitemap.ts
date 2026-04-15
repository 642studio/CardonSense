import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = [
    { path: "", changeFrequency: "weekly", priority: 1 },
    { path: "/citysensor", changeFrequency: "weekly", priority: 0.9 },
    { path: "/soluciones", changeFrequency: "weekly", priority: 0.8 },
    { path: "/soluciones/bachejoa", changeFrequency: "weekly", priority: 0.85 },
    { path: "/nosotros", changeFrequency: "monthly", priority: 0.65 },
    { path: "/contacto", changeFrequency: "monthly", priority: 0.75 },
  ] as const;

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
