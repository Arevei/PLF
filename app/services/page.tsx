import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  BookOpenCheck,
  BriefcaseBusiness,
  Building2,
  Check,
  FileSearch,
  Landmark,
  Laptop,
  Scale,
  Users,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";

export const metadata: Metadata = {
  title: "Focus Areas",
  description:
    "Explore PLF's eight focus areas for stronger civil-society organisations, leadership, governance, learning and sustainable impact.",
  alternates: { canonical: "/services" },
  openGraph: { url: "/services", title: "PLF Focus Areas", images: ["/og/plf-open-graph.jpg"] },
};

const focusAreas = [
  {
    id: "organisational-development",
    icon: Building2,
    shortTitle: "Organisational Development",
    title: "Organisational Capacity & Institutional Development",
    tagline: "Building Organisations That Last",
    description: "We help organisations clarify their direction, strengthen internal systems and build the resilience needed to serve communities over the long term.",
    points: ["Organisational strategy", "Institutional development", "Governance", "Leadership", "Policies and systems", "Human resources", "Risk management", "Change management", "Organisational sustainability"],
    image: "/images/editorial/shg-facilitated-training.webp",
    imageAlt: "A facilitator leading an organisational training session with a women’s self-help group",
  },
  {
    id: "governance-finance",
    icon: Scale,
    shortTitle: "Governance & Finance",
    title: "Financial Management, Governance & Accountability",
    tagline: "Building Trust Through Strong Institutions",
    description: "Practical governance and financial systems help organisations protect resources, meet their responsibilities and earn lasting stakeholder trust.",
    points: ["Financial management", "Planning and budgeting", "Internal controls", "Audit and assurance", "Regulatory compliance", "NGO governance", "Risk management", "Fraud prevention", "Transparency and accountability", "Financial sustainability"],
    image: "/images/editorial/community-leadership-india.webp",
    imageAlt: "Self-help group members reviewing their records and accounts together",
  },
  {
    id: "leadership",
    icon: Users,
    shortTitle: "Leadership",
    title: "Leadership & Human Capital Development",
    tagline: "Developing Leaders for Social Change",
    description: "We support leaders, boards and emerging professionals to make sound decisions, develop people and guide institutions through complexity.",
    points: ["Executive leadership", "NGO leadership", "Board development", "Finance and programme leadership", "Young professional development", "Mentoring and coaching", "Competency development", "Executive education", "Leadership forums"],
    image: "/images/editorial/shg-member-leadership.webp",
    imageAlt: "A self-help group leader addressing a community session",
  },
  {
    id: "knowledge-research",
    icon: FileSearch,
    shortTitle: "Knowledge & Research",
    title: "Knowledge, Research & Learning",
    tagline: "Turning Experience into Knowledge",
    description: "We convert experience into useful evidence and make that knowledge accessible so the sector can learn, adapt and improve practice.",
    points: ["Research", "Sector studies", "Case studies", "Policy briefs", "Toolkits", "Publications", "Knowledge repositories", "Webinars", "Conferences", "Communities of practice", "Good-practice documentation"],
    image: "/images/editorial/village-open-air-class.webp",
    imageAlt: "A teacher running an open-air learning session for children in a rural village",
  },
  {
    id: "digital-transformation",
    icon: Laptop,
    shortTitle: "Digital Transformation",
    title: "Digital Transformation & Innovation",
    tagline: "Enabling a Future-Ready Civil Society",
    description: "Responsible technology can improve decisions, collaboration and service delivery when organisations have the confidence and systems to use it well.",
    points: ["Digital transformation", "NGO technology", "Management information systems", "Data management", "Data protection", "Cybersecurity awareness", "AI and emerging technology", "Digital governance", "Technology-enabled monitoring and learning"],
    image: "/images/editorial/rural-digital-workshop.webp",
    imageAlt: "Community educators learning digital tools at a district workshop",
  },
  {
    id: "resource-mobilisation",
    icon: BriefcaseBusiness,
    shortTitle: "Resource Mobilisation",
    title: "Resource Mobilisation & Organisational Sustainability",
    tagline: "Building Sustainable Organisations",
    description: "We strengthen the capabilities organisations need to build credible partnerships, diversify support and resource their mission responsibly.",
    points: ["CSR readiness", "Institutional fundraising", "Philanthropy", "Grant management", "Donor engagement", "Proposal development", "Resource mobilisation", "Income diversification", "Social investment", "Partnership development"],
    image: "/images/editorial/women-farmers-gujarat.webp",
    imageAlt: "Women farmers working in a field in Gujarat",
  },
  {
    id: "impact-learning",
    icon: BarChart3,
    shortTitle: "Impact & Learning",
    title: "Monitoring, Evaluation, Learning & Impact",
    tagline: "From Activities to Evidence of Impact",
    description: "We help teams connect activities to outcomes, improve data quality and use evidence to learn, communicate and make better decisions.",
    points: ["Theory of change", "Monitoring systems", "Evaluation", "Impact assessment", "Indicators", "Data quality", "Outcome measurement", "Learning systems", "Impact reporting"],
    image: "/images/editorial/frontline-health-records.webp",
    imageAlt: "A frontline health worker recording information with mothers in a rural health centre",
  },
  {
    id: "policy-dialogue",
    icon: Landmark,
    shortTitle: "Policy & Dialogue",
    title: "Policy, Advocacy & Civil Society Dialogue",
    tagline: "Strengthening the Voice of Civil Society",
    description: "We support informed dialogue that connects evidence from practice with institutions, decision-makers and the wider development sector.",
    points: ["Policy research", "Sector dialogue", "National consultations", "Policy briefs", "Government-civil society dialogue", "Regulatory discussions", "Evidence-based advocacy", "National forums and roundtables"],
    image: "/images/editorial/gram-sabha-mendha-lekha.webp",
    imageAlt: "Villagers seated in a circle during a gram sabha meeting",
  },
];

