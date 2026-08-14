"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import WavingFlag from "@/components/home/WavingFlag";
export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white pt-32 pb-24 text-[#0b1220]">

      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">

        {/* Tricolor rotating ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 120,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-[45%] h-[1200px] w-[1200px]
          -translate-x-1/2 -translate-y-1/2 rounded-full
          border border-orange-500/[0.08]"
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(11,18,32,.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(11,18,32,.12) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />

        {/* Saffron glow */}
        <div
          className="absolute left-[-120px] top-[80px] h-[400px] w-[400px]
          rounded-full bg-orange-500/[0.10] blur-[160px]"
        />

        {/* Green glow */}
        <div
          className="absolute right-[-120px] bottom-[50px] h-[450px] w-[450px]
          rounded-full bg-green-500/[0.10] blur-[170px]"
        />

        {/* Center subtle glow */}
        <div
          className="absolute left-1/2 top-[45%] h-[600px] w-[600px]
          -translate-x-1/2 -translate-y-1/2 rounded-full
          bg-orange-500/[0.035] blur-[180px]"
        />

      </div>

      {/* ================= CONTENT ================= */}

      <div
        className="relative z-10 mx-auto grid max-w-7xl
        items-center gap-16 px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8"
      >

        {/* ================= LEFT ================= */}

        <div>

          {/* Independence Day Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
className="relative z-20 mb-7 inline-flex items-center gap-3
rounded-full
border border-white/60
bg-white/30
backdrop-blur-2xl
px-5 py-2.5
text-xs font-medium uppercase
tracking-[0.3em] text-[#0b1220]
shadow-[0_10px_40px_rgba(15,23,42,0.12)]
ring-1 ring-white/30
transition-all duration-300
hover:bg-white/40 hover:border-white/80">
            <span className="h-2 w-2 rounded-full bg-orange-500" />

            🇮🇳 Proudly Building AI Solutions for India
          </motion.div>

          {/* Heading */}
{/* India Flag Background */}
<motion.div
  aria-hidden="true"
className="pointer-events-none absolute left-[-270px] top-[-90px]
z-0 h-[1200px] w-[1600px] overflow-visible opacity-[0.90]"
  style={{
    transformOrigin: "left center",
  }}
  animate={{
    skewX: [0, 1.2, -1.2, 0.8, 0],
  }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  
<WavingFlag
  src="/india-flag-floating.png"
  className="h-full w-full object-cover translate-x-[-80px] scale-[1.3]"
/>
</motion.div>

<motion.h1
  initial={{ opacity: 0, y: 35 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.1 }}
  className="relative z-10 max-w-4xl text-6xl font-black leading-[0.9]
  tracking-[-0.055em] md:text-7xl lg:text-[88px]"
>
  <span
    className="bg-gradient-to-r from-orange-500 via-orange-300 to-white
    bg-clip-text text-transparent
    drop-shadow-[0_2px_8px_rgba(255,255,255,0.25)]
    [text-shadow:0_0_25px_rgba(255,165,0,0.18)]"
  >
    Building
  </span>

  <br />

  <span
    className="bg-gradient-to-r from-orange-300 via-white to-green-400
    bg-clip-text text-transparent
    drop-shadow-[0_2px_10px_rgba(255,255,255,0.3)]
    [text-shadow:0_0_25px_rgba(34,197,94,0.18)]"
  >
    Intelligent
  </span>

  <br />

  <span
    className="bg-gradient-to-r from-orange-500 via-white to-green-500
    bg-clip-text text-transparent
    drop-shadow-[0_2px_10px_rgba(255,255,255,0.3)]
    [text-shadow:0_0_25px_rgba(255,165,0,0.18)]"
  >
    Digital
  </span>

  <br />

  <span
    className="bg-gradient-to-r from-white via-green-400 to-green-700
    bg-clip-text text-transparent
    drop-shadow-[0_2px_10px_rgba(255,255,255,0.3)]
    [text-shadow:0_0_25px_rgba(34,197,94,0.22)]"
  >
    Products.
  </span>
</motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
className="
mt-8 max-w-xl
rounded-3xl
border border-white/25
bg-transparent
backdrop-blur-[2px]
px-7 py-6
text-base leading-8 text-[#0b1220]
md:text-lg
"
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
            className="relative z-20 mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button href="/contact">
              Start Your Project
            </Button>

            <Link
              href="/portfolio"
              className="rounded-full border border-gray-200
              bg-white px-8 py-4 text-center font-medium
              text-[#0b1220] shadow-sm transition
              hover:border-green-500/40
              hover:bg-green-50
              hover:text-green-700"
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
              <span className="h-7 w-7 rounded-full border-2 border-white bg-gray-700" />
              <span className="h-7 w-7 rounded-full border-2 border-white bg-gray-500" />
              <span className="h-7 w-7 rounded-full border-2 border-white bg-gray-600" />
            </div>

            <span>
              Building the future with AI
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

          {/* Tricolor glow */}
          <div
            className="absolute inset-0 rounded-[40px]
            bg-gradient-to-br from-orange-500/10
            via-transparent to-green-500/10
            blur-3xl"
          />
   

 
          {/* Dashboard */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
className="relative z-10 w-full max-w-[510px]
rounded-[32px]
border border-white/20
bg-black/20
p-6
shadow-[0_25px_80px_rgba(0,0,0,0.25)]
backdrop-blur-md
md:p-8"
          >

            {/* Header */}
            <div className="flex items-center justify-between">

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                  Aether Intelligence
                </p>

                <h3 className="mt-1 text-xl font-semibold text-white">
                  Growth Overview
                </h3>
              </div>

              <div
                className="flex items-center gap-2 rounded-full
                border border-green-500/20 bg-green-500/10
                px-3 py-1.5 text-xs text-green-400"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                Live
              </div>

            </div>

            {/* Main metric */}
            <div
              className="mt-9 rounded-2xl border border-white/10
              bg-black/20 p-6"
            >

              <div className="flex items-end justify-between">

                <div>
                  <p className="text-sm text-gray-500">
                    Project Performance
                  </p>

                  <h2
                    className="mt-2 text-5xl font-bold tracking-tight
                    text-orange-400"
                  >
                    +128%
                  </h2>
                </div>

                <span
                  className="mb-2 rounded-full bg-green-500/10
                  px-3 py-1 text-xs text-green-400"
                >
                  +24.8%
                </span>

              </div>

              {/* Graph */}
              <div className="mt-7 flex h-24 items-end gap-2 px-1">

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
                      className={`flex-1 rounded-t-md ${
                        index % 2 === 0
                          ? "bg-gradient-to-t from-orange-500/20 to-orange-400"
                          : "bg-gradient-to-t from-green-500/20 to-green-400"
                      }`}
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
                  hover:border-orange-500/20"
                >
                  <p className="text-xs text-white/70">
                    {title}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-white">
                    {value}
                  </h3>
                </div>
              ))}

            </div>

            {/* Bottom status */}
            <div
              className="mt-5 flex items-center justify-between
              rounded-2xl border border-white/10 bg-white/[0.025]
              px-5 py-4"
            >

              <div>
                <p className="text-xs text-gray-500">
                  AI systems
                </p>

                <p className="mt-1 text-sm font-medium text-white">
                  Operating smoothly
                </p>
              </div>

              <div
                className="h-2.5 w-2.5 rounded-full bg-green-400
                shadow-[0_0_15px_rgba(74,222,128,0.8)]"
              />

            </div>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}