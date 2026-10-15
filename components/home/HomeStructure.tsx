import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BookOpenCheck,
  Building2,
  FileSearch,
  Handshake,
  Leaf,
  Laptop,
  MapPin,
  Network,
  Scale,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const proposition = [
  {
    title: "Knowledge",
    description: "Generate, curate and share relevant evidence, research, tools and good practices.",
    icon: BookOpenCheck,
  },
  {
    title: "Capacity",
    description: "Build the capabilities of organisations, leaders, professionals and institutions.",
    icon: Building2,
  },
  {
    title: "Collaboration",
    description: "Connect civil society, CSR, philanthropy, government, academia and development partners.",
    icon: Handshake,
  },
  {
    title: "Impact",
    description: "Enable stronger, more accountable and sustainable organisations to create greater social impact.",
    icon: Sparkles,
  },
];

const focusAreas = [
  {
    title: "Organisational Capacity & Institutional Development",
    shortTitle: "Organisational Development",
    description: "Strategy, governance, leadership, people systems, risk management and long-term sustainability.",
    icon: Building2,
  },
  {
    title: "Financial Management, Governance & Accountability",
    shortTitle: "Governance & Finance",
    description: "Financial planning, internal controls, compliance, assurance and transparent accountability.",
    icon: Scale,
  },
  {
    title: "Leadership & Human Capital Development",
    shortTitle: "Leadership",
    description: "Board development, executive leadership, mentoring, coaching and professional growth.",
    icon: Users,
  },
  {
    title: "Knowledge, Research & Learning",
    shortTitle: "Knowledge & Research",
    description: "Research, sector studies, case studies, toolkits, publications and communities of practice.",
    icon: FileSearch,
  },
  {
    title: "Digital Transformation & Innovation",
    shortTitle: "Digital Transformation",
    description: "Technology adoption, data management, digital governance and responsible innovation.",
    icon: Laptop,
  },
  {
    title: "Resource Mobilisation & Organisational Sustainability",
    shortTitle: "Resource Mobilisation",
    description: "CSR readiness, fundraising, grant management, donor engagement and partnership development.",
    icon: Handshake,
  },
  {
    title: "Monitoring, Evaluation, Learning & Impact",
    shortTitle: "Impact & Learning",
    description: "Monitoring systems, evaluation, indicators, shared learning and impact reporting.",
    icon: BarChart3,
  },
  {
    title: "Policy, Advocacy & Civil Society Dialogue",
    shortTitle: "Policy & Dialogue",
    description: "Policy research, national consultations, evidence-based advocacy and sector dialogue.",
    icon: Network,
  },
];

const framework = [
  ["People", "Develop capable social-sector professionals and leaders."],
  ["Organisations", "Strengthen NGOs and civil-society institutions."],
  ["Networks", "Build connections and communities of practice."],
  ["Systems", "Improve governance, finance, technology and organisational systems."],
  ["Policy", "Contribute evidence to informed policy and sector dialogue."],
];

const approach = [
  ["Listen", "Understand the needs of organisations and professionals."],
  ["Learn", "Generate and share useful knowledge and evidence."],
  ["Build", "Strengthen capabilities, leadership and organisational systems."],
  ["Connect", "Facilitate collaboration, networks and strategic partnerships."],
  ["Measure", "Support learning, accountability and long-term effectiveness."],
];

const stakeholders = [
  "NGOs & civil-society organisations",
  "Social enterprises",
  "CSR foundations & corporate teams",
  "Philanthropic foundations",
  "Social-sector professionals",
  "NGO boards & trustees",
  "Government institutions",
  "Universities & research institutions",
  "Networks & associations",
];

const principles = [
  { title: "Inclusion", description: "Diverse voices represented", icon: Users },
  { title: "Equity", description: "Fair access to opportunity", icon: Scale },
  { title: "Gender Equality", description: "Equal participation and leadership", icon: Handshake },
  { title: "Sustainability", description: "Institutions built for long-term value", icon: Leaf },
  { title: "Digital Transformation", description: "Technology used responsibly", icon: Laptop },
  { title: "Evidence", description: "Decisions grounded in learning", icon: FileSearch },
  { title: "Good Governance", description: "Integrity and accountability", icon: ShieldCheck },
  { title: "Local Ownership", description: "Respect for local knowledge and leadership", icon: MapPin },
];

