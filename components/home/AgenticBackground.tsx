"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  phase: number;
  size: number;
};

type Signal = {
  from: number;
  to: number;
  progress: number;
  speed: number;
};

export default function AgenticBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animationFrame = 0;
    let time = 0;

    const particles: Particle[] = [];
    const signals: Signal[] = [];

    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = canvas.clientWidth;
      height = canvas.clientHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

const isInsideBrain = (x: number, y: number) => {
  // Brain center
  const cx = 0.62;
  const cy = 0.47;

  const nx = (x - cx) / 0.30;
  const ny = (y - cy) / 0.27;

  // Main cerebral mass
  const main = nx * nx + ny * ny < 1;

  // Upper frontal / parietal lobes
  const upperLeft =
    Math.pow((x - 0.50) / 0.18, 2) +
      Math.pow((y - 0.34) / 0.17, 2) <
    1;

  const upperRight =
    Math.pow((x - 0.73) / 0.18, 2) +
      Math.pow((y - 0.34) / 0.17, 2) <
    1;

  // Lower temporal lobes
  const lowerLeft =
    Math.pow((x - 0.50) / 0.19, 2) +
      Math.pow((y - 0.55) / 0.18, 2) <
    1;

  const lowerRight =
    Math.pow((x - 0.74) / 0.19, 2) +
      Math.pow((y - 0.55) / 0.18, 2) <
    1;

  // Brain stem
  const brainStem =
    Math.pow((x - 0.63) / 0.075, 2) +
      Math.pow((y - 0.69) / 0.14, 2) <
    1;

  return (
    main ||
    upperLeft ||
    upperRight ||
    lowerLeft ||
    lowerRight ||
    brainStem
  );
};

    const createParticles = () => {
      particles.length = 0;

      const count = width < 768 ? 650 : 1250;

      for (let i = 0; i < count; i++) {
        let x = Math.random();
        let y = Math.random();

        let attempts = 0;

        while (!isInsideBrain(x, y) && attempts < 100) {
          x = 0.27 + Math.random() * 0.62;
          y = 0.18 + Math.random() * 0.63;
          attempts++;
        }

        if (attempts >= 100) continue;

        particles.push({
          x,
          y,
          z: Math.random(),
          vx: (Math.random() - 0.5) * 0.00025,
          vy: (Math.random() - 0.5) * 0.00025,
          phase: Math.random() * Math.PI * 2,
          size: 0.45 + Math.random() * 1.7,
        });
      }
    };

    const createSignals = () => {
      signals.length = 0;

      for (let i = 0; i < 22; i++) {
        signals.push({
          from: Math.floor(Math.random() * particles.length),
          to: Math.floor(Math.random() * particles.length),
          progress: Math.random(),
          speed: 0.0018 + Math.random() * 0.003,
        });
      }
    };

    const drawGlow = (
      x: number,
      y: number,
      radius: number,
      color: string,
      alpha: number
    ) => {
      const gradient = ctx.createRadialGradient(
        x,
        y,
        0,
        x,
        y,
        radius
      );

      gradient.addColorStop(
        0,
        color.replace("ALPHA", String(alpha))
      );

      gradient.addColorStop(
        1,
        color.replace("ALPHA", "0")
      );

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawBackground = () => {
      const gradient = ctx.createLinearGradient(
        0,
        0,
        width,
        height
      );

      gradient.addColorStop(0, "#030405");
      gradient.addColorStop(0.45, "#07090d");
      gradient.addColorStop(1, "#020304");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Subtle blue atmospheric glow
      drawGlow(
        width * 0.72,
        height * 0.48,
        width * 0.42,
        "rgba(35,105,255,ALPHA)",
        0.13
      );

      // Subtle gold atmospheric glow
      drawGlow(
        width * 0.64,
        height * 0.50,
        width * 0.30,
        "rgba(255,185,35,ALPHA)",
        0.09
      );
    };

    const drawOrbitalRings = () => {
      const cx = width * 0.64 + mouseX * 8;
      const cy = height * 0.49 + mouseY * 6;

      ctx.save();
      ctx.translate(cx, cy);

      for (let i = 0; i < 5; i++) {
        ctx.beginPath();

        ctx.ellipse(
          0,
          0,
          width * (0.20 + i * 0.035),
          height * (0.075 + i * 0.012),
          i * 0.35 + time * 0.00008,
          0,
          Math.PI * 2
        );

        ctx.strokeStyle =
          i % 2 === 0
            ? "rgba(80,150,255,0.12)"
            : "rgba(255,190,60,0.10)";

        ctx.lineWidth = 1;
        ctx.stroke();
      }

      ctx.restore();
    };

    const drawNeuralConnections = () => {
      ctx.lineWidth = 0.7;

      for (let i = 0; i < particles.length; i += 3) {
        const a = particles[i];

        const ax = a.x * width;
        const ay = a.y * height;

        for (
          let j = i + 1;
          j < Math.min(i + 28, particles.length);
          j += 3
        ) {
          const b = particles[j];

          const bx = b.x * width;
          const by = b.y * height;

          const dx = ax - bx;
          const dy = ay - by;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance > width * 0.055) continue;

          const alpha =
            (1 - distance / (width * 0.055)) * 0.17;

          const gradient = ctx.createLinearGradient(
            ax,
            ay,
            bx,
            by
          );

          gradient.addColorStop(
            0,
            `rgba(70,150,255,${alpha})`
          );

          gradient.addColorStop(
            0.5,
            `rgba(255,190,65,${alpha * 0.8})`
          );

          gradient.addColorStop(
            1,
            `rgba(70,150,255,${alpha})`
          );

          ctx.strokeStyle = gradient;

          ctx.beginPath();
          ctx.moveTo(ax, ay);
          ctx.lineTo(bx, by);
          ctx.stroke();
        }
      }
    };

    const drawParticles = () => {
      for (const particle of particles) {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (!isInsideBrain(particle.x, particle.y)) {
          particle.vx *= -1;
          particle.vy *= -1;

          particle.x = Math.max(
            0.28,
            Math.min(0.89, particle.x)
          );

          particle.y = Math.max(
            0.18,
            Math.min(0.82, particle.y)
          );
        }

        const pulse =
          0.55 +
          Math.sin(time * 0.002 + particle.phase) * 0.35;

        const px = particle.x * width;
        const py = particle.y * height;

        const blue =
          particle.x > 0.61 && particle.y < 0.60;

        ctx.beginPath();

        ctx.fillStyle = blue
          ? `rgba(80,170,255,${pulse})`
          : `rgba(255,190,65,${pulse})`;

        ctx.arc(
          px,
          py,
          particle.size,
          0,
          Math.PI * 2
        );

        ctx.fill();
      }
    };

    const drawSignals = () => {
      for (const signal of signals) {
        const a = particles[signal.from];
        const b = particles[signal.to];

        if (!a || !b) continue;

        signal.progress += signal.speed;

        if (signal.progress > 1) {
          signal.progress = 0;
          signal.from = Math.floor(
            Math.random() * particles.length
          );
          signal.to = Math.floor(
            Math.random() * particles.length
          );
        }

        const x =
          a.x * width +
          (b.x - a.x) * width * signal.progress;

        const y =
          a.y * height +
          (b.y - a.y) * height * signal.progress;

        drawGlow(
          x,
          y,
          16,
          "rgba(255,200,70,ALPHA)",
          0.45
        );

        ctx.beginPath();
        ctx.fillStyle = "#ffd76a";
        ctx.arc(x, y, 1.7, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const drawBrainCore = () => {
      const cx = width * 0.64 + mouseX * 8;
      const cy = height * 0.49 + mouseY * 6;

      const pulse =
        1 + Math.sin(time * 0.0022) * 0.08;

      // Central intelligence glow
      drawGlow(
        cx,
        cy,
        width * 0.11 * pulse,
        "rgba(255,190,50,ALPHA)",
        0.18
      );

      drawGlow(
        cx,
        cy,
        width * 0.07 * pulse,
        "rgba(65,145,255,ALPHA)",
        0.14
      );

      // Neural core
      ctx.beginPath();
      ctx.arc(
        cx,
        cy,
        width * 0.018 * pulse,
        0,
        Math.PI * 2
      );

      const core = ctx.createRadialGradient(
        cx,
        cy,
        0,
        cx,
        cy,
        width * 0.018
      );

      core.addColorStop(0, "#fff5c2");
      core.addColorStop(0.25, "#ffd65a");
      core.addColorStop(0.65, "#ffad19");
      core.addColorStop(1, "rgba(255,160,20,0)");

      ctx.fillStyle = core;
      ctx.fill();

      // Expanding neural pulse
      for (let i = 0; i < 3; i++) {
        const radius =
          ((time * 0.035 + i * 70) % 210) + 20;

        ctx.beginPath();

        ctx.arc(
          cx,
          cy,
          radius,
          0,
          Math.PI * 2
        );

        ctx.strokeStyle =
          i % 2 === 0
            ? `rgba(80,160,255,${0.10 - radius / 3000})`
            : `rgba(255,190,60,${0.08 - radius / 3500})`;

        ctx.lineWidth = 1;
        ctx.stroke();
      }
    };

    const animate = () => {
      time += 16;

      mouseX += (targetMouseX - mouseX) * 0.035;
      mouseY += (targetMouseY - mouseY) * 0.035;

      drawBackground();
      drawOrbitalRings();
      drawNeuralConnections();
      drawParticles();
      drawSignals();
      drawBrainCore();

      animationFrame = requestAnimationFrame(animate);
    };

    const handleMouseMove = (event: MouseEvent) => {
      targetMouseX =
        event.clientX / window.innerWidth - 0.5;

      targetMouseY =
        event.clientY / window.innerHeight - 0.5;
    };

    const handleMouseLeave = () => {
      targetMouseX = 0;
      targetMouseY = 0;
    };

    resize();
    createParticles();
    createSignals();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
      window.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
      />

      {/* Premium cinematic depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#050403]/95 via-[#050403]/45 to-transparent" />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050403]/80 via-transparent to-[#050403]/20" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_68%_48%,transparent_15%,rgba(0,0,0,0.5)_100%)]" />
    </div>
  );
}