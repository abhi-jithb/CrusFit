import type { MetadataRoute } from "next";

import { siteConfig } from "@/constants/site";
import { localSeoPages } from "@/data/local-seo";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const contentRoutes = ["/gallery", "/coaches", "/champions"].map((path) => ({
    url: absoluteUrl(path),
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const localSeoRoutes = localSeoPages.map((page) => ({
    url: absoluteUrl(page.path),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...contentRoutes,
    ...localSeoRoutes,
  ];
}
