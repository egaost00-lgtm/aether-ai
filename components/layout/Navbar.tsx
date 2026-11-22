"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
  Code2,
  BrainCircuit,
  CloudCog,
  Building2,
  Layers3,
  ShieldCheck,
} from "lucide-react";

/* =========================================================
   NAVIGATION DATA
========================================================= */

const links = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/#pricing" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const solutions = [
  {
    name: "Software Development",
    description: "Custom applications and APIs",
    icon: Code2,
    href: "/solutions/software-development",
  },
  {
    name: "AI & Automation",
    description: "AI agents and smart workflows",
    icon: BrainCircuit,
    href: "/ai-agents-pricing",
  },
  {
    name: "Cloud & DevOps",
    description: "Cloud and infrastructure solutions",
    icon: CloudCog,
    href: "/solutions/cloud-devops",
  },
  {
    name: "Enterprise IT",
    description: "Business systems and integrations",
    icon: Building2,
    href: "/solutions/enterprise-it",
  },
  {
    name: "SaaS Engineering",
    description: "Scalable digital products",
    icon: Layers3,
    href: "/solutions/saas-engineering",
  },
  {
    name: "Managed IT",
    description: "Maintenance and support",
    icon: ShieldCheck,
    href: "/solutions/managed-it",
  },
];

/* =========================================================
   NAVBAR COMPONENT
========================================================= */

