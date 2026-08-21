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
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed left-1/2 top-5 z-50 w-[94%] max-w-6xl -translate-x-1/2"
    >
      <div
        className={`relative overflow-hidden rounded-full border
        border-white/[0.14]
        bg-black/[0.42]
        backdrop-blur-2xl
        transition-all duration-500
        ${
          scrolled
            ? "bg-black/[0.62] shadow-[0_18px_60px_rgba(0,0,0,0.35)]"
            : "shadow-[0_10px_45px_rgba(0,0,0,0.20)]"
        }`}
      >
        {/* Subtle glass highlight */}
        <div
          className="pointer-events-none absolute inset-x-6 top-0 h-px
          bg-gradient-to-r from-transparent via-white/40 to-transparent"
        />

        {/* Very subtle ambient glow */}
        <div
          className="pointer-events-none absolute -top-20 left-1/3
          h-32 w-64 rounded-full
          bg-white/[0.035] blur-3xl"
        />

        {/* Main Navbar */}
        <div className="relative flex items-center justify-between px-5 py-3.5 md:px-6">

          {/* Logo */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="group flex items-center gap-3"
          >
            {/* Logo mark */}
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center
              rounded-full
              border border-white/20
              bg-white/[0.08]
              text-sm font-bold text-white
              shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]
              transition duration-300
              group-hover:border-orange-400/50
              group-hover:bg-orange-500/10"
            >
              A
            </div>

            <div className="leading-none">
              <h2 className="text-sm font-semibold tracking-tight text-white">
                Aether AI
              </h2>

              <p className="mt-1 text-[10px] tracking-[0.18em] text-white/45">
                SOLUTIONS
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative rounded-full px-4 py-2
                text-sm font-medium text-white/60
                transition-all duration-300
                hover:bg-white/[0.06]
                hover:text-white"
              >
                {item.name}

                <span
                  className="absolute bottom-1 left-1/2 h-[2px] w-0
                  -translate-x-1/2 rounded-full
                  bg-orange-400
                  transition-all duration-300
                  group-hover:w-4"
                />
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-2.5 lg:flex">

            {/* Client Portal */}
            <Link
              href="/signup"
              className="rounded-full
              border border-white/15
              bg-white/[0.06]
              px-5 py-2.5
              text-sm font-medium text-white/85
              backdrop-blur-xl
              transition-all duration-300
              hover:border-green-400/30
              hover:bg-green-400/[0.08]
              hover:text-white"
            >
              Client Portal
            </Link>

            {/* Start Project */}
            <Link
              href="/contact"
              className="rounded-full
              border border-orange-300/30
              bg-gradient-to-r from-orange-500 to-amber-400
              px-5 py-2.5
              text-sm font-semibold text-black
              shadow-[0_6px_25px_rgba(249,115,22,0.22)]
              transition-all duration-300
              hover:-translate-y-0.5
              hover:from-orange-400
              hover:to-yellow-300
              hover:shadow-[0_10px_35px_rgba(249,115,22,0.35)]"
            >
              Start Project
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center
            rounded-full
            border border-white/15
            bg-white/[0.06]
            text-white
            backdrop-blur-xl
            transition-all duration-300
            hover:bg-white/[0.12]
            lg:hidden"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative border-t border-white/[0.10] px-5 pb-5 lg:hidden"
          >
            <nav className="flex flex-col pt-3">

              {links.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3.5
                  text-sm font-medium text-white/65
                  transition-all duration-300
                  hover:bg-white/[0.06]
                  hover:text-white"
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Client Portal */}
              <Link
                href="/signup"
                onClick={() => setMenuOpen(false)}
                className="mt-3 rounded-full
                border border-white/15
                bg-white/[0.06]
                px-6 py-3.5
                text-center text-sm font-medium text-white
                transition-all duration-300
                hover:bg-white/[0.10]"
              >
                Client Portal
              </Link>

              {/* Mobile Start Project */}
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-full
                bg-gradient-to-r from-orange-500 to-amber-400
                px-6 py-3.5
                text-center text-sm font-semibold text-black
                shadow-[0_8px_25px_rgba(249,115,22,0.22)]
                transition-all duration-300
                hover:from-orange-400
                hover:to-yellow-300"
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