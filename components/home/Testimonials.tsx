"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rahul Sharma",
    company: "Startup Founder",
    review:
      "Aether AI Solutions delivered a premium website that exceeded our expectations. Fast, modern, and highly professional. The team communicated clearly throughout the project and delivered on time.",
  },
  {
    name: "Priya Mehta",
    company: "Healthcare Clinic",
    review:
      "Excellent communication and outstanding UI design. Our healthcare website now feels premium, loads much faster, and provides a much better experience for our patients.",
  },
  {
    name: "Aman Verma",
    company: "E-commerce Brand",
    review:
      "Highly recommended. The attention to detail, clean code, and overall development quality made the entire experience smooth and professional.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-20 text-center">
          <p className="mb-3 uppercase tracking-[0.3em] text-yellow-400">
            Testimonials
          </p>

          <h2 className="text-5xl font-bold text-white">
            What Our Clients Say
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Businesses trust Aether AI Solutions to build premium websites,
            AI applications, and modern digital experiences.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="group rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-8 backdrop-blur-xl transition-all duration-500 hover:border-yellow-500/40 hover:shadow-[0_0_40px_rgba(234,179,8,0.2)]"
            >
              {/* Stars */}
              <div className="mb-6 flex gap-1 text-2xl text-yellow-400">
                ⭐ ⭐ ⭐ ⭐ ⭐
              </div>

              {/* Review */}
              <p className="leading-8 text-gray-300">
                "{item.review}"
              </p>

              {/* User */}
              <div className="mt-8 flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 text-lg font-bold text-black">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {item.name}
                  </h3>

                  <p className="text-gray-500">
                    {item.company}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}