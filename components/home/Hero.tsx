"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/* =========================================================
   DATA
========================================================= */

const features = [
  {
    icon: "⌘",
    title: "Software Engineering",
    description:
      "Custom applications, APIs and scalable digital platforms",
  },
  {
    icon: "✦",
    title: "AI & Automation",
    description:
      "Intelligent AI agents and automated business workflows",
  },
  {
    icon: "◈",
    title: "Cloud & DevOps",
    description:
      "Cloud infrastructure, deployment and modernization",
  },
  {
    icon: "↗",
    title: "SaaS & Enterprise",
    description:
      "Business systems and next-generation SaaS products",
  },
];

const particles = Array.from({ length: 12 }, (_, i) => i);

const neuralNodes = [
  [70, 105],
  [145, 80],
  [210, 120],
  [300, 75],
  [105, 190],
  [180, 155],
  [230, 210],
  [300, 185],
  [345, 245],
  [65, 275],
  [150, 315],
  [230, 270],
];

/* =========================================================
   MAIN HERO
========================================================= */

export default function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#07060D] text-white">

      {/* BACKGROUND ATMOSPHERE */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-40 top-10 h-[450px] w-[450px] rounded-full bg-violet-700/[0.12] blur-[120px] sm:h-[650px] sm:w-[650px] sm:blur-[150px]" />

        <div className="absolute -left-40 bottom-0 h-[350px] w-[350px] rounded-full bg-purple-900/[0.12] blur-[110px] sm:h-[450px] sm:w-[450px] sm:blur-[140px]" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(124,58,237,0.10),transparent_55%)]" />

        <div className="absolute inset-0 opacity-[0.10] [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:65px_65px]" />
      </div>

      {/* SUBTLE PARTICLES */}

      {particles.map((i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          className="pointer-events-none absolute h-1 w-1 rounded-full bg-violet-300"
          style={{
            left: `${8 + (i * 17) % 90}%`,
            top: `${12 + (i * 23) % 75}%`,
            boxShadow: "0 0 12px 3px rgba(139,92,246,0.35)",
          }}
          animate={{
            opacity: [0.2, 0.9, 0.2],
            scale: [0.7, 1.3, 0.7],
            y: [0, -12, 0],
          }}
          transition={{
            duration: 3 + (i % 4),
            repeat: Infinity,
            delay: i * 0.25,
          }}
        />
      ))}

      {/* MAIN CONTENT */}

      <div className="relative mx-auto max-w-[1400px] px-5 pb-10 pt-28 sm:px-8 sm:pb-12 sm:pt-36 lg:px-12 lg:pt-40">

        {/* HERO GRID */}

        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-6">

          {/* LEFT CONTENT */}

          <div className="relative z-20 mx-auto w-full max-w-[650px] lg:mx-0">

            {/* BRAND LABEL */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-6 inline-flex max-w-full items-center gap-2.5 rounded-full border border-violet-400/25 bg-violet-500/[0.07] px-3 py-2.5 backdrop-blur-xl sm:mb-7 sm:gap-3 sm:px-4"
            >
              <span className="shrink-0 text-violet-400">
                ✦
              </span>

              <span className="text-[9px] font-semibold uppercase tracking-[0.13em] text-violet-200 sm:text-xs sm:tracking-[0.18em]">
                Global Software & AI Engineering
              </span>
            </motion.div>

            {/* HEADLINE */}

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="text-[clamp(2.5rem,8vw,3.5rem)] font-semibold leading-[1.06] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[clamp(3.2rem,4.6vw,4.5rem)] xl:text-[74px]"
            >
              We Engineer
              <br />
              Software.
              <br />

              <span className="bg-gradient-to-r from-violet-300 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                Build Intelligence.
                <br />
                Power Growth.
              </span>
            </motion.h1>

            {/* DESCRIPTION */}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-5 max-w-[540px] text-sm leading-7 text-white/60 sm:mt-7 sm:text-base sm:leading-8"
            >
              We build custom software, intelligent AI solutions,
              cloud infrastructure and scalable digital products
              for ambitious businesses in India and worldwide.
            </motion.p>

            {/* CAPABILITIES */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-5 flex flex-wrap items-center gap-x-2.5 gap-y-2 text-[11px] text-white/55 sm:mt-7 sm:gap-x-3 sm:text-sm"
            >
              <span>Software Development</span>
              <span className="text-violet-400">✦</span>
              <span>AI Automation</span>
              <span className="text-violet-400">✦</span>
              <span>Cloud Solutions</span>
              <span className="text-violet-400">✦</span>
              <span>Enterprise Systems</span>
            </motion.div>

            {/* DIVIDER */}

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 190 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-6 h-px bg-gradient-to-r from-violet-400 via-purple-500 to-transparent sm:mt-8"
            />

            {/* CTA BUTTONS */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4"
            >
              <Link
                href="/contact"
                className="group inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 px-7 py-4 text-sm font-semibold text-white shadow-[0_0_35px_rgba(124,58,237,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(124,58,237,0.5)] sm:w-auto sm:px-8"
              >
                Start Your Project

                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.035] px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:border-violet-400/60 hover:bg-violet-500/10 sm:w-auto sm:px-8"
              >
                Explore Our Work
                <span>↗</span>
              </Link>
            </motion.div>
          </div>

          {/* RIGHT VISUAL - AI NEURAL SPHERE */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="relative mx-auto flex w-full max-w-[520px] items-center justify-center lg:max-w-[620px]"
          >

            {/* PURPLE GLOW */}

            <div className="absolute h-[75%] w-[75%] rounded-full bg-violet-600/25 blur-[75px] sm:blur-[100px]" />

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative aspect-square w-full max-w-[440px] sm:max-w-[550px]"
            >

              {/* OUTER ORBIT */}

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[5%] rounded-full border border-violet-400/30"
              />

              {/* INNER ORBIT */}

              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 22,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[13%] rounded-full border border-purple-300/25"
              />

              {/* GLASS SPHERE */}

              <div className="absolute inset-[17%] overflow-hidden rounded-full border border-violet-200/40 bg-gradient-to-br from-violet-300/20 via-[#17102d]/80 to-black shadow-[inset_0_0_50px_rgba(167,139,250,0.25),0_0_80px_rgba(124,58,237,0.3)]">

                {/* GLASS REFLECTION */}

                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.28),transparent_35%,transparent_70%,rgba(139,92,246,0.2))]" />

                {/* NEURAL NETWORK */}

                <svg
                  viewBox="0 0 400 400"
                  className="absolute inset-0 h-full w-full"
                  fill="none"
                  aria-hidden="true"
                >
                  <defs>
                    <radialGradient id="neuralGlow">
                      <stop stopColor="#FFFFFF" />
                      <stop offset=".35" stopColor="#C4B5FD" />
                      <stop offset="1" stopColor="#8B5CF6" />
                    </radialGradient>
                  </defs>

                  <g
                    stroke="#A78BFA"
                    strokeWidth="1.3"
                    opacity=".65"
                  >
                    <path d="M70 105 L145 80 L210 120 L300 75" />
                    <path d="M70 105 L105 190 L180 155 L210 120" />
                    <path d="M105 190 L65 275 L150 315 L230 270" />
                    <path d="M180 155 L230 210 L300 185 L345 245" />
                    <path d="M210 120 L230 210 L230 270" />
                    <path d="M300 75 L300 185 L345 245" />
                    <path d="M150 315 L230 270 L345 245" />
                    <path d="M105 190 L180 155 L230 270" />
                    <path d="M70 105 L180 155 L300 185" />
                    <path d="M145 80 L180 155 L230 210" />
                    <path d="M65 275 L105 190 L150 315" />
                    <path d="M230 210 L300 185 L230 270" />
                  </g>

                  {/* NEURAL NODES */}

                  <g fill="url(#neuralGlow)">
                    {neuralNodes.map(([cx, cy], i) => (
                      <motion.circle
                        key={i}
                        cx={cx}
                        cy={cy}
                        r="4"
                        animate={{
                          opacity: [0.4, 1, 0.4],
                          r: [3, 6, 3],
                        }}
                        transition={{
                          duration: 2 + (i % 3),
                          repeat: Infinity,
                          delay: i * 0.15,
                        }}
                      />
                    ))}
                  </g>

                  {/* ENERGY PULSE */}

                  <motion.circle
                    cx="210"
                    cy="195"
                    r="65"
                    stroke="#C4B5FD"
                    strokeWidth="1"
                    animate={{
                      r: [45, 100, 45],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </svg>

                {/* AETHER SYMBOL */}

                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-gradient-to-br from-white via-violet-200 to-violet-500 bg-clip-text text-[65px] font-bold text-transparent drop-shadow-[0_0_25px_rgba(167,139,250,0.9)] sm:text-[90px]">
                    Λ
                  </span>
                </div>

                {/* GLASS SHINE */}

                <div className="pointer-events-none absolute left-[15%] top-[10%] h-[35%] w-[55%] rounded-full bg-white/10 blur-2xl" />
              </div>

              {/* ORBIT LIGHT */}

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[10%] rounded-full border border-transparent"
                style={{
                  borderTopColor: "rgba(196,181,253,0.8)",
                  borderBottomColor: "rgba(139,92,246,0.4)",
                  transform: "rotateX(65deg)",
                }}
              />

              {/* FLOATING LABEL - RIGHT */}

              <div className="absolute right-0 top-[25%] max-w-[145px] rounded-xl border border-violet-300/25 bg-[#100B20]/90 px-2.5 py-2 shadow-[0_0_30px_rgba(124,58,237,0.2)] backdrop-blur-xl sm:max-w-none sm:px-4 sm:py-3">
                <span className="text-[8px] font-semibold uppercase tracking-widest text-violet-300 sm:text-[9px]">
                  ✦ AI Intelligence
                </span>

                <p className="mt-1 text-[10px] text-white/70 sm:text-xs">
                  Neural connections
                </p>
              </div>

              {/* FLOATING LABEL - LEFT */}

              <div className="absolute bottom-[20%] left-0 max-w-[150px] rounded-xl border border-violet-300/25 bg-[#100B20]/90 px-2.5 py-2 backdrop-blur-xl sm:max-w-none sm:px-4 sm:py-3">
                <span className="text-[8px] uppercase tracking-widest text-white/50 sm:text-[9px]">
                  AETHER ENGINEERING
                </span>

                <p className="mt-1 text-xs font-semibold text-violet-300 sm:text-sm">
                  Think. Build. Scale.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* TRUST STRIP */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-8 border-t border-white/10 pt-6 sm:mt-14 sm:pt-7"
        >
          <p className="text-center text-[9px] font-medium uppercase tracking-[0.2em] text-white/40 sm:text-[10px] sm:tracking-[0.25em]">
            Software Engineering · Artificial Intelligence · Innovation
          </p>
        </motion.div>

        {/* FEATURE CARDS */}

        <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-4 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 1 + index * 0.12,
              }}
              className="group rounded-xl border border-violet-400/15 bg-white/[0.025] p-3.5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-violet-500/[0.06] sm:rounded-2xl sm:p-5"
            >
              <span className="text-2xl text-violet-400 transition-all duration-300 group-hover:text-violet-300 sm:text-3xl">
                {feature.icon}
              </span>

              <h3 className="mt-3 text-sm font-semibold text-white sm:mt-4 sm:text-base">
                {feature.title}
              </h3>

              <p className="mt-1.5 text-[10px] leading-5 text-white/50 sm:mt-2 sm:text-xs">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* SCROLL INDICATOR */}

        <div className="mt-8 flex justify-center sm:mt-10">
          <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-white/30">
            Scroll to Explore ↓
          </span>
        </div>
      </div>
    </section>
  );
}
