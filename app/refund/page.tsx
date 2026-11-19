
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | Aether AI Solutions",
  description:
    "Refund, cancellation and payment policies for Aether AI Solutions, including B2B software engineering, enterprise AI, SaaS, AI agents and managed technology services.",
};

const milestones = [
  {
    percentage: "30%",
    title: "Project Initiation",
    description:
      "Product discovery, requirements analysis, architecture, planning and project kickoff.",
  },
  {
    percentage: "40%",
    title: "Core Development",
    description:
      "Product engineering, core features, AI integrations and milestone demonstration.",
  },
  {
    percentage: "30%",
    title: "Final Delivery",
    description:
      "Final acceptance, quality assurance and agreed production handover.",
  },
];

const billingModels = [
  {
    label: "PRODUCT ENGINEERING",
    title: "Milestone-Based",
    description:
      "Launchpad MVP, Scale Product, AI Transformation and Enterprise AI.",
  },
  {
    label: "AI AGENTS & AUTOMATION",
    title: "Setup + Monthly",
    description:
      "WhatsApp AI Agents, Instagram Lead Agents and Full Business Automation.",
  },
  {
    label: "AI CARE & OPTIMIZATION",
    title: "Monthly Billing",
    description:
      "Essential Care, Growth Care, and Scale & Reliability plans.",
  },
];

