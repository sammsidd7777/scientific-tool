import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  FlaskConical,
  Microscope,
  ShieldCheck,
  Truck,
  ChevronLeft,
  ChevronRight,
  Search,
} from "lucide-react";

const slides = [
  {
    eyebrow: "Professional Laboratory Equipment",
    title: "Equip Your Laboratory for Precise Results.",
    highlight: "Precise Results.",
    description:
      "Discover reliable laboratory instruments, glassware and scientific tools designed for research, education and professional laboratory use.",
    image:
      "https://images.unsplash.com/photo-1606206873764-fd15e242df52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFib3JhdG9yeXxlbnwwfHwwfHx8MA%3D%3D",
    primary: "Shop Laboratory Equipment",
    secondary: "Explore Categories",
  },

  {
    eyebrow: "Advanced Scientific Instruments",
    title: "Reliable Tools for Every Experiment.",
    highlight: "Every Experiment.",
    description:
      "Explore precision instruments, microscopes, measuring equipment and essential laboratory tools for accurate and efficient research.",
    image:
      "https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhYm9yYXRvcnl8ZW58MHx8MHx8fDA%3D",
    primary: "Shop Instruments",
    secondary: "View Catalog",
  },

  {
    eyebrow: "Complete Lab Solutions",
    title: "Everything Your Laboratory Needs.",
    highlight: "Laboratory Needs.",
    description:
      "Shop laboratory glassware, measuring tools, safety equipment and scientific instruments from one convenient online store.",
    image:
      "https://media.istockphoto.com/id/1449743791/photo/close-view-of-scientist-hand-hold-blood-samples-for-tb-gold-or-quantiferon-test-4-samples-for.jpg?s=612x612&w=0&k=20&c=TVY7OjaEx2jYsOVAJwJaKOSEwRcr19pE0Za3zg2Sprc=",
    primary: "Browse Products",
    secondary: "Explore Categories",
  },
];

const HeroSection = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive((prev) => (prev + 1) % slides.length), 5500);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[active];

  return (
    <section className="relative overflow-hidden bg-ink-950 min-h-[680px] flex items-center">
      <div className="absolute inset-0 bg-radial-fade pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-gold-500/10 blur-[120px]" />
      <div className="absolute -bottom-40 -left-40 w-[460px] h-[460px] rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute inset-0 opacity-[0.045] pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.8) 1px,transparent 1px)",
        backgroundSize: "52px 52px",
      }} />

      <div className="container-page relative w-full py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-[1.05fr_.95fr] gap-10 lg:gap-16 items-center">
          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: .5 }}>
              <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/20 bg-gold-400/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-gold-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {slide.eyebrow}
              </div>

              <h1 className="mt-7 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tightest text-white leading-[.98] max-w-3xl">
                {slide.title.replace(slide.highlight, "")}
                <span className="text-gold-400">{slide.highlight}</span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-ink-300 leading-relaxed max-w-xl">
                {slide.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/shop" className="group inline-flex items-center gap-2 h-13 px-6 rounded-xl bg-gold-500 text-ink-950 font-bold hover:bg-gold-300 transition-colors">
                  {slide.primary}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/shop" className="inline-flex items-center gap-2 h-13 px-6 rounded-xl border border-white/10 bg-white/5 text-white font-semibold hover:bg-white/10 transition-colors">
                  <Search className="w-4 h-4" />
                  {slide.secondary}
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-3 max-w-xl mt-10 pt-7 border-t border-white/10">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-gold-400" />
                  <div><p className="text-xs font-bold text-white">Reliable</p><p className="text-[11px] text-ink-500">Quality checked</p></div>
                </div>
                <div className="flex items-center gap-2.5">
                  <Truck className="w-5 h-5 text-gold-400" />
                  <div><p className="text-xs font-bold text-white">Fast Delivery</p><p className="text-[11px] text-ink-500">Across India</p></div>
                </div>
                <div className="flex items-center gap-2.5">
                  <Microscope className="w-5 h-5 text-gold-400" />
                  <div><p className="text-xs font-bold text-white">Lab Ready</p><p className="text-[11px] text-ink-500">Professional use</p></div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="relative min-h-[390px] sm:min-h-[470px] flex items-center justify-center">
            <div className="absolute w-[330px] h-[330px] sm:w-[470px] sm:h-[470px] rounded-full border border-white/10" />
            <div className="absolute w-[270px] h-[270px] sm:w-[390px] sm:h-[390px] rounded-full border border-gold-400/15" />
            <div className="absolute w-[300px] h-[300px] sm:w-[430px] sm:h-[430px] rounded-full bg-gold-500/10 blur-3xl" />

            <AnimatePresence mode="wait">
              <motion.div key={active} initial={{ opacity: 0, scale: .92, x: 30 }} animate={{ opacity: 1, scale: 1, x: 0 }} exit={{ opacity: 0, scale: 1.03, x: -25 }} transition={{ duration: .6 }} className="relative w-full h-full flex items-center justify-center">
                <img src={slide.image} alt="Laboratory equipment" className="relative z-10 w-[78%] sm:w-[84%] max-h-[440px] object-contain drop-shadow-[0_35px_55px_rgba(0,0,0,.65)] animate-floatY" />
                <div className="absolute top-5 left-2 sm:left-4 glass rounded-2xl px-4 py-3 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-gold-400/15 flex items-center justify-center"><FlaskConical className="w-5 h-5 text-gold-300" /></span>
                  <div><p className="text-sm font-bold text-white">Lab Essentials</p><p className="text-[11px] text-ink-400">Professional grade</p></div>
                </div>
                <div className="absolute bottom-5 right-0 sm:right-2 glass rounded-2xl px-4 py-3">
                  <p className="text-[10px] uppercase tracking-widest text-gold-300 font-bold">Featured</p>
                  <p className="text-sm font-semibold text-white mt-1">Precision equipment</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <button onClick={() => setActive((active - 1 + slides.length) % slides.length)} aria-label="Previous slide" className="absolute left-0 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-white/10 bg-ink-900/80 text-white flex items-center justify-center hover:border-gold-400/40 hover:text-gold-300">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => setActive((active + 1) % slides.length)} aria-label="Next slide" className="absolute right-0 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-white/10 bg-ink-900/80 text-white flex items-center justify-center hover:border-gold-400/40 hover:text-gold-300">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, index) => (
            <button key={index} onClick={() => setActive(index)} aria-label={`Go to slide ${index + 1}`} className={`h-1.5 rounded-full transition-all ${index === active ? "w-9 bg-gold-400" : "w-2 bg-white/20"}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
