const tech = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Supabase",
  "Firebase",
  "OpenAI",
  "Gemini AI",
  "Vercel",
  "GitHub",
  "Figma",
];

export default function Technologies() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 uppercase tracking-[0.3em] text-yellow-400">
            Technologies
          </p>

          <h2 className="text-5xl font-bold text-white">
            Modern Tech Stack
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            We use modern frameworks, AI tools, and cloud technologies to build
            fast and scalable products.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-5">
          {tech.map((item) => (
            <div
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500 hover:bg-yellow-500 hover:text-black"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}