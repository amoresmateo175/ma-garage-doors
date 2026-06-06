import { cities, services } from "@/data/seo";
import { notFound } from "next/navigation";
import { Phone } from "lucide-react";
import Link from "next/link";

type Props = {
  params: {
    city: string;
    service: string;
  };
};

export function generateStaticParams() {
  const paths: { city: string; service: string }[] = [];

  cities.forEach((city) => {
    services.forEach((service) => {
      paths.push({
        city,
        service: service.slug,
      });
    });
  });

  return paths;
}

export function generateMetadata({ params }: Props) {
  const city = params.city.replace("-", " ");
  const service = services.find((s) => s.slug === params.service);

  if (!service) return {};

  return {
    title: `${service.title} in ${city} | MA Garage Doors`,
    description: `Professional ${service.title.toLowerCase()} in ${city}. Fast, reliable residential and commercial service.`,
  };
}

export default function Page({ params }: Props) {
  const city = params.city.replace("-", " ");
  const service = services.find((s) => s.slug === params.service);

  if (!service) return notFound();

  return (
    <>
      {/* SIMPLE SEO NAVBAR */}
      <header className="border-b bg-white">
        <div className="container-custom h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-[var(--primary)]"
          >
            MA Garage Doors
          </Link>

          {/* CTA */}
          <a
            href="tel:+14165551234"
            className="btn-primary flex items-center gap-2"
          >
            <Phone size={16} />
            Call Now
          </a>
        </div>
      </header>

      {/* PAGE CONTENT */}
      <main className="container-custom py-20 max-w-3xl">
        
        {/* H1 SEO */}
        <h1 className="text-4xl font-bold text-[var(--primary)]">
          {service.title} in {city}
        </h1>

        <p className="mt-6 text-slate-600 text-lg">
          MA Garage Doors provides professional {service.title.toLowerCase()} in {city} for residential, commercial, and industrial properties.
        </p>

        {/* CTA BOX */}
        <div className="mt-10 p-6 bg-[var(--light)] border rounded-xl">
          <h2 className="text-xl font-bold text-[var(--primary)]">
            Need service in {city} today?
          </h2>

          <p className="mt-2 text-slate-600">
            Call now for fast response and professional service.
          </p>

          <a
            href="tel:+14165551234"
            className="btn-primary inline-flex items-center gap-2 mt-5"
          >
            <Phone size={18} />
            Call Now
          </a>
        </div>

        {/* SEO CONTENT */}
        <section className="mt-12 space-y-4 text-slate-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-[var(--primary)]">
            Trusted Garage Door Service in {city}
          </h2>

          <p>
            MA Garage Doors specializes in {service.title.toLowerCase()} across {city}.
            We work with homeowners, property managers, warehouses, and commercial facilities.
          </p>

          <p>
            Our focus is fast response times, safety, and long-lasting repairs.
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

          {/* BACK HOME LINK */}
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