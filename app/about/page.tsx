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
      "High-performance websites and applications optimized for speed, responsiveness, and SEO.",
  },
  {
    icon: Brain,
    title: "AI Powered",
    description:
      "We integrate AI, intelligent automation, and modern APIs to create smarter digital products.",
  },
  {
    icon: Palette,
    title: "Premium Design",
    description:
      "Clean, modern and conversion-focused interfaces designed to make your brand stand out.",
  },
  {
    icon: Rocket,
    title: "Built to Scale",
    description:
      "Flexible architectures designed to grow with startups, businesses, and ambitious products.",
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
                digital products
              </span>
              <br />
              with purpose.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400 sm:text-xl">
              Aether AI Solutions combines premium design, modern
              engineering, artificial intelligence, and automation to
              help startups and businesses build better digital
              experiences.
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
              We create digital experiences that make businesses
              unforgettable.
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-400">
              At Aether AI Solutions, we bring together premium UI/UX
              design, AI technology, automation, and modern software
              engineering to create digital products that are built
              for real-world business needs.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              From high-performance websites to AI applications and
              SaaS platforms, our focus is simple — create products
              that look exceptional, perform reliably, and help
              businesses grow.
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
              We believe technology should make businesses faster,
              smarter, and more competitive.
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
                Build products that create real impact.
              </h3>

              <p className="mt-6 text-lg leading-8 text-gray-400">
                Our mission is to deliver premium websites, AI
                applications, SaaS platforms, and automation systems
                that solve real business problems and create measurable
                value.
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
                Shape the future with intelligent technology.
              </h3>

              <p className="mt-6 text-lg leading-8 text-gray-400">
                We aim to become a trusted technology partner for
                ambitious businesses by combining exceptional design,
                intelligent systems, and scalable engineering.
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
              We combine strategy, design, engineering, and AI to
              create complete digital experiences.
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
                Let's Build
              </p>

              <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-black sm:text-5xl lg:text-6xl">
                Ready to build your next
                <span className="text-yellow-400"> big idea?</span>
              </h2>

              <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-gray-400">
                Let's turn your idea into a premium digital product
                using modern technology, AI, and thoughtful design.
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