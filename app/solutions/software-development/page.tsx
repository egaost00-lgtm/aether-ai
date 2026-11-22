"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  House,
  Code2,
  Database,
  Layers3,
  MonitorSmartphone,
  ShieldCheck,
  Workflow,
} from "lucide-react";


const services = [
  {
    icon: MonitorSmartphone,
    title: "Web Application Development",
    description:
      "Modern, responsive web applications and business portals built for performance and growth.",
  },
  {
    icon: Database,
    title: "Custom Business Software",
    description:
      "CRM systems, dashboards, booking platforms, and operational management tools.",
  },
  {
    icon: Layers3,
    title: "SaaS Product Development",
    description:
      "Scalable cloud-based platforms with secure accounts, subscriptions, and integrations.",
  },
  {
    icon: Workflow,
    title: "API Development & Integration",
    description:
      "Connect your applications, automate data flows, and integrate third-party services.",
  },
];


export default function SoftwareDevelopmentPage() {
  const router = useRouter();

  return (

    <main className="min-h-screen bg-[#08090D] text-white">
      <section className="relative overflow-hidden px-6 pb-24 pt-44">
        <div className="pointer-events-none absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-orange-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-6xl">

<div className="mb-12 flex flex-wrap gap-3">
  <button
    type="button"
    onClick={() => router.back()}
    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-5 py-2.5 text-sm text-white/80 transition hover:bg-white/10"
  >
    <ArrowLeft size={16} />
    Back
  </button>

  <Link
    href="/"
    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-5 py-2.5 text-sm text-white/80 transition hover:bg-white/10"
  >
    <House size={16} />
    Home
  </Link>
</div>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-400/10 px-4 py-2 text-xs font-medium text-orange-300">
            <Code2 size={15} />
            SOFTWARE DEVELOPMENT
          </div>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Custom Software Built to{" "}
            <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              Power Your Business.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/55">
            Aether AI Solutions designs and develops modern software,
            intelligent applications, and scalable digital platforms
            tailored to your business goals.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-7 py-3.5 text-sm font-semibold text-black transition hover:opacity-90"
            >
              Discuss Your Project <ArrowRight size={17} />
            </Link>

            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Explore Our Work
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-400">
            What We Build
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Software Solutions for Modern Businesses
          </h2>

          <p className="mt-5 max-w-2xl text-white/50">
            From an initial idea to a production-ready platform,
            we develop solutions designed around your requirements.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group rounded-3xl border border-white/10 bg-white/[0.035] p-8 transition duration-300 hover:border-orange-400/30 hover:bg-white/[0.06]"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-400/20 bg-orange-400/10 text-orange-300">
                    <Icon size={23} />
                  </div>

                  <h3 className="text-xl font-semibold">
                    {service.title}
                  </h3>

                  <p className="mt-3 leading-7 text-white/50">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <div>
            <ShieldCheck className="mb-5 text-orange-400" size={30} />
            <h2 className="text-2xl font-bold">
              Built for Reliability
            </h2>
            <p className="mt-4 leading-7 text-white/55">
              We prioritize maintainable architecture, secure
              development practices, responsive interfaces, and
              long-term scalability.
            </p>
          </div>

          <div>
            <Database className="mb-5 text-orange-400" size={30} />
            <h2 className="text-2xl font-bold">
              Modern Technology
            </h2>
            <p className="mt-4 leading-7 text-white/55">
              Our development approach includes modern web frameworks,
              TypeScript, APIs, databases, cloud infrastructure,
              and AI-powered integrations where appropriate.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-orange-400/20 bg-gradient-to-br from-orange-500/10 to-transparent p-10 text-center md:p-16">
          <h2 className="text-3xl font-bold md:text-4xl">
            Have a Software Project in Mind?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-white/55">
            Tell us what you want to build. We will help you
            explore the right technical approach for your business.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-400 px-8 py-4 text-sm font-semibold text-black transition hover:bg-orange-300"
          >
            Request a Quote <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
