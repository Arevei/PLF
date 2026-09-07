"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  BookOpenCheck,
  Building2,
  Heart,
  Landmark,
  Network,
  Pause,
  Play,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Campaign, GalleryImage, NewsArticle } from "@/lib/api-client/api.schemas";

type HomeImpactShowcaseProps = {
  featuredCampaign?: Campaign;
  campaigns: Campaign[];
  news: NewsArticle[];
  gallery: GalleryImage[];
};

const storySlides = [
  {
    name: "Grassroots partner",
    role: "Civil society organisation",
    quote: "PLF helped us convert good intentions into stronger systems, clearer governance and measurable work.",
    image: "/images/women-development.jpg",
  },
  {
    name: "Programme leader",
    role: "Social-sector professional",
    quote: "The learning support strengthened how our team plans, documents, monitors and communicates impact.",
    image: "/images/education.webp",
  },
  {
    name: "CSR collaborator",
    role: "Partnership team",
    quote: "PLF creates the bridge between credible local organisations and partners ready to invest in lasting change.",
    image: "/images/Community-Building.webp",
  },
];

const fallbackNews: NewsArticle[] = [
  {
    id: 9001,
    title: "PLF Convening Explores Civil Society Capacity Priorities",
    content: "New updates from PLF's knowledge and collaboration work.",
    excerpt: "Partners discuss governance, learning systems and institutional sustainability.",
    imageUrl: "/gallery/events/event-1.webp",
    category: "Partnership",
    publishedAt: "2025-05-10T00:00:00.000Z",
  },
  {
    id: 9002,
    title: "Capacity Academy Learning Cohort Announced",
    content: "Training support continues for social-sector professionals.",
    excerpt: "The cohort will focus on organisational systems, leadership and accountability.",
    imageUrl: "/gallery/events/event-2.webp",
    category: "Education",
    publishedAt: "2025-04-28T00:00:00.000Z",
  },
  {
    id: 9003,
    title: "Governance Toolkit Released for NGO Boards",
    content: "A practical resource for civil-society governance and board strengthening.",
    excerpt: "The toolkit helps organisations improve roles, compliance and transparent decision-making.",
    imageUrl: "/gallery/events/event-5.webp",
    category: "Governance",
    publishedAt: "2025-04-15T00:00:00.000Z",
  },
  {
    id: 9004,
    title: "Digital Civil Society Sessions Begin",
    content: "Training cohorts are supporting responsible digital adoption.",
    excerpt: "New sessions help organisations use data, technology and monitoring tools responsibly.",
    imageUrl: "/images/women-development.jpg",
    category: "Digital",
    publishedAt: "2025-03-30T00:00:00.000Z",
  },
];

const fallbackCampaigns: Campaign[] = [
  {
    id: 9101,
    title: "Capacity Academy for Grassroots Organisations",
    description: "Support structured learning on governance, finance, leadership, monitoring and organisational sustainability.",
    goalAmount: 2500000,
    raisedAmount: 1876000,
    category: "Capacity",
    imageUrl: "/images/Rural-Development.png",
    isActive: true,
    createdAt: "2025-05-12T00:00:00.000Z",
    donorCount: 318,
  },
  {
    id: 9102,
    title: "Governance and Finance Excellence Initiative",
    description: "Help NGOs strengthen financial systems, compliance readiness, internal controls and board practices.",
    goalAmount: 1200000,
    raisedAmount: 760000,
    category: "Governance",
    imageUrl: "/images/education.webp",
    isActive: true,
    createdAt: "2025-04-08T00:00:00.000Z",
    donorCount: 205,
  },
  {
    id: 9103,
    title: "Civil Society Knowledge Centre",
    description: "Build practical tools, case studies, webinars and knowledge resources for social-sector organisations.",
    goalAmount: 900000,
    raisedAmount: 410000,
    category: "Knowledge",
    imageUrl: "/images/healthcare.jpg",
    isActive: true,
    createdAt: "2025-03-15T00:00:00.000Z",
    donorCount: 136,
  },
];

const galleryFallbacks = [
  "/gallery/events/event-1.webp",
  "/gallery/events/event-3.webp",
  "/gallery/events/event-5.webp",
  "/impact/impact-2.webp",
  "/impact/impact-4.webp",
  "/images/education.webp",
];

