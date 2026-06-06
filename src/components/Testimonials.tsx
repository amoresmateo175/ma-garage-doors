"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function Testimonials() {
  return (
    <section className="section-padding">
      <div className="container-custom text-center">
        <h2 className="section-title">What Clients Say</h2>

        <p className="section-subtitle mx-auto">
          Real feedback from residential and commercial customers.
        </p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mt-14"
        >
          {testimonials.map((t) => (
            <motion.div key={t.name} variants={fadeUp} className="card text-left">
              <p className="text-slate-600">"{t.text}"</p>
              <h4 className="mt-4 font-bold text-[var(--primary)]">
                {t.name}
              </h4>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}