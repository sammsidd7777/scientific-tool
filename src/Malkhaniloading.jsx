import React, { useEffect, useState } from "react";

export default function MalkhaniLoading() {
  const [phase, setPhase] = useState("draw"); // draw -> reveal -> ready

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("reveal"), 900);
    const t2 = setTimeout(() => setPhase("ready"), 2600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0E0C09] text-[#EDE3D0] overflow-hidden relative">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Cinzel:wght@500;600&display=swap');

        .mk-display { font-family: 'Cinzel', serif; }
        .mk-body { font-family: 'Cormorant Garamond', serif; }

        .mk-monogram-path {
          stroke-dasharray: 340;
          stroke-dashoffset: 340;
          animation: mkDraw 1.4s cubic-bezier(0.65,0,0.35,1) forwards;
        }
        @keyframes mkDraw {
          to { stroke-dashoffset: 0; }
        }
        @keyframes mkFadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .mk-fade-1 { animation: mkFadeUp 0.9s ease forwards; animation-delay: 0.9s; opacity: 0; }
        .mk-fade-2 { animation: mkFadeUp 0.9s ease forwards; animation-delay: 1.25s; opacity: 0; }
        .mk-fade-3 { animation: mkFadeUp 0.9s ease forwards; animation-delay: 1.55s; opacity: 0; }
        .mk-fade-4 { animation: mkFadeUp 0.9s ease forwards; animation-delay: 1.85s; opacity: 0; }

        .mk-shimmer::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(237,227,208,0.5), transparent);
          transform: translateX(-100%);
          animation: mkShimmer 2.2s ease-in-out infinite;
        }
        @keyframes mkShimmer {
          100% { transform: translateX(220%); }
        }

        @keyframes mkGlow {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 0.7; }
        }
        .mk-glow { animation: mkGlow 3.5s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation-duration: 0.001ms !important; }
        }
      `}</style>

      {/* faint radial glow behind monogram */}
      <div
        className="mk-glow absolute w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(198,166,100,0.18) 0%, transparent 70%)" }}
      />

      {/* corner rule marks, quiet frame */}
      <div className="absolute top-8 left-8 w-8 h-8 border-t border-l border-[#C6A664]/30" />
      <div className="absolute top-8 right-8 w-8 h-8 border-t border-r border-[#C6A664]/30" />
      <div className="absolute bottom-8 left-8 w-8 h-8 border-b border-l border-[#C6A664]/30" />
      <div className="absolute bottom-8 right-8 w-8 h-8 border-b border-r border-[#C6A664]/30" />

      <div className="relative flex flex-col items-center gap-7 px-6">
        {/* signature: hand-drawn monogram M */}
        <svg width="88" height="88" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="46" stroke="#C6A664" strokeOpacity="0.25" strokeWidth="1" />
          <path
            className="mk-monogram-path"
            d="M28 68V32L50 58L72 32V68"
            stroke="#C6A664"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className="flex flex-col items-center gap-2">
          <p className="mk-fade-1 mk-display text-[11px] tracking-[0.45em] text-[#C6A664] uppercase">
            Welcome to
          </p>
          <h1 className="mk-fade-2 mk-display text-[34px] sm:text-[42px] tracking-[0.12em] text-[#EDE3D0] leading-none">
            MALKHANI
          </h1>
          <p className="mk-fade-3 mk-body text-[13px] tracking-[0.35em] text-[#EDE3D0]/50 uppercase mt-1">
            Est. Fine Living &nbsp;·&nbsp; Store
          </p>
        </div>

        <div className="mk-fade-4 flex flex-col items-center gap-3 mt-1">
          <div className="w-10 h-px bg-[#C6A664]/40" />
          <p className="mk-body text-[13px] tracking-[0.3em] text-[#EDE3D0]/50 uppercase">
            {phase === "ready" ? "Welcome, please come in" : "So glad you're here"}
          </p>
        </div>
      </div>
    </div>
  );
}