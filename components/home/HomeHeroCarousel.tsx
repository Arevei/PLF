"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

const slides = [
  {
    eyebrow: "Passion for the Least Foundation",
    title: "Knowledge for Change. Capacity for Impact.",
    description: "Strengthening India's civil society through knowledge, capacity building, leadership, governance and collaboration.",
    image: "/images/editorial/organisational-workshop.webp",
    primaryHref: "/services",
    primaryLabel: "Explore Focus Areas",
    secondaryHref: "/about",
    secondaryLabel: "About PLF",
  },
  {
    eyebrow: "Civil society strengthening",
    title: "Building stronger organisations for lasting social impact.",
    description: "PLF works with NGOs, professionals, CSR partners, foundations and institutions to strengthen the systems that sustain social change.",
    image: "/images/editorial/leadership-presentation.webp",
    primaryHref: "/membership",
    primaryLabel: "Join the Network",
    secondaryHref: "/contact",
    secondaryLabel: "Partner With Us",
  },
  {
    eyebrow: "Knowledge, collaboration and practice",
    title: "Connecting people, institutions and evidence.",
    description: "From governance and finance to learning, digital transformation and policy dialogue, PLF helps social-sector actors become more capable and accountable.",
    image: "/images/editorial/workshop-collaboration.webp",
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
            <Image src={slide.image} alt="" fill priority={index === 0} sizes="(min-width: 1440px) 1400px, 100vw" className={`object-cover transition-transform duration-[6500ms] ease-linear motion-reduce:transition-none ${index === activeIndex ? "scale-105 motion-reduce:scale-100" : "scale-100"}`} />
            <div className="absolute inset-0 bg-gradient-to-r from-[#092d4d]/90 via-[#0b4a7f]/60 to-black/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/15" />
          </div>
        ))}

        <div className="relative z-10 flex min-h-[620px] flex-col justify-between p-7 sm:p-10 md:min-h-[720px] md:p-14 lg:p-16">
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[.16em] text-white/90">
            <span className="size-2 rounded-full bg-accent" />
            A national knowledge and capacity-building organisation
          </div>

          <div className="max-w-[860px] py-12">
            <div className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[.22em] text-white/85">
              <span className="h-px w-9 bg-accent" />
              {activeSlide.eyebrow}
            </div>
            <h1 className="editorial-heading max-w-[920px] text-[3.7rem] leading-[.84] text-white sm:text-7xl md:text-[6rem] lg:text-[7.25rem]">{activeSlide.title}</h1>
            <p className="mt-7 max-w-xl text-sm leading-7 text-white/85 sm:text-base">{activeSlide.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={activeSlide.primaryHref} className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#083b68] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                {activeSlide.primaryLabel}<ArrowUpRight className="size-4" />
              </Link>
              <Link href={activeSlide.secondaryHref} className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                <span className="flex size-6 items-center justify-center rounded-full bg-white text-primary"><Play className="ml-0.5 size-3 fill-current" /></span>{activeSlide.secondaryLabel}
              </Link>
            </div>
          </div>

          <div className="flex items-end justify-between gap-5">
            <div className="hidden flex-wrap gap-2 sm:flex">
              {["NGOs", "Social-sector professionals", "CSR teams", "Foundations"].map((item) => <span key={item} className="rounded-full border border-white/25 bg-black/10 px-3 py-2 text-[10px] font-semibold text-white/80 backdrop-blur">{item}</span>)}
            </div>
            <div className="ml-auto flex items-center gap-2">
              <button type="button" onClick={() => goToSlide(activeIndex - 1)} aria-label="Previous slide" className="flex size-10 items-center justify-center rounded-full border border-white/35 bg-black/10 backdrop-blur transition hover:bg-white hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><ChevronLeft className="size-4" /></button>
              <button type="button" onClick={() => setIsPaused((value) => !value)} aria-label={isPaused ? "Play slides" : "Pause slides"} className="flex size-10 items-center justify-center rounded-full border border-white/35 bg-black/10 backdrop-blur transition hover:bg-white hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">{isPaused ? <Play className="size-4" /> : <Pause className="size-4" />}</button>
              <button type="button" onClick={() => goToSlide(activeIndex + 1)} aria-label="Next slide" className="flex size-10 items-center justify-center rounded-full border border-white/35 bg-black/10 backdrop-blur transition hover:bg-white hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><ChevronRight className="size-4" /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
