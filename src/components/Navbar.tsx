"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#gallery" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="container-custom h-20 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.svg"
            alt="MA Garage Doors"
            width={180}
            height={50}
            className="h-10 w-auto object-contain hover:scale-105 transition"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-medium text-slate-700 hover:text-[var(--accent)] transition"
            >
              {link.label}
            </Link>
          ))}

          {/* CTA */}
          <a
            href="tel:+14374480053"
            className="btn-primary flex items-center gap-2"
          >
            <Phone size={16} />
            Call Now
          </a>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-800"
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-200"
          >
            <div className="flex flex-col p-6 gap-5">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-slate-700 font-medium"
                >
                  {link.label}
                </Link>
              ))}

              <a
                href="tel:+14374480053"
                className="btn-primary flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}