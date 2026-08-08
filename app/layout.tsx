import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "Aether AI Solutions | AI, Web & Automation",
  description:
    "Aether AI Solutions builds premium websites, AI applications, SaaS platforms, dashboards, and automation systems for startups and businesses.",
  keywords: [
    "Aether AI Solutions",
    "AI solutions",
    "website development",
    "AI application development",
    "SaaS development",
    "business automation",
    "web development",
    "AI automation",
  ],


  authors: [{ name: "Aether AI Solutions" }],
  creator: "Aether AI Solutions",
  publisher: "Aether AI Solutions",

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://aetheraisolutions.in",
    siteName: "Aether AI Solutions",
    title: "Aether AI Solutions | AI, Web & Digital Products",
    description:
      "Premium websites, AI applications, SaaS platforms, automation systems, and modern digital experiences.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}