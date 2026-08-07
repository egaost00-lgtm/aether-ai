"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#050505] pt-40 pb-28 text-white">

      {/* Background */}
      <div className="absolute inset-0">

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 120,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-1/2 h-[1400px] w-[1400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-yellow-500/5"
        />

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />

        <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-[180px]" />

        <div className="absolute right-20 top-20 h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-20 px-8 lg:grid-cols-2">

        {/* LEFT */}

        <div>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-block rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-sm uppercase tracking-[0.35em] text-yellow-400"
          >
            AETHER AI SOLUTIONS
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-black leading-[0.88] tracking-[-0.05em] md:text-8xl"
          >
            Building
            <br />
            Intelligent
            <br />
            Digital Products
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 max-w-xl text-lg leading-8 text-gray-400"
          >
            We design and build AI-powered websites, SaaS platforms,
            automation systems, and premium digital experiences.
          </motion.p>

          <div className="mt-10 flex gap-5">

          <Button href="/contact">
  Start Project
</Button>

    <Link
  href="/portfolio"
  className="glass rounded-full px-8 py-4 text-center transition hover:scale-105"
>
  View Portfolio
</Link>

          </div>

          <div className="mt-12 flex gap-10">

            <div>
              <h3 className="text-3xl font-bold text-yellow-400">50+</h3>
              <p className="text-sm text-gray-400">Projects</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-yellow-400">98%</h3>
              <p className="text-sm text-gray-400">Satisfaction</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-yellow-400">24/7</h3>
              <p className="text-sm text-gray-400">Support</p>
            </div>

          </div>

        </div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -12, 0],
          }}
          transition={{
            duration: 1,
            y: {
              duration: 6,
              repeat: Infinity,
            },
          }}
          className="flex justify-end"
        >

          <div className="glass w-full max-w-[500px] rounded-[32px] border border-white/10 p-8">

            <div className="flex items-center justify-between">

              <h3 className="text-xl font-semibold">
                AI Dashboard
              </h3>

              <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs text-green-400">
                LIVE
              </span>

            </div>

            <div className="mt-8">

              <p className="text-sm text-gray-400">
                Project Growth
              </p>

              <div className="mt-4 h-3 rounded-full bg-white/10">

                <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600" />

              </div>

              <h2 className="mt-4 text-5xl font-bold text-yellow-400">
                +128%
              </h2>

            </div>

            <div className="mt-10 grid grid-cols-2 gap-4">

              {[
                ["Clients", "42"],
                ["Projects", "58"],
                ["AI Agents", "19"],
                ["Automation", "Active"],
              ].map(([title, value]) => (
                <div
                  key={title}
                  className="rounded-2xl bg-white/5 p-5"
                >
                  <p className="text-sm text-gray-400">{title}</p>
                  <h3 className="mt-2 text-3xl font-bold">
                    {value}
                  </h3>
                </div>
              ))}

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}