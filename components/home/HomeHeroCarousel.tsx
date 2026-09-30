"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

const slides = [
  {
    eyebrow: "Passion for the Least Foundation",
    title: "Knowledge for Change. Capacity for Impact.",
    description: "Strengthening India's civil society through knowledge, capacity building, leadership, governance and collaboration.",
    image: "/images/Community-Building.webp",
    primaryHref: "/services",
    primaryLabel: "Explore Focus Areas",
    secondaryHref: "/about",
    secondaryLabel: "About PLF",
  },
  {
    eyebrow: "Civil society strengthening",
    title: "Building stronger organisations for lasting social impact.",
    description: "PLF works with NGOs, professionals, CSR partners, foundations and institutions to strengthen the systems that sustain social change.",
    image: "/images/education.webp",
    primaryHref: "/membership",
    primaryLabel: "Join the Network",
    secondaryHref: "/contact",
    secondaryLabel: "Partner With Us",
  },
  {
    eyebrow: "Knowledge, collaboration and practice",
    title: "Connecting people, institutions and evidence.",
    description: "From governance and finance to learning, digital transformation and policy dialogue, PLF helps social-sector actors become more capable and accountable.",
    image: "/images/Rural-Development.png",
    primaryHref: "/about",
    primaryLabel: "Our Approach",
    secondaryHref: "/news",
    secondaryLabel: "Latest Updates",
  },
];

export function HomeHeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeSlide = slides[activeIndex];

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => setActiveIndex((current) => (current + 1) % slides.length), 6500);
    return () => window.clearInterval(timer);
  }, [isPaused]);

  const goToSlide = (index: number) => setActiveIndex((index + slides.length) % slides.length);

  return (
    <section className="px-3 pb-7 pt-4 sm:px-4">
      <div className="relative mx-auto min-h-[620px] max-w-[1400px] overflow-hidden rounded-[28px] text-white md:min-h-[720px]" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} onFocus={() => setIsPaused(true)} onBlur={() => setIsPaused(false)}>
        {slides.map((slide, index) => (
          <div key={slide.title} className={`absolute inset-0 transition-opacity duration-1000 ${index === activeIndex ? "opacity-100" : "opacity-0"}`} aria-hidden={index !== activeIndex}>
            <img src={slide.image} alt="" className={`size-full object-cover transition-transform duration-[6500ms] ease-linear ${index === activeIndex ? "scale-105" : "scale-100"}`} />
            <div className="absolute inset-0 bg-gradient-to-r from-[#092d4d]/90 via-[#0b4a7f]/60 to-black/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/15" />
          </div>
        ))}

        <div className="relative z-10 flex min-h-[620px] flex-col justify-between p-7 sm:p-10 md:min-h-[720px] md:p-14 lg:p-16">
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[.16em] text-white/90">
            <span className="size-2 rounded-full bg-accent" />
            Est. 2025 — A national platform for civil society
          </div>

          <div className="max-w-[860px] py-12">
            <div className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[.22em] text-white/85">
              <span className="h-px w-9 bg-accent" />
              {activeSlide.eyebrow}
            </div>
            <h1 className="editorial-heading max-w-[920px] text-[3.7rem] leading-[.84] text-white sm:text-7xl md:text-[6rem] lg:text-[7.25rem]">{activeSlide.title}</h1>
            <p className="mt-7 max-w-xl text-sm leading-7 text-white/85 sm:text-base">{activeSlide.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={activeSlide.primaryHref} className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#083b68]">
                {activeSlide.primaryLabel}<ArrowUpRight className="size-4" />
              </Link>
              <Link href={activeSlide.secondaryHref} className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-primary">
                <span className="flex size-6 items-center justify-center rounded-full bg-white text-primary"><Play className="ml-0.5 size-3 fill-current" /></span>{activeSlide.secondaryLabel}
              </Link>
            </div>
          </div>

          <div className="flex items-end justify-between gap-5">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">{["/leadership/Founder.jpg", "/leadership/Secretary.jpg", "/leadership/Treasurer.jpg"].map((src) => <img key={src} src={src} alt="PLF supporter" className="size-8 rounded-full border-2 border-white object-cover" />)}</div>
              <span className="hidden text-xs text-white/80 sm:block">Growing together with civil-society partners</span>
            </div>
            <div className="flex items-center gap-2">
              <button type="button" onClick={() => goToSlide(activeIndex - 1)} aria-label="Previous slide" className="flex size-10 items-center justify-center rounded-full border border-white/35 bg-black/10 backdrop-blur transition hover:bg-white hover:text-primary"><ChevronLeft className="size-4" /></button>
              <button type="button" onClick={() => setIsPaused((value) => !value)} aria-label={isPaused ? "Play slides" : "Pause slides"} className="flex size-10 items-center justify-center rounded-full border border-white/35 bg-black/10 backdrop-blur transition hover:bg-white hover:text-primary">{isPaused ? <Play className="size-4" /> : <Pause className="size-4" />}</button>
              <button type="button" onClick={() => goToSlide(activeIndex + 1)} aria-label="Next slide" className="flex size-10 items-center justify-center rounded-full border border-white/35 bg-black/10 backdrop-blur transition hover:bg-white hover:text-primary"><ChevronRight className="size-4" /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
