import React from "react";
import { Microscope, FlaskConical, Beaker, Ruler, ShieldCheck, Atom } from "lucide-react";

const items = [
  ["Precision Instruments", Microscope], ["Lab Glassware", Beaker], ["Chemistry Tools", FlaskConical],
  ["Measurement", Ruler], ["Safety", ShieldCheck], ["Research Essentials", Atom],
];

const BrandsSection = () => {
  const track = [...items, ...items];
  return (
    <section className="py-12 sm:py-16 bg-ink-950 border-y border-white/5 overflow-hidden">
      <div className="container-page mb-6"><p className="text-center text-xs font-bold uppercase tracking-widest2 text-ink-500">Everything your laboratory needs</p></div>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-950 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink-950 to-transparent z-10" />
        <div className="flex w-max animate-marquee gap-5 items-center">
          {track.map(([label, Icon], index) => <div key={index} className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/[.03] text-ink-300"><Icon className="w-4 h-4 text-gold-400" /><span className="text-sm font-semibold whitespace-nowrap">{label}</span></div>)}
        </div>
      </div>
    </section>
  );
};
export default BrandsSection;
