interface ServiceSchemaProps {
  city: string;
  service: string;
  description: string;
  slug: string;
  image?: string;

}

export default function ServiceSchema({
  city,
  service,
  description,
  image,
  slug,
}: ServiceSchemaProps) {

  const schema = {
    "@context": "https://schema.org",

    "@type": "Service",

    "@id": `https://magaragedoors.ca/${slug}#service`,

    name: service,

    serviceType: service,

    description,

    image: image
      ? `https://magaragedoors.ca${image}`
      : "https://magaragedoors.ca/images/logo.png",

    provider: {
      "@id": "https://magaragedoors.ca/#business",
    },

    areaServed: {
      "@type": "City",

      name: city,
    },

    availableChannel: {
      "@type": "ServiceChannel",

      serviceUrl:
        `https://magaragedoors.ca/${slug}`,
    },

    "hoursAvailable": [
      {
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "description": "Emergency service available 24/7"
      }
    ]

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