"use client";

import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  FileSearch,
  Handshake,
  Landmark,
  Laptop,
  Mail,
  Network,
  Scale,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { FacebookPagePlugin } from "@/components/home/FacebookPagePlugin";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeHeroCarousel } from "@/components/home/HomeHeroCarousel";
import { HomeImpactShowcase } from "@/components/home/HomeImpactShowcase";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { useGetStats, useListCampaigns, useListGallery, useListNews } from "@/lib/api-client/api";

const proposition = [
  {
    title: "Knowledge",
    description: "Generate, curate and share practical evidence, tools, research and good practices.",
    icon: BookOpen,
  },
  {
    title: "Capacity",
    description: "Build the capabilities of organisations, leaders, professionals and institutions.",
    icon: Building2,
  },
  {
    title: "Collaboration",
    description: "Connect civil society, CSR, philanthropy, government, academia and development partners.",
    icon: Network,
  },
  {
    title: "Impact",
    description: "Enable stronger, more accountable organisations that create sustainable social impact.",
    icon: BarChart3,
  },
];

const focusAreas = [
  {
    title: "Organisational Development",
    description: "Strategy, governance, policies, people systems, risk management and institutional sustainability.",
    icon: Building2,
  },
  {
    title: "Governance & Finance",
    description: "Financial planning, internal controls, compliance, audit readiness and transparent accountability.",
    icon: Scale,
  },
  {
    title: "Leadership",
    description: "Board development, executive leadership, mentoring and social-sector professional growth.",
    icon: Users,
  },
  {
    title: "Knowledge & Research",
    description: "Research, case studies, toolkits, publications, webinars and communities of practice.",
    icon: FileSearch,
  },
  {
    title: "Digital Transformation",
    description: "Technology adoption, MIS, data management, digital governance and responsible innovation.",
    icon: Laptop,
  },
  {
    title: "Resource Mobilisation",
    description: "CSR readiness, fundraising, proposal development, donor engagement and partnership building.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Impact & Learning",
    description: "Theory of change, monitoring systems, evaluation, outcome measurement and impact reporting.",
    icon: BarChart3,
  },
  {
    title: "Policy & Dialogue",
    description: "Evidence-based advocacy, civil-society dialogue, national forums and policy engagement.",
    icon: Landmark,
  },
];

const platforms = [
  "PLF Capacity Academy",
  "PLF Governance Excellence Initiative",
  "PLF Finance Excellence Initiative",
  "PLF Social Sector Leadership Academy",
  "PLF Knowledge Centre",
  "PLF Digital Civil Society Initiative",
  "PLF Impact & Learning Lab",
  "PLF Resource Mobilisation Centre",
  "PLF Civil Society Forum",
];

export default function Home() {
  const { data: stats } = useGetStats();
  const { data: campaigns = [] } = useListCampaigns();
  const { data: news = [] } = useListNews();
  const { data: gallery = [] } = useListGallery();
  const featuredCampaign = campaigns.find((campaign) => campaign.isActive) ?? campaigns[0];
  const numbers = [
    { value: stats?.livesImpacted ?? 125000, label: "People Reached", icon: Users, caption: "Through civil-society partners" },
    { value: stats?.villagesCovered ?? 850, label: "Local Institutions", icon: Building2, caption: "Supported toward stronger systems" },
    { value: stats?.scholarshipsGiven ?? 10000, label: "Learners Enabled", icon: BookOpen, caption: "Across trainings and knowledge work" },
    { value: 8, label: "Strategic Focus Areas", icon: ShieldCheck, caption: "For sector-wide strengthening" },
  ];

  return (
    <Layout>
      <HomeHeroCarousel />
      <HomeHero />

      <section className="bg-muted/70 py-10 sm:py-14">
        <div className="container mx-auto grid gap-8 px-5 lg:grid-cols-[1fr_3fr] lg:px-8">
          <div>
            <h2 className="font-serif text-2xl font-bold text-primary sm:text-3xl">A Multiplier for Impact</h2>
            <div className="my-4 h-1 w-9 bg-accent" />
            <p className="text-sm leading-6 text-muted-foreground">
              PLF strengthens the institutions and professionals that make development work more credible, accountable and sustainable.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {numbers.map(({ value, label, icon: Icon, caption }) => (
              <div key={label} className="rounded-[8px] bg-card p-4 text-center shadow-sm sm:p-6">
                <Icon className="mx-auto size-7 text-primary" />
                <div className="mt-3 font-serif text-2xl font-bold text-primary sm:text-3xl">
                  <AnimatedCounter value={value} duration={1600} format={(n) => n.toLocaleString("en-IN")} />+
                </div>
                <p className="mt-1 text-xs font-semibold text-foreground">{label}</p>
                <p className="mt-1 hidden text-xs text-muted-foreground sm:block">{caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16 sm:py-20">
        <div className="container mx-auto px-5 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[.2em] text-primary">Strategic proposition</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-primary sm:text-4xl">
              Knowledge becomes stronger institutions. Stronger institutions create better impact.
            </h2>
            <div className="mt-4 h-1 w-10 bg-accent" />
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {proposition.map(({ title, description, icon: Icon }, index) => (
              <article key={title} className="rounded-[8px] border bg-card p-5 shadow-sm">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <span className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Icon className="size-5" />
                  </span>
                  <span className="font-serif text-3xl font-bold text-muted">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-primary">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f9fc] py-16 sm:py-20">
        <div className="container mx-auto px-5 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-[.2em] text-primary">Focus areas</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-primary sm:text-4xl">
              Building a capable, accountable and connected civil society.
            </h2>
            <div className="mx-auto mt-4 h-1 w-10 bg-accent" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map(({ title, description, icon: Icon }) => (
              <article key={title} className="rounded-[8px] border bg-card p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <span className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 font-bold text-primary">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
                <Link href="/services" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Learn More <ArrowRight className="size-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16 sm:py-20">
        <div className="container mx-auto grid gap-10 px-5 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.2em] text-primary">Signature platforms</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-primary sm:text-4xl">
              Flagship platforms for national sector strengthening.
            </h2>
            <div className="my-5 h-1 w-10 bg-accent" />
            <p className="text-sm leading-7 text-muted-foreground">
              These platforms give PLF a clear national identity across training, governance, finance, leadership,
              knowledge, digital readiness, resource mobilisation, impact learning and convening.
            </p>
            <Button asChild className="mt-7 rounded-full">
              <Link href="/contact">
                Partner With PLF
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {platforms.map((platform) => (
              <div key={platform} className="rounded-[8px] border bg-card p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Handshake className="size-4" />
                  </span>
                  <p className="text-sm font-bold text-foreground">{platform}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HomeImpactShowcase featuredCampaign={featuredCampaign} campaigns={campaigns} news={news} gallery={gallery} />

      <FacebookPagePlugin />

      <section className="bg-primary py-8 text-primary-foreground">
        <div className="container mx-auto flex flex-col gap-5 px-5 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <h2 className="font-serif text-2xl font-bold">Stay Connected With PLF</h2>
            <p className="mt-1 text-sm text-primary-foreground/75">Get updates on knowledge resources, sector dialogue and collaboration opportunities.</p>
          </div>
          <div className="flex w-full max-w-md gap-2">
            <div className="flex flex-1 items-center gap-2 rounded-full bg-card px-4 text-muted-foreground">
              <Mail className="size-4" />
              <span className="text-sm">Enter your email</span>
            </div>
            <Button variant="secondary" className="rounded-full">
              Subscribe <ArrowRight data-icon="inline-end" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export { Home };
