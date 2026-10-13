
"use client";

import Link from "next/link";
import {
  Check,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Bot,
  Zap,
  Brain,
  Building2,
} from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Launchpad MVP",
    eyebrow: "AI PRODUCT DEVELOPMENT",
    icon: Bot,
    price: "₹1.5L+",
    description:
      "Turn a validated idea into a working digital product with full-stack engineering and focused AI capabilities.",
    features: [
      "Product discovery & technical scoping",
      "Premium UI/UX design",
      "Full-stack application development",
      "Database & authentication setup",
      "One defined AI capability or agent",
      "Selected API integrations",
      "Deployment & launch configuration",
      "30 days of agreed post-launch support",
    ],
  },
  {
    name: "Scale Product",
    eyebrow: "INTEGRATED AI SYSTEMS",
    icon: Zap,
    price: "₹4L+",
    description:
      "Build an integrated SaaS or business application with intelligent workflows, connected systems and custom functionality.",
    features: [
      "Custom SaaS or business application",
      "Advanced backend & database design",
      "AI agent & workflow integration",
      "Business process automation",
      "Dashboards & operational analytics",
      "Selected third-party integrations",
      "Authentication & access controls",
      "Testing & deployment",
      "60 days of agreed post-launch support",
    ],
    popular: true,
  },
  {
    name: "AI Transformation",
    eyebrow: "ADVANCED AI ENGINEERING",
    icon: Brain,
    price: "₹10L+",
    description:
      "Engineer complex AI solutions around business operations, proprietary data, multiple systems and demanding workflows.",
    features: [
      "Custom AI system architecture",
      "Multi-agent orchestration where required",
      "Advanced workflow automation",
      "Data pipelines & system integrations",
      "Business intelligence & analytics",
      "Security & access-control design",
      "Performance testing & optimization",
      "Production deployment planning",
      "Defined implementation & support scope",
    ],
  },
  {
    name: "Enterprise AI",
    eyebrow: "CUSTOM ENTERPRISE SYSTEMS",
    icon: Building2,
    price: "Custom",
    description:
      "Purpose-built AI infrastructure and software for complex organizational requirements, integrations and governance needs.",
    features: [
      "Technical discovery & solution architecture",
      "Custom enterprise AI applications",
      "AI voice & call agent systems where required",
      "Enterprise workflow integrations",
      "Data infrastructure & access controls",
      "Security requirements assessment",
      "Cloud architecture & deployment",
      "Testing & operational handover",
      "Custom support & SLA agreement",
    ],
  },
];

