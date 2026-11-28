import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";

import {
  ArrowUpRight,
  ArrowDown,
  Code2,
  BrainCircuit,
  Cloud,
  ShieldCheck,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";

/* =========================================================
   AETHER AI SOLUTIONS — PORTFOLIO DATA
========================================================= */

const projects = [
  {
    id: "aether-ai-council",
    number: "07",
    title: "Aether AI Council",
    category: "AI Product • Agentic Intelligence",
    type: "Multi-Agent AI Intelligence Platform",
    status: "Live MVP",
    image: "/aether-ai-council.png",
    description:
      "Beyond a single intelligence. Aether AI Council is a multi-agent artificial intelligence platform where five specialized AI agents collaborate, debate, analyze complex problems, and deliver unified recommendations through a real-time intelligent council experience. Built by Aether AI Solutions.",
    features: [
      "Five specialized AI agents",
      "Multi-agent collaboration and debate",
      "Four intelligent council modes",
      "Real-time AI response streaming",
      "Custom agent selection and instructions",
      "Unified council verdict and conversation history",
      "Research and technical reasoning",
      "API rate limiting and request validation",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Groq AI",
      "GPT-OSS 120B",
      "Upstash Redis",
      "Server-Sent Events",
      "Vercel",
    ],
    services: [
      "Agentic AI Development",
      "Multi-Agent Systems",
      "AI Product Engineering",
      "API Engineering",
      "Cloud Deployment",
    ],
    caseStudy: null,
    live: "https://ai.aetheraisolutions.in",
    github: null,
  },
  {
    id: "streamflix",
    number: "01",
    title: "StreamFlix AI",
    category: "AI Product • Entertainment",
    type: "AI-Powered Streaming Platform",
    status: "Live Application",
    image: "/streamflix.png",
    description:
      "A modern AI-powered entertainment platform combining intelligent movie discovery, generative AI features, real-time movie data, and a responsive streaming-inspired digital experience.",
    features: [
      "AI-powered movie generation",
      "Modern streaming interface",
      "TMDB movie data integration",
      "Responsive experience",
      "Dynamic movie categories",
      "Interactive user experience",
    ],
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Gemini AI",
      "TMDB API",
      "Framer Motion",
    ],
    services: [
      "Software Development",
      "AI Integration",
      "Product Engineering",
    ],
    caseStudy: "/portfolio/streamflix-ai",
    live: "https://streamflix-ai.vercel.app",
    github: "https://github.com/egaost00-lgtm/streamflix-ai",
  },
  {
    id: "pulse",
    number: "02",
    title: "The Pulse",
    category: "Digital Product • News & Media",
    type: "Digital News & Media Platform",
    status: "Live Demo",
    image: "/the-pulse.png",
    description:
      "A digital news platform designed to deliver breaking news, curated headlines, live news coverage, and real-time updates through a premium newspaper-style experience across devices.",
    features: [
      "Breaking news ticker",
      "Live news coverage",
      "Real-time headline aggregation",
      "YouTube live news integration",
      "Modern newspaper-style UI",
      "Responsive digital experience",
    ],
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "GNews API",
      "YouTube API",
    ],
    services: [
      "Web Development",
      "API Integration",
      "Digital Product Engineering",
    ],
    caseStudy: null,
    live: "https://the-pulse-olive.vercel.app",
    github: null,
  },
  {
    id: "examai",
    number: "03",
    title: "ExamAI",
    category: "AI Product • Education",
    type: "AI-Powered Exam Preparation Platform",
    status: "Live Demo",
    image: "/examai.png",
    description:
      "An AI-powered exam preparation platform designed to support competitive exam aspirants through practice questions, mock tests, structured learning, and performance improvement.",
    features: [
      "Practice question system",
      "Mock test experience",
      "Subject-based preparation",
      "Performance evaluation",
      "Structured exam preparation",
      "Responsive web application",
    ],
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Supabase",
      "AI",
      "PostgreSQL",
    ],
    services: [
      "SaaS Engineering",
      "AI Software",
      "Education Technology",
    ],
    caseStudy: null,
    live: "https://exam-ai-amber.vercel.app/",
    github: null,
  },
  {
    id: "bharatplay",
    number: "04",
    title: "BharatPlay",
    category: "Cloud Product • Entertainment",
    type: "Entertainment Web Platform",
    status: "Live Demo",
    image: "/bharatplay.png",
    description:
      "An AI-powered entertainment platform featuring an immersive viewing experience, interactive content, responsive design, and cloud deployment using AWS technologies.",
    features: [
      "AI-powered entertainment experience",
      "Modern streaming interface",
      "Interactive video experience",
      "Comment and engagement system",
      "Responsive web application",
      "AWS production deployment",
    ],
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Supabase",
      "AI",
      "AWS Amplify",
    ],
    services: [
      "Software Development",
      "Cloud Deployment",
      "Product Engineering",
    ],
    caseStudy: "/portfolio/bharatplay",
    live: "https://bharatplay-liart.vercel.app",
    github: "https://github.com/egaost00-lgtm/bharatplay",
  },
  {
    id: "auracare",
    number: "05",
    title: "AURACARE",
    category: "Digital Product • Healthcare",
    type: "AI-Powered Healthcare Platform",
    status: "Development Project",
    image: "/auracare.png",
    description:
      "A healthcare technology project exploring patient-first digital experiences, consultation assistance, appointment workflows, healthcare information, and responsive interface design.",
    features: [
      "AI-powered healthcare experience",
      "Patient-first interface",
      "Consultation request workflow",
      "Appointment assistance",
      "Responsive healthcare platform",
      "Modern healthcare UI/UX",
    ],
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "AI",
      "Responsive UI",
      "Modern UX",
    ],
    services: [
      "Healthcare Technology",
      "UI/UX Engineering",
      "AI Integration",
    ],
    caseStudy: "/portfolio/auracare",
    live: null,
    github: "https://github.com/egaost00-lgtm/auracare",
  },
  {
    id: "security",
    number: "06",
    title: "Network Security Assessment",
    category: "Cybersecurity • Network Assessment",
    type: "Authorized Lab Security Assessment",
    status: "Lab Case Study",
    image: "/network-security.png",
    description:
      "An authorized network security assessment conducted in a controlled lab environment to identify exposed services, analyze network traffic, document security findings, and provide practical remediation recommendations.",
    features: [
      "Network reconnaissance",
      "Port and service enumeration",
      "UDP service discovery",
      "Listening-service analysis",
      "Wireshark traffic analysis",
      "Security findings and recommendations",
    ],
    technologies: [
      "Kali Linux",
      "Nmap",
      "Wireshark",
      "Linux",
      "TCP/IP",
      "Network Security",
    ],
    services: [
      "Security Assessment",
      "Network Analysis",
      "Technical Reporting",
    ],
    caseStudy: "/portfolio/network-security-assessment",
    live: null,
    github:
      "https://github.com/egaost00-lgtm/network-security-assessment",
  },
];

