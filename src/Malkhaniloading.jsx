import React, { useEffect, useState } from "react";
import {
  FlaskConical,
  Microscope,
  Atom,
  CheckCircle2,
} from "lucide-react";

export default function SciSupplyLoading() {
  const [phase, setPhase] = useState("scan");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("analyze"), 1000);
    const t2 = setTimeout(() => setPhase("ready"), 2300);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#070A0D] text-white overflow-hidden relative">
      <style>{`
        @keyframes scan {
          0% {
            transform: translateY(-55px);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateY(55px);
            opacity: 0;
          }
        }

        @keyframes pulseRing {
          0%, 100% {
            transform: scale(0.92);
            opacity: 0.35;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.8;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes rotateSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        @keyframes dotPulse {
          0%, 100% {
            opacity: 0.25;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .science-float {
          animation: float 3s ease-in-out infinite;
        }

        .science-ring {
          animation: pulseRing 3s ease-in-out infinite;
        }

        .science-rotate {
          animation: rotateSlow 18s linear infinite;
        }

        .science-fade {
          animation: fadeUp 0.7s ease forwards;
        }

        .science-progress {
          animation: progress 2.3s cubic-bezier(.65,0,.35,1) forwards;
        }

        .science-dot-1 {
          animation: dotPulse 1.2s ease-in-out infinite;
        }

        .science-dot-2 {
          animation: dotPulse 1.2s ease-in-out infinite 0.2s;
        }

        .science-dot-3 {
          animation: dotPulse 1.2s ease-in-out infinite 0.4s;
        }

        .science-scan {
          animation: scan 1.8s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.001ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>

      {/* Background glow */}
      <div
        className="
          absolute
          w-[500px]
          h-[500px]
          rounded-full
          pointer-events-none
          blur-3xl
          opacity-40
        "
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 68%)",
        }}
      />

      {/* Subtle scientific grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "42px 42px",
        }}
      />

      {/* Corner marks */}
      <div className="absolute top-7 left-7 w-8 h-8 border-t border-l border-[#D4AF37]/25" />
      <div className="absolute top-7 right-7 w-8 h-8 border-t border-r border-[#D4AF37]/25" />
      <div className="absolute bottom-7 left-7 w-8 h-8 border-b border-l border-[#D4AF37]/25" />
      <div className="absolute bottom-7 right-7 w-8 h-8 border-b border-r border-[#D4AF37]/25" />

      <div className="relative flex flex-col items-center px-6">
        {/* Scientific icon */}
        <div className="relative w-32 h-32 flex items-center justify-center">
          {/* Outer rotating ring */}
          <div
            className="
              science-rotate
              absolute
              inset-1
              rounded-full
              border
              border-dashed
              border-[#D4AF37]/20
            "
          />

          {/* Inner pulsing ring */}
          <div
            className="
              science-ring
              absolute
              inset-5
              rounded-full
              border
              border-[#D4AF37]/30
            "
          />

          {/* Icon background */}
          <div
            className="
              science-float
              relative
              w-20
              h-20
              rounded-2xl
              bg-[#11161B]
              border
              border-[#D4AF37]/30
              flex
              items-center
              justify-center
              shadow-[0_0_45px_rgba(212,175,55,0.08)]
            "
          >
            <FlaskConical
              className="w-9 h-9 text-[#D4AF37]"
              strokeWidth={1.5}
            />

            {/* Scanning line */}
            <div
              className="
                science-scan
                absolute
                left-2
                right-2
                h-px
                bg-gradient-to-r
                from-transparent
                via-[#D4AF37]
                to-transparent
                opacity-80
              "
            />
          </div>

          {/* Small orbit icons */}
          <div className="absolute -top-1 left-7 text-[#D4AF37]/50">
            <Atom className="w-4 h-4" />
          </div>

          <div className="absolute -bottom-1 right-6 text-[#D4AF37]/40">
            <Microscope className="w-4 h-4" />
          </div>
        </div>

        {/* Brand */}
        <div className="science-fade flex flex-col items-center mt-8">
          <p
            className="
              text-[11px]
              font-bold
              uppercase
              tracking-[0.45em]
              text-[#D4AF37]
            "
          >
            Scientific Equipment
          </p>

          <h1
            className="
              text-3xl
              sm:text-4xl
              font-black
              tracking-tight
              text-white
              mt-3
            "
          >
            SciSupply
          </h1>

          <p className="text-xs text-white/35 mt-2 tracking-[0.22em] uppercase">
            Laboratory essentials
          </p>
        </div>

        {/* Status */}
        <div className="mt-9 flex flex-col items-center">
          <div className="flex items-center gap-2">
            {phase === "ready" ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />

                <span className="text-xs text-emerald-300 font-medium">
                  Ready
                </span>
              </>
            ) : (
              <>
                <span className="flex items-center gap-1.5">
                  <span className="science-dot-1 w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span className="science-dot-2 w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span className="science-dot-3 w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                </span>

                <span className="text-xs text-white/45">
                  {phase === "scan"
                    ? "Preparing laboratory"
                    : "Loading equipment"}
                </span>
              </>
            )}
          </div>

          {/* Progress */}
          <div className="w-48 sm:w-56 h-px bg-white/8 mt-4 overflow-hidden">
            <div
              className="
                science-progress
                h-full
                bg-[#D4AF37]
              "
            />
          </div>
        </div>

        {/* Bottom tagline */}
        <p className="text-[10px] text-white/20 tracking-[0.28em] uppercase mt-8">
          Research · Education · Laboratory
        </p>
      </div>
    </div>
  );
}

