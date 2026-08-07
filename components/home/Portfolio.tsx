import Image from "next/image";
import Link from "next/link";
export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-20 text-center">
          <p className="mb-3 uppercase tracking-[0.3em] text-yellow-400">
            Portfolio
          </p>

          <h2 className="text-5xl font-bold text-white">
            Selected Work
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            A collection of premium digital products we've designed
            and developed.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
<div className="relative h-72 overflow-hidden">
  <Image
    src="/streamflix.png"
    alt="StreamFlix AI"
    fill
    className="object-cover transition duration-500 hover:scale-105"
  />
</div>

            <div className="p-8">
              <h3 className="text-3xl font-bold text-white">
                StreamFlix AI
              </h3>

              <p className="mt-4 text-gray-400">
                AI-powered streaming platform built with
                Next.js, Tailwind CSS and modern UI.
              </p>

              <div className="mt-8 flex gap-4">
               <Link
  href="https://streamflix-ai.vercel.app"
  target="_blank"
  className="rounded-full bg-yellow-500 px-6 py-3 font-semibold text-black"
>
  Live Demo
</Link>

               <Link
  href="https://github.com/egaost00-lgtm/streamflix-ai"
  target="_blank"
  className="rounded-full border border-white/20 px-6 py-3 text-white"
>
  GitHub
</Link>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
<div className="relative h-72 overflow-hidden">
  <Image
    src="/homeopathy.png"
    alt="Homeopathy Website"
    fill
    className="object-cover transition duration-500 hover:scale-105"
  />
</div>

            <div className="p-8">
              <h3 className="text-3xl font-bold text-white">
                Healthcare Website
              </h3>

              <p className="mt-4 text-gray-400">
                Premium responsive website with modern design
                and appointment system.
              </p>

              <div className="mt-8 flex gap-4">
<Link
  href="https://neetikahomeopathy-kanpur.netlify.app"
  target="_blank"
  className="rounded-full bg-yellow-500 px-6 py-3 font-semibold text-black"
>
  Live Demo
</Link>

 
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}