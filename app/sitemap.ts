import type { MetadataRoute } from "next";
import { getDb } from "@/lib/db";
import { absoluteUrl } from "@/lib/site-url";

type CampaignSitemapDoc = { id: number; createdAt?: string };
type NewsSitemapDoc = { id: number; publishedAt?: string };

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: Array<{ path: string; frequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }> = [
    { path: "/", frequency: "weekly", priority: 1 },
    { path: "/about", frequency: "monthly", priority: 0.9 },
    { path: "/services", frequency: "monthly", priority: 0.9 },
    { path: "/campaigns", frequency: "weekly", priority: 0.8 },
    { path: "/news", frequency: "weekly", priority: 0.8 },
    { path: "/gallery", frequency: "weekly", priority: 0.7 },
    { path: "/contact", frequency: "yearly", priority: 0.6 },
    { path: "/membership", frequency: "monthly", priority: 0.6 },
    { path: "/donate", frequency: "monthly", priority: 0.7 },
    { path: "/privacy", frequency: "yearly", priority: 0.3 },
    { path: "/terms", frequency: "yearly", priority: 0.3 },
    { path: "/photo-credits", frequency: "yearly", priority: 0.2 },
  ];

  const entries: MetadataRoute.Sitemap = staticPages.map(({ path, frequency, priority }) => ({
    url: absoluteUrl(path),
    changeFrequency: frequency,
    priority,
  }));

  try {
    const db = await getDb();
    const [campaigns, news] = await Promise.all([
      db.collection<CampaignSitemapDoc>("campaigns").find({}, { projection: { id: 1, createdAt: 1 } }).toArray(),
      db.collection<NewsSitemapDoc>("news").find({}, { projection: { id: 1, publishedAt: 1 } }).toArray(),
    ]);
    entries.push(
      ...campaigns.map((item) => ({ url: absoluteUrl(`/campaigns/${item.id}`), lastModified: item.createdAt, changeFrequency: "weekly" as const, priority: 0.7 })),
      ...news.map((item) => ({ url: absoluteUrl(`/news/${item.id}`), lastModified: item.publishedAt, changeFrequency: "monthly" as const, priority: 0.6 })),
    );
  } catch {
    // Static marketing routes remain available if the database is unavailable during a build.
  }

  return entries;
}
