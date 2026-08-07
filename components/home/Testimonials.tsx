const testimonials = [
  {
    name: "Rahul Sharma",
    company: "Startup Founder",
    review:
      "Aether AI delivered a premium website that exceeded our expectations. Fast, modern and highly professional.",
  },
  {
    name: "Priya Mehta",
    company: "Healthcare Clinic",
    review:
      "Excellent communication and amazing UI design. Our website now feels premium and loads incredibly fast.",
  },
  {
    name: "Aman Verma",
    company: "E-commerce Brand",
    review:
      "Highly recommended. Great attention to detail and excellent development quality.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 uppercase tracking-[0.3em] text-yellow-400">
            Testimonials
          </p>

          <h2 className="text-5xl font-bold text-white">
            What Clients Say
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Trusted by businesses looking for premium digital experiences.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500/40"
            >
              <div className="mb-6 text-yellow-400 text-4xl">★★★★★</div>

              <p className="text-gray-300 leading-8">
                "{item.review}"
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-white">
                  {item.name}
                </h3>

                <p className="text-gray-500">
                  {item.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}