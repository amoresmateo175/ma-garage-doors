"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

import {
  ShieldCheck,
  Wrench,
  Clock3,
  BadgeCheck,
} from "lucide-react";

const items = [
  {
    icon: Wrench,
    title: "Skilled Technician",
    description:
      "Hands-on experience working with residential, commercial, and industrial overhead door systems.",
  },

  {
    icon: ShieldCheck,
    title: "Safety Focused",
    description:
      "Every installation and repair is performed following industry standards and safe work practices.",
  },

  {
    icon: Clock3,
    title: "Fast Response",
    description:
      "Quick scheduling and efficient service to minimize downtime and restore operation.",
  },

  {
    icon: BadgeCheck,
    title: "Reliable Service",
    description:
      "Clear communication, honest recommendations, and dependable workmanship on every project.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center">
          <h2 className="section-title">
            Why Property Owners Trust MA Garage Doors
          </h2>

          <p className="section-subtitle mx-auto">
            Professional service backed by practical
            experience, quality workmanship, and a
            commitment to safety.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-14"
        >
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="card text-center"
              >
                <Icon
                  className="mx-auto text-[var(--accent)]"
                  size={40}
                />

                <h3 className="font-bold text-xl mt-4 text-[var(--primary)]">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}