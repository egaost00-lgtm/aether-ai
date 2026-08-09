import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

export default function StreamFlixCaseStudy() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden pt-36 pb-20">
        <div className="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-yellow-400/10 blur-[150px]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <Link
            href="/portfolio"
            className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-gray-300 transition hover:border-yellow-400/40 hover:text-yellow-400"
          >
            ← Back to Portfolio
          </Link>

          <div className="mt-12 max-w-5xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-yellow-400">
              AI Product • Web Application
            </p>

            <h1 className="mt-5 text-5xl font-black tracking-tight sm:text-7xl lg:text-8xl">
              StreamFlix
              <span className="text-yellow-400"> AI</span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-gray-400 sm:text-xl">
              A modern AI-powered streaming experience designed around
              intelligent movie discovery, AI generation, real-time movie
              data, and a premium entertainment interface.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://streamflix-ai.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-yellow-400 px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-yellow-300"
              >
                View Live Demo ↗
              </a>

              <a
                href="https://github.com/egaost00-lgtm/streamflix-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 px-8 py-4 font-semibold transition hover:border-yellow-400/50 hover:text-yellow-400"
              >
                View GitHub ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-[36px] border border-white/10 bg-white/5">
          <img
            src="/streamflix.png"
            alt="StreamFlix AI interface"
            className="h-auto w-full object-cover"
          />
        </div>
      </section>

      {/* PROJECT OVERVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid gap-16 lg:grid-cols-[1fr_0.7fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
              01 — Overview
            </p>

            <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
              Reimagining movie discovery with AI.
            </h2>

            <p className="mt-7 text-lg leading-8 text-gray-400">
              StreamFlix AI was created as a demonstration of how modern
              web technologies and generative AI can come together to create
              an engaging entertainment product.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-400">
              The platform combines movie discovery, dynamic categories,
              real-time movie information, AI-powered generation, and a
              responsive interface into one cohesive experience.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
              Project Details
            </p>

            <div className="mt-7 space-y-6">
              <div>
                <p className="text-sm text-gray-500">Category</p>
                <p className="mt-1 font-semibold">
                  AI Product / Web Application
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Focus</p>
                <p className="mt-1 font-semibold">
                  AI + Entertainment
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Development</p>
                <p className="mt-1 font-semibold">
                  Full-Stack Web Development
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Status</p>
                <p className="mt-1 font-semibold text-yellow-400">
                  Live Demo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGE */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
            02 — The Challenge
          </p>

          <div className="mt-6 max-w-4xl">
            <h2 className="text-4xl font-bold sm:text-5xl">
              How can entertainment discovery feel more intelligent?
            </h2>

            <p className="mt-7 text-lg leading-8 text-gray-400">
              Traditional streaming interfaces can make discovering
              something new feel repetitive. We wanted to explore a more
              interactive experience where users could discover content
              while also experimenting with AI-generated movie concepts.
            </p>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
          03 — Our Solution
        </p>

        <h2 className="mt-5 max-w-4xl text-4xl font-bold sm:text-5xl">
          A streaming experience built around discovery.
        </h2>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "AI Movie Generation",
              text: "Users can generate fictional movie concepts using generative AI.",
            },
            {
              title: "Dynamic Discovery",
              text: "Movie categories and content are presented through a modern discovery interface.",
            },
            {
              title: "Real-Time Data",
              text: "Movie information is connected to external movie data through API integration.",
            },
            {
              title: "Responsive Design",
              text: "The interface is designed to work across desktop, tablet, and mobile experiences.",
            },
            {
              title: "Modern UX",
              text: "Animations, visual hierarchy, cards, and interactions create an immersive experience.",
            },
            {
              title: "Scalable Architecture",
              text: "The application is structured using modern full-stack web development practices.",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-yellow-400/30 hover:bg-white/[0.05]"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400 text-black">
                ✦
              </div>

              <h3 className="text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
            04 — Technology
          </p>

          <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
            Built with modern technologies.
          </h2>

          <div className="mt-12 flex flex-wrap gap-3">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Gemini AI",
              "TMDB API",
              "Framer Motion",
              "Vercel",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* DEVELOPMENT */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
          05 — Development
        </p>

        <h2 className="mt-5 max-w-4xl text-4xl font-bold sm:text-5xl">
          From concept to a working product.
        </h2>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["01", "Concept", "Defined the product direction and user experience."],
            ["02", "Design", "Created the visual system and responsive interface."],
            ["03", "Development", "Implemented the application, APIs, AI and interactions."],
            ["04", "Deployment", "Optimized and deployed the product for public access."],
          ].map(([number, title, text]) => (
            <div
              key={number}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-7"
            >
              <span className="text-sm font-bold text-yellow-400">
                {number}
              </span>

              <h3 className="mt-5 text-2xl font-semibold">
                {title}
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 px-6 py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
            Explore the product
          </p>

          <h2 className="mt-5 text-4xl font-black sm:text-6xl">
            Experience StreamFlix
            <span className="text-yellow-400"> AI.</span>
          </h2>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://streamflix-ai.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-yellow-400 px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-yellow-300"
            >
              Launch Live Demo ↗
            </a>

            <a
              href="https://github.com/egaost00-lgtm/streamflix-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 px-8 py-4 font-semibold transition hover:border-yellow-400/50 hover:text-yellow-400"
            >
              Explore GitHub ↗
            </a>
          </div>

          <div className="mt-14">
            <Link
              href="/portfolio"
              className="text-sm text-gray-500 transition hover:text-yellow-400"
            >
              ← Back to AitherAI Portfolio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}