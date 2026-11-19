
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | Aether AI Solutions",
  description:
    "Payment, refund and cancellation policies for Aether AI Solutions, including enterprise software, AI products, SaaS and custom development services.",
};

const milestones = [
  {
    percentage: "30%",
    title: "Project Initiation",
    description:
      "Discovery, requirements, architecture, planning and project kickoff.",
  },
  {
    percentage: "40%",
    title: "Core Development",
    description:
      "Product engineering, integrations and demonstration of agreed core features.",
  },
  {
    percentage: "30%",
    title: "Final Delivery",
    description:
      "Final acceptance, quality assurance and payment before agreed production handover.",
  },
];

const sections = [
  {
    title: "1. Overview",
    content:
      "Aether AI Solutions is an AI Product Engineering Studio providing custom software development, enterprise applications, SaaS platforms, AI agents, automation systems and professional technology services. This policy explains our approach to payments, refunds and cancellations.",
  },
  {
    title: "2. Project Payment Structure",
    content:
      "Our standard fixed-price development projects follow a milestone-based payment model of 30% at project initiation, 40% upon completion and review of the agreed core development milestone, and 30% following final acceptance and before agreed production handover. Enterprise projects, dedicated engineering engagements and smaller assignments may follow customized payment schedules defined in the applicable proposal or service agreement.",
  },
  {
    title: "3. Cancellation Before Project Commencement",
    content:
      "If a client requests cancellation in writing before any project work has commenced, the advance payment is eligible for a refund, less any previously agreed and documented non-recoverable third-party expenses. Project commencement may include discovery, requirement analysis, architecture planning, design, development or other agreed professional work.",
  },
  {
    title: "4. Cancellation After Project Commencement",
    content:
      "Clients may request cancellation of an active project by providing written notice. Aether AI Solutions will calculate the value of work completed, approved milestones and authorized non-recoverable expenses up to the effective cancellation date. Any unused payment balance will be considered for refund in accordance with the applicable agreement.",
  },
  {
    title: "5. Completed and Approved Milestones",
    content:
      "Payments for completed and approved milestones are generally non-refundable because professional engineering services and agreed deliverables have already been provided. This does not limit remedies available for material defects, contractual breaches or rights provided by applicable law.",
  },
  {
    title: "6. Undelivered Work and Service Issues",
    content:
      "If a deliverable materially fails to meet the agreed project requirements, clients should notify us in writing. We will review the issue and seek to provide an appropriate correction within a reasonable or contractually agreed period. Where the agreed work cannot be delivered, an appropriate partial or full refund for the affected undelivered work may be provided.",
  },
  {
    title: "7. Project Delays and Scope Changes",
    content:
      "Project timelines may be affected by additional requirements, delayed approvals, unavailable client resources or third-party dependencies. Such circumstances do not automatically qualify for a refund. Changes to the agreed scope may require revised pricing and timelines, subject to client approval.",
  },
  {
    title: "8. SaaS and Subscription Services",
    content:
      "Subscription-based products may be billed monthly or annually according to the selected plan. Clients may cancel future renewals in accordance with the applicable subscription terms. Unless otherwise stated, cancellation takes effect at the end of the current paid billing period. Refunds for unused subscription periods are governed by the applicable product terms and legal requirements.",
  },
  {
    title: "9. AI Services and Usage-Based Charges",
    content:
      "AI-powered solutions may involve usage-based costs for language models, voice services, messaging platforms, automated workflows and external APIs. Charges for authorized usage already consumed are generally non-refundable, except where required by law or where incorrect billing has occurred.",
  },
  {
    title: "10. Third-Party Expenses",
    content:
      "Domain registrations, cloud hosting, software licenses, API credits, payment processing fees and other third-party expenses may be subject to the respective provider's refund policies. Authorized expenses that have already been incurred and cannot be recovered may be deducted from eligible refunds.",
  },
  {
    title: "11. Maintenance and Support Services",
    content:
      "Maintenance contracts, technical support, dedicated engineering retainers and ongoing product development services are governed by their respective agreements. Fees for services already provided are generally non-refundable. Unused prepaid amounts will be handled according to the agreed cancellation and notice provisions.",
  },
  {
    title: "12. Cancellation by Aether AI Solutions",
    content:
      "If Aether AI Solutions is unable to continue an engagement, we will notify the client and arrange an appropriate settlement in accordance with the applicable agreement. Where payments have been received for work that has not been performed, eligible unused amounts will be refunded.",
  },
  {
    title: "13. Project Assets and Handover",
    content:
      "Following cancellation or completion, access to source code, design assets, documentation and other deliverables will be handled according to the applicable intellectual property, licensing and payment provisions of the client agreement. Third-party software remains subject to its respective licensing terms.",
  },
  {
    title: "14. Refund Processing",
    content:
      "Approved refunds will normally be initiated within 7 to 10 business days following approval and completion of any required verification. Refunds will generally be returned through the original payment method where possible. Additional processing time may depend on banks and payment service providers.",
  },
  {
    title: "15. Billing Disputes",
    content:
      "Clients are encouraged to contact us regarding incorrect invoices, duplicate payments or other billing concerns so that we can investigate and resolve the issue. Nothing in this policy restricts any lawful dispute resolution or payment dispute rights.",
  },
  {
    title: "16. Enterprise Agreements",
    content:
      "Where a signed Master Service Agreement, Statement of Work, subscription agreement or other commercial contract contains specific payment, cancellation or refund provisions, those provisions will govern the relevant engagement, subject to mandatory applicable law.",
  },
  {
    title: "17. Applicable Law",
    content:
      "This policy is subject to applicable laws of India and any mandatory legal requirements applicable to the relevant transaction. Nothing in this policy excludes statutory rights or remedies that cannot lawfully be excluded.",
  },
  {
    title: "18. Policy Updates",
    content:
      "We may update this policy to reflect changes in our services, business operations or legal requirements. Updated policies will be published on this page. Existing signed agreements remain subject to their applicable amendment provisions.",
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
        <header className="mb-12">

          <Link
            href="/"
            className="mb-8 inline-flex text-sm text-slate-400 transition hover:text-amber-400"
          >
            ← Back to Home
          </Link>

          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            Aether AI Solutions / Legal
          </p>

          <h1 className="mb-5 text-4xl font-bold tracking-tight md:text-6xl">
            Refund &amp; Cancellation Policy
          </h1>

          <p className="text-lg text-slate-300">
            Transparent Payments. Professional Commitments.
          </p>

          <p className="mt-4 text-sm text-slate-400">
            Last updated: November 19, 2026
          </p>

          <div className="mt-8 h-px bg-gradient-to-r from-amber-400/50 via-white/10 to-transparent" />

          <p className="mt-8 max-w-3xl leading-7 text-slate-300">
            Our payment and cancellation policies are designed
            to support transparent commercial relationships,
            responsible project delivery and fair treatment
            of our clients.
          </p>

        </header>

        {/* Payment Milestones */}
        <section className="mb-12">

          <h2 className="mb-6 text-2xl font-semibold">
            Standard Payment Milestones
          </h2>

          <div className="grid gap-5 md:grid-cols-3">

            {milestones.map((milestone) => (
              <article
                key={milestone.title}
                className="rounded-2xl border border-amber-400/20 bg-amber-400/[0.04] p-6"
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

          <p className="mt-5 text-sm text-slate-400">
            Customized payment schedules may apply to
            individual projects and enterprise agreements.
          </p>

        </section>

        {/* Policy Sections */}
        <div className="space-y-6">

          {sections.map((section) => (
            <section
              key={section.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/20 md:p-8"
            >
              <h2 className="mb-4 text-xl font-semibold md:text-2xl">
                {section.title}
              </h2>

              <p className="text-sm leading-7 text-slate-300 md:text-base">
                {section.content}
              </p>
            </section>
          ))}

          {/* Refund Request */}
          <section className="rounded-2xl border border-amber-400/20 bg-amber-400/[0.04] p-6 md:p-8">

            <h2 className="mb-5 text-xl font-semibold md:text-2xl">
              19. Request a Refund or Cancellation
            </h2>

            <p className="mb-5 leading-7 text-slate-300">
              To request a refund, cancellation or billing
              review, please contact us with the following
              information:
            </p>

            <ul className="mb-6 list-disc space-y-3 pl-5 text-slate-300">
              <li>Your name and company name.</li>
              <li>Project name or agreement reference.</li>
              <li>Invoice number and payment date.</li>
              <li>Payment amount and transaction reference.</li>
              <li>Reason for the refund or cancellation.</li>
            </ul>

            <p className="font-semibold text-white">
              Aether AI Solutions
            </p>

            <p className="mt-2 text-slate-400">
              AI Product Engineering Studio
            </p>

            <a
              href="mailto:hello@aetheraisolutions.in"
              className="mt-4 inline-block break-all text-amber-400 hover:underline"
            >
              hello@aetheraisolutions.in
            </a>

            <div className="mt-8">

              <a
                href="mailto:hello@aetheraisolutions.in?subject=Refund%20or%20Cancellation%20Request"
                className="inline-flex rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-amber-300"
              >
                Contact Billing Team →
              </a>

            </div>

          </section>

        </div>

        {/* Legal Navigation */}
        <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-white/10 pt-8 text-sm">

          <Link
            href="/"
            className="text-amber-400 hover:underline"
          >
            ← Back to Home
          </Link>

          <Link
            href="/privacy"
            className="text-slate-400 hover:text-white"
          >
            Privacy Policy
          </Link>

          <Link
            href="/terms"
            className="text-slate-400 hover:text-white"
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
