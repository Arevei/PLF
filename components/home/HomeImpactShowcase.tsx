"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, ChevronUp, Pause, Play, Sparkles } from "lucide-react";
import type { GalleryImage, NewsArticle } from "@/lib/api-client/api.schemas";

type HomeImpactShowcaseProps = { news: NewsArticle[]; gallery: GalleryImage[] };

const storySlides = [
  { name: "Grassroots partner", role: "Civil society organisation", quote: "PLF helped us convert good intentions into stronger systems, clearer governance and measurable work.", image: "/images/women-development.jpg" },
  { name: "Programme leader", role: "Social-sector professional", quote: "The learning support strengthened how our team plans, documents, monitors and communicates impact.", image: "/images/education.webp" },
  { name: "CSR collaborator", role: "Partnership team", quote: "PLF creates the bridge between credible local organisations and partners ready to invest in lasting change.", image: "/images/Community-Building.webp" },
];

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

export function HomeImpactShowcase({ news, gallery }: HomeImpactShowcaseProps) {
  const [storyIndex, setStoryIndex] = useState(0);
  const [newsIndex, setNewsIndex] = useState(0);
  const [isNewsPaused, setIsNewsPaused] = useState(false);
  const activeStory = storySlides[storyIndex];
  const newsItems = useMemo(() => news, [news]);
  const galleryItems = useMemo(() => gallery.flatMap((item) => (item.imageUrls?.length ? item.imageUrls : [item.imageUrl]).filter(Boolean).map((src) => ({ src, alt: item.caption || "PLF field activity" }))).slice(0, 6), [gallery]);
  const scrollingNews = useMemo(() => [...newsItems.slice(newsIndex), ...newsItems.slice(0, newsIndex)], [newsIndex, newsItems]);

  useEffect(() => {
    if (isNewsPaused || newsItems.length < 2) return;
    const timer = window.setInterval(() => setNewsIndex((current) => (current + 1) % newsItems.length), 12000);
    return () => window.clearInterval(timer);
  }, [isNewsPaused, newsItems.length]);

  const moveNews = (direction: 1 | -1) => newsItems.length && setNewsIndex((current) => (current + direction + newsItems.length) % newsItems.length);
  const moveStory = (direction: 1 | -1) => setStoryIndex((current) => (current + direction + storySlides.length) % storySlides.length);

  return (
    <section className="bg-[#edf5f8] px-6 py-20 md:px-10 md:py-28">
      <div className={`mx-auto grid max-w-[1400px] gap-10 ${newsItems.length && galleryItems.length ? "lg:grid-cols-[1.06fr_.93fr_1.06fr]" : newsItems.length || galleryItems.length ? "lg:grid-cols-2" : "max-w-xl"}`}>
        <article className="min-w-0">
          <div className="mb-7 flex items-end justify-between gap-4"><div><p className="text-[11px] font-bold uppercase tracking-[.22em] text-primary">Partner learning</p><h2 className="mt-2 text-3xl font-bold text-primary">Voices from the Sector</h2></div><Link href="/about" className="inline-flex items-center gap-1 text-xs font-bold text-primary">Read About PLF <ArrowRight className="size-4" /></Link></div>
          <div className="overflow-hidden rounded-2xl border border-[#cbdce5] bg-white shadow-sm">
            <div className="group relative h-[330px] overflow-hidden"><img src={activeStory.image} alt={activeStory.name} className="size-full object-cover transition duration-700 group-hover:scale-105" /><button type="button" aria-label="Play story" className="absolute left-1/2 top-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white bg-[#b69748]/85 text-white backdrop-blur"><Play className="ml-1 size-8 fill-current" /></button></div>
            <div className="p-7"><p className="text-lg leading-8 text-[#172d3f]">“{activeStory.quote}”</p><p className="mt-6 text-sm font-bold text-primary">– {activeStory.name}</p><p className="text-xs text-[#68747b]">{activeStory.role}</p></div>
          </div>
          <div className="mt-5 flex justify-end gap-2"><button type="button" onClick={() => moveStory(-1)} aria-label="Previous story" className="flex size-11 items-center justify-center rounded-full border border-[#cbdce5] bg-white text-primary"><ChevronLeft className="size-4" /></button><button type="button" onClick={() => moveStory(1)} aria-label="Next story" className="flex size-11 items-center justify-center rounded-full border border-[#cbdce5] bg-white text-primary"><ChevronRight className="size-4" /></button></div>
        </article>

        {newsItems.length > 0 && <article className="min-w-0">
          <div className="mb-7 flex items-end justify-between gap-4"><div><p className="text-[11px] font-bold uppercase tracking-[.22em] text-primary">Latest news</p><h2 className="mt-2 text-3xl font-bold text-primary">Stay Informed</h2></div><Link href="/news" className="inline-flex items-center gap-1 text-xs font-bold text-primary">View All News <ArrowRight className="size-4" /></Link></div>
          <div className="relative rounded-2xl border border-[#cbdce5] bg-white p-5 shadow-sm" onMouseEnter={() => setIsNewsPaused(true)} onMouseLeave={() => setIsNewsPaused(false)} onFocus={() => setIsNewsPaused(true)} onBlur={() => setIsNewsPaused(false)}>
            <div className="absolute right-4 top-4 z-10 flex items-center gap-1 rounded-full bg-[#edf5f8] px-3 py-1.5 text-[11px] font-semibold text-primary">{isNewsPaused ? <Pause className="size-3" /> : <Sparkles className="size-3" />}{isNewsPaused ? "Paused" : "Live"}</div>
            <div className="relative h-[420px] overflow-hidden pt-7 [mask-image:linear-gradient(to_bottom,transparent,black_9%,black_89%,transparent)]">
              <div className={`vertical-news-marquee space-y-4 ${isNewsPaused ? "animation-paused" : ""}`}>{[...scrollingNews, ...scrollingNews].map((item, index) => <Link href={`/news/${item.id}`} key={`${item.id}-${index}`} className="group grid grid-cols-[7.5rem_1fr] gap-4 rounded-xl p-2 transition hover:bg-[#edf5f8]">{item.imageUrl ? <img src={item.imageUrl} alt={item.title} className="h-24 w-[7.5rem] rounded-lg object-cover" /> : <div className="flex h-24 w-[7.5rem] items-center justify-center rounded-lg bg-primary/10 px-3 text-center text-[10px] font-bold text-primary">{item.category}</div>}<div className="min-w-0"><p className="text-xs font-medium text-[#688096]">{formatDate(item.publishedAt)}</p><h3 className="mt-2 line-clamp-2 text-base font-bold leading-6 text-[#183d60] group-hover:text-primary">{item.title}</h3><span className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-primary">Read More <ArrowRight className="size-4" /></span></div></Link>)}</div>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-3"><button type="button" onClick={() => moveNews(-1)} className="flex items-center justify-center gap-2 rounded-full border border-[#cbdce5] bg-[#f7fbfd] py-3 text-sm text-[#183d60]"><ChevronUp className="size-4" /> Older</button><button type="button" onClick={() => moveNews(1)} className="flex items-center justify-center gap-2 rounded-full border border-[#cbdce5] bg-[#f7fbfd] py-3 text-sm text-[#183d60]">Newer <ChevronRight className="size-4 rotate-90" /></button></div>
          </div>
        </article>}

        {galleryItems.length > 0 && <article className="min-w-0">
          <div className="mb-7 flex items-end justify-between gap-4"><div><p className="text-[11px] font-bold uppercase tracking-[.22em] text-primary">Field evidence</p><h2 className="mt-2 text-3xl font-bold text-primary">Learning in Practice</h2></div><Link href="/gallery" className="inline-flex items-center gap-1 text-xs font-bold text-primary">View Full Gallery <ArrowRight className="size-4" /></Link></div>
          <div className="grid grid-cols-3 gap-3">{galleryItems.map((item, index) => <Link href="/gallery" key={`${item.src}-${index}`} className="group relative aspect-[1.03] overflow-hidden rounded-2xl"><img src={item.src} alt={item.alt} className="size-full object-cover transition duration-700 group-hover:scale-110" /><div className="absolute inset-0 bg-primary/0 transition group-hover:bg-primary/20" /></Link>)}</div>
          <Link href="/gallery" className="mt-6 flex h-[98px] items-center justify-center gap-3 rounded-2xl bg-primary text-base font-semibold text-white transition hover:bg-[#083b68]">View Full Gallery <ArrowRight className="size-5" /></Link>
        </article>}
      </div>
    </section>
  );
}
