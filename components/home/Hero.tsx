"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import AgenticBackground from "@/components/home/AgenticBackground";

/* =========================================================
   DATA
========================================================= */

const technologies = [
  "AI Agents",
  "AI Software",
  "Automation",
  "Data Intelligence",
];

type ProgressType = "complete" | "running" | "connected" | "ready";

type PipelineItem = {
  number: string;
  title: string;
  progress: string;
  status: string;
  type: ProgressType;
};

const pipeline: PipelineItem[] = [
  {
    number: "01",
    title: "Understand Request",
    progress: "100%",
    status: "Complete",
    type: "complete",
  },
  {
    number: "02",
    title: "AI Reasoning",
    progress: "100%",
    status: "Complete",
    type: "complete",
  },
  {
    number: "03",
    title: "Tool & API Execution",
    progress: "72%",
    status: "Running",
    type: "running",
  },
  {
    number: "04",
    title: "Data Intelligence",
    progress: "84%",
    status: "Connected",
    type: "connected",
  },
  {
    number: "05",
    title: "Automation",
    progress: "60%",
    status: "Ready",
    type: "ready",
  },
];

/* =========================================================
   MAIN HERO
========================================================= */

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050914] text-white">

      {/* ORIGINAL AI BACKGROUND */}
      <AgenticBackground />
      

      {/* DIWALI DEITY BACKGROUND */}
      <div
        className="pointer-events-none absolute inset-0 z-[5] bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/images/diwali-ram-darbar.webp')",
          backgroundPosition: "center right",
        }}
      />

      {/* FESTIVE FIREWORKS */}
      <FireworksBackground />

      {/* DIWALI ATMOSPHERE */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-[#050914]/95 via-[#080d18]/65 to-[#080d18]/15" />

      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-[#050914]/25 via-transparent to-[#050914]/95" />

      {/* GOLDEN LIGHTING */}
      <div className="pointer-events-none absolute -right-40 top-10 z-10 h-[600px] w-[600px] rounded-full bg-amber-400/[0.09] blur-[150px]" />

      <div className="pointer-events-none absolute -left-40 bottom-10 z-10 h-[400px] w-[500px] rounded-full bg-yellow-500/[0.05] blur-[130px]" />

      <div className="pointer-events-none absolute right-[12%] top-[20%] z-10 h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_30px_10px_rgba(251,191,36,0.2)]" />

      <div className="pointer-events-none absolute left-[42%] top-[35%] z-10 h-1.5 w-1.5 rounded-full bg-yellow-200 shadow-[0_0_25px_8px_rgba(250,204,21,0.15)]" />

      {/* MAIN CONTENT */}
      <div className="relative z-20 mx-auto min-h-[calc(100vh-84px)] max-w-[1400px] px-4 pb-32 pt-36 sm:px-6 sm:pt-44 lg:px-8 lg:pt-48">

        {/* LEFT CONTENT */}
        <div className="relative z-30 max-w-[600px] -translate-x-1 sm:-translate-x-3 lg:-translate-x-5">

          {/* BRAND LABEL */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-amber-300/30 bg-amber-400/[0.07] px-4 py-2.5 shadow-[0_0_30px_rgba(251,191,36,0.06)] backdrop-blur-xl"
          >
            <span className="text-lg text-amber-300">✦</span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-100 sm:text-xs">
              Aether AI Solutions
            </span>
          </motion.div>

          {/* HAPPY DIWALI HEADLINE */}
      <motion.h1
  initial={{ opacity: 0, y: 35 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9, delay: 0.1 }}
  className="text-[54px] font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl md:text-7xl lg:text-[82px]"
>
  <span>Happy</span>
  <br />
  <span className="bg-gradient-to-r from-amber-100 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
    Diwali!
  </span>
</motion.h1>

          {/* DIWALI MESSAGE */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-7 max-w-[510px] text-sm leading-7 text-white/80 sm:text-base sm:leading-8"
          >
            May the divine blessings of Lord Rama, Goddess Sita,
            Lakshmana and Lord Hanuman bring light, prosperity,
            happiness and success to your life and business.
          </motion.p>

          {/* TECHNOLOGIES */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-7 flex flex-wrap items-center gap-x-2 gap-y-2 text-xs tracking-wide text-white/70 sm:text-sm"
          >
            {technologies.map((item, index) => (
              <span key={item} className="flex items-center">
                {item}
                {index < technologies.length - 1 && (
                  <span className="mx-2 text-amber-400">·</span>
                )}
              </span>
            ))}
          </motion.div>

          {/* GOLD DIVIDER */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 210, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="mt-7 h-px bg-gradient-to-r from-amber-200 via-yellow-500 to-transparent"
          />

          {/* CTA BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button href="/contact">
              Build with Aether AI →
            </Button>

            <Link
              href="/portfolio"
              className="rounded-full border border-amber-200/30 bg-white/[0.035] px-8 py-4 text-center text-sm font-medium text-white backdrop-blur-xl transition-all duration-300 hover:border-amber-300/70 hover:bg-amber-400/10 hover:text-amber-100"
            >
              Explore AI Products →
            </Link>
          </motion.div>
        </div>
{/* CENTRE HERO DIYA */}
<motion.div
  initial={{ opacity: 0, scale: 0.7 }}
  animate={{
    opacity: 1,
    scale: 1,
    y: [0, -8, 0],
  }}
  transition={{
    opacity: { duration: 1 },
    scale: { duration: 1 },
    y: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }}
  className="pointer-events-none absolute left-1/2 top-[48%] z-[25] hidden h-44 w-56 -translate-x-1/2 -translate-y-1/2 xl:block"
>
  <div className="absolute inset-0 rounded-full bg-amber-400/20 blur-[65px]" />

  <FestiveDiya className="relative h-full w-full drop-shadow-[0_0_35px_rgba(255,190,70,0.7)]" />
</motion.div>
        {/* AI AGENT COMMAND CENTRE */}
        <motion.div
          initial={{ opacity: 0, x: 70, y: 20, scale: 0.94 }}
          animate={{ opacity: 1, x: 0, y: [0, -8, 0], scale: 1 }}
          transition={{
            opacity: { duration: 0.8, delay: 0.4 },
            x: { duration: 0.8, delay: 0.4, ease: "easeOut" },
            scale: { duration: 0.8, delay: 0.4, ease: "easeOut" },
            y: {
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.2,
            },
          }}
          className="pointer-events-none absolute right-[5%] top-[55%] z-30 hidden w-[390px] -translate-y-1/2 xl:block 2xl:right-[6%] 2xl:w-[410px]"
        >
          <div className="absolute -inset-12 rounded-[50px] bg-amber-400/[0.06] blur-[75px]" />

          <div className="absolute -right-10 top-10 h-40 w-40 rounded-full bg-blue-500/[0.05] blur-[60px]" />

          <div className="relative overflow-hidden rounded-[26px] border border-amber-200/[0.18] bg-[#080b12]/75 shadow-[0_35px_100px_rgba(0,0,0,0.7)] backdrop-blur-2xl">

            <div className="absolute left-[12%] right-[12%] top-0 h-px bg-gradient-to-r from-transparent via-amber-300/80 to-transparent" />

            {/* HEADER */}
            <div className="px-6 pt-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,.9)]" />

                  <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-amber-300">
                    Aether Engineering
                  </span>
                </div>

                <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-[8px] font-semibold text-emerald-300">
                  ● Live
                </span>
              </div>

              <div className="mt-3 flex items-end justify-between">
                <div>
                  <h3 className="text-[25px] font-bold leading-none tracking-[-0.04em] text-white">
                    AI Agent Command Centre
                  </h3>

                  <p className="mt-1.5 text-[10px] text-white/45">
                    Think → Act → Automate
                  </p>
                </div>

                <span className="mb-0.5 text-[8px] font-semibold uppercase tracking-[0.18em] text-white/30">
                  05 AGENTS
                </span>
              </div>
            </div>

            <div className="mx-6 mt-5 h-px bg-white/10" />

            {/* PIPELINE */}
            <div className="mt-5 space-y-2.5 px-6">
              {pipeline.map((item) => (
                <ProgressRow key={item.number} {...item} />
              ))}
            </div>

            {/* AGENT ARCHITECTURE */}
            <div className="mx-6 mt-5">
              <div className="rounded-[17px] border border-white/10 bg-white/[0.025] p-4">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/65">
                    Agent Architecture
                  </span>

                  <span className="text-[8px] font-semibold uppercase tracking-[0.15em] text-blue-300/80">
                    AI AGENT STACK
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  {["AI AGENT", "TOOLS", "DATA", "ACTION"].map(
                    (item, index) => (
                      <div key={item} className="flex items-center">
                        <span className="rounded-lg border border-amber-400/20 bg-amber-400/[0.07] px-3 py-2 text-[8px] font-bold text-amber-300">
                          {item}
                        </span>

                        {index < 3 && (
                          <span className="mx-1.5 text-[9px] text-blue-300/70">
                            →
                          </span>
                        )}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* FOOTER */}
            <div className="mt-4 flex items-center justify-between border-t border-white/[0.07] px-6 py-4">
              <span className="text-[8px] text-white/30">
                AI agent execution pipeline
              </span>

              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-300 shadow-[0_0_8px_rgba(250,204,21,.8)]" />

                <span className="text-[8px] font-semibold text-amber-300">
                  OPERATIONAL
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* DIWALI DIYAS */}
      <DiwaliDiyas />

      {/* BOTTOM FEATURE STRIP */}
      <div className="absolute bottom-0 left-0 right-0 z-40 border-t border-amber-200/15 bg-[#050914]/85 backdrop-blur-xl">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          <Feature icon="✦" title="AI Agents" />
          <Feature icon="⌘" title="AI Software" />
          <Feature icon="◈" title="Automation" />
          <Feature icon="↗" title="Data Intelligence" />
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
}: PipelineItem) {
  const statusClass: Record<ProgressType, string> = {
    complete: "text-emerald-300",
    running: "text-amber-300",
    connected: "text-blue-300",
    ready: "text-blue-200",
  };

  const barClass: Record<ProgressType, string> = {
    complete: "bg-emerald-300",
    running: "bg-amber-300",
    connected: "bg-amber-300",
    ready: "bg-amber-300",
  };

  return (
    <div className="rounded-[15px] border border-white/[0.09] bg-white/[0.025] px-3.5 py-3">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/25 text-[8px] font-bold text-blue-200">
          {number}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-3">
            <span className="truncate text-[10px] font-semibold text-white/90">
              {title}
            </span>

            <span className={`shrink-0 text-[8px] font-semibold ${statusClass[type]}`}>
              {status}
            </span>
          </div>

          <div className="mt-2 h-[4px] overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: progress }}
              transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
              className={`h-full rounded-full ${barClass[type]}`}
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
    <div className="flex items-center gap-3 border-r border-white/10 px-4 py-4 last:border-r-0 sm:px-6 md:px-8">
      <span className="text-xl text-amber-400">{icon}</span>

      <span className="text-xs font-medium text-white/80 sm:text-sm">
        {title}
      </span>
    </div>
  );
}

/* =========================================================
   ANIMATED BRASS DIYA
========================================================= */

function FestiveDiya({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 180 125"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="diyaBrass" x1="20" y1="70" x2="150" y2="110">
          <stop stopColor="#FFF0B5" />
          <stop offset=".25" stopColor="#D99A36" />
          <stop offset=".55" stopColor="#75400F" />
          <stop offset=".8" stopColor="#E9B95F" />
          <stop offset="1" stopColor="#6A390D" />
        </linearGradient>

        <radialGradient id="diyaGlow">
          <stop stopColor="#FFC45D" stopOpacity=".5" />
          <stop offset="1" stopColor="#FFC45D" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="90" cy="82" rx="75" ry="43" fill="url(#diyaGlow)" />

      <motion.path
        d="M90 8 C112 34 107 53 90 65 C73 53 68 34 90 8Z"
        fill="#FF9B32"
        style={{ transformOrigin: "90px 65px" }}
        animate={{
          scaleY: [1, 1.12, 0.94, 1],
          rotate: [0, 2, -2, 0],
        }}
        transition={{ duration: 1.3, repeat: Infinity }}
      />

      <motion.path
        d="M90 29 C101 45 97 55 90 60 C83 55 79 45 90 29Z"
        fill="#FFF4C6"
        animate={{ opacity: [0.8, 1, 0.85, 1] }}
        transition={{ duration: 0.9, repeat: Infinity }}
      />

      <path
        d="M22 76 Q90 112 158 76 L142 101 Q90 125 38 101Z"
        fill="url(#diyaBrass)"
        stroke="#F5D58B"
        strokeWidth="2.5"
      />

      <path d="M22 76 Q90 98 158 76" stroke="#FFF0B5" strokeWidth="3" />

      <path d="M42 94 Q90 112 138 94" stroke="#EBC477" strokeWidth="2" />

      <ellipse cx="90" cy="105" rx="38" ry="5" fill="#59330E" opacity=".7" />
    </svg>
  );
}

/* =========================================================
   DIWALI DIYA DECORATION
========================================================= */

function DiwaliDiyas() {
  return (
    <div className="pointer-events-none absolute bottom-28 left-1/2 z-[26] flex -translate-x-1/2 items-end justify-center gap-1 sm:gap-3">

      {[0, 1, 2].map((item) => (
        <motion.div
          key={item}
          animate={{ y: [0, -4, 0] }}
          transition={{
            duration: 2.5 + item * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: item * 0.2,
          }}
          className="h-16 w-20 sm:h-20 sm:w-24 drop-shadow-[0_0_20px_rgba(245,158,11,0.4)]"
        >
          <FestiveDiya className="h-full w-full" />
        </motion.div>
      ))}

    </div>
  );
}

/* =========================================================
   FIREWORK BURST
========================================================= */

function FirecrackerBurst({
  left,
  top,
  size = 150,
  delay = 0,
  color = "#F5BD54",
}: {
  left: string;
  top: string;
  size?: number;
  delay?: number;
  color?: string;
}) {
  const sparks = Array.from({ length: 32 }, (_, index) => {
    const angle = (index * 360) / 32;
    const radians = (angle * Math.PI) / 180;
    const distance = size * (0.32 + (index % 3) * 0.08);

    return {
      id: index,
      angle,
      x: Math.cos(radians) * distance,
      y: Math.sin(radians) * distance,
    };
  });

  return (
    <div
      className="pointer-events-none absolute"
      style={{ left, top, width: 0, height: 0 }}
    >
      {/* ROCKET */}
      <motion.div
        className="absolute"
        style={{ left: -2, top: 155 }}
        animate={{
          y: [0, -155, -155, -155],
          opacity: [0, 1, 0, 0],
        }}
        transition={{
          duration: 6,
          delay,
          repeat: Infinity,
          times: [0, 0.27, 0.34, 1],
          ease: "easeOut",
        }}
      >
        <span
          className="block h-3 w-1.5 rounded-full"
          style={{
            background: "#FFF8D8",
            boxShadow: `0 0 10px 4px ${color}`,
          }}
        />

        <span className="absolute left-0 top-2 h-20 w-1 bg-gradient-to-b from-amber-200 to-transparent" />
      </motion.div>

      {/* EXPLOSION FLASH */}
      <motion.div
        className="absolute rounded-full"
        style={{
          left: -5,
          top: -5,
          width: 10,
          height: 10,
          background: "#FFF7D8",
          boxShadow: `0 0 25px 12px ${color}`,
        }}
        animate={{
          scale: [0, 0, 3, 0],
          opacity: [0, 0, 0.9, 0],
        }}
        transition={{
          duration: 6,
          delay,
          repeat: Infinity,
          times: [0, 0.27, 0.31, 0.43],
        }}
      />

      {/* RADIAL SPARKS */}
      {sparks.map((spark) => (
        <motion.span
          key={spark.id}
          className="absolute block rounded-full"
          style={{
            left: 0,
            top: 0,
            width: spark.id % 4 === 0 ? 3 : 2,
            height: spark.id % 4 === 0 ? 12 : 8,
            transform: `translate(-50%, -50%) rotate(${spark.angle}deg)`,
            transformOrigin: "center center",
            background: `linear-gradient(to bottom, #FFFBEA, ${color}, transparent)`,
            boxShadow: `0 0 5px ${color}`,
          }}
          animate={{
            x: [0, 0, spark.x, spark.x * 1.15],
            y: [0, 0, spark.y, spark.y + 28],
            opacity: [0, 0, 1, 0],
            scale: [0.2, 0.2, 1, 0.2],
          }}
          transition={{
            duration: 6,
            delay,
            repeat: Infinity,
            times: [0, 0.27, 0.48, 0.72],
            ease: "easeOut",
          }}
        />
      ))}

      {/* FALLING EMBERS */}
      {sparks.slice(0, 10).map((spark) => (
        <motion.span
          key={`ember-${spark.id}`}
          className="absolute h-1 w-1 rounded-full"
          style={{
            left: 0,
            top: 0,
            background: "#FFF1B5",
            boxShadow: `0 0 7px ${color}`,
          }}
          animate={{
            x: [spark.x, spark.x * 1.15],
            y: [spark.y, spark.y + 65],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            delay: delay + 2.5,
            repeat: Infinity,
            repeatDelay: 4,
          }}
        />
      ))}
    </div>
  );
}

/* =========================================================
   FIREWORKS BACKGROUND
========================================================= */

function FireworksBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[11] overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(245,190,90,0.07),transparent_65%)]" />

      <FirecrackerBurst left="12%" top="20%" size={165} delay={0} color="#EAB85C" />

      <FirecrackerBurst left="38%" top="12%" size={125} delay={1.5} color="#FFF0C0" />

      <FirecrackerBurst left="66%" top="17%" size={175} delay={3} color="#F3BD62" />

      <FirecrackerBurst left="89%" top="29%" size={145} delay={0.8} color="#FFE0A0" />

      <FirecrackerBurst left="27%" top="65%" size={115} delay={3.8} color="#EAB85C" />

      <FirecrackerBurst left="77%" top="63%" size={145} delay={2.2} color="#FFF0C0" />
    </div>
  );
}
