import Link from "next/link";
import {
  Globe,
  Brain,
  Palette,
  BarChart3,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Fast, modern, SEO-friendly websites built with Next.js and React.",
  },
  {
    icon: Brain,
    title: "AI Solutions",
    description:
      "AI chatbots, automation, custom AI apps, and workflow integrations.",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    description:
      "Premium interfaces focused on user experience and conversions.",
  },
  {
    icon: BarChart3,
    title: "Digital Growth",
    description:
      "SEO optimization, analytics, and performance improvements.",
  },
];

export default function Services() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 uppercase tracking-[0.25em] text-yellow-400">
            Services
          </p>

          <h2 className="text-5xl font-bold text-white">
            Everything you need to
            <br />
            grow digitally.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            We combine design, engineering and AI to build premium
            digital products for startups and businesses.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500/30 hover:bg-white/10"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500 text-black transition group-hover:rotate-6">
                  <Icon size={30} />
                </div>

                <h3 className="mb-4 text-2xl font-semibold text-white">
                  {service.title}
                </h3>

                <p className="leading-8 text-gray-400">
                  {service.description}
                </p>

                <Link
                  href="/services"
                  className="mt-8 inline-flex items-center font-semibold text-yellow-400 transition hover:translate-x-2"
                >
                  Learn More →
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="inline-flex rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:scale-105"
          >
            Explore All Services
          </Link>
        </div>

      </div>
    </section>
  );
}