"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const steps = [
  {
    number: "01",
    title: "Contact Us",
    description:
      "Tell us about your garage door or equipment issue.",
  },

  {
    number: "02",
    title: "Inspection",
    description:
      "We assess the situation and provide a clear recommendation.",
  },

  {
    number: "03",
    title: "Repair or Installation",
    description:
      "Work is completed safely and professionally.",
  },

  {
    number: "04",
    title: "Final Testing",
    description:
      "Every system is tested to ensure reliable operation.",
  },
];

export default function Process() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center">
          <h2 className="section-title">
            Simple and Efficient Process
          </h2>

          <p className="section-subtitle mx-auto">
            From the first call to the final inspection,
            we focus on delivering a smooth and reliable
            service experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-14">
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="card relative"
            >
              <span className="text-5xl font-bold text-orange-100">
                {step.number}
              </span>

              <h3 className="font-bold text-xl mt-5 text-[var(--primary)]">
                {step.title}
              </h3>

              <p className="mt-3 text-slate-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}