const sections = [
  {
    title: "1. Overview",
    content: [
      "Aether AI Solutions is an AI Product Engineering Studio providing end-to-end B2B software development, enterprise applications, SaaS platforms, artificial intelligence systems, intelligent agents, business automation and managed technology services.",
      "This Refund & Cancellation Policy explains our commercial approach to project payments, service cancellations, subscription billing and refund eligibility.",
      "Our objective is to maintain transparent and fair commercial relationships while protecting the professional engineering resources committed to each engagement.",
    ],
  },
  {
    title: "2. Scope of This Policy",
    content: [
      "This policy applies to services purchased directly from Aether AI Solutions, including custom product engineering, enterprise AI solutions, AI agent implementation, SaaS subscriptions, software maintenance, consulting and technical support.",
      "Products operated independently by our clients may have separate billing and refund policies. Payments made directly to third-party platforms are subject to their respective terms.",
    ],
  },
  {
    title: "3. Product Engineering Payment Structure",
    content: [
      "Our standard fixed-price product engineering engagements follow a milestone-based payment model.",
      "The standard payment schedule is 30% at project initiation, 40% following completion and review of the agreed core development milestone, and 30% following final acceptance and before the agreed production handover.",
      "This structure may apply to Launchpad MVP, Scale Product and other fixed-price development packages.",
      "AI Transformation, Enterprise AI, dedicated engineering engagements and complex projects may follow customized payment schedules defined in the applicable proposal, Statement of Work or service agreement.",
    ],
  },
  {
    title: "4. Project Initiation and Advance Payments",
    content: [
      "Advance payments allow us to allocate engineering resources, conduct product discovery, prepare technical architecture and commence agreed project activities.",
      "Project commencement may include requirements analysis, technical planning, research, design, prototyping, development or other agreed professional work.",
      "Advance payments are applied toward the total project value unless otherwise specified in the applicable agreement.",
    ],
  },
  {
    title: "5. Cancellation Before Project Commencement",
    content: [
      "If a client requests cancellation in writing before any agreed project work has commenced, the advance payment is eligible for a refund.",
      "Previously agreed, documented and non-recoverable third-party expenses may be deducted from the refundable amount.",
      "Refund eligibility remains subject to applicable legal requirements and the relevant client agreement.",
    ],
  },
  {
    title: "6. Cancellation After Project Commencement",
    content: [
      "Clients may request cancellation of an active project by providing written notice.",
      "Aether AI Solutions will assess the value of completed work, approved milestones, work in progress and authorized non-recoverable expenses up to the effective cancellation date.",
      "Any unused prepaid balance will be refunded where due under the applicable agreement and legal requirements.",
      "We will provide a reasonable explanation of the settlement calculation, including applicable deductions.",
    ],
  },
  {
    title: "7. Completed and Approved Milestones",
    content: [
      "Payments for completed and approved milestones are generally non-refundable because professional engineering services and agreed deliverables have already been provided.",
      "Milestone completion and acceptance will be assessed according to the agreed project scope and acceptance criteria.",
      "This provision does not restrict remedies available for material defects, contractual breaches or rights provided by applicable law.",
    ],
  },
  {
    title: "8. Undelivered Work and Service Issues",
    content: [
      "If a deliverable materially fails to meet the agreed project requirements, clients should notify us in writing with relevant details.",
      "We will review the reported issue and seek to provide an appropriate correction within a reasonable or contractually agreed period.",
      "Where the agreed work cannot be delivered or an appropriate correction cannot be provided, the client may be entitled to a partial or full refund for the affected work, depending on the applicable agreement and legal requirements.",
    ],
  },
  {
    title: "9. Project Delays and Scope Changes",
    content: [
      "Project timelines may be affected by additional requirements, delayed client approvals, unavailable resources, technical dependencies or third-party service changes.",
      "Such circumstances do not automatically qualify for a refund. Refund eligibility will depend on the reason for the delay and the responsibilities established in the applicable agreement.",
      "Changes outside the approved project scope may require additional fees and revised delivery schedules, subject to client approval.",
    ],
  },
  {
    title: "10. AI Agent Setup and Implementation Fees",
    content: [
      "AI agent services, including WhatsApp AI Agents, Instagram and Lead Agents, and Full Business Automation, may involve a one-time setup fee and recurring service charges.",
      "Setup fees may cover discovery, conversational design, workflow engineering, AI configuration, API integrations, testing and deployment.",
      "Completed setup work is generally non-refundable. Where implementation is cancelled before completion, unused prepaid amounts will be assessed after accounting for work performed and authorized non-recoverable expenses.",
      "Setup fees and recurring service fees will be identified separately in the applicable proposal or service agreement.",
    ],
  },
  {
    title: "11. Recurring AI Agent Services",
    content: [
      "Monthly AI agent service fees cover the hosting, monitoring, maintenance, automation and operational support specified in the selected plan.",
      "Clients may request cancellation by providing written notice at least 30 days before the next renewal date, unless otherwise agreed.",
      "The effective cancellation date and final billing amount will be determined according to the applicable service agreement.",
      "Fees for services already provided and authorized usage already consumed are generally non-refundable. Future recurring billing will cease following the effective cancellation date.",
    ],
  },
  {
    title: "12. Third-Party Platform Approvals",
    content: [
      "WhatsApp, Instagram, Meta and other third-party integrations may require business verification, account approval, API access, platform permissions and compliance with platform-specific requirements.",
      "Aether AI Solutions cannot guarantee third-party account approvals, uninterrupted platform access or the continued availability of external APIs.",
      "Clients are responsible for providing accurate business information and maintaining compliance with applicable platform requirements.",
      "If a third-party approval is rejected or access is restricted, refund eligibility will be assessed based on completed work, contractual responsibilities, the reason for the issue and recoverable expenses.",
    ],
  },
  {
    title: "13. SaaS and Subscription Services",
    content: [
      "Subscription-based products may be billed monthly or annually according to the selected plan and applicable product terms.",
      "Clients may cancel future renewals using the available cancellation method or by contacting our support team.",
      "Unless otherwise stated, cancellation takes effect at the end of the applicable paid billing period.",
      "Refunds for unused subscription periods are governed by the relevant product terms, service agreement and applicable legal requirements.",
      "Duplicate payments, incorrect charges and billing errors will be reviewed separately.",
    ],
  },
  {
    title: "14. AI Usage and Infrastructure Charges",
    content: [
      "AI-powered products and automation systems may involve usage-based charges for language models, voice agents, messaging services, cloud computing, databases and external APIs.",
      "Authorized usage already consumed is generally non-refundable, except where incorrect billing has occurred or a refund is required by law.",
      "Applicable usage limits, included allowances and additional charges will be specified in the relevant proposal, subscription plan or service agreement.",
    ],
  },
  {
    title: "15. Third-Party Expenses and Licenses",
    content: [
      "Domain registrations, cloud hosting, software licenses, API credits, messaging charges and other third-party expenses may be subject to the respective provider's refund policies.",
      "Authorized expenses that have already been incurred and cannot be recovered may be deducted from eligible refunds.",
      "Third-party costs will be communicated according to the applicable project or service agreement.",
    ],
  },
  {
    title: "16. Product Launch and Included Support",
    content: [
      "Product engineering packages may include post-launch technical support for the period specified in the applicable proposal.",
      "Launchpad MVP and Scale Product packages may include 30-day and 60-day support periods respectively, where specified in the agreed project scope.",
      "Included support covers agreed technical issues and does not automatically include new features, additional integrations or changes outside the original project scope.",
      "Included support periods are not separately refundable unless otherwise specified in the agreement or required by applicable law.",
    ],
  },
  {
    title: "17. AI Care and Optimization Plans",
    content: [
      "Essential Care, Growth Care, and Scale & Reliability plans may be billed monthly in advance.",
      "These services may include technical monitoring, software maintenance, performance optimization, security updates, AI system improvements and ongoing engineering support according to the selected plan.",
      "Clients may request cancellation with 30 days written notice, unless a different notice period is specified in the applicable agreement.",
      "Fees for services already performed are generally non-refundable. Unused prepaid amounts will be assessed according to the applicable cancellation provisions.",
    ],
  },
  {
    title: "18. Business Outcomes and AI Performance",
    content: [
      "Aether AI Solutions provides professional engineering and technology services but does not guarantee specific revenue, sales, lead conversions, marketing results, cost savings or business growth unless expressly agreed in writing.",
      "AI-generated responses and automated system performance may vary depending on input quality, model limitations, external services and operational conditions.",
      "Refund eligibility is based on agreed deliverables, contractual performance and applicable legal rights rather than business outcomes alone.",
      "This provision does not exclude responsibility for failure to deliver agreed services or meet expressly contracted performance requirements.",
    ],
  },
  {
    title: "19. Cancellation by Aether AI Solutions",
    content: [
      "If Aether AI Solutions is unable to continue an engagement, we will notify the client and arrange an appropriate settlement in accordance with the applicable agreement.",
      "Where payments have been received for work that has not been performed, eligible unused amounts will be refunded.",
      "Any applicable handover, transition assistance or termination obligations will be handled according to the relevant agreement.",
    ],
  },
  {
    title: "20. Project Assets, Source Code and Handover",
    content: [
      "Following project completion or cancellation, access to source code, design assets, documentation, databases and other deliverables will be handled according to the applicable intellectual property, licensing and payment provisions of the client agreement.",
      "Ownership of custom-developed software and rights to reusable components will be determined by the agreed commercial contract.",
      "Third-party software, libraries and infrastructure remain subject to their respective licensing and service terms.",
      "Client-owned data will be handled in accordance with applicable contractual and data protection obligations.",
    ],
  },
  {
    title: "21. Refund Processing",
    content: [
      "Approved refunds will normally be initiated within 7 to 10 business days following approval and completion of any required verification.",
      "Refunds will generally be returned through the original payment method where possible, or through another mutually agreed lawful payment method.",
      "Additional settlement time may depend on banks, payment gateways and financial service providers.",
      "Where applicable law requires a shorter refund period, the applicable legal requirement will take precedence.",
    ],
  },
  {
    title: "22. Billing Disputes and Incorrect Charges",
    content: [
      "Clients are encouraged to contact us regarding incorrect invoices, duplicate payments, unauthorized charges or other billing concerns.",
      "We will review the relevant transaction details and seek to resolve legitimate billing issues.",
      "Nothing in this policy restricts lawful payment dispute rights, statutory remedies or other applicable dispute resolution procedures.",
    ],
  },
  {
    title: "23. Enterprise Agreements and Contractual Priority",
    content: [
      "Enterprise software development, AI transformation, dedicated engineering and long-term managed services may be governed by separate Master Service Agreements, Statements of Work, Service Level Agreements or subscription contracts.",
      "Where a signed agreement contains specific payment, cancellation, termination or refund provisions, those provisions will govern the relevant engagement.",
      "All contractual provisions remain subject to mandatory applicable law.",
    ],
  },
  {
    title: "24. Applicable Law and Policy Updates",
    content: [
      "This policy is subject to applicable laws of India and any mandatory legal requirements applicable to the relevant transaction.",
      "Nothing in this policy excludes statutory rights, remedies or liabilities that cannot lawfully be excluded.",
      "We may update this policy to reflect changes in our services, commercial practices, technology or legal requirements.",
      "Updated policies will be published on this page. Existing signed agreements remain subject to their applicable amendment provisions.",
    ],
  },
];

