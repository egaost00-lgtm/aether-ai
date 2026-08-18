"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/#pricing" },
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
        className={`relative overflow-hidden rounded-[28px]
        border border-white/25
        bg-white/[0.07]
        backdrop-blur-2xl
        transition-all duration-500
        ${
          scrolled
            ? "bg-white/[0.12] shadow-[0_12px_50px_rgba(0,0,0,0.14)]"
            : "shadow-[0_8px_40px_rgba(255,255,255,0.08)]"
        }`}
      >
        {/* 🇮🇳 Subtle tricolor glass reflection */}
        <div
          className="pointer-events-none absolute inset-0
          bg-gradient-to-r
          from-orange-500/[0.08]
          via-white/[0.03]
          to-green-500/[0.08]"
        />

        {/* ✨ Top glass shine */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[45%]
          bg-gradient-to-b
          from-white/25
          via-white/[0.07]
          to-transparent"
        />

        {/* ✨ Thin glass highlight */}
        <div
          className="pointer-events-none absolute left-6 right-6 top-0
          h-px bg-white/70"
        />

        {/* 💎 Moving glass reflection */}
        <motion.div
          aria-hidden="true"
          animate={{ x: ["-140%", "240%"] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute top-0 h-full w-1/3
          -skew-x-12
          bg-gradient-to-r
          from-transparent
          via-white/20
          to-transparent
          blur-xl"
        />

        {/* Main Navbar */}
        <div className="relative flex items-center justify-between px-6 py-4">

          {/* Logo */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3"
          >
            <div
              className="flex h-10 w-10 items-center justify-center
              rounded-full
              border border-white/40
              bg-gradient-to-br
              from-orange-400
              via-yellow-400
              to-green-500
              font-bold text-white
              shadow-[0_4px_20px_rgba(255,165,0,0.25)]"
            >
              A
            </div>

            <div>
              <h2 className="font-semibold text-[#0b1220]">
                Aether AI
              </h2>

              <p className="text-xs text-[#0b1220]/60">
                Solutions
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative text-sm font-medium
                text-[#0b1220]/70
                transition duration-300
                hover:text-[#0b1220]"
              >
                {item.name}

                <span
                  className="absolute -bottom-2 left-1/2 h-[2px] w-0
                  -translate-x-1/2 rounded-full
                  bg-gradient-to-r
                  from-orange-500
                  via-white
                  to-green-500
                  transition-all duration-300
                  group-hover:w-full"
                />
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 lg:flex">

            {/* Client Portal */}
            <Link
              href="/signup"
              className="rounded-full
              border border-white/40
              bg-gradient-to-r
              from-orange-400
              via-orange-500
              to-green-500
              px-6 py-3
              font-semibold text-white
              shadow-[0_6px_25px_rgba(255,140,0,0.20)]
              transition duration-300
              hover:scale-105
              hover:shadow-[0_8px_30px_rgba(255,140,0,0.30)]"
            >
              Client Portal
            </Link>

            {/* Start Project */}
            <Link
              href="/contact"
              className="rounded-full
              border border-white/40
              bg-gradient-to-r
              from-orange-400
              via-orange-500
              to-green-500
              px-6 py-3
              font-semibold text-white
              shadow-[0_6px_25px_rgba(255,140,0,0.20)]
              transition duration-300
              hover:scale-105
              hover:shadow-[0_8px_30px_rgba(255,140,0,0.30)]"
            >
              Start Project
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 items-center justify-center
            rounded-full
            border border-white/40
            bg-white/20
            text-[#0b1220]
            backdrop-blur-xl
            transition
            hover:bg-white/30
            lg:hidden"
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.25 }}
            className="relative border-t border-white/30 px-6 pb-6 lg:hidden"
          >
            <nav className="flex flex-col pt-4">

              {links.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-4 py-4
                  text-base font-medium
                  text-[#0b1220]/75
                  transition
                  hover:bg-white/20
                  hover:text-[#0b1220]"
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Client Portal */}
              <Link
                href="/signup"
                onClick={() => setMenuOpen(false)}
                className="mt-3 rounded-full
                border border-white/40
                bg-gradient-to-r
                from-orange-500
                to-green-500
                px-6 py-4
                text-center font-semibold text-white
                shadow-lg
                transition
                hover:scale-[1.02]"
              >
                Client Portal
              </Link>

              {/* Mobile Start Project */}
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-3 rounded-full
                border border-white/40
                bg-gradient-to-r
                from-orange-500
                to-green-500
                px-6 py-4
                text-center font-semibold text-white
                shadow-lg
                transition
                hover:scale-[1.02]"
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