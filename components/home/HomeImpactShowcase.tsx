"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, ChevronUp, Pause, Sparkles } from "lucide-react";
import type { GalleryImage, NewsArticle } from "@/lib/api-client/api.schemas";

type HomeImpactShowcaseProps = { news: NewsArticle[]; gallery: GalleryImage[] };

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

export function HomeImpactShowcase({ news, gallery }: HomeImpactShowcaseProps) {
  const [newsIndex, setNewsIndex] = useState(0);
  const [isNewsPaused, setIsNewsPaused] = useState(false);
  const newsItems = useMemo(() => news, [news]);
  const galleryItems = useMemo(
    () => gallery
      .flatMap((item) => (item.imageUrls?.length ? item.imageUrls : [item.imageUrl])
        .filter(Boolean)
        .map((src) => ({ src, alt: item.caption || "PLF learning and field activity" })))
      .slice(0, 8),
    [gallery],
  );
  const scrollingNews = useMemo(() => [...newsItems.slice(newsIndex), ...newsItems.slice(0, newsIndex)], [newsIndex, newsItems]);

  useEffect(() => {
    if (isNewsPaused || newsItems.length < 2) return;
    const timer = window.setInterval(() => setNewsIndex((current) => (current + 1) % newsItems.length), 12000);
    return () => window.clearInterval(timer);
  }, [isNewsPaused, newsItems.length]);

  const moveNews = (direction: 1 | -1) => newsItems.length && setNewsIndex((current) => (current + direction + newsItems.length) % newsItems.length);

  if (!newsItems.length && !galleryItems.length) return null;

  return (
    <section className="bg-[#edf5f8] px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12 grid gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7"><p className="text-[11px] font-bold uppercase tracking-[.22em] text-primary">Current work</p><h2 className="editorial-heading mt-3 text-5xl leading-[.92] text-[#172d3f] md:text-7xl">Evidence, learning and updates.</h2></div>
          <p className="max-w-md text-sm leading-7 text-[#5d6b73] md:col-span-5">Explore published news and visual records shared through PLF&apos;s live content channels.</p>
        </div>

        <div className={`grid gap-8 ${newsItems.length && galleryItems.length ? "lg:grid-cols-[.86fr_1.14fr]" : "max-w-3xl"}`}>
          {newsItems.length > 0 && <article className="min-w-0">
            <div className="mb-6 flex items-end justify-between gap-4"><div><p className="text-[10px] font-bold uppercase tracking-[.22em] text-primary">Latest news</p><h3 className="mt-2 text-3xl font-bold text-primary">Stay Informed</h3></div><Link href="/news" className="inline-flex items-center gap-1 text-xs font-bold text-primary">View all <ArrowRight className="size-4" /></Link></div>
            <div className="relative rounded-[24px] border border-[#cbdce5] bg-white p-5 shadow-sm" onMouseEnter={() => setIsNewsPaused(true)} onMouseLeave={() => setIsNewsPaused(false)} onFocus={() => setIsNewsPaused(true)} onBlur={() => setIsNewsPaused(false)}>
              <div className="absolute right-4 top-4 z-10 flex items-center gap-1 rounded-full bg-[#edf5f8] px-3 py-1.5 text-[11px] font-semibold text-primary">{isNewsPaused ? <Pause className="size-3" /> : <Sparkles className="size-3" />}{isNewsPaused ? "Paused" : "Live"}</div>
              <div className="relative h-[470px] overflow-hidden pt-7 [mask-image:linear-gradient(to_bottom,transparent,black_9%,black_89%,transparent)]">
                <div className={`vertical-news-marquee space-y-4 ${isNewsPaused ? "animation-paused" : ""}`}>{[...scrollingNews, ...scrollingNews].map((item, index) => <Link href={`/news/${item.id}`} key={`${item.id}-${index}`} className="group grid grid-cols-[6.5rem_1fr] gap-4 rounded-xl p-2 transition hover:bg-[#edf5f8] sm:grid-cols-[7.5rem_1fr]">{item.imageUrl ? <img src={item.imageUrl} alt="" className="h-24 w-[6.5rem] rounded-lg object-cover sm:w-[7.5rem]" /> : <div className="flex h-24 w-[6.5rem] items-center justify-center rounded-lg bg-primary/10 px-3 text-center text-[10px] font-bold text-primary sm:w-[7.5rem]">{item.category}</div>}<div className="min-w-0"><p className="text-xs font-medium text-[#688096]">{formatDate(item.publishedAt)}</p><h4 className="mt-2 line-clamp-2 text-base font-bold leading-6 text-[#183d60] group-hover:text-primary">{item.title}</h4><span className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-primary">Read more <ArrowRight className="size-4" /></span></div></Link>)}</div>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-3"><button type="button" onClick={() => moveNews(-1)} className="flex items-center justify-center gap-2 rounded-full border border-[#cbdce5] bg-[#f7fbfd] py-3 text-sm text-[#183d60]"><ChevronUp className="size-4" /> Older</button><button type="button" onClick={() => moveNews(1)} className="flex items-center justify-center gap-2 rounded-full border border-[#cbdce5] bg-[#f7fbfd] py-3 text-sm text-[#183d60]">Newer <ChevronRight className="size-4 rotate-90" /></button></div>
            </div>
          </article>}

          {galleryItems.length > 0 && <article className="min-w-0">
            <div className="mb-6 flex items-end justify-between gap-4"><div><p className="text-[10px] font-bold uppercase tracking-[.22em] text-primary">Field evidence</p><h3 className="mt-2 text-3xl font-bold text-primary">Learning in Practice</h3></div><Link href="/gallery" className="inline-flex items-center gap-1 text-xs font-bold text-primary">Full gallery <ArrowRight className="size-4" /></Link></div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
              {galleryItems.map((item, index) => <Link href="/gallery" key={`${item.src}-${index}`} className={`group relative overflow-hidden rounded-2xl ${index === 0 || index === 5 ? "row-span-2 aspect-[.9]" : "aspect-square"}`}><img src={item.src} alt={item.alt} className="size-full object-cover transition duration-700 group-hover:scale-105 motion-reduce:transform-none" /><div className="absolute inset-0 bg-gradient-to-t from-primary/35 via-transparent to-transparent opacity-40 transition group-hover:opacity-80" /></Link>)}
            </div>
          </article>}
        </div>
      </div>
    </section>
  );
}
