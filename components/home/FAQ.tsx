
"use client";

import { useState } from "react";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What does Aether AI Solutions build?",
    a: "Aether AI Solutions engineers complete digital products, including AI-powered SaaS platforms, custom business applications, intelligent agents, voice and call automation systems, business intelligence tools, and enterprise software. We bring product architecture, full-stack engineering, AI integration, and deployment together around your business requirements.",
  },
  {
    q: "Do you build complete AI products or just websites?",
    a: "We build complete software products, not just interfaces. Depending on the project, this can include frontend and backend development, databases, authentication, dashboards, AI capabilities, API integrations, automated workflows, and cloud deployment. Each engagement is scoped around the product you actually need.",
  },
  {
    q: "Can you build AI voice agents and call automation systems?",
    a: "Yes. We can engineer AI voice and call agents for business use cases such as customer support, lead qualification, appointment handling, and inbound or outbound calling. The available capabilities depend on the telephony provider, AI models, integrations, and requirements of the project.",
  },
  {
    q: "Can you build custom AI agents and business automation?",
    a: "Yes. We develop AI agent systems and workflow automation designed for specific business processes. Depending on the use case, agents can work with approved tools, APIs, business data, and connected applications to assist with tasks such as lead handling, customer support, information retrieval, and operational workflows.",
  },
  {
    q: "Can you develop a custom SaaS product from scratch?",
    a: "Yes. We can take a SaaS product from architecture and UI/UX through full-stack development, database design, authentication, user roles, dashboards, subscription or payment integrations, and deployment. AI capabilities can be integrated into the product wherever they provide meaningful functionality.",
  },
  {
    q: "Do you build business intelligence and AI data analytics systems?",
    a: "Yes. We can build data-focused applications that connect to supported data sources, process structured information, visualize metrics, identify trends, and generate AI-assisted insights. The final solution depends on data availability, data quality, integration requirements, and the analysis your business needs.",
  },
  {
    q: "Can you integrate AI with our existing software and APIs?",
    a: "Yes. We can connect AI capabilities with supported APIs, databases, CRM systems, and other business applications. Integration feasibility depends on available documentation, permissions, provider capabilities, data access, and security requirements.",
  },
  {
    q: "Do you use existing AI models or build custom AI systems?",
    a: "We select the approach according to the problem, performance requirements, available data, security needs, and budget. Solutions may use existing AI model APIs, retrieval-augmented generation (RAG), custom agent workflows, or specialized model development when appropriate. Custom model training is not required for every project.",
  },
  {
    q: "How much does a custom AI product cost?",
    a: "Pricing depends on product complexity, AI functionality, integrations, infrastructure, security, and delivery scope. Our published packages provide starting points, while larger SaaS platforms, voice agent systems, multi-agent workflows, and enterprise solutions may require a custom proposal. Third-party API, telephony, and cloud usage costs are clarified separately where applicable.",
  },
  {
    q: "How long does an AI product take to build?",
    a: "Timelines depend on the scope, integrations, data readiness, testing, and deployment requirements. We define milestones and deliverables after understanding the project rather than promising the same timeline for every product.",
  },
  {
    q: "Do you provide support after deployment?",
    a: "Yes. Support can include maintenance, bug fixes, security and dependency updates, monitoring, AI or API cost optimization, performance improvements, and feature development. Included services, response times, and support hours depend on the agreed plan.",
  },
  {
    q: "Who owns the source code and intellectual property?",
    a: "Source-code delivery, intellectual-property ownership, third-party licenses, and infrastructure access are defined in the project agreement. We clarify these terms before development begins so the deliverables and ownership arrangements are understood.",
  },
  {
    q: "How do we start a project with Aether AI?",
    a: "Share your product idea, business goals, target users, and the problem you want to solve. We will review your requirements, discuss the technical approach, and define the proposed scope, milestones, pricing, and next steps before development begins.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden py-24 md:py-32"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/5 blur-[160px]" />

      <div className="mx-auto max-w-5xl px-6">
        {/* Heading */}
        <div className="mb-16 text-center md:mb-20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
            FAQ
          </p>

          <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">
            Questions?
            <br />
            <span className="text-yellow-400">
              We've got answers.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
            Learn how Aether AI engineers intelligent products,
            AI agents, voice automation, SaaS platforms, and
            connected business systems.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: Math.min(index * 0.04, 0.2),
                }}
                className={`group overflow-hidden rounded-2xl border backdrop-blur-xl transition-all duration-300 ${
                  isOpen
                    ? "border-yellow-500/40 bg-yellow-500/[0.05] shadow-[0_0_35px_rgba(234,179,8,0.08)]"
                    : "border-white/10 bg-white/[0.04] hover:border-yellow-500/30"
                }`}
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-4 p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-yellow-400 md:gap-6 md:p-8"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <div className="flex min-w-0 items-start gap-4 md:gap-5">
                    <span
                      aria-hidden="true"
                      className={`pt-1 text-sm font-bold transition-colors ${
                        isOpen
                          ? "text-yellow-400"
                          : "text-gray-600"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3
                      className={`text-base font-semibold leading-7 transition-colors md:text-xl ${
                        isOpen
                          ? "text-white"
                          : "text-gray-200 group-hover:text-white"
                      }`}
                    >
                      {faq.q}
                    </h3>
                  </div>

                  <span
                    aria-hidden="true"
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 md:h-10 md:w-10 ${
                      isOpen
                        ? "bg-yellow-500 text-black"
                        : "bg-white/5 text-gray-400 group-hover:bg-yellow-500/10 group-hover:text-yellow-400"
                    }`}
                  >
                    {isOpen ? (
                      <Minus size={18} />
                    ) : (
                      <Plus size={18} />
                    )}
                  </span>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="border-t border-white/10 px-5 pb-6 pt-5 md:px-8 md:pb-7 md:pt-6">
                        <p className="max-w-3xl pl-8 text-sm leading-7 text-gray-400 md:pl-9 md:text-base md:leading-8">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 rounded-3xl border border-white/10 bg-white/[0.03] p-7 text-center backdrop-blur-xl md:p-10">
          <p className="text-lg font-semibold text-white">
            Building something intelligent?
          </p>

          <p className="mx-auto mt-2 max-w-xl text-sm leading-7 text-gray-400 md:text-base">
            Tell us about your product, automation, or AI system.
            Let's discuss the engineering your business needs.
          </p>

          <a
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-yellow-500 px-7 py-3 font-semibold text-black transition hover:scale-105 hover:bg-yellow-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Discuss Your Project
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
