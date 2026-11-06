
"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUp,
  Bot,
  Check,
  Loader2,
  MessageCircle,
  RefreshCw,
  Sparkles,
  X,
} from "lucide-react";

const WELCOME_MESSAGE =
  "Hey 👋 I'm Aether AI. I can help you explore our services, pricing, AI automation, agents, and digital solutions.";

const quickQuestions = [
  "What services does Aether AI offer?",
  "Which pricing plan is right for me?",
  "What can your AI agents do?",
  "Tell me about AI automation",
];

type Message = {
  role: "user" | "assistant";
  content: string;
};

function getWelcomeMessage(): Message {
  return {
    role: "assistant",
    content: WELCOME_MESSAGE,
  };
}

export default function AetherAIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    getWelcomeMessage(),
  ]);

  function resetChat() {
    if (isLoading) return;

    setMessages([getWelcomeMessage()]);
    setInput("");
  }

  async function sendMessage(text?: string) {
    const message = (text ?? input).trim();

    if (!message || isLoading) return;

    const conversation: Message[] = [
      ...messages,
      {
        role: "user",
        content: message,
      },
    ];

    setInput("");
    setMessages(conversation);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: conversation,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Something went wrong."
        );
      }

      if (
        typeof data.reply !== "string" ||
        !data.reply.trim()
      ) {
        throw new Error("The assistant returned an empty response.");
      }

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: data.reply.trim(),
        },
      ]);
    } catch (error) {
      console.error("Aether AI chat error:", error);

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            "I'm having trouble connecting right now. Please try again or contact the Aether AI team at hello@aetheraisolutions.in.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    void sendMessage();
  }

  return (
    <>
      {/* Floating AI Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.6, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 30 }}
            className="fixed bottom-6 right-6 z-[999]"
          >
            <motion.div
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.35, 0, 0.35],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500/35 via-white/20 to-green-500/35 blur-xl"
            />

            <button
              type="button"
              onClick={() => setIsOpen(true)}
              aria-label="Open Aether AI assistant"
              className="group relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-white/40 bg-gradient-to-br from-orange-500 via-white to-green-500 p-[2px] shadow-[0_0_35px_rgba(255,255,255,0.25)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_55px_rgba(255,255,255,0.4)]"
            >
              <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-white/45 via-transparent to-transparent opacity-70" />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-2 rounded-full border border-yellow-400/30 border-t-yellow-300"
              />

              <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/75 text-white shadow-[0_0_25px_rgba(255,255,255,0.25)] backdrop-blur-xl">
                <Bot size={23} strokeWidth={2.2} />
              </div>

              <span className="absolute right-1 top-1 h-3.5 w-3.5 rounded-full border-2 border-black bg-green-400" />
            </button>

            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="absolute bottom-1 right-[76px] hidden whitespace-nowrap rounded-full border border-white/10 bg-black/80 px-4 py-2 text-xs font-medium text-white shadow-xl backdrop-blur-xl sm:block"
            >
              <span className="mr-1 text-yellow-400">✦</span>
              Ask Aether AI
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.94 }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="fixed bottom-5 right-5 z-[999] flex h-[min(680px,calc(100vh-40px))] w-[min(420px,calc(100vw-40px))] flex-col overflow-hidden rounded-[28px] border border-white/15 bg-[#080808]/80 shadow-[0_25px_100px_rgba(0,0,0,0.65),0_0_60px_rgba(255,153,51,0.08),0_0_60px_rgba(19,136,8,0.08)] backdrop-blur-2xl"
          >
            {/* Tricolour Glass Glow */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-orange-500/20 blur-[90px]" />

              <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.06] blur-[100px]" />

              <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-green-500/20 blur-[90px]" />

              <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-orange-500/[0.08] via-transparent to-transparent" />

              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-green-500/[0.08] via-transparent to-transparent" />
            </div>

            {/* Header */}
            <div className="relative z-10 overflow-hidden border-b border-white/10 px-5 py-5">
              <div className="absolute -right-16 -top-20 h-44 w-44 rounded-full bg-yellow-400/15 blur-3xl" />

              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-yellow-400 text-black shadow-[0_0_25px_rgba(250,204,21,0.2)]">
                    <Bot size={23} />

                    <span className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full border-2 border-[#080808] bg-green-400" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-white">
                        Aether AI
                      </h3>

                      <span className="rounded-full border border-yellow-400/20 bg-yellow-400/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-yellow-300">
                        AI
                      </span>
                    </div>

                    <p className="mt-0.5 text-xs text-gray-500">
                      Intelligent digital assistant
                    </p>
                  </div>
                </div>

                {/* Refresh and Close */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={resetChat}
                    disabled={isLoading}
                    aria-label="Refresh conversation"
                    title="Start a new conversation"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition hover:bg-yellow-400/10 hover:text-yellow-300 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <RefreshCw
                      size={16}
                      className="transition-transform duration-300 hover:rotate-180"
                    />
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close Aether AI assistant"
                    title="Close chat"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition hover:bg-white/10 hover:text-white"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="relative z-10 flex-1 space-y-4 overflow-y-auto px-4 py-5">
              {messages.length === 1 && (
                <div className="mb-5 rounded-2xl border border-yellow-400/10 bg-yellow-400/[0.04] p-4">
                  <div className="mb-3 flex items-center gap-2 text-xs font-semibold text-yellow-300">
                    <Sparkles size={14} />
                    Aether Intelligence
                  </div>

                  <p className="text-xs leading-5 text-gray-500">
                    Ask me about our services, pricing, AI agents,
                    automation, websites or custom AI solutions.
                  </p>
                </div>
              )}

              {messages.map((message, index) => (
                <motion.div
                  key={`${message.role}-${index}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${
                    message.role === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`min-w-0 max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                      message.role === "user"
                        ? "rounded-br-md bg-yellow-400 font-medium text-black"
                        : "rounded-bl-md border border-white/10 bg-white/[0.06] text-gray-300"
                    }`}
                  >
                    {message.role === "assistant" && (
                      <div className="mb-1 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-yellow-400">
                        <Bot size={11} />
                        Aether
                      </div>
                    )}

                    {message.role === "assistant" ? (
                      <div className="aether-markdown min-w-0 break-words">
                        <ReactMarkdown
                          remarkPlugins={[remarkGfm]}
                          components={{
                            h1: ({ children }) => (
                              <h1 className="mb-2 mt-3 text-base font-bold text-white">
                                {children}
                              </h1>
                            ),
                            h2: ({ children }) => (
                              <h2 className="mb-2 mt-3 text-sm font-bold text-white">
                                {children}
                              </h2>
                            ),
                            h3: ({ children }) => (
                              <h3 className="mb-1.5 mt-2 text-sm font-semibold text-white">
                                {children}
                              </h3>
                            ),
                            p: ({ children }) => (
                              <p className="mb-2 last:mb-0">
                                {children}
                              </p>
                            ),
                            strong: ({ children }) => (
                              <strong className="font-semibold text-white">
                                {children}
                              </strong>
                            ),
                            ul: ({ children }) => (
                              <ul className="mb-2 list-disc space-y-1 pl-5 last:mb-0">
                                {children}
                              </ul>
                            ),
                            ol: ({ children }) => (
                              <ol className="mb-2 list-decimal space-y-1 pl-5 last:mb-0">
                                {children}
                              </ol>
                            ),
                            li: ({ children }) => (
                              <li className="pl-0.5">
                                {children}
                              </li>
                            ),
                            table: ({ children }) => (
                              <div className="my-3 max-w-full overflow-x-auto rounded-lg border border-white/10">
                                <table className="w-full border-collapse text-left text-xs">
                                  {children}
                                </table>
                              </div>
                            ),
                            thead: ({ children }) => (
                              <thead className="bg-white/10 text-white">
                                {children}
                              </thead>
                            ),
                            th: ({ children }) => (
                              <th className="border-b border-white/10 px-2 py-2 font-semibold">
                                {children}
                              </th>
                            ),
                            td: ({ children }) => (
                              <td className="border-b border-white/5 px-2 py-2 align-top">
                                {children}
                              </td>
                            ),
                            a: ({ children, href }) => (
                              <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-yellow-300 underline underline-offset-2"
                              >
                                {children}
                              </a>
                            ),
                            code: ({ children }) => (
                              <code className="rounded bg-black/30 px-1 py-0.5 text-xs text-yellow-200">
                                {children}
                              </code>
                            ),
                          }}
                        >
                          {message.content.replace(
                            /<br\s*\/?>/gi,
                            "\n"
                          )}
                        </ReactMarkdown>
                      </div>
                    ) : (
                      <div className="whitespace-pre-wrap break-words">
                        {message.content}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Loading Indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="rounded-2xl rounded-bl-md border border-white/10 bg-white/[0.06] px-4 py-3">
                    <div className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-yellow-400 [animation-delay:-0.3s]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-yellow-400 [animation-delay:-0.15s]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-yellow-400" />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Quick Questions */}
              {messages.length === 1 && (
                <div className="space-y-2 pt-1">
                  {quickQuestions.map((question) => (
                    <button
                      key={question}
                      type="button"
                      onClick={() => void sendMessage(question)}
                      disabled={isLoading}
                      className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 text-left text-xs text-gray-400 transition hover:border-yellow-400/30 hover:bg-yellow-400/[0.05] hover:text-white disabled:opacity-40"
                    >
                      <span>{question}</span>
                      <ArrowUp
                        size={13}
                        className="rotate-45 text-yellow-400"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <div className="relative z-10 border-t border-white/10 bg-black/20 p-4">
              <form onSubmit={handleSubmit}>
                <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] p-2 transition focus-within:border-yellow-400/40 focus-within:bg-white/[0.06]">
                  <MessageCircle
                    size={17}
                    className="ml-2 shrink-0 text-gray-600"
                  />

                  <input
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    placeholder="Ask Aether AI..."
                    disabled={isLoading}
                    className="min-w-0 flex-1 bg-transparent px-1 py-2 text-sm text-white outline-none placeholder:text-gray-600 disabled:opacity-50"
                  />

                  <button
                    type="submit"
                    disabled={!input.trim() || isLoading}
                    aria-label="Send message"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-yellow-400 text-black transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    {isLoading ? (
                      <Loader2
                        size={17}
                        className="animate-spin"
                      />
                    ) : (
                      <ArrowUp size={17} />
                    )}
                  </button>
                </div>
              </form>

              <div className="mt-2 flex items-center justify-center gap-1.5 text-[9px] text-gray-600">
                <Check size={10} className="text-green-500" />
                Powered by Aether AI
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
