import Navbar from "@/components/layout/Navbar";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Code2,
  BrainCircuit,
  CloudCog,
  Building2,
  Layers3,
  ShieldCheck,
} from "lucide-react";

/* =========================================================
   AETHER AI SOLUTIONS — SERVICE DIVISIONS
========================================================= */

const services = [
  {
    number: "01",
    icon: Code2,
    title: "Software Development",
    description:
      "We design and engineer custom websites, web applications, APIs, and business software built around your requirements. From customer-facing platforms to internal tools, our focus is on performance, usability, and maintainable architecture.",
    tags: [
      "Web Applications",
      "Custom Software",
      "API Development",
      "UI/UX",
    ],
    capabilities: [
      "Business websites and web applications",
      "Custom dashboards and internal portals",
      "API development and integrations",
      "Application modernization",
    ],
  },
  {
    number: "02",
    icon: BrainCircuit,
    title: "AI & Intelligent Automation",
    description:
      "We build AI-powered applications, intelligent assistants, and automated workflows that connect business systems, data, and modern AI models to help teams reduce repetitive work and improve productivity.",
    tags: [
      "AI Agents",
      "Generative AI",
      "LLM Integration",
      "Automation",
    ],
    capabilities: [
      "AI agents and business assistants",
      "AI-powered software applications",
      "Workflow and process automation",
      "Document and knowledge assistants",
    ],
  },
  {
    number: "03",
    icon: CloudCog,
    title: "Cloud & DevOps",
    description:
      "We help businesses deploy, manage, and improve cloud-based applications through modern infrastructure, development workflows, and deployment practices designed for reliability and scalability.",
    tags: [
      "Cloud Infrastructure",
      "DevOps",
      "Deployment",
      "Monitoring",
    ],
    capabilities: [
      "Cloud application deployment",
      "CI/CD pipeline configuration",
      "Infrastructure configuration",
      "Application monitoring and optimization",
    ],
  },
  {
    number: "04",
    icon: Building2,
    title: "Enterprise IT Solutions",
    description:
      "We develop and integrate business technology solutions that improve operational visibility, connect essential systems, and support data-driven decision-making across organizations.",
    tags: [
      "CRM & ERP",
      "System Integration",
      "Analytics",
      "Business Automation",
    ],
    capabilities: [
      "CRM and ERP integrations",
      "Business intelligence dashboards",
      "Custom operational systems",
      "Data analytics and reporting",
    ],
  },
  {
    number: "05",
    icon: Layers3,
    title: "SaaS & Product Engineering",
    description:
      "From initial product strategy to working software, we build SaaS applications, digital platforms, and MVPs with modern interfaces, scalable architecture, and business-focused functionality.",
    tags: [
      "SaaS Development",
      "MVP Engineering",
      "Multi-Tenant Apps",
      "Product Design",
    ],
    capabilities: [
      "MVP and startup product development",
      "Subscription-based SaaS platforms",
      "AI-powered digital products",
      "Education and industry-specific platforms",
    ],
  },
  {
    number: "06",
    icon: ShieldCheck,
    title: "Managed IT & Support",
    description:
      "We provide ongoing application support, maintenance, performance improvements, and technical assistance to help businesses keep their digital systems reliable and secure.",
    tags: [
      "Maintenance",
      "Technical Support",
      "Monitoring",
      "Security Reviews",
    ],
    capabilities: [
      "Application maintenance and updates",
      "Performance and reliability improvements",
      "Authorized security assessments",
      "Technical troubleshooting and support",
    ],
  },
];

/* =========================================================
   SELECTED AETHER PROJECTS
========================================================= */

