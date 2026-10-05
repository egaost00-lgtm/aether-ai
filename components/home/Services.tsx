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
  icon: Brain,
  number: "01",
  title: "AI Agent Development",
  description:
    "Intelligent AI agents built to understand tasks, use tools, connect with data, and automate real business workflows.",
  tags: ["AI Agents", "LLMs", "Automation"],
},
{
  icon: Brain,
  number: "02",
  title: "AI Software Development",
  description:
    "Custom AI-powered applications that combine intelligent models, modern interfaces, and business-focused workflows.",
  tags: ["AI Apps", "GenAI", "LLMs"],
},
 {
  icon: Workflow,
  number: "03",
  title: "AI Automation",
  description:
    "Intelligent automation that connects your apps, APIs, data, and business workflows to reduce repetitive work.",
  tags: ["n8n", "APIs", "Workflows"],
},
  {
  icon: Layers3,
  number: "04",
  title: "AI SaaS Products",
  description:
    "Production-ready AI SaaS products designed to turn intelligent capabilities into scalable business solutions.",
  tags: ["SaaS", "AI", "Cloud"],
},
 {
  icon: Palette,
  number: "05",
  title: "AI Product Design",
  description:
    "Human-centered interfaces designed for AI products, agents, dashboards, and intelligent digital experiences.",
  tags: ["UI Design", "UX", "AI Products"],
},
  {
  icon: BarChart3,
  number: "06",
  title: "AI Data Intelligence",
  description:
    "AI-powered data analysis that turns business data into insights, visualizations, trends, and actionable decisions.",
  tags: ["Data AI", "Analytics", "Insights"],
},
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#050505] py-32 text-white"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-orange-500/[0.05] via-white/[0.015] to-green-500/[0.05] blur-[170px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto mb-20 max-w-3xl text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-yellow-400">
            What We Do
          </p>

          <h2 className="text-5xl font-black tracking-tight md:text-7xl">
            AI solutions built
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-white to-green-400 bg-clip-text text-transparent">
              with intelligence.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-gray-400">
            From AI agents and intelligent software to automation and
data intelligence, we build technology that helps businesses
work smarter, move faster, and scale.
          </p>

        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-[30px] border border-white/[0.14] bg-white/[0.055] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-white/25 hover:bg-white/[0.085] hover:shadow-[0_25px_70px_rgba(255,255,255,0.07)]"
              >

                {/* Glass Shine */}
                <div className="pointer-events-none absolute -inset-y-full -left-1/2 w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 blur-md transition-all duration-1000 group-hover:left-[120%] group-hover:opacity-100" />

                {/* Tricolour Ambient Glow */}
                <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-gradient-to-br from-orange-500/20 via-white/5 to-green-500/20 opacity-0 blur-3xl transition duration-700 group-hover:opacity-100" />

                {/* Number */}
                <div className="absolute right-7 top-7 text-sm font-medium text-white/25 transition group-hover:text-white/50">
                  {service.number}
                </div>

                {/* Icon */}
                <div className="relative mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/[0.15] bg-white/[0.07] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] backdrop-blur-xl transition-all duration-500 group-hover:rotate-3 group-hover:scale-110 group-hover:border-white/30 group-hover:bg-white/[0.12] group-hover:shadow-[0_0_35px_rgba(255,255,255,0.12)]">
                  <Icon size={29} strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="relative text-2xl font-bold tracking-tight transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-orange-300 group-hover:via-white group-hover:to-green-300 group-hover:bg-clip-text group-hover:text-transparent">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="relative mt-4 min-h-[96px] leading-7 text-gray-400">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="relative mt-7 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-xs text-gray-400 backdrop-blur-md transition group-hover:border-white/20 group-hover:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Learn More */}
                <Link
                  href="/services"
                  className="relative mt-8 inline-flex items-center gap-2 bg-gradient-to-r from-orange-400 via-white to-green-400 bg-clip-text font-semibold text-transparent transition-all duration-300 group-hover:gap-3"
                >
                  Explore Service
                  <ArrowUpRight
                    size={17}
                    className="text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>

                {/* Tricolour Bottom Accent */}
                <div className="relative mt-7 h-[2px] w-full overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-12 rounded-full bg-gradient-to-r from-orange-400 via-white to-green-400 transition-all duration-700 group-hover:w-full" />
                </div>

              </div>
            );
          })}

        </div>

        {/* Bottom CTA */}
        <div className="relative mt-20 overflow-hidden rounded-[30px] border border-white/[0.13] bg-white/[0.045] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-2xl md:px-10">

          {/* CTA Glow */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-orange-500/[0.04] via-transparent to-green-500/[0.04]" />

          <div className="relative flex flex-col items-center justify-between gap-6 md:flex-row">

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
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white/20 bg-gradient-to-r from-orange-400 via-white to-green-400 px-8 py-4 font-semibold text-black shadow-[0_10px_40px_rgba(255,255,255,0.08)] transition-all duration-300 hover:scale-105"
            >
              Start Your Project
              <ArrowUpRight size={18} />
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}