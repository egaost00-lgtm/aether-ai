import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-20 text-center">
          <p className="mb-3 uppercase tracking-[0.3em] text-yellow-400">
            Portfolio
          </p>

          <h2 className="text-5xl font-bold text-white">
            Selected Work
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            A collection of premium digital products we've designed
            and developed.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {/* StreamFlix AI */}
          <div className="group overflow-hidden rounded-3xl border ...">
            <div className="relative h-72 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="absolute right-4 top-4 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white shadow-lg">
  ● Live
</div>
              <Image
                src="/streamflix.png"
                alt="StreamFlix AI"
                fill
                className="object-contain bg-[#0B0B0B] p-2 transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-8">
              <h3 className="text-3xl font-bold text-white">
                StreamFlix AI
              </h3>

              <p className="mt-4 text-gray-400">
                AI-powered streaming platform built with Next.js,
                Tailwind CSS and a premium modern UI.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
  <span className="rounded-full bg-yellow-500/10 px-3 py-1 text-xs text-yellow-400">Next.js</span>
  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white">Tailwind</span>
  <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-400">AI</span>
</div>

              <div className="mt-8 flex gap-4">
                <Link
                  href="https://streamflix-ai.vercel.app"
                  target="_blank"
                  className="rounded-full bg-yellow-500 px-6 py-3 font-semibold text-black transition hover:scale-105"
                >
                  Live Demo
                </Link>

                <Link
                  href="https://github.com/egaost00-lgtm/streamflix-ai"
                  target="_blank"
                  className="rounded-full border border-white/20 px-6 py-3 text-white transition hover:border-yellow-500"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>

          {/* Healthcare */}
          <div className="group overflow-hidden rounded-3xl border ...">
            <div className="relative h-72 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="absolute right-4 top-4 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white shadow-lg">
  ● Live
</div>
              <Image
                src="/homeopathy.png"
                alt="Healthcare Website"
                fill
                className="object-contain bg-[#0B0B0B] p-2 transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-8">
              <h3 className="text-3xl font-bold text-white">
                Healthcare Website
              </h3>

              <p className="mt-4 text-gray-400">
                Premium responsive healthcare website featuring modern
                UI, appointment booking, and optimized performance.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
  <span className="rounded-full bg-yellow-500/10 px-3 py-1 text-xs text-yellow-400">
    Next.js
  </span>

  <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-400">
    Responsive
  </span>

  <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-400">
    SEO
  </span>
</div>

              <div className="mt-8 flex gap-4">
                <Link
                  href="https://neetikahomeopathy-kanpur.netlify.app"
                  target="_blank"
                  className="rounded-full bg-yellow-500 px-6 py-3 font-semibold text-black transition hover:scale-105"
                >
                  Live Demo
                </Link>
              </div>
            </div>
          </div>

          {/* AI Marketing Studio */}
          <div className="group overflow-hidden rounded-3xl border ...">
            <div className="relative h-72 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="absolute right-4 top-4 rounded-full bg-yellow-500 px-3 py-1 text-xs font-semibold text-black shadow-lg">
  In Development
</div>
              <Image
                src="/marketing.jpg"
                alt="AI Marketing Studio"
                fill
                className="object-contain bg-[#0B0B0B] p-2 transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-8">
              <h3 className="text-3xl font-bold text-white">
                AI Marketing Studio
              </h3>

              <p className="mt-4 text-gray-400">
                AI-powered marketing platform for generating product ads,
                social campaigns, commercial videos, and premium brand
                assets with advanced analytics.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
  <span className="rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-400">
    AI
  </span>

  <span className="rounded-full bg-yellow-500/10 px-3 py-1 text-xs text-yellow-400">
    SaaS
  </span>

  <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-400">
    Analytics
  </span>
</div>

              <div className="mt-8 flex gap-4">
                <Link
                  href="#"
                  className="rounded-full bg-yellow-500 px-6 py-3 font-semibold text-black transition hover:scale-105"
                >
                  Coming Soon
                </Link>

                <Link
                  href="https://github.com/egaost00-lgtm/aether-ai-solutions"
                  target="_blank"
                  className="rounded-full border border-white/20 px-6 py-3 text-white transition hover:border-yellow-500"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}