"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Link from "next/link";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Website Development",
    message: "",
  });

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
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        company: "",
        service: "Website Development",
        message: "",
      });
    } catch (error) {
      console.error("CONTACT ERROR:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <div className="mx-auto max-w-7xl px-6 py-32">

        {/* Back */}
        <Link
          href="/"
          className="text-yellow-400 transition hover:text-yellow-300"
        >
          ← Back to Home
        </Link>

        {/* Header */}
        <div className="mt-6">
          <p className="uppercase tracking-[0.3em] text-yellow-400">
            Contact Information
          </p>

          <h1 className="mt-4 text-6xl font-black md:text-7xl">
            Let&apos;s Build Something Amazing
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-8 text-gray-400">
            Tell us about your project and we&apos;ll help you build
            something amazing with AI and modern technology.
          </p>
        </div>

        {/* Main Content */}
        <section className="mt-24 grid gap-16 lg:grid-cols-2">

          {/* LEFT */}
          <div>
            <p className="uppercase tracking-[0.3em] text-yellow-400">
              Get In Touch
            </p>

            <h2 className="mt-5 text-4xl font-bold md:text-5xl">
              Let&apos;s build something amazing together.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
              Whether you need an AI website, SaaS platform,
              automation system, or custom software,
              we&apos;d love to hear about your idea.
            </p>

            <div className="mt-10 space-y-4">

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-yellow-500/40">
                <p className="text-sm text-gray-400">Email</p>
                <p className="mt-1 font-semibold text-white">
                  aitherai.solutions@gmail.com
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-yellow-500/40">
                <p className="text-sm text-gray-400">Phone</p>
                <p className="mt-1 font-semibold text-white">
                  +91 7974012506
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-yellow-500/40">
                <p className="text-sm text-gray-400">Location</p>
                <p className="mt-1 font-semibold text-white">
                  India
                </p>
              </div>

            </div>
          </div>

          {/* FORM */}
          <div className="rounded-[35px] border border-white/10 bg-white/[0.03] p-8 md:p-10">

            <h3 className="text-3xl font-bold">
              Start Your Project
            </h3>

            <p className="mt-3 text-gray-400">
              Tell us what you&apos;re building. We&apos;ll get back to you
              within 24 hours.
            </p>

            {/* PREMIUM SUCCESS MESSAGE */}
            {status === "success" && (
              <div className="mt-8 overflow-hidden rounded-3xl border border-green-400/20 bg-gradient-to-br from-green-500/15 via-green-500/5 to-transparent p-6 shadow-[0_0_40px_rgba(34,197,94,0.08)]">

                <div className="flex items-start gap-4">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-green-400/30 bg-green-400/10">
                    <span className="text-xl text-green-400">
                      ✓
                    </span>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-green-400">
                      Message sent successfully
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-gray-400">
                      Thank you for reaching out to Aether AI Solutions.
                      Our team will review your project and get back to you
                      within 24 hours.
                    </p>
                  </div>

                </div>
              </div>
            )}

            {/* PREMIUM ERROR MESSAGE */}
            {status === "error" && (
              <div className="mt-8 overflow-hidden rounded-3xl border border-red-400/20 bg-gradient-to-br from-red-500/15 via-red-500/5 to-transparent p-6">

                <div className="flex items-start gap-4">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-red-400/30 bg-red-400/10">
                    <span className="text-xl text-red-400">
                      !
                    </span>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-red-400">
                      Message could not be sent
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-gray-400">
                      Something went wrong while sending your message.
                      Please try again.
                    </p>
                  </div>

                </div>
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="mt-10 space-y-6"
            >

              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white outline-none transition placeholder:text-gray-500 focus:border-yellow-500"
                required
              />

              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white outline-none transition placeholder:text-gray-500 focus:border-yellow-500"
                required
              />

              <input
                type="text"
                placeholder="Company Name"
                value={formData.company}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    company: e.target.value,
                  })
                }
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white outline-none transition placeholder:text-gray-500 focus:border-yellow-500"
              />

              <select
                value={formData.service}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    service: e.target.value,
                  })
                }
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white outline-none transition focus:border-yellow-500"
                required
              >
                <option value="Website Development">
                  Website Development
                </option>
                <option value="AI Application">
                  AI Application
                </option>
                <option value="SaaS Platform">
                  SaaS Platform
                </option>
                <option value="Automation System">
                  Automation System
                </option>
                <option value="UI/UX Design">
                  UI/UX Design
                </option>
              </select>

              <textarea
                rows={6}
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: e.target.value,
                  })
                }
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white outline-none transition placeholder:text-gray-500 focus:border-yellow-500"
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-yellow-500 py-4 text-lg font-semibold text-black transition duration-300 hover:scale-[1.02] hover:bg-yellow-400 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message →"}
              </button>

            </form>
          </div>
        </section>
      </div>
    </main>
  );
}