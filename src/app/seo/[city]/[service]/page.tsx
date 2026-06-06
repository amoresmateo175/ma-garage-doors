import { cities, services } from "@/data/seo";
import { notFound } from "next/navigation";
import { Phone } from "lucide-react";
import Link from "next/link";

// 🔥 Generate all SEO routes
export function generateStaticParams() {
  return cities.flatMap((city) =>
    services.map((service) => ({
      city,
      service: service.slug,
    }))
  );
}

// 🔥 NEXT 15: metadata must be async
export async function generateMetadata({ params }: any) {
  const { city, service } = await params;

  const serviceData = services.find((s) => s.slug === service);
  const cityName = city?.replace(/-/g, " ") ?? "";

  if (!serviceData || !cityName) return {};

  return {
    title: `${serviceData.title} in ${cityName} | MA Garage Doors`,
    description: `Professional ${serviceData.title.toLowerCase()} in ${cityName}. Fast, reliable residential and commercial service.`,
  };
}

// 🔥 NEXT 15: page is async + params must be awaited
export default async function Page({ params }: any) {
  const { city, service } = await params;

  if (!city || !service) {
    return notFound();
  }

  const cityName = city.replace(/-/g, " ").trim();

  const serviceData = services.find(
    (s) => s.slug === service
  );

  if (!serviceData) {
    return notFound();
  }

  return (
    <>
      {/* NAVBAR */}
      <header className="border-b bg-white">
        <div className="container-custom h-20 flex items-center justify-between">

          <Link
            href="/"
            className="text-xl font-bold text-[var(--primary)]"
          >
            MA Garage Doors
          </Link>

          <a
            href="tel:+14165551234"
            className="btn-primary flex items-center gap-2"
          >
            <Phone size={16} />
            Call Now
          </a>
        </div>
      </header>

      {/* CONTENT */}
      <main className="container-custom py-20 max-w-3xl">

        <h1 className="text-4xl font-bold text-[var(--primary)]">
          {serviceData.title} in {cityName}
        </h1>

        <p className="mt-6 text-slate-600 text-lg">
          MA Garage Doors provides professional{" "}
          {serviceData.title.toLowerCase()} in {cityName} for residential, commercial, and industrial properties.
        </p>

        {/* CTA */}
        <div className="mt-10 p-6 bg-[var(--light)] border rounded-xl">
          <h2 className="text-xl font-bold text-[var(--primary)]">
            Need service in {cityName} today?
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
            Trusted Garage Door Service in {cityName}
          </h2>

          <p>
            MA Garage Doors specializes in {serviceData.title.toLowerCase()} across {cityName}.
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