const projects = [
  {
    title: "StreamFlix AI",
    category: "AI-Powered Digital Product",
    description:
      "An entertainment platform combining AI-assisted movie discovery, real-time movie data, and a responsive digital experience.",
    image: "/streamflix.png",
    status: "Live Demo",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Gemini AI",
      "TMDB API",
    ],
    href: "https://streamflix-ai.vercel.app",
    external: true,
    action: "View Live Product",
  },
  {
    title: "The Pulse",
    category: "Digital News & Media",
    description:
      "A digital news platform featuring curated headlines, live news content, real-time updates, and a modern newspaper-style interface.",
    image: "/the-pulse.png",
    status: "Live Demo",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "GNews API",
      "YouTube API",
    ],
    href: "https://the-pulse-olive.vercel.app",
    external: true,
    action: "View Live Product",
  },
  {
    title: "ExamAI",
    category: "AI-Powered Education",
    description:
      "An AI-assisted exam preparation platform featuring practice questions, mock tests, structured learning, and interactive study experiences.",
    image: "/examai.png",
    status: "Live Demo",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "AI",
    ],
    href: "https://exam-ai-amber.vercel.app/",
    external: true,
    action: "View Live Product",
  },
  {
    title: "AURACARE",
    category: "Healthcare Technology",
    description:
      "A healthcare platform project exploring patient consultations, appointment assistance, healthcare guidance, and digital patient experiences.",
    image: "/auracare.png",
    status: "Project Repository",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Healthcare UX",
      "AI",
    ],
    href: "https://github.com/egaost00-lgtm/auracare",
    external: true,
    action: "Explore Project",
  },
  {
    title: "Network Security Assessment",
    category: "Cybersecurity & Network Security",
    description:
      "An authorized network security assessment in a controlled lab environment, covering exposed services, traffic analysis, security findings, and remediation recommendations.",
    image: "/network-security.png",
    status: "Lab Case Study",
    tags: [
      "Kali Linux",
      "Nmap",
      "Wireshark",
      "Security Assessment",
    ],
    href: "/portfolio",
    external: false,
    action: "View Case Study",
  },
];

