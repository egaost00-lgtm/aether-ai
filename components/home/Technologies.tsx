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
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-orange-500/[0.06] via-white/[0.02] to-green-500/[0.06] blur-[170px]" />

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
            <span className="bg-gradient-to-r from-orange-400 via-white to-green-400 bg-clip-text text-transparent">
              {" "}Powerful Technology.
            </span>
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
              className="group relative overflow-hidden rounded-3xl border border-white/[0.14] bg-white/[0.055] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-2xl transition-all duration-500 hover:border-white/25 hover:bg-white/[0.085] hover:shadow-[0_25px_70px_rgba(255,255,255,0.08)]"
            >

              {/* Glass Shine */}
              <div
                className="pointer-events-none absolute -inset-y-full -left-1/2 w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 blur-md transition-all duration-1000 group-hover:left-[120%] group-hover:opacity-100"
              />

              {/* Tricolour Ambient Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-br from-orange-500/20 via-white/5 to-green-500/20 opacity-0 blur-3xl transition duration-700 group-hover:opacity-100" />

              {/* Top Row */}
              <div className="relative flex items-start justify-between">

                {/* Logo */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/[0.15] bg-white/[0.07] shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] backdrop-blur-xl transition-all duration-500 group-hover:border-white/30 group-hover:bg-white/[0.12] group-hover:shadow-[0_0_35px_rgba(255,255,255,0.12)]">
                  <Image
                    src={item.logo}
                    alt={`${item.name} logo`}
                    width={42}
                    height={42}
                    className="h-10 w-10 object-contain transition duration-500 group-hover:scale-110 group-hover:rotate-3"
                  />
                </div>

                {/* Number */}
                <span className="text-xs font-semibold tracking-widest text-white/30">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Category */}
              <p className="relative mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-orange-300/80">
                {item.category}
              </p>

              {/* Name */}
              <h3 className="relative mt-2 text-2xl font-bold text-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-orange-300 group-hover:via-white group-hover:to-green-300 group-hover:bg-clip-text group-hover:text-transparent">
                {item.name}
              </h3>

              {/* Description */}
              <p className="relative mt-3 text-sm leading-7 text-gray-400">
                Modern tools powering high-performance digital
                experiences and scalable products.
              </p>

              {/* Tricolour Bottom Accent */}
              <div className="relative mt-7 h-[2px] w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-12 rounded-full bg-gradient-to-r from-orange-400 via-white to-green-400 transition-all duration-700 group-hover:w-full" />
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
          className="relative mt-16 overflow-hidden rounded-3xl border border-white/[0.12] bg-white/[0.045] px-8 py-8 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-2xl"
        >
          {/* Subtle Tricolour Shine */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-orange-500/[0.05] via-transparent to-green-500/[0.05]" />

          <p className="relative text-lg font-medium text-gray-300">
            The right technology isn't just about what's popular —
            <span className="bg-gradient-to-r from-orange-400 via-white to-green-400 bg-clip-text font-semibold text-transparent">
              {" "}it's about what works.
            </span>
          </p>

          <p className="relative mt-2 text-sm text-gray-500">
            We choose the stack based on your product, goals,
            performance requirements, and scalability.
          </p>
        </motion.div>

      </div>
    </section>
  );
}