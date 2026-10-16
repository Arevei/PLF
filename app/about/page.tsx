import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Building2,
  FileSearch,
  Handshake,
  Leaf,
  Lightbulb,
  Laptop,
  MapPin,
  Network,
  Scale,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn how Passion for the Least Foundation strengthens India's civil society through knowledge, capacity, governance, leadership and collaboration.",
  alternates: { canonical: "/about" },
  openGraph: { url: "/about", title: "About PLF", images: ["/og/plf-open-graph.jpg"] },
};

const proposition = [
  { title: "Knowledge", detail: "Evidence, research, tools and good practice", icon: BookOpen },
  { title: "Capacity", detail: "Stronger organisations, leaders and professionals", icon: Building2 },
  { title: "Collaboration", detail: "Connections across the social-sector ecosystem", icon: Network },
  { title: "Impact", detail: "More accountable and sustainable institutions", icon: BarChart3 },
];

const framework = [
  { title: "People", description: "Develop capable social-sector professionals and leaders." },
  { title: "Organisations", description: "Strengthen NGOs and civil-society institutions." },
  { title: "Networks", description: "Build connections and communities of practice." },
  { title: "Systems", description: "Improve governance, finance, technology and organisational systems." },
  { title: "Policy", description: "Generate evidence for informed policy and sector dialogue." },
];

const roles = [
  { title: "Knowledge Generator", description: "Creating and sharing evidence, research and practical knowledge.", icon: FileSearch },
  { title: "Capacity Builder", description: "Strengthening organisations, leaders and professionals.", icon: Building2 },
  { title: "Institutional Advisor", description: "Improving governance, finance, systems and sustainability.", icon: Scale },
  { title: "Convenor", description: "Bringing civil society, CSR, philanthropy, government and knowledge institutions together.", icon: Handshake },
  { title: "Sector Catalyst", description: "Supporting innovation, collaboration, learning and systemic improvement.", icon: Lightbulb },
];

const principles = [
  { title: "Inclusion", detail: "Diverse voices represented", icon: Users },
  { title: "Equity", detail: "Fair access to opportunity", icon: Scale },
  { title: "Gender Equality", detail: "Equal participation and leadership", icon: Handshake },
  { title: "Sustainability", detail: "Institutions built for long-term value", icon: Leaf },
  { title: "Digital Transformation", detail: "Technology used responsibly", icon: Laptop },
  { title: "Evidence", detail: "Decisions grounded in learning", icon: FileSearch },
  { title: "Good Governance", detail: "Integrity and accountability", icon: ShieldCheck },
  { title: "Local Ownership", detail: "Respect for local knowledge and leadership", icon: MapPin },
];

const stakeholders = [
  "NGOs and civil-society organisations",
  "Social enterprises",
  "CSR foundations and corporate teams",
  "Philanthropic foundations",
  "Social-sector professionals",
  "NGO boards and trustees",
  "Government institutions",
  "Universities and research institutions",
  "Networks and associations",
];

const theory = ["Stronger People", "Stronger Organisations", "Better Knowledge", "Stronger Networks", "Better Systems", "Stronger Civil Society"];