const approach = [
  { title: "Listen", description: "Understand the context and priorities." },
  { title: "Learn", description: "Bring evidence and experience together." },
  { title: "Build", description: "Develop practical capability and systems." },
  { title: "Connect", description: "Create relationships that extend value." },
  { title: "Measure", description: "Use outcomes to improve the work." },
];

export default function Services() {
  return (
    <Layout>
      <div className="plf-editorial-page overflow-hidden bg-white text-[#172d3f]">
        <section className="w-full">
          <div className="relative h-[250px] w-full overflow-hidden sm:h-[320px] lg:h-[360px]">
            <Image src="/images/editorial/rural-women-collective.webp" alt="Rural women gathered for a community collective meeting in India" fill priority sizes="100vw" className="object-cover object-[center_40%]" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#061d31]/10 via-transparent to-[#061d31]/80" />
            <div className="absolute inset-x-0 bottom-0 mx-auto flex max-w-[1240px] items-center gap-3 px-6 pb-7 text-[11px] font-bold uppercase tracking-[.22em] text-white sm:px-10 lg:px-12">
              <span className="h-px w-8 bg-[#f2bd28]" /> Eight connected priorities
            </div>
          </div>

          <div className="w-full bg-[#061d31] text-white">
            <div className="mx-auto max-w-[1240px] px-6 py-12 sm:px-10 sm:py-16 lg:px-12">
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-white/45">
                <Link href="/" className="transition hover:text-white">Home</Link><span>/</span><span className="text-[#f2bd28]">Focus Areas</span>
              </nav>

              <div className="mt-8 flex flex-wrap gap-2">
                {focusAreas.slice(0, 5).map(({ shortTitle }) => <span key={shortTitle} className="rounded-full border border-white/16 bg-white/[.05] px-4 py-2 text-[11px] font-semibold text-white/70">{shortTitle}</span>)}
              </div>

              <div className="mt-9 max-w-5xl">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[.2em] text-[#f2bd28]">Focus Areas</p>
                  <h1 className="editorial-heading mt-4 max-w-4xl text-5xl leading-[.96] text-white sm:text-6xl lg:text-[4.7rem]">Stronger people. Better systems. Lasting institutions.</h1>
                </div>
                <div className="mt-6">
                  <p className="text-lg leading-8 text-white/75">PLF supports civil society through practical knowledge, organisational capacity, leadership, governance, collaboration and evidence-led learning.</p>
                  <Link href="#focus-areas" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#f2bd28] px-6 py-3.5 text-sm font-bold text-[#172d3f] transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Explore the eight areas <ArrowDown className="size-4" /></Link>
                </div>
              </div>

              <div className="mt-12 border-t border-white/12 pt-6 text-xs font-medium text-white/45">Eight focus areas. One stronger civil-society ecosystem.</div>
            </div>
          </div>
        </section>

        <nav aria-label="Focus areas" className="sticky top-0 z-30 border-y border-[#dce7eb] bg-white/95 shadow-[0_8px_30px_rgba(23,45,63,.06)] backdrop-blur-xl">
          <div className="mx-auto flex max-w-[1440px] gap-2 overflow-x-auto px-4 py-3 sm:px-6 lg:px-10">
            {focusAreas.map((area, index) => <a key={area.id} href={`#${area.id}`} className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#dce7eb] px-4 py-2 text-xs font-semibold text-[#52636b] transition hover:border-primary hover:bg-primary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"><span className="text-[10px] opacity-60">{String(index + 1).padStart(2, "0")}</span>{area.shortTitle}</a>)}
          </div>
        </nav>

        <section className="px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-4xl">
              <div><p className="eyebrow">Our approach</p><h2 className="editorial-heading mt-4 text-5xl leading-[.94] sm:text-6xl">A practical path from need to learning.</h2></div>
              <p className="section-intro-description text-[#5d6b73]">Every engagement begins with context, builds useful capability and creates a stronger foundation for continuous improvement.</p>
            </div>
            <ol className="mt-14 grid gap-3 md:grid-cols-5">
              {approach.map((step, index) => <li key={step.title} className={`relative min-h-48 rounded-2xl p-6 ${index === 2 ? "bg-primary text-white" : "border border-[#d8e4e9] bg-[#f8fbfc]"}`}><span className={`text-xs font-bold ${index === 2 ? "text-[#f2bd28]" : "text-primary/50"}`}>0{index + 1}</span><h3 className="mt-9 text-xl font-bold">{step.title}</h3><p className={`mt-3 text-sm leading-6 ${index === 2 ? "text-white/70" : "text-[#63747c]"}`}>{step.description}</p>{index < approach.length - 1 && <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden size-5 -translate-y-1/2 rounded-full bg-white text-primary md:block" aria-hidden="true" />}</li>)}
            </ol>
          </div>
        </section>

        <section id="focus-areas" className="scroll-mt-24 border-t border-[#e2eaed] bg-[#f5f9fa] px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 max-w-3xl"><p className="eyebrow">What PLF builds</p><h2 className="editorial-heading mt-4 text-5xl leading-[.94] sm:text-6xl">Eight priorities for a more capable civil society.</h2></div>
            <div className="space-y-8 lg:space-y-12">
              {focusAreas.map(({ id, icon: Icon, title, tagline, description, points, image, imageAlt }, index) => (
                <article id={id} key={id} className="scroll-mt-28 overflow-hidden rounded-[28px] border border-[#d8e4e9] bg-white shadow-[0_14px_50px_rgba(23,45,63,.05)]">
                  <div className={`grid lg:grid-cols-2 ${index % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                    <div className="relative min-h-[330px] overflow-hidden lg:min-h-[560px]">
                      <Image src={image} alt={imageAlt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition duration-700 hover:scale-[1.025] motion-reduce:transform-none" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#092f50]/62 via-transparent to-transparent" />
                      <div className="absolute inset-x-6 bottom-6 flex items-end justify-between text-white sm:inset-x-8 sm:bottom-8">
                        <p className="max-w-xs text-sm font-semibold leading-6">{tagline}</p><span className="editorial-heading text-6xl text-white/70">{String(index + 1).padStart(2, "0")}</span>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                      <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary"><Icon className="size-5" /></span>
                      <p className="eyebrow mt-8">{tagline}</p>
                      <h3 className="editorial-heading mt-3 text-3xl leading-tight sm:text-4xl">{title}</h3>
                      <p className="mt-5 text-lg leading-8 text-[#5d6b73]">{description}</p>
                      <ul className="mt-7 grid gap-x-5 gap-y-3 sm:grid-cols-2">
                        {points.map((point) => <li key={point} className="flex items-start gap-2 text-xs font-semibold leading-5 text-[#465a65]"><span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-[#f2bd28]/25 text-[#8d6810]"><Check className="size-2.5" /></span>{point}</li>)}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#092f50] px-6 py-20 text-white md:px-10 md:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-20">
            <div><p className="text-[11px] font-bold uppercase tracking-[.22em] text-[#f2bd28]">Theory of change</p><h2 className="editorial-heading mt-4 text-5xl leading-[.94] sm:text-6xl">Stronger civil society begins with stronger institutions.</h2><p className="mt-7 text-lg leading-8 text-white/70">When organisations and professionals have stronger leadership, governance, financial systems, knowledge, technology, networks and resources, they become more effective, accountable and sustainable.</p></div>
            <div className="grid gap-3 sm:grid-cols-2">
              {["Stronger People", "Stronger Organisations", "Better Knowledge", "Stronger Networks", "Better Systems", "Stronger Civil Society"].map((item, index) => <div key={item} className={`flex min-h-24 items-center gap-4 rounded-2xl border p-5 ${index === 5 ? "border-[#f2bd28] bg-[#f2bd28] text-[#172d3f]" : "border-white/14 bg-white/[.06]"}`}><span className={`flex size-10 shrink-0 items-center justify-center rounded-full ${index === 5 ? "bg-white/50" : "bg-white/10 text-[#f2bd28]"}`}><BookOpenCheck className="size-4" /></span><p className="text-sm font-bold">{item}</p></div>)}
            </div>
          </div>
        </section>

        <section className="px-4 py-5 sm:px-6 lg:px-10">
          <div className="mx-auto grid max-w-[1440px] overflow-hidden rounded-[28px] bg-[#edf5f8] lg:grid-cols-[1.15fr_.85fr]">
            <div className="p-7 sm:p-10 lg:p-14"><p className="eyebrow">Put capability into practice</p><h2 className="editorial-heading mt-4 max-w-3xl text-4xl leading-tight sm:text-5xl">Choose the focus area that can move your organisation forward.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-[#5d6b73]">Talk with PLF about a learning, advisory, research or capacity-building need.</p><Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#092f50] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Start a conversation <ArrowRight className="size-4" /></Link></div>
            <div className="relative min-h-72"><Image src="/images/editorial/rural-women-shg-meeting.webp" alt="Members of a rural women’s self-help group at a meeting" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-r from-[#edf5f8] via-transparent to-transparent lg:block" /></div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
