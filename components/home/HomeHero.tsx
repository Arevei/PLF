"use client";

import Link from "next/link";
import { ArrowRight, Heart, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";

const aboutImage = "/images/Community-Building.webp";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-[#f4f9fc] py-16 sm:py-24">
      <div className="absolute -left-24 -top-24 size-72 rounded-full bg-[#dceef8]" />
      <div className="absolute -right-36 top-1/2 hidden size-128 -translate-y-1/2 rounded-full border-[1.25rem] border-primary/10 lg:block" />
      <div className="container relative mx-auto grid items-center gap-14 px-5 lg:grid-cols-[.88fr_1.12fr] lg:gap-10 lg:px-8">
        <div className="order-1 max-w-xl">
          <p className="text-sm font-bold uppercase tracking-[.25em] text-primary">Passion for the least</p>
          <h2 className="mt-4 font-serif text-5xl font-black leading-[.98] tracking-tight text-[#12385d] sm:text-6xl lg:text-[4.5rem]">
            Building dignity.<br />Empowering futures.
          </h2>
          <div className="my-8 h-1 w-14 bg-accent" />
          <p className="max-w-lg text-base leading-8 text-[#4b6d89] sm:text-lg">
            We walk with communities to create lasting change through livelihood, education, care for animals, and a healthier planet.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full px-7 shadow-lg shadow-primary/20">
              <Link href="/about">
                Our Mission
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-primary/25 bg-white/60 px-7 text-primary hover:bg-primary hover:text-primary-foreground">
              <Link href="/donate">
                <Heart data-icon="inline-start" />
                Donate Now
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative order-2 min-h-104 sm:min-h-136">
          <div className="absolute inset-y-0 -right-32 w-[calc(100%+8rem)] overflow-hidden rounded-l-[52%] rounded-r-none border-[1.1rem] border-primary bg-primary shadow-2xl sm:-right-48 sm:w-[calc(100%+12rem)]">
            <img src={aboutImage} alt="Children gathered during a PLEF community program" className="size-full object-cover object-center" />
          </div>
          <div className="absolute bottom-5 left-0 z-10 max-w-88 rounded-[8px] bg-primary p-5 text-primary-foreground shadow-2xl sm:bottom-8 sm:-left-8 sm:p-6">
            <div className="flex items-start gap-3">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary-foreground/15">
                <HeartHandshake className="size-5" />
              </span>
              <div>
                <p className="font-bold">A compassionate India</p>
                <p className="mt-1 text-sm leading-6 text-primary-foreground/78">
                  Where every life is valued and every community thrives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;

