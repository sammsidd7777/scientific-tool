import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import SectionHeading from "../../components/ui/SectionHeading";

const reviews = [
  { name: "Dr. Rahul Sharma", role: "Research Lab", rating: 5, comment: "Good product quality and the equipment arrived safely packed. The ordering process was simple." },
  { name: "Anjali Verma", role: "University Laboratory", rating: 5, comment: "Useful catalog for regular lab requirements. Product information was clear and delivery was quick." },
  { name: "Amit Patel", role: "Student Researcher", rating: 4, comment: "The equipment quality is good for academic work and the pricing is reasonable." },
];

const ReviewSection = () => (
  <section className="py-16 sm:py-24 bg-ink-900/40 border-y border-white/5">
    <div className="container-page">
      <SectionHeading eyebrow="Customer feedback" title="Trusted by labs and learners" subtitle="Real experiences from people using laboratory products for study, research and professional work." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, i) => (
          <motion.div key={review.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .4, delay: i * .08 }} className="rounded-2xl border border-white/10 bg-ink-900/70 p-7">
            <Quote className="w-8 h-8 text-gold-500/30 mb-4" />
            <p className="text-ink-200 leading-relaxed">“{review.comment}”</p>
            <div className="flex gap-1 mt-6">{Array.from({ length: review.rating }).map((_, i) => <Star key={i} className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />)}</div>
            <div className="mt-4"><h4 className="text-sm font-bold text-white">{review.name}</h4><span className="text-xs text-ink-500">{review.role}</span></div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
export default ReviewSection;
