import React from "react";
import { Link } from "react-router-dom";
import { AtSign, Mail, Phone, MapPin, ArrowRight, FlaskConical } from "lucide-react";

const Footer = () => (
  <footer className="relative border-t border-white/10 bg-ink-950 pt-16">
    <div className="container-page">
      <div className="rounded-3xl bg-ink-900/70 border border-white/10 p-8 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-16">
        <div><p className="text-xs uppercase tracking-widest2 text-gold-400 font-bold">Stay informed</p><h3 className="text-2xl sm:text-3xl font-black text-white mt-2">Get laboratory updates</h3><p className="text-ink-400 mt-2 max-w-md">New equipment, useful lab essentials and product updates.</p></div>
        <form onSubmit={(e) => e.preventDefault()} className="w-full lg:w-auto flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl p-1.5 pl-4">
          <input type="email" required placeholder="Your email address" className="bg-transparent outline-none text-sm text-white placeholder:text-ink-500 w-full lg:w-64" />
          <button className="shrink-0 inline-flex items-center gap-1.5 h-10 px-5 rounded-lg bg-gold-500 text-ink-950 text-sm font-bold">Subscribe <ArrowRight className="w-4 h-4" /></button>
        </form>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-12">
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="inline-flex items-center gap-2"><span className="w-9 h-9 rounded-xl bg-gold-500 text-ink-950 flex items-center justify-center"><FlaskConical className="w-5 h-5" /></span><span className="text-xl font-black text-white">Sci<span className="text-gold-400">Supply</span></span></Link>
          <p className="text-ink-400 text-sm mt-4 leading-relaxed max-w-xs">A modern marketplace for laboratory instruments, glassware, measuring tools and scientific essentials.</p>
          <div className="flex items-center gap-3 mt-5"><a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-ink-300"><AtSign className="w-4 h-4" /></a></div>
        </div>
        <div><h3 className="text-sm font-bold text-white uppercase tracking-wide mb-4">Store</h3><ul className="space-y-3 text-sm text-ink-400"><li><Link to="/shop">All Products</Link></li><li><Link to="/about">About Us</Link></li><li><Link to="/wishlist">Wishlist</Link></li><li><Link to="/cart">Cart</Link></li></ul></div>
        <div><h3 className="text-sm font-bold text-white uppercase tracking-wide mb-4">Categories</h3><ul className="space-y-3 text-sm text-ink-400"><li>Laboratory Instruments</li><li>Lab Glassware</li><li>Measuring Equipment</li><li>Safety Equipment</li></ul></div>
        <div><h3 className="text-sm font-bold text-white uppercase tracking-wide mb-4">Contact</h3><ul className="space-y-3 text-sm text-ink-400"><li className="flex gap-2"><MapPin className="w-4 h-4 text-gold-400 shrink-0" /> New Delhi, India</li><li className="flex gap-2"><Mail className="w-4 h-4 text-gold-400 shrink-0" /> support@scisupply.in</li><li className="flex gap-2"><Phone className="w-4 h-4 text-gold-400 shrink-0" /> +91 00000 00000</li></ul></div>
      </div>
      <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-500"><span>© {new Date().getFullYear()} SciSupply. All rights reserved.</span><div className="flex gap-5"><Link to="/about">About</Link><span>Privacy</span><span>Terms</span></div></div>
    </div>
  </footer>
);
export default Footer;
