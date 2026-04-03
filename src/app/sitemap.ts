import type { MetadataRoute } from "next";
import { validSlugs } from "./start/[slug]/constants";

const siteUrl = "https://cloudblocks.tech";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPaths = ["", "/logo", "/video"] as const;

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: path === "" ? `${siteUrl}/` : `${siteUrl}${path}`,
    lastModified,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));

  const startEntries: MetadataRoute.Sitemap = validSlugs.map((slug) => ({
    url: `${siteUrl}/start/${encodeURIComponent(slug)}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...startEntries];
}
