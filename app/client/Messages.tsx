"use client";

import { FormEvent, useEffect, useState } from "react";
import { Send, MessageSquare, Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabase";

type Message = {
  id: string;
  client_id: string;
  sender_id: string | null;
  sender_type: string | null;
  sender_name: string | null;
  message: string;
  created_at: string;
};

export default function Messages() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);

  const [userId, setUserId] = useState<string | null>(null);
  const [clientId, setClientId] = useState<string | null>(null);
  

  async function loadMessages(id: string) {
    const { data, error } = await supabase
      .from("project_messages")
      .select("*")
      .eq("client_id", id)
      .order("created_at", { ascending: true });

    if (error) {
      console.error("Message loading error:", error);
      return;
    }

    setMessages((data || []) as Message[]);
  }

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;

    async function initialize() {
      setLoading(true);

      // Get logged-in Supabase user
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      console.log("MESSAGES USER:", user);
      console.log("MESSAGES AUTH ERROR:", authError);

      if (!user) {
        console.error("No authenticated user found.");
        setLoading(false);
        return;
      }

      setUserId(user.id);

      // IMPORTANT:
      // project_messages.client_id references clients.id,
      // NOT auth.users.id.
    const { data: client, error: clientError } = await supabase
  .from("clients")
  .select("id, user_id, name, email, company")
  .eq("user_id", user.id)
  .maybeSingle();

  console.log("AUTH USER ID:", user.id);    
  console.log("CLIENT RECORD:", client);
      console.log("CLIENT ERROR:", clientError);

      if (clientError) {
        console.error("Client lookup error:", clientError);
        setLoading(false);
        return;
      }

      if (!client) {
        console.error(
          "No client record found for this authenticated user."
        );
        setLoading(false);
        return;
      }

      // This is the ID required by project_messages.client_id
      setClientId(client.id);

      console.log("USING CLIENT ID:", client.id);

      await loadMessages(client.id);

      setLoading(false);

      // Refresh messages every 3 seconds
      interval = setInterval(() => {
        loadMessages(client.id);
      }, 3000);
    }

    initialize();

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, []);

  async function handleSend(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const text = newMessage.trim();

    if (!text || !userId || !clientId || sending) {
      return;
    }

    setSending(true);

    console.log("SENDING MESSAGE");
    console.log("client_id:", clientId);
    console.log("sender_id:", userId);

    const { error } = await supabase
      .from("project_messages")
      .insert({
        client_id: clientId,
        sender_id: userId,
        sender_type: "client",
        sender_name: "Client",
        message: text,
      });

    if (error) {
      console.error("MESSAGE SEND ERROR:", error);
      setSending(false);
      return;
    }

    console.log("MESSAGE SENT SUCCESSFULLY");

    setNewMessage("");

    await loadMessages(clientId);

    setSending(false);
  }

  return (
    <div>
      {/* Header */}
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">
          Communication
        </p>

        <h1 className="mt-2 text-3xl font-bold">
          Project Messages
        </h1>

        <p className="mt-3 max-w-2xl text-gray-400">
          Communicate directly with the Aether AI Solutions team
          from your secure project workspace.
        </p>
      </div>

      {/* Chat Card */}
      <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] shadow-2xl">

        {/* Chat Header */}
        <div className="flex items-center gap-3 border-b border-white/10 p-5">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
            <MessageSquare size={20} />
          </div>

          <div>
            <p className="font-semibold">
              Aether Project Team
            </p>

            <div className="mt-1 flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

              <span className="text-xs text-green-400">
                Connected
              </span>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="min-h-[420px] max-h-[520px] space-y-4 overflow-y-auto p-5 sm:p-6">

          {loading ? (
            <div className="flex min-h-[350px] items-center justify-center">
              <Loader2
                size={24}
                className="animate-spin text-cyan-400"
              />
            </div>
          ) : messages.length === 0 ? (
            <div className="flex min-h-[350px] flex-col items-center justify-center text-center">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                <MessageSquare size={24} />
              </div>

              <h2 className="mt-5 text-lg font-semibold">
                No messages yet
              </h2>

              <p className="mt-2 max-w-sm text-sm leading-6 text-gray-500">
                Start a conversation with the Aether team about
                your project.
              </p>
            </div>
          ) : (
            messages.map((item) => {
              const isMine = item.sender_id === userId;

              return (
                <div
                  key={item.id}
                  className={`flex ${
                    isMine ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      isMine
                        ? "rounded-br-md bg-cyan-400 text-black"
                        : "rounded-bl-md border border-white/10 bg-white/[0.06] text-white"
                    }`}
                  >
                    <p className="text-sm leading-6">
                      {item.message}
                    </p>

                    <p
                      className={`mt-1 text-[10px] ${
                        isMine
                          ? "text-black/50"
                          : "text-white/30"
                      }`}
                    >
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

        {/* Input */}
        <form
          onSubmit={handleSend}
          className="border-t border-white/10 p-4 sm:p-5"
        >
          <div className="flex gap-3">

            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Write a message..."
              disabled={sending || !clientId}
              className="min-w-0 flex-1 rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-cyan-400/50 focus:ring-4 focus:ring-cyan-400/[0.05] disabled:opacity-50"
            />

            <button
              type="submit"
              disabled={
                sending ||
                !clientId ||
                !newMessage.trim()
              }
              className="flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-5 py-3.5 font-semibold text-black transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {sending ? (
                <Loader2
                  size={18}
                  className="animate-spin"
                />
              ) : (
                <Send size={18} />
              )}

              <span className="hidden sm:inline">
                Send
              </span>
            </button>

          </div>
        </form>
      </div>
    </div>
  );
}