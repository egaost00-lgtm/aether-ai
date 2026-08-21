import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

export default function NetworkSecurityAssessmentPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden pt-36 pb-24">
        <div className="pointer-events-none absolute left-1/2 top-20 h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-yellow-400/10 blur-[150px]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <Link
            href="/portfolio"
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-gray-300 transition hover:border-yellow-400/40 hover:text-yellow-400"
          >
            ← Back to Portfolio
          </Link>

          <div className="mt-12 max-w-5xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-yellow-400">
              Cybersecurity • Network Assessment
            </p>

            <h1 className="mt-6 text-5xl font-black tracking-tight sm:text-6xl lg:text-8xl">
              Network Security
              <span className="block text-yellow-400">
                Assessment.
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400 sm:text-xl">
              An end-to-end network security assessment performed in an
              authorized local test environment, covering reconnaissance,
              service enumeration, traffic analysis, security findings, and
              remediation recommendations.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://github.com/egaost00-lgtm/network-security-assessment"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-yellow-400 px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-yellow-300"
              >
                View GitHub ↗
              </a>

              <Link
                href="/portfolio"
                className="rounded-full border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white transition hover:border-yellow-400/40 hover:text-yellow-400"
              >
                All Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT SNAPSHOT */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-4 md:grid-cols-4">
          {[
            ["Environment", "Authorized Lab"],
            ["Assessment", "Network Security"],
            ["Primary Tools", "Nmap + Wireshark"],
            ["Deliverables", "Technical Report"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-3xl border border-white/10 bg-white/[0.035] p-6"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                {label}
              </p>
              <p className="mt-3 text-lg font-semibold">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
              01 • Project Overview
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Understanding the network before securing it.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              The assessment focused on identifying network exposure,
              discovering available services, analyzing listening services,
              reviewing UDP exposure, and examining captured network traffic.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-400">
              The work was performed within a controlled and authorized
              environment for security assessment and learning purposes.
            </p>
          </div>

          <div className="rounded-[32px] border border-yellow-400/20 bg-yellow-400/[0.04] p-8">
            <p className="text-sm uppercase tracking-[0.25em] text-yellow-400">
              Scope
            </p>

            <p className="mt-5 text-2xl font-bold">
              Controlled local test environment
            </p>

            <p className="mt-4 leading-7 text-gray-400">
              The assessment was limited to an authorized environment. No
              unauthorized external systems were targeted.
            </p>
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="border-y border-white/10 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
            02 • Methodology
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-black sm:text-5xl">
            A structured security assessment workflow.
          </h2>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {[
              ["01", "Reconnaissance", "Identify hosts and network exposure."],
              ["02", "Enumeration", "Identify ports and available services."],
              ["03", "UDP Analysis", "Review UDP services and exposure."],
              ["04", "Traffic Analysis", "Inspect captured network traffic."],
              ["05", "Reporting", "Document findings and recommendations."],
            ].map(([number, title, description]) => (
              <div
                key={number}
                className="rounded-3xl border border-white/10 bg-white/[0.035] p-6"
              >
                <span className="text-sm font-bold text-yellow-400">
                  {number}
                </span>

                <h3 className="mt-5 text-xl font-bold">{title}</h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
          03 • Technology & Tools
        </p>

        <h2 className="mt-4 text-4xl font-black sm:text-5xl">
          Security tools used in the assessment.
        </h2>

        <div className="mt-10 flex flex-wrap gap-3">
          {[
            "Kali Linux",
            "Nmap",
            "Wireshark",
            "Linux",
            "TCP/IP",
            "Network Security",
          ].map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-gray-300"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>

      {/* ASSESSMENT AREAS */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
          04 • Assessment Areas
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {[
            {
              title: "Network Discovery",
              text: "Reconnaissance and discovery activities were used to establish the network environment and identify accessible systems.",
            },
            {
              title: "Port & Service Enumeration",
              text: "Nmap-based enumeration was used to identify exposed ports and services within the authorized target environment.",
            },
            {
              title: "UDP Service Analysis",
              text: "UDP scanning and supporting evidence were reviewed to identify listening or exposed UDP services.",
            },
            {
              title: "Listening Services",
              text: "Listening-service information was reviewed as part of understanding the system's network attack surface.",
            },
            {
              title: "Traffic Analysis",
              text: "Wireshark was used to capture and inspect network traffic for protocol-level observations.",
            },
            {
              title: "Security Documentation",
              text: "Assessment evidence was organized into findings and a technical report with practical recommendations.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[28px] border border-white/10 bg-white/[0.035] p-7 transition hover:border-yellow-400/30"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-yellow-400/10 text-yellow-400">
                  ✦
                </div>

                <div>
                  <h3 className="text-xl font-bold">{item.title}</h3>

                  <p className="mt-3 leading-7 text-gray-400">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINDINGS */}
      <section className="border-y border-white/10 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
            05 • Findings & Reporting
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-black sm:text-5xl">
            Evidence-driven security documentation.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            The assessment produced structured technical evidence and
            documentation covering discovery results, service enumeration,
            listening services, UDP results, traffic capture, and security
            findings.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Nmap discovery results",
              "Nmap service results",
              "UDP assessment results",
              "Listening service evidence",
              "Wireshark capture",
              "Findings register",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-5 text-gray-300"
              >
                <span className="mr-2 text-yellow-400">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
          06 • Deliverables
        </p>

        <h2 className="mt-4 text-4xl font-black sm:text-5xl">
          Complete assessment documentation.
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Network discovery evidence",
            "Service enumeration results",
            "UDP service results",
            "Listening service analysis",
            "Wireshark packet capture",
            "Security findings register",
            "Technical assessment report",
          ].map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-white/10 bg-white/[0.035] p-6"
            >
              <div className="text-2xl text-yellow-400">◈</div>
              <p className="mt-5 font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GITHUB */}
      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="overflow-hidden rounded-[36px] border border-yellow-400/20 bg-yellow-400/[0.04] p-8 sm:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
                Technical Repository
              </p>

              <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                Explore the complete assessment.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
                The complete project repository contains the assessment
                evidence, findings register, technical report, scan results,
                and Wireshark capture.
              </p>
            </div>

            <a
              href="https://github.com/egaost00-lgtm/network-security-assessment"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-yellow-400 px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-yellow-300"
            >
              Open GitHub Repository ↗
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 px-6 py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
            Aether AI Solutions
          </p>

          <h2 className="mt-5 text-4xl font-black sm:text-6xl">
            Build secure.
            <span className="text-yellow-400"> Build intelligent.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Explore how Aether AI Solutions approaches modern technology,
            cybersecurity, automation, and intelligent digital products.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-full bg-yellow-400 px-9 py-4 font-semibold text-black transition hover:scale-105 hover:bg-yellow-300"
          >
            Start a Project →
          </Link>
        </div>
      </section>
    </main>
  );
}