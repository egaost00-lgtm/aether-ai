export default function Contact() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-5xl px-6">

        <div className="rounded-[40px] border border-white/10 bg-white/5 p-14 text-center">

          <p className="mb-3 uppercase tracking-[0.3em] text-yellow-400">
            Contact
          </p>

          <h2 className="text-5xl font-bold text-white">
            Let's Build Something Amazing
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Have an idea for a website, AI product, or automation system?
            Let's discuss your project.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <a
              href="aitherai.solutions@gmail.com"
              className="rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              Email Us
            </a>

            <a
              href="https://wa.me/917974012506"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition hover:border-yellow-500"
            >
              WhatsApp
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}