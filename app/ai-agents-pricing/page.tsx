
"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  ArrowRight,
  Bot,
  Check,
  MessageCircle,
  PhoneCall,
  Workflow,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "WhatsApp AI Agent",
    eyebrow: "CUSTOMER CONVERSATIONS",
    icon: MessageCircle,
    setup: "₹25,000",
    monthly: "₹7,500",
    description:
      "Help customers get answers, discover products and submit enquiries through your WhatsApp business channel.",
    features: [
      "AI-powered customer replies",
      "Business knowledge and FAQs",
      "Product and service enquiries",
      "Lead capture workflows",
      "Human handoff for complex queries",
      "Deployment and initial configuration",
    ],
    cta: "Build My WhatsApp Agent",
    popular: false,
  },
  {
  name: "Instagram + Lead Agent",
eyebrow: "SOCIAL & LEAD AUTOMATION",
icon: MessageCircle,
    setup: "₹35,000",
    monthly: "₹10,000",
    description:
      "Turn supported Instagram conversations and business enquiries into an organized lead workflow.",
    features: [
      "AI-assisted Instagram DM replies",
      "Lead qualification workflows",
      "Enquiry detail collection",
      "Lead routing and notifications",
      "Selected CRM or form integration",
      "Human handoff and escalation",
    ],
    cta: "Automate My Leads",
    popular: true,
  },
  {
    name: "Full Business Automation",
    eyebrow: "CONNECTED AI WORKFLOWS",
    icon: Workflow,
    setup: "₹75,000",
    monthly: "₹15,000",
    description:
      "Connect selected customer channels and business workflows to reduce repetitive manual work.",
    features: [
      "Selected WhatsApp and Instagram workflows",
      "Website enquiry integration",
      "Lead routing and follow-up workflows",
      "Selected CRM or spreadsheet integration",
      "Workflow activity reporting",
      "Configuration and operational handover",
    ],
    cta: "Discuss My Automation",
    popular: false,
  },
];

const benefits = [
  {
    icon: Bot,
    title: "Useful AI",
    description:
      "Agents configured around your business information and defined tasks.",
  },
  {
    icon: Workflow,
    title: "Connected Workflows",
    description:
      "Connect supported APIs and business tools according to project scope.",
  },
  {
    icon: ShieldCheck,
    title: "Human Oversight",
    description:
      "Define escalation paths, permissions and boundaries for automated actions.",
  },
];

