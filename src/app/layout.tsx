import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.magaragedoors.ca"),

  title: {
    default: "MA Garage Doors | Garage Door Repair & Installation",
    template: "%s | MA Garage Doors",
  },

  description:
    "Professional garage door installation, repair, maintenance, commercial overhead doors, loading dock equipment, and emergency garage door services across the Greater Toronto Area.",

  applicationName: "MA Garage Doors",

  authors: [
    {
      name: "MA Garage Doors",
      url: "https://www.magaragedoors.ca",
    },
  ],

  creator: "MA Garage Doors",

  publisher: "MA Garage Doors",

  category: "Home Services",

  keywords: [
    "garage door repair",
    "garage door installation",
    "garage door replacement",
    "garage door maintenance",
    "garage door opener repair",
    "commercial overhead doors",
    "loading dock equipment",
    "garage door technician",
    "garage doors Toronto",
    "garage doors Vaughan",
    "garage doors Mississauga",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {

    title:
      "MA Garage Doors | Garage Door Repair & Installation",

    description:
      "Professional garage door repair, installation and emergency services across Toronto and surrounding areas.",

    url:
      "https://www.magaragedoors.ca",

    siteName:
      "MA Garage Doors",

    locale:
      "en_CA",

    type:
      "website",

    images: [
      {
        url:
          "/images/garage-door-og.jpg",

        width:
          1200,

        height:
          630,

        alt:
          "MA Garage Doors",
      },
    ],

  },

  twitter: {
    card: "summary_large_image",

    title: "MA Garage Doors",

    description:
      "Professional garage door installation and repair services.",

    images: ["/twitter-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },

  manifest: "/manifest.webmanifest",

  /*
  CORREGIR CUANDO SE HAYA VERIFICADO CON GOOGLE SEARCH CONSOLE

  verification: {
    google: "GOOGLE_SEARCH_CONSOLE_CODE",
  },
  */

  referrer: "origin-when-cross-origin",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}