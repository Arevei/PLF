"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Minus, Plus } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { FacebookPagePlugin } from "@/components/home/FacebookPagePlugin";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeHeroCarousel } from "@/components/home/HomeHeroCarousel";
import { HomeImpactShowcase } from "@/components/home/HomeImpactShowcase";
import {
  HomeApproach,
  HomeCoreProposition,
  HomeDevelopmentFramework,
  HomeFocusAreas,
  HomeStakeholdersAndPrinciples,
} from "@/components/home/HomeStructure";
import { useListCampaigns, useListGallery, useListNews } from "@/lib/api-client/api";
import { CampaignShare } from "@/components/campaigns/CampaignShare";

const faqs = [
  {
    question: "What does PLF do?",
    answer: "PLF strengthens NGOs, institutions and social-sector professionals through knowledge, capacity building, governance, leadership and collaboration.",
  },
  {
    question: "Who can participate in PLF programmes?",
    answer: "Civil-society organisations, professionals, CSR teams, foundations, researchers and development partners can engage with PLF programmes.",
  },
  {
    question: "How does PLF support sustainable impact?",
    answer: "PLF focuses on stronger systems, accountable governance, practical learning and partnerships that continue to create value beyond a single activity.",
  },
  {
    question: "Can organisations partner with PLF?",
    answer: "Yes. PLF welcomes programme, knowledge, CSR, research and institutional partnerships.",
  },
  {
    question: "How can I support an initiative?",
    answer: "You can explore active initiatives, donate securely and follow each campaign through the PLF platform.",
  },
];

export default function Home() {
  const { data: campaigns = [] } = useListCampaigns();
  const { data: news = [] } = useListNews();
  const { data: gallery = [] } = useListGallery();
  const [openFaq, setOpenFaq] = useState(0);
  const activeCampaigns = campaigns.filter((campaign) => campaign.isActive);

  return (
    <Layout>
      <div className="plf-editorial overflow-hidden">
        <HomeHeroCarousel />
        <HomeHero />
        <HomeCoreProposition />
        <HomeFocusAreas />
        <HomeDevelopmentFramework />

        {activeCampaigns.length > 0 && (
          <section className="px-3 py-16 sm:px-4 md:py-24">
            <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[28px] bg-primary px-6 py-14 text-white md:px-14 md:py-20">
              <div className="absolute -right-24 -top-24 size-72 rounded-full bg-white/5 blur-2xl" />
              <div className="relative mb-12 max-w-4xl">
                <div>
                  <div className="mb-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.2em] text-white/85"><span className="h-px w-7 bg-white/70" />Current initiatives</div>
                  <h2 className="editorial-heading text-5xl leading-[.9] md:text-7xl">Support an initiative that matters.</h2>
                </div>
                <p className="section-intro-description text-white/80">Explore active campaigns published through PLF&apos;s live platform and choose where you would like to contribute.</p>
              </div>
              <div className="relative grid gap-5 md:grid-cols-3">
                {activeCampaigns.slice(0, 3).map((campaign) => {
                  const progress = Math.min(100, Math.round((campaign.raisedAmount / Math.max(campaign.goalAmount, 1)) * 100));
                  return (
                    <article key={campaign.id} className="flex flex-col rounded-2xl bg-white p-5 text-[#172d3f]">
                      {campaign.imageUrl ? (
                        // Campaign images are uploaded URLs and are not limited to configured Next Image hosts.
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={campaign.imageUrl} alt={campaign.title} className="h-48 w-full rounded-xl object-cover" />
                      ) : <img src="/images/editorial/women-community-learning.webp" alt="Women listening during a community learning session in India" className="h-48 w-full rounded-xl object-cover" />}
                      <h3 className="editorial-heading mt-5 text-3xl leading-none">{campaign.title}</h3>
                      <p className="mt-3 line-clamp-3 text-xs leading-5 text-[#68747b]">{campaign.description}</p>
                      <div className="mt-6 flex items-end justify-between text-xs">
                        <div><span className="text-[#77848b]">Raised</span><p className="font-bold">₹{campaign.raisedAmount.toLocaleString("en-IN")}</p></div>
                        <div className="text-right"><span className="text-[#77848b]">Goal</span><p className="font-bold">₹{campaign.goalAmount.toLocaleString("en-IN")}</p></div>
                      </div>
                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#e8ecef]"><div className="h-full rounded-full bg-primary" style={{ width: `${progress}%` }} /></div>
                      <div className="mt-5 flex items-center gap-2">
                        <Link href={`/campaigns/${campaign.id}`} className="inline-flex min-h-10 flex-1 items-center justify-between rounded-full bg-[#f2f3f2] px-5 py-3 text-xs font-semibold transition hover:bg-primary hover:text-white">View initiative <ArrowUpRight className="size-4" /></Link>
                        <CampaignShare title={campaign.title} campaignPath={`/campaigns/${campaign.id}`} compact />
                      </div>
                    </article>
                  );
                })}
              </div>
              <div className="relative mt-9 flex justify-end">
                <Link href="/campaigns" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-semibold transition hover:bg-white hover:text-primary">View all initiatives <ArrowRight className="size-4" /></Link>
              </div>
            </div>
          </section>
        )}

        <HomeApproach />
        <HomeStakeholdersAndPrinciples />
        <HomeImpactShowcase news={news} gallery={gallery} />

        <section className="border-y border-[#e6edf0] bg-[#f8fbfc] px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-12 md:gap-14">
            <div className="md:col-span-5">
              <div className="mb-5 flex items-center gap-2"><span className="h-px w-7 bg-primary" /><span className="text-[10px] font-bold uppercase tracking-[.2em] text-primary">FAQ</span></div>
              <h2 className="editorial-heading text-5xl leading-[.9] text-[#172d3f] md:text-7xl">Frequently asked questions.</h2>
              <p className="section-intro-description text-[#5d6b73]">Learn more before engaging with PLF. Still curious? <Link href="/contact" className="font-semibold text-primary underline underline-offset-4">Reach out to us.</Link></p>
            </div>
            <div className="space-y-3 md:col-span-7">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={faq.question} className={`overflow-hidden rounded-2xl border transition ${isOpen ? "border-primary bg-primary text-white" : "border-[#dcd5ca] bg-white"}`}>
                    <button type="button" onClick={() => setOpenFaq(isOpen ? -1 : index)} aria-expanded={isOpen} className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left text-sm font-semibold md:px-6">
                      <span>{faq.question}</span>
                      <span className={`flex size-8 shrink-0 items-center justify-center rounded-full ${isOpen ? "bg-white text-primary" : "bg-[#edf4f6] text-[#172d3f]"}`}>{isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}</span>
                    </button>
                    {isOpen && <p className="px-5 pb-5 text-sm leading-7 text-white/85 md:px-6">{faq.answer}</p>}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <FacebookPagePlugin />

        <section className="bg-primary py-12 text-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-7 px-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#e2bd61]">Continue the conversation</p>
              <h2 className="editorial-heading mt-2 text-4xl sm:text-5xl">Connect with PLF</h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/75">Explore current updates, join the network or speak with us about a knowledge, capacity-building or institutional partnership.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/membership" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-semibold transition hover:bg-white hover:text-primary">Join the network <ArrowRight className="size-4" /></Link>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-bold text-[#172d3f] transition hover:bg-white">Contact PLF <ArrowUpRight className="size-4" /></Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export { Home };
