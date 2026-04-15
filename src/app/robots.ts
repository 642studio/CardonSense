import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: "www.cardonsense.com",
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
