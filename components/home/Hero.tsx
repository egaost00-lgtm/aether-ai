"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const technologies = [
  "AI",
  "Web",
  "Mobile",
  "Automation",
  "Real Impact",
];

type ProgressType =
  | "complete"
  | "running"
  | "connected"
  | "ready";

const pipeline: {
  number: string;
  title: string;
  progress: string;
  status: string;
  type: ProgressType;
}[] = [
  {
    number: "01",
    title: "Product Strategy",
    progress: "100%",
    status: "Complete",
    type: "complete",
  },
  {
    number: "02",
    title: "UI / UX Engineering",
    progress: "100%",
    status: "Complete",
    type: "complete",
  },
  {
    number: "03",
    title: "AI & Application Layer",
    progress: "72%",
    status: "Running",
    type: "running",
  },
  {
    number: "04",
    title: "API & Data Systems",
    progress: "84%",
    status: "Connected",
    type: "connected",
  },
  {
    number: "05",
    title: "Cloud Deployment",
    progress: "60%",
    status: "Ready",
    type: "ready",
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#070503] text-white">

      {/* =====================================================
          BACKGROUND ARTWORK
          ===================================================== */}

      <div className="absolute inset-0">
        <img
          src="/ganesh-ai-hero.png"
          alt="Ganesh Chaturthi inspired AI artwork"
          className="h-full w-full object-cover object-center"
        />

        {/* Overall readability */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Left readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050403]/85 via-[#050403]/30 to-transparent" />

        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050403]/95 via-transparent to-[#050403]/10" />

        {/* Very subtle cinematic vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_45%,transparent_20%,rgba(0,0,0,0.28)_100%)]" />
      </div>

      {/* =====================================================
          NAVBAR
          ===================================================== */}

      <header className="relative z-50 px-4 pt-4 sm:px-6 lg:px-8">
        <div
          className="
            mx-auto
            flex
            h-[68px]
            max-w-7xl
            items-center
            justify-between
            rounded-2xl
            border
            border-white/10
            bg-black/45
            px-4
            shadow-2xl
            backdrop-blur-xl
            sm:px-6
          "
        >

          {/* Logo */}
          <Link
            href="/"
            className="flex shrink-0 items-center gap-3"
          >
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border
                border-yellow-400/50
                bg-black/40
                shadow-[0_0_25px_rgba(250,204,21,0.08)]
              "
            >
              <span className="text-lg font-black text-yellow-400">
                A
              </span>
            </div>

            <span className="hidden text-sm font-semibold tracking-tight text-white sm:block">
              Aether AI Solutions
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden items-center gap-7 lg:flex">

            <Link
              href="/"
              className="
                relative
                py-2
                text-sm
                font-medium
                text-white
                transition-colors
                hover:text-yellow-300
              "
            >
              Home

              <span
                className="
                  absolute
                  bottom-0
                  left-0
                  h-[2px]
                  w-full
                  rounded-full
                  bg-yellow-400
                  shadow-[0_0_10px_rgba(250,204,21,0.7)]
                "
              />
            </Link>

            <Link
              href="/about"
              className="
                py-2
                text-sm
                font-medium
                text-white/70
                transition-colors
                hover:text-yellow-300
              "
            >
              About
            </Link>

            <Link
              href="/portfolio"
              className="
                py-2
                text-sm
                font-medium
                text-white/70
                transition-colors
                hover:text-yellow-300
              "
            >
              Projects
            </Link>

            <Link
              href="/services"
              className="
                py-2
                text-sm
                font-medium
                text-white/70
                transition-colors
                hover:text-yellow-300
              "
            >
              Services
            </Link>

            <Link
              href="/client-portal"
              className="
                py-2
                text-sm
                font-medium
                text-white/70
                transition-colors
                hover:text-yellow-300
              "
            >
              Client Portal
            </Link>

            <Link
              href="/contact"
              className="
                py-2
                text-sm
                font-medium
                text-white/70
                transition-colors
                hover:text-yellow-300
              "
            >
              Contact
            </Link>

          </nav>

          {/* CTA */}
          <Button href="/contact">
            Let's Build →
          </Button>

        </div>
      </header>

      {/* =====================================================
          MAIN HERO AREA
          ===================================================== */}

      <div
        className="
          relative
          z-20
          mx-auto
          min-h-[calc(100vh-84px)]
          max-w-[1400px]
          px-4
          pb-32
          pt-14
          sm:px-6
          lg:px-8
        "
      >

        {/* =================================================
            LEFT CONTENT
            ================================================= */}

        <div
          className="
            relative
            z-30
            max-w-[600px]
            -translate-x-3
            sm:-translate-x-5
            lg:-translate-x-8
          "
        >

          {/* Festival label */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              mb-6
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-yellow-400/25
              bg-black/30
              px-4
              py-2.5
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.3em]
              text-yellow-300
              backdrop-blur-md
              sm:px-5
              sm:text-[10px]
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-yellow-400
                shadow-[0_0_12px_rgba(250,204,21,.9)]
              "
            />

            TRADITION

            <span className="text-yellow-700">
              ×
            </span>

            TECHNOLOGY

            <span className="text-yellow-700">
              ×
            </span>

            A BRIGHTER TOMORROW
          </motion.div>

          {/* Brand Tagline */}
<motion.h1
  initial={{ opacity: 0, y: 35 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.8,
    delay: 0.1,
  }}
  className="
    text-[52px]
    font-black
    leading-[0.92]
    tracking-[-0.05em]
    text-white
    sm:text-6xl
    md:text-7xl
    lg:text-[78px]
  "
>
  Build smarter.
  <br />
  Automate
  <br />
  <span
    className="
      bg-gradient-to-r
      from-yellow-100
      via-yellow-300
      to-yellow-500
      bg-clip-text
      text-transparent
    "
  >
    with AI.
  </span>
</motion.h1>

   

          {/* Technology line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.35,
            }}
            className="
              mt-5
              flex
              flex-wrap
              items-center
              gap-x-2
              gap-y-1
              text-sm
              tracking-wide
              text-white/70
            "
          >
            {technologies.map((item, index) => (
              <span
                key={item}
                className="flex items-center"
              >
                {item}

                {index < technologies.length - 1 && (
                  <span className="mx-2 text-yellow-400">
                    ·
                  </span>
                )}
              </span>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{
              width: 0,
              opacity: 0,
            }}
            animate={{
              width: 210,
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.45,
            }}
            className="
              mt-6
              h-px
              bg-gradient-to-r
              from-yellow-200
              via-yellow-500
              to-transparent
            "
          />

          {/* =================================================
              GANESH MESSAGE
              ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.5,
            }}
            className="mt-6"
          >

            <p
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-yellow-300
              "
            >
              Aether AI Solutions celebrates
            </p>

            <h2
              className="
                mt-2
                font-serif
                text-4xl
                font-bold
                leading-[0.95]
                text-yellow-300
                sm:text-5xl
              "
            >
              Happy Ganesh Chaturthi
            </h2>

            <p
              className="
                mt-3
                max-w-md
                text-sm
                leading-6
                text-white/70
                md:text-base
              "
            >
              May Lord Ganesha guide us with wisdom,
              remove obstacles, and inspire every new
              beginning with innovation and purpose.
            </p>

          </motion.div>

          {/* =================================================
              CTA BUTTONS
              ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.6,
            }}
            className="
              mt-7
              flex
              flex-col
              gap-3
              sm:flex-row
            "
          >

            <Button href="/contact">
              Get in Touch →
            </Button>

            <Link
              href="/portfolio"
              className="
                rounded-full
                border
                border-white/25
                bg-black/30
                px-8
                py-4
                text-center
                text-sm
                font-medium
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-yellow-400/50
                hover:bg-yellow-400/10
                hover:text-yellow-200
              "
            >
              Explore Our Work →
            </Link>

          </motion.div>

        </div>

      {/* =================================================
    FLOATING PRODUCT ENGINE
    ================================================= */}

<motion.div
  initial={{
    opacity: 0,
    x: 70,
    y: 20,
    scale: 0.94,
  }}
  animate={{
    opacity: 1,
    x: 0,
    y: [0, -8, 0],
    scale: 1,
  }}
  transition={{
    opacity: {
      duration: 0.8,
      delay: 0.4,
    },
    x: {
      duration: 0.8,
      delay: 0.4,
      ease: "easeOut",
    },
    scale: {
      duration: 0.8,
      delay: 0.4,
      ease: "easeOut",
    },
    y: {
      duration: 4.5,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 1.2,
    },
  }}
className="
  pointer-events-none
  absolute
  right-[5%]
  top-[48%]
  z-30
  hidden
  w-[390px]
  -translate-y-1/2
  xl:block
  2xl:right-[6%]
  2xl:w-[410px]
"
>
  {/* Floating ambient glow */}
  <div
    className="
      absolute
      -inset-12
      rounded-[50px]
      bg-yellow-400/[0.045]
      blur-[70px]
    "
  />

  {/* Secondary blue glow */}
  <div
    className="
      absolute
      -right-10
      top-10
      h-40
      w-40
      rounded-full
      bg-blue-500/[0.04]
      blur-[60px]
    "
  />

  {/* =================================================
      MAIN GLASS CARD
      ================================================= */}

  <div
    className="
      relative
      overflow-hidden
      rounded-[26px]
      border
      border-white/[0.16]
      bg-[#080706]/60
      shadow-[0_35px_100px_rgba(0,0,0,0.65)]
      backdrop-blur-2xl
    "
  >

    {/* Premium top edge */}
    <div
      className="
        absolute
        left-[12%]
        right-[12%]
        top-0
        h-px
        bg-gradient-to-r
        from-transparent
        via-yellow-300/80
        to-transparent
      "
    />

    {/* =================================================
        HEADER
        ================================================= */}

    <div className="px-6 pt-5">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-2.5">

          <span
            className="
              h-2
              w-2
              rounded-full
              bg-emerald-400
              shadow-[0_0_14px_rgba(52,211,153,.9)]
            "
          />

          <span
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.28em]
              text-yellow-300
            "
          >
            Aether Engineering
          </span>

        </div>

        <span
          className="
            rounded-full
            border
            border-emerald-400/30
            bg-emerald-400/10
            px-3
            py-1.5
            text-[8px]
            font-semibold
            text-emerald-300
          "
        >
          ● Live
        </span>

      </div>

      <div className="mt-3 flex items-end justify-between">

        <div>

          <h3
            className="
              text-[25px]
              font-bold
              leading-none
              tracking-[-0.04em]
              text-white
            "
          >
            Product Engine
          </h3>

          <p className="mt-1.5 text-[10px] text-white/45">
            From concept to production
          </p>

        </div>

        <span
          className="
            mb-0.5
            text-[8px]
            font-semibold
            uppercase
            tracking-[0.18em]
            text-white/30
          "
        >
          05 STAGES
        </span>

      </div>

    </div>

    {/* Divider */}
    <div className="mx-6 mt-5 h-px bg-white/10" />

    {/* =================================================
        PIPELINE
        ================================================= */}

    <div className="mt-5 space-y-2.5 px-6">

      {pipeline.map((item) => (
        <ProgressRow
          key={item.number}
          number={item.number}
          title={item.title}
          progress={item.progress}
          status={item.status}
          type={item.type}
        />
      ))}

    </div>

    {/* =================================================
        SYSTEM ARCHITECTURE
        ================================================= */}

    <div className="mx-6 mt-5">

      <div
        className="
          rounded-[17px]
          border
          border-white/10
          bg-white/[0.025]
          p-4
        "
      >

        <div className="mb-3 flex items-center justify-between">

          <span
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-white/65
            "
          >
            System Architecture
          </span>

          <span
            className="
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.15em]
              text-blue-300/80
            "
          >
            AETHER STACK
          </span>

        </div>

        <div className="flex items-center justify-between">

          {["AI", "API", "DATA", "CLOUD"].map(
            (item, index) => (
              <div
                key={item}
                className="flex items-center"
              >

                <span
                  className="
                    rounded-lg
                    border
                    border-yellow-400/20
                    bg-yellow-400/[0.07]
                    px-3
                    py-2
                    text-[8px]
                    font-bold
                    text-yellow-300
                  "
                >
                  {item}
                </span>

                {index < 3 && (
                  <span
                    className="
                      mx-1.5
                      text-[9px]
                      text-blue-300/70
                    "
                  >
                    →
                  </span>
                )}

              </div>
            )
          )}

        </div>

      </div>

    </div>

    {/* =================================================
        FOOTER
        ================================================= */}

    <div
      className="
        mt-4
        flex
        items-center
        justify-between
        border-t
        border-white/[0.07]
        px-6
        py-4
      "
    >

      <span className="text-[8px] text-white/30">
        Intelligent systems pipeline
      </span>

      <div className="flex items-center gap-2">

        <span
          className="
            h-1.5
            w-1.5
            rounded-full
            bg-yellow-300
            shadow-[0_0_8px_rgba(250,204,21,.8)]
          "
        />

        <span
          className="
            text-[8px]
            font-semibold
            text-yellow-300
          "
        >
          OPERATIONAL
        </span>

      </div>

    </div>

  </div>

</motion.div>

      </div>

      {/* =====================================================
          BOTTOM FEATURE STRIP
          ===================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          z-40
          border-t
          border-white/10
          bg-black/60
          backdrop-blur-xl
        "
      >

        <div
          className="
            mx-auto
            grid
            max-w-7xl
            grid-cols-2
            md:grid-cols-4
          "
        >

          <Feature
            icon="✦"
            title="AI Solutions"
          />

          <Feature
            icon="⌘"
            title="Web & Mobile"
          />

          <Feature
            icon="◈"
            title="Automation"
          />

          <Feature
            icon="↗"
            title="Real-World Impact"
          />

        </div>

      </div>

    </section>
  );
}

/* =========================================================
   PROGRESS ROW
   ========================================================= */

function ProgressRow({
  number,
  title,
  progress,
  status,
  type,
}: {
  number: string;
  title: string;
  progress: string;
  status: string;
  type: ProgressType;
}) {
  const statusClass: Record<ProgressType, string> = {
    complete: "text-emerald-300",
    running: "text-yellow-300",
    connected: "text-blue-300",
    ready: "text-blue-200",
  };

  const barClass: Record<ProgressType, string> = {
    complete: "bg-emerald-300",
    running: "bg-yellow-300",
    connected: "bg-yellow-300",
    ready: "bg-yellow-300",
  };

  return (
    <div
      className="
        rounded-[15px]
        border
        border-white/[0.09]
        bg-white/[0.025]
        px-3.5
        py-3
      "
    >
      <div className="flex items-center gap-3">

        {/* Number */}
        <div
          className="
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-xl
            border
            border-white/10
            bg-black/25
            text-[8px]
            font-bold
            text-blue-200
          "
        >
          {number}
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">

          <div className="flex items-center justify-between gap-3">

            <span
              className="
                truncate
                text-[10px]
                font-semibold
                text-white/90
              "
            >
              {title}
            </span>

            <span
              className={`
                shrink-0
                text-[8px]
                font-semibold
                ${statusClass[type]}
              `}
            >
              {status}
            </span>

          </div>

          {/* Progress */}
          <div
            className="
              mt-2
              h-[4px]
              overflow-hidden
              rounded-full
              bg-white/10
            "
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: progress }}
              transition={{
                duration: 1.2,
                delay: 0.7,
                ease: "easeOut",
              }}
              className={`
                h-full
                rounded-full
                ${barClass[type]}
              `}
            />
          </div>

        </div>

      </div>
    </div>
  );
}

/* =========================================================
   FEATURE ITEM
   ========================================================= */

function Feature({
  icon,
  title,
}: {
  icon: string;
  title: string;
}) {
  return (
    <div
      className="
        flex
        items-center
        gap-3
        border-r
        border-white/10
        px-4
        py-4
        last:border-r-0
        sm:px-6
        md:px-8
      "
    >

      <span className="text-xl text-yellow-400">
        {icon}
      </span>

      <span
        className="
          text-xs
          font-medium
          text-white/80
          sm:text-sm
        "
      >
        {title}
      </span>

    </div>
  );
}