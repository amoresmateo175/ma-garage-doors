export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "MA Garage Doors",
    image: "https://example.com/images/logo.png",
    telephone: "+1-416-555-123",
    email: "info@magaragedoors.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "CA",
    },
    description:
      "Professional garage door installation, repair and maintenance for residential and commercial properties.",
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