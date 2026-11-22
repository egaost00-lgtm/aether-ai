
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  House,
  ShieldCheck,
  Headset,
  Activity,
  Server,
  Wrench,
  Cloud,
  LockKeyhole,
} from "lucide-react";

const services = [
  {
    icon: Headset,
    title: "IT Support & Troubleshooting",
    description:
      "Technical assistance to diagnose software issues, resolve system problems, and support daily business operations.",
  },
  {
    icon: Activity,
    title: "System Monitoring",
    description:
      "Monitoring solutions that provide visibility into application health, system performance, and operational issues.",
  },
  {
    icon: Server,
    title: "Server & Infrastructure Management",
    description:
      "Server configuration, maintenance, updates, and infrastructure management tailored to your requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Security Maintenance",
    description:
      "Security reviews, access management, software updates, and practical measures to reduce technology risks.",
  },
  {
    icon: Cloud,
    title: "Cloud Application Support",
    description:
      "Assistance with cloud-hosted applications, deployment configurations, and ongoing platform maintenance.",
  },
  {
    icon: Wrench,
    title: "Software Maintenance",
    description:
      "Bug fixes, application improvements, compatibility updates, and technical support for existing software.",
  },
];

const process = [
  {
    number: "01",
    title: "Assess",
    description:
      "Review your existing systems, applications, and support requirements.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Define maintenance priorities, responsibilities, and support workflows.",
  },
  {
    number: "03",
    title: "Maintain",
    description:
      "Perform agreed maintenance, troubleshooting, and operational improvements.",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "Review recurring issues and identify opportunities to improve reliability.",
  },
];

export default function ManagedITPage() {
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
            <ShieldCheck size={15} />
            MANAGED IT SERVICES
          </div>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Reliable IT Support for{" "}
            <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              Business Continuity.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/55">
            Aether AI Solutions helps businesses maintain their
            applications, manage technical challenges, and improve
            the reliability of their digital infrastructure.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-7 py-3.5 text-sm font-semibold text-black transition hover:opacity-90"
            >
              Get IT Support
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
            Managed IT Solutions
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-white/50">
            Practical technology support and maintenance services
            designed around your business requirements.
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
            <LockKeyhole size={23} />
            <span className="text-sm font-semibold uppercase tracking-widest">
              Our Support Approach
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-bold md:text-4xl">
            A Structured Approach to IT Maintenance
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
            Need Reliable IT Support?
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-white/55">
            Tell us about your applications, infrastructure,
            or technical challenges. We'll discuss a suitable
            support and maintenance approach.
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