export default function AIAgentsPricingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080808] text-white">
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-yellow-500/[0.07] blur-[180px]"
      />
  {/* Back Button */}
  <div className="relative z-10 mx-auto max-w-7xl px-6 pt-6">
    <button
      type="button"
      onClick={() => window.history.back()}
      className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-gray-300 transition-all duration-300 hover:border-yellow-500/40 hover:bg-yellow-500/10 hover:text-yellow-400"
    >
      <ArrowLeft
        size={16}
        className="transition-transform duration-300 group-hover:-translate-x-1"
      />
      Back
    </button>
  </div>
  {/* Hero */}
  <section className="relative px-6 pb-16 pt-12 md:pb-20 md:pt-20"></section>
      {/* Hero */}
      <section className="relative px-6 pb-16 pt-24 md:pb-20 md:pt-32">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-yellow-400">
              <Sparkles size={14} />
              Aether AI · Business Automation
            </div>

            <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl lg:text-7xl">
              AI Agents That Work
              <span className="mt-2 block text-yellow-400">
                For Your Business.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-400 md:text-xl">
              Automate customer conversations, organize incoming leads and
              connect business workflows with AI agents designed around
              your requirements.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-yellow-500 px-7 py-4 font-semibold text-black transition hover:bg-yellow-400"
              >
                Discuss Your AI Agent
                <ArrowRight size={18} />
              </Link>

              <a
                href="#agent-pricing"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 font-semibold text-white transition hover:border-yellow-500/50 hover:bg-white/[0.04]"
              >
                Explore Pricing
              </a>
            </div>

            <p className="mt-5 text-xs leading-6 text-gray-500">
              Defined implementation scope · Setup fee + monthly service
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative px-6 pb-16">
        <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-2xl border border-white/10 bg-white/[0.025] p-5"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-yellow-500/20 bg-yellow-500/10 text-yellow-400">
                  <Icon size={20} />
                </div>

                <h2 className="font-semibold text-white">
                  {benefit.title}
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Pricing */}
      <section
        id="agent-pricing"
        className="relative scroll-mt-10 px-6 py-16 md:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400">
              AI Agent Packages
            </p>

            <h2 className="text-3xl font-black text-white md:text-5xl">
              Choose Your Automation.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
              Transparent starting packages for focused business automation.
              Final deliverables are confirmed before work begins.
            </p>
          </div>

          <div className="grid items-stretch gap-6 lg:grid-cols-3">
            {plans.map((plan, index) => {
              const Icon = plan.icon;

              return (
                <motion.article
                  key={plan.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                  className={`relative flex flex-col rounded-[28px] border p-6 md:p-8 ${
                    plan.popular
                      ? "border-yellow-400/60 bg-yellow-500/[0.055] shadow-[0_0_55px_rgba(234,179,8,0.08)]"
                      : "border-white/10 bg-white/[0.025]"
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute right-5 top-5 rounded-full bg-yellow-500 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-black">
                      Popular
                    </span>
                  )}

                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/10 text-yellow-400">
                    <Icon size={23} />
                  </div>

                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-yellow-400">
                    {plan.eyebrow}
                  </p>

                  <h3 className="mt-3 pr-2 text-2xl font-bold leading-tight text-white">
                    {plan.name}
                  </h3>

                  <p className="mt-4 min-h-[96px] text-sm leading-7 text-gray-400">
                    {plan.description}
                  </p>

                  <div className="mt-6 border-y border-white/10 py-6">
                    <p className="text-xs uppercase tracking-wider text-gray-500">
                      One-time setup
                    </p>

                    <p className="mt-2 text-4xl font-black text-yellow-400">
                      {plan.setup}
                    </p>

                    <p className="mt-5 text-xs uppercase tracking-wider text-gray-500">
                      Monthly service
                    </p>

                    <p className="mt-2 text-2xl font-bold text-white">
                      {plan.monthly}
                      <span className="ml-1 text-sm font-normal text-gray-500">
                        /month
                      </span>
                    </p>
                  </div>

                  <div className="flex-1 py-7">
                    <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">
                      Proposed package scope
                    </p>

                    <ul className="space-y-4">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm leading-6 text-gray-300"
                        >
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-yellow-500/10 text-yellow-400">
                            <Check size={12} />
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className={`mt-2 inline-flex items-center justify-center gap-2 rounded-full px-5 py-4 text-sm font-semibold transition ${
                      plan.popular
                        ? "bg-yellow-500 text-black hover:bg-yellow-400"
                        : "border border-white/15 bg-white/[0.03] text-white hover:border-yellow-500/50 hover:bg-yellow-500/[0.06]"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight size={17} />
                  </Link>
                </motion.article>
              );
            })}
          </div>

          <p className="mx-auto mt-7 max-w-4xl text-center text-xs leading-6 text-gray-500">
            Package features, channel eligibility, integration limits,
            support coverage and response times are confirmed in the project
            agreement. AI usage, messaging, telephony, cloud hosting and
            third-party provider charges may be additional. WhatsApp and
            Instagram automations require supported Meta integrations and
            applicable permissions.
          </p>
        </div>
      </section>

      {/* Monthly Service Explanation */}
      <section className="relative px-6 pb-20 pt-6 md:pb-28">
        <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/[0.025] p-7 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-yellow-500/10 text-yellow-400">
              <ShieldCheck size={24} />
            </div>

            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                What does the monthly fee cover?
              </h2>

              <p className="mt-3 text-sm leading-7 text-gray-400 md:text-base">
                The monthly service fee covers the maintenance and services
                explicitly agreed for your selected package. The proposal
                will specify included support, monitoring where configured,
                and any permitted workflow adjustments.
              </p>

              <p className="mt-3 text-sm leading-7 text-gray-400 md:text-base">
                New integrations, major feature development, increased usage
                and third-party subscriptions may require additional fees.
                We confirm these boundaries before implementation.
              </p>

              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-yellow-400 transition hover:text-yellow-300"
              >
                Get a tailored proposal
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative px-6 pb-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-yellow-500/20 bg-yellow-500/[0.045] px-6 py-12 text-center md:px-12">
          <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-500/10 text-yellow-400">
            <PhoneCall size={23} />
          </div>

          <h2 className="text-3xl font-black text-white md:text-4xl">
            Ready to automate a business workflow?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
            Tell us about your customers, current processes and the tasks
            you want to automate. We&apos;ll define a practical solution
            around your requirements.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-yellow-500 px-7 py-4 font-semibold text-black transition hover:bg-yellow-400"
          >
            Discuss Your Requirements
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