export default function RefundPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] px-5 pb-24 pt-32 text-white md:px-8">

      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[140px]" />

        <div className="absolute -right-40 top-40 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-5xl">

        {/* Header */}
        <header className="mb-14">

          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-amber-400"
          >
            ← Back to Home
          </Link>

          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-amber-400 md:text-sm">
            Aether AI Solutions / Legal
          </p>

          <h1 className="mb-5 text-4xl font-bold tracking-tight md:text-6xl">
            Refund &amp; Cancellation Policy
          </h1>

          <p className="mb-3 text-lg text-slate-300">
            Transparent Payments. Professional Commitments.
          </p>

          <p className="text-sm text-slate-400">
            Last updated: November 19, 2026
          </p>

          <div className="mt-8 h-px bg-gradient-to-r from-amber-400/50 via-white/10 to-transparent" />

          <p className="mt-8 max-w-3xl text-base leading-7 text-slate-300">
            As an AI Product Engineering Studio, we are
            committed to transparent commercial relationships,
            responsible product delivery and fair treatment
            of our clients across custom software, enterprise
            AI, automation and managed technology services.
          </p>

        </header>

        {/* Business Billing Models */}
        <section className="mb-14">

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
            Commercial Framework
          </p>

          <h2 className="mb-6 text-2xl font-semibold md:text-3xl">
            Our Billing Models
          </h2>

          <div className="grid gap-5 md:grid-cols-3">

            {billingModels.map((model) => (
              <article
                key={model.label}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-amber-400/30"
              >
                <p className="mb-4 text-[10px] font-semibold tracking-[0.15em] text-amber-400">
                  {model.label}
                </p>

                <h3 className="mb-3 text-xl font-bold">
                  {model.title}
                </h3>

                <p className="text-sm leading-6 text-slate-400">
                  {model.description}
                </p>

              </article>
            ))}

          </div>

        </section>

        {/* Payment Milestones */}
        <section className="mb-14">

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
            Product Engineering
          </p>

          <h2 className="mb-3 text-2xl font-semibold md:text-3xl">
            Standard Payment Milestones
          </h2>

          <p className="mb-7 max-w-3xl text-sm leading-7 text-slate-400">
            Our standard fixed-price software development
            projects follow a structured milestone-based
            payment model.
          </p>

          <div className="grid gap-5 md:grid-cols-3">

            {milestones.map((milestone) => (
              <article
                key={milestone.title}
                className="rounded-2xl border border-amber-400/20 bg-amber-400/[0.04] p-6 transition-colors hover:border-amber-400/40"
              >
                <p className="mb-4 text-4xl font-bold text-amber-400">
                  {milestone.percentage}
                </p>

                <h3 className="mb-3 text-lg font-semibold">
                  {milestone.title}
                </h3>

                <p className="text-sm leading-6 text-slate-400">
                  {milestone.description}
                </p>

              </article>
            ))}

          </div>

          <p className="mt-5 text-sm leading-6 text-slate-400">
            Customized payment schedules may apply to
            enterprise projects, dedicated engineering
            engagements and individual service agreements.
          </p>

        </section>

        {/* Table of Contents */}
        <nav
          aria-label="Refund policy contents"
          className="mb-12 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8"
        >
          <h2 className="mb-6 text-lg font-semibold">
            Table of Contents
          </h2>

          <div className="grid gap-3 md:grid-cols-2">

            {sections.map((section, index) => (
              <a
                key={section.title}
                href={`#section-${index + 1}`}
                className="text-sm leading-relaxed text-slate-400 transition hover:text-amber-400"
              >
                {section.title}
              </a>
            ))}

            <a
              href="#refund-request"
              className="text-sm leading-relaxed text-slate-400 transition hover:text-amber-400"
            >
              25. Request a Refund or Cancellation
            </a>

          </div>

        </nav>

        {/* Policy Sections */}
        <div className="space-y-6">

          {sections.map((section, index) => (
            <section
              key={section.title}
              id={`section-${index + 1}`}
              className="scroll-mt-28 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/20 md:p-8"
            >
              <h2 className="mb-5 text-xl font-semibold tracking-tight text-white md:text-2xl">
                {section.title}
              </h2>

              <div className="space-y-4">

                {section.content.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-sm leading-7 text-slate-300 md:text-base"
                  >
                    {paragraph}
                  </p>
                ))}

              </div>

            </section>
          ))}

          {/* Refund Request */}
          <section
            id="refund-request"
            className="scroll-mt-28 rounded-2xl border border-amber-400/20 bg-amber-400/[0.04] p-6 md:p-8"
          >

            <h2 className="mb-5 text-xl font-semibold md:text-2xl">
              25. Request a Refund or Cancellation
            </h2>

            <p className="mb-6 leading-7 text-slate-300">
              To request a refund, cancellation or billing
              review, please contact us with the following
              information:
            </p>

            <ul className="mb-8 space-y-3">

              {[
                "Your name and company name.",
                "Project name or agreement reference.",
                "Invoice number and payment date.",
                "Payment amount and transaction reference.",
                "Reason for the refund or cancellation.",
                "Relevant supporting information, if applicable.",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-7 text-slate-300 md:text-base"
                >
                  <span
                    aria-hidden="true"
                    className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400"
                  />

                  <span>{item}</span>
                </li>
              ))}

            </ul>

            <p className="mb-6 text-sm leading-7 text-slate-400">
              Please do not include passwords, complete
              payment card details, private API keys or
              other sensitive credentials in your request.
            </p>

            <div className="space-y-3 text-sm text-slate-300 md:text-base">

              <p className="text-lg font-semibold text-white">
                Aether AI Solutions
              </p>

              <p>AI Product Engineering Studio</p>

              <p>India</p>

              <p>
                Email:{" "}
                <a
                  href="mailto:hello@aetheraisolutions.in"
                  className="break-all text-amber-400 hover:underline"
                >
                  hello@aetheraisolutions.in
                </a>
              </p>

              <p>
                Website:{" "}
                <Link
                  href="/"
                  className="text-amber-400 hover:underline"
                >
                  aetheraisolutions.in
                </Link>
              </p>

              <p>
                Email subject: Refund / Cancellation Request
              </p>

            </div>

            <a
              href="mailto:hello@aetheraisolutions.in?subject=Refund%20%2F%20Cancellation%20Request"
              className="mt-8 inline-flex items-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-amber-300"
            >
              Contact Billing Team →
            </a>

          </section>

        </div>

        {/* Legal Navigation */}
        <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-white/10 pt-8 text-sm">

          <Link
            href="/"
            className="inline-flex rounded-full border border-white/20 px-6 py-3 transition hover:border-amber-400/50 hover:text-amber-400"
          >
            ← Back to Home
          </Link>

          <Link
            href="/privacy"
            className="text-slate-400 transition hover:text-amber-400"
          >
            Privacy Policy
          </Link>

          <Link
            href="/terms"
            className="text-slate-400 transition hover:text-amber-400"
          >
            Terms &amp; Conditions
          </Link>

        </div>

        <p className="mt-10 text-xs text-slate-500">
          © {new Date().getFullYear()} Aether AI Solutions.
          All rights reserved.
        </p>

      </div>

    </main>
  );
}
