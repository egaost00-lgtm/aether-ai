const faqs = [
  {
    q: "How long does a website take?",
    a: "Most projects are completed within 2–4 weeks depending on requirements.",
  },
  {
    q: "Do you build AI applications?",
    a: "Yes. We develop AI chatbots, automation systems, and custom AI-powered web applications.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Absolutely. Every project includes post-launch support and maintenance.",
  },
  {
    q: "Can you redesign an existing website?",
    a: "Yes, we can modernize and redesign your existing website with improved performance and UI.",
  },
];

export default function FAQ() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 uppercase tracking-[0.3em] text-yellow-400">
            FAQ
          </p>

          <h2 className="text-5xl font-bold text-white">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Everything you need to know before starting your project.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="rounded-2xl border border-white/10 bg-white/5 p-8"
            >
              <h3 className="text-xl font-semibold text-white">
                {faq.q}
              </h3>

              <p className="mt-4 text-gray-400 leading-8">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}