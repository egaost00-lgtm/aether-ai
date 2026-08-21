import Navbar from "@/components/layout/Navbar";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "AI Solutions & Intelligent Systems",
    description:
      "We design and develop AI-powered systems that help businesses automate processes, improve decision-making, and create smarter digital experiences.",
    tags: [
      "Generative AI",
      "AI Applications",
      "AI Integration",
      "Intelligent Systems",
    ],
  },
  {
    number: "02",
    title: "Premium Web & App Development",
    description:
      "High-performance websites and web applications built with modern technologies, premium UI/UX, responsive design, and conversion-focused experiences.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    number: "03",
    title: "AI SaaS & Digital Products",
    description:
      "From an idea to a working product, we build scalable AI-powered SaaS platforms and digital products designed around real business use cases.",
    tags: ["SaaS", "AI Products", "APIs", "Cloud"],
  },
  {
    number: "04",
    title: "Data Analytics & Intelligence",
    description:
      "Transform business data into meaningful insights through interactive dashboards, analytics systems, visualizations, and intelligent decision-support solutions.",
    tags: ["Analytics", "Dashboards", "Python", "Data Visualization"],
  },
  {
    number: "05",
    title: "AI Automation & Workflows",
    description:
      "Automate repetitive business operations with intelligent workflows that connect your tools, data, APIs, and AI systems.",
    tags: ["AI Automation", "APIs", "Workflows", "Business Automation"],
  },
  {
    number: "06",
    title: "Custom Digital Solutions",
    description:
      "Have a unique idea? We build custom digital solutions around your requirements instead of forcing your business into a pre-built template.",
    tags: ["Custom Development", "Product Strategy", "UI/UX", "Technology"],
  },
  {
    number: "07",
    title: "Cybersecurity & Network Assessments",
    description:
      "Authorized security assessments designed to identify exposed services, analyze network traffic, document security findings, and provide practical remediation recommendations.",
    tags: ["Kali Linux", "Nmap", "Wireshark", "Network Security"],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <div className="mx-auto max-w-7xl px-6 py-32">

        {/* Back */}
        <Link
          href="/"
          className="text-yellow-400 transition hover:text-yellow-300"
        >
          ← Back to Home
        </Link>

        {/* Hero */}
        <div className="mt-8 max-w-5xl">
          <p className="text-sm uppercase tracking-[0.35em] text-yellow-400">
            What We Build
          </p>

          <h1 className="mt-5 text-5xl font-black tracking-tight md:text-7xl">
            Technology built
            <br />
            <span className="text-yellow-400">
              around your business.
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-xl leading-8 text-gray-400">
            From AI-powered applications and premium websites to intelligent
            automation and data-driven platforms, Aether AI Solutions builds
            digital products designed to solve real business problems.
          </p>
        </div>

        {/* Services */}
        <section className="mt-24 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="group rounded-[32px] border border-white/10 bg-white/[0.035] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-yellow-500/30 hover:bg-white/[0.055]"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold tracking-[0.25em] text-yellow-400">
                  SERVICE {service.number}
                </span>

                <span className="text-2xl text-gray-600 transition group-hover:text-yellow-400">
                  ↗
                </span>
              </div>

              <h2 className="mt-8 text-3xl font-bold tracking-tight">
                {service.title}
              </h2>

              <p className="mt-5 min-h-[150px] leading-7 text-gray-400">
                {service.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-400 transition group-hover:border-yellow-500/20 group-hover:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </section>

        {/* Built Proof */}
        <section className="mt-24 rounded-[40px] border border-white/10 bg-white/[0.03] p-8 md:p-12">

          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-yellow-400">
              Built By Aether
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Real products.
              <br />
              <span className="text-yellow-400">
                Real capabilities.
              </span>
            </h2>

            <p className="mt-6 leading-7 text-gray-400">
              Explore products and digital experiences created using modern
              web technologies, AI, analytics, automation, and product-focused
              design.
            </p>
          </div>

          {/* Product Grid */}
          <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">

         {/* StreamFlix */}
<div className="overflow-hidden rounded-[28px] border border-white/10 bg-black/30">

  <div className="relative">
    <img
      src="/streamflix.png"
      alt="StreamFlix AI"
      className="h-72 w-full object-cover transition duration-700 hover:scale-105"
    />

    <div className="absolute left-4 top-4 rounded-full border border-yellow-500/30 bg-black/70 px-4 py-2 text-xs font-semibold text-yellow-400 backdrop-blur-md">
      AI-Powered Digital Product
    </div>

    <div className="absolute right-4 top-4 rounded-full border border-green-500/30 bg-green-500/15 px-3 py-1.5 text-xs font-semibold text-green-400 backdrop-blur-md">
      ● Live
    </div>
  </div>

  <div className="p-7">

    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
      AI-Powered Digital Product
    </p>

    <h3 className="mt-3 text-3xl font-bold">
      StreamFlix AI
    </h3>

    <p className="mt-4 leading-7 text-gray-400">
      An AI-powered entertainment platform combining intelligent movie
      discovery, generative AI, real-time movie data, and a premium
      responsive experience.
    </p>

    {/* Built With */}
    <div className="mt-6 flex flex-wrap gap-2">
      {[
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Gemini AI",
        "TMDB API",
        "Vercel",
      ].map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-400 transition hover:border-yellow-500/30 hover:text-yellow-400"
        >
          {tag}
        </span>
      ))}
    </div>

    <Link
      href="https://streamflix-ai.vercel.app"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-7 inline-flex items-center rounded-full bg-yellow-500 px-6 py-3 font-semibold text-black transition hover:scale-105 hover:bg-yellow-400"
    >
      View Live Product ↗
    </Link>

  </div>