const carePlans = [
  {
    name: "Essential Care",
    price: "₹15K",
    description: "Core maintenance for an existing product.",
    features: [
      "Agreed maintenance scope",
      "Bug fixes within included limits",
      "Dependency & security updates",
      "Email support",
      "Monthly maintenance summary",
    ],
  },
  {
    name: "Growth Care",
    price: "₹35K",
    description: "Ongoing improvements for evolving products.",
    features: [
      "Everything in Essential Care",
      "AI/API usage optimization",
      "Defined monthly enhancement hours",
      "Workflow & prompt improvements",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Scale & Reliability",
    price: "₹60K+",
    description: "Tailored maintenance for more demanding systems.",
    features: [
      "Expanded maintenance coverage",
      "Monitoring where configured",
      "Agreed incident response targets",
      "Infrastructure optimization",
      "Roadmap & reliability reviews",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden py-24 md:py-32">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/[0.045] blur-[180px]" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Positioning Banner */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-3xl"
        >
          <div className="relative overflow-hidden rounded-2xl border border-yellow-500/20 bg-yellow-500/[0.045] px-5 py-4 backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-yellow-500/[0.06] via-white/[0.02] to-yellow-500/[0.06]" />

            <div className="relative flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-4">
              <div className="flex items-center gap-2">
                <Sparkles size={18} className="text-yellow-400" />
                <span className="text-sm font-bold uppercase tracking-[0.15em] text-white">
                  Intelligent Products. Engineered End to End.
                </span>
              </div>

              <span className="hidden text-gray-600 sm:block">•</span>

              <span className="text-sm text-gray-400">
                Transparent starting prices. Scope-defined delivery.
              </span>
            </div>
          </div>
        </motion.div>

        {/* Heading */}
        <div className="mb-16 text-center md:mb-20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
            Product Engineering & Pricing
          </p>

          <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">
            We engineer products.
            <br />
            <span className="text-yellow-400">
              Intelligence built in.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
            From AI-powered SaaS and business applications to intelligent
            agents, voice automation and connected data systems, we engineer
            solutions around your actual business requirements.
          </p>
        </div>

        {/* One-Time Product Packages */}
        <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white md:text-3xl">
              Product Engineering
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-400">
              One-time project fees. Final pricing follows discovery and scope.
            </p>
          </div>
          <p className="text-xs leading-5 text-gray-500">
            Third-party usage and infrastructure costs may be separate.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan, index) => {
            const Icon = plan.icon;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -6 }}
                className={`group relative flex flex-col overflow-hidden rounded-[28px] border p-6 backdrop-blur-xl transition-colors duration-300 md:p-7 ${
                  plan.popular
                    ? "border-yellow-400/60 bg-yellow-500/[0.07] shadow-[0_0_55px_rgba(234,179,8,0.10)]"
                    : "border-white/10 bg-white/[0.04] hover:border-yellow-500/40"
                }`}
              >
                {plan.popular && (
                  <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-yellow-500 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-black">
                    <Sparkles size={12} />
                    Popular
                  </div>
                )}

                <div className="mb-6">
                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/10 text-yellow-400">
                    <Icon size={21} />
                  </div>

                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-yellow-400/80">
                    {plan.eyebrow}
                  </p>

                  <h4 className="mt-3 text-2xl font-bold text-white">
                    {plan.name}
                  </h4>

                  <p className="mt-3 min-h-[100px] text-sm leading-6 text-gray-400">
                    {plan.description}
                  </p>
                </div>

                <div className="border-b border-white/10 pb-6">
                  <p
                    className={`text-4xl font-black ${
                      plan.popular ? "text-yellow-400" : "text-white"
                    }`}
                  >
                    {plan.price}
                  </p>

                  <p className="mt-2 text-xs leading-5 text-gray-500">
                    {plan.price === "Custom"
                      ? "Tailored proposal after discovery"
                      : "Starting price · Scope dependent"}
                  </p>
                </div>

                <div className="flex-1 py-6">
                  <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">
                    Illustrative deliverables
                  </p>

                  <ul className="space-y-3.5">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm leading-5 text-gray-300"
                      >
                        <span className="mt-[-1px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-yellow-500/10 text-yellow-400">
                          <Check size={12} />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className={`mt-2 flex w-full items-center justify-center gap-2 rounded-full px-4 py-3.5 text-sm font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-yellow-500 text-black hover:bg-yellow-400"
                      : "border border-white/15 bg-white/5 text-white hover:border-yellow-500/50 hover:bg-yellow-500/10"
                  }`}
                >
                  {plan.price === "Custom"
                    ? "Discuss Enterprise AI"
                    : "Discuss Your Product"}
                  <ArrowRight size={16} />
                </Link>

                <div className="pointer-events-none absolute -bottom-24 left-1/2 h-32 w-56 -translate-x-1/2 rounded-full bg-yellow-500/10 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>

        {/* Monthly Care */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500/10 text-yellow-400">
                  <ShieldCheck size={20} />
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
                  Ongoing Services
                </p>
              </div>

              <h3 className="text-3xl font-bold text-white md:text-4xl">
                AI Care & Optimization
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
                Ongoing maintenance and improvements for products we agree to
                support, with defined service coverage and engineering limits.
              </p>
            </div>

            <p className="text-xs leading-5 text-gray-500">
              Monthly recurring fees. Development scope agreed separately.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {carePlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`relative flex flex-col rounded-2xl border p-6 ${
                  plan.popular
                    ? "border-yellow-500/40 bg-yellow-500/[0.05]"
                    : "border-white/10 bg-white/[0.03]"
                }`}
              >
                {plan.popular && (
                  <span className="mb-4 w-fit rounded-full bg-yellow-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-yellow-400">
                    Recommended
                  </span>
                )}

                <h4 className="text-xl font-bold text-white">{plan.name}</h4>
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  {plan.description}
                </p>

                <p className="mt-5 text-3xl font-black text-yellow-400">
                  {plan.price}
                  <span className="ml-1 text-sm font-normal text-gray-500">
                    / month
                  </span>
                </p>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-5 text-gray-300"
                    >
                      <Check
                        size={15}
                        className="mt-0.5 shrink-0 text-yellow-400"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="mt-7 inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-yellow-500/50 hover:bg-yellow-500/10"
                >
                  Discuss Support
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>

          <p className="mt-5 text-xs leading-6 text-gray-500">
            Support coverage, included hours, response targets, exclusions and
            third-party usage charges are defined in the selected agreement.
            New features and major changes may require a separate estimate.
          </p>
        </motion.div>

        {/* Final CTA */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-10 text-center backdrop-blur-xl md:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
            Have a specific requirement?
          </p>

          <h3 className="mt-3 text-2xl font-bold text-white md:text-3xl">
            Let&apos;s engineer the right solution.
          </h3>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-gray-400 md:text-base">
            Tell us about your product, AI agent, voice automation system or
            business workflow. We&apos;ll discuss the scope before proposing
            a solution.
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-yellow-500 px-7 py-3.5 font-semibold text-black transition hover:bg-yellow-400"
          >
            Discuss Your Project
            <ArrowRight size={17} />
          </Link>
        </div>

        {/* Dedicated AI Agents Pricing */}
        <div className="mt-12 rounded-3xl border border-yellow-500/20 bg-yellow-500/[0.04] p-7 text-center md:p-10">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/10 text-yellow-400">
            <Bot size={24} />
          </div>

          <h3 className="mt-5 text-2xl font-bold text-white md:text-3xl">
            Looking for AI Agents?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
            Explore dedicated solutions for WhatsApp automation,
            Instagram DM agents, lead qualification and connected
            business workflows—with separate setup and monthly pricing.
          </p>

          <Link
            href="/ai-agents-pricing"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-yellow-500 px-7 py-3.5 font-semibold text-black transition hover:bg-yellow-400"
          >
            Explore AI Agents Pricing
            <ArrowRight size={17} />
          </Link>
        </div>

      </div>
    </section>
  );
}
