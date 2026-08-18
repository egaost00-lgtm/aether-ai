"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { ArrowLeft, Save, User } from "lucide-react";
import Link from "next/link";

type ClientData = {
  id: string;
  name: string;
  company: string;
  phone: string | null;
  email: string;
};

export default function ProfilePage() {
  const [client, setClient] =
    useState<ClientData | null>(null);

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  /* =========================================================
     LOAD PROFILE
  ========================================================= */

  useEffect(() => {
    async function loadProfile() {
      setLoading(true);
      setError("");

      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError) {
        console.error(
          "AUTH USER ERROR:",
          userError
        );

        setError(userError.message);
        setLoading(false);
        return;
      }

      if (!user) {
        setError("You must be logged in.");
        setLoading(false);
        return;
      }

      setEmail(user.email || "");

      const {
        data,
        error: clientError,
      } = await supabase
        .from("clients")
        .select(
          "id, name, company, phone, email"
        )
        .eq("user_id", user.id)
        .maybeSingle();

      if (clientError) {
        console.error(
          "PROFILE LOADING ERROR:",
          clientError
        );

        setError(clientError.message);
        setLoading(false);
        return;
      }

      if (!data) {
        setError(
          "Your client workspace was not found."
        );
        setLoading(false);
        return;
      }

      console.log(
        "PROFILE CLIENT:",
        data
      );

      const clientData: ClientData = {
        id: data.id,
        name: data.name || "",
        company: data.company || "",
        phone: data.phone || null,
        email:
          data.email ||
          user.email ||
          "",
      };

      setClient(clientData);

      setName(clientData.name);
      setCompany(clientData.company);
      setPhone(clientData.phone || "");
      setEmail(clientData.email);

      setLoading(false);
    }

    loadProfile();
  }, []);

  /* =========================================================
     SAVE PROFILE
  ========================================================= */

  async function handleSave() {
    if (!client) {
      setError(
        "Your client workspace is not available."
      );
      return;
    }

    if (!name.trim()) {
      setError(
        "Name cannot be empty."
      );
      return;
    }

    setSaving(true);
    setMessage("");
    setError("");

    try {
      const {
        data,
        error: updateError,
      } = await supabase
        .from("clients")
        .update({
          name: name.trim(),
          company:
            company.trim() || null,
          phone:
            phone.trim() || null,
        })
        .eq("id", client.id)
        .select(
          "id, name, company, phone, email"
        );

      if (updateError) {
        console.error(
          "PROFILE UPDATE ERROR:",
          updateError
        );

        throw new Error(
          updateError.message
        );
      }

      /*
       * Supabase may return an empty array
       * when UPDATE cannot return the row.
       *
       * The important part is that the
       * update itself succeeded.
       */

      if (!data || data.length === 0) {
        console.log(
          "PROFILE UPDATE SUCCESS - NO RETURNED ROW"
        );

        const updatedClient: ClientData = {
          ...client,
          name: name.trim(),
          company:
            company.trim() || "",
          phone:
            phone.trim() || null,
        };

        setClient(updatedClient);

        setMessage(
          "Profile updated successfully."
        );

        setSaving(false);
        return;
      }

      const updatedRow = data[0];

      console.log(
        "UPDATED PROFILE:",
        updatedRow
      );

      const updatedClient: ClientData = {
        id: updatedRow.id,
        name:
          updatedRow.name || "",
        company:
          updatedRow.company || "",
        phone:
          updatedRow.phone || null,
        email:
          updatedRow.email ||
          client.email,
      };

      setClient(updatedClient);

      setName(updatedClient.name);
      setCompany(updatedClient.company);
      setPhone(
        updatedClient.phone || ""
      );
      setEmail(updatedClient.email);

      setMessage(
        "Profile updated successfully."
      );
    } catch (err) {
      console.error(
        "SAVE PROFILE ERROR:",
        err
      );

      setError(
        err instanceof Error
          ? err.message
          : "Unable to update profile."
      );
    } finally {
      setSaving(false);
    }
  }

  /* =========================================================
     LOADING
  ========================================================= */

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#05070a] text-white">

        <div className="text-center">

          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-white/10 border-t-cyan-400" />

          <p className="mt-4 text-sm text-gray-500">
            Loading profile...
          </p>

        </div>

      </main>
    );
  }

  /* =========================================================
     PAGE
  ========================================================= */

  return (
    <main className="min-h-screen bg-[#05070a] px-5 py-8 text-white sm:px-8">

      <div className="mx-auto max-w-3xl">

        {/* BACK */}

        <Link
          href="/client/dashboard"
          className="inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-cyan-300"
        >
          <ArrowLeft size={16} />
          Back to Dashboard
        </Link>

        {/* HEADER */}

        <div className="mt-8">

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">

              <User size={25} />

            </div>

            <div>

              <p className="text-xs uppercase tracking-[0.2em] text-gray-600">
                Account
              </p>

              <h1 className="mt-1 text-3xl font-bold">
                Profile & Settings
              </h1>

            </div>

          </div>

        </div>

        {/* PROFILE CARD */}

        <div className="mt-8 rounded-3xl border border-white/[0.08] bg-[#090e16] p-6 shadow-2xl sm:p-8">

          <div>

            <h2 className="text-xl font-semibold">
              Personal Information
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Update the information connected to your Aether client account.
            </p>

          </div>

          <div className="mt-8 space-y-5">

            {/* NAME */}

            <div>

              <label className="mb-2 block text-sm text-gray-400">
                Full Name
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) =>
                  setName(
                    e.target.value
                  )
                }
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/50"
                placeholder="Your full name"
              />

            </div>

            {/* COMPANY */}

            <div>

              <label className="mb-2 block text-sm text-gray-400">
                Company Name
              </label>

              <input
                type="text"
                value={company}
                onChange={(e) =>
                  setCompany(
                    e.target.value
                  )
                }
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/50"
                placeholder="Your company"
              />

            </div>

            {/* PHONE */}

            <div>

              <label className="mb-2 block text-sm text-gray-400">
                Phone Number
              </label>

              <input
                type="tel"
                value={phone}
                onChange={(e) =>
                  setPhone(
                    e.target.value
                  )
                }
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/50"
                placeholder="+91 98765 43210"
              />

            </div>

            {/* EMAIL */}

            <div>

              <label className="mb-2 block text-sm text-gray-400">
                Email Address
              </label>

              <input
                type="email"
                value={email}
                disabled
                className="w-full cursor-not-allowed rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-gray-500"
              />

              <p className="mt-2 text-xs text-gray-600">
                Email is managed by your Aether authentication account.
              </p>

            </div>

          </div>

          {/* ERROR */}

          {error && (
            <div className="mt-6 rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-300">
              {error}
            </div>
          )}

          {/* SUCCESS */}

          {message && (
            <div className="mt-6 rounded-xl border border-green-400/20 bg-green-400/10 px-4 py-3 text-sm text-green-300">
              {message}
            </div>
          )}

          {/* SAVE */}

          <div className="mt-8 flex justify-end">

            <button
              type="button"
              onClick={handleSave}
              disabled={saving}
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
            >

              <Save size={16} />

              {saving
                ? "Saving..."
                : "Save Changes"}

            </button>

          </div>

        </div>

      </div>

    </main>
  );
}