/* =========================================================
   SERVICES PAGE
========================================================= */

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <Navbar />

      {/* PAGE CONTAINER */}

      <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-32 sm:px-6 sm:pt-40">

        {/* BACKGROUND ATMOSPHERE */}

        <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-yellow-500/[0.035] blur-[140px]" />

        {/* BACK LINK */}

        <Link
          href="/"
          className="relative inline-flex items-center gap-2 text-sm font-medium text-yellow-400 transition hover:text-yellow-300"
        >
          ← Back to Home
        </Link>

        {/* HERO */}

        <header className="relative mt-10 max-w-5xl">

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400 sm:text-sm">
            Our Technology Services
          </p>

          <h1 className="mt-6 text-[clamp(2.7rem,7vw,5.5rem)] font-black leading-[1.08] tracking-[-0.055em]">
            Engineering Technology.
            <br />

            <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-400 bg-clip-text text-transparent">
              Accelerating Business.
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-base leading-8 text-gray-400 sm:text-lg">
            Aether AI Solutions delivers custom software,
            artificial intelligence, cloud engineering,
            enterprise technology, and digital product development
            for businesses in India and worldwide.
          </p>

          {/* HERO CAPABILITIES */}

          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "Software Engineering",
              "Artificial Intelligence",
              "Cloud Solutions",
              "Enterprise Technology",
              "SaaS Products",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-yellow-500/20 bg-yellow-500/[0.045] px-4 py-2 text-xs font-medium text-yellow-200/80"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* HERO ACTIONS */}

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-7 py-3.5 text-sm font-semibold text-black transition hover:-translate-y-1 hover:bg-yellow-400"
            >
              Discuss Your Project
              <ArrowUpRight size={17} />
            </Link>

            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.035] px-7 py-3.5 text-sm font-medium text-white transition hover:border-yellow-500/40 hover:bg-white/[0.07]"
            >
              Explore Our Work
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </header>

        {/* SERVICES */}

        <section
          aria-labelledby="services-heading"
          className="relative mt-24 sm:mt-32"
        >
          <div className="mb-12 max-w-3xl">

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
              What We Deliver
            </p>

            <h2
              id="services-heading"
              className="mt-4 text-3xl font-black tracking-tight sm:text-5xl"
            >
              Our Core Capabilities
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              Explore our engineering and technology services,
              designed to help organizations build reliable
              software, automate operations, and create
              scalable digital experiences.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.number}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.035] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-yellow-500/30 hover:bg-white/[0.055] sm:p-8"
                >
                  {/* TOP ROW */}

                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-[0.2em] text-yellow-400">
                      SERVICE {service.number}
                    </span>

                    <ArrowUpRight
                      size={20}
                      className="text-white/30 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-yellow-400"
                    />
                  </div>

                  {/* ICON */}

                  <div className="mt-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-500/15 bg-yellow-500/[0.07] text-yellow-400 transition duration-300 group-hover:scale-110 group-hover:border-yellow-500/35">
                    <Icon size={27} strokeWidth={1.8} />
                  </div>

                  {/* TITLE */}

                  <h3 className="mt-7 text-2xl font-bold tracking-tight">
                    {service.title}
                  </h3>

                  {/* DESCRIPTION */}

                  <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
                    {service.description}
                  </p>

                  {/* CAPABILITIES */}

                  <div className="mt-7">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
                      Key Capabilities
                    </p>

                    <ul className="space-y-2.5">
                      {service.capabilities.map((capability) => (
                        <li
                          key={capability}
                          className="flex items-start gap-2 text-sm leading-6 text-gray-400"
                        >
                          <span className="mt-0.5 shrink-0 text-yellow-400">
                            ✓
                          </span>

                          <span>{capability}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* TAGS */}

                  <div className="mt-auto flex flex-wrap gap-2 pt-8">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] text-gray-400 transition group-hover:border-yellow-500/20 group-hover:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* SERVICE ACTION */}

                  <Link
                    href="/contact"
                    className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-semibold text-yellow-400 transition hover:gap-3 hover:text-yellow-300"
                  >
                    Discuss This Service
                    <ArrowUpRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>
        </section>

        {/* SELECTED PROJECTS */}

        <section
          aria-labelledby="projects-heading"
          className="relative mt-24 rounded-[32px] border border-white/10 bg-white/[0.025] p-5 sm:mt-32 sm:rounded-[40px] sm:p-10 lg:p-12"
        >
          <div className="max-w-3xl">

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
              Built By Aether
            </p>

            <h2
              id="projects-heading"
              className="mt-4 text-3xl font-black tracking-tight sm:text-5xl"
            >
              Selected Projects.
              <br />

              <span className="text-yellow-400">
                Demonstrated Capabilities.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              Explore selected software, AI, media, education,
              healthcare, and security projects developed
              using modern technologies and product-focused design.
            </p>
          </div>

          {/* PROJECT GRID */}

          <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">

            {projects.map((project) => (
              <article
                key={project.title}
                className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-black/30 transition-all duration-500 hover:-translate-y-2 hover:border-yellow-500/40"
              >
                {/* PROJECT IMAGE */}

                <div className="relative h-56 shrink-0 overflow-hidden sm:h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* CATEGORY */}

                  <div className="absolute left-3 top-3 max-w-[65%] rounded-full border border-yellow-500/30 bg-black/75 px-3 py-1.5 text-[10px] font-semibold text-yellow-400 backdrop-blur-md">
                    {project.category}
                  </div>

                  {/* STATUS */}

                  <div className="absolute right-3 top-3 rounded-full border border-white/20 bg-black/75 px-3 py-1.5 text-[10px] font-semibold text-white/80 backdrop-blur-md">
                    {project.status}
                  </div>
                </div>

                {/* PROJECT CONTENT */}

                <div className="flex flex-1 flex-col p-6">

                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow-400">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold tracking-tight">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-400">
                    {project.description}
                  </p>

                  {/* TECHNOLOGIES */}

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] text-gray-400 transition hover:border-yellow-500/30 hover:text-yellow-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* PROJECT LINK */}

                  <div className="mt-auto pt-7">
                    <Link
                      href={project.href}
                      target={
                        project.external ? "_blank" : undefined
                      }
                      rel={
                        project.external
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-5 py-3 text-sm font-semibold text-black transition hover:scale-105 hover:bg-yellow-400"
                    >
                      {project.action}
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* PORTFOLIO LINK */}

          <div className="mt-10 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-semibold text-yellow-400 transition hover:gap-3 hover:text-yellow-300"
            >
              Explore Our Full Portfolio
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </section>

        {/* FINAL CTA */}

        <section className="relative mt-24 overflow-hidden rounded-[32px] border border-yellow-500/20 bg-yellow-500/[0.045] p-8 text-center sm:mt-32 sm:rounded-[40px] sm:p-12 lg:p-16">

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(234,179,8,0.10),transparent_65%)]" />

          <div className="relative mx-auto max-w-3xl">

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
              Build With Aether
            </p>

            <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Have a Business Challenge?
              <br />

              <span className="text-yellow-400">
                Let's Engineer the Solution.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
              Whether you need custom software, AI automation,
              cloud solutions, or a new digital product,
              let's discuss your requirements and explore
              the right approach for your business.
            </p>

            <Link
              href="/contact"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-yellow-400"
            >
              Start Your Project
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
