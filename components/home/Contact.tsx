"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

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

      alert("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to send message.");
    }

    setLoading(false);
  }

  return (
    <section className="py-28" id="contact">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-[40px] border border-white/10 bg-white/5 p-14">
          <div className="text-center">
            <p className="mb-3 uppercase tracking-[0.3em] text-yellow-400">
              Contact
            </p>

            <h2 className="text-5xl font-bold text-white">
              Let's Build Something Amazing
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-gray-400">
              Tell us about your project and we'll get back to you within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-12 space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-6 py-4 text-white outline-none focus:border-yellow-500"
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-6 py-4 text-white outline-none focus:border-yellow-500"
              required
            />

            <input
              type="text"
              placeholder="Company Name"
              value={form.company}
              onChange={(e) =>
                setForm({ ...form, company: e.target.value })
              }
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-6 py-4 text-white outline-none focus:border-yellow-500"
            />

            <select
              value={form.service}
              onChange={(e) =>
                setForm({ ...form, service: e.target.value })
              }
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-6 py-4 text-white outline-none focus:border-yellow-500"
              required
            >
              <option value="">Select Service</option>
              <option>Website Development</option>
              <option>AI Solutions</option>
              <option>UI / UX Design</option>
              <option>Automation</option>
            </select>

            <textarea
              rows={6}
              placeholder="Tell us about your project..."
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-6 py-4 text-white outline-none focus:border-yellow-500"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-yellow-500 py-4 font-semibold text-black transition hover:scale-[1.02] disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}