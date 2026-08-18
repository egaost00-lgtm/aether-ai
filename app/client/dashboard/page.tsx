"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Messages from "../Messages";
import PaymentsSection from "../PaymentsSection";

import {
  Bell,
  CheckCircle2,
  ChevronRight,
  CreditCard,
  FolderOpen,
  LayoutDashboard,
  LogOut,
  Menu,
  MessageSquare,
  Search,
  Settings,
  Sparkles,
  Upload,
  Download,
  FileText,
  Trash2,
  X,
} from "lucide-react";

/* =========================================================
   TYPES
========================================================= */

type Section =
  | "Overview"
  | "Projects"
  | "Messages"
  | "Files"
  | "Payments"
  | "Approvals"
  | "Profile";

const navigation = [
  { name: "Overview", icon: LayoutDashboard },
  { name: "Projects", icon: FolderOpen },
  { name: "Messages", icon: MessageSquare },
  { name: "Files", icon: FolderOpen },
  { name: "Payments", icon: CreditCard },
  { name: "Approvals", icon: CheckCircle2 },
];

type ClientData = {
  id: string;
  name: string;
  email: string;
  company: string;
  phone: string | null;
};

type ProjectData = {
  id: string;
  [key: string]: unknown;
};

/* =========================================================
   CLIENT DASHBOARD
========================================================= */

