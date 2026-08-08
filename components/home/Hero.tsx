"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505] pt-40 pb-24 text-white">

      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">

        {/* Rotating ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 120,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-[45%] h-[1200px] w-[1200px]
          -translate-x-1/2 -translate-y-1/2 rounded-full
          border border-yellow-500/[0.06]"
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />

        {/* Main glow */}
        <div
          className="absolute left-1/2 top-[45%] h-[600px] w-[600px]
          -translate-x-1/2 -translate-y-1/2 rounded-full
          bg-yellow-500/[0.08] blur-[180px]"
        />

        {/* Blue glow */}
        <div
          className="absolute right-[-100px] top-[100px] h-[350px] w-[350px]
          rounded-full bg-blue-500/[0.08] blur-[160px]"
        />

        {/* Small yellow glow */}
        <div
          className="absolute left-[-100px] bottom-[100px] h-[300px] w-[300px]
          rounded-full bg-yellow-500/[0.05] blur-[150px]"
        />

      </div>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto grid max-w-7xl
      items-center gap-16 px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8">

        {/* ================= LEFT ================= */}

        <div>

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-7 inline-flex items-center gap-3 rounded-full
            border border-yellow-500/20 bg-yellow-500/[0.07]
            px-5 py-2.5 text-xs font-medium uppercase
            tracking-[0.3em] text-yellow-400"
          >
            <span className="h-2 w-2 rounded-full bg-yellow-400 shadow-[0_0_12px_rgba(250,204,21,0.8)]" />
            Aether AI Solutions
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-4xl text-6xl font-black leading-[0.9]
            tracking-[-0.055em] md:text-7xl lg:text-[88px]"
          >
            Building
            <br />
            <span className="text-white">
              Intelligent
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600
            bg-clip-text text-transparent">
              Digital Products.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 max-w-xl text-base leading-8 text-gray-400 md:text-lg"
          >
            We design and build AI-powered websites, SaaS platforms,
            automation systems, and premium digital experiences that
            help ambitious businesses move faster.
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
              className="rounded-full border border-white/10
              bg-white/[0.04] px-8 py-4 text-center font-medium
              text-white backdrop-blur-xl transition
              hover:border-yellow-500/40 hover:bg-white/[0.08]
              hover:text-yellow-400"
            >
              Explore Our Work
            </Link>
          </motion.div>

          {/* Trust line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-10 flex items-center gap-3 text-sm text-gray-500"
          >
            <div className="flex -space-x-2">
              <span className="h-7 w-7 rounded-full border-2 border-[#050505] bg-gray-700" />
              <span className="h-7 w-7 rounded-full border-2 border-[#050505] bg-gray-500" />
              <span className="h-7 w-7 rounded-full border-2 border-[#050505] bg-gray-600" />
            </div>

            <span>
              Built for modern businesses
            </span>
          </motion.div>

        </div>

        {/* ================= RIGHT ================= */}

        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >

          {/* Floating glow */}
          <div className="absolute inset-0 rounded-[40px]
          bg-yellow-500/[0.04] blur-3xl" />

          {/* Dashboard */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-full max-w-[510px]
            rounded-[32px] border border-white/10
            bg-white/[0.045] p-6 shadow-2xl
            backdrop-blur-2xl md:p-8"
          >

            {/* Header */}
            <div className="flex items-center justify-between">

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                  Aether Intelligence
                </p>

                <h3 className="mt-1 text-xl font-semibold">
                  Growth Overview
                </h3>
              </div>

              <div className="flex items-center gap-2 rounded-full
              border border-green-500/20 bg-green-500/10
              px-3 py-1.5 text-xs text-green-400">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                Live
              </div>

            </div>

            {/* Main metric */}
            <div className="mt-9 rounded-2xl border border-white/10
            bg-black/20 p-6">

              <div className="flex items-end justify-between">

                <div>
                  <p className="text-sm text-gray-500">
                    Project Performance
                  </p>

                  <h2 className="mt-2 text-5xl font-bold tracking-tight
                  text-yellow-400">
                    +128%
                  </h2>
                </div>

                <span className="mb-2 rounded-full bg-green-500/10
                px-3 py-1 text-xs text-green-400">
                  +24.8%
                </span>

              </div>

              {/* Graph */}
              <div className="mt-7 flex h-24 items-end gap-2">

                {[35, 48, 42, 60, 54, 72, 68, 82, 76, 94, 86, 100].map(
                  (height, index) => (
                    <motion.div
                      key={index}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{
                        duration: 0.7,
                        delay: 0.5 + index * 0.05,
                      }}
                      className="flex-1 rounded-t-md bg-gradient-to-t
                      from-yellow-500/20 to-yellow-400"
                    />
                  )
                )}

              </div>

            </div>

            {/* Stats */}
            <div className="mt-5 grid grid-cols-2 gap-3">

              {[
                ["Projects", "50+"],
                ["AI Systems", "20+"],
                ["Automation", "24/7"],
                ["Experience", "5+ yrs"],
              ].map(([title, value]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10
                  bg-white/[0.035] p-5 transition
                  hover:border-yellow-500/20"
                >
                  <p className="text-xs text-gray-500">
                    {title}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-white">
                    {value}
                  </h3>
                </div>
              ))}

            </div>

            {/* Bottom status */}
            <div className="mt-5 flex items-center justify-between
            rounded-2xl border border-white/10 bg-white/[0.025]
            px-5 py-4">

              <div>
                <p className="text-xs text-gray-500">
                  AI systems
                </p>

                <p className="mt-1 text-sm font-medium">
                  Operating smoothly
                </p>
              </div>

              <div className="h-2.5 w-2.5 rounded-full bg-green-400
              shadow-[0_0_15px_rgba(74,222,128,0.8)]" />

            </div>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}