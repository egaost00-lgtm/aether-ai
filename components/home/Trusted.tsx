"use client";

import { motion } from "framer-motion";

export default function Trusted() {
  const technologies = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Vercel",
    "Supabase",
  ];

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#050505] py-16">
      
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2
        h-72 w-72 -translate-x-1/2 -translate-y-1/2
        rounded-full bg-yellow-500/[0.04] blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-yellow-400">
            Technology Stack
          </p>

          <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
            Built with technology that scales.
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-gray-500">
            We use modern, reliable technologies to build fast,
            scalable, and future-ready digital products.
          </p>
        </motion.div>

        {/* Technology cards */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {technologies.map((technology, index) => (
            <motion.div
              key={technology}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl
              border border-white/10 bg-white/[0.035]
              px-4 py-6 text-center backdrop-blur-xl
              transition-all duration-300
              hover:border-yellow-500/30
              hover:bg-white/[0.07]"
            >

              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0
                bg-gradient-to-b from-yellow-500/[0.06]
                to-transparent opacity-0 transition
                duration-300 group-hover:opacity-100"
              />

              <div className="relative">

                {/* Status dot */}
                <div className="mx-auto mb-4 flex h-8 w-8 items-center
                  justify-center rounded-full border border-yellow-500/20
                  bg-yellow-500/[0.08]"
                >
                  <span className="h-2 w-2 rounded-full bg-yellow-400
                    shadow-[0_0_10px_rgba(250,204,21,0.7)]"
                  />
                </div>

                <p className="text-sm font-semibold text-gray-300
                  transition-colors duration-300
                  group-hover:text-white"
                >
                  {technology}
                </p>

                <p className="mt-1 text-[10px] uppercase
                  tracking-[0.2em] text-gray-600
                  group-hover:text-yellow-500/70"
                >
                  Integrated
                </p>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}