
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  House,
  Cloud,
  Server,
  GitBranch,
  ShieldCheck,
  Activity,
  Database,
} from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "Cloud environments designed for scalability, reliability, and efficient resource management.",
  },
  {
    icon: GitBranch,
    title: "CI/CD & DevOps Automation",
    description:
      "Automated build, testing, and deployment pipelines that help teams deliver software faster.",
  },
  {
    icon: Server,
    title: "Application Deployment",
    description:
      "Deploy and configure web applications, backend services, and production infrastructure.",
  },
  {
    icon: ShieldCheck,
    title: "Cloud Security",
    description:
      "Access controls, secure configuration, and infrastructure security best practices.",
  },
  {
    icon: Activity,
    title: "Monitoring & Reliability",
    description:
      "Application monitoring, operational visibility, and performance optimization.",
  },
  {
    icon: Database,
    title: "Database & Backend Infrastructure",
    description:
      "Database configuration, backend hosting, and scalable application architecture.",
  },
];

export default function CloudDevOpsPage() {
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
            <Cloud size={15} />
            CLOUD & DEVOPS
          </div>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Cloud Infrastructure Built for{" "}
            <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              Performance and Scale.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/55">
            Aether AI Solutions helps businesses deploy, manage,
            and optimize modern cloud applications with reliable
            infrastructure and streamlined DevOps workflows.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-7 py-3.5 text-sm font-semibold text-black transition hover:opacity-90"
            >
              Discuss Your Infrastructure
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
            What We Offer
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Cloud & DevOps Solutions
          </h2>

          <p className="mt-5 max-w-2xl text-white/50">
            From deployment pipelines to production infrastructure,
            we help businesses build reliable digital foundations.
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

      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-orange-400/20 bg-gradient-to-br from-orange-500/10 to-transparent p-10 text-center md:p-16">
          <h2 className="text-3xl font-bold md:text-4xl">
            Ready to Modernize Your Infrastructure?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-white/55">
            Let's discuss your cloud requirements, deployment
            strategy, and infrastructure goals.
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