export default function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setSolutionsOpen(false);
    setMobileSolutionsOpen(false);
  }, [pathname]);

  const closeMenus = () => {
    setMenuOpen(false);
    setSolutionsOpen(false);
    setMobileSolutionsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed left-1/2 top-5 z-50 w-[94%] max-w-7xl -translate-x-1/2"
    >
      <div
        className={`relative rounded-3xl border border-white/[0.14]
        bg-black/[0.42] backdrop-blur-2xl
        transition-all duration-500 lg:rounded-full
        ${
          scrolled
            ? "bg-black/[0.75] shadow-[0_18px_60px_rgba(0,0,0,0.35)]"
            : "shadow-[0_10px_45px_rgba(0,0,0,0.20)]"
        }`}
      >
        {/* GLASS HIGHLIGHT */}

        <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

        {/* AMBIENT GLOW */}

        <div className="pointer-events-none absolute -top-20 left-1/3 h-32 w-64 rounded-full bg-white/[0.035] blur-3xl" />

        {/* MAIN NAVBAR */}

        <div className="relative flex items-center justify-between gap-3 px-4 py-3.5 md:px-6">

          {/* LOGO */}

          <Link
            href="/"
            onClick={closeMenus}
            className="group flex shrink-0 items-center gap-3"
          >
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center
              rounded-full border border-white/20
              bg-white/[0.08] text-sm font-bold text-white
              shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]
              transition duration-300
              group-hover:border-orange-400/50
              group-hover:bg-orange-500/10"
            >
              A
            </div>

            <div className="leading-none">
              <span className="block text-sm font-semibold tracking-tight text-white">
                Aether AI
              </span>

              <span className="mt-1 block text-[10px] tracking-[0.18em] text-white/45">
                SOLUTIONS
              </span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-0.5 lg:flex"
          >
            {links.slice(0, 3).map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`group relative rounded-full px-3 py-2
                  text-[13px] font-medium transition-all duration-300
                  hover:bg-white/[0.06] hover:text-white
                  ${
                    active
                      ? "text-white"
                      : "text-white/60"
                  }`}
                >
                  {item.name}

                  <span
                    className={`absolute bottom-1 left-1/2 h-[2px]
                    -translate-x-1/2 rounded-full bg-orange-400
                    transition-all duration-300
                    ${
                      active
                        ? "w-4"
                        : "w-0 group-hover:w-4"
                    }`}
                  />
                </Link>
              );
            })}

            {/* SOLUTIONS DROPDOWN */}

            <div
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button
                type="button"
                aria-expanded={solutionsOpen}
                aria-haspopup="true"
                onClick={() =>
                  setSolutionsOpen(!solutionsOpen)
                }
                onKeyDown={(event) => {
                  if (event.key === "Escape") {
                    setSolutionsOpen(false);
                  }
                }}
                className="flex items-center gap-1 rounded-full
                px-3 py-2 text-[13px] font-medium text-white/60
                transition hover:bg-white/[0.06] hover:text-white"
              >
                Solutions

                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${
                    solutionsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {solutionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-1/2 top-full z-50 w-[560px]
                    -translate-x-1/2 pt-4"
                  >
                    <div
                      className="grid grid-cols-2 gap-2 rounded-3xl
                      border border-white/15 bg-[#0B0B10]/95
                      p-4 shadow-[0_25px_80px_rgba(0,0,0,0.55)]
                      backdrop-blur-2xl"
                    >
                      {solutions.map((solution) => {
                        const Icon = solution.icon;

                        return (
                          <Link
                            key={solution.name}
                            href={solution.href}
                            onClick={closeMenus}
                            className="group flex items-start gap-3
                            rounded-2xl p-3 transition-all duration-300
                            hover:bg-white/[0.07]"
                          >
                            <div
                              className="flex h-10 w-10 shrink-0
                              items-center justify-center rounded-xl
                              border border-white/10 bg-white/[0.06]
                              text-orange-300"
                            >
                              <Icon size={19} />
                            </div>

                            <div>
                              <p className="text-sm font-semibold text-white">
                                {solution.name}
                              </p>

                              <p className="mt-1 text-xs leading-5 text-white/45">
                                {solution.description}
                              </p>
                            </div>
                          </Link>
                        );
                      })}

                      <Link
                        href="/services"
                        onClick={closeMenus}
                        className="col-span-2 mt-1 flex items-center
                        justify-center gap-2 rounded-xl
                        border border-white/10 bg-white/[0.05]
                        px-4 py-3 text-sm font-medium text-white
                        transition hover:bg-white/[0.1]"
                      >
                        Explore All Services
                        <ArrowUpRight size={16} />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* REMAINING LINKS */}

            {links.slice(3).map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`group relative rounded-full px-3 py-2
                  text-[13px] font-medium transition-all duration-300
                  hover:bg-white/[0.06] hover:text-white
                  ${
                    active
                      ? "text-white"
                      : "text-white/60"
                  }`}
                >
                  {item.name}

                  <span
                    className={`absolute bottom-1 left-1/2 h-[2px]
                    -translate-x-1/2 rounded-full bg-orange-400
                    transition-all duration-300
                    ${
                      active
                        ? "w-4"
                        : "w-0 group-hover:w-4"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* DESKTOP ACTIONS */}

          <div className="hidden shrink-0 items-center gap-2 lg:flex">

            <Link
              href="/signup"
              className="rounded-full border border-white/15
              bg-white/[0.06] px-4 py-2.5
              text-xs font-medium text-white/85
              backdrop-blur-xl transition-all duration-300
              hover:border-green-400/30
              hover:bg-green-400/[0.08]
              hover:text-white"
            >
              Client Portal
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-orange-300/30
              bg-gradient-to-r from-orange-500 to-amber-400
              px-4 py-2.5 text-xs font-semibold text-black
              shadow-[0_6px_25px_rgba(249,115,22,0.22)]
              transition-all duration-300
              hover:-translate-y-0.5
              hover:from-orange-400 hover:to-yellow-300
              hover:shadow-[0_10px_35px_rgba(249,115,22,0.35)]"
            >
              Let&apos;s Build →
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={
              menuOpen ? "Close menu" : "Open menu"
            }
            aria-expanded={menuOpen}
            className="flex h-10 w-10 shrink-0 items-center
            justify-center rounded-full border border-white/15
            bg-white/[0.06] text-white backdrop-blur-xl
            transition-all duration-300
            hover:bg-white/[0.12] lg:hidden"
          >
            {menuOpen ? (
              <X size={21} />
            ) : (
              <Menu size={21} />
            )}
          </button>
        </div>

        {/* MOBILE MENU */}

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              className="relative overflow-hidden border-t
              border-white/[0.10] lg:hidden"
            >
              <nav
                aria-label="Mobile navigation"
                className="flex max-h-[75vh] flex-col overflow-y-auto
                px-5 pb-5 pt-3"
              >
                {links.slice(0, 3).map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMenus}
                    className="rounded-xl px-4 py-3
                    text-sm font-medium text-white/70
                    transition hover:bg-white/[0.06]
                    hover:text-white"
                  >
                    {item.name}
                  </Link>
                ))}

                {/* MOBILE SOLUTIONS */}

                <button
                  type="button"
                  aria-expanded={mobileSolutionsOpen}
                  onClick={() =>
                    setMobileSolutionsOpen(
                      !mobileSolutionsOpen
                    )
                  }
                  className="flex items-center justify-between
                  rounded-xl px-4 py-3 text-left text-sm
                  font-medium text-white/70
                  transition hover:bg-white/[0.06]"
                >
                  Solutions

                  <ChevronDown
                    size={17}
                    className={`transition-transform duration-300 ${
                      mobileSolutionsOpen
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {mobileSolutionsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                      }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="ml-3 flex flex-col border-l border-white/10 pl-3">
                        {solutions.map((solution) => (
                          <Link
                            key={solution.name}
                            href={solution.href}
                            onClick={closeMenus}
                            className="rounded-lg px-3 py-2.5
                            text-xs font-medium text-white/60
                            transition hover:bg-white/[0.06]
                            hover:text-white"
                          >
                            {solution.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {links.slice(3).map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMenus}
                    className="rounded-xl px-4 py-3
                    text-sm font-medium text-white/70
                    transition hover:bg-white/[0.06]
                    hover:text-white"
                  >
                    {item.name}
                  </Link>
                ))}

                {/* MOBILE CLIENT PORTAL */}

                <Link
                  href="/signup"
                  onClick={closeMenus}
                  className="mt-3 rounded-full border
                  border-white/15 bg-white/[0.06]
                  px-6 py-3.5 text-center text-sm
                  font-medium text-white
                  transition hover:bg-white/[0.10]"
                >
                  Client Portal
                </Link>

                {/* MOBILE CTA */}

                <Link
                  href="/contact"
                  onClick={closeMenus}
                  className="mt-2 rounded-full
                  bg-gradient-to-r from-orange-500
                  to-amber-400 px-6 py-3.5
                  text-center text-sm font-semibold text-black
                  shadow-[0_8px_25px_rgba(249,115,22,0.22)]
                  transition-all duration-300
                  hover:from-orange-400
                  hover:to-yellow-300"
                >
                  Let&apos;s Build →
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
