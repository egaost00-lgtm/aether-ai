"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const tech = [
  {
    name: "Next.js",
    logo: "/logos/nextjs.svg",
    category: "Frontend",
  },
  {
    name: "React",
    logo: "/logos/react.svg",
    category: "Frontend",
  },
  {
    name: "TypeScript",
    logo: "/logos/typescript.svg",
    category: "Development",
  },
  {
    name: "Tailwind CSS",
    logo: "/logos/tailwind.svg",
    category: "UI / UX",
  },
  {
    name: "Node.js",
    logo: "/logos/nodejs.svg",
    category: "Backend",
  },
  {
    name: "Supabase",
    logo: "/logos/supabase.svg",
    category: "Database",
  },
  {
    name: "Firebase",
    logo: "/logos/firebase.svg",
    category: "Cloud",
  },
  {
    name: "OpenAI",
    logo: "/logos/openai.svg",
    category: "Artificial Intelligence",
  },
  {
    name: "Gemini AI",
    logo: "/logos/gemini.svg",
    category: "Artificial Intelligence",
  },
  {
    name: "Vercel",
    logo: "/logos/vercel.svg",
    category: "Deployment",
  },
  {
    name: "GitHub",
    logo: "/logos/github.svg",
    category: "Development",
  },
  {
    name: "Figma",
    logo: "/logos/figma.svg",
    category: "Design",
  },
];

export default function Technologies() {
  return (
    <section
      id="technologies"
      className="relative overflow-hidden py-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/[0.04] blur-[160px]" />

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
            Our Technology Stack
          </p>

          <h2 className="text-5xl font-black tracking-tight text-white md:text-6xl">
            Built With
            <span className="text-yellow-400"> Powerful Technology.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            We combine modern frameworks, cloud platforms, AI
            technologies, and design tools to build fast, scalable,
            secure, and intelligent digital products.
          </p>
        </motion.div>

        {/* Technology Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {tech.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: index * 0.06,
              }}
              whileHover={{
                y: -8,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl transition-all duration-500 hover:border-yellow-500/40 hover:bg-white/[0.06] hover:shadow-[0_20px_60px_rgba(234,179,8,0.12)]"
            >

              {/* Hover Glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-yellow-500/10 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

              {/* Top Row */}
              <div className="relative flex items-start justify-between">

                {/* Logo */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] transition-all duration-500 group-hover:border-yellow-500/30 group-hover:bg-yellow-500/10 group-hover:shadow-[0_0_35px_rgba(234,179,8,0.18)]">
                  <Image
                    src={item.logo}
                    alt={`${item.name} logo`}
                    width={42}
                    height={42}
                    className="h-10 w-10 object-contain transition duration-500 group-hover:scale-110 group-hover:rotate-3"
                  />
                </div>

                {/* Number */}
                <span className="text-xs font-semibold tracking-widest text-gray-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Category */}
              <p className="relative mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400/80">
                {item.category}
              </p>

              {/* Name */}
              <h3 className="relative mt-2 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-yellow-400">
                {item.name}
              </h3>

              {/* Description */}
              <p className="relative mt-3 text-sm leading-7 text-gray-400">
                Modern tools powering high-performance digital
                experiences and scalable products.
              </p>

              {/* Bottom Accent */}
              <div className="relative mt-7 h-px w-full bg-white/10">
                <div className="h-full w-10 bg-yellow-500 transition-all duration-500 group-hover:w-full" />
              </div>

            </motion.div>
          ))}

        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 rounded-3xl border border-yellow-500/20 bg-yellow-500/[0.04] px-8 py-8 text-center"
        >
          <p className="text-lg font-medium text-gray-300">
            The right technology isn't just about what's popular —
            <span className="font-semibold text-yellow-400">
              {" "}
              it's about what works.
            </span>
          </p>

          <p className="mt-2 text-sm text-gray-500">
            We choose the stack based on your product, goals,
            performance requirements, and scalability.
          </p>
        </motion.div>

      </div>
    </section>
  );
}