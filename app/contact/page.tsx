"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Link from "next/link";

const serviceOptions = [
  "Website Development",
  "AI Application & AI Agents",
  "SaaS Product Development",
  "Business Automation",
  "Data Analytics & Business Intelligence",
  "UI/UX Design",
  "Other",
  "Maintenance & Support",
];

const indiaBudgetOptions = [
  "Not decided yet",
  "Under ₹50,000",
  "₹50,000 – ₹1.5 lakh",
  "₹1.5 lakh – ₹4 lakh",
  "₹4 lakh – ₹10 lakh",
  "₹10 lakh+",
  "Custom / Enterprise",
];

const globalBudgetOptions = [
  "Not decided yet",
  "Under $1,000",
  "$1,000 – $3,000",
  "$3,000 – $5,000",
  "$5,000 – $10,000",
  "$10,000 – $25,000",
  "$25,000+",
  "Custom / Enterprise",
];

const initialForm = {
  name: "",
  email: "",
  company: "",
  service: "Website Development",
  budget: "Not decided yet",
  message: "",
};

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<
    "success" | "error" | null
  >(null);

  const [formData, setFormData] = useState(initialForm);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [market, setMarket] = useState("");
  const budgetOptions =
    market === "USD" ? globalBudgetOptions : indiaBudgetOptions;

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const plan = params.get("plan") || "";
    const selectedMarket = params.get("market") || "";

    if (plan) {
      const planName = plan
        .replace(/-/g, " ")
        .replace(/\b\w/g, (letter) => letter.toUpperCase());

      setSelectedPlan(planName);

      const lower = plan.toLowerCase();

      let service = "Other";

      if (lower.includes("website")) {
        service = "Website Development";
      } else if (
        lower.includes("agent") ||
        lower.includes("ai-transformation")
      ) {
        service = "AI Application & AI Agents";
      } else if (lower.includes("automation")) {
        service = "Business Automation";
         } else if (
        lower.includes("essential-care") ||
        lower.includes("growth-care") ||
        lower.includes("scale-reliability")
      ) {
        service = "Maintenance & Support";

      } else if (
        lower.includes("mvp") ||
        lower.includes("product") ||
        lower.includes("enterprise")
      ) {
        service = "SaaS Product Development";
      }

      setFormData((previous) => ({
        ...previous,
        service,
      }));
    }

    if (selectedMarket === "INR" || selectedMarket === "USD") {
      setMarket(selectedMarket);
    }
  }, []);

  function updateField(field: keyof typeof initialForm, value: string) {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setStatus(null);

    const projectDetails = [
      selectedPlan ? `Selected Package: ${selectedPlan}` : "",
      market ? `Pricing Market: ${market}` : "",
      `Project Budget: ${formData.budget}`,
      "",
      formData.message,
    ]
      .filter((line, index) => line !== "" || index === 3)
      .join("\n");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          service: formData.service,
          message: projectDetails,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send inquiry");
      }

      setStatus("success");
      setFormData(initialForm);
      setSelectedPlan("");
      setMarket("");
    } catch (error) {
      console.error("CONTACT ERROR:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white outline-none transition placeholder:text-gray-500 focus:border-yellow-500";

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <div className="mx-auto max-w-7xl px-6 py-32">
        <Link
          href="/"
          className="text-yellow-400 transition hover:text-yellow-300"
        >
          ← Back to Home
        </Link>

        <div className="mt-6">
          <p className="uppercase tracking-[0.3em] text-yellow-400">
            Contact Information
          </p>

          <h1 className="mt-4 text-5xl font-black md:text-7xl">
            Let&apos;s Build Something Amazing
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-8 text-gray-400">
            Tell us about your project and we&apos;ll help you
            build something amazing with AI and modern technology.
          </p>
        </div>

        <section className="mt-20 grid gap-16 lg:grid-cols-2">
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
              <a
                href="mailto:hello@aetheraisolutions.in"
                className="block rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-yellow-500/40"
              >
                <p className="text-sm text-gray-400">Email</p>
                <p className="mt-1 font-semibold">
                  hello@aetheraisolutions.in
                </p>
              </a>

              <a
                href="tel:+917974012506"
                className="block rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-yellow-500/40"
              >
                <p className="text-sm text-gray-400">Phone</p>
                <p className="mt-1 font-semibold">
                  +91 7974012506
                </p>
              </a>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-gray-400">Location</p>
                <p className="mt-1 font-semibold">India</p>
              </div>

              <a
                href="https://wa.me/917974012506?text=Hello%20Aether%20AI%20Solutions%2C%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-2xl border border-green-500/30 bg-green-500/10 px-6 py-4 font-semibold text-green-400 transition hover:bg-green-500/20"
              >
                Chat With Us on WhatsApp ↗
              </a>
            </div>
          </div>

          <div className="rounded-[35px] border border-white/10 bg-white/[0.03] p-6 md:p-10">
            <h3 className="text-3xl font-bold">
              Start Your Project
            </h3>

            <p className="mt-3 text-gray-400">
              Tell us what you&apos;re building. We&apos;ll
              get back to you within 24 hours.
            </p>

            {selectedPlan && (
              <div className="mt-6 rounded-2xl border border-yellow-500/30 bg-yellow-500/10 p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-yellow-400">
                  Selected Package
                </p>
                <p className="mt-2 text-lg font-bold">
                  {selectedPlan}
                </p>
                {market && (
                  <p className="mt-1 text-sm text-gray-400">
                    Market: {market === "INR" ? "India" : "Global"}
                  </p>
                )}
              </div>
            )}

            {status === "success" && (
              <div
                role="status"
                className="mt-8 rounded-3xl border border-green-400/20 bg-green-500/10 p-6"
              >
                <h4 className="font-bold text-green-400">
                  ✓ Message sent successfully
                </h4>
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Thank you for contacting Aether AI Solutions.
                  We&apos;ll review your inquiry and aim to
                  respond within 24 hours.
                </p>
              </div>
            )}

            {status === "error" && (
              <div
                role="alert"
                className="mt-8 rounded-3xl border border-red-400/20 bg-red-500/10 p-6"
              >
                <h4 className="font-bold text-red-400">
                  Message could not be sent
                </h4>
                <p className="mt-2 text-sm text-gray-400">
                  Please try again or contact us directly.
                </p>
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="mt-10 space-y-6"
            >
              <input
                type="text"
                placeholder="Your Name"
                autoComplete="name"
                maxLength={120}
                required
                value={formData.name}
                onChange={(e) =>
                  updateField("name", e.target.value)
                }
                className={inputClass}
              />

              <input
                type="email"
                placeholder="Email Address"
                autoComplete="email"
                maxLength={254}
                required
                value={formData.email}
                onChange={(e) =>
                  updateField("email", e.target.value)
                }
                className={inputClass}
              />

              <input
                type="text"
                placeholder="Company Name (Optional)"
                autoComplete="organization"
                maxLength={150}
                value={formData.company}
                onChange={(e) =>
                  updateField("company", e.target.value)
                }
                className={inputClass}
              />

              <div>
                <label
                  htmlFor="contact-service"
                  className="mb-2 block text-sm text-gray-400"
                >
                  Service Required
                </label>
                <select
                  id="contact-service"
                  value={formData.service}
                  onChange={(e) =>
                    updateField("service", e.target.value)
                  }
                  className={inputClass}
                  required
                >
                  {serviceOptions.map((service) => (
                    <option
                      key={service}
                      value={service}
                      className="bg-black"
                    >
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="contact-budget"
                  className="mb-2 block text-sm text-gray-400"
                >
                  Estimated Project Budget
                </label>
                <select
                  id="contact-budget"
                  value={formData.budget}
                  onChange={(e) =>
                    updateField("budget", e.target.value)
                  }
                  className={inputClass}
                >
                  {budgetOptions.map((budget) => (
                    <option
                      key={budget}
                      value={budget}
                      className="bg-black"
                    >
                      {budget}
                    </option>
                  ))}
                </select>
              </div>

              <textarea
                rows={6}
                placeholder="Tell us about your project..."
                maxLength={9000}
                required
                value={formData.message}
                onChange={(e) =>
                  updateField("message", e.target.value)
                }
                className={inputClass}
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-yellow-500 py-4 text-lg font-semibold text-black transition duration-300 hover:scale-[1.02] hover:bg-yellow-400 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message →"}
              </button>

              <p className="text-center text-xs text-gray-500">
                Your information will be used to respond
                to your project inquiry.
              </p>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
