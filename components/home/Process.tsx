"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We understand your business goals and project requirements before writing a single line of code.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Our team creates premium UI/UX designs focused on user experience and conversions.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Using Next.js, AI, and modern technologies, we build fast, scalable digital products.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "After testing and optimization, we deploy your project and provide continuous support.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-20 text-center">
          <p className="mb-3 uppercase tracking-[0.3em] text-yellow-400">
            Process
          </p>

          <h2 className="text-5xl font-bold text-white">
            How We Work
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Every successful project follows a proven workflow—from
            understanding your vision to launching a polished digital product.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-8 backdrop-blur-xl transition-all duration-500 hover:border-yellow-500/40 hover:shadow-[0_0_45px_rgba(234,179,8,0.2)]"
            >
              {/* Glow */}
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-yellow-500/10 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

              {/* Step Number */}
              <div className="relative mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-yellow-500/30 bg-yellow-500/10 text-4xl font-black text-yellow-400">
                {step.number}
              </div>

              {/* Title */}
              <h3 className="mb-4 text-2xl font-bold text-white">
                {step.title}
              </h3>

              {/* Description */}
              <p className="leading-8 text-gray-400">
                {step.description}
              </p>

              {/* Bottom Line */}
              <div className="mt-8 h-1 w-16 rounded-full bg-yellow-500 transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}