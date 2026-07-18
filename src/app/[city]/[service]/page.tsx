import { cities, services } from "@/data/seo";
import { notFound } from "next/navigation";
import { Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";


import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ServiceSchema from "@/components/ServiceSchema";
import FAQSchema from "@/components/FAQSchema";
import FAQSection from "@/components/FAQSection";
import ServiceImage from "@/components/ServiceImage";

// Generate all SEO routes
export function generateStaticParams() {
  return cities.flatMap((city) =>
    services.map((service) => ({
      city: city.slug,
      service: service.slug,
    }))
  );
}


// Metadata SEO
export async function generateMetadata({ params }: any) {

  const { city, service } = await params;

  const cityData = cities.find(
    (c) => c.slug === city
  );

  const serviceData = services.find(
    (s) => s.slug === service
  );

  if (!cityData || !serviceData) {
    return {};
  }

  const title =
    `${serviceData.title} in ${cityData.name} | MA Garage Doors`;

  const description =
    serviceData.description ??
    `Professional ${serviceData.title.toLowerCase()} in ${cityData.name}. Residential and commercial garage door services with fast response times.`;

  const url =
    `https://magaragedoors.ca/${cityData.slug}/${serviceData.slug}`;

  const image =
    `https://magaragedoors.ca${serviceData.image}`;

  return {

    title,
    description,

    alternates: {
      canonical: url,
    },

    openGraph: {

      title,
      description,
      url,

      siteName:
        "MA Garage Doors",

      locale:
        "en_CA",

      type:
        "website",

      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt:
            `${serviceData.title} in ${cityData.name} - MA Garage Doors`,
        },
      ],
    },

    twitter: {

      card:
        "summary_large_image",

      title,
      description,

      images: [
        image
      ],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function Page({ params }: any) {

  const { city, service } = await params;

  if (!city || !service) {
    return notFound();
  }

  const cityData = cities.find(
    (c) => c.slug === city
  );

  const serviceData = services.find(
    (s) => s.slug === service
  );

  if (!cityData || !serviceData) {
    return notFound();
  }

  const pageUrl =
    `${cityData.slug}/${serviceData.slug}`;

  const description =
    serviceData.description ??
    `Professional ${serviceData.title.toLowerCase()} in ${cityData.name}. Residential and commercial garage door services.`;

  return (
    <>
      {/* Structured Data */}
      <BreadcrumbSchema
        cityName={cityData.name}
        citySlug={cityData.slug}
        serviceName={serviceData.title}
        serviceSlug={serviceData.slug}
      />

      <ServiceSchema
        city={cityData.name}
        service={serviceData.title}
        slug={pageUrl}
        description={description}
        image={serviceData.image}
      />

      <FAQSchema
        faqs={serviceData.faqs ?? []}
      /> 

      {/* NAVBAR */}
      <header className="border-b bg-white">
        <div className="container-custom h-20 flex items-center justify-between">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.svg"
              alt="MA Garage Doors"
              width={180}
              height={50}
              className="h-10 w-auto object-contain hover:scale-105 transition"
            />
          </Link>

          <a
            href="tel:+14374480053"
            className="btn-primary flex items-center gap-2"
          >
            <Phone size={16} />
            Call Now
          </a>
        </div>
      </header>

      {/* CONTENT */}
      <main className="container-custom py-20 max-w-3xl priority">

        <h1 className="text-4xl font-bold text-[var(--primary)]">
          {serviceData.title} in {cityData.name}
        </h1>

        <ServiceImage
          src={serviceData.image}
          alt={
            `${serviceData.title} in ${cityData.name} - MA Garage Doors`
          }
        />

        <p className="mt-6 text-slate-600 text-lg">
          MA Garage Doors provides professional{" "}
          {serviceData.title.toLowerCase()}
          {" "}in {cityData.name}
          for residential, commercial, and industrial properties.
        </p>

        {/* CTA */}
        <div className="mt-10 p-6 bg-[var(--light)] border rounded-xl">
          <h2 className="text-xl font-bold text-[var(--primary)]">
            Need service in {cityData.name} today?
          </h2>

          <p className="mt-2 text-slate-600">
            Call now for fast response and professional service.
          </p>

          <a
            href="tel:+14374480053"
            className="btn-primary inline-flex items-center gap-2 mt-5"
          >
            <Phone size={18} />
            Call Now
          </a>
        </div>

        {/* SEO CONTENT */}
        <section className="mt-12 space-y-4 text-slate-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-[var(--primary)]">
            Trusted Garage Door Service in {cityData.name}
          </h2>

          <p>
            MA Garage Doors specializes in{" "}
            {serviceData.title.toLowerCase()}
            {" "}across {cityData.name}.
            We work with homeowners, property managers, warehouses,
            and commercial facilities.
          </p>

          <p>
            Our focus is fast response times, safety,
            and long-lasting repairs.
          </p>

          <h3 className="text-xl font-semibold mt-6">
            Services include:
          </h3>

          <ul className="list-disc pl-6">
            <li>Emergency garage door repair</li>
            <li>Spring replacement</li>
            <li>Opener troubleshooting</li>
            <li>Commercial overhead door systems</li>
            <li>Preventive maintenance</li>
          </ul>

          <FAQSection
            faqs={serviceData.faqs ?? []}
          />

          <div className="mt-10">
            <Link
              href="/"
              className="text-[var(--accent)] font-medium hover:underline"
            >
              ← Back to MA Garage Doors Home
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}