export function HomeCoreProposition() {
  return (
    <section className="px-3 py-10 sm:px-4 md:py-16">
      <div className="mx-auto max-w-[1400px] overflow-hidden rounded-[28px] bg-[#061d31] text-white">
        <div className="relative h-[320px] overflow-hidden md:h-[460px]">
          <Image
            src="/images/editorial/workshop-collaboration.webp"
            alt="People learning and working together"
            fill
            sizes="(min-width: 1440px) 1400px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061d31]/95 via-[#061d31]/58 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10 md:p-14">
            <p className="text-[10px] font-bold uppercase tracking-[.22em] text-[#e2bd61]">Our core proposition</p>
            <h2 className="editorial-heading mt-4 max-w-3xl text-5xl leading-[.9] sm:text-6xl md:text-8xl">
              Knowledge becomes capacity. Capacity becomes impact.
            </h2>
          </div>
        </div>

        <div className="grid border-t border-white/15 md:grid-cols-4">
          {proposition.map(({ title, description, icon: Icon }, index) => (
            <article
              key={title}
              className="group relative border-b border-white/15 p-7 transition hover:bg-white/[.06] md:border-b-0 md:border-r md:last:border-r-0 lg:p-9"
            >
              <div className="flex items-start justify-between gap-5">
                <span className="flex size-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-[#e2bd61] transition group-hover:bg-[#e2bd61] group-hover:text-[#061d31]">
                  <Icon className="size-5" />
                </span>
                <span className="editorial-heading text-5xl text-white/10">0{index + 1}</span>
              </div>
              <h3 className="editorial-heading mt-9 text-3xl">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/68">{description}</p>
              {index < proposition.length - 1 && (
                <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden size-6 rounded-full bg-[#e2bd61] p-1 text-[#061d31] md:block" />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeFocusAreas() {
  const featured = focusAreas.slice(0, 4);
  const supporting = focusAreas.slice(4);

  return (
    <section className="px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 grid gap-7 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="text-[10px] font-bold uppercase tracking-[.22em] text-primary">Eight connected focus areas</p>
            <h2 className="editorial-heading mt-4 text-5xl leading-[.9] text-[#172d3f] sm:text-6xl md:text-7xl">
              Strong institutions need more than one kind of strength.
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-sm leading-7 text-[#5d6b73]">
              PLF brings organisational development, leadership, knowledge, technology and accountability into one connected capacity-building practice.
            </p>
            <Link href="/services" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">
              Explore all focus areas <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {featured.map(({ title, description, icon: Icon }, index) => (
            <Link
              href="/services"
              key={title}
              className={`group relative min-h-[285px] overflow-hidden rounded-[24px] p-7 transition duration-300 hover:-translate-y-1 md:p-9 ${
                index === 0 || index === 3 ? "bg-primary text-white" : "border border-[#dce5e9] bg-[#f6fafb] text-[#172d3f]"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <span className={`flex size-12 items-center justify-center rounded-2xl ${index === 0 || index === 3 ? "bg-white/12 text-[#e2bd61]" : "bg-primary/10 text-primary"}`}>
                  <Icon className="size-5" />
                </span>
                <span className={`editorial-heading text-6xl ${index === 0 || index === 3 ? "text-white/10" : "text-primary/[.07]"}`}>0{index + 1}</span>
              </div>
              <h3 className="editorial-heading mt-10 max-w-md text-3xl leading-none md:text-4xl">{title}</h3>
              <p className={`mt-4 max-w-lg text-sm leading-6 ${index === 0 || index === 3 ? "text-white/70" : "text-[#60717b]"}`}>{description}</p>
              <ArrowUpRight className="absolute bottom-7 right-7 size-5 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          ))}
        </div>

        <div className="mt-4 divide-y divide-[#dce5e9] border-y border-[#dce5e9]">
          {supporting.map(({ shortTitle, description, icon: Icon }, index) => (
            <Link href="/services" key={shortTitle} className="group grid gap-4 py-6 transition hover:bg-[#f6fafb] sm:grid-cols-[4rem_1fr_1.15fr_auto] sm:items-center sm:px-4">
              <span className="text-xs font-bold text-primary/45">0{index + 5}</span>
              <span className="flex items-center gap-3 font-bold text-[#172d3f]"><Icon className="size-4 text-primary" />{shortTitle}</span>
              <span className="text-sm leading-6 text-[#60717b]">{description}</span>
              <ArrowRight className="size-4 text-primary transition group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeDevelopmentFramework() {
  return (
    <section className="bg-[#061d31] px-6 py-20 text-white md:px-10 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="text-[10px] font-bold uppercase tracking-[.22em] text-[#e2bd61]">National development framework</p>
            <h2 className="editorial-heading mt-4 text-5xl leading-[.9] sm:text-6xl md:text-8xl">Strength at every level of change.</h2>
          </div>
          <p className="text-sm leading-7 text-white/65 md:col-span-5">
            PLF strengthens people and organisations, connects networks, improves systems and contributes evidence to wider sector dialogue.
          </p>
        </div>

        <div className="relative mt-16 grid gap-3 md:grid-cols-5">
          <div className="absolute left-[10%] right-[10%] top-9 hidden h-px bg-gradient-to-r from-transparent via-[#e2bd61]/60 to-transparent md:block" />
          {framework.map(([title, description], index) => (
            <article key={title} className="relative rounded-2xl border border-white/12 bg-white/[.04] p-6 backdrop-blur transition hover:border-[#e2bd61]/50 hover:bg-white/[.07] md:pt-14">
              <span className="mb-5 flex size-11 items-center justify-center rounded-full bg-[#e2bd61] text-xs font-extrabold text-[#061d31] md:absolute md:left-6 md:top-3">0{index + 1}</span>
              <h3 className="editorial-heading text-3xl">{title}</h3>
              <p className="mt-3 text-xs leading-6 text-white/62">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeApproach() {
  return (
    <section className="px-3 py-16 sm:px-4 md:py-24">
      <div className="mx-auto grid max-w-[1400px] overflow-hidden rounded-[28px] bg-[#edf5f8] lg:grid-cols-[.9fr_1.1fr]">
        <div className="relative min-h-[420px] lg:min-h-[720px]">
          <Image src="/images/editorial/organisational-workshop.webp" alt="Professionals collaborating during an organisational workshop" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061d31]/70 via-transparent to-transparent" />
          <p className="absolute bottom-7 left-7 right-7 max-w-sm text-sm font-semibold leading-6 text-white md:bottom-10 md:left-10">
            We measure success not only by what PLF delivers directly, but by the capacity and impact we help others build.
          </p>
        </div>
        <div className="p-7 sm:p-10 lg:p-14">
          <p className="text-[10px] font-bold uppercase tracking-[.22em] text-primary">Our approach</p>
          <h2 className="editorial-heading mt-4 text-5xl leading-[.9] text-[#172d3f] sm:text-6xl md:text-7xl">From listening to lasting capability.</h2>
          <p className="mt-7 max-w-2xl text-sm leading-7 text-[#5d6b73]">
            PLF brings together research, learning, training, advisory support, organisational development, networking and strategic partnerships.
          </p>
          <ol className="mt-10 divide-y divide-[#cbdce5] border-y border-[#cbdce5]">
            {approach.map(([title, description], index) => (
              <li key={title} className="group grid grid-cols-[3rem_1fr] gap-3 py-5 sm:grid-cols-[3rem_7rem_1fr] sm:items-center">
                <span className="text-xs font-bold text-primary/45">0{index + 1}</span>
                <span className="editorial-heading text-2xl text-[#172d3f]">{title}</span>
                <span className="col-start-2 text-sm leading-6 text-[#60717b] sm:col-start-auto">{description}</span>
              </li>
            ))}
          </ol>
          <Link href="/about" className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#172d3f] px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary">
            Explore our approach <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function HomeStakeholdersAndPrinciples() {
  return (
    <section className="bg-[#f4efe7] px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.22em] text-primary">Who PLF serves</p>
            <h2 className="editorial-heading mt-4 text-5xl leading-[.9] text-[#172d3f] sm:text-6xl md:text-7xl">A stronger ecosystem is built together.</h2>
            <p className="mt-7 max-w-lg text-sm leading-7 text-[#5d6b73]">
              PLF works across the social-sector ecosystem, connecting the people and institutions that strengthen civil society in India.
            </p>
            <Link href="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary">Discuss a partnership <ArrowUpRight className="size-4" /></Link>
          </div>
          <div className="relative rounded-[28px] border border-[#d8cdbf] bg-white/70 p-5 sm:p-8">
            <div className="grid gap-3 sm:grid-cols-2">
              {stakeholders.map((item, index) => (
                <div key={item} className={`flex min-h-24 items-center gap-4 rounded-2xl border border-[#e2d9cf] bg-white p-4 ${index === stakeholders.length - 1 ? "sm:col-span-2" : ""}`}>
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">0{index + 1}</span>
                  <p className="text-sm font-semibold leading-5 text-[#31495a]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-[#d8cdbf] pt-12">
          <div className="grid gap-7 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.22em] text-primary"><span className="h-px w-8 bg-primary" />Principles in practice</p>
              <h3 className="editorial-heading mt-5 text-5xl leading-[.92] text-[#172d3f] sm:text-6xl">How we choose<br />to work.</h3>
            </div>
            <p className="max-w-2xl text-base leading-8 text-[#5d6b73] lg:pb-2">Eight commitments guide how PLF listens, learns, collaborates and strengthens institutions—turning values into everyday choices.</p>
          </div>
          <div className="mt-12 grid overflow-hidden rounded-[28px] border border-[#d9e3e7] bg-[#d9e3e7] gap-px sm:grid-cols-2 xl:grid-cols-4">
            {principles.map(({ title, description, icon: Icon }, index) => (
              <article key={title} className="group min-h-64 bg-white p-7 transition duration-300 hover:bg-[#f1f8fa] lg:p-8">
                <div className="flex items-start justify-between">
                  <span className="text-xs font-bold text-[#97a8b0]">{String(index + 1).padStart(2, "0")}</span>
                  <ArrowUpRight className="size-4 text-primary/25 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary motion-reduce:transform-none" />
                </div>
                <Icon className="mt-12 size-8 text-primary" strokeWidth={1.7} />
                <h4 className="mt-7 text-xl font-bold text-[#172d3f]">{title}</h4>
                <p className="mt-3 text-sm leading-6 text-[#60717b]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
