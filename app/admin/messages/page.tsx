"use client";

import { useEffect, useState } from "react";
import {
  ArrowLeft,
  MessageSquare,
  Search,
  Send,
  User,
} from "lucide-react";
import { supabase } from "@/lib/supabase";

type Client = {
  id: string;
  name: string;
  email: string;
  company: string | null;
  created_at: string;
};

type Message = {
  id: string;
  client_id: string;
  sender_id: string;
  sender_type: "client" | "aether";
  sender_name: string | null;
  message: string;
  created_at: string;
  read_by_admin: boolean;
};

export default function AdminMessagesPage() {
  const [clients, setClients] = useState<Client[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  const [loadingClients, setLoadingClients] = useState(true);
  const [loadingMessages, setLoadingMessages] = useState(false);

  const [newMessage, setNewMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [search, setSearch] = useState("");

  // --------------------------------------------------
  // LOAD CLIENTS
  // --------------------------------------------------
  useEffect(() => {
    async function loadClients() {
      setLoadingClients(true);

      const { data, error } = await supabase
        .from("clients")
        .select("id, name, email, company, created_at")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("ADMIN CLIENT LOAD ERROR:", error);
        setLoadingClients(false);
        return;
      }

      const clientList = data || [];

      setClients(clientList);

      // Select first client automatically
      if (clientList.length > 0) {
        setSelectedClient(clientList[0]);
      }

      setLoadingClients(false);
    }

    loadClients();
  }, []);

  // --------------------------------------------------
  // LOAD MESSAGES FOR SELECTED CLIENT
  // --------------------------------------------------
  useEffect(() => {
    async function loadMessages() {
      if (!selectedClient) {
        setMessages([]);
        return;
      }

      setLoadingMessages(true);

      const { data, error } = await supabase
        .from("project_messages")
        .select("*")
        .eq("client_id", selectedClient.id)
        .order("created_at", { ascending: true });

      if (error) {
        console.error("ADMIN MESSAGE LOAD ERROR:", error);
        setLoadingMessages(false);
        return;
      }

      console.log("SELECTED CLIENT:", selectedClient);
      console.log("CLIENT MESSAGES:", data);

      setMessages(data || []);

const unreadMessageIds = (data || [])
  .filter(
    (item: Message) =>
      item.sender_type === "client" &&
      !item.read_by_admin
  )
  .map((item: Message) => item.id);

if (unreadMessageIds.length > 0) {
  const { error: readError } = await supabase
    .from("project_messages")
    .update({ read_by_admin: true })
    .in("id", unreadMessageIds);

  if (readError) {
    console.error("MARK MESSAGES READ ERROR:", readError);
  }
}

setLoadingMessages(false);
    }

    loadMessages();
  }, [selectedClient]);

  // --------------------------------------------------
  // SEND ADMIN/AETHER REPLY
  // --------------------------------------------------
  async function handleSend(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const text = newMessage.trim();

    if (!text || sending || !selectedClient) return;

    setSending(true);

    const { data: authData, error: authError } =
      await supabase.auth.getUser();

    if (authError || !authData.user) {
      console.error("ADMIN AUTH ERROR:", authError);
      setSending(false);
      return;
    }

   const { data, error } = await supabase
  .from("project_messages")
  .insert({
    client_id: selectedClient.id,
    sender_id: authData.user.id,

    sender_type: "aether",

    sender_name: "Aether AI Solutions",
    message: text,

    // NEW AETHER MESSAGE = UNREAD FOR CLIENT
    read_by_client: false,
  })
  .select()
  .single();

    if (error) {
      console.error("ADMIN MESSAGE SEND ERROR:", {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code,
      });

      setSending(false);
      return;
    }

    if (data) {
      setMessages((current) => [...current, data]);
    }

    setNewMessage("");
    setSending(false);
  }

  // --------------------------------------------------
  // SEARCH CLIENTS
  // --------------------------------------------------
  const filteredClients = clients.filter((client) => {
    const query = search.toLowerCase();

    return (
      client.name?.toLowerCase().includes(query) ||
      client.email?.toLowerCase().includes(query) ||
      client.company?.toLowerCase().includes(query)
    );
  });

  return (
    <main className="min-h-screen bg-[#05070a] text-white">
      <div className="flex min-h-screen">

        {/* SIDEBAR */}
        <aside className="hidden w-64 shrink-0 border-r border-white/10 bg-[#07090d] md:flex md:flex-col">

          <div className="border-b border-white/10 p-6">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-400">
              AETHER
            </p>

            <p className="mt-2 text-sm font-semibold">
              Admin Portal
            </p>
          </div>

          <nav className="flex-1 p-4">
            <a
              href="/admin"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-gray-400 transition hover:bg-white/[0.04] hover:text-white"
            >
              <ArrowLeft size={18} />
              Back to Dashboard
            </a>

            <div className="mt-2 flex items-center gap-3 rounded-xl bg-cyan-400/10 px-4 py-3 text-sm text-cyan-300">
              <MessageSquare size={18} />
              Messages
            </div>
          </nav>

        </aside>

        {/* MAIN */}
        <section className="flex-1">

          {/* HEADER */}
          <header className="border-b border-white/10 px-6 py-5 sm:px-8">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-600">
              Communication
            </p>

            <h1 className="mt-1 text-xl font-semibold">
              Client Messages
            </h1>
          </header>

          <div className="p-5 sm:p-8">

            <div>
              <p className="text-sm text-gray-500">
                Aether Command Center
              </p>

              <h2 className="mt-1 text-3xl font-bold">
                Messages
              </h2>

              <p className="mt-3 text-gray-400">
                Manage conversations with your clients.
              </p>
            </div>

            {/* WORKSPACE */}
            <div className="mt-8 grid min-h-[600px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] lg:grid-cols-[320px_1fr]">

              {/* CLIENT LIST */}
              <aside className="border-b border-white/10 lg:border-b-0 lg:border-r">

                <div className="border-b border-white/10 p-4">

                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-3 py-2.5">

                    <Search
                      size={17}
                      className="text-gray-500"
                    />

                    <input
                      type="text"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search clients..."
                      className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-gray-600"
                    />

                  </div>

                </div>

                {/* CLIENTS */}
                <div className="max-h-[520px] overflow-y-auto">

                  {loadingClients ? (
                    <div className="p-5 text-sm text-gray-500">
                      Loading clients...
                    </div>
                  ) : filteredClients.length === 0 ? (
                    <div className="p-5 text-sm text-gray-500">
                      No clients found.
                    </div>
                  ) : (
                    filteredClients.map((client) => (

                      <button
                        key={client.id}
                        type="button"
                        onClick={() => setSelectedClient(client)}
                        className={`flex w-full items-center gap-3 border-b border-white/10 p-4 text-left transition ${
                          selectedClient?.id === client.id
                            ? "bg-cyan-400/[0.08]"
                            : "hover:bg-white/[0.04]"
                        }`}
                      >

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 text-black">
                          <User size={19} />
                        </div>

                        <div className="min-w-0 flex-1">

                          <p className="truncate text-sm font-semibold text-white">
                            {client.name}
                          </p>

                          <p className="mt-1 truncate text-xs text-gray-500">
                            {client.email}
                          </p>

                          {client.company && (
                            <p className="mt-1 truncate text-[11px] text-gray-600">
                              {client.company}
                            </p>
                          )}

                        </div>

                        <span className="h-2 w-2 shrink-0 rounded-full bg-green-400" />

                      </button>

                    ))
                  )}

                </div>

              </aside>

              {/* CONVERSATION */}
              <section className="flex min-h-[600px] flex-col">

                {/* CONVERSATION HEADER */}
                {selectedClient ? (
                  <div className="flex items-center gap-3 border-b border-white/10 p-5">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                      <MessageSquare size={20} />
                    </div>

                    <div>

                      <p className="font-semibold">
                        {selectedClient.name}
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        {selectedClient.email}
                      </p>

                      {selectedClient.company && (
                        <p className="mt-1 text-[11px] text-gray-600">
                          {selectedClient.company}
                        </p>
                      )}

                    </div>

                  </div>
                ) : (
                  <div className="border-b border-white/10 p-5 text-sm text-gray-500">
                    Select a client
                  </div>
                )}

                {/* MESSAGES */}
                <div className="flex-1 space-y-4 overflow-y-auto p-5 sm:p-6">

                  {loadingMessages ? (
                    <div className="flex min-h-[300px] items-center justify-center">
                      <p className="text-sm text-gray-500">
                        Loading messages...
                      </p>
                    </div>

                  ) : !selectedClient ? (
                    <div className="flex min-h-[300px] items-center justify-center">
                      <p className="text-sm text-gray-500">
                        Select a client to view conversation.
                      </p>
                    </div>

                  ) : messages.length === 0 ? (
                    <div className="flex min-h-[300px] items-center justify-center">
                      <p className="text-sm text-gray-500">
                        No messages from this client yet.
                      </p>
                    </div>

                  ) : (
                    messages.map((item) => {

                      const isAether = item.sender_type === "aether";

                      return (
                        <div
                          key={item.id}
                          className={`flex ${
                            isAether
                              ? "justify-end"
                              : "justify-start"
                          }`}
                        >

                          <div
                            className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                              isAether
                                ? "rounded-br-md border border-cyan-400/20 bg-cyan-400/10"
                                : "rounded-bl-md border border-white/10 bg-white/[0.06]"
                            }`}
                          >

                            <p className="text-[10px] font-medium uppercase tracking-wider text-white/30">
                              {isAether
                                ? "Aether AI Solutions"
                                : selectedClient.name}
                            </p>

                            <p className="mt-1 text-sm leading-6">
                              {item.message}
                            </p>

                            <p className="mt-1 text-[10px] text-white/30">
                              {new Date(
                                item.created_at
                              ).toLocaleString()}
                            </p>

                          </div>

                        </div>
                      );
                    })
                  )}

                </div>

                {/* REPLY */}
                <form
                  onSubmit={handleSend}
                  className="border-t border-white/10 p-4 sm:p-5"
                >

                  <div className="flex gap-3">

                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) =>
                        setNewMessage(e.target.value)
                      }
                      placeholder={
                        selectedClient
                          ? `Reply to ${selectedClient.name}...`
                          : "Select a client..."
                      }
                      disabled={!selectedClient || sending}
                      className="min-w-0 flex-1 rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-600 focus:border-cyan-400/50 disabled:opacity-50"
                    />

                    <button
                      type="submit"
                      disabled={
                        !selectedClient ||
                        !newMessage.trim() ||
                        sending
                      }
                      className="flex shrink-0 items-center gap-2 rounded-2xl bg-cyan-400 px-5 py-3.5 font-semibold text-black transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-40"
                    >

                      <Send size={18} />

                      <span className="hidden sm:inline">
                        {sending ? "Sending..." : "Send"}
                      </span>

                    </button>

                  </div>

                </form>

              </section>

            </div>

          </div>

        </section>

      </div>
    </main>
  );
}