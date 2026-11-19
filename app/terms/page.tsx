
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | Aether AI Solutions",
  description:
    "Terms governing the use of Aether AI Solutions websites, software products, AI services and business solutions.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    content:
      "These Terms & Conditions govern your access to and use of the Aether AI Solutions website, digital products and services. By accessing our website or engaging our services, you agree to the applicable terms. Separate signed agreements may govern individual client projects.",
  },
  {
    title: "2. Our Services",
    content:
      "Aether AI Solutions provides custom software development, B2B software products, SaaS platforms, artificial intelligence solutions, AI agents, business process automation, web applications, data analytics, API integrations and digital engineering services. Service availability, features and deliverables depend on the agreed project scope.",
  },
  {
    title: "3. Project Agreements and Scope",
    content:
      "Project requirements, deliverables, timelines, pricing, technical specifications and responsibilities will be defined in an approved proposal, statement of work or service agreement. Changes outside the agreed scope may require additional fees and revised delivery schedules.",
  },
  {
    title: "4. Pricing and Payments",
    content:
      "Prices displayed on our website are indicative starting prices unless expressly stated otherwise. Final pricing depends on project complexity, integrations, infrastructure and business requirements. Payment milestones, applicable taxes, subscription charges and third-party costs will be specified in the relevant agreement.",
  },
  {
    title: "5. Intellectual Property Rights",
    content:
      "Ownership and licensing of custom-developed software, source code, designs and project deliverables will be determined by the applicable client agreement. Aether AI Solutions retains ownership of its pre-existing intellectual property, reusable components, proprietary frameworks, internal tools and independently developed products. Third-party software remains subject to its respective licensing terms.",
  },
  {
    title: "6. SaaS Products and Software Licensing",
    content:
      "Access to subscription-based software and hosted products is subject to the applicable subscription or licensing agreement. Unless expressly authorized, users may not unlawfully reproduce, redistribute, resell or interfere with our proprietary software or services.",
  },
  {
    title: "7. Artificial Intelligence Services",
    content:
      "Our AI-powered products and assistants may use third-party artificial intelligence models and automated systems. AI-generated outputs may contain inaccuracies or incomplete information. Users are responsible for reviewing outputs before relying on them for important business decisions. We do not guarantee that AI-generated content will always be accurate, complete or suitable for a particular purpose.",
  },
  {
    title: "8. Third-Party Services and Integrations",
    content:
      "Our solutions may integrate with external cloud infrastructure, databases, payment providers, APIs, AI models and other third-party platforms. These services may have separate terms, pricing, availability and privacy policies. We are not responsible for disruptions or changes outside our reasonable control, subject to our contractual obligations.",
  },
  {
    title: "9. Client Responsibilities",
    content:
      "Clients are responsible for providing accurate project requirements, timely approvals, necessary access permissions and legally authorized materials. Clients must ensure that their use of delivered software complies with applicable laws and third-party rights.",
  },
  {
    title: "10. Confidentiality and Data Protection",
    content:
      "Confidential business information exchanged during client engagements will be handled in accordance with applicable confidentiality obligations, project agreements and our Privacy Policy. Additional data protection requirements may be established through separate agreements where necessary.",
  },
  {
    title: "11. Acceptable Use",
    content:
      "Users must not use our website, software or services for unlawful activities, unauthorized system access, malicious code distribution, fraud, harassment, intellectual property infringement or activities that compromise the security or availability of our systems.",
  },
  {
    title: "12. Maintenance and Technical Support",
    content:
      "Maintenance, hosting, technical support, updates, security patches and ongoing development are provided according to the applicable service agreement. Unless expressly included in the agreed project scope, ongoing support and additional enhancements may require separate arrangements.",
  },
  {
    title: "13. Cancellation and Refunds",
    content:
      "Project cancellations, subscription cancellations and refund eligibility will be governed by the applicable project agreement, subscription terms and mandatory legal requirements. Completed work, committed resources and third-party expenses may be considered when determining amounts payable or refundable.",
  },
  {
    title: "14. Service Availability",
    content:
      "We aim to provide reliable digital services but do not guarantee uninterrupted availability unless expressly agreed under a service-level agreement. Services may be affected by maintenance, infrastructure failures, third-party dependencies or circumstances beyond our reasonable control.",
  },
  {
    title: "15. Limitation of Liability",
    content:
      "To the extent permitted by applicable law, Aether AI Solutions shall not be liable for indirect or consequential losses arising from the use of our website or services. Liability relating to specific client engagements will be governed by the applicable agreement. Nothing in these terms excludes liability that cannot lawfully be excluded.",
  },
  {
    title: "16. Suspension and Termination",
    content:
      "Access to services may be suspended or terminated in accordance with applicable agreements or where necessary to address unlawful activity, material contractual breaches or security risks. Applicable notice requirements and legal rights will be respected.",
  },
  {
    title: "17. Governing Law",
    content:
      "These website terms are governed by the applicable laws of India. Dispute resolution and jurisdiction for specific commercial engagements may be defined in the relevant client agreement, subject to mandatory legal requirements.",
  },
  {
    title: "18. Changes to These Terms",
    content:
      "We may update these website terms to reflect changes in our services, technology, business operations or legal requirements. Updated terms will be published on this page. Changes to existing signed client agreements will be governed by those agreements.",
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#07152f] text-white">
      <section className="mx-auto max-w-5xl px-6 py-24 md:px-10 md:py-32">

        <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-yellow-400">
          Aether AI Solutions / Legal
        </p>

        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          Terms &amp; Conditions
        </h1>

        <p className="mt-4 text-sm text-slate-400">
          Last updated: November 19, 2026
        </p>

        <p className="mt-8 leading-relaxed text-slate-300">
          Welcome to Aether AI Solutions. These terms
          outline the conditions governing our website,
          software products, artificial intelligence
          solutions and professional technology services.
        </p>

        <div className="mt-12 space-y-6">
          {sections.map((section) => (
            <article
              key={section.title}
              className="rounded-2xl border border-white/15 bg-white/[0.05] p-6 backdrop-blur-xl md:p-8"
            >
              <h2 className="mb-4 text-xl font-semibold text-white">
                {section.title}
              </h2>

              <p className="leading-relaxed text-slate-300">
                {section.content}
              </p>
            </article>
          ))}

          <article className="rounded-2xl border border-white/15 bg-white/[0.05] p-6 md:p-8">
            <h2 className="mb-4 text-xl font-semibold">
              19. Contact Information
            </h2>

            <p className="leading-relaxed text-slate-300">
              For questions regarding these terms,
              commercial agreements or our services,
              please contact Aether AI Solutions.
            </p>

            <a
              href="mailto:hello@aetheraisolutions.in"
              className="mt-4 inline-block break-all text-yellow-400 hover:underline"
            >
              hello@aetheraisolutions.in
            </a>
          </article>
        </div>

        <div className="mt-12 flex flex-wrap gap-6 border-t border-white/10 pt-8 text-sm">
          <Link
            href="/"
            className="text-yellow-400 hover:underline"
          >
            ← Back to Home
          </Link>

          <Link
            href="/privacy"
            className="text-slate-300 hover:text-white"
          >
            Privacy Policy
          </Link>
        </div>

        <p className="mt-10 text-xs text-slate-500">
          © {new Date().getFullYear()} Aether AI Solutions.
          All rights reserved.
        </p>

      </section>
    </main>
  );
}
