
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Aether AI Solutions",
  description:
    "Privacy Policy of Aether AI Solutions, covering AI product engineering, enterprise software, SaaS, automation and personal data protection.",
};

const sections = [
  {
    title: "1. Introduction",
    content: [
      "Aether AI Solutions (\"Aether AI\", \"we\", \"our\" or \"us\") is an AI Product Engineering Studio based in India.",
      "We design, develop, integrate, deploy and support artificial intelligence systems, enterprise software, SaaS platforms, digital products, intelligent agents, business automation and data intelligence solutions.",
      "This Privacy Policy explains how personal information is collected, used, processed, stored and disclosed when you interact with our website, products or services.",
    ],
  },
  {
    title: "2. Scope of This Policy",
    content: [
      "This policy applies to aetheraisolutions.in, business enquiries, project consultations, client portals, our AI assistant, software engineering engagements, automation services and digital products operated directly by Aether AI Solutions.",
      "Products developed for independent business clients may be governed by their respective privacy policies, service agreements and data processing agreements.",
    ],
  },
  {
    title: "3. Information We Collect",
    content: [
      "Depending on your interaction with us, we may collect the following categories of information:",
    ],
    bullets: [
      "Personal and business information: Name, email address, phone number, company name and professional role.",
      "Project information: Business requirements, technical specifications, project documentation, uploaded files and communications.",
      "Account information: Login identifiers, account preferences and access permissions.",
      "Technical information: IP addresses, browser details, device information, application logs and website interactions.",
      "AI interaction information: Prompts, messages, conversation history, submitted content and generated responses.",
      "Commercial information: Project proposals, billing information, transaction references and contractual records.",
    ],
  },
  {
    title: "4. How We Use Your Information",
    content: [
      "We process information for legitimate business and service-related purposes, subject to applicable legal requirements.",
    ],
    bullets: [
      "Responding to enquiries and preparing project quotations.",
      "Designing, developing and delivering digital products.",
      "Operating AI agents, SaaS platforms and automation systems.",
      "Managing client accounts and project communications.",
      "Providing technical support and maintenance.",
      "Managing invoices and contractual obligations.",
      "Maintaining security and investigating technical issues.",
      "Improving service functionality and reliability.",
      "Meeting applicable legal and regulatory obligations.",
    ],
    footer:
      "We obtain consent where required by applicable law.",
  },
  {
    title: "5. Artificial Intelligence and Automated Processing",
    content: [
      "Our services may incorporate large language models, generative AI, intelligent agents, machine learning and automated workflows.",
      "Information submitted to AI-enabled features may be processed by external AI providers to generate responses, analyze information or perform requested tasks.",
      "Depending on the service, this may include text, documents, images, audio, structured data and business information.",
      "Third-party AI processing and retention are subject to the applicable provider's terms, privacy practices and configured service settings.",
      "Users should not submit passwords, private API keys, confidential documents or sensitive personal information through public AI interfaces.",
      "AI-generated information may be inaccurate or incomplete. Important business, healthcare, financial or other consequential decisions should be subject to appropriate human review.",
    ],
  },
  {
    title: "6. Enterprise and B2B Client Data",
    content: [
      "When developing, integrating or maintaining software for business clients, we may process information on behalf of those clients.",
      "Such information may include customer records, employee information, operational datasets, internal documentation and application data.",
      "Where Aether AI Solutions acts as a data processor, processing is governed by the client's documented instructions, applicable law and the relevant service agreement or Data Processing Agreement.",
      "Clients remain responsible for establishing appropriate legal grounds, providing required privacy notices and obtaining necessary permissions for information supplied to us.",
      "Client data access, permitted use, confidentiality, retention and deletion requirements are defined within the applicable engagement.",
    ],
  },
  {
    title: "7. AI Agents, Voice and Communication Systems",
    content: [
      "Our services may include conversational AI, voice agents, call automation, WhatsApp integrations, Instagram messaging, lead qualification and customer support automation.",
      "Depending on the configured solution, these systems may process:",
    ],
    bullets: [
      "Telephone numbers and contact information.",
      "Messages and conversation history.",
      "Audio recordings and call transcripts.",
      "Communication timestamps and call metadata.",
      "Customer enquiries and business records.",
    ],
    footer:
      "Recording, monitoring and automated communications must be implemented with appropriate notices, permissions and consent where required by law. Third-party communication platforms may process information under their own privacy policies and platform requirements.",
  },
  {
    title: "8. Product-Specific Data Processing",
    content: [
      "Aether AI Solutions develops digital products across multiple industries. Information processing depends on the features, architecture and purpose of each product.",
    ],
    bullets: [
      "Education: Educational applications may process learning activity, assessment responses and performance information.",
      "Healthcare: Healthcare applications may process appointment requests, consultation information and patient-related data where specifically authorized and configured.",
      "Entertainment and media: Digital platforms may process content preferences, interactions, comments and account information.",
      "Marketing and automation: Applications may process campaign information, customer enquiries, marketing assets and authorized business datasets.",
      "Cybersecurity: Authorized security assessments may involve technical logs, network information and system configurations within an agreed assessment scope.",
      "Enterprise SaaS: Business applications may process operational records, account permissions, customer information and authorized organizational data.",
    ],
    footer:
      "Individual products may require additional privacy notices, consent mechanisms and sector-specific safeguards before production use.",
  },
  {
    title: "9. Third-Party Technology Providers",
    content: [
      "We may use external technology providers for cloud hosting, databases, authentication, artificial intelligence, communications, analytics and software integrations.",
      "Depending on the product or engagement, these may include:",
    ],
    bullets: [
      "Amazon Web Services (AWS) and AWS Amplify.",
      "Vercel.",
      "Supabase.",
      "Google Firebase.",
      "Groq.",
      "OpenAI.",
      "Google Gemini.",
      "Resend.",
      "Meta communication platforms.",
      "External APIs and other authorized integration providers.",
    ],
    footer:
      "The providers used vary according to the product architecture and client requirements. Information may be disclosed to these providers to the extent necessary for the relevant service.",
  },
  {
    title: "10. Information Sharing",
    content: [
      "We may share information with authorized personnel, contracted service providers, professional advisers and technology partners where necessary to deliver services or meet legal obligations.",
      "Information may also be disclosed where required by lawful government requests, court orders or applicable regulations.",
      "Client-specific disclosures and subcontracting arrangements may be governed by separate contractual agreements.",
    ],
  },
  {
    title: "11. Cookies and Browser Storage",
    content: [
      "Our website and applications may use cookies, local storage and similar technologies to support authentication, user preferences, session management, security and application functionality.",
      "Where optional analytics or advertising technologies are implemented, additional notices and consent controls will be provided where required.",
      "Users may manage browser storage and cookie preferences through their browser settings.",
    ],
  },
  {
    title: "12. Data Security",
    content: [
      "We aim to implement appropriate technical and organizational safeguards according to the nature of the information, associated risks and agreed project requirements.",
      "These may include access controls, authentication, secure communication protocols, restricted permissions, dependency updates and security monitoring where configured.",
      "No internet-based system can guarantee absolute security.",
      "Security responsibilities for client-owned infrastructure and deployed products are determined by the applicable service agreement.",
    ],
  },
  {
    title: "13. Data Retention and Deletion",
    content: [
      "We retain information for as long as reasonably necessary to fulfill the purposes for which it was collected, provide contracted services and comply with applicable legal obligations.",
      "Client project data may be subject to specific retention, backup, return and deletion requirements established in the relevant agreement.",
      "Third-party platforms may maintain information according to their own retention policies and configured settings.",
      "Users may contact us to request deletion of personal information, subject to applicable legal and contractual requirements.",
    ],
  },
  {
    title: "14. International Data Processing",
    content: [
      "Our cloud infrastructure and third-party service providers may store or process information in India or other jurisdictions.",
      "International processing and transfers are subject to applicable legal requirements and contractual safeguards where required.",
    ],
  },
  {
    title: "15. Children's Privacy",
    content: [
      "Our corporate website and B2B services are primarily intended for adults and business representatives.",
      "Educational or other products intended for children require appropriate product-specific safeguards, parental permissions and privacy notices where required by applicable law.",
    ],
  },
  {
    title: "16. Your Privacy Rights",
    content: [
      "Subject to applicable law, individuals may have the right to:",
    ],
    bullets: [
      "Request information about the processing of their personal data.",
      "Request correction, completion or updating of personal information.",
      "Request deletion of personal information.",
      "Withdraw consent where processing is based on consent.",
      "Raise privacy-related complaints and seek grievance redressal.",
      "Nominate another individual to exercise applicable rights in circumstances provided by law.",
    ],
    footer:
      "Where we process information on behalf of a business client, privacy requests may need to be directed to that client.",
  },
  {
    title: "17. Security Incidents",
    content: [
      "Where a personal data breach occurs, we will take appropriate steps to investigate, contain and address the incident and provide notifications as required by applicable law and contractual obligations.",
    ],
  },
  {
    title: "18. External Websites and Client-Owned Products",
    content: [
      "Our website may contain links to third-party websites, portfolio demonstrations, GitHub repositories and independently operated applications.",
      "These services may have separate privacy practices.",
      "Aether AI Solutions is not responsible for the independent processing practices of external websites or client-operated products, except to the extent of our applicable legal and contractual responsibilities.",
    ],
  },
  {
    title: "19. Applicable Privacy Laws",
    content: [
      "Our processing of personal information is subject to applicable Indian privacy and data protection laws, including the Digital Personal Data Protection Act, 2023 and associated rules as their relevant provisions come into force.",
      "Additional jurisdiction-specific or industry-specific requirements may apply depending on the service, location of users and nature of the information processed.",
    ],
  },
  {
    title: "20. Changes to This Privacy Policy",
    content: [
      "We may update this policy to reflect changes in our business, technology, services or legal obligations.",
      "The revised policy will be published on our website with an updated revision date.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] px-5 pb-24 pt-32 text-white md:px-8">

      {/* Background glow */}
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
            Privacy Policy
          </h1>

          <p className="mb-3 text-lg text-slate-300">
            AI Product Engineering Studio
          </p>

          <p className="text-sm text-slate-400">
            Last updated: November 19, 2026
          </p>

          <div className="mt-8 h-px bg-gradient-to-r from-amber-400/50 via-white/10 to-transparent" />

          <p className="mt-8 max-w-3xl text-base leading-relaxed text-slate-300">
            Privacy, responsible AI and the protection of
            personal information are important to our
            approach to engineering intelligent digital
            products and enterprise technology solutions.
          </p>

        </header>

        {/* Table of contents */}
        <nav
          aria-label="Privacy policy contents"
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
              href="#contact"
              className="text-sm text-slate-400 transition hover:text-amber-400"
            >
              21. Contact and Grievance Redressal
            </a>
          </div>
        </nav>

        {/* Privacy policy sections */}
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

              {section.bullets && (
                <ul className="mt-5 space-y-3">
                  {section.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm leading-7 text-slate-300 md:text-base"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400"
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.footer && (
                <p className="mt-5 text-sm leading-7 text-slate-300 md:text-base">
                  {section.footer}
                </p>
              )}

            </section>
          ))}

          {/* Contact section */}
          <section
            id="contact"
            className="scroll-mt-28 rounded-2xl border border-amber-400/20 bg-amber-400/[0.04] p-6 md:p-8"
          >
            <h2 className="mb-5 text-xl font-semibold md:text-2xl">
              21. Contact and Grievance Redressal
            </h2>

            <p className="mb-6 leading-7 text-slate-300">
              For privacy enquiries, personal data requests,
              complaints or concerns, please contact us
              using the details below.
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
                Email subject: Privacy Request / Grievance
              </p>

            </div>

            <p className="mt-6 text-sm leading-7 text-slate-400">
              Privacy requests will be handled in accordance
              with applicable legal requirements.
            </p>

            <a
              href="mailto:hello@aetheraisolutions.in?subject=Privacy%20Request%20%2F%20Grievance"
              className="mt-8 inline-flex items-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-amber-300"
            >
              Contact Privacy Team →
            </a>

          </section>

        </div>

        {/* Bottom navigation */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-5 border-t border-white/10 pt-8">

          <Link
            href="/"
            className="inline-flex rounded-full border border-white/20 px-6 py-3 text-sm transition hover:border-amber-400/50 hover:text-amber-400"
          >
            ← Back to Home
          </Link>

          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Aether AI Solutions.
            All rights reserved.
          </p>

        </div>

      </div>
    </main>
  );
}
