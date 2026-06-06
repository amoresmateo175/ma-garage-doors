import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MA Garage Doors | Garage Door Repair & Installation",
  description:
    "Professional garage door installation, repair, maintenance, commercial overhead doors and loading dock equipment services.",

  keywords: [
    "garage door repair",
    "garage door installation",
    "commercial overhead doors",
    "garage door maintenance",
    "loading dock equipment",
    "garage door technician",
  ],

  openGraph: {
    title: "MA Garage Doors",
    description:
      "Professional garage door installation, repair and maintenance.",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
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