</div>

            {/* AURACARE */}
<div className="overflow-hidden rounded-[28px] border border-white/10 bg-black/30">

  <div className="relative">
    <img
      src="/auracare.png"
      alt="AURACARE AI Healthcare Platform"
      className="h-72 w-full object-cover transition duration-700 hover:scale-105"
    />

    <div className="absolute left-4 top-4 rounded-full border border-yellow-500/30 bg-black/70 px-4 py-2 text-xs font-semibold text-yellow-400 backdrop-blur-md">
      AI-Powered Healthcare Platform
    </div>

    <div className="absolute right-4 top-4 rounded-full border border-green-500/30 bg-green-500/15 px-3 py-1.5 text-xs font-semibold text-green-400 backdrop-blur-md">
      ● Completed
    </div>
  </div>

  <div className="p-7">

    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
      AI-Powered Healthcare Platform
    </p>

    <h3 className="mt-3 text-3xl font-bold">
      AURACARE
    </h3>

    <p className="mt-4 leading-7 text-gray-400">
      A modern AI-powered healthcare platform designed around patient
      consultations, appointment assistance, healthcare guidance, and
      digital patient experiences.
    </p>

    {/* Built With */}
    <div className="mt-6 flex flex-wrap gap-2">
      {[
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "AI",
        "Healthcare UX",
        "GitHub",
      ].map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-400 transition hover:border-yellow-500/30 hover:text-yellow-400"
        >
          {tag}
        </span>
      ))}
    </div>

    <Link
      href="https://github.com/egaost00-lgtm/auracare"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-7 inline-flex items-center rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-yellow-500/50 hover:text-yellow-400"
    >
      Explore Project ↗
    </Link>

  </div>
</div>

            {/* Network Security Assessment */}
            <div className="flex h-full flex-col overflow-hidden rounded-[28px] border border-yellow-500/30 bg-black/30 transition-all duration-500 hover:-translate-y-2 hover:border-yellow-500/60">

              <div className="relative h-56 shrink-0 overflow-hidden">

                <img
                  src="/network-security.png"
                  alt="Cybersecurity & Network Security Assessment"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />

                <div className="absolute left-3 top-3 rounded-full border border-yellow-500/30 bg-black/75 px-3 py-1.5 text-[10px] font-semibold text-yellow-400 backdrop-blur-md">
                  CYBERSECURITY
                </div>

                <div className="absolute right-3 top-3 rounded-full border border-green-500/30 bg-green-500/15 px-3 py-1.5 text-[10px] font-semibold text-green-400 backdrop-blur-md">
                  ● COMPLETED
                </div>

              </div>

              <div className="flex flex-1 flex-col p-6">

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400">
                  Cybersecurity & Network Security
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  Network Security Assessment
                </h3>

                <p className="mt-4 text-sm leading-6 text-gray-400">
                  An authorized network security assessment performed in a
                  controlled lab environment to identify exposed services,
                  analyze network traffic, document findings, and provide
                  practical remediation recommendations.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {["Kali Linux", "Nmap", "Wireshark"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-6">
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center rounded-full bg-yellow-500 px-5 py-2.5 text-sm font-semibold text-black transition hover:scale-105 hover:bg-yellow-400"
                  >
                    View Case Study ↗
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="mt-24 rounded-[40px] border border-yellow-500/20 bg-yellow-500/[0.05] p-10 text-center md:p-16">

          <p className="text-sm uppercase tracking-[0.35em] text-yellow-400">
            Have An Idea?
          </p>

          <h2 className="mt-5 text-4xl font-black md:text-6xl">
            Let's build what's next.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Tell us what you're trying to build, and we'll turn the idea into
            a modern digital product.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-yellow-400"
          >
            Start Your Project
          </Link>

        </section>

      </div>
    </main>
  );
}