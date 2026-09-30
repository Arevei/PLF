"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BarChart3, Building2, FileSearch, Handshake, Laptop, Mail, Minus, Network, Plus, Scale, Sparkles, Users } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { FacebookPagePlugin } from "@/components/home/FacebookPagePlugin";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeHeroCarousel } from "@/components/home/HomeHeroCarousel";
import { HomeImpactShowcase } from "@/components/home/HomeImpactShowcase";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { useGetStats, useListCampaigns, useListGallery, useListNews } from "@/lib/api-client/api";

const impactCards = [
  { title: "Knowledge", description: "Generate, curate and share practical evidence, tools, research and good practices.", image: "/images/education.webp", href: "/services" },
  { title: "Capacity", description: "Build the capabilities of organisations, leaders, professionals and institutions.", image: "/images/women-development.jpg", href: "/services" },
  { title: "Collaboration", description: "Connect civil society, CSR, philanthropy, government, academia and development partners.", image: "/images/Community-Building.webp", href: "/services" },
];

const focusAreas = [
  { title: "Organisational Development", description: "Strategy, governance, policies, people systems and institutional sustainability.", icon: Building2 },
  { title: "Governance & Finance", description: "Financial planning, internal controls, compliance and transparent accountability.", icon: Scale },
  { title: "Leadership", description: "Board development, executive leadership, mentoring and professional growth.", icon: Users },
  { title: "Knowledge & Research", description: "Research, case studies, toolkits, publications and communities of practice.", icon: FileSearch },
  { title: "Digital Transformation", description: "Technology adoption, MIS, data management and responsible innovation.", icon: Laptop },
  { title: "Resource Mobilisation", description: "CSR readiness, fundraising, proposals and partnership building.", icon: Handshake },
  { title: "Impact & Learning", description: "Theory of change, monitoring, evaluation and impact reporting.", icon: BarChart3 },
  { title: "Policy & Dialogue", description: "Evidence-based advocacy, dialogue, national forums and policy engagement.", icon: Network },
];

const faqs = [
  { question: "What does PLF do?", answer: "PLF strengthens NGOs, institutions and social-sector professionals through knowledge, capacity building, governance, leadership and collaboration." },
  { question: "Who can participate in PLF programmes?", answer: "Civil-society organisations, professionals, CSR teams, foundations, researchers and development partners can engage with PLF programmes." },
  { question: "How does PLF create sustainable impact?", answer: "We focus on stronger systems, accountable governance, practical learning and partnerships that continue to create value beyond a single activity." },
  { question: "Can organisations partner with PLF?", answer: "Yes. PLF welcomes programme, knowledge, CSR, research and institutional partnerships." },
  { question: "How can I support an initiative?", answer: "You can explore active initiatives, donate securely and follow each campaign's progress through the PLF platform." },
];

