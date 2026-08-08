import Link from "next/link";
import {
  Globe,
  Brain,
  Palette,
  BarChart3,
  Workflow,
  Layers3,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    number: "01",
    title: "Website Development",
    description:
      "High-performance, responsive websites built with modern technologies, optimized for speed, SEO, and conversions.",
    tags: ["Next.js", "React", "SEO"],
  },
  {
    icon: Brain,
    number: "02",
    title: "AI Solutions",
    description:
      "Intelligent AI applications, chatbots, assistants, and custom AI systems designed around your business needs.",
    tags: ["AI Apps", "Chatbots", "LLM"],
  },
  {
    icon: Workflow,
    number: "03",
    title: "AI Automation",
    description:
      "Automate repetitive workflows and connect your business tools with intelligent systems that work around the clock.",
    tags: ["n8n", "APIs", "Workflows"],
  },
  {
    icon: Layers3,
    number: "04",
    title: "SaaS Development",
    description:
      "Scalable SaaS platforms engineered with modern architecture, intuitive interfaces, and production-ready technology.",
    tags: ["SaaS", "Cloud", "APIs"],
  },
  {
    icon: Palette,
    number: "05",
    title: "UI / UX Design",
    description:
      "Premium digital experiences combining clean visual design, intuitive interactions, and conversion-focused user journeys.",
    tags: ["UI Design", "UX", "Prototyping"],
  },
  {
    icon: BarChart3,
    number: "06",
    title: "Digital Growth",
    description:
      "Data-driven optimization, analytics, SEO, and performance improvements designed to help your digital product grow.",
    tags: ["Analytics", "SEO", "Growth"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#050505] py-32 text-white"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/[0.04] blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto mb-20 max-w-3xl text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-yellow-400">
            What We Do
          </p>

          <h2 className="text-5xl font-black tracking-tight md:text-7xl">
            Everything you need
            <br />
            <span className="text-yellow-400">to grow digitally.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-gray-400">
            From AI-powered applications to premium websites and
            intelligent automation, we build digital products designed
            to move your business forward.
          </p>

        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.035] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-yellow-500/30 hover:bg-white/[0.06]"
              >

                {/* Number */}
                <div className="absolute right-7 top-7 text-sm font-medium text-white/20 transition group-hover:text-yellow-400/50">
                  {service.number}
                </div>

                {/* Icon */}
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500 text-black shadow-[0_0_35px_rgba(234,179,8,0.12)] transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                  <Icon size={29} strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold tracking-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-4 min-h-[96px] leading-7 text-gray-400">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-400 transition group-hover:border-yellow-500/20 group-hover:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Learn More */}
                <Link
                  href="/services"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-yellow-400 transition-all duration-300 group-hover:gap-3"
                >
                  Explore Service
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>

                {/* Bottom Glow */}
                <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-yellow-500/10 opacity-0 blur-[70px] transition duration-500 group-hover:opacity-100" />

              </div>
            );
          })}

        </div>

        {/* Bottom CTA */}
        <div className="mt-20 flex flex-col items-center justify-between gap-6 rounded-[30px] border border-white/10 bg-white/[0.035] p-8 md:flex-row md:px-10">

          <div>
            <p className="text-2xl font-bold">
              Have a project in mind?
            </p>

            <p className="mt-2 text-gray-400">
              Let's turn your idea into a powerful digital product.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-400"
          >
            Start Your Project
            <ArrowUpRight size={18} />
          </Link>

        </div>

      </div>
    </section>
  );
}