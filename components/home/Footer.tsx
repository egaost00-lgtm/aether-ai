import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  Sparkles,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050505]">

      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 h-[350px] w-[600px] -translate-x-1/2 rounded-full bg-yellow-500/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* CTA */}
        <div className="border-b border-white/10 py-20">

          <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">

            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-yellow-400">
                <Sparkles size={14} />
                Let's Build
              </div>

              <h2 className="max-w-3xl text-4xl font-black tracking-tight text-white md:text-6xl">
                Have an idea?
                <br />
                <span className="text-yellow-400">
                  Let's make it real.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-gray-400">
                From websites and AI applications to SaaS platforms and
                automation systems — let's build something exceptional.
              </p>
            </div>

            <Link
              href="/contact"
              className="group flex shrink-0 items-center gap-3 rounded-full bg-yellow-500 px-7 py-4 font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-400 hover:shadow-[0_0_35px_rgba(234,179,8,0.3)]"
            >
              Start Your Project

              <ArrowUpRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

          </div>

        </div>

        {/* Main Footer */}
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">

            <Link href="/" className="inline-block">
              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-500 font-black text-black shadow-[0_0_25px_rgba(234,179,8,0.2)]">
                  A
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    Aether AI
                  </h3>

                  <p className="text-xs tracking-[0.15em] text-gray-500">
                    SOLUTIONS
                  </p>
                </div>

              </div>
            </Link>

            <p className="mt-6 max-w-md leading-7 text-gray-400">
              Building intelligent digital products that combine
              design, engineering, and artificial intelligence.
            </p>

            <a
              href="mailto:hello@aetheraisolutions.com"
              className="mt-6 inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-yellow-400"
            >
              <Mail size={16} />
              aitherai.solutions@gmail.com
            </a>

          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Navigation
            </h4>

            <div className="flex flex-col gap-4">

              <Link
                href="/"
                className="text-gray-400 transition hover:translate-x-1 hover:text-yellow-400"
              >
                Home
              </Link>

              <Link
                href="/services"
                className="text-gray-400 transition hover:translate-x-1 hover:text-yellow-400"
              >
                Services
              </Link>

              <Link
                href="/portfolio"
                className="text-gray-400 transition hover:translate-x-1 hover:text-yellow-400"
              >
                Portfolio
              </Link>

              <Link
                href="/about"
                className="text-gray-400 transition hover:translate-x-1 hover:text-yellow-400"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="text-gray-400 transition hover:translate-x-1 hover:text-yellow-400"
              >
                Contact
              </Link>

            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Services
            </h4>

            <div className="flex flex-col gap-4 text-gray-400">

              <Link
                href="/services"
                className="transition hover:translate-x-1 hover:text-yellow-400"
              >
                Website Development
              </Link>

              <Link
                href="/services"
                className="transition hover:translate-x-1 hover:text-yellow-400"
              >
                AI Solutions
              </Link>

              <Link
                href="/services"
                className="transition hover:translate-x-1 hover:text-yellow-400"
              >
                UI / UX Design
              </Link>

              <Link
                href="/services"
                className="transition hover:translate-x-1 hover:text-yellow-400"
              >
                Automation
              </Link>

              <Link
                href="/services"
                className="transition hover:translate-x-1 hover:text-yellow-400"
              >
                SaaS Development
              </Link>

            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 text-sm md:flex-row">

          <p className="text-gray-500">
            © 2026 Aether AI Solutions. All rights reserved.
          </p>

          <div className="flex items-center gap-6">

            <Link
              href="/privacy"
              className="text-gray-500 transition hover:text-yellow-400"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="text-gray-500 transition hover:text-yellow-400"
            >
              Terms
            </Link>

            <span className="text-gray-600">
              Built with precision.
            </span>

          </div>

        </div>

      </div>
    </footer>
  );
}