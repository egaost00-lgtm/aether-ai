"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "How long does a website take?",
    a: "Most website projects are completed within 2–4 weeks, depending on the scope, features, content, and level of customization required.",
  },
  {
    q: "Do you build AI applications?",
    a: "Yes. We build AI-powered web applications, chatbots, AI agents, automation systems, recommendation systems, and custom AI integrations.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Absolutely. We provide post-launch support, maintenance, performance optimization, and technical assistance based on your selected plan.",
  },
  {
    q: "Can you redesign an existing website?",
    a: "Yes. We can completely redesign an existing website with a modern premium interface, improved performance, responsive design, SEO optimization, and better user experience.",
  },
  {
    q: "Can you build a custom SaaS platform?",
    a: "Yes. We can design and develop scalable SaaS platforms with authentication, dashboards, databases, payments, AI features, APIs, and cloud deployment.",
  },
  {
    q: "How do I start a project with Aether AI Solutions?",
    a: "Simply use the Start Project button and tell us about your idea. We'll review your requirements and get back to you to discuss the next steps.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden py-32">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/5 blur-[160px]" />

      <div className="mx-auto max-w-5xl px-6">

        {/* Heading */}
        <div className="mb-20 text-center">

          <p className="mb-4 uppercase tracking-[0.3em] text-yellow-400">
            FAQ
          </p>

          <h2 className="text-5xl font-black tracking-tight text-white md:text-6xl">
            Questions?
            <br />
            <span className="text-yellow-400">We've got answers.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Everything you need to know before starting your next
            digital project with Aether AI Solutions.
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
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className={`group overflow-hidden rounded-2xl border backdrop-blur-xl transition-all duration-500 ${
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
                  className="flex w-full items-center justify-between gap-6 p-6 text-left md:p-8"
                  aria-expanded={isOpen}
                >

                  <div className="flex items-center gap-5">

                    <span
                      className={`text-sm font-bold transition-colors ${
                        isOpen
                          ? "text-yellow-400"
                          : "text-gray-600"
                      }`}
                    >
                      0{index + 1}
                    </span>

                    <h3
                      className={`text-lg font-semibold transition-colors md:text-xl ${
                        isOpen
                          ? "text-white"
                          : "text-gray-200 group-hover:text-white"
                      }`}
                    >
                      {faq.q}
                    </h3>

                  </div>

                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
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
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="border-t border-white/10 px-6 pb-7 pt-6 md:px-8">

                        <p className="max-w-3xl pl-9 text-base leading-8 text-gray-400">
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
        <div className="mt-14 rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl">

          <p className="text-gray-400">
            Still have questions?
          </p>

          <a
            href="/contact"
            className="mt-4 inline-flex items-center rounded-full bg-yellow-500 px-7 py-3 font-semibold text-black transition hover:scale-105 hover:bg-yellow-400"
          >
            Talk to Our Team →
          </a>

        </div>

      </div>
    </section>
  );
}