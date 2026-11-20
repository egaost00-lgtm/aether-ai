"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Menu,
  MessageSquare,
  Users,
  FolderOpen,
  Settings,
  LogOut,
  Plus,
  X,
  Search,
  Trash2,
  Eye,
  RefreshCw,
  Mail,
  Building2,
  CalendarDays,
  ChevronRight,
  AlertTriangle,
  UserRound,
  Pencil,
  Save,
} from "lucide-react";

import { supabase } from "@/lib/supabase";

/* =========================================================
   TYPES
========================================================= */

type Client = {
  id: string;
  name: string;
  email: string;
  company: string | null;
  created_at?: string;
};

type Project = {
  id: string;
  client_id: string;
  project_name: string;
  description: string | null;
  created_at: string;
};

/* =========================================================
   ADMIN PAGE
========================================================= */

export default function AdminPage() {
  const pathname = usePathname();
  /* =======================================================
     DATA
  ======================================================= */

  const [clients, setClients] = useState<Client[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [messageCount, setMessageCount] = useState(0);

  /* =======================================================
     UI
  ======================================================= */

  const [activeSection, setActiveSection] =
    useState<"Overview" | "Clients" | "Projects">(
      "Overview"
    );

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  /* =======================================================
     SEARCH
  ======================================================= */

  const [clientSearch, setClientSearch] =
    useState("");

  const [projectSearch, setProjectSearch] =
    useState("");

  /* =======================================================
     CREATE PROJECT
  ======================================================= */

  const [showProjectForm, setShowProjectForm] =
    useState(false);

  const [selectedClientId, setSelectedClientId] =
    useState("");

  const [projectName, setProjectName] =
    useState("");

  const [description, setDescription] =
    useState("");

  const [creating, setCreating] =
    useState(false);

  /* =======================================================
     EDIT PROJECT
  ======================================================= */

  const [projectToEdit, setProjectToEdit] =
    useState<Project | null>(null);

  const [editClientId, setEditClientId] =
    useState("");

  const [editProjectName, setEditProjectName] =
    useState("");

  const [editDescription, setEditDescription] =
    useState("");

  const [updating, setUpdating] =
    useState(false);

  /* =======================================================
     CLIENT MODAL
  ======================================================= */

  const [selectedClient, setSelectedClient] =
    useState<Client | null>(null);

  /* =======================================================
     DELETE PROJECT
  ======================================================= */

  const [projectToDelete, setProjectToDelete] =
    useState<Project | null>(null);

  const [deleting, setDeleting] =
    useState(false);

  /* =======================================================
     MESSAGES
  ======================================================= */

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  /* =========================================================
     LOAD ADMIN DATA
  ========================================================= */

  async function loadAdminData(
    showLoading = false
  ) {
    if (showLoading) {
      setLoading(true);
    }

    setError("");

    try {
      /* =====================================================
         CLIENTS
      ===================================================== */

      const {
        data: clientData,
        error: clientError,
      } = await supabase
        .from("clients")
        .select(
          "id, name, email, company, created_at"
        )
        .order("created_at", {
          ascending: false,
        });

      if (clientError) {
        console.error(
          "CLIENTS LOAD ERROR:",
          clientError
        );

        throw new Error(
          clientError.message
        );
      }

      /* =====================================================
         PROJECTS
      ===================================================== */

      const {
        data: projectData,
        error: projectError,
      } = await supabase
        .from("projects")
        .select(
          "id, client_id, project_name, description, created_at"
        )
        .order("created_at", {
          ascending: false,
        });

      if (projectError) {
        console.error(
          "PROJECTS LOAD ERROR:",
          projectError
        );

        throw new Error(
          projectError.message
        );
      }

      /* =====================================================
         MESSAGES
      ===================================================== */

      const {
        count,
        error: messageError,
      } = await supabase
        .from("project_messages")
        .select("id", {
          count: "exact",
          head: true,
        });

      if (messageError) {
        console.error(
          "MESSAGE COUNT ERROR:",
          messageError
        );
      }

      setClients(
        (clientData || []) as Client[]
      );

      setProjects(
        (projectData || []) as Project[]
      );

      setMessageCount(count ?? 0);
    } catch (err) {
      console.error(
        "ADMIN DATA ERROR:",
        err
      );

      setError(
        err instanceof Error
          ? err.message
          : "Unable to load admin data."
      );
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }

  /* =========================================================
     INITIAL LOAD
  ========================================================= */

  useEffect(() => {
    loadAdminData(true);

    const interval = setInterval(() => {
      loadAdminData(false);
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  /* =========================================================
     REFRESH
  ========================================================= */

  async function handleRefresh() {
    setRefreshing(true);
    await loadAdminData(false);
  }

  /* =========================================================
     CREATE PROJECT
  ========================================================= */

  async function createProject() {
    setError("");
    setSuccess("");

    if (!selectedClientId) {
      setError(
        "Please select a client."
      );
      return;
    }

    if (!projectName.trim()) {
      setError(
        "Please enter a project name."
      );
      return;
    }

    setCreating(true);

    try {
      const {
        error: insertError,
      } = await supabase
        .from("projects")
        .insert({
          client_id:
            selectedClientId,
          project_name:
            projectName.trim(),
          description:
            description.trim() || null,
        });

      if (insertError) {
        console.error(
          "PROJECT CREATE ERROR:",
          insertError
        );

        throw new Error(
          insertError.message
        );
      }

      setSuccess(
        "Project created and assigned successfully."
      );

      setProjectName("");
      setDescription("");
      setSelectedClientId("");
      setShowProjectForm(false);

      await loadAdminData(false);
    } catch (err) {
      console.error(
        "CREATE PROJECT ERROR:",
        err
      );

      setError(
        err instanceof Error
          ? err.message
          : "Project creation failed."
      );
    } finally {
      setCreating(false);
    }
  }

  /* =========================================================
     OPEN EDIT PROJECT
  ========================================================= */

  function openEditProject(
    project: Project
  ) {
    setError("");
    setSuccess("");

    setProjectToEdit(project);

    setEditClientId(
      project.client_id
    );

    setEditProjectName(
      project.project_name
    );

    setEditDescription(
      project.description || ""
    );
  }

  /* =========================================================
     UPDATE PROJECT
  ========================================================= */

  async function updateProject() {
    if (!projectToEdit) {
      return;
    }

    setError("");
    setSuccess("");

    if (!editClientId) {
      setError(
        "Please select a client."
      );
      return;
    }

    if (!editProjectName.trim()) {
      setError(
        "Please enter a project name."
      );
      return;
    }

    setUpdating(true);

    try {
      const {
        error: updateError,
      } = await supabase
        .from("projects")
        .update({
          client_id:
            editClientId,
          project_name:
            editProjectName.trim(),
          description:
            editDescription.trim() ||
            null,
        })
        .eq(
          "id",
          projectToEdit.id
        );

      if (updateError) {
        console.error(
          "PROJECT UPDATE ERROR:",
          updateError
        );

        throw new Error(
          updateError.message
        );
      }

      setSuccess(
        `"${editProjectName.trim()}" updated successfully.`
      );

      setProjectToEdit(null);

      setEditClientId("");
      setEditProjectName("");
      setEditDescription("");

      await loadAdminData(false);
    } catch (err) {
      console.error(
        "UPDATE PROJECT ERROR:",
        err
      );

      setError(
        err instanceof Error
          ? err.message
          : "Project update failed."
      );
    } finally {
      setUpdating(false);
    }
  }

  /* =========================================================
     DELETE PROJECT
  ========================================================= */

  async function deleteProject() {
    if (!projectToDelete) {
      return;
    }

    setDeleting(true);
    setError("");
    setSuccess("");

    try {
      const {
        error: deleteError,
      } = await supabase
        .from("projects")
        .delete()
        .eq(
          "id",
          projectToDelete.id
        );

      if (deleteError) {
        console.error(
          "PROJECT DELETE ERROR:",
          deleteError
        );

        throw new Error(
          deleteError.message
        );
      }

      setSuccess(
        `"${projectToDelete.project_name}" deleted successfully.`
      );

      setProjectToDelete(null);

      await loadAdminData(false);
    } catch (err) {
      console.error(
        "DELETE PROJECT ERROR:",
        err
      );

      setError(
        err instanceof Error
          ? err.message
          : "Project deletion failed."
      );
    } finally {
      setDeleting(false);
    }
  }

  /* =========================================================
     FIND CLIENT NAME
  ========================================================= */

  function getClientName(
    clientId: string
  ) {
    const client = clients.find(
      (item) =>
        item.id === clientId
    );

    if (!client) {
      return "Unknown client";
    }

    return (
      client.company ||
      client.name ||
      client.email
    );
  }

  /* =========================================================
     GET CLIENT DISPLAY NAME
  ========================================================= */

  function getClientDisplayName(
    clientId: string
  ) {
    const client = clients.find(
      (item) =>
        item.id === clientId
    );

    if (!client) {
      return "Unknown client";
    }

    return client.company
      ? `${client.company} — ${client.name}`
      : client.name;
  }

  /* =========================================================
     CLIENT PROJECT COUNT
  ========================================================= */

  function getClientProjectCount(
    clientId: string
  ) {
    return projects.filter(
      (project) =>
        project.client_id ===
        clientId
    ).length;
  }

  /* =========================================================
     FILTERED CLIENTS
  ========================================================= */

  const filteredClients = useMemo(() => {
    const query =
      clientSearch
        .trim()
        .toLowerCase();

    if (!query) {
      return clients;
    }

    return clients.filter(
      (client) =>
        client.name
          .toLowerCase()
          .includes(query) ||
        client.email
          .toLowerCase()
          .includes(query) ||
        (client.company || "")
          .toLowerCase()
          .includes(query)
    );
  }, [clients, clientSearch]);

  /* =========================================================
     FILTERED PROJECTS
  ========================================================= */

  const filteredProjects = useMemo(() => {
    const query =
      projectSearch
        .trim()
        .toLowerCase();

    if (!query) {
      return projects;
    }

    return projects.filter(
      (project) =>
        project.project_name
          .toLowerCase()
          .includes(query) ||
        (project.description || "")
          .toLowerCase()
          .includes(query) ||
        getClientName(
          project.client_id
        )
          .toLowerCase()
          .includes(query)
    );
  }, [
    projects,
    projectSearch,
    clients,
  ]);

  /* =========================================================
     CLIENTS WITH PROJECTS
  ========================================================= */

  const clientsWithProjects =
    clients.filter(
      (client) =>
        projects.some(
          (project) =>
            project.client_id ===
            client.id
        )
    ).length;

  /* =========================================================
     NAVIGATION
  ========================================================= */

  function navigate(
    section:
      | "Overview"
      | "Clients"
      | "Projects"
  ) {
    setActiveSection(section);

    setError("");
    setSuccess("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
     LOADING SCREEN
  ========================================================= */

  if (loading) {
    return (
      <main className="min-h-screen bg-[#05070a] text-white">
        <div className="flex min-h-screen items-center justify-center">
          <div className="text-center">
            <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-white/10 border-t-cyan-400" />

            <p className="mt-5 text-sm text-gray-500">
              Loading Aether Command Center...
            </p>
          </div>
        </div>
      </main>
    );
  }

  /* =========================================================
     MAIN
  ========================================================= */

  return (
    <main className="min-h-screen bg-[#05070a] text-white">

      <div className="flex min-h-screen">

        {/* ===================================================
            SIDEBAR
        =================================================== */}

        <aside className="hidden w-72 shrink-0 border-r border-white/10 bg-gradient-to-b from-[#0d1420] via-[#090e17] to-[#05070a] md:flex md:flex-col">

          <div className="border-b border-white/10 px-6 py-7">

           <div className="flex items-center gap-3">
  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 shadow-lg shadow-cyan-400/10">
    <span className="text-xl font-black text-cyan-400">
      A
    </span>
  </div>

  <div>
    <p className="text-base font-bold tracking-[0.18em] text-white">
      AETHER
    </p>

    <p className="mt-1 text-[10px] font-semibold tracking-[0.22em] text-cyan-400">
      AI SOLUTIONS
    </p>
  </div>
</div>

            <div className="mt-5 rounded-xl border border-cyan-400/10 bg-cyan-400/[0.04] px-3 py-2.5">
              <p className="text-[10px] uppercase tracking-[0.18em] text-gray-600">
                Workspace
              </p>

              <p className="mt-1 text-sm font-medium text-gray-300">
                Admin Portal
              </p>
            </div>

          </div>

         <nav className="flex-1 space-y-3 px-4 py-6">

            <p className="px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-600">
              Command Center
            </p>

            <div className="mt-4 space-y-1.5">

              <AdminNavButton
                icon={
                  <LayoutDashboard
                    size={17}
                  />
                }
                label="Overview"
                active={
                  activeSection ===
                  "Overview"
                }
                onClick={() =>
                  navigate(
                    "Overview"
                  )
                }
              />

              <AdminNavButton
                icon={
                  <Users size={17} />
                }
                label="Clients"
                active={
                  activeSection ===
                  "Clients"
                }
                badge={
                  clients.length
                }
                onClick={() =>
                  navigate(
                    "Clients"
                  )
                }
              />

              <AdminNavButton
                icon={
                  <FolderOpen
                    size={17}
                  />
                }
                label="Projects"
                active={
                  activeSection ===
                  "Projects"
                }
                badge={
                  projects.length
                }
                onClick={() =>
                  navigate(
                    "Projects"
                  )
                }
              />

              <Link
                href="/admin/messages"
                className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-sm font-semibold transition-all duration-300 ${
  pathname.startsWith("/admin/messages")
    ? "border-cyan-300/70 bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-cyan-400/15 text-white shadow-[0_0_22px_rgba(34,211,238,0.45)]"
    : "border-cyan-400/10 bg-[#0b1728]/70 text-gray-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
}`}
              >

                <span className="flex items-center gap-3">

                  <MessageSquare
                    size={17}
                  />

                  Messages

                </span>

                {messageCount > 0 && (
                  <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-cyan-400 px-1.5 text-[10px] font-bold text-black">
                    {messageCount}
                  </span>
                )}

              </Link>

            </div>

          </nav>

          <div className="border-t border-white/10 p-4">

            <button
              type="button"
              className="flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-sm text-gray-500 transition hover:bg-white/[0.04] hover:text-white"
            >
              <Settings size={17} />

              Settings
            </button>

            <button
              type="button"
              onClick={
                handleSignOut
              }
              className="mt-1 flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-sm text-gray-500 transition hover:bg-red-400/10 hover:text-red-300"
            >
              <LogOut size={17} />

              Sign out
            </button>

            <p className="mt-5 px-3 text-[10px] text-gray-700">
              ©{" "}
              {new Date().getFullYear()}{" "}
              Aether AI Solutions
            </p>

          </div>

        </aside>

        {/* ===================================================
            MAIN CONTENT
        =================================================== */}

        <section className="min-w-0 flex-1">

          <header className="sticky top-0 z-20 flex items-center justify-between border-b border-cyan-400/10 bg-gradient-to-r from-[#0d1420]/95 via-[#0a101a]/95 to-[#070b12]/95 px-5 py-5 shadow-lg shadow-black/10 backdrop-blur-xl sm:px-8">

            <div>

              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-cyan-400">
                Aether Workspace
              </p>

              <p className="mt-1 text-sm font-semibold text-white">
                Admin Command Center
              </p>

            </div>

            <div className="flex items-center gap-2">
<button
  type="button"
  aria-label="Open mobile navigation"
  onClick={() => setMobileMenuOpen(true)}
  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 transition hover:bg-cyan-400/20 md:hidden"
>
  <Menu size={20} />
</button>
              <button
                type="button"
                onClick={
                  handleRefresh
                }
                disabled={
                  refreshing
                }
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 text-xs font-medium text-gray-400 transition hover:bg-white/[0.06] hover:text-white disabled:opacity-50"
              >

                <RefreshCw
                  size={15}
                  className={
                    refreshing
                      ? "animate-spin"
                      : ""
                  }
                />

                <span className="hidden sm:inline">
                  Refresh
                </span>

              </button>

              <Link
                href="/admin/messages"
                className="relative rounded-xl border border-white/10 bg-white/[0.03] p-2.5 text-gray-400 transition hover:text-white"
              >

                <MessageSquare
                  size={17}
                />

                {messageCount >
                  0 && (
                  <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-cyan-400 px-1 text-[9px] font-bold text-black">
                    {messageCount}
                  </span>
                )}

              </Link>

              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 text-sm font-bold text-cyan-300">
                A
              </div>

            </div>

          </header>

          <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">

            {/* =================================================
                ALERTS
            ================================================= */}

            {success && (
              <div className="mb-6 flex items-center justify-between rounded-xl border border-green-400/20 bg-green-400/10 px-4 py-3 text-sm text-green-300">

                <span>
                  {success}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setSuccess("")
                  }
                  className="text-green-300/60 hover:text-green-300"
                >
                  <X size={16} />
                </button>

              </div>
            )}

            {error && (
              <div className="mb-6 flex items-start justify-between gap-4 rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-300">

                <div className="flex items-start gap-3">

                  <AlertTriangle
                    size={17}
                    className="mt-0.5 shrink-0"
                  />

                  <span>
                    {error}
                  </span>

                </div>

                <button
                  type="button"
                  onClick={() =>
                    setError("")
                  }
                  className="shrink-0 text-red-300/60 hover:text-red-300"
                >
                  <X size={16} />
                </button>

              </div>
            )}

            {/* =================================================
                OVERVIEW
            ================================================= */}

            {activeSection ===
              "Overview" && (
              <OverviewSection
                clients={clients}
                projects={projects}
                messageCount={
                  messageCount
                }
                clientsWithProjects={
                  clientsWithProjects
                }
                getClientDisplayName={
                  getClientDisplayName
                }
                onClients={() =>
                  navigate(
                    "Clients"
                  )
                }
                onProjects={() =>
                  navigate(
                    "Projects"
                  )
                }
                onCreateProject={() =>
                  setShowProjectForm(
                    true
                  )
                }
              />
            )}

            {/* =================================================
                CLIENTS
            ================================================= */}

            {activeSection ===
              "Clients" && (
              <ClientsSection
                clients={
                  filteredClients
                }
                search={
                  clientSearch
                }
                setSearch={
                  setClientSearch
                }
                getProjectCount={
                  getClientProjectCount
                }
                onViewClient={
                  setSelectedClient
                }
              />
            )}

            {/* =================================================
                PROJECTS
            ================================================= */}

            {activeSection ===
              "Projects" && (
              <ProjectsSection
                projects={
                  filteredProjects
                }
                search={
                  projectSearch
                }
                setSearch={
                  setProjectSearch
                }
                getClientName={
                  getClientName
                }
                onCreateProject={() =>
                  setShowProjectForm(
                    true
                  )
                }
                onEditProject={
                  openEditProject
                }
                onDeleteProject={
                  setProjectToDelete
                }
              />
            )}

          </div>

        </section>

      </div>

     {/* MOBILE NAVIGATION PANEL */}

{mobileMenuOpen && (
  <div className="fixed inset-0 z-50 md:hidden">

    <button
      type="button"
      aria-label="Close mobile navigation"
      onClick={() => setMobileMenuOpen(false)}
      className="absolute inset-0 bg-black/75 backdrop-blur-sm"
    />

    <div className="absolute left-0 top-0 flex h-full w-72 max-w-[85vw] flex-col border-r border-cyan-400/20 bg-gradient-to-b from-[#111d2c] to-[#05070a] p-6 shadow-2xl">

      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-cyan-300">
          AETHER
        </h2>

        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setMobileMenuOpen(false)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300"
        >
          <X size={20} />
        </button>
      </div>

      <p className="mt-2 text-xs text-gray-500">
        Admin Command Center
      </p>

      <nav className="mt-10 space-y-3">

        {(["Overview", "Clients", "Projects"] as const).map(
          (section) => (
            <button
              key={section}
              type="button"
              onClick={() => {
                navigate(section);
                setMobileMenuOpen(false);
              }}
              className={`w-full rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${
               activeSection === section
  ? "border border-cyan-300/70 bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-cyan-400/15 text-white shadow-[0_0_22px_rgba(34,211,238,0.45),inset_0_0_14px_rgba(34,211,238,0.15)]"
  : "border border-cyan-400/10 bg-[#0b1728]/70 text-gray-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
              }`}
            >
              <span className="flex items-center gap-3">
  <span
    className={`flex h-9 w-9 items-center justify-center rounded-xl border transition-all duration-300 ${
      activeSection === section
        ? "border-cyan-300/50 bg-cyan-400/20 text-cyan-200 shadow-[0_0_16px_rgba(34,211,238,0.35)]"
        : "border-cyan-400/15 bg-cyan-400/5 text-cyan-400"
    }`}
  >
    {section === "Overview" && <LayoutDashboard size={18} />}
    {section === "Clients" && <Users size={18} />}
    {section === "Projects" && <FolderOpen size={18} />}
  </span>

  <span>{section}</span>
</span>
            </button>
          )
        )}

      <Link
  href="/admin/messages"
  onClick={() => setMobileMenuOpen(false)}
  className="flex w-full items-center gap-3 rounded-xl border border-cyan-400/10 bg-[#0b1728]/70 px-4 py-3 text-sm font-semibold text-gray-300 transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/15 hover:text-cyan-300 hover:shadow-[0_0_22px_rgba(34,211,238,0.25)]"
>
  <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/5 text-cyan-400">
    <MessageSquare size={18} />
  </span>

  <span>Messages</span>
</Link>

      </nav>

      <div className="mt-auto border-t border-white/10 pt-5">
        <button
          type="button"
          onClick={handleSignOut}
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-300 hover:bg-red-400/10"
        >
          <LogOut size={17} />
          Sign Out
        </button>
      </div>

    </div>
  </div>
)}
      {/* =======================================================
          CREATE PROJECT MODAL
      ======================================================= */}

      {showProjectForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/75 p-5 backdrop-blur-sm">

          <div className="my-8 w-full max-w-lg rounded-3xl border border-white/10 bg-[#090e16] p-6 shadow-2xl">

            <div className="flex items-start justify-between">

              <div>

                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  Project Workspace
                </p>

                <h2 className="mt-2 text-2xl font-bold text-white">
                  Create Project
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  Create a project and assign
                  it directly to a client.
                </p>

              </div>

              <button
                type="button"
                onClick={() =>
                  setShowProjectForm(
                    false
                  )
                }
                className="rounded-xl p-2 text-gray-500 transition hover:bg-white/10 hover:text-white"
              >
                <X size={20} />
              </button>

            </div>

            {/* CLIENT */}

            <div className="mt-7">

              <label className="text-sm font-medium text-gray-300">
                Select Client
              </label>

              <select
                value={
                  selectedClientId
                }
                onChange={(event) =>
                  setSelectedClientId(
                    event.target.value
                  )
                }
                className="mt-2 w-full rounded-xl border border-white/10 bg-[#070b12] px-4 py-3 text-sm text-white outline-none focus:border-cyan-400/40"
              >

                <option value="">
                  Choose a client...
                </option>

                {clients.map(
                  (client) => (
                    <option
                      key={
                        client.id
                      }
                      value={
                        client.id
                      }
                    >
                      {client.company ||
                        client.name}{" "}
                      —{" "}
                      {client.email}
                    </option>
                  )
                )}

              </select>

            </div>

            {/* PROJECT NAME */}

            <div className="mt-5">

              <label className="text-sm font-medium text-gray-300">
                Project Name
              </label>

              <input
                value={
                  projectName
                }
                onChange={(event) =>
                  setProjectName(
                    event.target.value
                  )
                }
                placeholder="e.g. Aether AI Website"
                className="mt-2 w-full rounded-xl border border-white/10 bg-[#070b12] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-cyan-400/40"
              />

            </div>

            {/* DESCRIPTION */}

            <div className="mt-5">

              <label className="text-sm font-medium text-gray-300">
                Description
              </label>

              <textarea
                value={
                  description
                }
                onChange={(event) =>
                  setDescription(
                    event.target.value
                  )
                }
                placeholder="Describe the project..."
                rows={4}
                className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-[#070b12] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-cyan-400/40"
              />

            </div>

            {/* ACTIONS */}

            <div className="mt-7 flex gap-3">

              <button
                type="button"
                onClick={() =>
                  setShowProjectForm(
                    false
                  )
                }
                className="flex-1 rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-gray-400 transition hover:bg-white/[0.04] hover:text-white"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={
                  createProject
                }
                disabled={
                  creating
                }
                className="flex-1 rounded-xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {creating
                  ? "Creating..."
                  : "Create & Assign"}
              </button>

            </div>

          </div>

        </div>
      )}

      {/* =======================================================
          EDIT PROJECT MODAL
      ======================================================= */}

      {projectToEdit && (
        <EditProjectModal
          project={
            projectToEdit
          }
          clients={clients}
          clientId={
            editClientId
          }
          projectName={
            editProjectName
          }
          description={
            editDescription
          }
          updating={updating}
          setClientId={
            setEditClientId
          }
          setProjectName={
            setEditProjectName
          }
          setDescription={
            setEditDescription
          }
          onCancel={() => {
            if (!updating) {
              setProjectToEdit(
                null
              );
            }
          }}
          onSave={
            updateProject
          }
        />
      )}

      {/* =======================================================
          CLIENT DETAILS MODAL
      ======================================================= */}

      {selectedClient && (
        <ClientDetailsModal
          client={
            selectedClient
          }
          projects={projects.filter(
            (project) =>
              project.client_id ===
              selectedClient.id
          )}
          onClose={() =>
            setSelectedClient(
              null
            )
          }
        />
      )}

      {/* =======================================================
          DELETE PROJECT MODAL
      ======================================================= */}

      {projectToDelete && (
        <DeleteProjectModal
          project={
            projectToDelete
          }
          deleting={deleting}
          onCancel={() =>
            setProjectToDelete(
              null
            )
          }
          onConfirm={
            deleteProject
          }
        />
      )}

    </main>
  );
}

/* =========================================================
   ADMIN NAV BUTTON
========================================================= */

function AdminNavButton({
  icon,
  label,
  active,
  badge,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  badge?: number;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center justify-between rounded-xl border px-4 py-3.5 text-sm font-medium transition-all duration-200 ${
        active
          ? "border-cyan-400/30 bg-cyan-400/[0.12] text-cyan-300 shadow-[inset_3px_0_0_#22d3ee]"
          : "border-transparent text-gray-400 hover:border-white/10 hover:bg-white/[0.06] hover:text-white hover:translate-x-1"
      }`}
    >

      <span className="flex items-center gap-3">
        {icon}
        {label}
      </span>

      {badge !== undefined &&
        badge > 0 && (
          <span
            className={`flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-[10px] font-bold ${
              active
                ? "bg-cyan-400 text-black"
                : "bg-white/10 text-gray-400"
            }`}
          >
            {badge}
          </span>
        )}

    </button>
  );
}

/* =========================================================
   OVERVIEW
========================================================= */

function OverviewSection({
  clients,
  projects,
  messageCount,
  clientsWithProjects,
  getClientDisplayName,
  onClients,
  onProjects,
  onCreateProject,
}: {
  clients: Client[];
  projects: Project[];
  messageCount: number;
  clientsWithProjects: number;
  getClientDisplayName: (
    clientId: string
  ) => string;
  onClients: () => void;
  onProjects: () => void;
  onCreateProject: () => void;
}) {
  return (
    <div>

      {/* HEADER */}

      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

        <div>

          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-600">
            Overview
          </p>

         <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
  <span className="text-white">Aether </span>
  <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
    Command Center
  </span>
</h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
  Your central workspace to manage
  <span className="font-semibold text-cyan-300"> clients</span>,
  <span className="font-semibold text-cyan-300"> projects</span>,
  and
  <span className="font-semibold text-cyan-300"> communications</span>
  — all in one secure, intelligent command center.
</p>

        </div>

        <button
          type="button"
          onClick={
            onCreateProject
          }
         className="inline-flex w-fit items-center gap-2 rounded-xl border border-cyan-300/40 bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-cyan-300 hover:to-blue-400 hover:shadow-cyan-400/30"
        >
          <Plus size={17} />
          Create Project
        </button>

      </div>

      {/* STATS */}

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:gap-6 xl:grid-cols-4">

        <AdminStatCard
          icon={
            <Users size={20} />
          }
          title="Total Clients"
          value={String(
            clients.length
          )}
        />

        <AdminStatCard
          icon={
            <MessageSquare
              size={20}
            />
          }
          title="Messages"
          value={String(
            messageCount
          )}
        />

        <AdminStatCard
          icon={
            <FolderOpen
              size={20}
            />
          }
          title="Total Projects"
          value={String(
            projects.length
          )}
        />

        <AdminStatCard
          icon={
            <UserRound
              size={20}
            />
          }
          title="Clients With Projects"
          value={String(
            clientsWithProjects
          )}
        />

      </div>

      {/* QUICK ACTIONS */}

      <div className="mt-8 grid gap-4 lg:grid-cols-3">

        <button
          type="button"
          onClick={
            onClients
          }
          className="group rounded-3xl border border-cyan-400/10 bg-gradient-to-br from-[#111d2c] via-[#0b1420] to-[#070c13] p-6 text-left shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-xl hover:shadow-cyan-500/10"
        >

          <div className="flex items-start justify-between">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-400/20 to-blue-500/10 text-cyan-300 shadow-lg shadow-cyan-500/10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-cyan-400/25">
              <Users size={22} />
            </div>

            <ChevronRight
              size={18}
              className="text-gray-600 transition group-hover:translate-x-1 group-hover:text-cyan-400"
            />

          </div>

          <h3 className="mt-6 text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-300">
            Manage Clients
          </h3>

          <p className="mt-3 text-sm leading-7 text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
            View registered clients,
            companies, contact details
            and assigned projects.
          </p>

        </button>

        <button
          type="button"
          onClick={
            onProjects
          }
          className="group rounded-3xl border border-white/10 bg-[#090e16] p-6 text-left transition hover:-translate-y-0.5 hover:border-cyan-400/25"
        >

          <div className="flex items-start justify-between">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
              <FolderOpen size={22} />
            </div>

            <ChevronRight
              size={18}
              className="text-gray-600 transition group-hover:translate-x-1 group-hover:text-cyan-400"
            />

          </div>

          <h3 className="mt-6 text-lg font-semibold">
            Manage Projects
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            Create, assign, edit, review
            and delete client projects.
          </p>

        </button>

        <Link
          href="/admin/messages"
          className="group rounded-3xl border border-white/10 bg-[#090e16] p-6 text-left transition hover:-translate-y-0.5 hover:border-cyan-400/25"
        >

          <div className="flex items-start justify-between">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
              <MessageSquare
                size={22}
              />
            </div>

            <ChevronRight
              size={18}
              className="text-gray-600 transition group-hover:translate-x-1 group-hover:text-cyan-400"
            />

          </div>

          <h3 className="mt-6 text-lg font-semibold">
            Client Messages
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            View and respond to client
            conversations.
          </p>

        </Link>

      </div>

      {/* PROJECT SUMMARY */}

     <div className="mt-10 rounded-3xl border border-cyan-400/10 bg-gradient-to-br from-[#111d2c] via-[#0b1420] to-[#070c13] p-6 shadow-xl shadow-black/20 transition-all duration-300 hover:border-cyan-400/20 sm:p-8">

        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

          <div>

            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-600">
              Workspace
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
  Project <span className="text-cyan-300">Overview</span>
</h2>

           <p className="mt-3 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
  Track project activity, monitor client assignments,
  and manage your workspace from one centralized dashboard.
</p>

          </div>

          <button
            type="button"
            onClick={
              onProjects
            }
            className="group inline-flex w-fit items-center gap-2 rounded-xl border border-cyan-400/30 bg-gradient-to-r from-cyan-400/15 to-blue-500/10 px-5 py-3 text-sm font-semibold text-cyan-300 shadow-lg shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/50 hover:from-cyan-400/25 hover:to-blue-500/20 hover:shadow-cyan-400/20"
          >
            View Projects
            <ChevronRight
              size={16}
            />
          </button>

        </div>

        {projects.length ===
          0 ? (
         <div className="mt-8 rounded-2xl border border-dashed border-cyan-400/20 bg-gradient-to-br from-cyan-400/[0.06] via-[#0b1420] to-blue-500/[0.04] px-6 py-12 text-center shadow-inner shadow-black/20 transition-all duration-300 hover:border-cyan-400/40">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-400/20 to-blue-500/10 text-cyan-300 shadow-lg shadow-cyan-500/20">
  <FolderOpen size={30} />
</div>

          <h3 className="mt-6 text-xl font-bold tracking-tight text-white">
  Your Project Workspace Awaits
</h3>

<p className="mx-auto mt-3 max-w-md text-sm leading-7 text-gray-400">
  No projects have been created yet.
  Start by creating your first project and
  assigning it to a client.
</p>
<button
  type="button"
  onClick={onCreateProject}
  className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-300/40 bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-cyan-300 hover:to-blue-400 hover:shadow-cyan-400/30"
>
  <Plus size={17} />
  Create Your First Project
</button>

          </div>
        ) : (
          <div className="mt-6 grid gap-3 sm:grid-cols-2">

            {projects
              .slice(0, 4)
              .map(
                (project) => (
                  <div
                    key={
                      project.id
                    }
                    className="group rounded-2xl border border-cyan-400/10 bg-gradient-to-br from-[#111d2c] to-[#080e17] p-5 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-cyan-500/10"
                  >

                    <div className="flex items-center gap-3">

                     <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/25 bg-gradient-to-br from-cyan-400/20 to-blue-500/10 text-cyan-300 shadow-lg shadow-cyan-500/10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-cyan-400/20">
  <FolderOpen size={20} />
</div>

                      <div className="min-w-0">

                        <p className="truncate text-base font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-300">
  {project.project_name}
</p>

                        <p className="mt-1.5 truncate text-xs font-medium tracking-wide text-slate-400 transition-colors duration-300 group-hover:text-cyan-200/80">
                          {getClientDisplayName(
                            project.client_id
                          )}
                        </p>

                      </div>

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
   CLIENTS SECTION
========================================================= */

function ClientsSection({
  clients,
  search,
  setSearch,
  getProjectCount,
  onViewClient,
}: {
  clients: Client[];
  search: string;
  setSearch: (
    value: string
  ) => void;
  getProjectCount: (
    clientId: string
  ) => number;
  onViewClient: (
    client: Client
  ) => void;
}) {
  return (
    <div>

      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

        <div>

          <p className="text-xs uppercase tracking-[0.2em] text-gray-600">
            Workspace
          </p>

          <h1 className="mt-2 text-3xl font-bold">
            Clients
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Manage registered clients and
            view their project workspace.
          </p>

        </div>

        <div className="relative w-full md:w-80">

          <Search
            size={17}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"
          />

          <input
            value={search}
            onChange={(event) =>
              setSearch(
                event.target.value
              )
            }
            placeholder="Search clients..."
            className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-3 pl-10 pr-4 text-sm text-white outline-none placeholder:text-gray-600 focus:border-cyan-400/30"
          />

        </div>

      </div>

     <div className="mt-8 overflow-hidden rounded-3xl border border-cyan-400/10 bg-gradient-to-br from-[#111d2c] via-[#0b1420] to-[#070c13] shadow-xl shadow-black/20 transition-all duration-300 hover:border-cyan-400/20">

        <div className="border-b border-white/10 px-6 py-5">

        <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
  Client <span className="text-cyan-300">Directory</span>
</h2>

          <p className="mt-1 text-xs text-gray-600">
            {clients.length}{" "}
            {clients.length === 1
              ? "client"
              : "clients"}{" "}
            found
          </p>

        </div>

        {clients.length === 0 ? (
          <div className="flex min-h-[300px] items-center justify-center p-8 text-center">

            <div>

              <Users
                size={30}
                className="mx-auto text-gray-600"
              />

              <h3 className="mt-4 font-semibold">
                No clients found
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Try changing your search.
              </p>

            </div>

          </div>
        ) : (
          <div className="divide-y divide-white/[0.06]">

            {clients.map(
              (client) => (
                <div
                  key={
                    client.id
                  }
                  className="flex flex-col gap-5 px-6 py-5 transition hover:bg-white/[0.02] sm:flex-row sm:items-center sm:justify-between"
                >

                  <div className="flex min-w-0 items-center gap-4">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-400/20 to-blue-500/10 text-lg font-bold text-cyan-300 shadow-lg shadow-cyan-500/10 transition-all duration-300 hover:scale-110 hover:border-cyan-300/50 hover:shadow-cyan-400/20">
                      {client.name
                        ?.charAt(
                          0
                        )
                        ?.toUpperCase() ||
                        "C"}
                    </div>

                    <div className="min-w-0">

                      <p className="truncate text-base font-bold tracking-tight text-white transition-colors duration-300 hover:text-cyan-300 sm:text-lg">
                        {
                          client.name
                        }
                      </p>

                     <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-slate-400 transition-colors duration-300">

                        <span className="flex items-center gap-1.5">
                          <Mail
                            size={
                              12
                            }
                          />

                          {
                            client.email
                          }
                        </span>

                        {client.company && (
                          <span className="flex items-center gap-1.5">
                            <Building2
                              size={
                                12
                              }
                            />

                            {
                              client.company
                            }
                          </span>
                        )}

                      </div>

                    </div>

                  </div>

                  <div className="flex items-center justify-between gap-4 sm:justify-end">

                    <div className="text-left sm:text-right">

                      <p className="text-lg font-bold text-white">
                        {getProjectCount(
                          client.id
                        )}
                      </p>

                      <p className="text-[10px] uppercase tracking-[0.15em] text-gray-600">
                        Projects
                      </p>

                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        onViewClient(
                          client
                        )
                      }
                      className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 px-4 py-2.5 text-xs font-semibold text-cyan-300 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/50 hover:from-cyan-400/20 hover:to-blue-500/20 hover:shadow-lg hover:shadow-cyan-500/10"
                    >

                      <Eye
                        size={
                          14
                        }
                      />

                      View

                    </button>

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
   PROJECTS SECTION
========================================================= */

function ProjectsSection({
  projects,
  search,
  setSearch,
  getClientName,
  onCreateProject,
  onEditProject,
  onDeleteProject,
}: {
  projects: Project[];
  search: string;
  setSearch: (
    value: string
  ) => void;
  getClientName: (
    clientId: string
  ) => string;
  onCreateProject: () => void;
  onEditProject: (
    project: Project
  ) => void;
  onDeleteProject: (
    project: Project
  ) => void;
}) {
  return (
    <div>

      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

        <div>

          <p className="text-xs uppercase tracking-[0.2em] text-gray-600">
            Workspace
          </p>

          <h1 className="mt-2 text-3xl font-bold">
            Projects
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Create, assign, edit and
            manage client projects.
          </p>

        </div>

        <div className="flex flex-col gap-3 sm:flex-row">

          <div className="relative">

            <Search
              size={17}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"
            />

            <input
              value={search}
              onChange={(event) =>
                setSearch(
                  event.target.value
                )
              }
              placeholder="Search projects..."
              className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-3 pl-10 pr-4 text-sm text-white outline-none placeholder:text-gray-600 focus:border-cyan-400/30 sm:w-72"
            />

          </div>

          <button
            type="button"
            onClick={
              onCreateProject
            }
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300"
          >

            <Plus size={16} />

            New Project

          </button>

        </div>

      </div>

      <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-[#090e16]">

        <div className="border-b border-white/10 px-6 py-5">

          <h2 className="font-semibold">
            Project Directory
          </h2>

          <p className="mt-1 text-xs text-gray-600">
            {projects.length}{" "}
            {projects.length === 1
              ? "project"
              : "projects"}{" "}
            found
          </p>

        </div>

        {projects.length === 0 ? (
          <div className="flex min-h-[320px] items-center justify-center p-8 text-center">

            <div>

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                <FolderOpen
                  size={28}
                />
              </div>

              <h3 className="mt-5 font-semibold">
                No projects found
              </h3>

              <p className="mt-2 max-w-sm text-sm leading-6 text-gray-600">
                Create a project and
                assign it to a client
                to get started.
              </p>

              <button
                type="button"
                onClick={
                  onCreateProject
                }
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-black hover:bg-cyan-300"
              >
                <Plus size={16} />
                Create Project
              </button>

            </div>

          </div>
        ) : (
          <div className="divide-y divide-white/[0.06]">

            {projects.map(
              (project) => (
                <div
                  key={
                    project.id
                  }
                  className="group m-3 rounded-2xl border border-cyan-400/10 bg-gradient-to-br from-[#111d2c] via-[#0b1420] to-[#080e17] p-6 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/30 hover:shadow-cyan-500/10"
                >

                  <div className="flex flex-col justify-between gap-6 lg:flex-row">

                    <div className="min-w-0">

                      <div className="flex flex-wrap items-center gap-3">

                        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3.5 py-1.5 text-[11px] font-semibold tracking-wide text-emerald-300">
  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
  Assigned
</span>

                        <span className="flex items-center gap-1.5 text-xs text-gray-600">
                          <UserRound
                            size={
                              12
                            }
                          />

                          {
                            getClientName(
                              project.client_id
                            )
                          }
                        </span>

                      </div>

                      <h3 className="mt-4 text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-300 sm:text-2xl">
                        {
                          project.project_name
                        }
                      </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
  {project.description ||
    "No project description."}
</p>

                      <div className="mt-5 flex flex-wrap gap-4 text-xs text-gray-600">

                        <span className="flex items-center gap-1.5">
                          <CalendarDays
                            size={
                              13
                            }
                          />

                          Created{" "}
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
                        </span>

                        <span className="truncate">
                          ID:{" "}
                          {
                            project.id
                          }
                        </span>

                      </div>

                    </div>

                    {/* ACTIONS */}

                    <div className="flex shrink-0 items-center gap-2 lg:self-start">

                      <button
                        type="button"
                        onClick={() =>
                          onEditProject(
                            project
                          )
                        }
                       className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 px-4 py-2.5 text-xs font-semibold text-cyan-300 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/50 hover:from-cyan-400/20 hover:to-blue-500/20 hover:shadow-lg hover:shadow-cyan-500/10"
                      >

                        <Pencil
                          size={
                            14
                          }
                        />

                        Edit

                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          onDeleteProject(
                            project
                          )
                        }
                       className="inline-flex items-center gap-2 rounded-xl border border-red-400/25 bg-gradient-to-r from-red-500/10 to-rose-500/10 px-4 py-2.5 text-xs font-semibold text-red-300 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-red-400/50 hover:from-red-500/20 hover:to-rose-500/20 hover:shadow-lg hover:shadow-red-500/10"
                      >

                        <Trash2
                          size={
                            14
                          }
                        />

                        Delete

                      </button>

                    </div>

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
   EDIT PROJECT MODAL
========================================================= */

function EditProjectModal({
  project,
  clients,
  clientId,
  projectName,
  description,
  updating,
  setClientId,
  setProjectName,
  setDescription,
  onCancel,
  onSave,
}: {
  project: Project;
  clients: Client[];
  clientId: string;
  projectName: string;
  description: string;
  updating: boolean;
  setClientId: (
    value: string
  ) => void;
  setProjectName: (
    value: string
  ) => void;
  setDescription: (
    value: string
  ) => void;
  onCancel: () => void;
  onSave: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[55] flex items-center justify-center overflow-y-auto bg-black/75 p-5 backdrop-blur-sm">

      <div className="my-8 w-full max-w-lg rounded-3xl border border-white/10 bg-[#090e16] p-6 shadow-2xl">

        {/* HEADER */}

        <div className="flex items-start justify-between">

          <div>

            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Project Workspace
            </p>

            <h2 className="mt-2 text-2xl font-bold text-white">
              Edit Project
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Update project details or
              reassign it to another client.
            </p>

          </div>

          <button
            type="button"
            onClick={
              onCancel
            }
            disabled={
              updating
            }
            className="rounded-xl p-2 text-gray-500 transition hover:bg-white/10 hover:text-white disabled:opacity-50"
          >
            <X size={20} />
          </button>

        </div>

        {/* CURRENT PROJECT */}

        <div className="mt-6 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.04] p-4">

          <p className="text-[10px] uppercase tracking-[0.15em] text-gray-600">
            Editing
          </p>

          <p className="mt-1 truncate text-sm font-medium text-cyan-300">
            {project.project_name}
          </p>

        </div>

        {/* CLIENT */}

        <div className="mt-6">

          <label className="text-sm font-medium text-gray-300">
            Assigned Client
          </label>

          <select
            value={
              clientId
            }
            onChange={(event) =>
              setClientId(
                event.target.value
              )
            }
            disabled={
              updating
            }
            className="mt-2 w-full rounded-xl border border-white/10 bg-[#070b12] px-4 py-3 text-sm text-white outline-none focus:border-cyan-400/40 disabled:opacity-50"
          >

            <option value="">
              Choose a client...
            </option>

            {clients.map(
              (client) => (
                <option
                  key={
                    client.id
                  }
                  value={
                    client.id
                  }
                >
                  {client.company ||
                    client.name}{" "}
                  —{" "}
                  {client.email}
                </option>
              )
            )}

          </select>

        </div>

        {/* PROJECT NAME */}

        <div className="mt-5">

          <label className="text-sm font-medium text-gray-300">
            Project Name
          </label>

          <input
            value={
              projectName
            }
            onChange={(event) =>
              setProjectName(
                event.target.value
              )
            }
            disabled={
              updating
            }
            placeholder="Project name"
            className="mt-2 w-full rounded-xl border border-white/10 bg-[#070b12] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-cyan-400/40 disabled:opacity-50"
          />

        </div>

        {/* DESCRIPTION */}

        <div className="mt-5">

          <label className="text-sm font-medium text-gray-300">
            Description
          </label>

          <textarea
            value={
              description
            }
            onChange={(event) =>
              setDescription(
                event.target.value
              )
            }
            disabled={
              updating
            }
            placeholder="Describe the project..."
            rows={4}
            className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-[#070b12] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-cyan-400/40 disabled:opacity-50"
          />

        </div>

        {/* ACTIONS */}

        <div className="mt-7 flex gap-3">

          <button
            type="button"
            onClick={
              onCancel
            }
            disabled={
              updating
            }
            className="flex-1 rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-gray-400 transition hover:bg-white/[0.04] hover:text-white disabled:opacity-50"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={
              onSave
            }
            disabled={
              updating
            }
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
          >

            {updating ? (
              <>
                <RefreshCw
                  size={16}
                  className="animate-spin"
                />

                Saving...
              </>
            ) : (
              <>
                <Save size={16} />

                Save Changes
              </>
            )}

          </button>

        </div>

      </div>

    </div>
  );
}

/* =========================================================
   CLIENT DETAILS MODAL
========================================================= */

function ClientDetailsModal({
  client,
  projects,
  onClose,
}: {
  client: Client;
  projects: Project[];
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/75 p-5 backdrop-blur-sm">

      <div className="my-8 w-full max-w-2xl rounded-3xl border border-white/10 bg-[#090e16] shadow-2xl">

        <div className="flex items-start justify-between border-b border-white/10 p-6">

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 text-lg font-bold text-cyan-300">
              {client.name
                ?.charAt(0)
                ?.toUpperCase() ||
                "C"}
            </div>

            <div>

              <p className="text-xs uppercase tracking-[0.18em] text-cyan-400">
                Client
              </p>

              <h2 className="mt-1 text-xl font-bold text-white">
                {client.name}
              </h2>

            </div>

          </div>

          <button
            type="button"
            onClick={
              onClose
            }
            className="rounded-xl p-2 text-gray-500 hover:bg-white/10 hover:text-white"
          >
            <X size={20} />
          </button>

        </div>

        <div className="p-6">

          <div className="grid gap-3 sm:grid-cols-2">

            <InfoBox
              icon={
                <Mail size={16} />
              }
              label="Email"
              value={
                client.email
              }
            />

            <InfoBox
              icon={
                <Building2
                  size={16}
                />
              }
              label="Company"
              value={
                client.company ||
                "Not provided"
              }
            />

          </div>

          <div className="mt-7">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-xs uppercase tracking-[0.18em] text-gray-600">
                  Workspace
                </p>

                <h3 className="mt-1 font-semibold">
                  Assigned Projects
                </h3>

              </div>

              <span className="rounded-full bg-white/[0.05] px-3 py-1 text-xs text-gray-500">
                {
                  projects.length
                }
              </span>

            </div>

            {projects.length ===
            0 ? (
              <div className="mt-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 text-center">

                <FolderOpen
                  size={24}
                  className="mx-auto text-gray-600"
                />

                <p className="mt-3 text-sm text-gray-500">
                  No projects assigned
                  to this client yet.
                </p>

              </div>
            ) : (
              <div className="mt-4 space-y-3">

                {projects.map(
                  (project) => (
                    <div
                      key={
                        project.id
                      }
                      className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4"
                    >

                      <div className="flex items-start gap-3">

                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                          <FolderOpen
                            size={
                              16
                            }
                          />
                        </div>

                        <div className="min-w-0">

                          <p className="font-medium text-white">
                            {
                              project.project_name
                            }
                          </p>

                          <p className="mt-1 text-xs leading-5 text-gray-600">
                            {
                              project.description ||
                              "No description."
                            }
                          </p>

                        </div>

                      </div>

                    </div>
                  )
                )}

              </div>
            )}

          </div>

        </div>

        <div className="border-t border-white/10 p-6">

          <button
            type="button"
            onClick={
              onClose
            }
            className="w-full rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-gray-400 transition hover:bg-white/[0.04] hover:text-white"
          >
            Close
          </button>

        </div>

      </div>

    </div>
  );
}

/* =========================================================
   INFO BOX
========================================================= */

function InfoBox({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4">

      <div className="flex items-center gap-2 text-cyan-400">

        {icon}

        <span className="text-[10px] uppercase tracking-[0.15em] text-gray-600">
          {label}
        </span>

      </div>

      <p className="mt-3 truncate text-sm font-medium text-gray-300">
        {value}
      </p>

    </div>
  );
}

/* =========================================================
   DELETE PROJECT MODAL
========================================================= */

function DeleteProjectModal({
  project,
  deleting,
  onCancel,
  onConfirm,
}: {
  project: Project;
  deleting: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-5 backdrop-blur-sm">

      <div className="w-full max-w-md rounded-3xl border border-red-400/15 bg-[#090e16] p-6 shadow-2xl">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-red-400/20 bg-red-400/10 text-red-400">
          <AlertTriangle
            size={22}
          />
        </div>

        <h2 className="mt-5 text-xl font-bold text-white">
          Delete Project?
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          You are about to permanently
          delete:
        </p>

        <div className="mt-4 rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-3">

          <p className="font-medium text-white">
            {project.project_name}
          </p>

        </div>

        <p className="mt-4 text-xs leading-5 text-red-300/70">
          This action cannot be undone.
          The project will also disappear
          from the assigned client's
          workspace.
        </p>

        <div className="mt-6 flex gap-3">

          <button
            type="button"
            onClick={
              onCancel
            }
            disabled={
              deleting
            }
            className="flex-1 rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-gray-400 transition hover:bg-white/[0.04] hover:text-white disabled:opacity-50"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={
              onConfirm
            }
            disabled={
              deleting
            }
            className="flex-1 rounded-xl bg-red-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-400 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {deleting
              ? "Deleting..."
              : "Delete Project"}
          </button>

        </div>

      </div>

    </div>
  );
}

/* =========================================================
   ADMIN STAT CARD
========================================================= */

function AdminStatCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
   <div className="group rounded-2xl border border-cyan-400/10 bg-gradient-to-br from-[#111d2c] via-[#0b1420] to-[#070c13] p-6 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-xl hover:shadow-cyan-500/10">

      <div className="flex items-center justify-between">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/25 bg-gradient-to-br from-cyan-400/20 to-blue-500/10 text-cyan-300 shadow-lg shadow-cyan-500/10 transition-all duration-300 group-hover:scale-110 group-hover:border-cyan-300/40 group-hover:shadow-cyan-400/20">
          {icon}
        </div>

        <span className="text-4xl font-extrabold tracking-tight text-white drop-shadow-sm transition-all duration-300 group-hover:text-cyan-300 sm:text-5xl">
  {value}
</span>

      </div>

     <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-gray-400 transition-colors duration-300 group-hover:text-cyan-300">
  {title}
</p>

    </div>
  );
}