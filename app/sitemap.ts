import type { MetadataRoute } from "next";
import { site, locales } from "@/lib/site";
import { projects } from "@/data/projects";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!site.url) return [];
  return locales.flatMap((locale) => [
    {
      url: `${site.url}/${locale}`,
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    ...projects.map((p) => ({
      url: `${site.url}/${locale}/projects/${p.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ]);
}
