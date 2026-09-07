"use client";

import { Layout } from "@/components/layout/Layout";
import {
  BarChart3,
  BookOpen,
  Building2,
  CheckCircle2,
  FileSearch,
  Handshake,
  Lightbulb,
  Network,
  Scale,
  ShieldCheck,
  Users,
} from "lucide-react";

const principles = [
  "Inclusion",
  "Equity",
  "Gender Equality",
  "Sustainability",
  "Digital Transformation",
  "Evidence",
  "Good Governance",
  "Local Ownership",
];

const stakeholders = [
  "NGOs and civil society organisations",
  "Social enterprises",
  "CSR foundations and corporate CSR teams",
  "Philanthropic foundations",
  "Social-sector professionals",
  "NGO boards and trustees",
  "Government institutions",
  "Universities and research institutions",
  "Networks and associations",
];

const roles = [
  { title: "Knowledge Generator", description: "Creating and disseminating evidence, research and practical knowledge.", icon: FileSearch },
  { title: "Capacity Builder", description: "Strengthening organisations, leaders and professionals.", icon: Building2 },
  { title: "Institutional Advisor", description: "Helping organisations improve governance, finance, systems and sustainability.", icon: Scale },
  { title: "Convenor", description: "Bringing civil society, CSR, philanthropy, government and knowledge institutions together.", icon: Network },
  { title: "Sector Catalyst", description: "Supporting innovation, collaboration, learning and systemic improvement.", icon: Lightbulb },
];

const theory = ["Stronger People", "Stronger Organisations", "Better Knowledge", "Stronger Networks", "Better Systems", "Stronger Civil Society"];

export default function About() {
  return (
    <Layout>
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-5 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[.2em] text-primary-foreground/80">About PLF</p>
            <h1 className="mt-3 font-serif text-4xl font-bold leading-tight sm:text-5xl">
              A national knowledge and capacity-building organisation for India&apos;s civil society.
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-primary-foreground/82">
              Passion for the Least Foundation strengthens civil society and the wider social-sector ecosystem by building
              knowledge, leadership, governance, collaboration and sustainable institutional capacity.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 sm:py-20">
        <div className="container mx-auto grid gap-10 px-5 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.2em] text-primary">Who we are</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-primary sm:text-4xl">
              We strengthen the organisations that create change.
            </h2>
            <div className="my-5 h-1 w-10 bg-accent" />
            <p className="text-sm leading-7 text-muted-foreground">
              PLF works with NGOs, grassroots institutions, civil-society organisations, social-sector professionals,
              CSR organisations, philanthropic foundations, development partners, academic institutions and other
              stakeholders.
            </p>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Sustainable development requires more than individual projects. It requires capable organisations, ethical
              leadership, sound governance, effective financial management, relevant knowledge, strong partnerships and
              continuous learning.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[8px] border bg-card p-6 shadow-sm">
              <ShieldCheck className="size-9 text-primary" />
              <h3 className="mt-5 font-serif text-2xl font-bold text-primary">Our Vision</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                A strong, capable, accountable and connected civil society contributing to an inclusive, equitable and
                sustainable India where no one is left behind.
              </p>
            </div>
            <div className="rounded-[8px] border bg-card p-6 shadow-sm">
              <Handshake className="size-9 text-primary" />
              <h3 className="mt-5 font-serif text-2xl font-bold text-primary">Our Mission</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                PLF strengthens India&apos;s civil society ecosystem by generating knowledge, building organisational and
                leadership capacity, promoting good governance, advancing learning and enabling greater social impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f9fc] py-16 sm:py-20">
        <div className="container mx-auto px-5 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[.2em] text-primary">What PLF stands for</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-primary sm:text-4xl">
              Development centred on people who are most vulnerable, excluded or underserved.
            </h2>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              The name Passion for the Least reflects a commitment to ensuring that development remains centred on the
              least served. PLF strengthens the organisations, leaders, systems and knowledge that enable lasting change.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {[
              { title: "Knowledge", icon: BookOpen },
              { title: "Capacity", icon: Building2 },
              { title: "Collaboration", icon: Network },
              { title: "Impact", icon: BarChart3 },
            ].map(({ title, icon: Icon }) => (
              <div key={title} className="rounded-[8px] border bg-card p-5 text-center shadow-sm">
                <Icon className="mx-auto size-8 text-primary" />
                <p className="mt-4 font-serif text-xl font-bold text-primary">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16 sm:py-20">
        <div className="container mx-auto grid gap-10 px-5 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.2em] text-primary">Our approach</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-primary sm:text-4xl">
              Knowledge-led and capacity-focused.
            </h2>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              PLF listens to the needs of organisations and professionals, generates and shares knowledge, builds
              capabilities, facilitates collaboration and supports institutions to develop systems for long-term
              effectiveness.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {roles.map(({ title, description, icon: Icon }) => (
              <article key={title} className="rounded-[8px] border bg-card p-5 shadow-sm">
                <Icon className="size-8 text-primary" />
                <h3 className="mt-4 font-bold text-primary">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-5 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[.2em] text-primary-foreground/75">Theory of change</p>
            <h2 className="mt-2 font-serif text-3xl font-bold sm:text-4xl">
              Stronger people and institutions lead to stronger civil society.
            </h2>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {theory.map((item, index) => (
              <div key={item} className="rounded-[8px] border border-primary-foreground/18 bg-primary-foreground/10 p-4 text-center">
                <p className="text-xs font-bold text-accent">{String(index + 1).padStart(2, "0")}</p>
                <p className="mt-2 text-sm font-bold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16 sm:py-20">
        <div className="container mx-auto grid gap-10 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.2em] text-primary">Cross-cutting principles</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-primary">Guided by accountability and inclusion.</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {principles.map((principle) => (
                <div key={principle} className="flex items-center gap-3 rounded-[8px] border bg-card p-3 shadow-sm">
                  <CheckCircle2 className="size-5 shrink-0 text-primary" />
                  <p className="text-sm font-semibold text-foreground">{principle}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[.2em] text-primary">Who PLF serves</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-primary">A connected social-sector ecosystem.</h2>
            <div className="mt-6 grid gap-3">
              {stakeholders.map((stakeholder) => (
                <div key={stakeholder} className="flex items-center gap-3 rounded-[8px] border bg-card p-3 shadow-sm">
                  <Users className="size-5 shrink-0 text-primary" />
                  <p className="text-sm font-semibold text-foreground">{stakeholder}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
