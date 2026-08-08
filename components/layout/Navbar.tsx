"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed left-1/2 top-6 z-50 w-[95%] max-w-7xl -translate-x-1/2"
    >
      <div
        className={`rounded-[28px] border transition-all duration-500 ${
          scrolled
            ? "border-yellow-500/20 bg-black/90 backdrop-blur-2xl shadow-[0_0_60px_rgba(212,175,55,0.15)]"
            : "border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_30px_rgba(255,255,255,0.05)]"
        }`}
      >
        {/* Main Navbar */}
        <div className="flex items-center justify-between px-6 py-4">

          {/* Logo */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 font-bold text-black">
              A
            </div>

            <div>
              <h2 className="font-semibold text-white">
                Aether AI
              </h2>

              <p className="text-xs text-gray-400">
                Solutions
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden gap-8 lg:flex">
            {links.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-gray-300 transition hover:text-yellow-400"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden rounded-full bg-yellow-500 px-6 py-3 font-semibold text-black transition hover:scale-105 lg:block"
          >
            Start Project
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-yellow-500/40 hover:text-yellow-400 lg:hidden"
          >
            {menuOpen ? <X size={27} /> : <Menu size={27} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="border-t border-white/10 px-6 pb-6 lg:hidden"
          >
            <nav className="flex flex-col pt-4">

              {links.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-4 py-4 text-base font-medium text-gray-300 transition hover:bg-white/5 hover:text-yellow-400"
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile CTA */}
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-3 rounded-full bg-yellow-500 px-6 py-4 text-center font-semibold text-black transition hover:bg-yellow-400"
              >
                Start Project
              </Link>

            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}