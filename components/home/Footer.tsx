import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div>
          <Link href="/">
            <h3 className="cursor-pointer text-xl font-bold text-white hover:text-yellow-400 transition">
              Aether AI Solutions
            </h3>
          </Link>

          <p className="mt-2 text-sm text-gray-400">
            © 2026 Aether AI Solutions. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap gap-6">
          <Link href="/" className="text-gray-400 hover:text-yellow-400 transition">
            Home
          </Link>

          <Link href="/services" className="text-gray-400 hover:text-yellow-400 transition">
            Services
          </Link>

          <Link href="/portfolio" className="text-gray-400 hover:text-yellow-400 transition">
            Portfolio
          </Link>

          <Link href="/about" className="text-gray-400 hover:text-yellow-400 transition">
            About
          </Link>

          <Link href="/contact" className="text-gray-400 hover:text-yellow-400 transition">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}