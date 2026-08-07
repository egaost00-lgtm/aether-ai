"use client";

// import { motion } from "framer-motion";

const stats = [
  {
    value: "50+",
    title: "Projects Completed",
  },
  {
    value: "98%",
    title: "Client Satisfaction",
  },
  {
    value: "24/7",
    title: "Support Available",
  },
  {
    value: "5+",
    title: "Years of Experience",
  },
];

export default function Stats() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-20 text-center">
          <p className="mb-3 uppercase tracking-[0.3em] text-yellow-400">
            Achievements
          </p>

          <h2 className="text-5xl font-black text-white">
            Trusted Results
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Numbers that reflect our dedication to building premium digital
            products and delivering exceptional client experiences.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.title}
         
              className="group rounded-3xl border border-white/10 bg-white/5 p-10 text-center transition-all duration-500 hover:border-yellow-400 hover:shadow-[0_0_60px_rgba(234,179,8,0.25)]"
            >
              <h3 className="text-5xl font-black text-yellow-400 transition group-hover:scale-110">
                {stat.value}
              </h3>

              <p className="mt-5 text-lg text-gray-300">
                {stat.title}
              </p>

              <div className="mx-auto mt-6 h-1 w-12 rounded-full bg-yellow-500 transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}