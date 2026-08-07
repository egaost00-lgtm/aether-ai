const plans = [
  {
    name: "Starter",
    price: "₹15K+",
    features: [
      "Business Website",
      "Responsive Design",
      "SEO Ready",
      "1 Month Support",
    ],
  },
  {
    name: "Professional",
    price: "₹35K+",
    features: [
      "Premium UI/UX",
      "AI Integrations",
      "Dashboard",
      "3 Months Support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Custom AI Solution",
      "Automation",
      "Scalable Architecture",
      "Priority Support",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 uppercase tracking-[0.3em] text-yellow-400">
            Pricing
          </p>

          <h2 className="text-5xl font-bold text-white">
            Simple Pricing
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Flexible plans tailored for startups, businesses, and enterprises.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500/40"
            >
              <h3 className="text-2xl font-bold text-white">
                {plan.name}
              </h3>

              <p className="mt-4 text-5xl font-bold text-yellow-400">
                {plan.price}
              </p>

              <ul className="mt-8 space-y-4 text-gray-300">
                {plan.features.map((feature) => (
                  <li key={feature}>✔ {feature}</li>
                ))}
              </ul>

              <button className="mt-10 w-full rounded-full bg-yellow-500 py-3 font-semibold text-black transition hover:scale-105">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}