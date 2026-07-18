interface BreadcrumbSchemaProps {
  cityName: string;
  citySlug: string;
  serviceName: string;
  serviceSlug: string;
}

export default function BreadcrumbSchema({
  cityName,
  citySlug,
  serviceName,
  serviceSlug,
}: BreadcrumbSchemaProps) {

  const schema = {
    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",

        position: 1,

        name: "Home",

        item: "https://magaragedoors.ca",
      },

      {
        "@type": "ListItem",

        position: 2,

        name: cityName,

        item: `https://magaragedoors.ca/${citySlug}`,
      },

      {
        "@type": "ListItem",

        position: 3,

        name: serviceName,

        item: `https://magaragedoors.ca/${citySlug}/${serviceSlug}`,
      },
    ],
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