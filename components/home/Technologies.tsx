"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const tech = [
  { name: "Next.js", logo: "/logos/nextjs.svg" },
  { name: "React", logo: "/logos/react.svg" },
  { name: "TypeScript", logo: "/logos/typescript.svg" },
  { name: "Tailwind CSS", logo: "/logos/tailwind.svg" },
  { name: "Node.js", logo: "/logos/nodejs.svg" },
  { name: "Supabase", logo: "/logos/supabase.svg" },
  { name: "Firebase", logo: "/logos/firebase.svg" },
  { name: "OpenAI", logo: "/logos/openai.svg" },
  { name: "Gemini AI", logo: "/logos/gemini.svg" },
  { name: "Vercel", logo: "/logos/vercel.svg" },
  { name: "GitHub", logo: "/logos/github.svg" },
  { name: "Figma", logo: "/logos/figma.svg" },
];

export default function Technologies() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-20 text-center">
          <p className="mb-3 uppercase tracking-[0.3em] text-yellow-400">
            Technologies
          </p>

          <h2 className="text-5xl font-black text-white">
            Technologies We Build With
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            We build modern websites, SaaS platforms, AI applications,
            automation systems and scalable cloud solutions using
            industry-leading technologies.
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {tech.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-[0_0_60px_rgba(234,179,8,0.35)]"
            >
              {/* Logo */}
              <div className="mb-8 flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/5 transition-all duration-500 group-hover:scale-110 group-hover:bg-yellow-500/10 group-hover:shadow-[0_0_30px_rgba(234,179,8,0.35)]">
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={60}
                    height={60}
                    className="h-14 w-14 object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                  />
                </div>
              </div>

              {/* Name */}
              <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-yellow-400">
                {item.name}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-7 text-gray-400">
                Modern technology powering secure,
                scalable and high-performance digital products.
              </p>

              {/* Accent Line */}
              <div className="mt-6 h-1 w-12 rounded-full bg-yellow-500 transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}