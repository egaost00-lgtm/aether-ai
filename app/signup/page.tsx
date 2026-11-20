
"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Eye,
  EyeOff,
  FolderKanban,
  LockKeyhole,
  MessageSquareText,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import { supabase } from "@/lib/supabase";

const inputClass =
  "w-full rounded-xl border border-white/10 bg-[#0B1220] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-500 hover:border-white/20 focus:border-amber-400/60 focus:ring-4 focus:ring-amber-400/10";

const features = [
  {
    icon: FolderKanban,
    title: "Project visibility",
    description: "Follow your projects and important milestones.",
  },
  {
    icon: MessageSquareText,
    title: "Direct communication",
    description: "Keep conversations connected to your work.",
  },
  {
    icon: Wallet,
    title: "Billing & documents",
    description: "Access your payments and shared project files.",
  },
];

export default function SignupPage() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const passwordChecks = [
    { label: "At least 8 characters", valid: password.length >= 8 },
    { label: "Uppercase letter", valid: /[A-Z]/.test(password) },
    { label: "Lowercase letter", valid: /[a-z]/.test(password) },
    { label: "Number", valid: /[0-9]/.test(password) },
  ];

  const passwordValid = passwordChecks.every((item) => item.valid);

  async function handleSignup(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (loading) return;

    setMessage("");
    setErrorMessage("");

    if (!name.trim() || !company.trim() || !phone.trim()) {
      setErrorMessage("Please complete all required fields.");
      return;
    }

    if (!passwordValid) {
      setErrorMessage("Please meet all password requirements.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Your passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signUp({
        email: email.trim().toLowerCase(),
        password,
        options: {
          data: {
            full_name: name.trim(),
            company_name: company.trim(),
            phone: phone.trim(),
          },
          emailRedirectTo: `${window.location.origin}/login`,
        },
      });

      if (error) {
        setErrorMessage(error.message);
        return;
      }

      if (data.session) {
        window.location.assign("/client/dashboard");
        return;
      }

      setMessage(
        "Your registration request was received. If email verification is required, check your inbox for a confirmation link before signing in."
      );
    } catch {
      setErrorMessage(
        "We couldn't complete your registration. Please check your connection and try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070B13] text-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-64 top-0 h-[600px] w-[600px] rounded-full bg-amber-500/[0.055] blur-[150px]" />
        <div className="absolute -right-64 bottom-0 h-[600px] w-[600px] rounded-full bg-blue-500/[0.055] blur-[150px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg,rgba(255,255,255,.8) 1px,transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-5 py-8 sm:px-8 lg:px-12">
        {/* Header */}
        <header className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-amber-300/30 bg-gradient-to-br from-amber-300 to-amber-600 text-xl font-black text-[#111827]">
              A
            </div>

            <div>
              <p className="text-sm font-bold tracking-[0.13em]">
                AETHER AI
              </p>
              <p className="text-[10px] uppercase tracking-[0.25em] text-slate-400">
                Solutions
              </p>
            </div>
          </Link>

          <Link
            href="/login"
            className="text-sm font-medium text-slate-300 transition hover:text-amber-300"
          >
            Sign in
            <ArrowRight className="ml-2 inline-block h-4 w-4" />
          </Link>
        </header>

        <div className="grid flex-1 items-center gap-8 py-8 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
          {/* Left content */}
          <motion.section
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mx-auto w-full max-w-xl lg:mx-0"
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/[0.06] px-4 py-2 text-xs font-medium text-amber-300">
              <ShieldCheck size={15} />
              Aether Client Experience
            </div>

            <h1 className="max-w-xl text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl xl:text-[58px]">
              Your projects.
              <br />
              Your workspace.
              <br />
              <span className="text-amber-400">
                All in one place.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-8 text-slate-400">
              A dedicated client portal designed to make
              collaboration simple, transparent, and organized
              throughout your journey with Aether AI Solutions.
            </p>

            <div className="mt-10 space-y-7">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div key={feature.title} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-amber-400/15 bg-amber-400/[0.06] text-amber-400">
                      <Icon size={21} />
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-white">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 flex items-center gap-3 border-t border-white/10 pt-6 text-xs text-slate-400">
              <LockKeyhole size={16} className="text-amber-400" />
              Secure authentication powered by Supabase
            </div>
          </motion.section>

          {/* Signup form */}
          <motion.section
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto w-full max-w-xl"
          >
            <div className="rounded-[28px] border border-white/10 bg-[#101725]/95 p-6 shadow-[0_25px_90px_rgba(0,0,0,0.35)] sm:p-7">
              <div className="mb-8">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/[0.08]">
                  <ShieldCheck size={22} className="text-amber-400" />
                </div>

                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Create your account
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Enter your details to get started with the
                  Aether AI Client Portal.
                </p>
              </div>

              <form onSubmit={handleSignup} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="mb-2 block text-xs font-medium text-slate-300"
                    >
                      Full name
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      autoComplete="name"
                      required
                      maxLength={100}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your full name"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="mb-2 block text-xs font-medium text-slate-300"
                    >
                      Company name
                    </label>
                    <input
                      id="company"
                      type="text"
                      autoComplete="organization"
                      required
                      maxLength={120}
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Your company"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-xs font-medium text-slate-300"
                  >
                    Phone number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    maxLength={25}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-medium text-slate-300"
                  >
                    Work email
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={254}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-xs font-medium text-slate-300"
                  >
                    Password
                  </label>

                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="new-password"
                      required
                      minLength={8}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Create a strong password"
                      aria-describedby="passwordRequirements"
                      className={`${inputClass} pr-12`}
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      aria-pressed={showPassword}
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>

                  <div
                    id="passwordRequirements"
                    className="mt-3 grid gap-2 sm:grid-cols-2"
                  >
                    {passwordChecks.map((item) => (
                      <div
                        key={item.label}
                        className={`flex items-center gap-2 text-xs ${
                          item.valid
                            ? "text-emerald-400"
                            : "text-slate-500"
                        }`}
                      >
                        <Check
                          size={13}
                          aria-hidden="true"
                          className={
                            item.valid ? "opacity-100" : "opacity-40"
                          }
                        />
                        {item.label}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="mb-2 block text-xs font-medium text-slate-300"
                  >
                    Confirm password
                  </label>

                  <div className="relative">
                    <input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      autoComplete="new-password"
                      required
                      value={confirmPassword}
                      onChange={(e) =>
                        setConfirmPassword(e.target.value)
                      }
                      placeholder="Repeat your password"
                      className={`${inputClass} pr-12`}
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword((v) => !v)
                      }
                      aria-label={
                        showConfirmPassword
                          ? "Hide confirm password"
                          : "Show confirm password"
                      }
                      aria-pressed={showConfirmPassword}
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>

                  {confirmPassword.length > 0 && (
                    <p
                      className={`mt-2 flex items-center gap-2 text-xs ${
                        password === confirmPassword
                          ? "text-emerald-400"
                          : "text-amber-400"
                      }`}
                    >
                      {password === confirmPassword ? (
                        <>
                          <CheckCircle2 size={14} />
                          Passwords match
                        </>
                      ) : (
                        "Passwords do not match yet"
                      )}
                    </p>
                  )}
                </div>

                {errorMessage && (
                  <div
                    role="alert"
                    className="rounded-xl border border-red-400/20 bg-red-400/[0.07] p-4 text-sm leading-6 text-red-300"
                  >
                    {errorMessage}
                  </div>
                )}

                {message && (
                  <div
                    role="status"
                    className="rounded-xl border border-emerald-400/20 bg-emerald-400/[0.07] p-4 text-sm leading-6 text-emerald-300"
                  >
                    {message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading || !passwordValid || password !== confirmPassword}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-5 py-4 text-sm font-bold text-[#111827] shadow-[0_10px_35px_rgba(245,158,11,0.12)] transition hover:from-amber-300 hover:to-amber-400 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#111827]/30 border-t-[#111827]" />
                      Creating account...
                    </>
                  ) : (
                    <>
                      Create account
                      <ArrowRight
                        size={17}
                        className="transition group-hover:translate-x-1"
                      />
                    </>
                  )}
                </button>

                <p className="text-center text-xs leading-5 text-slate-500">
                  By registering, you agree to use the portal
                  responsibly and keep your account credentials secure.
                </p>
              </form>

              <div className="mt-7 border-t border-white/10 pt-6 text-center">
                <p className="text-sm text-slate-400">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="font-semibold text-amber-400 transition hover:text-amber-300"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </motion.section>
        </div>

        <footer className="border-t border-white/10 py-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Aether AI Solutions.
          All rights reserved.
        </footer>
      </div>
    </main>
  );
}
