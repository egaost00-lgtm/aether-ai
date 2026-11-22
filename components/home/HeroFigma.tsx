
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";

export default function HeroFigma() {
  return (
    <section className="relative isolate min-h-[695px] overflow-hidden bg-[#060b12] text-[#f4f6fa]">
      {/* Animated glowing AI core */}
      <div className="pointer-events-none absolute inset-y-0 -right-[4%] w-[72%] max-md:inset-x-0 max-md:top-auto max-md:bottom-4 max-md:h-[420px] max-md:w-full">
        <div className="absolute inset-0 animate-[core-breathe_6s_ease-in-out_infinite] motion-reduce:animate-none">
          <Image
            src="/aether-core.png"
            alt=""
            fill
            priority
            sizes="(max-width: 768px) 100vw, 72vw"
            className="object-cover opacity-95 [mix-blend-mode:screen] [mask-image:linear-gradient(to_right,transparent,black_20%,black_90%,transparent)] max-md:[mask-image:linear-gradient(to_bottom,transparent,black_12%,black_80%,transparent)]"
          />
        </div>

        {/* Soft cyan ambient glow */}
        <div className="absolute inset-[20%] -z-10 rounded-full bg-[#50e8df]/15 blur-[100px]" />

        {/* Floating labels */}
        <div className="absolute right-[14%] top-[22%] flex items-center gap-2 rounded-md border border-cyan-200/10 bg-[#07141e]/85 px-3 py-3 text-[10px] text-slate-300 backdrop-blur-xl">
          <span className="h-1.5 w-1.5 rounded-full bg-[#50e8df] shadow-[0_0_10px_#50e8df]" />
          Intelligence, in motion.
        </div>

        <div className="absolute bottom-[24%] left-[25%] flex items-center gap-2 rounded-md border border-cyan-200/10 bg-[#07141e]/85 px-3 py-3 text-[10px] text-[#50e8df] backdrop-blur-xl max-md:left-[13%]">
          <Sparkles size={15} />
          <span>
            Human ambition.
            <span className="block text-slate-300">
              Artificial intelligence.
            </span>
          </span>
        </div>
      </div>

      {/* Main hero content */}
      <div className="relative z-10 mx-auto max-w-[1240px] px-5 pb-[350px] pt-28 sm:px-8 md:pb-24 md:pt-32 lg:px-10">
        <div className="inline-flex items-center gap-2 rounded border border-[#50e8df]/20 bg-[#50e8df]/5 px-3 py-2 text-[9px] font-semibold tracking-[0.18em] text-[#50e8df]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#50e8df]" />
          ENGINEERED FOR WHAT&apos;S NEXT
        </div>

        <h1 className="mt-7 max-w-[750px] text-[clamp(3rem,7vw,4.9rem)] font-semibold leading-[1.1] tracking-[-0.055em]">
          Intelligence.
          <br />
          Engineered for
          <br />
          <span className="text-[#50e8df]">your next.</span>
        </h1>

        <p className="mt-6 max-w-[520px] text-sm leading-7 text-[#9ca5b3] sm:text-base">
          We turn ambitious ideas into intelligent solutions.
          AI, custom software, and SaaS — built in India,
          designed for the world.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center gap-6 rounded-md bg-[#50e8df] px-6 py-3 text-sm font-semibold text-[#041214] transition hover:bg-[#8dfcf3]"
          >
            Build with us <ArrowUpRight size={18} />
          </Link>

          <Link
            href="/portfolio"
            className="inline-flex min-h-12 items-center gap-6 rounded-md border border-white/20 bg-white/[0.02] px-6 py-3 text-sm text-white transition hover:bg-white/10"
          >
            Explore our work <ArrowRight size={18} />
          </Link>
        </div>

        <div className="mt-8 text-xs leading-6 text-[#8892a1]">
          Big thinkers. Thoughtful builders.
          <span className="block text-[#c4cad2]">
            Your next technology partner.
          </span>
        </div>
      </div>

      {/* Bottom hero bar */}
      <div className="relative z-10 mx-auto flex max-w-[1240px] items-center justify-between gap-3 border-t border-white/10 px-5 py-5 text-[9px] tracking-widest text-[#7b8795] sm:px-8 lg:px-10">
        <span>BASED IN INDIA. BUILDING BEYOND BORDERS.</span>
        <span>SCROLL TO EXPLORE ↓</span>
      </div>

      {/* Component-scoped animation */}
      <style>{`
        @keyframes core-breathe {
          0%, 100% {
            transform: scale(1);
            opacity: 0.85;
            filter: brightness(1)
              drop-shadow(0 0 15px rgba(80, 232, 223, 0.25));
          }

          50% {
            transform: scale(1.045);
            opacity: 1;
            filter: brightness(1.2)
              drop-shadow(0 0 45px rgba(80, 232, 223, 0.65));
          }
        }
      `}</style>
    </section>
  );
}
