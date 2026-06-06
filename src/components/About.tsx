"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeLeft, fadeRight } from "@/lib/animations";

export default function About() {
  return (
    <section
      id="about"
      className="section-padding bg-[var(--light)]"
    >
      <div className="container-custom grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Image
            src="/images/about.jpg"
            alt="Garage Door Technician"
            width={700}
            height={700}
            className="rounded-3xl"
          />
        </motion.div>

        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="text-[var(--accent)] font-semibold">
            About MA Garage Doors
          </span>

          <h2 className="section-title mt-3">
            Keeping Homes and Businesses Moving
          </h2>

          <p className="mt-6 text-slate-600 leading-relaxed">
            A properly functioning garage door is more
            than convenience — it is security,
            accessibility, and daily reliability.
          </p>

          <p className="mt-4 text-slate-600 leading-relaxed">
            At MA Garage Doors, we understand how
            important overhead door systems are for
            homeowners, property managers, warehouses,
            and commercial facilities. Whether it is a
            residential garage door that won't open or a
            loading dock system affecting daily
            operations, our goal is to provide dependable
            solutions that restore safety and
            functionality as quickly as possible.
          </p>

          <p className="mt-4 text-slate-600 leading-relaxed">
            We take pride in delivering quality
            workmanship, attention to detail, and
            service that customers can rely on long
            after the job is completed.
          </p>
        </motion.div>
      </div>
    </section>
  );
}