export default function Home() {
  const { data: stats } = useGetStats();
  const { data: campaigns = [] } = useListCampaigns();
  const { data: news = [] } = useListNews();
  const { data: gallery = [] } = useListGallery();
  const [openFaq, setOpenFaq] = useState(0);
  const activeCampaigns = campaigns.filter((campaign) => campaign.isActive);
  const numbers = [
    { value: stats?.livesImpacted ?? 0, label: "People Reached" },
    { value: stats?.villagesCovered ?? 0, label: "Local Institutions" },
    { value: stats?.scholarshipsGiven ?? 0, label: "Learners Enabled" },
    { value: 8, label: "Strategic Focus Areas" },
  ];

  return (
    <Layout>
      <div className="plf-editorial overflow-hidden">
        <HomeHeroCarousel />
        <HomeHero />

        <section className="px-6 pb-20 md:px-10 md:pb-28">
          <div className="mx-auto max-w-6xl border-t border-[#172d3f]/12 pt-10">
            <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4">
              {numbers.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="editorial-heading text-5xl text-[#172d3f] md:text-6xl"><AnimatedCounter value={value} duration={1400} format={(number) => number.toLocaleString("en-IN")} />+</div>
                  <p className="mt-2 text-[10px] font-bold uppercase tracking-[.16em] text-[#68747b]">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-3 py-8 sm:px-4 md:py-14">
          <div className="mx-auto max-w-[1400px]">
            <div className="group relative h-[390px] overflow-hidden rounded-[28px] md:h-[540px]">
              <img src="/images/Rural-Development.png" alt="PLF community work" className="size-full object-cover transition duration-700 group-hover:scale-[1.02]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
              <div className="absolute bottom-5 right-5 max-w-[285px] rounded-2xl bg-white/95 p-5 shadow-xl backdrop-blur md:bottom-8 md:right-8">
                <p className="text-[10px] font-bold uppercase tracking-[.18em] text-primary">Field report</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-[#172d3f]">Building stronger local institutions through knowledge, systems and community partnership.</p>
              </div>
            </div>

            <div className="px-3 pt-16 md:px-7 md:pt-24">
              <div className="mb-12 grid gap-7 md:grid-cols-12 md:items-end">
                <h2 className="editorial-heading text-5xl leading-[.9] text-[#172d3f] md:col-span-6 md:text-7xl">Small Actions.<br />Lasting Impact.</h2>
                <p className="text-sm leading-7 text-[#5d6b73] md:col-span-6 md:text-base">Knowledge, capable institutions and meaningful partnerships turn everyday action into stronger systems and measurable social impact.</p>
              </div>
              <div className="grid gap-5 md:grid-cols-3">
                {impactCards.map((card) => (
                  <article key={card.title} className="group relative h-[410px] overflow-hidden rounded-2xl">
                    <img src={card.image} alt={card.title} className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                      <h3 className="editorial-heading text-4xl leading-none">{card.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-white/80">{card.description}</p>
                      <Link href={card.href} className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/40 px-4 py-2 text-xs font-semibold transition hover:bg-white hover:text-primary">Learn More <ArrowUpRight className="size-3.5" /></Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {activeCampaigns.length > 0 && (
          <section className="px-3 py-16 sm:px-4 md:py-24">
            <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[28px] bg-primary px-6 py-14 text-white md:px-14 md:py-20">
              <div className="absolute -right-24 -top-24 size-72 rounded-full bg-white/5 blur-2xl" />
              <div className="relative mb-12 grid gap-6 md:grid-cols-12 md:items-end">
                <div className="md:col-span-7">
                  <div className="mb-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.2em] text-white/85"><span className="h-px w-7 bg-white/70" />Active initiatives</div>
                  <h2 className="editorial-heading text-5xl leading-[.9] md:text-7xl">Make a Meaningful<br />Donation Today.</h2>
                </div>
                <p className="text-sm leading-7 text-white/80 md:col-span-5">Transparent support. Real impact. Every contribution strengthens a programme, institution or community.</p>
              </div>
              <div className="relative grid gap-5 md:grid-cols-3">
                {activeCampaigns.slice(0, 3).map((campaign) => {
                  const progress = Math.min(100, Math.round((campaign.raisedAmount / Math.max(campaign.goalAmount, 1)) * 100));
                  return (
                    <article key={campaign.id} className="flex flex-col rounded-2xl bg-white p-5 text-[#172d3f]">
                      {campaign.imageUrl ? <img src={campaign.imageUrl} alt={campaign.title} className="h-48 w-full rounded-xl object-cover" /> : <div className="h-48 rounded-xl bg-primary/10" />}
                      <h3 className="editorial-heading mt-5 text-3xl leading-none">{campaign.title}</h3>
                      <p className="mt-3 line-clamp-3 text-xs leading-5 text-[#68747b]">{campaign.description}</p>
                      <div className="mt-6 flex items-end justify-between text-xs"><div><span className="text-[#77848b]">Raised</span><p className="font-bold">₹{campaign.raisedAmount.toLocaleString("en-IN")}</p></div><div className="text-right"><span className="text-[#77848b]">Goal</span><p className="font-bold">₹{campaign.goalAmount.toLocaleString("en-IN")}</p></div></div>
                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#e8ecef]"><div className="h-full rounded-full bg-primary" style={{ width: `${progress}%` }} /></div>
                      <Link href={`/campaigns/${campaign.id}`} className="mt-5 inline-flex items-center justify-between rounded-full bg-[#f2f3f2] px-5 py-3 text-xs font-semibold transition hover:bg-primary hover:text-white">View Initiative <ArrowUpRight className="size-4" /></Link>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        <section className="px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-12 md:gap-16">
            <div className="relative overflow-hidden rounded-[28px] md:col-span-5"><img src="/images/mission.png" alt="PLF approach" className="aspect-[4/5] size-full object-cover" /><div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/30 bg-[#172d3f]/90 p-4 text-white backdrop-blur"><div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.16em] text-white/70"><Sparkles className="size-3 text-accent" /> Our shared commitment</div><p className="mt-2 text-sm font-medium leading-5">Capability, accountability and community ownership.</p></div></div>
            <div className="md:col-span-7">
              <div className="mb-5 flex items-center gap-2"><span className="h-px w-7 bg-primary" /><span className="text-[10px] font-bold uppercase tracking-[.2em] text-primary">Our approach</span></div>
              <h2 className="editorial-heading text-5xl leading-[.9] text-[#172d3f] md:text-7xl">Building Systems That Last for Generations.</h2>
              <p className="mt-7 text-sm leading-7 text-[#5d6b73] md:text-base">We help people and institutions turn good intent into practical, lasting change — with the tools, confidence and partnerships to keep moving forward.</p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2"><div className="rounded-2xl border border-[#dce5e9] bg-[#f7fbfc] p-4"><p className="text-xs font-bold uppercase tracking-[.13em] text-primary">Practical support</p><p className="mt-2 text-sm leading-6 text-[#52636b]">Useful knowledge and systems that teams can put to work.</p></div><div className="rounded-2xl border border-[#dce5e9] bg-[#f7fbfc] p-4"><p className="text-xs font-bold uppercase tracking-[.13em] text-primary">Better together</p><p className="mt-2 text-sm leading-6 text-[#52636b]">Partnerships that connect local insight with wider opportunity.</p></div></div>
              <div className="mt-8 grid grid-cols-2 gap-7">
                <div><div className="editorial-heading text-4xl text-primary">{(stats?.villagesCovered ?? 0).toLocaleString("en-IN")}+</div><p className="mt-1 text-xs text-[#68747b]">Local institutions</p></div>
                <div><div className="editorial-heading text-4xl text-primary">{(stats?.livesImpacted ?? 0).toLocaleString("en-IN")}+</div><p className="mt-1 text-xs text-[#68747b]">People reached</p></div>
              </div>
              <Link href="/about" className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#172d3f] px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary">See Our Impact <ArrowUpRight className="size-4" /></Link>
            </div>
          </div>
        </section>

        <section className="border-y border-[#e6edf0] bg-[#f8fbfc] px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-12 md:gap-14">
            <div className="md:col-span-5">
              <div className="mb-5 flex items-center gap-2"><span className="h-px w-7 bg-primary" /><span className="text-[10px] font-bold uppercase tracking-[.2em] text-primary">FAQ</span></div>
              <h2 className="editorial-heading text-5xl leading-[.9] text-[#172d3f] md:text-7xl">Frequently Asked Questions?</h2>
              <p className="mt-6 max-w-sm text-sm leading-7 text-[#5d6b73]">Everything you may want to know before joining PLF. Still curious? <Link href="/contact" className="font-semibold text-primary underline underline-offset-4">Reach out.</Link></p>
            </div>
            <div className="space-y-3 md:col-span-7">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return <div key={faq.question} className={`overflow-hidden rounded-2xl border transition ${isOpen ? "border-primary bg-primary text-white" : "border-[#dcd5ca] bg-white"}`}>
                  <button type="button" onClick={() => setOpenFaq(isOpen ? -1 : index)} className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left text-sm font-semibold md:px-6"><span>{faq.question}</span><span className={`flex size-8 shrink-0 items-center justify-center rounded-full ${isOpen ? "bg-white text-primary" : "bg-[#edf4f6] text-[#172d3f]"}`}>{isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}</span></button>
                  {isOpen && <p className="px-5 pb-5 text-sm leading-7 text-white/85 md:px-6">{faq.answer}</p>}
                </div>;
              })}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 grid gap-6 md:grid-cols-12 md:items-end"><div className="md:col-span-7"><p className="text-[10px] font-bold uppercase tracking-[.22em] text-primary">Focus areas</p><h2 className="editorial-heading mt-3 max-w-3xl text-5xl leading-[.92] text-[#172d3f] md:text-7xl">Where stronger organisations begin.</h2></div><p className="max-w-md text-sm leading-7 text-[#5d6b73] md:col-span-5">Eight connected areas of support, designed to make capacity-building clearer, more useful and easier to act on.</p></div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {focusAreas.map(({ title, description, icon: Icon }, index) => <article key={title} className="group relative overflow-hidden rounded-2xl border border-[#dce5e9] bg-white p-6 shadow-[0_8px_30px_rgba(23,45,63,.04)] transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_16px_35px_rgba(23,45,63,.1)]"><span className="absolute right-5 top-4 text-5xl font-semibold leading-none text-primary/[.06]">0{index + 1}</span><span className="relative flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white"><Icon className="size-5" /></span><h3 className="relative mt-8 text-base font-bold text-[#172d3f]">{title}</h3><p className="relative mt-3 text-xs leading-6 text-[#68747b]">{description}</p><Link href="/services" className="relative mt-5 inline-flex items-center gap-1 text-xs font-bold text-primary">Explore area <ArrowRight className="size-3.5 transition group-hover:translate-x-1" /></Link></article>)}
            </div>
          </div>
        </section>

        <HomeImpactShowcase news={news} gallery={gallery} />
        <FacebookPagePlugin />

        <section className="bg-primary py-10 text-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
            <div><h2 className="editorial-heading text-4xl">Stay Connected With PLF</h2><p className="mt-1 text-sm text-white/75">Get updates on knowledge resources, sector dialogue and collaboration opportunities.</p></div>
            <div className="flex w-full max-w-md gap-2"><div className="flex flex-1 items-center gap-2 rounded-full bg-white px-4 text-[#68747b]"><Mail className="size-4" /><span className="text-sm">Enter your email</span></div><button type="button" className="rounded-full bg-accent px-5 py-3 text-sm font-bold text-[#172d3f]">Subscribe</button></div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export { Home };
