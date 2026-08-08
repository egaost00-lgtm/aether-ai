"use client";

import { motion } from "framer-motion";
import {
  Search,
  PenTool,
  Code2,
  Rocket,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We understand your business, goals, audience, and requirements to create a clear product strategy.",
    icon: Search,
  },
  {
    number: "02",
    title: "Design",
    description:
      "We transform the strategy into a premium UI/UX experience focused on clarity, usability, and conversions.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Development",
    description:
      "Our team builds your digital product using modern technologies, AI, scalable architecture, and clean code.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Launch & Scale",
    description:
      "After testing and optimization, we launch your product and help you continuously improve and scale it.",
    icon: Rocket,
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#050505] py-32 text-white"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/[0.035] blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto mb-20 max-w-3xl text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-yellow-400">
            Our Process
          </p>

          <h2 className="text-5xl font-black tracking-tight md:text-7xl">
            From idea
            <br />
            <span className="text-yellow-400">to reality.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-gray-400">
            A simple, transparent workflow designed to turn your vision
            into a polished digital product that is ready to grow.
          </p>

        </div>

        {/* Process Grid */}
        <div className="relative grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {/* Connecting Line */}
          <div className="pointer-events-none absolute left-[12%] right-[12%] top-[52px] hidden h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent xl:block" />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                whileHover={{ y: -8 }}
                className="group relative rounded-[30px] border border-white/10 bg-white/[0.035] p-8 transition-all duration-500 hover:border-yellow-500/30 hover:bg-white/[0.055]"
              >

                {/* Number + Icon */}
                <div className="relative z-10 mb-8 flex items-center justify-between">

                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-yellow-500/25 bg-[#080808] text-2xl font-black text-yellow-400 shadow-[0_0_35px_rgba(234,179,8,0.08)] transition-all duration-500 group-hover:border-yellow-500/50 group-hover:shadow-[0_0_40px_rgba(234,179,8,0.18)]">
                    {step.number}
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-500/10 text-yellow-400 transition-all duration-500 group-hover:rotate-6 group-hover:bg-yellow-500 group-hover:text-black">
                    <Icon size={22} />
                  </div>

                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold tracking-tight">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-4 min-h-[120px] leading-7 text-gray-400">
                  {step.description}
                </p>

                {/* Step Indicator */}
                <div className="mt-8 flex items-center gap-3">

                  <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-1/3 rounded-full bg-yellow-500 transition-all duration-700 group-hover:w-full" />
                  </div>

                  <ArrowRight
                    size={17}
                    className="text-yellow-400 transition-transform duration-300 group-hover:translate-x-1"
                  />

                </div>

                {/* Hover Glow */}
                <div className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-yellow-500/10 opacity-0 blur-[70px] transition duration-500 group-hover:opacity-100" />

              </motion.div>
            );
          })}

        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-[30px] border border-yellow-500/15 bg-yellow-500/[0.04] p-8 text-center"
        >
          <p className="text-xl font-semibold md:text-2xl">
            Clear process.{" "}
            <span className="text-yellow-400">
              Better products.
            </span>{" "}
            Faster execution.
          </p>

          <p className="mt-3 text-gray-400">
            No unnecessary complexity — just focused execution from
            concept to launch.
          </p>
        </motion.div>

      </div>
    </section>
  );
}