"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function HomeHero() {
  return (
    <section id="mission" className="px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-12 md:gap-14">
        <div className="md:col-span-5">
          <div className="mb-5 flex items-center gap-2"><span className="h-px w-7 bg-primary" /><span className="text-[11px] font-bold uppercase tracking-[.22em] text-primary">Our mission</span></div>
          <h2 className="editorial-heading text-5xl leading-[.92] text-[#172d3f] sm:text-6xl lg:text-7xl">We Strengthen the Organisations That Create Change.</h2>
          <Link href="/about" className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#172d3f]/25 px-5 py-2.5 text-sm font-semibold transition hover:border-primary hover:text-primary">Our Approach <ArrowUpRight className="size-4" /></Link>
        </div>
        <div className="flex items-center md:col-span-7 md:pt-7">
          <p className="max-w-2xl text-base leading-8 text-[#4d5f69] md:text-lg">PLF helps NGOs, civil-society organisations and social-sector professionals build the knowledge, governance, financial systems, leadership and partnerships needed for sustainable impact. By strengthening institutions and connecting people with practical evidence, we help communities create change that lasts.</p>
        </div>
      </div>
    </section>
  );
}
