import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden pt-36 pb-24">
        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-yellow-400/10 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <Link
            href="/"
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-gray-300 transition hover:border-yellow-400/40 hover:text-yellow-400"
          >
            ← Back to Home
          </Link>

          <div className="mt-10 max-w-5xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-yellow-400">
              Aether AI Solutions • Selected Work
            </p>

            <h1 className="mt-6 text-5xl font-black tracking-tight sm:text-6xl lg:text-8xl">
              We build
              <span className="block text-yellow-400">
                intelligent products.
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400 sm:text-xl">
              Explore AI-powered applications, modern web experiences,
              healthcare platforms, automation systems, and digital products
              designed and developed by Aether AI Solutions.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#featured-work"
                className="rounded-full bg-yellow-400 px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-yellow-300"
              >
                Explore Our Work ↓
              </a>

              <Link
                href="/contact"
                className="rounded-full border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white transition hover:border-yellow-400/50 hover:bg-white/10"
              >
                Start a Project
              </Link>
            </div>
          </div>

          {/* Capability pills */}
          <div className="mt-16 flex flex-wrap gap-3">
            {[
              "AI Products",
              "AI Healthcare",
              "Web Applications",
              "SaaS Platforms",
              "Analytics",
              "Automation",
              "Digital Experiences",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm text-gray-400"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section
        id="featured-work"
        className="mx-auto max-w-7xl px-6 pb-32"
      >
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
              Featured Work
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Built to demonstrate what’s possible.
            </h2>
          </div>

          <p className="max-w-md text-gray-500">
            A growing collection of real products and digital experiences
            developed with modern technologies and AI.
          </p>
        </div>

        {/* STREAMFLIX AI */}
        <article className="group overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.035] transition duration-500 hover:border-yellow-400/30">
          {/* Project image */}
          <div className="relative overflow-hidden">
            <img
              src="/streamflix.png"
              alt="StreamFlix AI project"
              className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-[1.03] sm:h-[480px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />

            <div className="absolute left-6 top-6">
              <span className="rounded-full border border-yellow-400/30 bg-black/60 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-yellow-400 backdrop-blur-md">
                Featured Project
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-7 sm:p-10 lg:p-14">
            <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
                  AI Product • Web Application
                </p>

                <h3 className="mt-4 text-4xl font-black sm:text-6xl">
                  StreamFlix AI
                </h3>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
                  A modern AI-powered streaming platform inspired by the
                  experience of leading entertainment platforms. StreamFlix
                  AI combines intelligent movie discovery, AI generation,
                  responsive design, and real-time movie data into one
                  immersive digital experience.
                </p>

                {/* Features */}
                <div className="mt-10">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-300">
                    What we built
                  </h4>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {[
                      "AI-powered movie generation",
                      "Modern streaming interface",
                      "TMDB movie data integration",
                      "Responsive experience",
                      "Dynamic movie categories",
                      "Interactive user experience",
                    ].map((feature) => (
                      <div
                        key={feature}
                        className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-gray-300"
                      >
                        <span className="mr-2 text-yellow-400">✦</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project info */}
              <div className="lg:border-l lg:border-white/10 lg:pl-10">
                <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
                  Technology
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "Next.js",
                    "React",
                    "Tailwind CSS",
                    "Gemini AI",
                    "TMDB API",
                    "Framer Motion",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-10 border-t border-white/10 pt-8">
                  <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
                    Project Type
                  </p>

                  <p className="mt-3 text-lg font-semibold">
                    AI Streaming Platform
                  </p>
                </div>

                <div className="mt-8 flex flex-col gap-3">
                  <Link
                    href="/portfolio/streamflix-ai"
                    className="rounded-full border border-yellow-400/40 bg-yellow-400/10 px-6 py-4 text-center font-semibold text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
                  >
                    View Case Study →
                  </Link>

                  <a
                    href="https://streamflix-ai.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-yellow-400 px-6 py-4 text-center font-semibold text-black transition hover:bg-yellow-300"
                  >
                    View Live Demo ↗
                  </a>

                  <a
                    href="https://github.com/egaost00-lgtm/streamflix-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/15 px-6 py-4 text-center font-semibold transition hover:border-yellow-400/50 hover:text-yellow-400"
                  >
                    View GitHub ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
        {/* BHARATPLAY */}
<article className="group mt-12 overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.035] transition duration-500 hover:border-yellow-400/30">
  {/* Project image */}
  <div className="relative overflow-hidden">
    <img
      src="/bharatplay.png"
      alt="BharatPlay AI-powered entertainment platform"
      className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-[1.03] sm:h-[480px]"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />

    <div className="absolute left-6 top-6">
      <span className="rounded-full border border-green-400/30 bg-black/60 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-green-400 backdrop-blur-md">
        Live • AWS
      </span>
    </div>
  </div>

  {/* Content */}
  <div className="p-7 sm:p-10 lg:p-14">
    <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
          AI Product • Entertainment Platform
        </p>

        <h3 className="mt-4 text-4xl font-black sm:text-6xl">
          BharatPlay
        </h3>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
          A modern AI-powered entertainment platform designed to deliver
          an immersive digital viewing experience with intelligent content,
          interactive features, responsive design, and production deployment
          on AWS.
        </p>

        {/* Features */}
        <div className="mt-10">
          <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-300">
            What we built
          </h4>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "AI-powered entertainment experience",
              "Modern streaming interface",
              "Interactive video experience",
              "Comment & engagement system",
              "Responsive web application",
              "AWS production deployment",
            ].map((feature) => (
              <div
                key={feature}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-gray-300"
              >
                <span className="mr-2 text-yellow-400">✦</span>
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project info */}
      <div className="lg:border-l lg:border-white/10 lg:pl-10">
        <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
          Technology
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {[
            "Next.js",
            "React",
            "Tailwind CSS",
            "Supabase",
            "AI",
            "AWS Amplify",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-10 border-t border-white/10 pt-8">
          <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
            Project Type
          </p>

          <p className="mt-3 text-lg font-semibold">
            AI-Powered Entertainment Platform
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3">
          <Link
            href="/portfolio/bharatplay"
            className="rounded-full border border-yellow-400/40 bg-yellow-400/10 px-6 py-4 text-center font-semibold text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
          >
            View Case Study →
          </Link>

          <a
            href="https://bharatplay-liart.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-yellow-400 px-6 py-4 text-center font-semibold text-black transition hover:bg-yellow-300"
          >
            View Live Demo ↗
          </a>

          <a
            href="https://github.com/egaost00-lgtm/bharatplay"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/15 px-6 py-4 text-center font-semibold transition hover:border-yellow-400/50 hover:text-yellow-400"
          >
            View GitHub ↗
          </a>
        </div>
      </div>
    </div>
  </div>
</article>

        {/* AURACARE */}
        <article className="group mt-12 overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.035] transition duration-500 hover:border-yellow-400/30">
          {/* Project image */}
          <div className="relative overflow-hidden">
            <img
              src="/auracare.png"
              alt="AURACARE AI-powered healthcare platform"
              className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-[1.03] sm:h-[480px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />

            <div className="absolute left-6 top-6">
              <span className="rounded-full border border-yellow-400/30 bg-black/60 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-yellow-400 backdrop-blur-md">
                Healthcare AI
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-7 sm:p-10 lg:p-14">
            <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
                  AI Product • Healthcare Platform
                </p>

                <h3 className="mt-4 text-4xl font-black sm:text-6xl">
                  AURACARE
                </h3>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
                  A modern AI-powered healthcare platform designed around
                  patient-first digital experiences. AURACARE brings
                  consultation assistance, appointment workflows, healthcare
                  information, and responsive digital design together in one
                  streamlined platform.
                </p>

                {/* Features */}
                <div className="mt-10">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-300">
                    What we built
                  </h4>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {[
                      "AI-powered healthcare experience",
                      "Patient-first interface",
                      "Consultation request workflow",
                      "Appointment assistance",
                      "Responsive healthcare platform",
                      "Modern healthcare UI/UX",
                    ].map((feature) => (
                      <div
                        key={feature}
                        className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-gray-300"
                      >
                        <span className="mr-2 text-yellow-400">✦</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project info */}
              <div className="lg:border-l lg:border-white/10 lg:pl-10">
                <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
                  Technology
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "Next.js",
                    "React",
                    "Tailwind CSS",
                    "AI",
                    "Responsive UI",
                    "Modern UX",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-10 border-t border-white/10 pt-8">
                  <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
                    Project Type
                  </p>

                  <p className="mt-3 text-lg font-semibold">
                    AI-Powered Healthcare Platform
                  </p>
                </div>

                <div className="mt-8 flex flex-col gap-3">
                  <Link
                    href="/portfolio/auracare"
                    className="rounded-full border border-yellow-400/40 bg-yellow-400/10 px-6 py-4 text-center font-semibold text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
                  >
                    View Case Study →
                  </Link>

                  <div className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-6 py-4 text-center font-semibold text-yellow-400">
                    Working on it 🚧
                  </div>

                  <a
                    href="https://github.com/egaost00-lgtm/auracare"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/15 px-6 py-4 text-center font-semibold transition hover:border-yellow-400/50 hover:text-yellow-400"
                  >
                    View GitHub ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
              {/* NETWORK SECURITY ASSESSMENT */}
        <article className="group mt-12 overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.035] transition duration-500 hover:border-yellow-400/30">
          {/* Project header */}
          <div className="relative overflow-hidden">
            <div className="flex h-[320px] w-full items-center justify-center bg-gradient-to-br from-[#111111] via-[#090909] to-yellow-400/10 sm:h-[480px]">
              <div className="text-center">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl border border-yellow-400/30 bg-yellow-400/10 text-5xl">
                  🛡️
                </div>

                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
                  Network Security
                </p>

                <h3 className="mt-3 text-3xl font-black text-white sm:text-5xl">
                  Security Assessment
                </h3>
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />

            <div className="absolute left-6 top-6">
              <span className="rounded-full border border-yellow-400/30 bg-black/60 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-yellow-400 backdrop-blur-md">
                Cybersecurity
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-7 sm:p-10 lg:p-14">
            <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
                  Cybersecurity • Network Assessment
                </p>

                <h3 className="mt-4 text-4xl font-black sm:text-6xl">
                  Network Security Assessment
                </h3>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
                  An authorized network security assessment conducted in a
                  controlled lab environment to identify exposed services,
                  analyze network traffic, document security findings, and
                  provide practical remediation recommendations.
                </p>

                {/* Features */}
                <div className="mt-10">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-300">
                    What we performed
                  </h4>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {[
                      "Network reconnaissance",
                      "Port & service enumeration",
                      "UDP service discovery",
                      "Listening-service analysis",
                      "Wireshark traffic analysis",
                      "Security findings & recommendations",
                    ].map((feature) => (
                      <div
                        key={feature}
                        className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-gray-300"
                      >
                        <span className="mr-2 text-yellow-400">✦</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project info */}
              <div className="lg:border-l lg:border-white/10 lg:pl-10">
                <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
                  Technology
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "Kali Linux",
                    "Nmap",
                    "Wireshark",
                    "Linux",
                    "TCP/IP",
                    "Network Security",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-10 border-t border-white/10 pt-8">
                  <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
                    Project Type
                  </p>

                  <p className="mt-3 text-lg font-semibold">
                    Network Security Assessment
                  </p>
                </div>
                <div className="mt-8 flex flex-col gap-3">
  <Link
    href="/portfolio/network-security-assessment"
    className="rounded-full border border-yellow-400/40 bg-yellow-400/10 px-6 py-4 text-center font-semibold text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
  >
    View Case Study →
  </Link>

  <a
    href="https://github.com/egaost00-lgtm/network-security-assessment"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full border border-white/15 px-6 py-4 text-center font-semibold transition hover:border-yellow-400/50 hover:text-yellow-400"
  >
    View GitHub ↗
  </a>

  <div className="rounded-full border border-white/15 px-6 py-4 text-center font-semibold text-gray-400">
    Authorized Lab Assessment
  </div>
</div>
              </div>
            </div>
          </div>
        </article>

      {/* CTA */}
      <section className="border-t border-white/10 px-6 py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
            Have an idea?
          </p>

          <h2 className="mt-5 text-4xl font-black sm:text-6xl">
            Let’s build something
            <span className="text-yellow-400"> intelligent.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            From AI applications to modern digital products, Aether AI
            Solutions helps turn ambitious ideas into real experiences.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-full bg-yellow-400 px-9 py-4 font-semibold text-black transition hover:scale-105 hover:bg-yellow-300"
          >
            Start a Project →
          </Link>
        </div>
      </section>
    </main>
  );
}