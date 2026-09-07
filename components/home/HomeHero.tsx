"use client";

import Link from "next/link";
import { ArrowRight, Network, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const framework = ["People", "Organisations", "Networks", "Systems", "Policy"];

export function HomeHero() {
  return (
    <section id="mission" className="relative overflow-hidden bg-[#f4f9fc] py-16 sm:py-20">
      <div className="container relative mx-auto grid items-center gap-12 px-5 lg:grid-cols-[.95fr_1.05fr] lg:px-8">
        <div className="max-w-xl">
          <p className="text-sm font-bold uppercase tracking-[.22em] text-primary">National civil society platform</p>
          <h2 className="mt-4 font-serif text-4xl font-black leading-tight text-[#12385d] sm:text-5xl">
            We strengthen the organisations that create change.
          </h2>
          <div className="my-7 h-1 w-14 bg-accent" />
          <p className="max-w-lg text-base leading-8 text-[#4b6d89]">
            PLF helps NGOs, civil-society organisations and social-sector professionals build the knowledge, governance,
            financial systems, leadership and partnerships needed for sustainable impact.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full px-7 shadow-lg shadow-primary/20">
              <Link href="/about">
                Our Approach
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-primary/25 bg-white/70 px-7 text-primary hover:bg-primary hover:text-primary-foreground">
              <Link href="/contact">
                <Network data-icon="inline-start" />
                Collaborate
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-5">
          <div className="rounded-[8px] border bg-card p-6 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <ShieldCheck className="size-5" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[.18em] text-primary">Core proposition</p>
                <h3 className="font-serif text-2xl font-bold text-foreground">Knowledge - Capacity - Collaboration - Impact</h3>
              </div>
            </div>
            <p className="text-sm leading-6 text-muted-foreground">
              PLF acts as a multiplier for social impact by improving the people, systems and institutions that serve
              communities across India.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-5">
            {framework.map((item, index) => (
              <div key={item} className="rounded-[8px] border bg-card p-4 text-center shadow-sm">
                <p className="text-xs font-bold text-accent">{String(index + 1).padStart(2, "0")}</p>
                <p className="mt-2 text-sm font-bold text-primary">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
