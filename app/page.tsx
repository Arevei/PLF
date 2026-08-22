"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, GraduationCap, HandHeart, Leaf, Mail, PawPrint, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { FacebookPagePlugin } from "@/components/home/FacebookPagePlugin";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeHeroCarousel } from "@/components/home/HomeHeroCarousel";
import { HomeImpactShowcase } from "@/components/home/HomeImpactShowcase";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { useGetStats, useListCampaigns, useListGallery, useListNews } from "@/lib/api-client/api";

const programs = [
  {
    title: "Livelihoods & Enterprise",
    description: "Creating sustainable livelihoods through skills, tools, and market linkages.",
    image: "/images/women-development.jpg",
    icon: HandHeart,
  },
  {
    title: "Education & Youth",
    description: "Empowering children and youth with access to quality education and life skills.",
    image: "/images/education.webp",
    icon: GraduationCap,
  },
  {
    title: "Animal Welfare",
    description: "Promoting humane treatment, care, and coexistence with animals.",
    image: "/images/healthcare.jpg",
    icon: PawPrint,
  },
  {
    title: "Environment & Community",
    description: "Building resilient communities through eco-friendly and climate-smart solutions.",
    image: "/images/environment.webp",
    icon: Leaf,
  },
];

export default function Home() {
  const { data: stats } = useGetStats();
  const { data: campaigns = [] } = useListCampaigns();
  const { data: news = [] } = useListNews();
  const { data: gallery = [] } = useListGallery();
  const featuredCampaign = campaigns.find((campaign) => campaign.isActive) ?? campaigns[0];
  const numbers = [
    { value: stats?.livesImpacted ?? 125000, label: "Lives Impacted", icon: Users, caption: "Across rural communities" },
    { value: stats?.villagesCovered ?? 850, label: "Livelihoods Created", icon: HandHeart, caption: "Through skill & enterprise" },
    { value: stats?.scholarshipsGiven ?? 10000, label: "Children Supported", icon: BookOpen, caption: "Access to quality education" },
    { value: 25000, label: "Animals Cared For", icon: PawPrint, caption: "Through welfare programs" },
  ];

  return (
    <Layout>
      <HomeHeroCarousel />
      <HomeHero />

      <section className="bg-muted/70 py-10 sm:py-14">
        <div className="container mx-auto grid gap-8 px-5 lg:grid-cols-[1fr_3fr] lg:px-8">
          <div>
            <h2 className="font-serif text-2xl font-bold text-primary sm:text-3xl">Our Mission in Action</h2>
            <div className="my-4 h-1 w-9 bg-accent" />
            <p className="text-sm leading-6 text-muted-foreground">
              We work at the intersection of people, livelihoods, and compassion, driving sustainable change for a better tomorrow.
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
          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-[.2em] text-primary">Our work</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-primary sm:text-4xl">
              Empowering Lives. Transforming Communities.
            </h2>
            <div className="mx-auto mt-4 h-1 w-10 bg-accent" />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map(({ title, description, image, icon: Icon }) => (
              <article key={title} className="group overflow-hidden rounded-[8px] border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="relative h-44 overflow-hidden">
                  <img src={image} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute bottom-[-1.25rem] left-5 flex size-14 items-center justify-center rounded-full border-4 border-card bg-primary text-primary-foreground">
                    <Icon className="size-6" />
                  </div>
                </div>
                <div className="p-5 pt-8">
                  <h3 className="font-bold text-primary">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
                  <Link href="/services" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Learn More <ArrowRight className="size-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <HomeImpactShowcase featuredCampaign={featuredCampaign} campaigns={campaigns} news={news} gallery={gallery} />

      <FacebookPagePlugin />

      <section className="bg-primary py-8 text-primary-foreground">
        <div className="container mx-auto flex flex-col gap-5 px-5 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <h2 className="font-serif text-2xl font-bold">Stay Connected. Be the Change.</h2>
            <p className="mt-1 text-sm text-primary-foreground/75">Get updates on our impact, stories, and ways to get involved.</p>
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
