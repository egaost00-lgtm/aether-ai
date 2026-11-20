"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Check,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Bot,
  Zap,
  Brain,
  Building2,
  Globe,
  Code2,
  Workflow,
  Rocket,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Market = "india" | "international";

type Plan = {
  name: string;
  eyebrow: string;
  icon: LucideIcon;
  indiaPrice: string;
  internationalPrice: string;
  description: string;
  features: string[];
  popular?: boolean;
};

const plans: Plan[] = [
  {
    name: "Business Website",
    eyebrow: "WEB DEVELOPMENT",
    icon: Globe,
    indiaPrice: "₹35,000+",
    internationalPrice: "$750+",
    description:
      "Premium business websites designed to establish credibility, attract customers, and support business growth.",
    features: [
      "Business discovery & planning",
      "Premium responsive UI/UX",
      "Up to 5 standard pages",
      "Contact form integration",
      "Basic technical SEO setup",
      "Performance optimization",
      "Deployment assistance",
      "14 days of agreed bug-fix support",
    ],
  },
  {
    name: "AI Automation",
    eyebrow: "BUSINESS AUTOMATION",
    icon: Workflow,
    indiaPrice: "₹50,000+",
    internationalPrice: "$1,200+",
    description:
      "Connect business applications and automate repetitive operations through intelligent workflows.",
    features: [
      "Workflow discovery & mapping",
      "One defined automation workflow",
      "Selected API integrations",
      "n8n or custom workflow setup",
      "AI integration where applicable",
      "Basic error handling",
      "Testing & deployment",
      "Workflow documentation",
    ],
  },
  {
    name: "AI Agent Development",
    eyebrow: "INTELLIGENT AI AGENTS",
    icon: Bot,
    indiaPrice: "₹75,000+",
    internationalPrice: "$1,800+",
    description:
      "Custom AI assistants and agents designed around your business knowledge, tools, and workflows.",
    features: [
      "AI agent discovery & design",
      "One defined AI agent",
      "LLM integration",
      "Business knowledge integration",
      "Selected tool & API connections",
      "Conversation flow configuration",
      "Testing & deployment",
      "Initial optimization & handover",
    ],
    popular: true,
  },
  {
    name: "Launchpad MVP",
    eyebrow: "AI PRODUCT DEVELOPMENT",
    icon: Rocket,
    indiaPrice: "₹1.5L+",
    internationalPrice: "$4,000+",
    description:
      "Turn a validated business idea into a working full-stack digital product with focused AI capabilities.",
    features: [
      "Product discovery & scoping",
      "Premium product UI/UX",
      "Full-stack application development",
      "Database & authentication",
      "One defined AI capability",
      "Selected API integrations",
      "Deployment & launch setup",
      "30 days of agreed post-launch support",
    ],
  },
  {
    name: "Scale Product",
    eyebrow: "SAAS & SOFTWARE ENGINEERING",
    icon: Code2,
    indiaPrice: "₹4L+",
    internationalPrice: "$10,000+",
    description:
      "Build scalable SaaS products and integrated business applications with intelligent capabilities.",
    features: [
      "Custom SaaS or business application",
      "Advanced backend architecture",
      "Database & access controls",
      "AI agent or workflow integration",
      "Business automation",
      "Operational dashboards",
      "Selected third-party integrations",
      "Testing & deployment",
      "60 days of agreed post-launch support",
    ],
  },
  {
    name: "AI Transformation",
    eyebrow: "ADVANCED AI ENGINEERING",
    icon: Brain,
    indiaPrice: "₹10L+",
    internationalPrice: "$25,000+",
    description:
      "Advanced AI systems engineered around complex workflows, proprietary data, and multiple business applications.",
    features: [
      "AI architecture & technical discovery",
      "Custom AI applications",
      "Multi-agent systems where required",
      "Advanced workflow automation",
      "Data pipelines & integrations",
      "Analytics & business intelligence",
      "Security & access-control design",
      "Performance testing",
      "Production deployment planning",
    ],
  },
  {
    name: "Enterprise Solutions",
    eyebrow: "ENTERPRISE TECHNOLOGY",
    icon: Building2,
    indiaPrice: "Custom Quote",
    internationalPrice: "Custom Quote",
    description:
      "Purpose-built software, AI infrastructure, and enterprise systems designed for complex organizational requirements.",
    features: [
      "Enterprise technical discovery",
      "Custom software architecture",
      "Enterprise AI applications",
      "Voice & call agents where required",
      "Cloud & infrastructure planning",
      "Enterprise integrations",
      "Security requirements assessment",
      "Testing & operational handover",
      "Custom support & SLA agreement",
    ],
  },
];