export default function About() {
  return (
    <Layout>
      <div className="plf-editorial-page overflow-hidden bg-white text-[#172d3f]">
        <section className="w-full">
          <div className="relative h-[250px] w-full overflow-hidden sm:h-[320px] lg:h-[360px]">
            <Image
              src="/images/editorial/civil-society-conference.jpg"
              alt="A diverse audience of civil-society and knowledge-sector participants at a national conference in India"
              fill
              preload
              sizes="100vw"
              className="object-cover object-[center_50%]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#061d31]/10 via-transparent to-[#061d31]/80" />
            <div className="absolute inset-x-0 bottom-0 mx-auto flex max-w-[1240px] items-center gap-3 px-6 pb-7 text-[11px] font-bold uppercase tracking-[.22em] text-white sm:px-10 lg:px-12">
              <span className="h-px w-8 bg-[#f2bd28]" /> Passion for the Least Foundation
            </div>
          </div>

          <div className="w-full bg-[#061d31] text-white">
            <div className="mx-auto max-w-[1240px] px-6 py-12 sm:px-10 sm:py-16 lg:px-12">
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-white/45">
                <Link href="/" className="transition hover:text-white">Home</Link><span>/</span><span className="text-[#f2bd28]">About Us</span>
              </nav>

              <div className="mt-8 flex flex-wrap gap-2">
                {proposition.map(({ title }) => <span key={title} className="rounded-full border border-white/16 bg-white/[.05] px-4 py-2 text-[11px] font-semibold text-white/70">{title}</span>)}
              </div>

              <div className="mt-9 max-w-5xl">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[.2em] text-[#f2bd28]">About PLF</p>
                  <h1 className="editorial-heading mt-4 max-w-4xl text-5xl leading-[.96] text-white sm:text-6xl lg:text-[4.7rem]">
                    We strengthen the organisations that create change.
                  </h1>
                </div>
                <div className="mt-6">
                  <p className="text-lg leading-8 text-white/75">Passion for the Least Foundation is a national knowledge and capacity-building organisation strengthening leadership, governance, collaboration and sustainable institutional capacity across India&apos;s social sector.</p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link href="/services" className="inline-flex items-center gap-2 rounded-full bg-[#f2bd28] px-6 py-3.5 text-sm font-bold text-[#172d3f] transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Explore focus areas <ArrowRight className="size-4" /></Link>
                    <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#172d3f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Work with PLF</Link>
                  </div>
                </div>
              </div>

              <div className="mt-12 border-t border-white/12 pt-6 text-xs font-medium text-white/45">Knowledge for Change. Capacity for Impact.</div>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-4xl">
              <div>
                <p className="eyebrow">Who we are</p>
                <h2 className="editorial-heading mt-4 text-5xl leading-[.96] sm:text-6xl">A multiplier for social impact.</h2>
              </div>
              <div className="mt-6 space-y-5 text-lg leading-8 text-[#52636b]">
                <p>PLF works with NGOs, grassroots institutions, social-sector professionals, CSR organisations, philanthropic foundations, development partners, academic institutions and other stakeholders.</p>
                <p>Sustainable development requires capable organisations, ethical leadership, sound governance, effective financial management, relevant knowledge, strong partnerships and continuous learning.</p>
                <p className="font-semibold text-[#172d3f]">The name Passion for the Least keeps our work centred on people who are most vulnerable, excluded or underserved.</p>
              </div>
            </div>

            <div className="mt-16 grid overflow-hidden rounded-[28px] border border-[#d9e5ea] bg-[#f5fafc] md:grid-cols-2">
                          <article className="p-7 sm:p-10 lg:p-12">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-primary text-white"><ShieldCheck className="size-5" /></div>
                <p className="eyebrow mt-8">Our vision</p>
                <h3 className="editorial-heading mt-3 text-3xl leading-tight sm:text-4xl">A strong, capable, accountable and connected civil society.</h3>
                <p className="mt-5 text-lg leading-8 text-[#5d6b73]">Contributing to an inclusive, equitable and sustainable India where no one is left behind.</p>

              </article>
              <article className="bg-primary p-7 text-white sm:p-10 lg:p-12">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-white/12 text-[#f2bd28]"><Handshake className="size-5" /></div>
                <p className="mt-8 text-[11px] font-bold uppercase tracking-[.2em] text-white/65">Our mission</p>
                <h3 className="editorial-heading mt-3 text-3xl leading-tight sm:text-4xl">Knowledge, capacity and collaboration for lasting impact.</h3>
                <p className="mt-5 text-lg leading-8 text-white/78">We strengthen India&apos;s civil-society ecosystem through learning, organisational and leadership capacity, good governance and accountable practice.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="border-y border-[#e1e9ed] bg-[#f7fafb] px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-4xl">
              <div><p className="eyebrow">Our core proposition</p><h2 className="editorial-heading mt-4 text-5xl leading-[.94] sm:text-6xl">From insight to impact.</h2></div>
              <p className="section-intro-description text-[#5d6b73]">PLF turns relevant knowledge into practical capability, brings institutions together and helps them build the systems that sustain change.</p>
            </div>
            <div className="mt-14 grid gap-px overflow-hidden rounded-[28px] bg-[#cfdde3] sm:grid-cols-2 lg:grid-cols-4">
              {proposition.map(({ title, detail, icon: Icon }, index) => (
                <article key={title} className="group relative min-h-64 bg-white p-7 transition hover:bg-[#edf6fa]">
                  <span className="text-xs font-bold text-[#9aaab2]">0{index + 1}</span>
                  <Icon className="mt-10 size-8 text-primary" />
                  <h3 className="mt-5 text-xl font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#64747c]">{detail}</p>
                  {index < proposition.length - 1 && <ArrowRight className="absolute right-5 top-6 hidden size-4 text-primary/30 lg:block" aria-hidden="true" />}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#092f50] px-6 py-20 text-white md:px-10 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl"><p className="text-[11px] font-bold uppercase tracking-[.22em] text-[#f2bd28]">National development framework</p><h2 className="editorial-heading mt-4 text-5xl leading-[.94] sm:text-6xl">Change grows through connected levels.</h2></div>
            <ol className="relative mt-16 grid gap-5 lg:grid-cols-5 lg:gap-3">
              <span className="absolute left-[10%] right-[10%] top-8 hidden h-px bg-white/20 lg:block" aria-hidden="true" />
              {framework.map((item, index) => (
                <li key={item.title} className="relative rounded-2xl border border-white/14 bg-white/[.06] p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/[.1] motion-reduce:transform-none">
                  <span className="relative z-10 flex size-16 items-center justify-center rounded-full border border-[#f2bd28]/60 bg-[#092f50] text-sm font-bold text-[#f2bd28]">0{index + 1}</span>
                  <h3 className="mt-6 text-lg font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/65">{item.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
              <div className="lg:sticky lg:top-32 lg:col-span-4">
                <p className="eyebrow">How PLF contributes</p>
                <h2 className="editorial-heading mt-4 text-5xl leading-[.94] sm:text-6xl">Five roles. One stronger ecosystem.</h2>
                <p className="mt-6 text-lg leading-8 text-[#5d6b73]">PLF combines knowledge, advice, capacity and convening to help civil society learn and improve together.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
                {roles.map(({ title, description, icon: Icon }, index) => (
                  <article key={title} className={`group rounded-[24px] border border-[#dbe6ea] p-7 transition hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_18px_50px_rgba(23,45,63,.08)] motion-reduce:transform-none ${index === 4 ? "sm:col-span-2 sm:grid sm:grid-cols-[auto_1fr] sm:items-center sm:gap-6" : "bg-[#f8fbfc]"}`}>
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white"><Icon className="size-5" /></span>
                    <div><h3 className="mt-6 text-lg font-bold sm:mt-0">{title}</h3><p className="mt-2 text-sm leading-6 text-[#60717a]">{description}</p></div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f2f7f9] px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="text-center"><p className="eyebrow justify-center">Theory of change</p><h2 className="editorial-heading mx-auto mt-4 max-w-3xl text-5xl leading-[.94] sm:text-6xl">Stronger institutions make lasting change possible.</h2></div>
            <ol className="mt-14 grid gap-3 md:grid-cols-3 lg:grid-cols-6">
              {theory.map((item, index) => (
                <li key={item} className={`relative flex min-h-36 flex-col justify-between rounded-2xl p-5 ${index === theory.length - 1 ? "bg-primary text-white" : "border border-[#d5e2e7] bg-white"}`}>
                  <span className={`text-xs font-bold ${index === theory.length - 1 ? "text-[#f2bd28]" : "text-primary/50"}`}>0{index + 1}</span>
                  <p className="text-sm font-bold leading-5">{item}</p>
                  {index < theory.length - 1 && <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden size-5 -translate-y-1/2 rounded-full bg-[#f2f7f9] text-primary lg:block" aria-hidden="true" />}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-4xl">
              <div><p className="eyebrow">What guides us</p><h2 className="editorial-heading mt-4 text-5xl leading-[.94] sm:text-6xl">Principles in every partnership.</h2></div>
              <p className="section-intro-description text-[#5d6b73]">These commitments shape how PLF learns, collaborates and helps institutions build lasting capability.</p>
            </div>
            <div className="mt-12 grid overflow-hidden rounded-[28px] border border-[#d9e3e7] bg-[#d9e3e7] gap-px sm:grid-cols-2 xl:grid-cols-4">
              {principles.map(({ title, detail, icon: Icon }, index) => (
                <article key={title} className="group min-h-60 bg-white p-7 transition hover:bg-[#f1f8fa]">
                  <span className="text-xs font-bold text-[#97a8b0]">{String(index + 1).padStart(2, "0")}</span>
                  <Icon className="mt-10 size-8 text-primary" strokeWidth={1.7} />
                  <h3 className="mt-6 text-lg font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#60717b]">{detail}</p>
                </article>
              ))}
            </div>

            <div className="mt-20 grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
              <div>
              <p className="eyebrow">Who PLF serves</p>
              <h2 className="editorial-heading mt-4 text-5xl leading-[.94]">A connected social-sector ecosystem.</h2>
              <p className="mt-6 text-lg leading-8 text-[#5d6b73]">PLF works across the ecosystem because stronger institutions grow through shared knowledge and trusted relationships.</p>
              </div>
              <div className="divide-y divide-[#dce6ea] border-y border-[#dce6ea]">
                {stakeholders.map((stakeholder, index) => <div key={stakeholder} className="flex items-center gap-4 py-4"><span className="w-7 text-xs font-bold text-primary/50">{String(index + 1).padStart(2, "0")}</span><Users className="size-4 text-primary" /><p className="text-sm font-semibold">{stakeholder}</p></div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pb-5 sm:px-6 lg:px-10">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-8 overflow-hidden rounded-[28px] bg-primary px-7 py-12 text-white sm:px-10 lg:flex-row lg:items-end lg:justify-between lg:px-14 lg:py-16">
            <div><p className="text-[11px] font-bold uppercase tracking-[.22em] text-[#f2bd28]">Build stronger together</p><h2 className="editorial-heading mt-4 max-w-3xl text-4xl leading-tight sm:text-5xl">Bring knowledge, capability and partnership to your next challenge.</h2></div>
            <Link href="/contact" className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-primary transition hover:bg-[#f2bd28] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Start a conversation <ArrowRight className="size-4" /></Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
