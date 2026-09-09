import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, FlaskConical } from "lucide-react";

const CTABanner = () => (
  <section className="py-16 sm:py-24 bg-ink-950">
    <div className="container-page">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-900 via-ink-900 to-gold-900/20 px-8 py-16 sm:py-20 text-center">
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="relative">
          <div className="mx-auto w-12 h-12 rounded-2xl bg-gold-400/10 flex items-center justify-center"><FlaskConical className="w-6 h-6 text-gold-300" /></div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tightest mt-5">Ready to equip your lab?</h2>
          <p className="text-ink-300 text-lg mt-4 max-w-xl mx-auto">Browse dependable scientific tools and laboratory essentials in one simple catalog.</p>
          <Link to="/shop" className="group inline-flex items-center gap-2 h-14 px-8 rounded-xl bg-white text-ink-950 font-bold mt-8 hover:bg-gold-200">Explore Products <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
        </div>
      </motion.div>
    </div>
  </section>
);
export default CTABanner;
