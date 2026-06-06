import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container-custom grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-xl font-bold">MA Garage Doors</h3>
          <p className="mt-3 text-white/70">
            Residential and commercial garage door installation, repair, and maintenance services.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <div className="mt-3 space-y-2 text-white/70">
            <Link href="#services">Services</Link>
            <br />
            <Link href="#about">About</Link>
            <br />
            <Link href="#contact">Contact</Link>
          </div>
        </div>

        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="mt-3 text-white/70">
            Phone: +1 (416) 555-1234
          </p>
          <p className="text-white/70">
            Email: info@magaragedoors.com
          </p>
        </div>
      </div>

      <div className="text-center text-white/50 mt-10 text-sm">
        © {new Date().getFullYear()} MA Garage Doors. All rights reserved.
      </div>
    </footer>
  );
}