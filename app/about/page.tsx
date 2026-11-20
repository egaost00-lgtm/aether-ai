import Navbar from "@/components/layout/Navbar";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Zap,
  BrainCircuit,
  Code2,
  CloudCog,
  Layers3,
  ShieldCheck,
  Target,
  Eye,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";

/* =========================================================
   AETHER AI SOLUTIONS — ABOUT PAGE
========================================================= */

const capabilities = [
  "Software Engineering",
  "Artificial Intelligence",
  "Cloud & DevOps",
  "Enterprise Technology",
  "SaaS Product Development",
  "Application Support",
];

const advantages: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Code2,
    title: "Engineering First",
    description:
      "We focus on clean architecture, maintainable code, performance, and technology choices that support real business requirements.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Driven Innovation",
    description:
      "We explore practical applications of artificial intelligence, automation, and modern APIs to create more capable digital systems.",
  },
  {
    icon: Zap,
    title: "Business-Focused Delivery",
    description:
      "We approach projects around the problem being solved, the users being served, and the outcomes the technology needs to support.",
  },
  {
    icon: Layers3,
    title: "Designed for Growth",
    description:
      "We build with scalability, usability, and long-term maintainability in mind, from early prototypes to evolving business platforms.",
  },
];

const divisions = [
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Custom websites, applications, business portals, APIs, and digital platforms.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Intelligent Automation",
    description:
      "AI agents, generative AI applications, assistants, and automated workflows.",
  },
  {
    icon: CloudCog,
    title: "Cloud & DevOps",
    description:
      "Cloud deployment, infrastructure configuration, and application delivery workflows.",
  },
  {
    icon: Layers3,
    title: "SaaS & Enterprise Solutions",
    description:
      "Subscription platforms, business systems, dashboards, and integrations.",
  },
  {
    icon: ShieldCheck,
    title: "Technology Support",
    description:
      "Application maintenance, monitoring, improvements, and technical assistance.",
  },
];

