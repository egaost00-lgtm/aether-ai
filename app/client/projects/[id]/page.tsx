"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Bot,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Code2,
  FileText,
  FolderOpen,
  Gauge,
  Globe2,
  Layers3,
  MessageSquare,
  MoreHorizontal,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  X,
  Zap,
} from "lucide-react";

type PhaseStatus = "completed" | "current" | "next";

type Phase = {
  number: string;
  title: string;
  description: string;
  status: PhaseStatus;
  progress: number;
  details: string[];
};

const phases: Phase[] = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description:
      "Planning, requirements and technical architecture.",
    status: "completed",
    progress: 100,
    details: [
      "Business requirements reviewed",
      "Project architecture planned",
      "Technology stack finalized",
      "Development roadmap created",
    ],
  },
  {
    number: "02",
    title: "Website UI",
    description:
      "Premium interface and responsive experience.",
    status: "completed",
    progress: 100,
    details: [
      "Premium UI completed",
      "Responsive layouts completed",
      "Client portal interface created",
      "Homepage approved",
    ],
  },
  {
    number: "03",
    title: "AI Integration",
    description:
      "Connecting intelligent automation and AI services.",
    status: "current",
    progress: 75,
    details: [
      "AI service connection in progress",
      "Authentication system connected",
      "Client workspace connected",
      "Automation layer being configured",
    ],
  },
  {
    number: "04",
    title: "Testing & Review",
    description:
      "Quality assurance, client testing and refinements.",
    status: "next",
    progress: 0,
    details: [
      "Functional testing",
      "Responsive testing",
      "Client review",
      "Final refinements",
    ],
  },
  {
    number: "05",
    title: "Launch",
    description:
      "Production deployment and final handover.",
    status: "next",
    progress: 0,
    details: [
      "Production deployment",
      "Domain verification",
      "Final security checks",
      "Project handover",
    ],
  },
];

const deliverables = [
  {
    title: "Premium Website UI",
    type: "Design",
    status: "Approved",
    icon: Layers3,
  },
  {
    title: "AI Integration",
    type: "Development",
    status: "In Progress",
    icon: Bot,
  },
  {
    title: "Analytics System",
    type: "Integration",
    status: "Pending",
    icon: Gauge,
  },
  {
    title: "Production Launch",
    type: "Deployment",
    status: "Upcoming",
    icon: Rocket,
  },
];

const activities = [
  {
    title: "AI integration started",
    description:
      "The Aether engineering team started connecting the AI service.",
    time: "Today",
    icon: Bot,
  },
  {
    title: "Website UI approved",
    description:
      "The premium website interface was approved successfully.",
    time: "Yesterday",
    icon: CheckCircle2,
  },
  {
    title: "Project workspace created",
    description:
      "Your dedicated Aether client workspace is now active.",
    time: "3 days ago",
    icon: Sparkles,
  },
];

