"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Link from "next/link";

export default function ContactPage() {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        
  name: "",
  email: "",
  company: "",
  service: "Website Development",
  message: "",
});
const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  setLoading(true);

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

alert("✅ Message sent successfully!");

setFormData({
  name: "",
  email: "",
  company: "",
  service: "Website Development",
  message: "",
});
  } catch (error) {
    console.error(error);
    alert("❌ Something went wrong.");
  } finally {
  setLoading(false);
}
};
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <div className="mx-auto max-w-7xl px-6 py-32">

        <Link
          href="/"
          className="text-yellow-400 hover:text-yellow-300"
        >
          ← Back to Home
        </Link>

        <h1 className="mt-6 text-7xl font-black">
          Contact Us
        </h1>

        <p className="mt-6 max-w-3xl text-xl leading-8 text-gray-400">
          Tell us about your project and we'll help you build
          something amazing with AI and modern technology.
        </p>
        <section className="mt-24 grid gap-16 lg:grid-cols-2">

  {/* LEFT SIDE */}

  <div>

    <p className="uppercase tracking-[0.3em] text-yellow-400">
      CONTACT INFORMATION
    </p>

    <h2 className="mt-5 text-5xl font-bold">
      Let's build something amazing together.
    </h2>

    <p className="mt-8 text-lg leading-8 text-gray-400">
      Whether you need an AI website, SaaS platform,
      automation system, or custom software,
      we'd love to hear about your idea.
    </p>

  </div>

  {/* RIGHT SIDE */}
<div className="rounded-[35px] border border-white/10 bg-white/[0.03] p-10">

  <h3 className="text-3xl font-bold">
    Start Your Project
  </h3>

  <p className="mt-3 text-gray-400">
    We'll reply within 24 hours.
  </p>

  <div className="mb-10 space-y-4">

  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
    <p className="text-sm text-gray-400">Email</p>
    <p className="font-semibold">hello@aetherai.com</p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
    <p className="text-sm text-gray-400">Phone</p>
    <p className="font-semibold">+91 7974012506</p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
    <p className="text-sm text-gray-400">Location</p>
    <p className="font-semibold">India</p>
  </div>

</div>

<form onSubmit={handleSubmit} className="space-y-6">

  <input
  type="text"
  placeholder="Your Name"
  value={formData.name}
  onChange={(e) =>
    setFormData({ ...formData, name: e.target.value })
  }
  className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 outline-none focus:border-yellow-500"
/>
<input
  type="email"
  placeholder="Email Address"
  value={formData.email}
  onChange={(e) =>
    setFormData({ ...formData, email: e.target.value })
  }
  className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 outline-none focus:border-yellow-500"
/>

  <input
  type="text"
  placeholder="Company Name"
  value={formData.company}
  onChange={(e) =>
    setFormData({ ...formData, company: e.target.value })
  }
  className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 outline-none focus:border-yellow-500"
/>

 <select
  value={formData.service}
  onChange={(e) =>
    setFormData({ ...formData, service: e.target.value })
  }
  className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 outline-none focus:border-yellow-500"
>
  <option>Website Development</option>
  <option>AI Application</option>
  <option>SaaS Platform</option>
  <option>Automation System</option>
  <option>UI/UX Design</option>
</select>

  <textarea
  rows={5}
  placeholder="Tell us about your project..."
  value={formData.message}
  onChange={(e) =>
    setFormData({ ...formData, message: e.target.value })
  }
  className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 outline-none focus:border-yellow-500"
/>
<button
  type="submit"
  disabled={loading}
  className="w-full rounded-full bg-yellow-500 py-4 text-lg font-semibold text-black transition hover:scale-105 disabled:opacity-50"
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