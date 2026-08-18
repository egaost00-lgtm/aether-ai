"use client";

import { FormEvent, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [resetLoading, setResetLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [resetMessage, setResetMessage] = useState("");

  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
      setLoading(false);
      return;
    }

    window.location.href = "/client/dashboard";
  }

  async function handleForgotPassword() {
    if (!email) {
      setResetMessage("Please enter your email address first.");
      return;
    }

    setResetLoading(true);
    setResetMessage("");

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    if (error) {
      setResetMessage(error.message);
      setResetLoading(false);
      return;
    }

    setResetMessage(
      "Password reset link sent. Please check your email."
    );

    setResetLoading(false);
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#05070a] px-6 text-white">
      <div className="w-full max-w-md">

        {/* Brand */}
        <div className="mb-8 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-cyan-400">
            AETHER AI SOLUTIONS
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight">
            Client Portal
          </h1>

          <p className="mt-3 text-gray-400">
            Sign in to track your project, messages and payments.
          </p>
        </div>

        {/* Login Card */}
        <form
          onSubmit={handleLogin}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 shadow-2xl backdrop-blur-xl"
        >
          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Email Address
            </label>

            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-gray-600 transition focus:border-cyan-400"
            />
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm text-gray-300">
              Password
            </label>

            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-gray-600 transition focus:border-cyan-400"
            />
          </div>

          {message && (
            <div className="mt-5 rounded-xl border border-red-400/20 bg-red-400/10 p-3 text-sm text-red-300">
              {message}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full rounded-xl bg-cyan-400 px-5 py-3.5 font-semibold text-black transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign in to Client Portal"}
          </button>

          {/* Forgot Password */}
          <div className="mt-5 text-center">
            <button
              type="button"
              onClick={handleForgotPassword}
              disabled={resetLoading}
              className="text-sm text-cyan-400 transition hover:text-cyan-300"
            >
              {resetLoading
                ? "Sending reset link..."
                : "Forgot your password?"}
            </button>
          </div>

          {resetMessage && (
            <div className="mt-4 rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-center text-sm text-cyan-300">
              {resetMessage}
            </div>
          )}

          <p className="mt-5 text-center text-xs text-gray-500">
            Your project information is securely accessible to authorized
            clients only.
          </p>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Powered by{" "}
          <span className="text-gray-300">
            Aether AI Solutions
          </span>
        </p>
      </div>
    </main>
  );
}