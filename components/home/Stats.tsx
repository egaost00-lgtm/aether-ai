"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "50+",
    title: "Projects Completed",
    description: "Digital products delivered",
  },
  {
    value: "98%",
    title: "Client Satisfaction",
    description: "Focused on quality & results",
  },
  {
    value: "24/7",
    title: "Support Available",
    description: "Reliable ongoing assistance",
  },
  {
    value: "5+",
    title: "Years of Experience",
    description: "Building digital solutions",
  },
];

export default function Stats() {
  return (
    <section
      id="stats"
      className="relative overflow-hidden py-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/[0.05] blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-yellow-400">
            Our Track Record
          </p>

          <h2 className="text-5xl font-black tracking-tight text-white md:text-6xl">
            Results That
            <span className="text-yellow-400"> Speak.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            We measure success by the products we build, the
            experiences we create, and the results we deliver.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-8 text-center backdrop-blur-xl transition-all duration-500 hover:border-yellow-500/40 hover:bg-white/[0.06] hover:shadow-[0_20px_60px_rgba(234,179,8,0.15)]"
            >

              {/* Glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-yellow-500/10 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

              {/* Number */}
              <motion.h3
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1 + 0.2,
                }}
                className="relative text-5xl font-black tracking-tight text-yellow-400 md:text-6xl"
              >
                {stat.value}
              </motion.h3>

              {/* Title */}
              <h4 className="relative mt-6 text-xl font-bold text-white">
                {stat.title}
              </h4>

              {/* Description */}
              <p className="relative mt-3 text-sm leading-6 text-gray-500">
                {stat.description}
              </p>

              {/* Accent */}
              <div className="relative mx-auto mt-7 h-px w-12 bg-yellow-500 transition-all duration-500 group-hover:w-full" />

            </motion.div>
          ))}

        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 rounded-3xl border border-white/10 bg-white/[0.025] px-8 py-8 text-center backdrop-blur-xl"
        >
          <p className="text-lg font-medium text-gray-300">
            Building better digital experiences,
            <span className="text-yellow-400">
              {" "}
              one product at a time.
            </span>
          </p>

          <p className="mt-2 text-sm text-gray-500">
            From concept and design to development, launch, and growth.
          </p>
        </motion.div>

      </div>
    </section>
  );
}