const impactItems = [
  { icon: Building2, text: "Strengthen NGO systems and governance" },
  { icon: BookOpenCheck, text: "Build learning resources and practical toolkits" },
  { icon: Network, text: "Connect civil society with partners and platforms" },
  { icon: Landmark, text: "Support evidence-led sector dialogue" },
];

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function imageForNews(item: NewsArticle, index: number) {
  return item.imageUrl || galleryFallbacks[index % galleryFallbacks.length];
}

export function HomeImpactShowcase({ featuredCampaign, campaigns, news, gallery }: HomeImpactShowcaseProps) {
  const [storyIndex, setStoryIndex] = useState(0);
  const [newsIndex, setNewsIndex] = useState(0);
  const [isNewsPaused, setIsNewsPaused] = useState(false);
  const newsPanelRef = useRef<HTMLDivElement>(null);
  const campaign = featuredCampaign ?? {
    id: 0,
    title: "Support Stronger Civil Society.",
    description:
      "Help PLF build knowledge, capacity, governance and collaboration platforms for organisations serving communities across India.",
    goalAmount: 2500000,
    raisedAmount: 1876000,
    category: "Featured",
    imageUrl: "/images/Rural-Development.png",
    isActive: true,
    createdAt: new Date().toISOString(),
    donorCount: 720,
  };
  const newsItems = useMemo(() => (news.length > 0 ? news : fallbackNews), [news]);
  const campaignItems = useMemo(() => (campaigns.length > 0 ? campaigns : fallbackCampaigns), [campaigns]);
  const galleryItems = useMemo(
    () =>
      gallery.length > 0
        ? gallery.slice(0, 6).map((item, index) => ({
            src: item.imageUrl || galleryFallbacks[index % galleryFallbacks.length],
            alt: item.caption || "PLF civil society moment",
          }))
        : galleryFallbacks.map((src) => ({ src, alt: "PLF civil society moment" })),
    [gallery],
  );
  const activeStory = storySlides[storyIndex];
  const raisedPercent = Math.min(100, Math.round((campaign.raisedAmount / Math.max(campaign.goalAmount, 1)) * 100));
  const scrollingNews = useMemo(
    () => [...newsItems.slice(newsIndex), ...newsItems.slice(0, newsIndex)],
    [newsIndex, newsItems],
  );

  useEffect(() => {
    if (isNewsPaused || newsItems.length < 2) return;

    const timer = window.setInterval(() => {
      setNewsIndex((current) => (current + 1) % newsItems.length);
    }, 12000);

    return () => window.clearInterval(timer);
  }, [isNewsPaused, newsItems.length]);

  const moveNews = (direction: 1 | -1) => {
    setNewsIndex((current) => (current + direction + newsItems.length) % newsItems.length);
  };

  const moveStory = (direction: 1 | -1) => {
    setStoryIndex((current) => (current + direction + storySlides.length) % storySlides.length);
  };

  return (
     <>
    <section className="bg-background py-12 sm:py-16">
      <div className="container mx-auto px-5 lg:px-8">
       

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_.88fr_1fr]">
          <article className="min-w-0">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[.18em] text-primary">Partner learning</p>
                <h3 className="mt-2 font-serif text-2xl font-bold text-primary">Voices from the Sector</h3>
              </div>
              <Link href="/about" className="inline-flex items-center gap-1 text-xs font-bold text-primary">
                Read About PLF <ArrowRight className="size-3.5" />
              </Link>
            </div>
            <div className="overflow-hidden rounded-[8px] border bg-card shadow-sm">
              <div className="group relative h-64 overflow-hidden">
                <img src={activeStory.image} alt={activeStory.name} className="size-full object-cover transition duration-500 group-hover:scale-105" />
                <button type="button" aria-label="Play story" className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary-foreground/80 bg-foreground/35 text-primary-foreground backdrop-blur-sm transition group-hover:bg-primary">
                  <Play className="ml-1 size-7 fill-current" />
                </button>
              </div>
              <div className="p-6">
                <p className="text-base leading-7 text-foreground">&ldquo;{activeStory.quote}&rdquo;</p>
                <p className="mt-5 text-sm font-bold text-primary">- {activeStory.name}</p>
                <p className="text-xs text-muted-foreground">{activeStory.role}</p>
              </div>
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <Button type="button" variant="outline" size="icon" className="rounded-full bg-card" onClick={() => moveStory(-1)} aria-label="Previous story">
                <ChevronLeft />
              </Button>
              <Button type="button" variant="outline" size="icon" className="rounded-full bg-card" onClick={() => moveStory(1)} aria-label="Next story">
                <ChevronRight />
              </Button>
            </div>
          </article>

          <article className="min-w-0">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[.18em] text-primary">Latest news</p>
                <h3 className="mt-2 font-serif text-2xl font-bold text-primary">Stay Informed</h3>
              </div>
              <Link href="/news" className="inline-flex items-center gap-1 text-xs font-bold text-primary">
                View All News <ArrowRight className="size-3.5" />
              </Link>
            </div>
            <div
              ref={newsPanelRef}
              className="relative rounded-[8px] border bg-card p-3 shadow-sm"
              onMouseEnter={() => setIsNewsPaused(true)}
              onMouseLeave={() => setIsNewsPaused(false)}
              onFocus={() => setIsNewsPaused(true)}
              onBlur={() => setIsNewsPaused(false)}
            >
              <div className="absolute right-3 top-3 z-10 flex items-center gap-1 rounded-full bg-background/90 px-2 py-1 text-[11px] font-semibold text-primary shadow-sm">
                {isNewsPaused ? <Pause className="size-3" /> : <Sparkles className="size-3" />}
                {isNewsPaused ? "Paused" : "Live"}
              </div>
              <div className="relative h-[348px] overflow-hidden pt-8 [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]">
                <div className={`vertical-news-marquee space-y-3 ${isNewsPaused ? "animation-paused" : ""}`}>
                  {[...scrollingNews, ...scrollingNews].map((item, index) => (
                    <Link
                      href={`/news/${item.id}`}
                      key={`${item.id}-${index}`}
                      className="group grid grid-cols-[6rem_1fr] gap-4 rounded-[8px] p-2 transition duration-300 hover:bg-muted/70"
                    >
                      <img src={imageForNews(item, index)} alt={item.title} className="aspect-[1.25] w-24 rounded-[6px] object-cover" />
                      <div className="min-w-0">
                        <p className="text-[11px] font-medium text-muted-foreground">{formatDate(item.publishedAt)}</p>
                        <h4 className="mt-1 line-clamp-2 text-sm font-bold leading-5 text-foreground transition group-hover:text-primary">
                          {item.title}
                        </h4>
                        <span className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-primary">
                          Read More <ArrowRight className="size-3.5" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <Button type="button" variant="outline" className="rounded-full bg-background" onClick={() => moveNews(-1)}>
                  <ChevronUp data-icon="inline-start" />
                  Older
                </Button>
                <Button type="button" variant="outline" className="rounded-full bg-background" onClick={() => moveNews(1)}>
                  Newer
                  <ChevronRight data-icon="inline-end" className="rotate-90" />
                </Button>
              </div>
            </div>
          </article>

          <article className="min-w-0">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[.18em] text-primary">Field evidence</p>
                <h3 className="mt-2 font-serif text-2xl font-bold text-primary">Learning in Practice</h3>
              </div>
              <Link href="/gallery" className="inline-flex items-center gap-1 text-xs font-bold text-primary">
                View Full Gallery <ArrowRight className="size-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {galleryItems.map((item, index) => (
                <Link
                  href="/gallery"
                  key={`${item.src}-${index}`}
                  className={`group relative overflow-hidden rounded-[8px] ${index === 0 || index === 5 ? "aspect-[1.15]" : "aspect-square"}`}
                >
                  <img src={item.src} alt={item.alt} className="size-full object-cover transition duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-primary/0 transition group-hover:bg-primary/25" />
                </Link>
              ))}
            </div>
            <Button asChild className="mt-5 h-20 w-full rounded-[8px] bg-primary/95 text-primary-foreground">
              <Link href="/gallery">
                View Full Gallery
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
          </article>
        </div>
           <div className="overflow-hidden rounded-[8px] bg-primary text-primary-foreground shadow-[0_20px_60px_rgba(12,70,130,.22)]">
          <div className="grid min-h-[265px] lg:grid-cols-[1fr_.48fr_.58fr]">
            <div className="flex flex-col justify-center p-7 sm:p-10">
              <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[.16em] text-primary-foreground/85">
                <span className="h-0.5 w-8 bg-accent" />
                Featured initiative
              </div>
              <h2 className="max-w-xl font-serif text-3xl font-bold leading-tight sm:text-4xl">
                {campaign.title}
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-6 text-primary-foreground/82 sm:text-base">
                {campaign.description}
              </p>
              <div className="mt-7 grid max-w-xl gap-3 sm:grid-cols-[auto_1fr_auto] sm:items-center">
                <div>
                  <p className="text-xs font-semibold text-primary-foreground/72">Raised</p>
                  <p className="font-bold">₹{campaign.raisedAmount.toLocaleString("en-IN")}</p>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-primary-foreground/25">
                  <div className="h-full rounded-full bg-primary-foreground" style={{ width: `${raisedPercent}%` }} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-primary-foreground/72">Goal</p>
                  <p className="font-bold">₹{campaign.goalAmount.toLocaleString("en-IN")}</p>
                </div>
              </div>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Button asChild variant="secondary" className="rounded-full bg-primary-foreground px-6 text-primary hover:bg-primary-foreground/90">
                  <Link href="/donate">
                    <Heart data-icon="inline-start" />
                    Support PLF
                    <ArrowRight data-icon="inline-end" />
                  </Link>
                </Button>
                <Link href={campaign.id ? `/campaigns/${campaign.id}` : "/campaigns"} className="inline-flex items-center gap-2 text-sm font-semibold text-primary-foreground/88 transition hover:text-primary-foreground">
                  View Initiative
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            <div className="relative min-h-[260px] overflow-hidden">
              <img src={campaign.imageUrl || "/images/Rural-Development.png"} alt={campaign.title} className="absolute inset-0 size-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/45 via-transparent to-primary/35" />
            </div>

            <div className="flex items-center p-6 sm:p-8">
              <div className="w-full rounded-[8px] bg-card p-5 text-card-foreground shadow-2xl sm:p-6">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-0.5 w-8 bg-accent" />
                  <p className="text-sm font-bold text-primary">What Your Support Builds</p>
                </div>
                <div className="space-y-4">
                  {impactItems.map(({ icon: Icon, text }) => (
                    <div key={text} className="grid grid-cols-[2.25rem_1fr] items-center gap-3">
                      <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <Icon className="size-4" />
                      </span>
                      <p className="text-sm font-medium leading-5 text-foreground">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14">
          <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.18em] text-primary">Active initiatives</p>
              <h3 className="mt-2 font-serif text-3xl font-bold text-primary">Choose an Initiative to Strengthen</h3>
            </div>
            <Button asChild variant="outline" className="w-fit rounded-full bg-card text-primary">
              <Link href="/campaigns">
                View All Initiatives
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {campaignItems.slice(0, 3).map((item) => {
              const progress = Math.min(100, Math.round((item.raisedAmount / Math.max(item.goalAmount, 1)) * 100));

              return (
                <article key={item.id} className="group overflow-hidden rounded-[8px] border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative h-48 overflow-hidden">
                    <img src={item.imageUrl || "/images/Rural-Development.png"} alt={item.title} className="size-full object-cover transition duration-500 group-hover:scale-105" />
                    <div className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground shadow-sm">
                      {item.category}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="mb-3 flex items-center gap-2 text-xs font-medium text-muted-foreground">
                      <CalendarDays className="size-3.5 text-primary" />
                      {formatDate(item.createdAt)}
                    </div>
                    <h4 className="line-clamp-2 font-serif text-xl font-bold text-primary">{item.title}</h4>
                    <p className="mt-3 line-clamp-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
                    <div className="mt-5">
                      <div className="mb-2 flex justify-between text-xs font-bold">
                        <span>₹{item.raisedAmount.toLocaleString("en-IN")}</span>
                        <span className="text-muted-foreground">₹{item.goalAmount.toLocaleString("en-IN")}</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-muted">
                        <div className="h-full rounded-full bg-primary" style={{ width: `${progress}%` }} />
                      </div>
                    </div>
                    <div className="mt-5 flex items-center justify-between gap-3">
                      <span className="text-xs font-semibold text-muted-foreground">{item.donorCount} supporters</span>
                      <Button asChild size="sm" className="rounded-full">
                        <Link href={`/campaigns/${item.id}`}>
                          Support <ArrowRight data-icon="inline-end" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

       

        
      </div>
      
    </section>
  
        </>
  );
}