/* =========================================================
   PAGE COMPONENT
========================================================= */

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <Navbar />

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="relative px-5 pb-20 pt-36 sm:px-6 sm:pt-44 lg:pb-28">

        {/* BACKGROUND GLOW */}

        <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-yellow-500/[0.06] blur-[160px]" />

        <div className="relative mx-auto max-w-7xl">

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-yellow-400 transition hover:text-yellow-300"
          >
            ← Back to Home
          </Link>

          <div className="mt-12 max-w-5xl">

            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400 sm:text-sm">
              About Aether AI Solutions
            </p>

            <h1 className="text-[clamp(2.8rem,7vw,6rem)] font-black leading-[1.08] tracking-[-0.055em]">
              Engineering Software.
              <br />

              <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-400 bg-clip-text text-transparent">
                Building Intelligence.
              </span>

              <br />
              Powering Growth.
            </h1>

            <p className="mt-8 max-w-3xl text-base leading-8 text-gray-400 sm:text-xl sm:leading-9">
              Aether AI Solutions is an India-based technology
              solutions business focused on custom software
              engineering, artificial intelligence, cloud
              technology, enterprise systems, and scalable
              digital products.
            </p>

            <p className="mt-5 max-w-3xl text-base leading-8 text-gray-400 sm:text-lg">
              Our goal is to help startups, growing businesses,
              and organizations in India and international
              markets transform ideas and business challenges
              into practical technology solutions.
            </p>

            {/* HERO BUTTONS */}

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-400"
              >
                Discuss Your Project
                <ArrowUpRight size={18} />
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-yellow-500/50 hover:text-yellow-400"
              >
                Explore Our Work
                <ArrowUpRight size={18} />
              </Link>

            </div>

            {/* CAPABILITY STRIP */}

            <div className="mt-12 flex flex-wrap gap-2">
              {capabilities.map((capability) => (
                <span
                  key={capability}
                  className="rounded-full border border-yellow-500/15 bg-yellow-500/[0.045] px-4 py-2 text-xs font-medium text-yellow-200/80"
                >
                  {capability}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHO WE ARE
      ===================================================== */}

      <section className="relative px-5 py-20 sm:px-6 lg:py-28">

        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* TEXT */}

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400 sm:text-sm">
              Who We Are
            </p>

            <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-5xl">
              A Technology Partner
              <br />
              <span className="text-yellow-400">
                for the Digital Era.
              </span>
            </h2>

            <p className="mt-8 text-base leading-8 text-gray-400 sm:text-lg">
              Aether AI Solutions brings together modern
              software development, artificial intelligence,
              automation, cloud technology, and product-focused
              design to address business and technology challenges.
            </p>

            <p className="mt-6 text-base leading-8 text-gray-400 sm:text-lg">
              We believe successful technology begins with
              understanding the problem. Our approach emphasizes
              clear requirements, thoughtful engineering,
              usable interfaces, and reliable delivery.
            </p>

            <p className="mt-6 text-base leading-8 text-gray-400 sm:text-lg">
              Whether the goal is launching a digital product,
              modernizing an application, integrating AI,
              or improving business workflows, we aim to
              create solutions that can evolve alongside
              the organizations using them.
            </p>

            {/* PRINCIPLES */}

            <div className="mt-10 grid gap-4 sm:grid-cols-2">

              {[
                "Business-first thinking",
                "Modern engineering practices",
                "Practical AI adoption",
                "Long-term product mindset",
              ].map((principle) => (
                <div
                  key={principle}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4"
                >
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-yellow-400"
                  />

                  <span className="text-sm font-medium text-white/80">
                    {principle}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* PRODUCT VISUAL */}

          <div className="relative">

            <div className="absolute -inset-6 rounded-[50px] bg-yellow-500/[0.05] blur-3xl" />

            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.035] p-4 sm:rounded-[40px]">

              <div className="relative aspect-[16/11] overflow-hidden rounded-[24px] border border-white/10 bg-[#0B0B0B] sm:rounded-[30px]">

                <Image
                  src="/streamflix.png"
                  alt="StreamFlix AI digital product developed by Aether AI Solutions"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition duration-700 hover:scale-[1.03]"
                />
              </div>

              <div className="p-5 sm:p-6">

                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-400">
                  Our Engineering Philosophy
                </p>

                <p className="mt-3 text-lg font-semibold text-white sm:text-xl">
                  Understand. Design. Engineer. Evolve.
                </p>

                <p className="mt-3 text-sm leading-7 text-gray-400">
                  We connect technology decisions to business
                  needs, focusing on practical solutions and
                  sustainable digital growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MISSION & VISION
      ===================================================== */}

      <section className="px-5 py-20 sm:px-6 lg:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
              Our Direction
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-5xl">
              Mission & Vision
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-400 sm:text-lg">
              Our ambition is to make modern technology
              accessible, useful, and valuable for businesses
              across industries and markets.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">

            {/* MISSION */}

            <article className="group rounded-[32px] border border-white/10 bg-white/[0.035] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-yellow-500/30 hover:bg-white/[0.055] sm:p-10">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10 text-yellow-400">
                <Target size={30} />
              </div>

              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
                Our Mission
              </p>

              <h3 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl">
                Engineer technology that solves real
                business problems.
              </h3>

              <p className="mt-6 text-base leading-8 text-gray-400 sm:text-lg">
                To help organizations use software engineering,
                artificial intelligence, cloud infrastructure,
                and digital innovation to improve operations,
                create better customer experiences, and
                develop scalable technology products.
              </p>
            </article>

            {/* VISION */}

            <article className="group rounded-[32px] border border-white/10 bg-white/[0.035] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-yellow-500/30 hover:bg-white/[0.055] sm:p-10">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10 text-yellow-400">
                <Eye size={30} />
              </div>

              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
                Our Vision
              </p>

              <h3 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl">
                Build a globally trusted software
                and AI engineering company.
              </h3>

              <p className="mt-6 text-base leading-8 text-gray-400 sm:text-lg">
                To grow Aether AI Solutions into a technology
                partner recognized for practical innovation,
                dependable engineering, transparent
                collaboration, and digital solutions
                that create lasting business value.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY DIVISIONS
      ===================================================== */}

      <section className="px-5 py-20 sm:px-6 lg:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
              Our Capabilities
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-5xl">
              Built Around
              <br />
              <span className="text-yellow-400">
                Modern Technology.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-400 sm:text-lg">
              Our service areas cover the technologies and
              engineering disciplines businesses need to
              create, operate, and improve digital systems.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {divisions.map((division) => {
              const Icon = division.icon;

              return (
                <article
                  key={division.title}
                  className="group rounded-[28px] border border-white/10 bg-white/[0.035] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-yellow-500/30 hover:bg-white/[0.055]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-500/15 bg-yellow-500/[0.07] text-yellow-400 transition duration-300 group-hover:scale-110">
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-7 text-xl font-bold">
                    {division.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-400">
                    {division.description}
                  </p>

                  <Link
                    href="/services"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-yellow-400 transition hover:gap-3"
                  >
                    Explore Services
                    <ArrowUpRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY CHOOSE AETHER
      ===================================================== */}

      <section className="px-5 py-20 sm:px-6 lg:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
              Why Aether AI Solutions
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-5xl">
              More Than Code.
              <br />
              <span className="text-yellow-400">
                Technology With Purpose.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-400 sm:text-lg">
              Our approach combines technical thinking,
              product design, and business understanding
              to create solutions that are useful,
              maintainable, and ready to evolve.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {advantages.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group rounded-[30px] border border-white/10 bg-white/[0.035] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-yellow-500/40 hover:bg-white/[0.055] hover:shadow-[0_0_50px_rgba(234,179,8,0.12)] sm:p-8"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-500/10 text-yellow-400 transition duration-500 group-hover:scale-110 group-hover:bg-yellow-500 group-hover:text-black">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-7 text-xl font-bold sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
                    {item.description}
                  </p>

                  <div className="mt-7 h-1 w-10 rounded-full bg-yellow-500 transition-all duration-500 group-hover:w-full" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="px-5 pb-28 pt-20 sm:px-6 lg:pt-28">

        <div className="mx-auto max-w-7xl">

          <div className="relative overflow-hidden rounded-[32px] border border-yellow-500/20 bg-gradient-to-br from-yellow-500/10 via-white/[0.035] to-blue-500/[0.08] p-8 text-center sm:rounded-[40px] sm:p-16 lg:p-20">

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-[120px]" />

            <div className="relative">

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
                Build With Aether
              </p>

              <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-black sm:text-5xl lg:text-6xl">
                Let's Build Technology
                <span className="text-yellow-400">
                  {" "}
                  That Moves Your Business Forward.
                </span>
              </h2>

              <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
                From custom software and AI automation to
                cloud technology and digital products,
                let's discuss how Aether AI Solutions
                can support your next project.
              </p>

              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-yellow-400"
                >
                  Start Your Project
                  <ArrowUpRight size={18} />
                </Link>

                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-8 py-4 font-semibold text-white transition hover:border-yellow-500/50 hover:text-yellow-400"
                >
                  Explore Our Work
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
