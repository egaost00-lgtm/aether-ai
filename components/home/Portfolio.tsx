import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Code2 } from "lucide-react";

const projects = [
  {
    title: "StreamFlix AI",
    category: "AI-Powered Digital Product",
    description:
      "A premium AI-powered entertainment platform combining intelligent movie discovery, generative AI experiences, modern product design, and a responsive web application.",
    image: "/streamflix.png",
    status: "Live",
    statusStyle: "bg-green-500/15 text-green-400 border-green-500/20",
    tags: ["Next.js", "Tailwind", "AI"],
    demo: "https://streamflix-ai.vercel.app",
    github: "https://github.com/egaost00-lgtm/streamflix-ai",
  },

{
  title: "AURACARE",
  category: "AI-Powered Healthcare Platform",
  description:
    "An AI-powered healthcare platform designed to simplify patient consultations, appointment assistance, healthcare guidance, and digital patient experiences through a modern responsive interface.",
  image: "/auracare.png",
  status: "Completed",
  statusStyle: "bg-green-500/15 text-green-400 border-green-500/20",
  tags: ["Next.js", "AI", "Healthcare"],
  demo: null,
  github: "https://github.com/egaost00-lgtm/auracare",
},

  {
    title: "AI Marketing Studio",
    category: "AI SaaS & Automation",
    description:
      "An AI-powered marketing platform concept designed to help businesses create advertisements, social campaigns, commercial content, and premium brand assets faster.",
    image: "/marketing.jpg",
    status: "In Development",
    statusStyle: "bg-yellow-500/15 text-yellow-400 border-yellow-500/20",
    tags: ["AI", "SaaS", "Automation"],
    demo: null,
    github: "https://github.com/egaost00-lgtm/aether-ai",
  },
    {
    title: "Network Security Assessment",
    category: "Cybersecurity • Network Assessment",
    description:
      "An end-to-end network security assessment performed in an authorized lab environment, covering reconnaissance, service enumeration, traffic analysis, security findings, and remediation recommendations.",
    image: "/network-security.png",
    status: "Completed",
    statusStyle: "bg-green-500/15 text-green-400 border-green-500/20",
    tags: ["Kali Linux", "Nmap", "Wireshark"],
    demo: null,
    github:
      "https://github.com/egaost00-lgtm/network-security-assessment",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-[#050505] py-32 text-white"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/[0.035] blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto mb-20 max-w-4xl text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-yellow-400">
            Selected Work
          </p>

          <h2 className="text-5xl font-black tracking-tight md:text-7xl">
            Built to impress.
            <br />
            <span className="text-yellow-400">
              Engineered to perform.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-gray-400">
            Explore AI-powered products, intelligent systems, and premium
            digital experiences built by Aether AI Solutions.
          </p>

        </div>

        {/* Projects */}
        <div className="grid gap-8 lg:grid-cols-3">

          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.035] transition-all duration-500 hover:-translate-y-2 hover:border-yellow-500/30 hover:bg-white/[0.055]"
            >

              {/* Image */}
              <div className="relative h-72 overflow-hidden bg-[#0B0B0B]">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain p-2 transition duration-700 group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70" />

                {/* Category */}
                <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-medium text-gray-200 backdrop-blur-md">
                  {project.category}
                </div>

                {/* Status */}
                <div
                  className={`absolute right-5 top-5 rounded-full border px-3 py-1.5 text-xs font-semibold backdrop-blur-md ${project.statusStyle}`}
                >
                  <span className="mr-1.5">●</span>
                  {project.status}
                </div>

              </div>

              {/* Content */}
              <div className="p-8">

                <div className="flex items-start justify-between gap-4">

                  <h3 className="text-2xl font-bold tracking-tight">
                    {project.title}
                  </h3>

                  <ArrowUpRight
                    size={22}
                    className="shrink-0 text-gray-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-yellow-400"
                  />

                </div>

                <p className="mt-4 min-h-[112px] leading-7 text-gray-400">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-400 transition group-hover:border-yellow-500/20 group-hover:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-8 flex gap-3">

                  {project.demo ? (
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-yellow-500 px-5 py-3 font-semibold text-black transition-all duration-300 hover:scale-[1.03] hover:bg-yellow-400"
                    >
                      Live Demo
                      <ArrowUpRight size={17} />
                    </Link>
                  ) : (
                    <div className="flex-1 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-3 text-center text-sm font-semibold text-yellow-400">
                      Coming Soon
                    </div>
                  )}

                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 font-medium text-white transition-all duration-300 hover:border-yellow-500/50 hover:text-yellow-400"
                    >
                      <Code2 size={17} />
                      GitHub
                    </Link>
                  )}

                </div>

              </div>

            </article>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-20 flex flex-col items-center justify-between gap-6 rounded-[30px] border border-white/10 bg-white/[0.035] p-8 md:flex-row md:px-10">

          <div>
            <p className="text-2xl font-bold">
              Have an idea worth building?
            </p>

            <p className="mt-2 text-gray-400">
              Let's turn your idea into a powerful digital product.
            </p>
          </div>

          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-400"
          >
            Explore Our Work
            <ArrowUpRight size={18} />
          </Link>

        </div>

      </div>
    </section>
  );
}