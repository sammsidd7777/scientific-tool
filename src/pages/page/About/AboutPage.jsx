import React from "react";
import { motion } from "framer-motion";
import { FlaskConical, ShieldCheck, Truck, Headphones, Microscope } from "lucide-react";
import SectionHeading from "../../../components/ui/SectionHeading";

const values = [
  { icon: ShieldCheck, title: "Reliable Quality", desc: "We focus on dependable laboratory products suitable for regular academic, research and professional use." },
  { icon: Microscope, title: "Useful Selection", desc: "A focused catalog of instruments, glassware and scientific essentials without unnecessary complexity." },
  { icon: Truck, title: "Secure Delivery", desc: "Products are packed carefully so your laboratory equipment reaches you safely." },
  { icon: Headphones, title: "Human Support", desc: "Clear product information and support when you need help choosing an item." },
];

const AboutPage = () => (
  <div className="bg-ink-950 min-h-screen">
    <section className="relative overflow-hidden py-24 sm:py-32 border-b border-white/5">
      <div className="absolute inset-0 bg-radial-fade" />
      <div className="container-page relative text-center">
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest2 text-gold-400"><FlaskConical className="w-4 h-4" /> About SciSupply</span>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-6xl font-black text-white tracking-tightest mt-5">Scientific tools made easier to find.</motion.h1>
        <p className="text-ink-300 text-lg max-w-2xl mx-auto mt-6 leading-relaxed">SciSupply is built to make laboratory procurement simple, clear and modern for students, educators, researchers and professional laboratories.</p>
      </div>
    </section>

    <section className="container-page py-20 sm:py-28 grid lg:grid-cols-2 gap-12 items-center">
      <div><span className="text-xs font-bold uppercase tracking-widest2 text-gold-400">Our approach</span><h2 className="text-3xl sm:text-4xl font-black text-white mt-3 mb-6">Less searching. More experimenting.</h2><p className="text-ink-300 leading-relaxed mb-4">Finding the right laboratory equipment should not feel complicated. We organize essential scientific products into a clean catalog with practical information such as price, availability, category and description.</p><p className="text-ink-300 leading-relaxed">Whether you are setting up a teaching lab, buying equipment for research or replacing everyday lab tools, SciSupply is designed to keep the buying experience straightforward.</p></div>
      <div className="relative rounded-3xl overflow-hidden aspect-[4/3] border border-white/10 bg-ink-900 flex items-center justify-center"><div className="absolute w-72 h-72 rounded-full bg-gold-500/10 blur-3xl" /><FlaskConical className="relative w-32 h-32 text-gold-400/70" /></div>
    </section>

    <section className="border-y border-white/5 bg-ink-900/40 py-20 sm:py-28"><div className="container-page text-center max-w-3xl mx-auto"><span className="text-xs font-bold uppercase tracking-widest2 text-gold-400">Our mission</span><h2 className="text-3xl sm:text-4xl font-black text-white mt-3">Make quality scientific equipment accessible and simple to purchase.</h2><p className="text-ink-300 leading-relaxed mt-5">We want the store to feel professional enough for laboratories while remaining easy enough for students and first-time buyers.</p></div></section>

    <section className="container-page py-20 sm:py-28"><SectionHeading eyebrow="Why choose us" title="Built around laboratory needs" /><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">{values.map((v, i) => <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .06 }} className="rounded-2xl border border-white/10 bg-ink-900/50 p-7"><div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center mb-5"><v.icon className="w-5 h-5 text-gold-300" /></div><h3 className="font-bold text-white mb-2">{v.title}</h3><p className="text-sm text-ink-400 leading-relaxed">{v.desc}</p></motion.div>)}</div></section>
  </div>
);
export default AboutPage;
