export type Service = {
  title: string;
  description: string;
  slug: string;
};

export const services: Service[] = [
  {
    title: "Garage Door Repair",
    description: "Professional repair for residential and commercial garage doors.",
    slug: "garage-door-repair",
  },
  {
    title: "Garage Door Installation",
    description: "Installation of new garage doors for homes and businesses.",
    slug: "garage-door-installation",
  },
  {
    title: "Commercial Overhead Doors",
    description: "Heavy-duty overhead door systems for warehouses and commercial buildings.",
    slug: "commercial-overhead-doors",
  },
  {
    title: "Emergency Garage Door Service",
    description: "24/7 emergency garage door repair and support.",
    slug: "emergency-service",
  },
];