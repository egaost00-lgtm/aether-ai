"use client";

import { FormEvent, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function LeadPage() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);

  const lead = {
    name: formData.get("name") as string,
    phone: formData.get("phone") as string,
    email: (formData.get("email") as string) || null,
    budget: formData.get("budget") as string,
    location: formData.get("location") as string,
    property_type: formData.get("property") as string,
    timeline: formData.get("timeline") as string,
    requirements: (formData.get("requirements") as string) || null,
  };

  const { error } = await supabase
    .from("leads")
    .insert([lead]);

if (error) {
  console.error("Lead submission error:", error);
  alert(`Database error: ${error.message}`);
  return;
}

  setSubmitted(true);
  form.reset();
}

  return (
    <main className="min-h-screen bg-[#05070a] px-6 py-12 text-white">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
            AETHER FLOW
          </p>

          <h1 className="mt-3 text-4xl font-bold">
            Property Enquiry
          </h1>

          <p className="mt-3 text-gray-400">
            Tell us what you're looking for. Aether AI will analyze your
            requirements and help the sales team respond faster.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8"
        >
          <div className="grid gap-6 md:grid-cols-2">
            {/* Name */}
            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Full Name
              </label>

              <input
                name="name"
                required
                placeholder="Rahul Sharma"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-cyan-400"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Phone Number
              </label>

              <input
                name="phone"
                required
                type="tel"
                placeholder="+91 98765 43210"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-cyan-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Email
              </label>

              <input
                name="email"
                type="email"
                placeholder="rahul@example.com"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-cyan-400"
              />
            </div>

            {/* Budget */}
            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Budget
              </label>

              <select
                name="budget"
                required
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-cyan-400"
              >
                <option value="">Select budget</option>
                <option value="under-30">Under ₹30 Lakh</option>
                <option value="30-50">₹30–50 Lakh</option>
                <option value="50-75">₹50–75 Lakh</option>
                <option value="75-100">₹75 Lakh–₹1 Crore</option>
                <option value="above-100">Above ₹1 Crore</option>
              </select>
            </div>

            {/* Location */}
            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Preferred Location
              </label>

              <input
                name="location"
                required
                placeholder="Gomti Nagar, Lucknow"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-cyan-400"
              />
            </div>

            {/* Property */}
            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Property Type
              </label>

              <select
                name="property"
                required
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-cyan-400"
              >
                <option value="">Select property</option>
                <option value="1bhk">1 BHK</option>
                <option value="2bhk">2 BHK</option>
                <option value="3bhk">3 BHK</option>
                <option value="4bhk">4+ BHK</option>
                <option value="villa">Villa</option>
                <option value="plot">Plot</option>
                <option value="commercial">Commercial</option>
              </select>
            </div>

            {/* Timeline */}
            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Buying Timeline
              </label>

              <select
                name="timeline"
                required
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-cyan-400"
              >
                <option value="">When are you planning?</option>
                <option value="immediately">Immediately</option>
                <option value="1-3-months">Within 1–3 months</option>
                <option value="3-6-months">Within 3–6 months</option>
                <option value="6-12-months">Within 6–12 months</option>
                <option value="researching">Just researching</option>
              </select>
            </div>
          </div>

          {/* Requirements */}
          <div className="mt-6">
            <label className="mb-2 block text-sm text-gray-300">
              Tell us what you're looking for
            </label>

            <textarea
              name="requirements"
              rows={5}
              placeholder="Example: Looking for a 3 BHK apartment near schools and good connectivity..."
              className="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-cyan-400"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-8 w-full rounded-xl bg-cyan-400 px-5 py-3.5 font-semibold text-black transition hover:bg-cyan-300"
          >
            Submit Property Enquiry
          </button>

          {/* Success */}
          {submitted && (
            <div className="mt-5 rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-center text-sm text-cyan-300">
              Enquiry received successfully. Aether AI will analyze this lead
              in the next step.
            </div>
          )}
        </form>
      </div>
    </main>
  );
}