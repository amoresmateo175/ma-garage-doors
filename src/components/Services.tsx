"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { services } from "@/data/services";
import { cities } from "@/data/seo";

import {
  fadeUp,
  staggerContainer,
} from "@/lib/animations";

import {
  House,
  Warehouse,
  Wrench,
  ShieldAlert,
} from "lucide-react";

const icons = [
  House,
  Warehouse,
  Wrench,
  ShieldAlert,
];

// Ciudad destacada para los enlaces desde la Home
const featuredCity =
  cities.find((city) => city.slug === "toronto");

export default function Services() {
  return (
    <section
      id="services"
      className="section-padding bg-[var(--light)]"
    >
      <div className="container-custom">

        {/* HEADER */}

        <div className="text-center">

          <h2 className="section-title">
            Our Services
          </h2>

          <p className="section-subtitle mx-auto">
            Residential and commercial garage door
            solutions including repair, installation,
            maintenance and 24/7 emergency services.
          </p>

        </div>

        {/* SERVICES */}

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

              <motion.div
                key={service.slug}
                variants={fadeUp}
                className="card"
              >

                {/* ICON */}

                <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center mb-5">

                  <Icon
                    size={28}
                    aria-hidden="true"
                    className="text-[var(--accent)]"
                  />

                </div>

                {/* TITLE */}

                <h3 className="font-bold text-xl text-[var(--primary)] mb-3">

                  {service.title}

                </h3>

                {/* DESCRIPTION */}

                <p className="text-slate-600 leading-relaxed">

                  {service.description}

                </p>

                {/* LOCAL INFO */}

                {featuredCity && (

                  <p className="mt-4 text-sm text-slate-500">

                    Serving homeowners and businesses in{" "}

                    <strong>
                      {featuredCity.name}
                    </strong>

                    {" "}and surrounding areas.

                  </p>

                )}

                {/* SEO LINK */}

                {featuredCity && (

                  <Link
                    href={`/${featuredCity.slug}/${service.slug}`}
                    className="inline-block mt-5 text-[var(--accent)] font-semibold hover:underline"
                  >

                    {service.title} in {featuredCity.name} →

                  </Link>

                )}

              </motion.div>

            );

          })}

        </motion.div>

        {/* CTA */}

        <div className="mt-16 text-center">

          <h3 className="text-2xl font-bold text-[var(--primary)]">

            Need Emergency Garage Door Service?

          </h3>

          <p className="mt-2 text-slate-600">

            Fast response for residential and commercial
            garage door repairs across the Greater Toronto Area.

          </p>

          <a
            href="tel:+14374480053"
            className="btn-primary inline-block mt-6"
          >

            Call Now

          </a>

        </div>

      </div>
    </section>
  );
}