const carePlans = [
  {
    name: "Essential Care",
    indiaPrice: "₹15,000",
    internationalPrice: "$350",
    description:
      "Reliable maintenance for websites, applications, and digital products.",
    features: [
      "Defined monthly maintenance scope",
      "Bug fixes within agreed limits",
      "Dependency & security updates",
      "Email support",
      "Monthly maintenance summary",
    ],
  },
  {
    name: "Growth Care",
    indiaPrice: "₹35,000",
    internationalPrice: "$800",
    description:
      "Continuous optimization for growing applications and AI-powered systems.",
    features: [
      "Everything in Essential Care",
      "Defined monthly enhancement hours",
      "AI/API usage optimization",
      "Workflow & prompt improvements",
      "Priority support",
      "Monthly optimization review",
    ],
    popular: true,
  },
  {
    name: "Scale & Reliability",
    indiaPrice: "₹60,000+",
    internationalPrice: "$1,500+",
    description:
      "Expanded maintenance and reliability support for more demanding systems.",
    features: [
      "Expanded maintenance coverage",
      "Monitoring where configured",
      "Agreed incident response targets",
      "Infrastructure optimization",
      "Performance & reliability reviews",
      "Custom support arrangements",
    ],
  },
];

export default function Pricing() {
  const [market, setMarket] = useState<Market>("india");

  const isIndia = market === "india";
    const getContactLink = (planName: string) => {
    const slug = planName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

    const currency = isIndia ? "INR" : "USD";

    return `/contact?plan=${encodeURIComponent(slug)}&market=${currency}`;
  };

  const getPrice = (plan: {
    indiaPrice: string;
    internationalPrice: string;
  }) =>
    isIndia ? plan.indiaPrice : plan.internationalPrice;

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[#050505] py-24 text-white md:py-32"
    >
      {/* Background Atmosphere */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-32 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-yellow-500/[0.045] blur-[160px]" />
        <div className="absolute -right-48 bottom-20 h-[500px] w-[500px] rounded-full bg-amber-500/[0.035] blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        {/* Positioning Banner */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-3xl"
        >
          <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/[0.045] px-5 py-4 text-center backdrop-blur-xl">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Sparkles size={18} className="text-yellow-400" />

              <span className="text-xs font-bold uppercase tracking-[0.15em] text-white sm:text-sm">
                Intelligent Products. Engineered End to End.
              </span>
            </div>

            <p className="mt-2 text-sm text-gray-400">
              Transparent starting prices. Scope-defined delivery.
            </p>
          </div>
        </motion.div>

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400 sm:text-sm">
            Aether AI Solutions • Pricing
          </p>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
            Technology built
            <br />
            <span className="text-yellow-400">
              around your business.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
            From premium websites and AI agents to intelligent
            automation, SaaS products, and enterprise systems,
            choose a starting point for your next project.
          </p>
        </div>

        {/* Market Selector */}
        <div className="mb-16 flex flex-col items-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
            Select Your Market
          </p>

          <div
            role="group"
            aria-label="Select pricing market"
            className="inline-flex rounded-full border border-white/15 bg-white/[0.045] p-1.5 backdrop-blur-xl"
          >
            <button
              type="button"
              onClick={() => setMarket("india")}
              aria-pressed={isIndia}
              className={`rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 sm:px-7 ${
                isIndia
                  ? "bg-yellow-500 text-black shadow-[0_5px_25px_rgba(234,179,8,0.2)]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              🇮🇳 India · INR
            </button>

            <button
              type="button"
              onClick={() => setMarket("international")}
              aria-pressed={!isIndia}
              className={`rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 sm:px-7 ${
                !isIndia
                  ? "bg-yellow-500 text-black shadow-[0_5px_25px_rgba(234,179,8,0.2)]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              🌍 Global · USD
            </button>
          </div>

          <p className="mt-4 max-w-lg text-center text-xs leading-6 text-gray-500">
            Market-specific indicative pricing, not live currency
            conversion. Final estimates depend on project scope.
          </p>
        </div>

        {/* Engineering Packages Heading */}
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400">
              Our Services
            </p>

            <h3 className="mt-3 text-2xl font-bold md:text-3xl">
              Development & AI Engineering
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              One-time project pricing with deliverables defined
              during discovery.
            </p>
          </div>

          <span className="text-xs text-gray-500">
            Infrastructure and third-party usage may cost extra.
          </span>
        </div>

        {/* Service Cards */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const price = getPrice(plan);
            const custom = price === "Custom Quote";

            return (
              <motion.article
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.5,
                  delay: (index % 3) * 0.08,
                }}
                whileHover={{ y: -5 }}
                className={`group relative flex h-full flex-col overflow-hidden rounded-[28px] border p-6 backdrop-blur-xl transition-colors duration-300 md:p-8 ${
                  plan.popular
                    ? "border-yellow-400/60 bg-yellow-500/[0.065] shadow-[0_0_50px_rgba(234,179,8,0.08)]"
                    : "border-white/10 bg-white/[0.035] hover:border-yellow-500/40"
                }`}
              >
                {plan.popular && (
                  <div className="absolute right-5 top-5 rounded-full bg-yellow-500 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-black">
                    Featured
                  </div>
                )}

                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/10 text-yellow-400">
                  <Icon size={23} />
                </div>

                <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-yellow-400">
                  {plan.eyebrow}
                </p>

                <h4 className="mt-3 text-2xl font-bold">
                  {plan.name}
                </h4>

                <p className="mt-4 min-h-[96px] text-sm leading-7 text-gray-400">
                  {plan.description}
                </p>

                {/* Dynamic Pricing */}
                <div className="mt-5 border-b border-white/10 pb-6">
                  <motion.p
                    key={`${market}-${plan.name}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className={`font-black tracking-tight ${
                      custom
                        ? "text-3xl text-white"
                        : "text-4xl text-yellow-400"
                    }`}
                  >
                    {price}
                  </motion.p>

                  <p className="mt-2 text-xs text-gray-500">
                    {custom
                      ? "Tailored proposal after discovery"
                      : "Starting price · One-time project"}
                  </p>
                </div>

                {/* Features */}
                <div className="flex-1 py-6">
                  <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">
                    Illustrative Deliverables
                  </p>

                  <ul className="space-y-3.5">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm leading-6 text-gray-300"
                      >
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-yellow-500/10 text-yellow-400">
                          <Check size={12} />
                        </span>

                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={getContactLink(plan.name)}
                  className={`mt-auto flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-yellow-500 text-black hover:bg-yellow-400"
                      : "border border-white/15 bg-white/5 text-white hover:border-yellow-500/50 hover:bg-yellow-500/10"
                  }`}
                >
                  {custom
                    ? "Request Custom Quote"
                    : "Discuss Your Project"}

                  <ArrowRight size={16} />
                </Link>

                <div className="pointer-events-none absolute -bottom-24 left-1/2 h-32 w-56 -translate-x-1/2 rounded-full bg-yellow-500/10 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />
              </motion.article>
            );
          })}
        </div>

        {/* Custom Solutions Banner */}
        <div className="mt-10 rounded-[28px] border border-yellow-500/20 bg-gradient-to-r from-yellow-500/[0.07] via-white/[0.025] to-yellow-500/[0.05] p-7 md:p-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="flex items-center gap-2 text-yellow-400">
                <Building2 size={19} />
                <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                  Custom Solutions
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-bold md:text-3xl">
                Your requirements. Our engineering.
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-400">
                Need a custom application, cybersecurity assessment,
                analytics platform, cloud integration, or a solution
                outside these packages? We can discuss a tailored scope.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-yellow-500 px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-yellow-400"
            >
              Get Custom Quote
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>

        {/* Monthly Support */}
        <div className="mt-24">
          <div className="mb-9">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-yellow-500/10 text-yellow-400">
                <ShieldCheck size={21} />
              </div>

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400">
                Ongoing Services
              </p>
            </div>

            <h3 className="text-3xl font-bold md:text-4xl">
              AI Care & Optimization
            </h3>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
              Keep your applications, AI systems, and business
              workflows maintained and improving with agreed
              monthly engineering support.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {carePlans.map((plan, index) => (
              <motion.article
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                className={`flex flex-col rounded-[26px] border p-7 ${
                  plan.popular
                    ? "border-yellow-500/40 bg-yellow-500/[0.055]"
                    : "border-white/10 bg-white/[0.035]"
                }`}
              >
                {plan.popular && (
                  <span className="mb-5 w-fit rounded-full bg-yellow-500/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-yellow-400">
                    Recommended
                  </span>
                )}

                <h4 className="text-xl font-bold">
                  {plan.name}
                </h4>

                <p className="mt-3 min-h-[72px] text-sm leading-6 text-gray-400">
                  {plan.description}
                </p>

                <motion.div
                  key={`${market}-${plan.name}`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="mt-5"
                >
                  <span className="text-3xl font-black text-yellow-400">
                    {getPrice(plan)}
                  </span>

                  <span className="ml-1 text-sm text-gray-500">
                    / month
                  </span>
                </motion.div>

                <div className="mt-6 flex-1 border-t border-white/10 pt-6">
                  <ul className="space-y-3.5">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm leading-6 text-gray-300"
                      >
                        <Check
                          size={16}
                          className="mt-1 shrink-0 text-yellow-400"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={getContactLink(plan.name)}
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3.5 text-sm font-semibold text-white transition hover:border-yellow-500/50 hover:bg-yellow-500/10"
                >
                  Discuss Support
                  <ArrowRight size={16} />
                </Link>
              </motion.article>
            ))}
          </div>

          <p className="mt-6 text-xs leading-6 text-gray-500">
            Monthly support is subject to an agreed contract,
            coverage schedule, included engineering hours,
            response targets, and exclusions. Major features,
            infrastructure charges, and AI usage are quoted separately.
          </p>
        </div>

        {/* AI Agents Pricing */}
        <div className="mt-20 rounded-[32px] border border-yellow-500/20 bg-yellow-500/[0.045] p-8 text-center md:p-12">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/10 text-yellow-400">
            <Bot size={27} />
          </div>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400">
            Specialized AI Automation
          </p>

          <h3 className="mt-4 text-3xl font-bold md:text-4xl">
            AI Agents for Your Business
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
            Explore specialized AI agents for WhatsApp, Instagram,
            lead qualification, customer support, and connected
            workflows with separate setup and monthly pricing.
          </p>

          <Link
            href="/ai-agents-pricing"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:bg-yellow-400"
          >
            Explore AI Agents Pricing
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Final CTA */}
        <div className="mt-16 rounded-[32px] border border-white/10 bg-white/[0.035] px-6 py-12 text-center backdrop-blur-xl md:px-10 md:py-16">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500/10 text-yellow-400">
            <Zap size={22} />
          </div>

          <h3 className="mt-6 text-3xl font-black md:text-4xl">
            Let's engineer what's next.
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
            Whether you're launching a new product, automating
            operations, or building enterprise AI systems,
            Aether AI Solutions can help define the right
            technical approach.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:bg-yellow-400"
          >
            Start Your Project
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Pricing Disclaimer */}
        <div className="mx-auto mt-10 max-w-4xl text-center">
          <p className="text-xs leading-6 text-gray-500">
            All prices are indicative starting estimates, not
            binding quotations. Final fees, deliverables,
            timelines, applicable taxes, hosting, third-party
            subscriptions, and AI usage charges are confirmed
            through a written proposal.
          </p>
        </div>
      </div>
    </section>
  );
}
