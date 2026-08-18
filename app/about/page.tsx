import Navbar from "@/components/layout/Navbar";
import Link from "next/link";
import {
  ArrowUpRight,
  Zap,
  Brain,
  Palette,
  Rocket,
  Target,
  Eye,
  type LucideIcon,
} from "lucide-react";

const stats = [
  {
    value: "50+",
    label: "Projects Delivered",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
  },
  {
    value: "24/7",
    label: "Support Available",
  },
  {
    value: "AI",
    label: "Driven Solutions",
  },
];

const advantages: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Zap,
    title: "Fast Performance",
    description:
      "High-performance digital products engineered for speed, responsiveness, reliability, and strong technical foundations.",
  },
  {
    icon: Brain,
    title: "AI Powered",
    description:
      "We combine artificial intelligence, intelligent automation, and modern APIs to turn ordinary digital experiences into smarter systems.",
  },
  {
    icon: Palette,
    title: "Premium Design",
    description:
      "Modern, refined, and conversion-focused interfaces designed to make businesses look credible, memorable, and ready to compete.",
  },
  {
    icon: Rocket,
    title: "Built to Scale",
    description:
      "Scalable technology foundations designed to evolve from an initial idea into a growing digital product or business platform.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative px-6 pb-24 pt-32">
        {/* Background Glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-yellow-500/[0.06] blur-[160px]" />

        <div className="relative mx-auto max-w-7xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-yellow-400 transition hover:text-yellow-300"
          >
            ← Back to Home
          </Link>

          <div className="mt-12 max-w-5xl">
            <p className="mb-5 text-sm uppercase tracking-[0.35em] text-yellow-400">
              About Aether AI
            </p>

            <h1 className="text-5xl font-black tracking-tight sm:text-6xl lg:text-8xl">
              We build
              <br />
              <span className="text-yellow-400">
                AI-powered products
              </span>
              <br />
              that move businesses forward.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400 sm:text-xl">
              Aether AI Solutions combines artificial intelligence,
              premium product design, modern software engineering,
              automation, and analytics to help businesses turn ideas
              into powerful digital products.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-400"
              >
                Start Your Project
                <span>↗</span>
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-yellow-500/50 hover:text-yellow-400"
              >
                View Our Work
                <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="relative px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          {/* Text */}
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-yellow-400">
              Who We Are
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
              We build intelligent digital experiences for ambitious
              businesses.
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-400">
              Aether AI Solutions brings together AI, premium UI/UX
              design, automation, analytics, and modern software
              engineering to build digital products around real
              business needs.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              From AI-powered applications and SaaS platforms to
              high-performance websites and intelligent automation
              systems, we focus on building technology that looks
              exceptional, works reliably, and creates meaningful
              business value.
            </p>

            {/* Mini Stats */}
            <div className="mt-12 grid grid-cols-2 gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <h3 className="text-4xl font-black text-yellow-400 sm:text-5xl">
                    {stat.value}
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="absolute -inset-6 rounded-[50px] bg-yellow-500/[0.05] blur-3xl" />

            <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.035] p-4">
              <div className="overflow-hidden rounded-[30px] border border-white/10 bg-[#0B0B0B]">
                <img
                  src="/streamflix.png"
                  alt="Aether AI Solutions digital product"
                  className="h-auto w-full object-cover transition duration-700 hover:scale-[1.03]"
                />
              </div>

              <div className="p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-yellow-400">
                  Our Approach
                </p>

                <p className="mt-3 text-lg font-semibold text-white">
                  Design. Build. Automate. Scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-yellow-400">
              Our Direction
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Mission & Vision
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              We believe intelligent technology should make businesses
              faster, smarter, more efficient, and ready for what comes next.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {/* Mission */}
            <div className="group rounded-[32px] border border-white/10 bg-white/[0.035] p-10 transition-all duration-500 hover:-translate-y-2 hover:border-yellow-500/30 hover:bg-white/[0.055]">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10 text-yellow-400">
                <Target size={30} />
              </div>

              <p className="mt-8 text-sm uppercase tracking-[0.3em] text-yellow-400">
                Mission
              </p>

              <h3 className="mt-3 text-3xl font-bold">
                Turn ambitious ideas into products that matter.
              </h3>

              <p className="mt-6 text-lg leading-8 text-gray-400">
                Our mission is to combine design, engineering, AI,
                analytics, and automation to create digital products
                that solve real problems and deliver measurable value
                for businesses.
              </p>
            </div>

            {/* Vision */}
            <div className="group rounded-[32px] border border-white/10 bg-white/[0.035] p-10 transition-all duration-500 hover:-translate-y-2 hover:border-yellow-500/30 hover:bg-white/[0.055]">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10 text-yellow-400">
                <Eye size={30} />
              </div>

              <p className="mt-8 text-sm uppercase tracking-[0.3em] text-yellow-400">
                Vision
              </p>

              <h3 className="mt-3 text-3xl font-bold">
                Become the technology partner businesses trust to build
                what&apos;s next.
              </h3>

              <p className="mt-6 text-lg leading-8 text-gray-400">
                We aim to build a technology company where intelligent
                systems, exceptional product design, and scalable
                engineering come together to create the next generation
                of digital businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-yellow-400">
              Why Aether AI
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              More than just development.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              We bring strategy, design, engineering, AI, and
              automation together to build complete digital solutions.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-[30px] border border-white/10 bg-white/[0.035] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-yellow-500/40 hover:bg-white/[0.055] hover:shadow-[0_0_50px_rgba(234,179,8,0.12)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-500/10 text-yellow-400 transition duration-500 group-hover:scale-110 group-hover:bg-yellow-500 group-hover:text-black">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-7 text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-400">
                    {item.description}
                  </p>

                  <div className="mt-7 h-1 w-10 rounded-full bg-yellow-500 transition-all duration-500 group-hover:w-full" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[40px] border border-yellow-500/20 bg-gradient-to-br from-yellow-500/10 via-white/[0.035] to-blue-500/[0.08] p-10 text-center sm:p-16 lg:p-20">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-[120px]" />

            <div className="relative">
              <p className="text-sm uppercase tracking-[0.35em] text-yellow-400">
                Let&apos;s Build
              </p>

              <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-black sm:text-5xl lg:text-6xl">
                Have an idea?
                <span className="text-yellow-400">
                  {" "}
                  Let&apos;s turn it into reality.
                </span>
              </h2>

              <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-gray-400">
                From your first concept to a production-ready digital
                product, let&apos;s build something intelligent, useful,
                and built to grow.
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
                  Explore Portfolio
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