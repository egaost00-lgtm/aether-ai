"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Eye,
  EyeOff,
  ShieldCheck,
  Sparkles,
  Zap,
  ArrowRight,
  CheckCircle2,
  LockKeyhole,
  Cpu,
} from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function SignupPage() {
  const [name, setName] = useState("");
const [company, setCompany] = useState("");
const [phone, setPhone] = useState("");
const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSignup(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setMessage("");
    setErrorMessage("");

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
      data: {
  full_name: name,
  company_name: company,
  phone: phone,
},
        emailRedirectTo: `${window.location.origin}/login`,
      },
    });

    if (error) {
      setErrorMessage(error.message);
      setLoading(false);
      return;
    }

    if (data.session) {
      window.location.href = "/client/dashboard";
      return;
    }

    setMessage(
      "Account created successfully. Please check your email to verify your account."
    );

    setLoading(false);
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#02050a] px-5 py-10 text-white sm:px-6">
      {/* ========================================================= */}
      {/* AETHER AI DIGITAL BACKGROUND */}
      {/* ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Deep atmospheric glows */}

        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.055] blur-[160px]" />

        <div className="absolute -left-40 top-0 h-[550px] w-[550px] rounded-full bg-orange-500/[0.07] blur-[160px]" />

        <div className="absolute -right-40 bottom-0 h-[550px] w-[550px] rounded-full bg-green-500/[0.06] blur-[160px]" />

        {/* Technical grid */}

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />

        {/* ===================================================== */}
        {/* AI NEURAL NETWORK */}
        {/* ===================================================== */}

        <svg
          className="absolute inset-0 h-full w-full opacity-50"
          viewBox="0 0 1200 900"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="networkLine"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
              <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
            </linearGradient>

            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Left network */}

          <g stroke="url(#networkLine)" strokeWidth="1">
            <line x1="70" y1="160" x2="240" y2="250" />
            <line x1="240" y1="250" x2="330" y2="170" />
            <line x1="240" y1="250" x2="350" y2="360" />
            <line x1="350" y1="360" x2="210" y2="470" />
            <line x1="210" y1="470" x2="80" y2="390" />
            <line x1="80" y1="390" x2="70" y2="160" />
            <line x1="350" y1="360" x2="500" y2="300" />
          </g>

          {/* Right network */}

          <g stroke="url(#networkLine)" strokeWidth="1">
            <line x1="1130" y1="150" x2="960" y2="230" />
            <line x1="960" y1="230" x2="870" y2="150" />
            <line x1="960" y1="230" x2="850" y2="350" />
            <line x1="850" y1="350" x2="990" y2="470" />
            <line x1="990" y1="470" x2="1120" y2="390" />
            <line x1="1120" y1="390" x2="1130" y2="150" />
            <line x1="850" y1="350" x2="700" y2="300" />
          </g>

          {/* Lower network */}

          <g stroke="url(#networkLine)" strokeWidth="1">
            <line x1="180" y1="760" x2="330" y2="650" />
            <line x1="330" y1="650" x2="450" y2="730" />
            <line x1="450" y1="730" x2="600" y2="650" />
            <line x1="600" y1="650" x2="750" y2="730" />
            <line x1="750" y1="730" x2="900" y2="650" />
            <line x1="900" y1="650" x2="1030" y2="760" />
          </g>

          {/* Network nodes */}

          <g filter="url(#glow)">
            <circle cx="70" cy="160" r="3" fill="#22d3ee" />
            <circle cx="240" cy="250" r="4" fill="#22d3ee" />
            <circle cx="330" cy="170" r="3" fill="#34d399" />
            <circle cx="350" cy="360" r="4" fill="#22d3ee" />
            <circle cx="210" cy="470" r="3" fill="#f97316" />
            <circle cx="80" cy="390" r="3" fill="#22d3ee" />

            <circle cx="1130" cy="150" r="3" fill="#22d3ee" />
            <circle cx="960" cy="230" r="4" fill="#22d3ee" />
            <circle cx="870" cy="150" r="3" fill="#34d399" />
            <circle cx="850" cy="350" r="4" fill="#22d3ee" />
            <circle cx="990" cy="470" r="3" fill="#f97316" />
            <circle cx="1120" cy="390" r="3" fill="#22d3ee" />

            <circle cx="180" cy="760" r="3" fill="#22d3ee" />
            <circle cx="330" cy="650" r="3" fill="#34d399" />
            <circle cx="450" cy="730" r="3" fill="#22d3ee" />
            <circle cx="600" cy="650" r="4" fill="#22d3ee" />
            <circle cx="750" cy="730" r="3" fill="#34d399" />
            <circle cx="900" cy="650" r="3" fill="#22d3ee" />
            <circle cx="1030" cy="760" r="3" fill="#f97316" />
          </g>
        </svg>

        {/* Animated data pulses */}

        <motion.div
          animate={{
            x: ["0vw", "100vw"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-0 top-[27%] h-[2px] w-24 bg-gradient-to-r from-transparent via-cyan-300 to-transparent blur-[1px]"
        />

        <motion.div
          animate={{
            x: ["100vw", "0vw"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
          className="absolute left-0 top-[68%] h-[2px] w-28 bg-gradient-to-r from-transparent via-green-300 to-transparent blur-[1px]"
        />

        {/* Central AI core */}

        <motion.div
          animate={{
            scale: [1, 1.06, 1],
            opacity: [0.45, 0.75, 0.45],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/[0.08] bg-cyan-400/[0.015] blur-[1px]"
        />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/[0.055]"
        />

        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.045]"
        />

        {/* Floating nodes */}

        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
          }}
          className="absolute left-[8%] top-[22%] h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_25px_rgba(34,211,238,1)]"
        />

        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 1,
          }}
          className="absolute right-[9%] top-[26%] h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_25px_rgba(34,211,238,1)]"
        />

        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            delay: 0.5,
          }}
          className="absolute left-[13%] bottom-[22%] h-2 w-2 rounded-full bg-green-400 shadow-[0_0_25px_rgba(34,197,94,0.9)]"
        />

        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            delay: 1.5,
          }}
          className="absolute right-[14%] bottom-[24%] h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_25px_rgba(249,115,22,0.9)]"
        />
      </div>

      {/* ========================================================= */}
      {/* MAIN CONTENT */}
      {/* ========================================================= */}

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl items-center justify-center">
        <div className="w-full max-w-lg">

          {/* ===================================================== */}
          {/* BRAND */}
          {/* ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-7 text-center"
          >
            <div className="mb-5 flex justify-center">
              <div className="relative">
                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                    rotate: [0, 3, -3, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex h-16 w-16 items-center justify-center rounded-[20px] border border-white/30 bg-gradient-to-br from-orange-400 via-yellow-400 to-green-500 text-2xl font-black text-white shadow-[0_0_45px_rgba(34,211,238,0.18)]"
                >
                  A
                </motion.div>

                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#02050a] bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,1)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                </span>
              </div>
            </div>

            <p className="text-[10px] font-semibold uppercase tracking-[0.5em] text-cyan-300">
              AETHER AI SOLUTIONS
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Create Account
            </h1>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-white/45">
              Create your secure account and enter the
              <span className="text-cyan-300">
                {" "}
                Aether AI Client Portal.
              </span>
            </p>
          </motion.div>

          {/* ===================================================== */}
          {/* SYSTEM STATUS */}
          {/* ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 flex items-center justify-between rounded-2xl border border-white/[0.08] bg-white/[0.025] px-4 py-3 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-400/10 bg-cyan-400/[0.06]">
                <Cpu size={15} className="text-cyan-300" />
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/65">
                  AI Core
                </p>

                <p className="mt-0.5 text-[10px] text-white/30">
                  Authentication system ready
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,1)]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-green-300">
                Online
              </span>
            </div>
          </motion.div>

          {/* ===================================================== */}
          {/* FORM */}
          {/* ===================================================== */}

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15 }}
            onSubmit={handleSignup}
            className="relative overflow-hidden rounded-[30px] border border-white/[0.13] bg-white/[0.045] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.55)] backdrop-blur-2xl sm:p-8"
          >
            {/* Premium card lighting */}

            <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-cyan-400/[0.08] blur-[90px]" />

            <div className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-orange-400/[0.045] blur-[90px]" />

            <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />

            <div className="relative">

              {/* Card header */}

              <div className="mb-7 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <Sparkles size={15} className="text-cyan-300" />

                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                      Secure Access
                    </p>
                  </div>

                  <p className="mt-2 text-xs text-white/30">
                    Initialize your client workspace
                  </p>
                </div>

                <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 sm:flex">
                  <LockKeyhole size={11} className="text-cyan-300/60" />

                  <span className="font-mono text-[9px] tracking-[0.2em] text-cyan-300/60">
                    CORE_01
                  </span>
                </div>
              </div>

              {/* ================================================= */}
              {/* FULL NAME */}
              {/* ================================================= */}

              <div>
                <label className="mb-2 block text-xs font-medium text-white/60">
                  Full Name
                </label>

                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition duration-300 placeholder:text-white/20 hover:border-white/20 focus:border-cyan-400/60 focus:bg-cyan-400/[0.025] focus:ring-4 focus:ring-cyan-400/[0.06]"
                />
              </div>

              {/* ================================================= */}
              {/* COMPANY */}
              {/* ================================================= */}

              <div className="mt-5">
                <label className="mb-2 block text-xs font-medium text-white/60">
                  Company Name
                </label>

                <input
                  type="text"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Your company"
                  className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition duration-300 placeholder:text-white/20 hover:border-white/20 focus:border-cyan-400/60 focus:bg-cyan-400/[0.025] focus:ring-4 focus:ring-cyan-400/[0.06]"
                />
              </div>
              {/* ================================================= */}
{/* PHONE */}
{/* ================================================= */}

