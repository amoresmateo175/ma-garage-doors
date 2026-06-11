import { Phone } from "lucide-react";

export default function CallButton() {
  return (
    <a
      href="tel:+1416555123"
      className="fixed bottom-6 right-6 bg-[var(--accent)] text-white p-4 rounded-full shadow-lg hover:scale-105 transition"
    >
      <Phone />
    </a>
  );
}