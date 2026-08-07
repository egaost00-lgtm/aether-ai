const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We understand your business goals and project requirements.",
  },
  {
    number: "02",
    title: "Design",
    description: "We create premium UI/UX designs before development begins.",
  },
  {
    number: "03",
    title: "Development",
    description: "We build fast, scalable, and modern digital solutions.",
  },
  {
    number: "04",
    title: "Launch",
    description: "After testing, we deploy and support your project.",
  },
];

export default function Process() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <p className="mb-3 uppercase tracking-[0.3em] text-yellow-400">
            Process
          </p>

          <h2 className="text-5xl font-bold text-white">
            How We Work
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            A simple four-step process to turn your idea into a premium digital product.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-yellow-500/40 hover:bg-white/10"
            >
              <div className="mb-6 text-5xl font-bold text-yellow-500">
                {step.number}
              </div>

              <h3 className="mb-4 text-2xl font-semibold text-white">
                {step.title}
              </h3>

              <p className="text-gray-400 leading-8">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}