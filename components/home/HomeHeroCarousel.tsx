"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Heart, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    eyebrow: "Passion for the Least Foundation",
    title: "Building dignity where support is needed most.",
    description:
      "We partner with communities across education, livelihoods, animal welfare, rural development, and environmental action.",
    image: "/images/Community-Building.webp",
    primaryHref: "/donate",
    primaryLabel: "Donate Now",
    secondaryHref: "/about",
    secondaryLabel: "Know Our Story",
  },
  {
    eyebrow: "Education and opportunity",
    title: "Helping children stay in school and dream forward.",
    description:
      "Scholarships, mentoring, learning material, and community support help first-generation learners keep moving.",
    image: "/images/education.webp",
    primaryHref: "/membership",
    primaryLabel: "Join Us",
    secondaryHref: "/news",
    secondaryLabel: "Latest Updates",
  },
  {
    eyebrow: "Care for people, animals, and place",
    title: "Small acts of care can change a whole village.",
    description:
      "From clean water and health awareness to animal care camps and native plantation drives, our work stays close to real daily needs.",
    image: "/images/Rural-Development.png",
    primaryHref: "/campaigns",
    primaryLabel: "Support Campaigns",
    secondaryHref: "/gallery",
    secondaryLabel: "View Gallery",
  },
];

export function HomeHeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeSlide = slides[activeIndex];

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setActiveIndex((index + slides.length) % slides.length);
  };

  return (
    <section
      className="relative min-h-[calc(100dvh-6.5rem)] overflow-hidden bg-primary text-primary-foreground"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.title}
          className={`absolute inset-0 transition-opacity duration-700 ${index === activeIndex ? "opacity-100" : "opacity-0"}`}
          aria-hidden={index !== activeIndex}
        >
          <img src={slide.image} alt="" className="size-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/82 to-primary/16" />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(5,35,67,.55),transparent_45%)]" />
        </div>
      ))}

      <div className="container relative mx-auto flex min-h-[calc(100dvh-6.5rem)] items-center px-5 py-16 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[.18em] text-primary-foreground/86">
            <span className="h-0.5 w-10 bg-accent" />
            {activeSlide.eyebrow}
          </div>
          <h1 className="font-serif text-5xl font-bold leading-[1.02] text-primary-foreground sm:text-6xl lg:text-7xl">
            {activeSlide.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-primary-foreground/82 sm:text-lg">
            {activeSlide.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full bg-primary-foreground px-7 text-primary hover:bg-primary-foreground/90">
              <Link href={activeSlide.primaryHref}>
                <Heart data-icon="inline-start" />
                {activeSlide.primaryLabel}
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-primary-foreground/55 bg-primary/10 px-7 text-primary-foreground backdrop-blur hover:bg-primary-foreground hover:text-primary">
              <Link href={activeSlide.secondaryHref}>
                {activeSlide.secondaryLabel}
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-6 left-5 right-5 flex flex-col gap-4 sm:left-8 sm:right-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${index === activeIndex ? "w-11 bg-accent" : "w-2.5 bg-primary-foreground/55 hover:bg-primary-foreground"}`}
                aria-label={`Show slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button type="button" variant="outline" size="icon" className="rounded-full border-primary-foreground/45 bg-primary/20 text-primary-foreground backdrop-blur hover:bg-primary-foreground hover:text-primary" onClick={() => goToSlide(activeIndex - 1)} aria-label="Previous hero slide">
              <ChevronLeft />
            </Button>
            <Button type="button" variant="outline" size="icon" className="rounded-full border-primary-foreground/45 bg-primary/20 text-primary-foreground backdrop-blur hover:bg-primary-foreground hover:text-primary" onClick={() => setIsPaused((paused) => !paused)} aria-label={isPaused ? "Play hero carousel" : "Pause hero carousel"}>
              {isPaused ? <Play /> : <Pause />}
            </Button>
            <Button type="button" variant="outline" size="icon" className="rounded-full border-primary-foreground/45 bg-primary/20 text-primary-foreground backdrop-blur hover:bg-primary-foreground hover:text-primary" onClick={() => goToSlide(activeIndex + 1)} aria-label="Next hero slide">
              <ChevronRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

