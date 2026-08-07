export default function Trusted() {
  const companies = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Vercel",
    "Supabase",
  ];

  return (
    <section className="border-y border-white/10 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-8 text-center text-sm uppercase tracking-[0.3em] text-gray-400">
          Built with modern technologies
        </p>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {companies.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/5 py-5 text-center text-lg font-semibold text-gray-300 transition-all duration-300 hover:border-yellow-500/40 hover:bg-white/10 hover:text-white"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}