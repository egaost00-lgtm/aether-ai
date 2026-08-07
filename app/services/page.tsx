import Navbar from "@/components/layout/Navbar";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <div className="mx-auto max-w-7xl px-6 py-32">

        <Link
          href="/"
          className="text-yellow-400 transition hover:text-yellow-300"
        >
          ← Back to Home
        </Link>

        <h1 className="mt-6 text-6xl font-black">
          Our Services
        </h1>

        <p className="mt-6 max-w-3xl text-xl leading-8 text-gray-400">
          We build premium websites, AI applications,
          SaaS products, dashboards and automation systems
          for startups and businesses.
        </p>

        {/* Service Card */}

        <section className="mt-24 grid items-center gap-16 rounded-[40px] border border-white/10 bg-white/[0.03] p-12 lg:grid-cols-2">

          {/* Left */}

          <div>

            <p className="uppercase tracking-[0.3em] text-yellow-400">
              Service 01
            </p>

            <h2 className="mt-4 text-5xl font-bold">
              Premium Website Development
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-400">
              We design and develop high-performance business websites,
              startup landing pages, SaaS platforms and corporate
              websites that are fast, responsive and built to convert
              visitors into customers.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <span className="rounded-full bg-white/10 px-5 py-2">
                Next.js
              </span>

              <span className="rounded-full bg-white/10 px-5 py-2">
                React
              </span>

              <span className="rounded-full bg-white/10 px-5 py-2">
                Tailwind CSS
              </span>

              <span className="rounded-full bg-white/10 px-5 py-2">
                TypeScript
              </span>

            </div>

            <div className="mt-10">

              <Link
                href="/contact"
                className="inline-block rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:scale-105"
              >
                Start Your Project
              </Link>

            </div>

          </div>

          {/* Right */}

          <div className="space-y-8">

            <img
              src="/streamflix.png"
              alt="StreamFlix AI"
              className="w-full rounded-3xl border border-white/10 shadow-2xl transition duration-500 hover:scale-105"
            />

            <img
              src="/homeopathy.png"
              alt="Healthcare Website"
              className="w-full rounded-3xl border border-white/10 shadow-2xl transition duration-500 hover:scale-105"
            />

            <p className="text-center text-gray-400">
              Real client projects built using Next.js, React, AI,
              Tailwind CSS and modern UI/UX principles.
            </p>

          </div>

        </section>

      </div>
    </main>
  );
}