"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const technologies = [
  "AI Systems",
  "Web Apps",
  "SaaS",
  "Automation",
  "Data",
  "Cloud",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505] pt-32 pb-20 text-white">

      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">

        {/* Premium grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.18) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.18) 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
          }}
        />

        {/* Aether glow */}
        <div
          className="absolute left-[-180px] top-[80px] h-[520px] w-[520px]
          rounded-full bg-yellow-500/[0.08] blur-[180px]"
        />

        <div
          className="absolute right-[-180px] top-[25%] h-[600px] w-[600px]
          rounded-full bg-yellow-400/[0.055] blur-[200px]"
        />

        {/* Center glow */}
        <div
          className="absolute left-1/2 top-[45%] h-[700px] w-[700px]
          -translate-x-1/2 -translate-y-1/2 rounded-full
          bg-yellow-500/[0.025] blur-[180px]"
        />

        {/* Decorative lines */}
        <div className="absolute left-[8%] top-[22%] h-px w-32 bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent" />
        <div className="absolute right-[8%] bottom-[22%] h-px w-40 bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />

      </div>

      {/* ================= CONTENT ================= */}

      <div
        className="relative z-10 mx-auto grid max-w-7xl
        items-center gap-16 px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8"
      >

        {/* ================= LEFT ================= */}

        <div>

          {/* Company positioning */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-7 inline-flex items-center gap-3 rounded-full
            border border-yellow-500/20 bg-yellow-500/[0.06]
            px-5 py-2.5 text-xs font-semibold uppercase
            tracking-[0.28em] text-yellow-400"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-400 shadow-[0_0_12px_rgba(250,204,21,0.8)]" />
            Software Engineering • AI • Digital Products
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-4xl text-6xl font-black leading-[0.9]
            tracking-[-0.06em] md:text-7xl lg:text-[88px]"
          >
            Building
            <br />

            <span className="text-white">
              software
            </span>
            <br />

            <span
              className="bg-gradient-to-r from-yellow-300
              via-yellow-400 to-yellow-600 bg-clip-text
              text-transparent"
            >
              that moves
            </span>
            <br />

            <span className="text-white">
              business forward.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 max-w-xl text-base leading-8 text-gray-400 md:text-lg"
          >
            We design and engineer AI systems, SaaS platforms, web
            applications, automation workflows, and data-driven products
            built for real-world businesses.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button href="/contact">
              Start Your Project
            </Button>

            <Link
              href="/portfolio"
              className="rounded-full border border-white/15
              bg-white/[0.04] px-8 py-4 text-center font-medium
              text-white backdrop-blur-md transition-all duration-300
              hover:border-yellow-500/40 hover:bg-yellow-500/[0.08]
              hover:text-yellow-300"
            >
              Explore Our Work →
            </Link>
          </motion.div>

          {/* Capability strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="mt-12 flex max-w-2xl flex-wrap gap-2"
          >
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10
                bg-white/[0.025] px-4 py-2 text-xs
                text-gray-500 transition
                hover:border-yellow-500/25
                hover:text-yellow-400"
              >
                {technology}
              </span>
            ))}
          </motion.div>

        </div>

        {/* ================= RIGHT ================= */}

        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >

          {/* Glow behind dashboard */}
          <div
            className="absolute inset-10 rounded-[50px]
            bg-yellow-500/[0.08] blur-[90px]"
          />

          {/* ================= ENGINEERING PANEL ================= */}

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10 w-full max-w-[520px]
            overflow-hidden rounded-[30px]
            border border-white/10
            bg-[#0b0b0b]/95
            shadow-[0_35px_100px_rgba(0,0,0,0.65)]"
          >

            {/* Top bar */}
            <div
              className="flex items-center justify-between
              border-b border-white/10 px-5 py-4"
            >
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
              </div>

              <span className="text-[10px] uppercase tracking-[0.25em] text-gray-600">
                AETHER ENGINEERING
              </span>

              <div className="flex items-center gap-2 text-[10px] text-green-400">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]" />
                SYSTEM ONLINE
              </div>
            </div>

            {/* Project header */}
            <div className="border-b border-white/10 px-6 py-6">
              <p className="text-[10px] uppercase tracking-[0.25em] text-yellow-400">
                Digital Product Pipeline
              </p>

              <div className="mt-3 flex items-end justify-between">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">
                    Product Engine
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    From concept to production
                  </p>
                </div>

                <span className="rounded-full border border-green-500/20
                  bg-green-500/[0.07] px-3 py-1.5 text-xs text-green-400">
                  Live
                </span>
              </div>
            </div>

            {/* Pipeline */}
            <div className="px-6 py-6">

              <div className="space-y-3">

                {[
                  ["01", "Product Strategy", "Complete"],
                  ["02", "UI / UX Engineering", "Complete"],
                  ["03", "AI & Application Layer", "Running"],
                  ["04", "API & Data Systems", "Connected"],
                  ["05", "Cloud Deployment", "Ready"],
                ].map(([number, title, status], index) => (
                  <motion.div
                    key={number}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.45,
                      delay: 0.5 + index * 0.1,
                    }}
                    className="group flex items-center gap-4
                    rounded-2xl border border-white/7
                    bg-white/[0.025] px-4 py-4
                    transition hover:border-yellow-500/20
                    hover:bg-yellow-500/[0.025]"
                  >

                    <span
                      className="flex h-9 w-9 shrink-0 items-center
                      justify-center rounded-xl border
                      border-white/10 bg-black text-xs
                      font-semibold text-gray-500"
                    >
                      {number}
                    </span>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-gray-200">
                        {title}
                      </p>

                      <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{
                            width:
                              status === "Complete"
                                ? "100%"
                                : status === "Running"
                                ? "72%"
                                : status === "Connected"
                                ? "88%"
                                : "55%",
                          }}
                          transition={{
                            duration: 0.8,
                            delay: 0.7 + index * 0.1,
                          }}
                          className="h-full rounded-full bg-yellow-400"
                        />
                      </div>
                    </div>

                    <span
                      className={`text-[10px] font-medium ${
                        status === "Complete"
                          ? "text-green-400"
                          : status === "Running"
                          ? "text-yellow-400"
                          : "text-gray-500"
                      }`}
                    >
                      {status}
                    </span>

                  </motion.div>
                ))}

              </div>

              {/* Architecture */}
              <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 p-5">

                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold text-gray-300">
                    System Architecture
                  </p>

                  <span className="text-[10px] text-gray-600">
                    AETHER STACK
                  </span>
                </div>

                <div className="mt-5 flex items-center justify-between gap-2">

                  {["AI", "API", "DATA", "CLOUD"].map((item, index) => (
                    <div
                      key={item}
                      className="flex flex-1 items-center"
                    >
                      <div
                        className="flex h-11 w-full items-center
                        justify-center rounded-xl border
                        border-yellow-500/15 bg-yellow-500/[0.05]
                        text-xs font-semibold text-yellow-400"
                      >
                        {item}
                      </div>

                      {index < 3 && (
                        <span className="px-1 text-gray-700">
                          →
                        </span>
                      )}
                    </div>
                  ))}

                </div>

              </div>

            </div>

            {/* Bottom status */}
            <div
              className="flex items-center justify-between
              border-t border-white/10 bg-white/[0.02]
              px-6 py-4"
            >
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-600">
                  Deployment
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  Production systems ready
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.8)]" />
                <span className="text-xs text-green-400">
                  Operational
                </span>
              </div>
            </div>

          </motion.div>

        </motion.div>

      </div>

      {/* Bottom indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-7 left-1/2 hidden
        -translate-x-1/2 items-center gap-3 text-[10px]
        uppercase tracking-[0.3em] text-gray-600 md:flex"
      >
        <span className="h-px w-10 bg-white/10" />
        Engineering digital products
        <span className="h-px w-10 bg-white/10" />
      </motion.div>

    </section>
  );
}