export default function ClientDashboard() {
  const [activeSection, setActiveSection] =
    useState<Section>("Overview");

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const [client, setClient] =
    useState<ClientData | null>(null);

  const [clientId, setClientId] =
    useState<string | null>(null);

  const [unreadCount, setUnreadCount] =
    useState(0);

  const [activeProjects, setActiveProjects] =
    useState(0);

  const [pendingPayments, setPendingPayments] =
    useState(0);

  const [pendingApprovals, setPendingApprovals] =
    useState(0);

  const [statsLoading, setStatsLoading] =
    useState(true);

  /* =========================================================
     LOAD DASHBOARD STATS
  ========================================================= */

  async function loadDashboardStats(
    currentClientId: string
  ) {
    setStatsLoading(true);

    try {
      /*
       * PROJECTS
       */

      const {
        count: projectCount,
        error: projectError,
      } = await supabase
        .from("projects")
        .select("id", {
          count: "exact",
          head: true,
        })
        .eq(
          "client_id",
          currentClientId
        );

      if (projectError) {
        console.error(
          "Projects dashboard error:",
          projectError
        );

        setActiveProjects(0);
      } else {
        setActiveProjects(
          projectCount || 0
        );
      }

      /*
       * PAYMENTS
       */

      const {
        data: paymentData,
        error: paymentError,
      } = await supabase
        .from("payments")
        .select("amount")
        .eq(
          "client_id",
          currentClientId
        )
        .eq("status", "pending");

      if (paymentError) {
        console.error(
          "Payments dashboard error:",
          paymentError
        );

        setPendingPayments(0);
      } else {
        const total = (
          paymentData || []
        ).reduce(
          (sum, payment) =>
            sum +
            Number(
              payment.amount || 0
            ),
          0
        );

        setPendingPayments(total);
      }

      /*
       * APPROVALS
       *
       * Approvals table is not currently
       * connected, so keep this at zero.
       */

      setPendingApprovals(0);
    } catch (error) {
      console.error(
        "Dashboard stats error:",
        error
      );

      setActiveProjects(0);
      setPendingPayments(0);
      setPendingApprovals(0);
    }

    setStatsLoading(false);
  }

  /* =========================================================
     LOAD UNREAD MESSAGE COUNT
  ========================================================= */

  async function loadUnreadCount() {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setUnreadCount(0);
        return;
      }

      const {
        data: clientData,
        error: clientError,
      } = await supabase
        .from("clients")
        .select("id")
        .eq("user_id", user.id)
        .maybeSingle();

      if (
        clientError ||
        !clientData
      ) {
        setUnreadCount(0);
        return;
      }

      setClientId(
        clientData.id
      );

      const {
        count,
        error,
      } = await supabase
        .from("project_messages")
        .select("*", {
          count: "exact",
          head: true,
        })
        .eq(
          "client_id",
          clientData.id
        )
        .eq(
          "sender_type",
          "aether"
        )
        .or(
          "read_by_client.is.null,read_by_client.eq.false"
        );

      if (error) {
        console.error(
          "Unread message count error:",
          error
        );

        setUnreadCount(0);
        return;
      }

      setUnreadCount(
        count || 0
      );
    } catch (error) {
      console.error(
        "Unread count unexpected error:",
        error
      );

      setUnreadCount(0);
    }
  }

  /* =========================================================
     MARK MESSAGES AS READ
  ========================================================= */

  async function markMessagesAsRead() {
    if (!clientId) return;

    const { error } =
      await supabase
        .from("project_messages")
        .update({
          read_by_client: true,
        })
        .eq(
          "client_id",
          clientId
        )
        .eq(
          "sender_type",
          "aether"
        )
        .or(
          "read_by_client.is.null,read_by_client.eq.false"
        );

    if (error) {
      console.error(
        "MARK MESSAGES READ ERROR:",
        error
      );

      return;
    }

    setUnreadCount(0);
  }

  /* =========================================================
     LOAD CLIENT
  ========================================================= */

  useEffect(() => {
    let mounted = true;

    async function loadClient() {
      setStatsLoading(true);

      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      console.log(
        "SUPABASE USER:",
        user
      );

      console.log(
        "SUPABASE ERROR:",
        userError
      );

      /*
       * No authenticated user.
       */

      if (!user) {
        if (!mounted) return;

        setClient(null);
        setClientId(null);
        setUnreadCount(0);
        setActiveProjects(0);
        setPendingPayments(0);
        setPendingApprovals(0);
        setStatsLoading(false);

        return;
      }

      /*
       * Find client belonging to authenticated user.
       */

      const {
        data,
        error,
      } = await supabase
        .from("clients")
        .select("*")
        .eq(
          "user_id",
          user.id
        )
        .maybeSingle();

      if (!mounted) return;

      if (error) {
        console.error(
          "Client lookup error:",
          error
        );

        setClient(null);
        setClientId(null);
        setUnreadCount(0);
        setActiveProjects(0);
        setPendingPayments(0);
        setPendingApprovals(0);
        setStatsLoading(false);

        return;
      }

      /*
       * NO CLIENT YET
       */

      if (!data) {
        console.log(
          "Authenticated user has no client record yet."
        );

        setClient(null);
        setClientId(null);
        setUnreadCount(0);
        setActiveProjects(0);
        setPendingPayments(0);
        setPendingApprovals(0);
        setStatsLoading(false);

        return;
      }

      console.log(
        "Client:",
        data
      );

      setClientId(data.id);

      setClient({
        id: data.id,
        name:
          data.name ||
          "Client",
        email:
          data.email ||
          user.email ||
          "",
        company:
          data.company ||
          "",
        phone:
          data.phone ||
          null,
      });

      /*
       * Load dashboard numbers.
       */

      await loadDashboardStats(
        data.id
      );

      /*
       * Load unread messages.
       */

      await loadUnreadCount();
    }

    loadClient();

    /*
     * Check for new messages every 3 seconds.
     */

    const interval =
      setInterval(() => {
        loadUnreadCount();
      }, 3000);

    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);

  /* =========================================================
     SECTION SELECTOR
  ========================================================= */

  async function selectSection(
    section: Section
  ) {
    setActiveSection(section);
    setMobileOpen(false);

    if (
      section === "Messages"
    ) {
      await markMessagesAsRead();
    }

    if (
      section === "Overview" &&
      clientId
    ) {
      await loadDashboardStats(
        clientId
      );
    }
  }

  /* =========================================================
     SIGN OUT
  ========================================================= */

  async function handleSignOut() {
    await supabase.auth.signOut();

    window.location.href =
      "/login";
  }

  /* =========================================================
     CLIENT REQUIRED
  ========================================================= */

  const clientRequired =
    activeSection === "Projects" ||
    activeSection === "Messages" ||
    activeSection === "Payments" ||
    activeSection === "Approvals";

  /* =========================================================
     MAIN
  ========================================================= */

  return (
    <main className="min-h-screen bg-[#05070a] text-white">

      {/* =====================================================
          MOBILE HEADER
      ===================================================== */}

      <header className="flex items-center justify-between border-b border-white/[0.08] bg-[#070b12] px-5 py-4 lg:hidden">

        <div className="flex items-center gap-3">

          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">

            <Sparkles
              size={17}
              className="text-cyan-400"
            />

          </div>

          <div>

            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan-400">
              AETHER
            </p>

            <p className="mt-0.5 text-xs font-medium text-white">
              Client Portal
            </p>

          </div>

        </div>

        <button
          type="button"
          onClick={() =>
            setMobileOpen(true)
          }
          className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5 text-gray-300"
        >
          <Menu size={20} />
        </button>

      </header>

      <div className="flex min-h-screen">

        {/* ===================================================
            DESKTOP SIDEBAR
        =================================================== */}

        <aside className="hidden w-[260px] shrink-0 border-r border-white/[0.08] bg-[#070b12] lg:flex lg:flex-col">

          <div className="border-b border-white/[0.08] px-6 py-7">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">

                <Sparkles
                  size={20}
                  className="text-cyan-400"
                />

              </div>

              <div>

                <p className="text-sm font-bold tracking-[0.18em] text-white">
                  AETHER
                </p>

                <p className="text-[9px] font-medium tracking-[0.22em] text-cyan-400">
                  AI SOLUTIONS
                </p>

              </div>

            </div>

          </div>

          <div className="px-5 pt-7">

            <p className="px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-600">
              Client Workspace
            </p>

            <nav className="mt-4 space-y-1.5">

              {navigation.map(
                (item) => {

                  const Icon =
                    item.icon;

                  const active =
                    activeSection ===
                    item.name;

                  return (
                    <button
                      type="button"
                      key={
                        item.name
                      }
                      onClick={() =>
                        selectSection(
                          item.name as Section
                        )
                      }
                      className={`group flex w-full items-center gap-3 rounded-xl border px-3.5 py-3 text-sm transition-all ${
                        active
                          ? "border-cyan-400/15 bg-cyan-400/[0.09] text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.05)]"
                          : "border-transparent text-gray-400 hover:bg-white/[0.035] hover:text-white"
                      }`}
                    >

                      <Icon
                        size={17}
                        className={
                          active
                            ? "text-cyan-400"
                            : "text-gray-500 group-hover:text-gray-300"
                        }
                      />

                      <span>
                        {item.name}
                      </span>

                      {item.name ===
                        "Messages" &&
                        unreadCount >
                          0 && (
                          <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-cyan-400 px-1.5 text-[10px] font-bold text-black">
                            {
                              unreadCount
                            }
                          </span>
                        )}

                    </button>
                  );
                }
              )}

            </nav>

          </div>

          {/* ACCOUNT */}

          <div className="mt-8 px-5">

            <p className="px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-600">
              Account
            </p>

            <div className="mt-4 space-y-1.5">

              {/* PROFILE & SETTINGS */}

         <Link
  href="/client/profile"
  className="flex w-full items-center gap-3 rounded-xl border border-transparent px-3.5 py-3 text-sm text-gray-400 transition hover:bg-white/[0.035] hover:text-white"
>
  <Settings size={17} />

  Profile & Settings
</Link>

              {/* NOTIFICATIONS */}

              <button
                type="button"
                onClick={() =>
                  selectSection(
                    "Messages"
                  )
                }
                className="flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-sm text-gray-400 transition hover:bg-white/[0.035] hover:text-white"
              >

                <Bell size={17} />

                Notifications

                {unreadCount >
                  0 && (
                  <span className="ml-auto h-2 w-2 rounded-full bg-cyan-400" />
                )}

              </button>

            </div>

          </div>

          {/* USER */}

          <div className="mt-auto p-5">

            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-400/15 text-sm font-bold text-cyan-300">

                  {client?.name
                    ?.charAt(0)
                    ?.toUpperCase() ||
                    "C"}

                </div>

                <div className="min-w-0">

                  <p className="truncate text-sm font-semibold text-white">
                    {client?.name ||
                      "New Account"}
                  </p>

                  <p className="truncate text-xs text-gray-500">
                    {client?.company ||
                      "Client workspace pending"}
                  </p>

                </div>

              </div>

            </div>

            <button
              type="button"
              onClick={
                handleSignOut
              }
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-red-400/20 px-4 py-2.5 text-sm text-red-300 transition hover:bg-red-400/10"
            >

              <LogOut
                size={16}
              />

              Sign out

            </button>

            <p className="mt-5 text-center text-[10px] text-gray-700">
              ©{" "}
              {new Date().getFullYear()}{" "}
              Aether AI Solutions
            </p>

          </div>

        </aside>

        {/* ===================================================
            MOBILE SIDEBAR
        =================================================== */}

        {mobileOpen && (

          <div className="fixed inset-0 z-50 lg:hidden">

            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() =>
                setMobileOpen(false)
              }
            />

            <aside className="relative h-full w-72 border-r border-white/10 bg-[#070b12] p-5 shadow-2xl">

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">

                    <Sparkles
                      size={17}
                    />

                  </div>

                  <div>

                    <p className="text-xs font-bold tracking-[0.2em]">
                      AETHER
                    </p>

                    <p className="text-[9px] text-cyan-400">
                      CLIENT PORTAL
                    </p>

                  </div>

                </div>

                <button
                  type="button"
                  onClick={() =>
                    setMobileOpen(
                      false
                    )
                  }
                  className="rounded-lg p-2 text-gray-400 hover:bg-white/10 hover:text-white"
                >

                  <X size={20} />

                </button>

              </div>

              <nav className="mt-8 space-y-1.5">

                {navigation.map(
                  (item) => {

                    const Icon =
                      item.icon;

                    const active =
                      activeSection ===
                      item.name;

                    return (
                      <button
                        type="button"
                        key={
                          item.name
                        }
                        onClick={() =>
                          selectSection(
                            item.name as Section
                          )
                        }
                        className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-sm ${
                          active
                            ? "border-cyan-400/15 bg-cyan-400/10 text-cyan-300"
                            : "border-transparent text-gray-400 hover:bg-white/[0.04] hover:text-white"
                        }`}
                      >

                        <Icon
                          size={18}
                        />

                        {item.name}

                        {item.name ===
                          "Messages" &&
                          unreadCount >
                            0 && (
                            <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-cyan-400 px-1.5 text-[10px] font-bold text-black">
                              {
                                unreadCount
                              }
                            </span>
                          )}

                      </button>
                    );
                  }
                )}

              </nav>

              <div className="absolute bottom-5 left-5 right-5 border-t border-white/10 pt-4">

                {/* MOBILE PROFILE */}

       <Link
  href="/client/profile"
  className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-gray-400 transition hover:bg-white/[0.04] hover:text-white"
>
  <Settings size={18} />

  Profile & Settings
</Link>

                <button
                  type="button"
                  onClick={
                    handleSignOut
                  }
                  className="mt-1 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-gray-400 hover:bg-red-400/10 hover:text-red-300"
                >

                  <LogOut
                    size={18}
                  />

                  Sign out

                </button>

              </div>

            </aside>

          </div>

        )}

        {/* ===================================================
            MAIN
        =================================================== */}

        <section className="flex-1">

          {/* TOP BAR */}

          <div className="hidden items-center justify-between border-b border-white/[0.08] bg-[#070b12]/80 px-8 py-4 backdrop-blur-xl lg:flex">

            <div className="relative w-[360px]">

              <div className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-2.5">

                <Search
                  size={17}
                  className="shrink-0 text-gray-500"
                />

                <input
                  type="text"
                  placeholder="Search anything..."
                  className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-600"
                />

                <span className="rounded-md border border-white/10 px-2 py-0.5 text-[10px] text-gray-600">
                  ⌘ K
                </span>

              </div>

            </div>

            <div className="flex items-center gap-4">

              <button
                type="button"
                className="rounded-xl p-2.5 text-gray-400 transition hover:bg-white/[0.05] hover:text-white"
              >

                <span className="text-lg">
                  ☼
                </span>

              </button>

              <button
                type="button"
                onClick={() =>
                  selectSection(
                    "Messages"
                  )
                }
                className="relative rounded-xl border border-white/[0.08] bg-white/[0.025] p-2.5 text-gray-400 hover:text-white"
              >

                <Bell size={18} />

                {unreadCount >
                  0 && (

                  <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[9px] font-bold text-white">
                    {
                      unreadCount
                    }
                  </span>

                )}

              </button>

           <Link
  href="/client/profile"
  className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400/20"
  title="Profile & Settings"
>
  {client?.name
    ?.charAt(0)
    ?.toUpperCase() ||
    "C"}
</Link>

            </div>

          </div>

          {/* =================================================
              CONTENT
          ================================================= */}

          <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">

            {/* OVERVIEW */}

            {activeSection ===
              "Overview" && (

              <Overview
                client={client}
                onNavigate={
                  selectSection
                }
                unreadCount={
                  unreadCount
                }
                activeProjects={
                  activeProjects
                }
                pendingPayments={
                  pendingPayments
                }
                pendingApprovals={
                  pendingApprovals
                }
                statsLoading={
                  statsLoading
                }
              />

            )}

            {/* PROFILE */}

            {activeSection ===
              "Profile" && (

              <ProfileSettings
                client={client}
                onClientUpdated={(
                  updatedClient
                ) => {
                  setClient(
                    updatedClient
                  );
                }}
              />

            )}

            {/* FILES */}

            {activeSection ===
              "Files" && (
              <FilesSection />
            )}

            {/* NO CLIENT */}

            {clientRequired &&
              !client && (
                <NoClientWorkspace />
              )}

            {/* PROJECTS */}

            {activeSection ===
              "Projects" &&
              client &&
              clientId && (
                <Projects
                  clientId={
                    clientId
                  }
                />
              )}

            {/* MESSAGES */}

            {activeSection ===
              "Messages" &&
              client && (
                <Messages />
              )}

            {/* PAYMENTS */}

            {activeSection ===
              "Payments" &&
              client && (
                <PaymentsSection />
              )}

            {/* APPROVALS */}

            {activeSection ===
              "Approvals" &&
              client && (

                <Placeholder
                  icon={
                    <CheckCircle2
                      size={28}
                    />
                  }
                  title="Approvals"
                  description="Review and approve project deliverables from one place."
                />

              )}

          </div>

        </section>

      </div>

    </main>
  );
}

/* =========================================================
   OVERVIEW
========================================================= */

function Overview({
  client,
  onNavigate,
  unreadCount,
  activeProjects,
  pendingPayments,
  pendingApprovals,
  statsLoading,
}: {
  client: ClientData | null;
  onNavigate: (
    section: Section
  ) => void;
  unreadCount: number;
  activeProjects: number;
  pendingPayments: number;
  pendingApprovals: number;
  statsLoading: boolean;
}) {
  function formatCurrency(
    amount: number
  ) {
    return new Intl.NumberFormat(
      "en-IN",
      {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
      }
    ).format(amount);
  }

  return (
    <>
      {/* HEADER */}

      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

        <div>

          <p className="text-xs font-medium uppercase tracking-[0.18em] text-gray-600">
            Overview
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Welcome back,{" "}
            {client?.name ||
              "there"}{" "}
            👋
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Here's what's happening
            with your projects today.
          </p>

          {client?.company && (

            <p className="mt-2 text-sm font-medium text-cyan-400">
              {client.company}
            </p>

          )}

        </div>

        {client && (

          <button
            type="button"
            className="inline-flex w-fit items-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-2.5 text-sm font-medium text-gray-300 transition hover:border-cyan-400/30 hover:bg-cyan-400/[0.06] hover:text-cyan-300"
          >

            Download Report

            <ChevronRight
              size={15}
            />

          </button>

        )}

      </div>

      {/* KPI CARDS */}

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

        <StatCard
          icon={
            <FolderOpen
              size={19}
            />
          }
          title="Active Projects"
          value={
            statsLoading
              ? "—"
              : String(
                  activeProjects
                )
          }
          status={
            activeProjects > 0
              ? "Projects in workspace"
              : "No active projects"
          }
          type="cyan"
        />

        <StatCard
          icon={
            <MessageSquare
              size={19}
            />
          }
          title="Unread Messages"
          value={String(
            unreadCount
          )}
          status={
            unreadCount > 0
              ? "New messages"
              : "All caught up"
          }
          type="blue"
        />

        <StatCard
          icon={
            <CheckCircle2
              size={19}
            />
          }
          title="Pending Approvals"
          value={
            statsLoading
              ? "—"
              : String(
                  pendingApprovals
                )
          }
          status={
            pendingApprovals > 0
              ? "Needs your review"
              : "Nothing pending"
          }
          type="yellow"
        />

        <StatCard
          icon={
            <CreditCard
              size={19}
            />
          }
          title="Pending Payments"
          value={
            statsLoading
              ? "—"
              : formatCurrency(
                  pendingPayments
                )
          }
          status={
            pendingPayments > 0
              ? "Payment pending"
              : "No payments pending"
          }
          type="red"
        />

      </div>

      {/* NO CLIENT */}

      {!client && (

        <div className="mt-8 rounded-3xl border border-white/[0.08] bg-[#090e16] p-8 text-center shadow-2xl">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">

            <FolderOpen
              size={28}
            />

          </div>

          <h2 className="mt-5 text-xl font-semibold text-white">
            Client workspace not
            set up yet
          </h2>

          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
            Your account is
            registered, but no
            client workspace has
            been assigned yet.
            Your projects,
            messages, files and
            payments will appear
            here once your
            workspace is created.
          </p>

        </div>

      )}

      {/* CLIENT CONTENT */}

      {client && (

        <>

          <div className="mt-8 rounded-3xl border border-white/[0.08] bg-[#090e16] p-6 shadow-2xl sm:p-8">

            <div className="flex flex-col justify-between gap-6 lg:flex-row">

              <div>

                <div className="flex flex-wrap items-center gap-3">

                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
                    Workspace Active
                  </span>

                  <span className="text-xs text-gray-600">
                    Your Projects
                  </span>

                </div>

                <h2 className="mt-4 text-2xl font-bold tracking-tight">
                  Project Workspace
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-6 text-gray-400">
                  Manage your
                  projects, messages,
                  files, payments and
                  approvals from one
                  place.
                </p>

              </div>

              <button
                type="button"
                onClick={() =>
                  onNavigate(
                    "Projects"
                  )
                }
                className="group flex h-fit items-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2.5 text-sm font-medium text-cyan-300 transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
              >

                View Projects

                <ChevronRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />

              </button>

            </div>

            <div className="mt-8">

              <div className="mb-3 flex justify-between">

                <span className="text-sm text-gray-500">
                  Active Projects
                </span>

                <span className="text-sm font-semibold text-cyan-300">
                  {
                    activeProjects
                  }
                </span>

              </div>

              <div className="h-2 overflow-hidden rounded-full bg-white/10">

                <div
                  className="h-full rounded-full bg-cyan-400 transition-all"
                  style={{
                    width:
                      activeProjects >
                      0
                        ? "100%"
                        : "0%",
                  }}
                />

              </div>

            </div>

          </div>

          {/* QUICK CARDS */}

          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

            <QuickCard
              icon={
                <MessageSquare
                  size={20}
                />
              }
              title="Messages"
              description="Talk with the Aether team"
              value={
                unreadCount >
                0
                  ? `${unreadCount} new`
                  : "No new messages"
              }
              onClick={() =>
                onNavigate(
                  "Messages"
                )
              }
            />

            <QuickCard
              icon={
                <FolderOpen
                  size={20}
                />
              }
              title="Files"
              description="View project documents"
              value="Open files"
              onClick={() =>
                onNavigate(
                  "Files"
                )
              }
            />

            <QuickCard
              icon={
                <CreditCard
                  size={20}
                />
              }
              title="Payments"
              description="View invoices & milestones"
              value={
                pendingPayments >
                0
                  ? `${formatCurrency(
                      pendingPayments
                    )} pending`
                  : "No payments pending"
              }
              onClick={() =>
                onNavigate(
                  "Payments"
                )
              }
            />

            <QuickCard
              icon={
                <CheckCircle2
                  size={20}
                />
              }
              title="Approvals"
              description="Review deliverables"
              value={
                pendingApprovals >
                0
                  ? `${pendingApprovals} pending`
                  : "Nothing pending"
              }
              onClick={() =>
                onNavigate(
                  "Approvals"
                )
              }
            />

          </div>

          {/* RECENT ACTIVITY */}

          <div className="mt-6 rounded-3xl border border-white/[0.08] bg-[#090e16] p-6">

            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-600">
              Recent Activity
            </p>

            <h2 className="mt-1 text-xl font-semibold">
              Project updates
            </h2>

            <div className="mt-6">

              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">

                <div className="flex items-center gap-3">

                  <div className="h-2.5 w-2.5 rounded-full bg-cyan-400" />

                  <p className="text-sm font-medium text-gray-300">
                    Your workspace
                    is connected
                  </p>

                </div>

                <p className="mt-2 text-sm text-gray-500">
                  Project activity
                  will appear here
                  as your Aether
                  workspace is used.
                </p>

              </div>

            </div>

          </div>

        </>

      )}

    </>
  );
}

/* =========================================================
   PROFILE & SETTINGS
========================================================= */

function ProfileSettings({
  client,
  onClientUpdated,
}: {
  client: ClientData | null;
  onClientUpdated: (
    client: ClientData
  ) => void;
}) {
  const [name, setName] =
    useState(
      client?.name || ""
    );

  const [company, setCompany] =
    useState(
      client?.company || ""
    );

  const [phone, setPhone] =
    useState(
      client?.phone || ""
    );

  const [saving, setSaving] =
    useState(false);

  const [success, setSuccess] =
    useState("");

  const [error, setError] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [
    confirmPassword,
    setConfirmPassword,
  ] = useState("");

  const [
    changingPassword,
    setChangingPassword,
  ] = useState(false);

  /* =========================================================
     SYNC CLIENT DATA
  ========================================================= */

  useEffect(() => {
    setName(
      client?.name || ""
    );

    setCompany(
      client?.company || ""
    );

    setPhone(
      client?.phone || ""
    );
  }, [client]);

  /* =========================================================
     SAVE PROFILE
  ========================================================= */

  async function saveProfile() {
    if (!client) {
      setError(
        "Your client workspace is not available yet."
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
    setError("");
    setSuccess("");

    try {
      const {
        data,
        error: updateError,
      } = await supabase
        .from("clients")
        .update({
          name: name.trim(),
          company:
            company.trim() ||
            null,
          phone:
            phone.trim() ||
            null,
        })
        .eq(
          "id",
          client.id
        )
        .select(
          "id, name, email, company, phone"
        )
        .single();

      if (updateError) {
        console.error(
          "PROFILE UPDATE ERROR:",
          updateError
        );

        throw new Error(
          updateError.message
        );
      }

      const updatedClient: ClientData =
        {
          id: data.id,
          name:
            data.name ||
            "Client",
          email:
            data.email ||
            client.email,
          company:
            data.company ||
            "",
          phone:
            data.phone ||
            null,
        };

      onClientUpdated(
        updatedClient
      );

      setSuccess(
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
     CHANGE PASSWORD
  ========================================================= */

  async function changePassword() {
    setError("");
    setSuccess("");

    if (!password) {
      setError(
        "Please enter a new password."
      );
      return;
    }

    if (
      password.length < 6
    ) {
      setError(
        "Password must be at least 6 characters."
      );
      return;
    }

    if (
      password !==
      confirmPassword
    ) {
      setError(
        "Passwords do not match."
      );
      return;
    }

    setChangingPassword(
      true
    );

    try {
      const {
        error: passwordError,
      } =
        await supabase.auth.updateUser(
          {
            password,
          }
        );

      if (passwordError) {
        throw new Error(
          passwordError.message
        );
      }

      setPassword("");
      setConfirmPassword("");

      setSuccess(
        "Password changed successfully."
      );
    } catch (err) {
      console.error(
        "PASSWORD UPDATE ERROR:",
        err
      );

      setError(
        err instanceof Error
          ? err.message
          : "Unable to change password."
      );
    } finally {
      setChangingPassword(
        false
      );
    }
  }

  /* =========================================================
     NO CLIENT
  ========================================================= */

  if (!client) {
    return (
      <div>

        <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-600">
          Account
        </p>

        <h1 className="mt-2 text-3xl font-bold">
          Profile & Settings
        </h1>

        <div className="mt-8 rounded-3xl border border-white/[0.08] bg-[#090e16] p-8 text-center">

          <Settings
            size={30}
            className="mx-auto text-gray-600"
          />

          <h2 className="mt-5 text-xl font-semibold">
            Profile not available
          </h2>

          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
            Your client workspace
            has not been created
            yet. Profile settings
            will become available
            once your workspace is
            assigned.
          </p>

        </div>

      </div>
    );
  }

  /* =========================================================
     PROFILE PAGE
  ========================================================= */

  return (
    <div>

      {/* HEADER */}

      <div>

        <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-600">
          Account
        </p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight">
          Profile & Settings
        </h1>

        <p className="mt-3 max-w-2xl text-sm text-gray-500">
          Manage your personal
          information, company
          details and account
          security.
        </p>

      </div>

      {/* ALERTS */}

      {success && (
        <div className="mt-6 rounded-xl border border-green-400/20 bg-green-400/10 px-4 py-3 text-sm text-green-300">
          {success}
        </div>
      )}

      {error && (
        <div className="mt-6 rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-300">
          {error}
        </div>
      )}

      {/* =====================================================
          PROFILE INFORMATION
      ===================================================== */}

      <div className="mt-8 rounded-3xl border border-white/[0.08] bg-[#090e16] p-6 shadow-2xl sm:p-8">

        <div className="flex items-center gap-4 border-b border-white/[0.08] pb-6">

          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 text-lg font-bold text-cyan-300">

            {client.name
              ?.charAt(0)
              ?.toUpperCase() ||
              "C"}

          </div>

          <div>

            <p className="text-xs uppercase tracking-[0.18em] text-cyan-400">
              Your Account
            </p>

            <h2 className="mt-1 text-xl font-semibold text-white">
              Personal Information
            </h2>

          </div>

        </div>

        <div className="mt-7 grid gap-5 md:grid-cols-2">

          {/* NAME */}

          <div>

            <label className="text-sm font-medium text-gray-300">
              Full Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(event) =>
                setName(
                  event.target.value
                )
              }
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-cyan-400/40"
              placeholder="Your name"
            />

          </div>

          {/* EMAIL */}

          <div>

            <label className="text-sm font-medium text-gray-300">
              Email Address
            </label>

            <input
              type="email"
              value={
                client.email
              }
              disabled
              className="mt-2 w-full cursor-not-allowed rounded-xl border border-white/10 bg-white/[0.015] px-4 py-3 text-sm text-gray-500 outline-none"
            />

            <p className="mt-2 text-xs text-gray-600">
              Email is managed
              through your
              authenticated account.
            </p>

          </div>

          {/* COMPANY */}

          <div>

            <label className="text-sm font-medium text-gray-300">
              Company
            </label>

            <input
              type="text"
              value={company}
              onChange={(event) =>
                setCompany(
                  event.target.value
                )
              }
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-cyan-400/40"
              placeholder="Company name"
            />

          </div>

          {/* PHONE */}

          <div>

            <label className="text-sm font-medium text-gray-300">
              Phone Number
            </label>

            <input
              type="tel"
              value={phone}
              onChange={(event) =>
                setPhone(
                  event.target.value
                )
              }
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-cyan-400/40"
              placeholder="+91 XXXXX XXXXX"
            />

          </div>

        </div>

        <div className="mt-7 flex justify-end">

          <button
            type="button"
            onClick={
              saveProfile
            }
            disabled={saving}
            className="rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
          >

            {saving
              ? "Saving..."
              : "Save Changes"}

          </button>

        </div>

      </div>

      {/* =====================================================
          SECURITY
      ===================================================== */}

      <div className="mt-6 rounded-3xl border border-white/[0.08] bg-[#090e16] p-6 shadow-2xl sm:p-8">

        <div className="border-b border-white/[0.08] pb-6">

          <p className="text-xs uppercase tracking-[0.18em] text-cyan-400">
            Security
          </p>

          <h2 className="mt-1 text-xl font-semibold">
            Change Password
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Keep your Aether
            account secure with a
            strong password.
          </p>

        </div>

        <div className="mt-7 grid gap-5 md:grid-cols-2">

          {/* NEW PASSWORD */}

          <div>

            <label className="text-sm font-medium text-gray-300">
              New Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(event) =>
                setPassword(
                  event.target.value
                )
              }
              placeholder="Enter new password"
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-cyan-400/40"
            />

          </div>

          {/* CONFIRM PASSWORD */}

          <div>

            <label className="text-sm font-medium text-gray-300">
              Confirm Password
            </label>

            <input
              type="password"
              value={
                confirmPassword
              }
              onChange={(event) =>
                setConfirmPassword(
                  event.target.value
                )
              }
              placeholder="Confirm new password"
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-cyan-400/40"
            />

          </div>

        </div>

        <div className="mt-7 flex justify-end">

          <button
            type="button"
            onClick={
              changePassword
            }
            disabled={
              changingPassword
            }
            className="rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] px-5 py-3 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400/10 disabled:cursor-not-allowed disabled:opacity-50"
          >

            {changingPassword
              ? "Updating..."
              : "Update Password"}

          </button>

        </div>

      </div>

      {/* =====================================================
          ACCOUNT STATUS
      ===================================================== */}

      <div className="mt-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">

        <div className="flex items-start gap-3">

          <CheckCircle2
            size={18}
            className="mt-0.5 shrink-0 text-green-400"
          />

          <div>

            <p className="text-sm font-medium text-gray-300">
              Account connected
            </p>

            <p className="mt-1 text-xs leading-5 text-gray-600">
              Your profile is
              securely connected to
              your Aether client
              workspace.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

/* =========================================================
   NO CLIENT WORKSPACE
========================================================= */

function NoClientWorkspace() {
  return (
    <div className="flex min-h-[500px] items-center justify-center">

      <div className="max-w-md text-center">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">

          <Sparkles
            size={28}
          />

        </div>

        <h1 className="mt-6 text-2xl font-bold">
          Client workspace not
          available
        </h1>

        <p className="mt-3 leading-6 text-gray-500">
          This account is
          authenticated, but a
          client workspace has not
          been created yet.
        </p>

        <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.025] px-5 py-3 text-xs text-gray-600">
          Once your client
          workspace is created,
          this section will
          automatically show your
          real data.
        </div>

      </div>

    </div>
  );
}

/* =========================================================
   FILES
========================================================= */

type StoredFile = {
  name: string;
  id: string;
  created_at: string;
  metadata?: {
    size?: number;
    mimetype?: string;
  };
};

function FilesSection() {
  const [files, setFiles] =
    useState<StoredFile[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [uploading, setUploading] =
    useState(false);

  const [error, setError] =
    useState("");

  async function loadFiles() {
    setLoading(true);
    setError("");

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setError(
        "You must be logged in to access files."
      );

      setLoading(false);

      return;
    }

    const {
      data,
      error,
    } = await supabase.storage
      .from("project-files")
      .list(user.id, {
        limit: 100,
        sortBy: {
          column: "created_at",
          order: "desc",
        },
      });

    if (error) {
      console.error(
        "File loading error:",
        error
      );

      setError(
        error.message
      );

      setLoading(false);

      return;
    }

    const validFiles =
      (data || []).filter(
        (file) =>
          file.name !==
          ".emptyFolderPlaceholder"
      );

    setFiles(
      validFiles as StoredFile[]
    );

    setLoading(false);
  }

  useEffect(() => {
    loadFiles();
  }, []);

  async function handleUpload(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file =
      event.target.files?.[0];

    if (!file) return;

    setUploading(true);
    setError("");

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setError(
        "You must be logged in."
      );

      setUploading(false);

      return;
    }

    const safeFileName =
      file.name.replace(
        /[^a-zA-Z0-9._-]/g,
        "_"
      );

    const filePath =
      `${user.id}/${Date.now()}-${safeFileName}`;

    const {
      error,
    } = await supabase.storage
      .from("project-files")
      .upload(
        filePath,
        file,
        {
          cacheControl:
            "3600",
          upsert: false,
        }
      );

    if (error) {
      console.error(
        "Upload error:",
        error
      );

      setError(
        error.message
      );

      setUploading(false);

      return;
    }

    await loadFiles();

    setUploading(false);
    event.target.value = "";
  }

  async function handleDownload(
    fileName: string
  ) {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setError(
        "You must be logged in."
      );

      return;
    }

    const filePath =
      `${user.id}/${fileName}`;

    const {
      data,
      error,
    } = await supabase.storage
      .from("project-files")
      .createSignedUrl(
        filePath,
        60 * 10
      );

    if (error) {
      console.error(
        "Download error:",
        error
      );

      setError(
        error.message
      );

      return;
    }

    if (
      data?.signedUrl
    ) {
      window.open(
        data.signedUrl,
        "_blank"
      );
    }
  }

  async function handleDelete(
    fileName: string
  ) {
    const confirmed =
      window.confirm(
        `Delete "${fileName}"? This action cannot be undone.`
      );

    if (!confirmed) return;

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setError(
        "You must be logged in."
      );

      return;
    }

    const filePath =
      `${user.id}/${fileName}`;

    const {
      error,
    } = await supabase.storage
      .from("project-files")
      .remove([
        filePath,
      ]);

    if (error) {
      console.error(
        "Delete error:",
        error
      );

      setError(
        error.message
      );

      return;
    }

    await loadFiles();
  }

  function formatSize(
    bytes?: number
  ) {
    if (!bytes)
      return "—";

    if (bytes < 1024) {
      return `${bytes} B`;
    }

    if (
      bytes <
      1024 * 1024
    ) {
      return `${(
        bytes / 1024
      ).toFixed(1)} KB`;
    }

    return `${(
      bytes /
      (1024 * 1024)
    ).toFixed(1)} MB`;
  }

  return (
    <div>

      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

        <div>

          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-600">
            Workspace
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight">
            Project Files
          </h1>

          <p className="mt-2 max-w-2xl text-sm text-gray-500">
            Securely access
            documents, designs,
            invoices and project
            deliverables.
          </p>

        </div>

        <label className="inline-flex w-fit cursor-pointer items-center gap-2 rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-cyan-300">

          <Upload size={16} />

          {uploading
            ? "Uploading..."
            : "Upload File"}

          <input
            type="file"
            className="hidden"
            disabled={
              uploading
            }
            onChange={
              handleUpload
            }
            accept=".jpg,.jpeg,.png,.webp,.pdf,.txt,.doc,.docx,.xls,.xlsx"
          />

        </label>

      </div>

      {error && (

        <div className="mt-6 rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-300">
          {error}
        </div>

      )}

      <div className="mt-8 rounded-3xl border border-white/[0.08] bg-[#090e16] shadow-2xl">

        <div className="flex items-center justify-between border-b border-white/[0.08] px-6 py-5">

          <div>

            <h2 className="font-semibold text-white">
              Files & Documents
            </h2>

            <p className="mt-1 text-xs text-gray-600">
              {files.length}{" "}
              {files.length ===
              1
                ? "file"
                : "files"}
            </p>

          </div>

          <button
            type="button"
            onClick={
              loadFiles
            }
            className="rounded-lg border border-white/10 px-3 py-2 text-xs text-gray-400 transition hover:bg-white/[0.04] hover:text-white"
          >
            Refresh
          </button>

        </div>

        {loading && (

          <div className="flex min-h-[260px] items-center justify-center">

            <div className="text-center">

              <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-white/10 border-t-cyan-400" />

              <p className="mt-4 text-sm text-gray-500">
                Loading files...
              </p>

            </div>

          </div>

        )}

        {!loading &&
          files.length ===
            0 && (

            <div className="flex min-h-[320px] items-center justify-center px-6">

              <div className="max-w-md text-center">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">

                  <FolderOpen
                    size={28}
                  />

                </div>

                <h3 className="mt-5 text-lg font-semibold text-white">
                  No files yet
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Upload your first
                  project document,
                  design, invoice or
                  deliverable.
                </p>

                <label className="mt-6 inline-flex cursor-pointer items-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2.5 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400/10">

                  <Upload
                    size={16}
                  />

                  Choose File

                  <input
                    type="file"
                    className="hidden"
                    onChange={
                      handleUpload
                    }
                    accept=".jpg,.jpeg,.png,.webp,.pdf,.txt,.doc,.docx,.xls,.xlsx"
                  />

                </label>

              </div>

            </div>

          )}

        {!loading &&
          files.length >
            0 && (

            <div className="divide-y divide-white/[0.06]">

              {files.map(
                (file) => (

                  <div
                    key={
                      file.id ||
                      file.name
                    }
                    className="flex flex-col gap-4 px-6 py-5 transition hover:bg-white/[0.02] sm:flex-row sm:items-center sm:justify-between"
                  >

                    <div className="flex min-w-0 items-center gap-4">

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-cyan-400">

                        <FileText
                          size={20}
                        />

                      </div>

                      <div className="min-w-0">

                        <p className="truncate text-sm font-medium text-white">
                          {
                            file.name
                          }
                        </p>

                        <div className="mt-1 flex flex-wrap gap-3 text-xs text-gray-600">

                          <span>
                            {formatSize(
                              file.metadata
                                ?.size
                            )}
                          </span>

                          <span>
                            {file.metadata
                              ?.mimetype ||
                              "Document"}
                          </span>

                          <span>
                            {new Date(
                              file.created_at
                            ).toLocaleDateString()}
                          </span>

                        </div>

                      </div>

                    </div>

                    <div className="flex shrink-0 items-center gap-2">

                      <button
                        type="button"
                        onClick={() =>
                          handleDownload(
                            file.name
                          )
                        }
                        className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs font-medium text-gray-300 transition hover:border-cyan-400/20 hover:bg-cyan-400/[0.06] hover:text-cyan-300"
                      >

                        <Download
                          size={14}
                        />

                        Download

                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          handleDelete(
                            file.name
                          )
                        }
                        className="rounded-lg border border-red-400/10 p-2 text-red-400/70 transition hover:bg-red-400/10 hover:text-red-300"
                        title="Delete file"
                      >

                        <Trash2
                          size={15}
                        />

                      </button>

                    </div>

                  </div>

                )
              )}

            </div>

          )}

      </div>

      <div className="mt-5 flex items-start gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-5 py-4">

        <CheckCircle2
          size={17}
          className="mt-0.5 shrink-0 text-green-400"
        />

        <div>

          <p className="text-sm font-medium text-gray-300">
            Secure project storage
          </p>

          <p className="mt-1 text-xs leading-5 text-gray-600">
            Files are stored
            privately and accessed
            through temporary
            secure download links.
          </p>

        </div>

      </div>

    </div>
  );
}

/* =========================================================
   PROJECTS
========================================================= */

function Projects({
  clientId,
}: {
  clientId: string;
}) {
  type Project = {
    id: string;
    created_at: string;
    client_id: string;
    project_name: string;
    description: string | null;
  };

  const [projects, setProjects] =
    useState<Project[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  async function loadProjects() {
    setLoading(true);
    setError("");

    const {
      data,
      error,
    } = await supabase
      .from("projects")
      .select(
        "id, created_at, client_id, project_name, description"
      )
      .eq(
        "client_id",
        clientId
      )
      .order(
        "created_at",
        {
          ascending: false,
        }
      );

    if (error) {
      console.error(
        "Projects loading error:",
        error
      );

      setError(
        error.message
      );

      setProjects([]);

      setLoading(false);

      return;
    }

    console.log(
      "PROJECTS FOR CLIENT:",
      data
    );

    setProjects(
      (data || []) as Project[]
    );

    setLoading(false);
  }

  useEffect(() => {
    if (!clientId) return;

    loadProjects();
  }, [clientId]);

  return (
    <div>

      <p className="text-xs uppercase tracking-[0.2em] text-gray-600">
        Workspace
      </p>

      <h1 className="mt-2 text-3xl font-bold">
        My Projects
      </h1>

      <p className="mt-3 text-gray-400">
        Track all projects being
        developed by Aether AI
        Solutions.
      </p>

      {error && (
        <div className="mt-6 rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-300">
          {error}
        </div>
      )}

      <div className="mt-8 rounded-3xl border border-white/[0.08] bg-[#090e16] p-6">

        {loading && (
          <div className="flex min-h-[300px] items-center justify-center">

            <div className="text-center">

              <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-white/10 border-t-cyan-400" />

              <p className="mt-4 text-sm text-gray-500">
                Loading projects...
              </p>

            </div>

          </div>
        )}

        {!loading &&
          !error &&
          projects.length ===
            0 && (

            <div className="flex min-h-[300px] items-center justify-center">

              <div className="max-w-md text-center">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">

                  <FolderOpen
                    size={28}
                  />

                </div>

                <h2 className="mt-5 text-lg font-semibold text-white">
                  No projects yet
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Your projects will
                  appear here once
                  Aether creates and
                  assigns them to your
                  client workspace.
                </p>

              </div>

            </div>
          )}

        {!loading &&
          projects.length >
            0 && (

            <div className="space-y-5">

              {projects.map(
                (project) => (

                  <div
                    key={
                      project.id
                    }
                    className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition hover:border-cyan-400/20 hover:bg-white/[0.035]"
                  >

                    <div className="flex flex-col justify-between gap-5 sm:flex-row">

                      <div className="min-w-0">

                        <div className="flex flex-wrap items-center gap-3">

                          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
                            Active Project
                          </span>

                          <span className="text-xs text-gray-600">
                            ID:{" "}
                            {
                              project.id
                            }
                          </span>

                        </div>

                        <h2 className="mt-4 text-xl font-semibold text-white">
                          {
                            project.project_name
                          }
                        </h2>

                        <p className="mt-2 text-sm leading-6 text-gray-500">
                          {
                            project.description ||
                            "Your Aether project workspace."
                          }
                        </p>

                      </div>

                    </div>

                    <div className="mt-6 border-t border-white/[0.06] pt-4">

                      <p className="text-xs text-gray-600">
                        Created
                      </p>

                      <p className="mt-1 text-sm text-gray-400">
                        {new Date(
                          project.created_at
                        ).toLocaleDateString(
                          "en-IN",
                          {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          }
                        )}
                      </p>

                    </div>

                  </div>

                )
              )}

            </div>
          )}

      </div>

    </div>
  );
}

/* =========================================================
   STAT CARD
========================================================= */

function StatCard({
  icon,
  title,
  value,
  status,
  type,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  status: string;
  type:
    | "cyan"
    | "blue"
    | "yellow"
    | "red";
}) {
  const styles = {
    cyan: {
      icon: "bg-cyan-400/10 text-cyan-400",
      dot: "bg-cyan-400",
    },

    blue: {
      icon: "bg-blue-400/10 text-blue-400",
      dot: "bg-blue-400",
    },

    yellow: {
      icon: "bg-yellow-400/10 text-yellow-400",
      dot: "bg-yellow-400",
    },

    red: {
      icon: "bg-red-400/10 text-red-400",
      dot: "bg-red-400",
    },
  };

  return (
    <div className="group rounded-2xl border border-white/[0.08] bg-[#090e16] p-5 transition-all hover:-translate-y-0.5 hover:border-white/[0.14]">

      <div className="flex items-start justify-between">

        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl ${styles[type].icon}`}
        >
          {icon}
        </div>

        <ChevronRight
          size={17}
          className="text-gray-700 transition group-hover:translate-x-1 group-hover:text-gray-400"
        />

      </div>

      <p className="mt-5 text-sm text-gray-500">
        {title}
      </p>

      <p className="mt-1 text-2xl font-bold tracking-tight text-white">
        {value}
      </p>

      <div className="mt-3 flex items-center gap-2">

        <span
          className={`h-1.5 w-1.5 rounded-full ${styles[type].dot}`}
        />

        <span className="text-xs text-gray-600">
          {status}
        </span>

      </div>

    </div>
  );
}

/* =========================================================
   QUICK CARD
========================================================= */

function QuickCard({
  icon,
  title,
  description,
  value,
  onClick,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  value: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group rounded-2xl border border-white/[0.08] bg-[#090e16] p-5 text-left transition hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-white/[0.04]"
    >

      <div className="flex items-start justify-between">

        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-cyan-400">
          {icon}
        </div>

        <ChevronRight
          size={18}
          className="text-gray-600 transition group-hover:translate-x-1 group-hover:text-cyan-400"
        />

      </div>

      <h3 className="mt-5 font-semibold">
        {title}
      </h3>

      <p className="mt-1 text-sm text-gray-500">
        {description}
      </p>

      <p className="mt-4 text-xs font-medium text-cyan-400">
        {value}
      </p>

    </button>
  );
}

/* =========================================================
   PLACEHOLDER
========================================================= */

function Placeholder({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex min-h-[500px] items-center justify-center">

      <div className="max-w-md text-center">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">

          {icon}

        </div>

        <h1 className="mt-6 text-2xl font-bold">
          {title}
        </h1>

        <p className="mt-3 leading-6 text-gray-500">
          {description}
        </p>

        <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.025] px-5 py-3 text-xs text-gray-600">
          This section will be
          connected to your project
          workspace.
        </div>

      </div>

    </div>
  );
}