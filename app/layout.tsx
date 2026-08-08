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
  metadataBase: new URL("https://aetheraisolutions.in"),

  title: {
    default: "Aether AI Solutions | AI, Web & Digital Products",
    template: "%s | Aether AI Solutions",
  },

  description:
    "Aether AI Solutions builds premium websites, AI applications, SaaS platforms, automation systems, and modern digital experiences for businesses.",

  keywords: [
    "Aether AI Solutions",
    "AI solutions",
    "AI development",
    "website development",
    "SaaS development",
    "AI automation",
    "web development",
    "UI UX design",
    "digital solutions",
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