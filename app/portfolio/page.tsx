import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
  <Navbar />
      <div className="mx-auto max-w-7xl px-6 py-24">

        {/* Header */}
        <div className="mb-16">
          <Link
            href="/"
            className="text-yellow-400 hover:text-yellow-300"
          >
            ← Back to Home
          </Link>

          <h1 className="mt-6 text-6xl font-black tracking-tight">
            Our Portfolio
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-8 text-gray-400">
            Discover our collection of premium websites, AI solutions,
            dashboards, SaaS platforms, and digital products built for
            startups and businesses.
          </p>
        </div>
{/* StreamFlix AI Project */}

<section className="mt-24 overflow-hidden rounded-[40px] border border-white/10 bg-white/5">

  <img
    src="/streamflix.png"
    alt="StreamFlix AI"
    className="h-[450px] w-full object-cover"
  />

  <div className="p-10">

    <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">
      AI Streaming Platform
    </p>

    <h2 className="mt-4 text-5xl font-bold">
      StreamFlix AI
    </h2>
<div className="mt-6 space-y-6">

  <div>
    <h3 className="text-xl font-semibold text-yellow-400">
      Overview
    </h3>

    <p className="mt-3 text-gray-400 leading-8">
      StreamFlix AI is a modern AI-powered streaming platform inspired by
      Netflix. It demonstrates premium UI design, responsive layouts,
      smooth animations, and modern web technologies.
    </p>
  </div>

  <div>
    <h3 className="text-xl font-semibold text-yellow-400">
      Key Features
    </h3>

    <ul className="mt-3 space-y-2 text-gray-300">
      <li>✔ Netflix-inspired premium interface</li>
      <li>✔ Responsive on desktop, tablet & mobile</li>
      <li>✔ AI-powered movie generation</li>
      <li>✔ Fast and optimized performance</li>
    </ul>
  </div>

</div>

    <div className="mt-10 flex flex-wrap gap-4">

      <span className="rounded-full bg-white/10 px-5 py-2">
        Next.js
      </span>

      <span className="rounded-full bg-white/10 px-5 py-2">
        Tailwind CSS
      </span>

      <span className="rounded-full bg-white/10 px-5 py-2">
        Framer Motion
      </span>

      <span className="rounded-full bg-white/10 px-5 py-2">
        AI
      </span>

    </div>

    <div className="mt-10 flex gap-5">

      <a
        href="https://streamflix-ai.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black"
      >
        Live Demo
      </a>

      <a
        href="https://github.com/egaost00-lgtm/streamflix-ai"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-white/20 px-8 py-4"
      >
        GitHub
      </a>

    </div>

  </div>

</section>
      </div>
    </main>
  );
}