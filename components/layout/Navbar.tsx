"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {const [scrolled, setScrolled] = useState(false);

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
  className={`flex items-center justify-between rounded-full border px-6 py-4 transition-all duration-500 ${
    scrolled
      ? "border-yellow-500/20 bg-black/80 backdrop-blur-2xl shadow-[0_0_60px_rgba(212,175,55,0.15)]"
      : "border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_30px_rgba(255,255,255,0.05)]"
  }`}
>

      {/* Logo */}
<Link href="/" className="flex items-center gap-3">
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

        {/* CTA */}
        <Link
  href="/contact"
  className="hidden rounded-full bg-yellow-500 px-6 py-3 font-semibold text-black transition hover:scale-105 lg:block"
>
  Start Project
</Link>

        {/* Mobile Icon */}
        <button className="text-white lg:hidden">
          <Menu size={28} />
        </button>

      </div>
    </motion.header>
  );
}