/* =========================================================
   PORTFOLIO PAGE
========================================================= */

export default function PortfolioPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden px-5 pb-20 pt-36 sm:px-6 sm:pt-44 lg:pb-28">

        <div className="pointer-events-none absolute left-1/2 top-10 h-[550px] w-[750px] -translate-x-1/2 rounded-full bg-yellow-400/[0.07] blur-[150px]" />

        <div className="relative mx-auto max-w-7xl">

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-gray-300 transition hover:border-yellow-400/40 hover:text-yellow-400"
          >
            ← Back to Home
          </Link>

          <div className="mt-12 max-w-5xl">

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400 sm:text-sm">
              Aether AI Solutions • Selected Projects
            </p>

            <h1 className="mt-6 text-[clamp(2.8rem,7vw,6rem)] font-black leading-[1.08] tracking-[-0.055em]">
              Technology We Build.
              <br />

              <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-400 bg-clip-text text-transparent">
                Ideas We Bring to Life.
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-base leading-8 text-gray-400 sm:text-xl sm:leading-9">
              Explore software applications, AI-powered products,
              cloud-deployed platforms, digital experiences,
              and security projects developed by Aether AI Solutions.
            </p>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-500 sm:text-base">
              Our portfolio demonstrates practical engineering
              capabilities across product development,
              AI integration, modern web technologies,
              and technical problem-solving.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <a
                href="#featured-work"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-yellow-400 px-8 py-4 font-semibold text-black transition hover:-translate-y-1 hover:bg-yellow-300"
              >
                Explore Our Work
                <ArrowDown size={18} />
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white transition hover:border-yellow-400/50 hover:bg-white/10"
              >
                Start a Project
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>

          {/* CAPABILITY PILLS */}

          <div className="mt-14 flex flex-wrap gap-3">

            {[
              "Software Engineering",
              "AI Applications",
              "SaaS Platforms",
              "Cloud Deployment",
              "API Integration",
              "Cybersecurity",
              "Digital Experiences",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-gray-400 sm:px-5 sm:py-2.5 sm:text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECT OVERVIEW
      ===================================================== */}

      <section className="px-5 pb-20 sm:px-6">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-5 sm:grid-cols-3">

            {[
              {
                icon: Code2,
                title: "Software Engineering",
                description:
                  "Modern web applications, digital platforms, and APIs.",
              },
              {
                icon: BrainCircuit,
                title: "AI Product Development",
                description:
                  "Intelligent software and AI-integrated digital experiences.",
              },
              {
                icon: Cloud,
                title: "Cloud & Security",
                description:
                  "Cloud deployment and authorized security assessment projects.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[26px] border border-white/10 bg-white/[0.035] p-6 transition hover:border-yellow-500/30"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-400">
                    <Icon size={24} />
                  </div>

                  <h2 className="mt-5 text-lg font-bold">
                    {item.title}
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-gray-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED WORK
      ===================================================== */}

      <section
        id="featured-work"
        className="scroll-mt-28 px-5 pb-28 sm:px-6"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div className="max-w-3xl">

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
                Featured Work
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
                Selected Engineering Projects.
              </h2>
            </div>

           <p className="max-w-md text-sm leading-7 text-gray-400 sm:text-base">
  Explore our live applications, AI-powered products,
  software engineering projects, and technical case studies.
</p>
          </div>

          {/* PROJECT LIST */}

          <div className="space-y-10 sm:space-y-12">

            {projects.map((project, index) => (
              <article
                key={project.id}
                className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] transition-all duration-500 hover:border-yellow-400/30 sm:rounded-[36px]"
              >

                {/* PROJECT IMAGE */}

                <div className="relative h-[260px] overflow-hidden bg-[#101010] sm:h-[400px] lg:h-[480px]">

                  <Image
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    fill
                    sizes="(max-width: 768px) 100vw, 1200px"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    priority={index === 0}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />

                

                  {/* STATUS */}

                  <div className="absolute right-4 top-4 sm:right-6 sm:top-6">

                    <span className="rounded-full border border-white/20 bg-black/75 px-3 py-2 text-[10px] font-semibold text-white/85 backdrop-blur-md sm:text-xs">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* PROJECT CONTENT */}

                <div className="p-6 sm:p-10 lg:p-14">

                  <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-12">

                    {/* MAIN CONTENT */}

                    <div>

                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-400 sm:text-sm">
                        {project.category}
                      </p>

                      <h3 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                        {project.title}
                      </h3>

                      <p className="mt-6 max-w-3xl text-base leading-8 text-gray-400 sm:text-lg">
                        {project.description}
                      </p>

                      {/* FEATURES */}

                      <div className="mt-10">

                        <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-300 sm:text-sm">
                          Project Capabilities
                        </h4>

                        <div className="mt-5 grid gap-3 sm:grid-cols-2">

                          {project.features.map((feature) => (
                            <div
                              key={feature}
                              className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm leading-6 text-gray-300 sm:px-5"
                            >
                              <CheckCircle2
                                size={17}
                                className="mt-0.5 shrink-0 text-yellow-400"
                              />

                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* SIDEBAR */}

                    <aside className="lg:border-l lg:border-white/10 lg:pl-10">

                      {/* TECHNOLOGIES */}

                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
                        Technologies
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">

                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-gray-300 sm:px-4"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* PROJECT TYPE */}

                      <div className="mt-9 border-t border-white/10 pt-7">

                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
                          Project Type
                        </p>

                        <p className="mt-3 text-base font-semibold sm:text-lg">
                          {project.type}
                        </p>
                      </div>

                      {/* SERVICES DEMONSTRATED */}

                      <div className="mt-9 border-t border-white/10 pt-7">

                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
                          Engineering Capabilities
                        </p>

                        <div className="mt-4 space-y-3">

                          {project.services.map((service) => (
                            <div
                              key={service}
                              className="flex items-center gap-2 text-sm text-gray-300"
                            >
                              <span className="text-yellow-400">
                                ✦
                              </span>

                              {service}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* PROJECT LINKS */}

                      <div className="mt-9 flex flex-col gap-3">

                        {project.caseStudy && (
                          <Link
                            href={project.caseStudy}
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-yellow-400/40 bg-yellow-400/10 px-5 py-3.5 text-sm font-semibold text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
                          >
                            View Case Study
                            <ArrowUpRight size={16} />
                          </Link>
                        )}

                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-yellow-400 px-5 py-3.5 text-sm font-semibold text-black transition hover:bg-yellow-300"
                          >
                            Launch Application
                            <ExternalLink size={16} />
                          </a>
                        )}

                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3.5 text-sm font-semibold text-white transition hover:border-yellow-400/50 hover:text-yellow-400"
                          >
                            View GitHub
                            <ExternalLink size={16} />
                          </a>
                        )}
                      </div>

                      {/* SECURITY LABEL */}

                      {project.id === "security" && (
                        <div className="mt-5 flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-xs text-gray-400">
                          <ShieldCheck
                            size={18}
                            className="shrink-0 text-yellow-400"
                          />

                          Authorized lab-based security assessment.
                        </div>
                      )}

                    </aside>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="border-t border-white/10 px-5 py-24 sm:px-6 lg:py-28">

        <div className="mx-auto max-w-5xl text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
            Build With Aether
          </p>

          <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Have a Technology Challenge?
            <br />

            <span className="text-yellow-400">
              Let's Engineer the Solution.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            Whether you need custom software, AI integration,
            a SaaS platform, cloud deployment, or a new
            digital product, let's discuss how we can
            bring your project to life.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-yellow-400 px-9 py-4 font-semibold text-black transition hover:scale-105 hover:bg-yellow-300"
            >
              Start Your Project
              <ArrowUpRight size={18} />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-9 py-4 font-semibold text-white transition hover:border-yellow-400/50 hover:text-yellow-400"
            >
              Explore Services
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
