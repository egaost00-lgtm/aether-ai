"use client";

import Link from "next/link";
import { Check, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    eyebrow: "AI-READY DIGITAL PRESENCE",
    price: "₹49K+",
    description:
      "A premium digital foundation for businesses ready to establish a strong online presence.",
    features: [
      "Premium Business Website",
      "Responsive Mobile-First Design",
      "Premium UI/UX",
      "SEO Foundation",
      "Performance Optimization",
      "Analytics Integration",
      "Basic AI Integration",
      "Deployment & Launch",
      "30 Days Support",
    ],
  },
  {
    name: "Growth",
    eyebrow: "AI AUTOMATION",
    price: "₹99K+",
    description:
      "For growing businesses that want to automate workflows and turn their website into an intelligent system.",
    features: [
      "Everything in Starter",
      "AI-Powered Chatbot",
      "AI Workflow Automation",
      "Up to 3 API Integrations",
      "Custom Backend",
      "Database Integration",
      "Authentication System",
      "Basic Admin Dashboard",
      "1 AI Agent",
      "60 Days Support",
    ],
    popular: true,
  },
  {
    name: "Professional",
    eyebrow: "AI SYSTEMS & AGENTS",
    price: "₹1.99L+",
    description:
      "Advanced AI systems built for businesses that need intelligent automation, dashboards and scalable technology.",
    features: [
      "Everything in Growth",
      "Advanced AI Agents",
      "Multi-Step AI Automation",
      "Advanced Dashboard",
      "Multiple API Integrations",
      "Custom Database Architecture",
      "Advanced Authentication",
      "AI Analytics & Insights",
      "Custom Business Logic",
      "Scalable Architecture",
      "90 Days Support",
    ],
  },
  {
    name: "Enterprise",
    eyebrow: "CUSTOM AI INFRASTRUCTURE",
    price: "Custom",
    description:
      "Enterprise-grade AI products and infrastructure designed around complex business requirements.",
    features: [
      "Everything in Professional",
      "Custom AI Solutions",
      "Multi-Agent AI Systems",
      "Enterprise Automation",
      "Custom SaaS Development",
      "Advanced AI Analytics",
      "Enterprise Integrations",
      "Security & Access Controls",
      "Cloud Infrastructure",
      "Dedicated Support",
      "Custom SLA",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden py-32">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/5 blur-[180px]" />

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-20 text-center">
          <p className="mb-4 uppercase tracking-[0.3em] text-yellow-400">
            Pricing
          </p>

          <h2 className="text-5xl font-black tracking-tight text-white md:text-6xl">
            Build what&apos;s
            <br />
            <span className="text-yellow-400">next.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            From AI-ready digital experiences to intelligent business systems,
            choose the level of technology your business needs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-6 lg:grid-cols-4">

          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
              }}
              className={`group relative flex flex-col overflow-hidden rounded-[30px] border p-7 backdrop-blur-xl transition-all duration-500 ${
                plan.popular
                  ? "border-yellow-400/60 bg-yellow-500/[0.07] shadow-[0_0_70px_rgba(234,179,8,0.14)]"
                  : "border-white/10 bg-white/[0.04] hover:border-yellow-500/40"
              }`}
            >

              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full bg-yellow-500 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-black">
                  <Sparkles size={12} />
                  Most Popular
                </div>
              )}

              {/* Plan */}
              <div className="mb-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-yellow-400/80">
                  {plan.eyebrow}
                </p>

                <h3 className="mt-3 text-3xl font-bold text-white">
                  {plan.name}
                </h3>

                <p className="mt-4 min-h-[96px] text-sm leading-6 text-gray-400">
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="border-b border-white/10 pb-7">
                <span className="text-4xl font-black text-yellow-400 md:text-5xl">
                  {plan.price}
                </span>

                {plan.price !== "Custom" && (
                  <span className="ml-2 text-xs text-gray-500">
                    starting
                  </span>
                )}
              </div>

              {/* Features */}
              <div className="flex-1 py-7">
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                  What&apos;s included
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

              {/* CTA */}
              <Link
                href="/contact"
                className={`flex w-full items-center justify-center gap-2 rounded-full py-4 text-sm font-semibold transition-all duration-300 ${
                  plan.popular
                    ? "bg-yellow-500 text-black hover:scale-[1.03] hover:bg-yellow-400"
                    : "border border-white/15 bg-white/5 text-white hover:border-yellow-500/50 hover:bg-yellow-500/10"
                }`}
              >
                {plan.price === "Custom"
                  ? "Talk to Our Team"
                  : "Start Your Project"}

                <ArrowRight size={17} />
              </Link>

              {/* Bottom Glow */}
              <div className="absolute -bottom-24 left-1/2 h-32 w-48 -translate-x-1/2 -translate-y-0 rounded-full bg-yellow-500/10 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}

        </div>

        {/* AI Care & Optimization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-[30px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl md:p-10"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500/10 text-yellow-400">
                  <ShieldCheck size={20} />
                </div>

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
                  AI Care & Optimization
                </p>
              </div>

              <h3 className="text-2xl font-bold text-white md:text-3xl">
                Keep your AI systems
                <span className="text-yellow-400"> running smarter.</span>
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                Ongoing monitoring, maintenance, optimization and improvements
                to keep your website, AI integrations and automation systems
                secure, reliable and up to date.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:min-w-[520px]">

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  Starter
                </p>
                <p className="mt-2 text-2xl font-bold text-white">
                  ₹7.5K
                  <span className="text-sm font-normal text-gray-500">
                    /mo
                  </span>
                </p>
              </div>

              <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/[0.05] p-5">
                <p className="text-xs uppercase tracking-wider text-yellow-400">
                  Growth
                </p>
                <p className="mt-2 text-2xl font-bold text-white">
                  ₹15K
                  <span className="text-sm font-normal text-gray-500">
                    /mo
                  </span>
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  Professional
                </p>
                <p className="mt-2 text-2xl font-bold text-white">
                  ₹30K+
                  <span className="text-sm font-normal text-gray-500">
                    /mo
                  </span>
                </p>
              </div>

            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6">
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-gray-500">
              <span>✓ System monitoring</span>
              <span>✓ Bug fixes</span>
              <span>✓ AI/API optimization</span>
              <span>✓ Security updates</span>
              <span>✓ Performance optimization</span>
              <span>✓ Small improvements</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Need something different?{" "}
            <Link
              href="/contact"
              className="font-semibold text-yellow-400 transition hover:text-yellow-300"
            >
              Let&apos;s build a custom AI solution →
            </Link>
          </p>
        </div>

      </div>
    </section>
  );
}