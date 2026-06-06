"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

const images = [
  "/images/work1.jpg",
  "/images/work2.jpg",
  "/images/work3.jpg",
  "/images/work4.jpg",
];

export default function Gallery() {
  return (
    <section id="gallery" className="section-padding bg-[var(--light)]">
      <div className="container-custom text-center">
        <h2 className="section-title">Recent Projects</h2>

        <p className="section-subtitle mx-auto">
          Residential, commercial, and industrial overhead door installations and repairs completed by MA Garage Doors.
        </p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14"
        >
          {images.map((src, i) => (
            <motion.div key={i} variants={fadeUp} className="overflow-hidden rounded-2xl">
              <Image
                src={src}
                alt="Garage door project"
                width={600}
                height={600}
                className="object-cover hover:scale-105 transition duration-500"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}