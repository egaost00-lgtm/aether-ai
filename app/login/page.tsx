
"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
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

// Preserves your existing routing behavior.
// Admin authorization must also be enforced on protected routes.
const ADMIN_USER_ID = "db3468c7-d91c-401d-b236-9964b9a6b5da";

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

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [resetLoading, setResetLoading] = useState(false);

  const [message, setMessage] = useState("");
  const [resetMessage, setResetMessage] = useState("");
  const [resetError, setResetError] = useState("");

  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (loading || resetLoading) return;

    setLoading(true);
    setMessage("");
    setResetMessage("");
    setResetError("");

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim().toLowerCase(),
        password,
      });

      if (error) {
        setMessage(error.message);
        return;
      }

      if (!data.user) {
        setMessage(
          "We couldn't verify your account. Please try again."
        );
        return;
      }

      window.location.assign(
        data.user.id === ADMIN_USER_ID
          ? "/admin"
          : "/client/dashboard"
      );
    } catch {
      setMessage(
        "Unable to sign in right now. Check your connection and try again."
      );
    } finally {
      setLoading(false);
    }
  }

  async function handleForgotPassword() {
    if (loading || resetLoading) return;

    setMessage("");
    setResetMessage("");
    setResetError("");

    const normalizedEmail = email.trim().toLowerCase();

    if (!normalizedEmail) {
      setResetError(
        "Enter your email address above to receive a reset link."
      );
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      setResetError("Please enter a valid email address.");
      return;
    }

    setResetLoading(true);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(
        normalizedEmail,
        {
          redirectTo: `${window.location.origin}/reset-password`,
        }
      );

      if (error) {
        setResetError(error.message);
        return;
      }

      setResetMessage(
        "If an account exists for this email, you'll receive password reset instructions shortly."
      );
    } catch {
      setResetError(
        "Unable to send the reset link right now. Please try again."
      );
    } finally {
      setResetLoading(false);
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
            href="/signup"
            className="text-sm font-medium text-slate-300 transition hover:text-amber-300"
          >
            Create account
            <ArrowRight className="ml-2 inline-block h-4 w-4" />
          </Link>
        </header>

        {/* Main layout */}
        <div className="grid flex-1 items-center gap-8 py-8 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
          {/* Left */}
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
              Welcome back to your dedicated Aether AI workspace.
              Stay connected with your projects, conversations,
              payments, and shared documents.
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

          {/* Login form */}
          <motion.section
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto w-full max-w-xl"
          >
            <div className="rounded-[28px] border border-white/10 bg-[#101725]/95 p-6 shadow-[0_25px_90px_rgba(0,0,0,0.35)] sm:p-7">
              <div className="mb-8">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/[0.08]">
                  <LockKeyhole size={22} className="text-amber-400" />
                </div>

                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Welcome back
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Sign in to access your Aether AI Client Portal.
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-5">
                <div>
                  <label
                    htmlFor="loginEmail"
                    className="mb-2 block text-xs font-medium text-slate-300"
                  >
                    Email address
                  </label>

                  <input
                    id="loginEmail"
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
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <label
                      htmlFor="loginPassword"
                      className="text-xs font-medium text-slate-300"
                    >
                      Password
                    </label>

                    <button
                      type="button"
                      onClick={handleForgotPassword}
                      disabled={resetLoading || loading}
                      className="text-xs font-semibold text-amber-400 transition hover:text-amber-300 disabled:opacity-50"
                    >
                      {resetLoading
                        ? "Sending..."
                        : "Forgot password?"}
                    </button>
                  </div>

                  <div className="relative">
                    <input
                      id="loginPassword"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
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
                      {showPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>
                </div>

                {message && (
                  <div
                    role="alert"
                    className="rounded-xl border border-red-400/20 bg-red-400/[0.07] p-4 text-sm leading-6 text-red-300"
                  >
                    {message}
                  </div>
                )}

                {resetError && (
                  <div
                    role="alert"
                    className="rounded-xl border border-red-400/20 bg-red-400/[0.07] p-4 text-sm leading-6 text-red-300"
                  >
                    {resetError}
                  </div>
                )}

                {resetMessage && (
                  <div
                    role="status"
                    className="flex items-start gap-3 rounded-xl border border-emerald-400/20 bg-emerald-400/[0.07] p-4 text-sm leading-6 text-emerald-300"
                  >
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
                    <span>{resetMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading || resetLoading}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-5 py-4 text-sm font-bold text-[#111827] shadow-[0_10px_35px_rgba(245,158,11,0.12)] transition hover:from-amber-300 hover:to-amber-400 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#111827]/30 border-t-[#111827]" />
                      Signing in...
                    </>
                  ) : (
                    <>
                      Sign in to your workspace
                      <ArrowRight
                        size={17}
                        className="transition group-hover:translate-x-1"
                      />
                    </>
                  )}
                </button>
              </form>

              <div className="mt-7 flex items-center justify-center gap-2 text-center text-xs text-slate-500">
                <ShieldCheck size={15} className="text-amber-400" />
                Secure account access
              </div>

              <div className="mt-7 border-t border-white/10 pt-6 text-center">
                <p className="text-sm text-slate-400">
                  New to Aether AI?{" "}
                  <Link
                    href="/signup"
                    className="font-semibold text-amber-400 transition hover:text-amber-300"
                  >
                    Create an account
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