export default function ProjectWorkspace() {
  const params = useParams();

  const projectId = String(params?.id || "AETHER-001");

  const [selectedPhase, setSelectedPhase] = useState<Phase | null>(
    phases[2]
  );

  return (
    <main className="min-h-screen overflow-hidden bg-[#030609] text-white">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[18%] top-[-280px] h-[600px] w-[600px] rounded-full bg-cyan-500/[0.065] blur-[150px]" />

        <div className="absolute right-[-200px] top-[30%] h-[500px] w-[500px] rounded-full bg-blue-500/[0.045] blur-[150px]" />

        <div className="absolute bottom-[-250px] left-[35%] h-[600px] w-[600px] rounded-full bg-green-500/[0.035] blur-[160px]" />

        <div
          className="absolute inset-0 opacity-[0.032]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />

        <motion.div
          animate={{ y: ["-20vh", "120vh"] }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
        />
      </div>

      {/* =========================================================
          HEADER
      ========================================================= */}

      <header className="sticky top-0 z-40 border-b border-white/[0.08] bg-[#030609]/80 backdrop-blur-2xl">
        <div className="mx-auto flex h-[72px] max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:px-10">
          <div className="flex items-center gap-4">
            <Link
              href="/client/dashboard"
              className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-white/50 transition hover:border-cyan-400/30 hover:bg-cyan-400/[0.06] hover:text-cyan-300"
            >
              <ArrowLeft
                size={18}
                className="transition-transform group-hover:-translate-x-0.5"
              />
            </Link>

            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-cyan-400">
                AETHER AI SOLUTIONS
              </p>

              <p className="mt-1 text-sm font-semibold">
                Project Command Center
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 rounded-full border border-green-400/15 bg-green-400/[0.05] px-3 py-1.5 sm:flex">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400 shadow-[0_0_12px_rgba(74,222,128,1)]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-green-300">
                Project Live
              </span>
            </div>

            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/40 transition hover:text-white"
            >
              <MoreHorizontal size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 py-7 sm:px-8 lg:px-10">
        {/* Breadcrumb */}

        <div className="mb-5 flex items-center gap-2 text-xs text-white/30">
          <Link
            href="/client/dashboard"
            className="transition hover:text-cyan-300"
          >
            Client Portal
          </Link>

          <ChevronRight size={13} />

          <span>Projects</span>

          <ChevronRight size={13} />

          <span className="font-mono text-cyan-300/70">
            {projectId}
          </span>
        </div>

        {/* =======================================================
            COMPACT HERO
        ======================================================= */}

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-[30px] border border-white/[0.1] bg-white/[0.035] shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl"
        >
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-cyan-400/[0.07] blur-[100px]" />

          <div className="relative grid lg:grid-cols-[1fr_310px]">
            {/* Hero information */}

            <div className="p-6 sm:p-8 lg:p-9">
              <div className="flex flex-wrap items-center gap-3">
                <span className="flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-cyan-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,1)]" />
                  In Development
                </span>

                <span className="font-mono text-[10px] tracking-[0.18em] text-white/25">
                  {projectId}
                </span>
              </div>

              <div className="mt-5 flex flex-col justify-between gap-6 xl:flex-row">
                <div>
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                    AI Business
                    <span className="block bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
                      Website
                    </span>
                  </h1>

                  <p className="mt-4 max-w-2xl text-sm leading-6 text-white/40">
                    Premium AI-powered business website with intelligent
                    automation, analytics and custom integrations built
                    by Aether AI Solutions.
                  </p>
                </div>

                {/* Tags */}

                <div className="flex flex-wrap content-start gap-2 xl:max-w-[280px] xl:justify-end">
                  <ProjectTag
                    icon={<Bot size={13} />}
                    text="AI Powered"
                  />

                  <ProjectTag
                    icon={<ShieldCheck size={13} />}
                    text="Secure"
                  />

                  <ProjectTag
                    icon={<Code2 size={13} />}
                    text="Custom Build"
                  />

                  <ProjectTag
                    icon={<Globe2 size={13} />}
                    text="Production Ready"
                  />
                </div>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-5 border-t border-white/[0.08] pt-6 sm:grid-cols-4">
                <InfoItem
                  label="CLIENT"
                  value="Aether AI Solutions"
                />

                <InfoItem
                  label="STARTED"
                  value="August 2026"
                />

                <InfoItem
                  label="CURRENT PHASE"
                  value="AI Integration"
                />

                <InfoItem
                  label="TARGET"
                  value="Production Launch"
                />
              </div>
            </div>

            {/* Progress */}

            <div className="border-t border-white/[0.08] bg-black/20 p-6 lg:border-l lg:border-t-0">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/25">
                    Overall Progress
                  </p>

                  <p className="mt-2 text-5xl font-bold text-cyan-300">
                    75<span className="text-xl">%</span>
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.07]">
                  <Gauge
                    size={21}
                    className="text-cyan-300"
                  />
                </div>
              </div>

              <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-white/[0.07]">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "75%" }}
                  transition={{
                    duration: 1.1,
                    delay: 0.25,
                  }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-green-400"
                />
              </div>

              <div className="mt-3 flex justify-between text-[9px] uppercase tracking-[0.13em] text-white/20">
                <span>Start</span>
                <span>Launch</span>
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-xl border border-green-400/10 bg-green-400/[0.04] p-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-400/10">
                  <Zap
                    size={15}
                    className="text-green-400"
                  />
                </div>

                <div>
                  <p className="text-xs font-semibold text-green-300">
                    On Track
                  </p>

                  <p className="text-[9px] text-white/25">
                    Progressing as planned
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* =======================================================
            STATS
        ======================================================= */}

        <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            icon={<Target size={18} />}
            label="CURRENT PHASE"
            value="AI Integration"
            accent="cyan"
          />

          <StatCard
            icon={<FileText size={18} />}
            label="DELIVERABLES"
            value="3 / 4"
            accent="green"
          />

          <StatCard
            icon={<MessageSquare size={18} />}
            label="MESSAGES"
            value="2 New"
            accent="blue"
          />

          <StatCard
            icon={<Clock3 size={18} />}
            label="STATUS"
            value="On Schedule"
            accent="orange"
          />
        </div>

        {/* =======================================================
            ROADMAP
        ======================================================= */}

        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
          className="mt-5 rounded-[28px] border border-white/[0.09] bg-white/[0.025] p-6 sm:p-7"
        >
          <SectionHeading
            eyebrow="DEVELOPMENT PIPELINE"
            title="Project roadmap"
            description="Select a phase to inspect its current state."
          />

          <div className="mt-7 grid gap-3 lg:grid-cols-5">
            {phases.map((phase, index) => (
              <RoadmapPhase
                key={phase.number}
                phase={phase}
                index={index}
                selected={selectedPhase?.number === phase.number}
                onClick={() => setSelectedPhase(phase)}
              />
            ))}
          </div>

          {/* Phase Details */}

          <AnimatePresence mode="wait">
            {selectedPhase && (
              <motion.div
                key={selectedPhase.number}
                initial={{
                  opacity: 0,
                  height: 0,
                  y: -8,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                  y: -8,
                }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <div className="mt-4 rounded-2xl border border-cyan-400/[0.12] bg-cyan-400/[0.025] p-5 sm:p-6">
                  <div className="flex flex-col justify-between gap-5 sm:flex-row">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-cyan-300">
                          PHASE {selectedPhase.number}
                        </span>

                        <StatusBadge
                          status={selectedPhase.status}
                        />
                      </div>

                      <h3 className="mt-3 text-xl font-bold">
                        {selectedPhase.title}
                      </h3>

                      <p className="mt-2 text-xs text-white/35">
                        {selectedPhase.description}
                      </p>
                    </div>

                    <div className="sm:w-44">
                      <div className="flex justify-between text-[9px] uppercase tracking-[0.15em] text-white/25">
                        <span>Progress</span>

                        <span className="text-cyan-300">
                          {selectedPhase.progress}%
                        </span>
                      </div>

                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/[0.07]">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{
                            width: `${selectedPhase.progress}%`,
                          }}
                          transition={{
                            duration: 0.6,
                          }}
                          className="h-full rounded-full bg-cyan-400"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                    {selectedPhase.details.map((detail) => (
                      <div
                        key={detail}
                        className="flex items-center gap-2 rounded-xl border border-white/[0.06] bg-black/10 px-3 py-2.5"
                      >
                        <Check
                          size={13}
                          className={
                            selectedPhase.status === "completed"
                              ? "text-green-400"
                              : selectedPhase.status === "current"
                                ? "text-cyan-400"
                                : "text-white/20"
                          }
                        />

                        <span className="text-[10px] text-white/40">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>

        {/* =======================================================
            DELIVERABLES + WORKSPACE
        ======================================================= */}

        <div className="mt-5 grid gap-5 xl:grid-cols-[1.35fr_0.65fr]">
          <section className="rounded-[28px] border border-white/[0.09] bg-white/[0.025] p-6 sm:p-7">
            <SectionHeading
              eyebrow="DELIVERABLES"
              title="Project deliverables"
              description="Everything being prepared for your project."
            />

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {deliverables.map((item) => (
                <Deliverable
                  key={item.title}
                  item={item}
                />
              ))}
            </div>
          </section>

          <section className="rounded-[28px] border border-cyan-400/[0.12] bg-gradient-to-br from-cyan-400/[0.055] to-white/[0.015] p-6 sm:p-7">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.08]">
              <Sparkles
                size={19}
                className="text-cyan-300"
              />
            </div>

            <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.25em] text-cyan-300/70">
              AETHER WORKSPACE
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              Your project,
              <br />
              connected.
            </h2>

            <p className="mt-3 text-xs leading-6 text-white/35">
              Communicate with our team, review deliverables,
              exchange files and manage approvals from one secure
              workspace.
            </p>

            <div className="mt-6 space-y-2">
              <WorkspaceAction
                icon={<MessageSquare size={15} />}
                title="Open Messages"
              />

              <WorkspaceAction
                icon={<FolderOpen size={15} />}
                title="View Project Files"
              />

              <WorkspaceAction
                icon={<CheckCircle2 size={15} />}
                title="Review Approvals"
              />
            </div>
          </section>
        </div>

        {/* =======================================================
            TIMELINE
        ======================================================= */}

        <section className="mt-5 rounded-[28px] border border-white/[0.09] bg-white/[0.025] p-6 sm:p-7">
          <SectionHeading
            eyebrow="LIVE ACTIVITY"
            title="Project timeline"
            description="Recent updates from your Aether workspace."
          />

          <div className="relative mt-7">
            <div className="absolute bottom-4 left-[15px] top-4 w-px bg-gradient-to-b from-cyan-400/40 via-white/10 to-transparent" />

            <div className="space-y-6">
              {activities.map((activity, index) => (
                <ActivityItem
                  key={activity.title}
                  activity={activity}
                  active={index === 0}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}

        <footer className="mt-8 flex flex-col justify-between gap-3 border-t border-white/[0.07] py-6 text-[10px] text-white/20 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="font-semibold tracking-[0.15em] text-white/35">
              AETHER AI SOLUTIONS
            </span>

            <span>•</span>

            <span>Project {projectId}</span>
          </div>

          <div className="flex items-center gap-2">
            <ShieldCheck size={12} />
            Secure Client Workspace
          </div>
        </footer>
      </div>
    </main>
  );
}

/* =============================================================
   COMPONENTS
============================================================= */

function ProjectTag({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <span className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 text-[10px] font-medium text-white/45">
      <span className="text-cyan-300/70">{icon}</span>
      {text}
    </span>
  );
}

function InfoItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/20">
        {label}
      </p>

      <p className="mt-1.5 text-xs font-medium text-white/55">
        {value}
      </p>
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
  accent,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  accent: "cyan" | "green" | "blue" | "orange";
}) {
  const colors = {
    cyan: "text-cyan-300 bg-cyan-400/[0.07] border-cyan-400/10",
    green: "text-green-300 bg-green-400/[0.07] border-green-400/10",
    blue: "text-blue-300 bg-blue-400/[0.07] border-blue-400/10",
    orange:
      "text-orange-300 bg-orange-400/[0.07] border-orange-400/10",
  };

  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 transition hover:border-white/[0.15] hover:bg-white/[0.04]">
      <div className="flex items-center gap-3">
        <div
          className={`flex h-9 w-9 items-center justify-center rounded-xl border ${colors[accent]}`}
        >
          {icon}
        </div>

        <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/25">
          {label}
        </p>
      </div>

      <p className="mt-3 text-sm font-semibold text-white/80">
        {value}
      </p>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-cyan-400/70">
        {eyebrow}
      </p>

      <div className="mt-2 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
        <h2 className="text-2xl font-bold tracking-tight">
          {title}
        </h2>

        <p className="max-w-md text-xs leading-5 text-white/30">
          {description}
        </p>
      </div>
    </div>
  );
}

function StatusBadge({
  status,
}: {
  status: PhaseStatus;
}) {
  if (status === "completed") {
    return (
      <span className="rounded-full bg-green-400/10 px-2.5 py-1 text-[9px] font-semibold text-green-300">
        COMPLETED
      </span>
    );
  }

  if (status === "current") {
    return (
      <span className="rounded-full bg-cyan-400/10 px-2.5 py-1 text-[9px] font-semibold text-cyan-300">
        IN PROGRESS
      </span>
    );
  }

  return (
    <span className="rounded-full bg-white/[0.05] px-2.5 py-1 text-[9px] font-semibold text-white/25">
      UPCOMING
    </span>
  );
}

function RoadmapPhase({
  phase,
  index,
  selected,
  onClick,
}: {
  phase: Phase;
  index: number;
  selected: boolean;
  onClick: () => void;
}) {
  const completed = phase.status === "completed";
  const current = phase.status === "current";

  return (
    <div className="relative">
      {index < phases.length - 1 && (
        <div className="absolute left-[calc(100%+5px)] top-6 hidden h-px w-[calc(100%-10px)] bg-white/[0.08] lg:block" />
      )}

      <button
        type="button"
        onClick={onClick}
        className={`relative w-full rounded-2xl border p-4 text-left transition duration-300 ${
          selected
            ? "border-cyan-400/35 bg-cyan-400/[0.075] shadow-[0_0_30px_rgba(34,211,238,0.06)]"
            : current
              ? "border-cyan-400/20 bg-cyan-400/[0.04] hover:border-cyan-400/30"
              : completed
                ? "border-green-400/10 bg-green-400/[0.02] hover:border-green-400/20"
                : "border-white/[0.08] bg-black/10 hover:border-white/[0.16]"
        }`}
      >
        <div className="flex items-center justify-between">
          <span
            className={`font-mono text-[10px] ${
              current
                ? "text-cyan-300"
                : completed
                  ? "text-green-300"
                  : "text-white/20"
            }`}
          >
            {phase.number}
          </span>

          {completed ? (
            <CheckCircle2
              size={16}
              className="text-green-400"
            />
          ) : current ? (
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,1)]" />
          ) : (
            <Clock3
              size={15}
              className="text-white/20"
            />
          )}
        </div>

        <h3 className="mt-5 text-sm font-semibold">
          {phase.title}
        </h3>

        <p className="mt-2 text-[10px] leading-5 text-white/30">
          {phase.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <p
            className={`text-[9px] font-semibold uppercase tracking-[0.15em] ${
              current
                ? "text-cyan-300"
                : completed
                  ? "text-green-300/70"
                  : "text-white/20"
            }`}
          >
            {completed
              ? "Completed"
              : current
                ? "In Progress"
                : "Upcoming"}
          </p>

          <ChevronRight
            size={13}
            className={`transition ${
              selected
                ? "translate-x-0.5 text-cyan-300"
                : "text-white/15"
            }`}
          />
        </div>
      </button>
    </div>
  );
}

