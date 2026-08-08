"use client";

import Link from "next/link";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "₹15K+",
    description: "Perfect for businesses ready to establish a premium digital presence.",
    features: [
      "Business Website",
      "Responsive Design",
      "SEO Ready",
      "Performance Optimization",
      "1 Month Support",
    ],
  },
  {
    name: "Professional",
    price: "₹35K+",
    description: "For growing businesses that need advanced digital experiences.",
    features: [
      "Premium UI/UX",
      "AI Integrations",
      "Custom Dashboard",
      "Advanced Animations",
      "Analytics Integration",
      "3 Months Support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Powerful custom solutions built around your business requirements.",
    features: [
      "Custom AI Solutions",
      "AI Agents & Automation",
      "Scalable Architecture",
      "Custom SaaS Development",
      "Advanced Integrations",
      "Priority Support",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden py-32">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/5 blur-[160px]" />

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-20 text-center">
          <p className="mb-4 uppercase tracking-[0.3em] text-yellow-400">
            Pricing
          </p>

          <h2 className="text-5xl font-black tracking-tight text-white md:text-6xl">
            Invest in your
            <br />
            <span className="text-yellow-400">digital future.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Flexible packages designed for startups, growing businesses,
            and ambitious companies building the next generation of digital products.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 lg:grid-cols-3">

          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
              }}
              className={`group relative overflow-hidden rounded-[32px] border p-8 backdrop-blur-xl transition-all duration-500 ${
                plan.popular
                  ? "border-yellow-400/60 bg-yellow-500/[0.07] shadow-[0_0_60px_rgba(234,179,8,0.12)]"
                  : "border-white/10 bg-white/[0.04] hover:border-yellow-500/40"
              }`}
            >

              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute right-6 top-6 flex items-center gap-2 rounded-full bg-yellow-500 px-4 py-2 text-xs font-bold uppercase tracking-wider text-black">
                  <Sparkles size={14} />
                  Most Popular
                </div>
              )}

              {/* Plan Name */}
              <div className="mb-8">
                <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                  Aether AI
                </p>

                <h3 className="mt-3 text-3xl font-bold text-white">
                  {plan.name}
                </h3>

                <p className="mt-4 min-h-[72px] leading-7 text-gray-400">
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="border-b border-white/10 pb-8">
                <span className="text-5xl font-black text-yellow-400">
                  {plan.price}
                </span>

                {plan.price !== "Custom" && (
                  <span className="ml-2 text-sm text-gray-500">
                    starting
                  </span>
                )}
              </div>

              {/* Features */}
              <div className="py-8">
                <p className="mb-5 text-sm font-semibold uppercase tracking-wider text-gray-500">
                  What's included
                </p>

                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yellow-500/10 text-yellow-400">
                        <Check size={14} />
                      </span>

                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                className={`flex w-full items-center justify-center gap-2 rounded-full py-4 font-semibold transition-all duration-300 ${
                  plan.popular
                    ? "bg-yellow-500 text-black hover:scale-[1.03] hover:bg-yellow-400"
                    : "border border-white/15 bg-white/5 text-white hover:border-yellow-500/50 hover:bg-yellow-500/10"
                }`}
              >
                {plan.price === "Custom"
                  ? "Talk to Our Team"
                  : "Start Your Project"}

                <ArrowRight size={18} />
              </Link>

              {/* Bottom Glow */}
              <div className="absolute -bottom-24 left-1/2 h-32 w-48 -translate-x-1/2 rounded-full bg-yellow-500/10 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

            </motion.div>
          ))}

        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Need something different?{" "}
            <Link
              href="/contact"
              className="font-semibold text-yellow-400 transition hover:text-yellow-300"
            >
              Let's build a custom solution →
            </Link>
          </p>
        </div>

      </div>
    </section>
  );
}