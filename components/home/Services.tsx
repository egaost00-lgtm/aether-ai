import Link from "next/link";
import {
  Code2,
  BrainCircuit,
  CloudCog,
  Building2,
  Layers3,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

/* =========================================================
   AETHER AI SOLUTIONS — CORE SERVICES
========================================================= */

const services = [
  {
    icon: Code2,
    number: "01",
    title: "Software Development",
    description:
      "Custom web applications, mobile solutions, APIs, and scalable business software engineered to solve real operational challenges.",
    tags: ["Web Apps", "Custom Software", "APIs"],
  },
  {
    icon: BrainCircuit,
    number: "02",
    title: "AI & Intelligent Automation",
    description:
      "AI agents, intelligent assistants, generative AI applications, and workflow automation that help businesses operate more efficiently.",
    tags: ["AI Agents", "Generative AI", "Automation"],
  },
  {
    icon: CloudCog,
    number: "03",
    title: "Cloud & DevOps",
    description:
      "Cloud architecture, application deployment, infrastructure modernization, and DevOps solutions built for reliability and scalability.",
    tags: ["Cloud", "DevOps", "Infrastructure"],
  },
  {
    icon: Building2,
    number: "04",
    title: "Enterprise IT Solutions",
    description:
      "Business technology solutions including CRM and ERP integrations, process digitization, analytics dashboards, and enterprise systems.",
    tags: ["CRM & ERP", "Integrations", "Analytics"],
  },
  {
    icon: Layers3,
    number: "05",
    title: "SaaS & Product Engineering",
    description:
      "End-to-end SaaS development, from product strategy and MVP engineering to multi-tenant applications and scalable digital platforms.",
    tags: ["SaaS", "MVP Development", "Product Engineering"],
  },
  {
    icon: ShieldCheck,
    number: "06",
    title: "Managed IT & Support",
    description:
      "Application maintenance, performance monitoring, security improvements, technical support, and ongoing software optimization.",
    tags: ["Maintenance", "Monitoring", "Support"],
  },
];

/* =========================================================
   SERVICES COMPONENT
========================================================= */

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#050505] py-24 text-white sm:py-32"
    >
      {/* BACKGROUND GLOW */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-orange-500/[0.05] via-white/[0.015] to-green-500/[0.05] blur-[170px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* SECTION HEADING */}

        <div className="mx-auto mb-16 max-w-3xl text-center sm:mb-20">

          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-yellow-400 sm:text-sm">
            What We Do
          </p>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl md:text-7xl">
            Technology That
            <br />

            <span className="bg-gradient-to-r from-orange-400 via-white to-green-400 bg-clip-text text-transparent">
              Powers Business.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            From custom software engineering and artificial
            intelligence to cloud infrastructure and enterprise
            solutions, we help businesses in India and worldwide
            build, automate, and scale with technology.
          </p>

        </div>

        {/* SERVICES GRID */}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.number}
                className="group relative flex h-full flex-col overflow-hidden rounded-[30px] border border-white/[0.14] bg-white/[0.055] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-white/25 hover:bg-white/[0.085] hover:shadow-[0_25px_70px_rgba(255,255,255,0.07)] sm:p-8"
              >

                {/* GLASS SHINE */}

                <div className="pointer-events-none absolute -inset-y-full -left-1/2 w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 blur-md transition-all duration-1000 group-hover:left-[120%] group-hover:opacity-100" />

                {/* TRICOLOUR AMBIENT GLOW */}

                <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-gradient-to-br from-orange-500/20 via-white/5 to-green-500/20 opacity-0 blur-3xl transition duration-700 group-hover:opacity-100" />

                {/* SERVICE NUMBER */}

                <div className="absolute right-7 top-7 text-sm font-medium text-white/25 transition group-hover:text-white/50">
                  {service.number}
                </div>

                {/* SERVICE ICON */}

                <div className="relative mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/[0.15] bg-white/[0.07] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] backdrop-blur-xl transition-all duration-500 group-hover:rotate-3 group-hover:scale-110 group-hover:border-white/30 group-hover:bg-white/[0.12] group-hover:shadow-[0_0_35px_rgba(255,255,255,0.12)]">
                  <Icon size={29} strokeWidth={2} />
                </div>

                {/* SERVICE TITLE */}

                <h3 className="relative text-xl font-bold tracking-tight transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-orange-300 group-hover:via-white group-hover:to-green-300 group-hover:bg-clip-text group-hover:text-transparent sm:text-2xl">
                  {service.title}
                </h3>

                {/* SERVICE DESCRIPTION */}

                <p className="relative mt-4 flex-grow text-sm leading-7 text-gray-400 sm:text-base">
                  {service.description}
                </p>

                {/* SERVICE TAGS */}

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

                {/* EXPLORE SERVICE */}

                <Link
                  href="/services"
                  aria-label={`Explore ${service.title}`}
                  className="relative mt-8 inline-flex w-fit items-center gap-2 bg-gradient-to-r from-orange-400 via-white to-green-400 bg-clip-text font-semibold text-transparent transition-all duration-300 group-hover:gap-3"
                >
                  Explore Service

                  <ArrowUpRight
                    size={17}
                    className="text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>

                {/* BOTTOM ACCENT */}

                <div className="relative mt-7 h-[2px] w-full overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-12 rounded-full bg-gradient-to-r from-orange-400 via-white to-green-400 transition-all duration-700 group-hover:w-full" />
                </div>

              </div>
            );
          })}

        </div>

        {/* BOTTOM CTA */}

        <div className="relative mt-16 overflow-hidden rounded-[30px] border border-white/[0.13] bg-white/[0.045] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-2xl md:mt-20 md:px-10">

          {/* CTA BACKGROUND GLOW */}

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-orange-500/[0.04] via-transparent to-green-500/[0.04]" />

          <div className="relative flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">

            <div>
              <p className="text-2xl font-bold">
                Ready to Build Your Next Digital Solution?
              </p>

              <p className="mt-2 text-gray-400">
                Tell us your business challenge. We'll help you
                explore the right software, AI, or cloud solution.
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
