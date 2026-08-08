"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Mail, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Something went wrong");
      }

      setStatus("success");

      setForm({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-32"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/5 blur-[180px]" />

      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2 text-sm uppercase tracking-[0.25em] text-yellow-400">
            <Sparkles size={15} />
            Start a Project
          </div>

          <h2 className="text-5xl font-black tracking-tight text-white md:text-6xl">
            Let's build something
            <br />
            <span className="text-yellow-400">exceptional.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Have an idea, business, or digital product in mind?
            Tell us what you're building and let's turn your vision
            into reality.
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-2xl sm:p-10 md:p-14"
        >

          {/* Top Glow */}
          <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

          {/* Success */}
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-10 flex items-start gap-4 rounded-2xl border border-green-500/30 bg-green-500/10 p-6"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                <CheckCircle2 size={22} />
              </div>

              <div>
                <h3 className="text-lg font-bold text-green-400">
                  Message sent successfully
                </h3>

                <p className="mt-1 text-sm leading-6 text-gray-400">
                  Thank you for reaching out to Aether AI Solutions.
                  Our team will review your project and get back to you
                  within 24 hours.
                </p>
              </div>
            </motion.div>
          )}

          {/* Error */}
          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-10 rounded-2xl border border-red-500/30 bg-red-500/10 p-6"
            >
              <h3 className="font-semibold text-red-400">
                Something went wrong
              </h3>

              <p className="mt-1 text-sm text-gray-400">
                We couldn't send your message. Please try again.
              </p>
            </motion.div>
          )}

          {/* Form Header */}
          <div className="mb-10">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-500 text-black">
                <Mail size={20} />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">
                  Start Your Project
                </h3>

                <p className="text-sm text-gray-500">
                  Tell us what you're building.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            {/* Name + Email */}
            <div className="grid gap-6 md:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      name: e.target.value,
                    })
                  }
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white placeholder:text-gray-600 outline-none transition-all duration-300 focus:border-yellow-500/60 focus:bg-black/50 focus:ring-1 focus:ring-yellow-500/30"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      email: e.target.value,
                    })
                  }
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white placeholder:text-gray-600 outline-none transition-all duration-300 focus:border-yellow-500/60 focus:bg-black/50 focus:ring-1 focus:ring-yellow-500/30"
                  required
                />
              </div>

            </div>

            {/* Company + Service */}
            <div className="grid gap-6 md:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Company Name
                  <span className="ml-2 text-xs text-gray-600">
                    Optional
                  </span>
                </label>

                <input
                  type="text"
                  placeholder="Your Company"
                  value={form.company}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      company: e.target.value,
                    })
                  }
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white placeholder:text-gray-600 outline-none transition-all duration-300 focus:border-yellow-500/60 focus:bg-black/50 focus:ring-1 focus:ring-yellow-500/30"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  What do you need?
                </label>

                <select
                  value={form.service}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      service: e.target.value,
                    })
                  }
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition-all duration-300 focus:border-yellow-500/60 focus:bg-black/50 focus:ring-1 focus:ring-yellow-500/30"
                  required
                >
                  <option value="" className="bg-black">
                    Select a service
                  </option>

                  <option
                    value="Website Development"
                    className="bg-black"
                  >
                    Website Development
                  </option>

                  <option
                    value="AI Solutions"
                    className="bg-black"
                  >
                    AI Solutions
                  </option>

                  <option
                    value="UI / UX Design"
                    className="bg-black"
                  >
                    UI / UX Design
                  </option>

                  <option
                    value="Automation"
                    className="bg-black"
                  >
                    Automation
                  </option>

                  <option
                    value="SaaS Development"
                    className="bg-black"
                  >
                    SaaS Development
                  </option>

                  <option
                    value="Other"
                    className="bg-black"
                  >
                    Other
                  </option>
                </select>
              </div>

            </div>

            {/* Message */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Tell us about your project
              </label>

              <textarea
                rows={7}
                placeholder="Tell us about your idea, goals, features, timeline, or anything else that would help us understand your project..."
                value={form.message}
                onChange={(e) =>
                  setForm({
                    ...form,
                    message: e.target.value,
                  })
                }
                className="w-full resize-none rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white placeholder:text-gray-600 outline-none transition-all duration-300 focus:border-yellow-500/60 focus:bg-black/50 focus:ring-1 focus:ring-yellow-500/30"
                required
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="group flex w-full items-center justify-center gap-3 rounded-full bg-yellow-500 py-4 font-bold text-black transition-all duration-300 hover:scale-[1.02] hover:bg-yellow-400 hover:shadow-[0_0_35px_rgba(234,179,8,0.3)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
            >
              {loading ? (
                <>
                  <span className="h-5 w-5 animate-spin rounded-full border-2 border-black/30 border-t-black" />
                  Sending...
                </>
              ) : (
                <>
                  Send Project Inquiry
                  <ArrowRight
                    size={19}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </>
              )}
            </button>

            <p className="text-center text-xs text-gray-600">
              We typically respond within 24 hours.
            </p>

          </form>
        </motion.div>

        {/* Bottom Trust Line */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-500">
          <span>✓ Premium Development</span>
          <span>✓ Secure Communication</span>
          <span>✓ Post-Launch Support</span>
        </div>

      </div>
    </section>
  );
}