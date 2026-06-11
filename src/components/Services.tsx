"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import { cities } from "@/data/seo";
import { fadeUp, staggerContainer } from "@/lib/animations";
import {
  House,
  Warehouse,
  Wrench,
  ShieldAlert,
} from "lucide-react";

const icons = [House, Warehouse, Wrench, ShieldAlert];

// usamos 1 ciudad principal para preview SEO
const featuredCity = "toronto";

export default function Services() {
  return (
    <section id="services" className="section-padding bg-[var(--light)]">
      <div className="container-custom">

        {/* HEADER */}
        <div className="text-center">
          <h2 className="section-title">Our Services</h2>

          <p className="section-subtitle mx-auto">
            Residential and commercial garage door solutions including repair,
            installation, maintenance, and emergency service.
          </p>
        </div>

        {/* SERVICES GRID */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-14"
        >
          {services.map((service, index) => {
            const Icon = icons[index];

            return (
              <motion.div key={service.title} variants={fadeUp} className="card">
                
                {/* ICON */}
                <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center mb-5">
                  <Icon size={28} className="text-[var(--accent)]" />
                </div>

                {/* TITLE */}
                <h3 className="font-bold text-xl text-[var(--primary)] mb-3">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-slate-600 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* 🔥 SEO LINK (IMPORTANT PART) */}
                <Link
                  href={`/seo/${featuredCity}/${service.slug}`}
                  className="text-[var(--accent)] font-medium hover:underline"
                >
                  View service in {featuredCity} →
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* 🔥 GLOBAL CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-[var(--primary)]">
            Need Emergency Garage Door Service?
          </h3>

          <p className="mt-2 text-slate-600">
            Fast response for residential and commercial repairs in your area.
          </p>

          <a
            href="tel:+1416555123"
            className="btn-primary inline-block mt-6"
          >
            Call Now
          </a>
        </div>

      </div>
    </section>
  );
}