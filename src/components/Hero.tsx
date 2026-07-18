"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeLeft, fadeRight } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="py-24">
      <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
        >
          <span className="text-[var(--accent)] font-semibold">
            Residential & Commercial Specialists
          </span>

          <h1 className="text-5xl lg:text-6xl font-bold mt-4 text-[var(--primary)] leading-tight">
            Professional Garage Door Installation & Repair
          </h1>

          <p className="mt-6 text-lg text-slate-600">
            Reliable service, quality workmanship, and fast response for
            homeowners, businesses, warehouses, and industrial facilities.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a href="#contact" className="btn-primary">
              Get Free Estimate
            </a>

            <a
              href="tel:+14374480053"
              className="btn-secondary"
            >
              Call Now
            </a>
          </div>
        </motion.div>

        <motion.div
          variants={fadeRight}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          <Image
            src="/images/hero.webp"
            alt="Garage Door Installation"
            width={700}
            height={700}
            className="rounded-3xl object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}