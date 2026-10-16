"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Compass, Target } from "lucide-react";

export function HomeHero() {
  return (
    <section id="mission" className="px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-5xl">
          <div>
            <div className="mb-5 flex items-center gap-2"><span className="h-px w-7 bg-primary" /><span className="text-[11px] font-bold uppercase tracking-[.22em] text-primary">Who we are</span></div>
            <h2 className="editorial-heading text-5xl leading-[.9] text-[#172d3f] sm:text-6xl lg:text-7xl">We strengthen the organisations that create change.</h2>
          </div>
          <div>
            <p className="section-intro-description text-[#4d5f69]">Passion for the Least Foundation is a national knowledge and capacity-building organisation committed to strengthening civil society and the wider social sector in India.</p>
            <Link href="/about" className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#172d3f]/25 px-5 py-2.5 text-sm font-semibold transition hover:border-primary hover:text-primary">About PLF <ArrowUpRight className="size-4" /></Link>
          </div>
        </div>

        <div className="mt-16 space-y-16 lg:space-y-24">
          <article className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
            <div>
              <div className="relative min-h-[390px] overflow-hidden rounded-[28px] sm:min-h-[520px]">
                <Image src="/images/editorial/vision-community-inclusion.avif" alt="Community members holding a Leave No One Behind banner" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061d31]/36 via-transparent to-transparent" />
              </div>
            </div>
            <div className="lg:px-4">
              <div className="inline-flex items-center gap-3 rounded-full bg-primary/8 px-4 py-2.5 text-primary"><Compass className="size-4" /><span className="text-[10px] font-bold uppercase tracking-[.18em]">Our vision</span></div>
              <h3 className="editorial-heading mt-7 text-4xl leading-[1.02] text-[#172d3f] sm:text-5xl lg:text-6xl">A strong, capable, accountable and connected civil society.</h3>
              <p className="mt-7 max-w-xl text-lg leading-8 text-[#52636b]">Contributing to an inclusive, equitable and sustainable India where no one is left behind.</p>
              <div className="mt-9 flex flex-wrap gap-2">
                {["Inclusive", "Equitable", "Sustainable", "Connected"].map((item) => <span key={item} className="rounded-full border border-primary/20 px-4 py-2 text-xs font-semibold text-primary">{item}</span>)}
              </div>
            </div>
          </article>

          <article className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
            <div className="lg:px-4">
              <div className="inline-flex items-center gap-3 rounded-full bg-[#e2bd61]/20 px-4 py-2.5 text-[#745611]"><Target className="size-4" /><span className="text-[10px] font-bold uppercase tracking-[.18em]">Our mission</span></div>
              <h3 className="editorial-heading mt-7 text-4xl leading-[1.02] text-[#172d3f] sm:text-5xl lg:text-6xl">Turn knowledge and collaboration into lasting capability.</h3>
              <p className="mt-7 max-w-xl text-lg leading-8 text-[#52636b]">PLF strengthens India&apos;s civil-society and social-sector ecosystem by sharing knowledge, building organisational and leadership capacity, promoting good governance, advancing learning and enabling collaboration for more sustainable social impact.</p>
              <p className="mt-6 border-l-2 border-[#e2bd61] pl-5 text-sm font-semibold leading-7 text-[#31495a]">Our work stays centred on people who are vulnerable, excluded or underserved.</p>
            </div>
            <div className="relative min-h-[390px] overflow-hidden rounded-[28px] sm:min-h-[520px] lg:order-last">
              <Image src="/images/editorial/mission-classroom-learning.jfif" alt="Schoolchildren participating in a classroom learning session" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061d31]/45 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-[#061d31]/72 p-5 text-white backdrop-blur-md sm:bottom-8 sm:left-8 sm:max-w-sm">
                <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#e2bd61]">Knowledge for change</p>
                <p className="mt-2 text-sm font-semibold leading-6">Practical learning, stronger leadership and institutions equipped to sustain impact.</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
