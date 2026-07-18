import { cities } from "@/data/seo";

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",

    "@type": "LocalBusiness",

    "@id": "https://magaragedoors.ca/#business",

    name: "MA Garage Doors",

    url: "https://magaragedoors.ca",

    logo: "https://magaragedoors.ca/images/logo.png",

    image: "https://magaragedoors.ca/images/logo.png",

    telephone: "+1-437-448-0053",

    email: "info@magaragedoors.ca",

    description:
      "Professional garage door repair, installation, maintenance, commercial overhead doors, and emergency garage door services across the Greater Toronto Area.",

    priceRange: "$$",

    areaServed: cities.map((city) => city.name),

    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",

        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],

        opens: "08:00",

        closes: "18:00",
      },
    ],

    knowsAbout: [
      "Garage Door Repair",
      "Garage Door Installation",
      "Garage Door Maintenance",
      "Commercial Overhead Doors",
      "Garage Door Openers",
      "Garage Door Springs",
      "Emergency Garage Door Service",
    ],

    hasOfferCatalog: {
      "@type": "OfferCatalog",

      name: "Garage Door Services",

      itemListElement: [
        {
          "@type": "Offer",

          itemOffered: {
            "@type": "Service",

            name: "Garage Door Repair",
          },
        },

        {
          "@type": "Offer",

          itemOffered: {
            "@type": "Service",

            name: "Garage Door Installation",
          },
        },

        {
          "@type": "Offer",

          itemOffered: {
            "@type": "Service",

            name: "Commercial Overhead Doors",
          },
        },

        {
          "@type": "Offer",

          itemOffered: {
            "@type": "Service",

            name: "24/7 Emergency Garage Door Repair",
          },
        },
      ],
    },

    /*
    sameAs: [
      "https://facebook.com/YOUR_PAGE",
      "https://instagram.com/YOUR_PROFILE",
    ],
    */

  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}