"use client";

import { useEffect, useState } from "react";
import { Users, Mail, Building2, Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabase";

type Client = {
  id: string;
  user_id: string | null;
  name: string;
  email: string;
  company: string | null;
  created_at: string;
};

export default function AdminClientsPage() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadClients() {
      setLoading(true);

      const { data, error } = await supabase
        .from("clients")
        .select("id, user_id, name, email, company, created_at")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("ADMIN CLIENT LOAD ERROR:", error);
        setLoading(false);
        return;
      }

      console.log("ADMIN CLIENTS:", data);

      setClients((data || []) as Client[]);
      setLoading(false);
    }

    loadClients();
  }, []);

  return (
    <main className="min-h-screen bg-[#05070a] p-6 text-white sm:p-8">
      <div className="mx-auto max-w-7xl">

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">
            Aether Workspace
          </p>

          <h1 className="mt-2 text-3xl font-bold">
            Clients
          </h1>

          <p className="mt-3 text-gray-400">
            Manage all registered Aether clients from one place.
          </p>
        </div>

        {loading ? (
          <div className="mt-10 flex min-h-[300px] items-center justify-center">
            <Loader2
              size={28}
              className="animate-spin text-cyan-400"
            />
          </div>
        ) : clients.length === 0 ? (
          <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.025] p-10 text-center">
            <Users
              size={32}
              className="mx-auto text-gray-600"
            />

            <p className="mt-4 font-semibold">
              No clients yet
            </p>

            <p className="mt-2 text-sm text-gray-500">
              New registered clients will appear here automatically.
            </p>
          </div>
        ) : (
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {clients.map((client) => (
              <div
                key={client.id}
                className="rounded-3xl border border-white/10 bg-white/[0.025] p-5 transition hover:border-cyan-400/20"
              >
                <div className="flex items-start justify-between gap-4">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                    <Users size={20} />
                  </div>

                  <span className="rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-green-400">
                    Client
                  </span>
                </div>

                <h2 className="mt-5 text-lg font-semibold">
                  {client.name}
                </h2>

                <div className="mt-4 space-y-3">

                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <Mail size={16} className="text-cyan-400" />
                    <span className="truncate">
                      {client.email}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <Building2
                      size={16}
                      className="text-cyan-400"
                    />
                    <span>
                      {client.company || "No company"}
                    </span>
                  </div>

                </div>

                <div className="mt-5 border-t border-white/10 pt-4">
                  <p className="text-[10px] uppercase tracking-[0.15em] text-gray-600">
                    Registered
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    {new Date(
                      client.created_at
                    ).toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </main>
  );
}