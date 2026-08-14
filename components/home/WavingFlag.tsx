"use client";

import { useEffect, useRef } from "react";

type WavingFlagProps = {
  src: string;
  className?: string;
};

export default function WavingFlag({
  src,
  className = "",
}: WavingFlagProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const image = new Image();
    image.src = src;

    let frame = 0;
    let start = performance.now();

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (time: number) => {
      if (!image.complete || !image.naturalWidth) {
        frame = requestAnimationFrame(draw);
        return;
      }

      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);

      const elapsed = (time - start) / 1000;

      /*
       * More segments = smoother cloth.
       */
      const segments = 160;
      const segmentWidth = width / segments;

      for (let i = 0; i < segments; i++) {
        const p = i / (segments - 1);

        /*
         * LEFT SIDE = ATTACHED TO POLE
         * RIGHT SIDE = FREE EDGE
         *
         * This is what makes it behave like
         * a real flag instead of moving as one image.
         */
        const amplitude = Math.pow(p, 1.7) * 55;

        /*
         * Slow wind travelling across the flag.
         */
        const wave =
          Math.sin(
            p * Math.PI * 2.2 -
              elapsed * 1.8
          ) * amplitude;

        /*
         * Smaller secondary fold.
         */
        const fold =
          Math.sin(
            p * Math.PI * 5 -
              elapsed * 1.15
          ) *
          Math.pow(p, 2) *
          10;

        /*
         * Vertical displacement.
         */
        const y = wave + fold;

        /*
         * Slight horizontal compression.
         * This gives the cloth a natural
         * forward/backward movement.
         */
        const squeeze =
          1 -
          Math.sin(
            p * Math.PI * 2.2 -
              elapsed * 1.8
          ) *
            0.025 *
            p;

        const sx = p * image.naturalWidth;

        const nextP = (i + 1) / (segments - 1);

        const sw =
          (nextP - p) *
            image.naturalWidth +
          1;

        const dx = i * segmentWidth;

        ctx.drawImage(
          image,
          sx,
          0,
          sw,
          image.naturalHeight,
          dx,
          y,
          segmentWidth * squeeze + 1,
          height
        );
      }

      frame = requestAnimationFrame(draw);
    };

    image.onload = () => {
      resize();
      start = performance.now();
      frame = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, [src]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
    />
  );
}