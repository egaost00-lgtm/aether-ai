"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rahul Sharma",
    company: "Startup Founder",
    initials: "RS",
    review:
      "Aether AI Solutions delivered a premium website that exceeded our expectations. Fast, modern, and highly professional. The communication throughout the project was excellent.",
  },
  {
    name: "Priya Mehta",
    company: "Healthcare Clinic",
    initials: "PM",
    review:
      "Excellent communication and outstanding UI design. The website now feels premium, performs much better, and provides a significantly improved experience for our patients.",
  },
  {
    name: "Aman Verma",
    company: "E-commerce Brand",
    initials: "AV",
    review:
      "Highly recommended. The attention to detail, clean development, and overall quality made the entire experience smooth and professional.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/[0.04] blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-yellow-400">
            Client Experiences
          </p>

          <h2 className="text-5xl font-black tracking-tight text-white md:text-6xl">
            Built With Trust.
            <br />
            <span className="text-yellow-400">
              Backed By Results.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            We believe great digital products are built through
            collaboration, communication, and attention to detail.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid gap-6 lg:grid-cols-3">

          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-8 backdrop-blur-xl transition-all duration-500 hover:border-yellow-500/40 hover:bg-white/[0.06] hover:shadow-[0_20px_60px_rgba(234,179,8,0.14)]"
            >

              {/* Hover Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-yellow-500/10 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

              {/* Quote */}
              <div className="relative flex items-start justify-between">

                <span className="text-6xl font-black leading-none text-yellow-500/30">
                  “
                </span>

                <div className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-3 py-1 text-xs font-semibold text-yellow-400">
                  5.0 ★
                </div>

              </div>

              {/* Review */}
              <p className="relative mt-4 text-[15px] leading-8 text-gray-300">
                {item.review}
              </p>

              {/* Divider */}
              <div className="my-8 h-px bg-white/10" />

              {/* Client */}
              <div className="relative flex items-center gap-4">

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-yellow-500/30 bg-yellow-500/10 text-sm font-bold text-yellow-400 transition duration-500 group-hover:bg-yellow-500 group-hover:text-black">
                  {item.initials}
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {item.company}
                  </p>
                </div>

              </div>

              {/* Bottom Accent */}
              <div className="relative mt-7 h-px w-10 bg-yellow-500 transition-all duration-500 group-hover:w-full" />

            </motion.article>
          ))}

        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 text-center"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
            Your project could be next
          </p>

          <p className="mt-3 text-lg text-gray-300">
            Let's build something exceptional together.
          </p>
        </motion.div>

      </div>
    </section>
  );
}