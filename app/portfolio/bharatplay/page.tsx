import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

export default function BharatPlayCaseStudy() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden pt-36 pb-24">
        <div className="pointer-events-none absolute left-1/2 top-10 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-yellow-400/10 blur-[160px]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <Link
            href="/portfolio"
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-gray-300 transition hover:border-yellow-400/40 hover:text-yellow-400"
          >
            ← Back to Portfolio
          </Link>

          <div className="mt-12 max-w-5xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-yellow-400">
                AI Product
              </span>

              <span className="rounded-full border border-green-400/30 bg-green-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-green-400">
                Live • AWS
              </span>
            </div>

            <h1 className="mt-7 text-5xl font-black tracking-tight sm:text-7xl lg:text-8xl">
              BharatPlay
              <span className="block text-yellow-400">
                Entertainment, reimagined.
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400 sm:text-xl">
              A modern AI-powered entertainment platform built to deliver an
              immersive digital experience through intelligent content,
              interactive features, responsive design, and production-ready
              cloud deployment.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://main.d38trio0q0je1z.amplifyapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-yellow-400 px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-yellow-300"
              >
                View Live Demo ↗
              </a>

              <a
                href="https://github.com/egaost00-lgtm/bharatplay"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 bg-white/5 px-8 py-4 font-semibold transition hover:border-yellow-400/50 hover:text-yellow-400"
              >
                View GitHub ↗
              </a>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="mt-16 overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03]">
            <img
              src="/bharatplay.png"
              alt="BharatPlay platform"
              className="h-[320px] w-full object-cover sm:h-[520px]"
            />
          </div>
        </div>
      </section>

      {/* PROJECT OVERVIEW */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-[32px] border border-white/10 bg-white/[0.035] p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
              Project Overview
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Building a modern entertainment experience
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              BharatPlay was developed as a modern entertainment platform
              focused on combining an engaging user interface with intelligent
              digital experiences. The platform was engineered as a complete
              web application and deployed to AWS for production use.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-400">
              The project demonstrates Aether AI Solutions&apos; ability to
              design, develop, integrate, and deploy complete AI-enabled
              digital products rather than only building isolated prototypes.
            </p>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/[0.035] p-8 sm:p-10">
            <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
              Project Details
            </p>

            <div className="mt-7 space-y-6">
              <div>
                <p className="text-sm text-gray-500">Category</p>
                <p className="mt-1 font-semibold">
                  AI Entertainment Platform
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Status</p>
                <p className="mt-1 font-semibold text-green-400">
                  Live & Deployed
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Deployment</p>
                <p className="mt-1 font-semibold">AWS Amplify</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Development</p>
                <p className="mt-1 font-semibold">Aether AI Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGE / SOLUTION */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-24 lg:grid-cols-2">
          <div className="rounded-[32px] border border-white/10 bg-[#080808] p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
              The Challenge
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Creating more than a basic streaming interface
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              The goal was to create an entertainment product that feels like
              a real digital platform rather than a simple collection of
              screens. The experience needed modern UI, interactive
              functionality, intelligent capabilities, and a reliable
              production deployment.
            </p>
          </div>

          <div className="rounded-[32px] border border-yellow-400/20 bg-yellow-400/[0.04] p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
              The Solution
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              A complete production-ready web platform
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              Aether AI Solutions designed and developed BharatPlay as a
              responsive web application with intelligent functionality,
              interactive experiences, modern product architecture, and AWS
              deployment infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
            What We Built
          </p>

          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            From interface to infrastructure.
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-400">
            BharatPlay combines product design, frontend engineering,
            intelligent functionality, and cloud deployment into one complete
            system.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "AI Experience",
              text: "Intelligent functionality designed to enhance the entertainment experience.",
            },
            {
              title: "Modern UI/UX",
              text: "A premium responsive interface designed for immersive digital interaction.",
            },
            {
              title: "Interactive Features",
              text: "User-focused interactions designed to make the platform engaging and dynamic.",
            },
            {
              title: "Responsive Design",
              text: "Optimized experience across desktop, tablet, and mobile screen sizes.",
            },
            {
              title: "Production Deployment",
              text: "Application deployed through AWS Amplify with automated build and deployment.",
            },
            {
              title: "GitHub Integration",
              text: "Source-controlled development workflow connected directly to the deployment pipeline.",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="rounded-[28px] border border-white/10 bg-white/[0.035] p-7 transition hover:-translate-y-1 hover:border-yellow-400/30"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-400">
                ✦
              </div>

              <h3 className="mt-6 text-xl font-bold">{feature.title}</h3>

              <p className="mt-3 leading-7 text-gray-400">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
            Technology Stack
          </p>

          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            Built with modern technology.
          </h2>

          <div className="mt-10 flex flex-wrap gap-3">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "AI",
              "Supabase",
              "AWS Amplify",
              "GitHub",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* AWS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-[36px] border border-yellow-400/20 bg-gradient-to-br from-yellow-400/[0.08] to-transparent p-8 sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
            Cloud Deployment
          </p>

          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            Deployed for production on AWS.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            BharatPlay is connected to its GitHub repository and deployed
            through AWS Amplify. This provides an automated deployment
            workflow where updates to the production branch can be built and
            deployed through the connected cloud pipeline.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              "GitHub Repository",
              "Automated Build",
              "AWS Production Hosting",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-black/20 px-5 py-5 text-center font-semibold"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 px-6 py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
            BharatPlay
          </p>

          <h2 className="mt-5 text-4xl font-black sm:text-6xl">
            Experience the
            <span className="text-yellow-400"> live platform.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Explore the live BharatPlay experience or inspect the source code
            behind the project.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://main.d38trio0q0je1z.amplifyapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-yellow-400 px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-yellow-300"
            >
              Visit BharatPlay ↗
            </a>

            <a
              href="https://github.com/egaost00-lgtm/bharatplay"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 bg-white/5 px-8 py-4 font-semibold transition hover:border-yellow-400/50 hover:text-yellow-400"
            >
              GitHub Repository ↗
            </a>
          </div>

          <Link
            href="/portfolio"
            className="mt-8 inline-block text-sm text-gray-500 transition hover:text-yellow-400"
          >
            ← Back to all projects
          </Link>
        </div>
      </section>
    </main>
  );
}