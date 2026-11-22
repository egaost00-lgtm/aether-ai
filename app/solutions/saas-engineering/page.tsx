
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  House,
  Layers3,
  Users,
  CreditCard,
  Database,
  PlugZap,
  Cloud,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    icon: Layers3,
    title: "Custom SaaS Development",
    description:
      "Build cloud-based software products tailored to your business model, customers, and growth plans.",
  },
  {
    icon: Users,
    title: "Multi-Tenant Architecture",
    description:
      "Design platforms where multiple organizations can securely manage their own users, data, and workspaces.",
  },
  {
    icon: CreditCard,
    title: "Subscriptions & Billing",
    description:
      "Integrate subscription plans, payment gateways, billing workflows, and account management.",
  },
  {
    icon: Database,
    title: "Database & Backend Engineering",
    description:
      "Develop reliable APIs, database structures, authentication systems, and backend services.",
  },
  {
    icon: PlugZap,
    title: "Third-Party Integrations",
    description:
      "Connect SaaS platforms with business tools, payment providers, communication services, and external APIs.",
  },
  {
    icon: Cloud,
    title: "Cloud Deployment & Scaling",
    description:
      "Deploy SaaS applications to modern cloud environments and plan infrastructure for future growth.",
  },
];

const process = [
  {
    number: "01",
    title: "Product Discovery",
    description:
      "Define your users, core features, business goals, and product requirements.",
  },
  {
    number: "02",
    title: "Architecture & Design",
    description:
      "Plan user experiences, data models, authentication, and technical architecture.",
  },
  {
    number: "03",
    title: "Development & Testing",
    description:
      "Build the platform, integrate essential services, and validate key workflows.",
  },
  {
    number: "04",
    title: "Launch & Evolution",
    description:
      "Deploy your product and plan improvements based on business needs and user feedback.",
  },
];

export default function SaaSEngineeringPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#08090D] text-white">
      <section className="relative overflow-hidden px-6 pb-24 pt-36">
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
            <Layers3 size={15} />
            SAAS ENGINEERING
          </div>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Transform Your Ideas Into{" "}
            <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              Scalable SaaS Products.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/55">
            Aether AI Solutions helps businesses and founders
            design, develop, and launch cloud-based software
            platforms with modern architecture and intuitive
            user experiences.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-7 py-3.5 text-sm font-semibold text-black transition hover:opacity-90"
            >
              Build Your SaaS Product
              <ArrowRight size={17} />
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
            SaaS Development Solutions
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-white/50">
            From early-stage MVPs to growing software platforms,
            we build products around real business requirements.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.035] p-8 transition duration-300 hover:border-orange-400/30 hover:bg-white/[0.06]"
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

      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-3 text-orange-400">
            <ShieldCheck size={23} />
            <span className="text-sm font-semibold uppercase tracking-widest">
              Our Development Process
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-bold md:text-4xl">
            From Product Idea to Launch
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {process.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-6"
              >
                <span className="text-3xl font-bold text-orange-400">
                  {step.number}
                </span>

                <h3 className="mt-5 text-lg font-semibold">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/50">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-orange-400/20 bg-gradient-to-br from-orange-500/10 to-transparent p-10 text-center md:p-16">
          <h2 className="text-3xl font-bold md:text-4xl">
            Have a SaaS Product Idea?
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-white/55">
            Whether you're building an MVP or expanding an
            existing platform, let's discuss your requirements
            and the right development approach.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-400 px-8 py-4 text-sm font-semibold text-black transition hover:bg-orange-300"
          >
            Request a Consultation
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
