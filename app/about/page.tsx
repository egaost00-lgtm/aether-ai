import Navbar from "@/components/layout/Navbar";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <div className="mx-auto max-w-7xl px-6 py-32">

        <Link
          href="/"
          className="text-yellow-400 hover:text-yellow-300 transition"
        >
          ← Back to Home
        </Link>

        <h1 className="mt-6 text-6xl font-black">
          About Aether AI
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-8 text-gray-400">
          We build premium digital experiences that help startups and businesses
          grow using AI, automation, and modern web technologies.
        </p>
        <section className="mt-24 grid items-center gap-16 lg:grid-cols-2">

  {/* Left */}

  <div>

    <p className="uppercase tracking-[0.35em] text-yellow-400">
      WHO WE ARE
    </p>

    <h2 className="mt-5 text-5xl font-bold">
      We create digital experiences that make businesses unforgettable.
    </h2>

    <p className="mt-8 text-lg leading-8 text-gray-400">
      At Aether AI Solutions, we combine premium UI design,
      AI technology, automation, and scalable software
      engineering to build products that stand out.

      Every website is designed to impress clients,
      generate leads, and grow businesses.
    </p>

    <div className="mt-10 grid grid-cols-2 gap-8">

      <div>
        <h3 className="text-5xl font-black text-yellow-400">
          50+
        </h3>

        <p className="mt-2 text-gray-400">
          Completed Projects
        </p>
      </div>

      <div>
        <h3 className="text-5xl font-black text-yellow-400">
          98%
        </h3>

        <p className="mt-2 text-gray-400">
          Client Satisfaction
        </p>
      </div>

      <div>
        <h3 className="text-5xl font-black text-yellow-400">
          24/7
        </h3>

        <p className="mt-2 text-gray-400">
          Support
        </p>
      </div>

      <div>
        <h3 className="text-5xl font-black text-yellow-400">
          AI
        </h3>

        <p className="mt-2 text-gray-400">
          Automation Experts
        </p>
      </div>

    </div>

  </div>

  {/* Right */}

  <div className="rounded-[40px] border border-white/10 bg-white/[0.03] p-10">

    <img
      src="/streamflix.png"
      className="rounded-3xl border border-white/10"
      alt=""
    />

  </div>

</section>
<section className="mt-32">

  <h2 className="text-center text-5xl font-black">
    Our Mission & Vision
  </h2>

  <p className="mx-auto mt-6 max-w-3xl text-center text-xl text-gray-400">
    Building premium digital products that help businesses
    grow with AI and modern technology.
  </p>

  <div className="mt-16 grid gap-8 lg:grid-cols-2">

    <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-10">

      <h3 className="text-3xl font-bold text-yellow-400">
        Mission
      </h3>

      <p className="mt-6 text-lg leading-8 text-gray-400">
        Deliver world-class websites, AI software,
        SaaS products, and automation systems that
        generate measurable business growth.
      </p>

    </div>

    <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-10">

      <h3 className="text-3xl font-bold text-yellow-400">
        Vision
      </h3>

      <p className="mt-6 text-lg leading-8 text-gray-400">
        Become one of India's leading AI software
        agencies recognized for premium quality,
        innovation, and exceptional client experience.
      </p>

    </div>

  </div>

</section>
<section className="mt-32">

  <h2 className="text-center text-5xl font-black">
    Why Choose Aether AI
  </h2>

  <p className="mx-auto mt-6 max-w-3xl text-center text-xl text-gray-400">
    We don't just build websites.
    We build digital products that help businesses grow.
  </p>

  <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

    <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
      <div className="text-5xl">⚡</div>
      <h3 className="mt-6 text-2xl font-bold">
        Fast Performance
      </h3>
      <p className="mt-4 text-gray-400">
        Optimized for speed and SEO.
      </p>
    </div>

    <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
      <div className="text-5xl">🤖</div>
      <h3 className="mt-6 text-2xl font-bold">
        AI Powered
      </h3>
      <p className="mt-4 text-gray-400">
        Smart automation and AI integration.
      </p>
    </div>

    <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
      <div className="text-5xl">🎨</div>
      <h3 className="mt-6 text-2xl font-bold">
        Premium Design
      </h3>
      <p className="mt-4 text-gray-400">
        Luxury UI inspired by Apple and Stripe.
      </p>
    </div>

    <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
      <div className="text-5xl">🚀</div>
      <h3 className="mt-6 text-2xl font-bold">
        Scalable
      </h3>
      <p className="mt-4 text-gray-400">
        Ready for startups and enterprise businesses.
      </p>
    </div>

  </div>

</section>
      </div>
<section className="mt-32 rounded-[40px] border border-white/10 bg-gradient-to-r from-yellow-500/10 via-white/5 to-blue-500/10 p-16 text-center">

  <h2 className="text-6xl font-black">
    Ready to build your next project?
  </h2>

  <p className="mx-auto mt-8 max-w-3xl text-xl text-gray-400">
    Let's create something extraordinary together using
    AI, premium UI/UX, and modern web technologies.
  </p>

  <div className="mt-12 flex justify-center gap-6">

    <Link
      href="/contact"
      className="rounded-full bg-yellow-500 px-10 py-5 text-lg font-semibold text-black transition hover:scale-105"
    >
      Start Your Project
    </Link>

    <Link
      href="/portfolio"
      className="rounded-full border border-white/20 px-10 py-5 text-lg hover:bg-white/5"
    >
      View Portfolio
    </Link>

  </div>

</section>
    </main>
  );
}