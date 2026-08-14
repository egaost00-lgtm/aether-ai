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
      className="relative overflow-hidden bg-[#050505] py-32 text-white"
    >
      {/* Tricolour Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Saffron */}
        <div className="absolute left-1/2 top-[-180px] h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-orange-500/[0.045] blur-[150px]" />

        {/* White */}
        <div className="absolute left-1/2 top-1/2 h-[350px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-[150px]" />

        {/* Green */}
        <div className="absolute bottom-[-180px] left-1/2 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-green-500/[0.045] blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-orange-300">
            Our Track Record
          </p>

          <h2 className="text-5xl font-black tracking-tight text-white md:text-6xl">
            Results That
            <span className="bg-gradient-to-r from-orange-300 via-white to-green-400 bg-clip-text text-transparent">
              {" "}
              Speak.
            </span>
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
              className="
                group relative overflow-hidden rounded-3xl
                border border-white/15
                bg-gradient-to-b
                from-orange-500/[0.07]
                via-white/[0.025]
                to-green-500/[0.07]
                p-8 text-center
                backdrop-blur-2xl
                shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]
                transition-all duration-500
                hover:border-white/25
                hover:from-orange-500/[0.11]
                hover:via-white/[0.045]
                hover:to-green-500/[0.11]
                hover:shadow-[0_20px_70px_rgba(255,255,255,0.06)]
              "
            >

              {/* Glass Shine */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent opacity-60" />

              {/* Saffron Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-orange-500/[0.12] opacity-0 blur-3xl transition duration-700 group-hover:opacity-100" />

              {/* Green Glow */}
              <div className="pointer-events-none absolute -bottom-20 -left-20 h-44 w-44 rounded-full bg-green-500/[0.12] opacity-0 blur-3xl transition duration-700 group-hover:opacity-100" />

              {/* Number */}
              <motion.h3
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1 + 0.2,
                }}
                className="
                  relative text-5xl font-black tracking-tight
                  bg-gradient-to-b from-orange-300 via-white to-green-400
                  bg-clip-text text-transparent
                  md:text-6xl
                "
              >
                {stat.value}
              </motion.h3>

              {/* Title */}
              <h4 className="relative mt-6 text-xl font-bold text-white">
                {stat.title}
              </h4>

              {/* Description */}
              <p className="relative mt-3 text-sm leading-6 text-gray-400">
                {stat.description}
              </p>

              {/* Tricolour Accent */}
              <div className="relative mx-auto mt-7 h-[2px] w-14 overflow-hidden rounded-full bg-gradient-to-r from-orange-400 via-white to-green-400 opacity-70 transition-all duration-500 group-hover:w-full group-hover:opacity-100" />

            </motion.div>
          ))}

        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            relative mt-16 overflow-hidden rounded-3xl
            border border-white/10
            bg-gradient-to-r
            from-orange-500/[0.035]
            via-white/[0.02]
            to-green-500/[0.035]
            px-8 py-8 text-center
            backdrop-blur-2xl
          "
        >
          {/* Glass shine */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/[0.04] via-transparent to-white/[0.04]" />

          <p className="relative text-lg font-medium text-gray-300">
            Building better digital experiences,
            <span className="bg-gradient-to-r from-orange-300 via-white to-green-400 bg-clip-text text-transparent">
              {" "}
              one product at a time.
            </span>
          </p>

          <p className="relative mt-2 text-sm text-gray-500">
            From concept and design to development, launch, and growth.
          </p>
        </motion.div>

      </div>
    </section>
  );
}