function Deliverable({
  item,
}: {
  item: (typeof deliverables)[number];
}) {
  const Icon = item.icon;

  const active = item.status === "In Progress";
  const approved = item.status === "Approved";

  return (
    <button
      type="button"
      className="group rounded-2xl border border-white/[0.08] bg-black/10 p-5 text-left transition hover:border-cyan-400/20 hover:bg-white/[0.03]"
    >
      <div className="flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035] text-cyan-300">
          <Icon size={18} />
        </div>

        <span
          className={`rounded-full px-2.5 py-1 text-[9px] font-semibold ${
            approved
              ? "bg-green-400/10 text-green-300"
              : active
                ? "bg-cyan-400/10 text-cyan-300"
                : "bg-white/[0.05] text-white/30"
          }`}
        >
          {item.status}
        </span>
      </div>

      <h3 className="mt-5 text-sm font-semibold">
        {item.title}
      </h3>

      <div className="mt-2 flex items-center justify-between">
        <span className="text-[10px] text-white/25">
          {item.type}
        </span>

        <ArrowUpRight
          size={15}
          className="text-white/20 transition group-hover:text-cyan-300"
        />
      </div>
    </button>
  );
}

function WorkspaceAction({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <button
      type="button"
      className="group flex w-full items-center justify-between rounded-xl border border-white/[0.07] bg-black/10 px-4 py-3 text-left transition hover:border-cyan-400/20 hover:bg-cyan-400/[0.04]"
    >
      <span className="flex items-center gap-3 text-xs text-white/50 group-hover:text-white/80">
        <span className="text-cyan-300/70">
          {icon}
        </span>

        {title}
      </span>

      <ChevronRight
        size={15}
        className="text-white/20 transition group-hover:translate-x-1 group-hover:text-cyan-300"
      />
    </button>
  );
}

function ActivityItem({
  activity,
  active,
}: {
  activity: (typeof activities)[number];
  active: boolean;
}) {
  const Icon = activity.icon;

  return (
    <div className="relative flex gap-5">
      <div
        className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border ${
          active
            ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
            : "border-white/10 bg-[#070a0e] text-white/30"
        }`}
      >
        <Icon size={14} />
      </div>

      <div className="flex-1 pb-1">
        <div className="flex flex-col justify-between gap-1 sm:flex-row">
          <h3 className="text-sm font-semibold">
            {activity.title}
          </h3>

          <span className="text-[10px] text-white/20">
            {activity.time}
          </span>
        </div>

        <p className="mt-1 text-xs leading-6 text-white/30">
          {activity.description}
        </p>
      </div>
    </div>
  );
}