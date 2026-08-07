export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-white">
            Aether AI Solutions
          </h3>
          <p className="mt-2 text-sm text-gray-400">
            © 2026 Aether AI Solutions. All rights reserved.
          </p>
        </div>

        <div className="flex gap-6">
          <a href="#services" className="text-gray-400 hover:text-white">
            Services
          </a>

          <a href="#portfolio" className="text-gray-400 hover:text-white">
            Portfolio
          </a>

          <a href="#contact" className="text-gray-400 hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}