<div className="mt-5">
  <label className="mb-2 block text-xs font-medium text-white/60">
    Phone Number
  </label>

  <input
    type="tel"
    required
    value={phone}
    onChange={(e) => setPhone(e.target.value)}
    placeholder="+91 98765 43210"
    className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition duration-300 placeholder:text-white/20 hover:border-white/20 focus:border-cyan-400/60 focus:bg-cyan-400/[0.025] focus:ring-4 focus:ring-cyan-400/[0.06]"
  />
</div>

              {/* ================================================= */}
              {/* EMAIL */}
              {/* ================================================= */}

              <div className="mt-5">
                <label className="mb-2 block text-xs font-medium text-white/60">
                  Email Address
                </label>

                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition duration-300 placeholder:text-white/20 hover:border-white/20 focus:border-cyan-400/60 focus:bg-cyan-400/[0.025] focus:ring-4 focus:ring-cyan-400/[0.06]"
                />
              </div>

              {/* ================================================= */}
              {/* PASSWORD */}
              {/* ================================================= */}

              <div className="mt-5">
                <label className="mb-2 block text-xs font-medium text-white/60">
                  Password
                </label>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Minimum 6 characters"
                    className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 pr-12 text-sm text-white outline-none transition duration-300 placeholder:text-white/20 hover:border-white/20 focus:border-cyan-400/60 focus:bg-cyan-400/[0.025] focus:ring-4 focus:ring-cyan-400/[0.06]"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-xl text-white/30 transition hover:bg-white/10 hover:text-white"
                  >
                    {showPassword ? (
                      <EyeOff size={17} />
                    ) : (
                      <Eye size={17} />
                    )}
                  </button>
                </div>
              </div>

              {/* ================================================= */}
              {/* CONFIRM PASSWORD */}
              {/* ================================================= */}

              <div className="mt-5">
                <label className="mb-2 block text-xs font-medium text-white/60">
                  Confirm Password
                </label>

                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Repeat your password"
                    className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 pr-12 text-sm text-white outline-none transition duration-300 placeholder:text-white/20 hover:border-white/20 focus:border-cyan-400/60 focus:bg-cyan-400/[0.025] focus:ring-4 focus:ring-cyan-400/[0.06]"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    aria-label={
                      showConfirmPassword
                        ? "Hide confirm password"
                        : "Show confirm password"
                    }
                    className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-xl text-white/30 transition hover:bg-white/10 hover:text-white"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={17} />
                    ) : (
                      <Eye size={17} />
                    )}
                  </button>
                </div>
              </div>

              {/* ================================================= */}
              {/* PASSWORD STATUS */}
              {/* ================================================= */}

              {confirmPassword.length > 0 && (
                <div className="mt-3 flex items-center gap-2 text-xs">
                  {password === confirmPassword ? (
                    <>
                      <CheckCircle2
                        size={14}
                        className="text-green-400"
                      />

                      <span className="text-green-300">
                        Passwords match
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />

                      <span className="text-orange-300">
                        Passwords do not match
                      </span>
                    </>
                  )}
                </div>
              )}

              {/* ================================================= */}
              {/* ERROR */}
              {/* ================================================= */}

              {errorMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-5 rounded-2xl border border-red-400/20 bg-red-400/[0.06] p-4 text-sm text-red-300"
                >
                  {errorMessage}
                </motion.div>
              )}

              {/* ================================================= */}
              {/* SUCCESS */}
              {/* ================================================= */}

              {message && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-5 rounded-2xl border border-green-400/20 bg-green-400/[0.06] p-4 text-sm leading-5 text-green-300"
                >
                  {message}
                </motion.div>
              )}

              {/* ================================================= */}
              {/* CREATE ACCOUNT BUTTON */}
              {/* ================================================= */}

              <button
                type="submit"
                disabled={loading}
                className="group relative mt-7 flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-r from-orange-500 via-orange-400 to-green-500 px-5 py-4 font-semibold text-white shadow-[0_12px_35px_rgba(249,115,22,0.18)] transition duration-300 hover:scale-[1.01] hover:shadow-[0_16px_45px_rgba(34,197,94,0.2)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                {loading ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />

                    <span className="relative">
                      Creating account...
                    </span>
                  </>
                ) : (
                  <>
                    <Zap size={17} className="relative" />

                    <span className="relative">
                      Create Aether Account
                    </span>

                    <ArrowRight
                      size={17}
                      className="relative transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </>
                )}
              </button>

              {/* ================================================= */}
              {/* SECURITY NOTE */}
              {/* ================================================= */}

              <div className="mt-5 flex items-center justify-center gap-2 text-center text-[10px] leading-4 text-white/30">
                <ShieldCheck
                  size={13}
                  className="shrink-0 text-cyan-400/60"
                />

                <span>
                  Your credentials are securely processed through
                  Aether authentication.
                </span>
              </div>

              {/* ================================================= */}
              {/* LOGIN */}
              {/* ================================================= */}

              <div className="mt-6 border-t border-white/[0.08] pt-6 text-center">
                <p className="text-xs text-white/35">
                  Already have an account?
                </p>

                <Link
                  href="/login"
                  className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
                >
                  Sign in to Client Portal
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </motion.form>

          {/* ===================================================== */}
          {/* FOOTER */}
          {/* ===================================================== */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 text-center"
          >
            <div className="flex items-center justify-center gap-2 text-[9px] uppercase tracking-[0.25em] text-white/25">
              <span>AI CORE</span>

              <span className="h-1 w-1 rounded-full bg-cyan-400/50" />

              <span>SECURE</span>

              <span className="h-1 w-1 rounded-full bg-green-400/50" />

              <span>CONNECTED</span>
            </div>

            <p className="mt-3 text-xs text-white/20">
              © {new Date().getFullYear()} Aether AI Solutions
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
}