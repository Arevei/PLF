"use client";

import { Layout } from "@/components/layout/Layout";
import {
  BarChart3,
  BookOpenCheck,
  BriefcaseBusiness,
  Building2,
  FileSearch,
  Landmark,
  Laptop,
  Scale,
  Users,
} from "lucide-react";

const focusAreas = [
  {
    id: "organisational-development",
    icon: Building2,
    title: "Organisational Capacity & Institutional Development",
    tagline: "Building Organisations That Last",
    points: ["Organisational strategy", "Governance", "Human resources", "Risk management", "Sustainability"],
  },
  {
    id: "governance-finance",
    icon: Scale,
    title: "Financial Management, Governance & Accountability",
    tagline: "Building Trust Through Strong Institutions",
    points: ["Financial planning", "Internal controls", "Audit readiness", "Regulatory compliance", "Transparency"],
  },
  {
    id: "leadership",
    icon: Users,
    title: "Leadership & Human Capital Development",
    tagline: "Developing Leaders for Social Change",
    points: ["Executive leadership", "Board development", "Mentoring", "Professional development", "Leadership forums"],
  },
  {
    id: "knowledge-research",
    icon: FileSearch,
    title: "Knowledge, Research & Learning",
    tagline: "Turning Experience into Knowledge",
    points: ["Research", "Case studies", "Policy briefs", "Toolkits", "Communities of practice"],
  },
  {
    id: "digital-transformation",
    icon: Laptop,
    title: "Digital Transformation & Innovation",
    tagline: "Enabling a Future-Ready Civil Society",
    points: ["NGO technology", "Management information systems", "Data protection", "Digital governance", "AI awareness"],
  },
  {
    id: "resource-mobilisation",
    icon: BriefcaseBusiness,
    title: "Resource Mobilisation & Organisational Sustainability",
    tagline: "Building Sustainable Organisations",
    points: ["CSR readiness", "Institutional fundraising", "Proposal development", "Donor engagement", "Partnerships"],
  },
  {
    id: "impact-learning",
    icon: BarChart3,
    title: "Monitoring, Evaluation, Learning & Impact",
    tagline: "From Activities to Evidence of Impact",
    points: ["Theory of change", "Monitoring systems", "Evaluation", "Outcome measurement", "Impact reporting"],
  },
  {
    id: "policy-dialogue",
    icon: Landmark,
    title: "Policy, Advocacy & Civil Society Dialogue",
    tagline: "Strengthening the Voice of Civil Society",
    points: ["Policy research", "Sector dialogue", "National consultations", "Evidence-based advocacy", "Roundtables"],
  },
];

const approach = ["Listen", "Learn", "Build", "Connect", "Measure"];

export default function Services() {
  return (
    <Layout>
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[.2em] text-primary-foreground/80">Focus Areas</p>
            <h1 className="mt-3 font-serif text-4xl font-bold leading-tight sm:text-5xl">
              Strengthening the people, systems and institutions behind social change.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-primary-foreground/82">
              PLF supports civil society through knowledge, organisational capacity, leadership, governance,
              collaboration and evidence-led learning.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-14 sm:py-16">
        <div className="container mx-auto px-5 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-5">
            {approach.map((step, index) => (
              <div key={step} className="rounded-[8px] border bg-card p-4 text-center shadow-sm">
                <p className="text-xs font-bold text-accent">{String(index + 1).padStart(2, "0")}</p>
                <p className="mt-2 text-sm font-bold text-primary">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f9fc] py-16 sm:py-20">
        <div className="container mx-auto px-5 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[.2em] text-primary">What PLF builds</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-primary sm:text-4xl">
              Eight priorities for a more capable civil society ecosystem.
            </h2>
            <div className="mt-4 h-1 w-10 bg-accent" />
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {focusAreas.map(({ id, icon: Icon, title, tagline, points }) => (
              <article key={id} className="rounded-[8px] border bg-card p-6 shadow-sm">
                <div className="flex gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Icon className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-[.14em] text-muted-foreground">{tagline}</p>
                    <h3 className="mt-1 font-serif text-xl font-bold text-primary">{title}</h3>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {points.map((point) => (
                    <span key={point} className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
                      {point}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16 sm:py-20">
        <div className="container mx-auto grid gap-10 px-5 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.2em] text-primary">Theory of change</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-primary sm:text-4xl">
              Stronger civil society begins with stronger institutions.
            </h2>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              If organisations and professionals have stronger leadership, governance, financial systems, knowledge,
              technology, networks and resources, they become more effective, accountable and sustainable.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {["Stronger People", "Stronger Organisations", "Better Knowledge", "Stronger Networks", "Better Systems", "Stronger Civil Society"].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-[8px] border bg-card p-4 shadow-sm">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <BookOpenCheck className="size-4" />
                </span>
                <p className="text-sm font-bold text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
