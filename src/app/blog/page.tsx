import Link from "next/link";
import { posts } from "@/data/blog";
import { Phone } from "lucide-react";

export default function BlogPage() {
  return (
    <>
      {/* SIMPLE TOP BAR (SEO + BRAND + CTA) */}
      <header className="border-b bg-white">
        <div className="container-custom h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-[var(--primary)]"
          >
            MA Garage Doors
          </Link>

          {/* CTA */}
          <a
            href="tel:+14165551234"
            className="btn-primary flex items-center gap-2"
          >
            <Phone size={16} />
            Call Now
          </a>
        </div>
      </header>

      {/* PAGE CONTENT */}
      <main className="container-custom py-20">
        
        {/* HERO TEXT */}
        <h1 className="text-4xl font-bold text-[var(--primary)]">
          Garage Door Blog
        </h1>

        <p className="mt-4 text-slate-600 max-w-2xl">
          Helpful guides and information about garage door repair, installation, maintenance, and troubleshooting.  
          Learn what to do before calling a technician.
        </p>

        {/* POSTS GRID */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="card block hover:shadow-lg transition"
            >
              <h2 className="text-xl font-bold text-[var(--primary)]">
                {post.title}
              </h2>

              <p className="mt-3 text-slate-600">
                {post.excerpt}
              </p>

              <span className="mt-4 inline-block text-[var(--accent)] font-medium">
                Read more →
              </span>
            </Link>
          ))}
        </div>

        {/* BACK HOME */}
        <div className="mt-16">
          <Link
            href="/"
            className="text-[var(--accent)] font-medium hover:underline"
          >
            ← Back to MA Garage Doors Home
          </Link>
        </div>

        {/* SMALL CTA SECTION */}
        <div className="mt-16 p-8 bg-[var(--light)] border rounded-xl text-center">
          <h2 className="text-2xl font-bold text-[var(--primary)]">
            Need Garage Door Service?
          </h2>

          <p className="mt-2 text-slate-600">
            Call MA Garage Doors for fast residential and commercial repair.
          </p>

          <a
            href="tel:+14165551234"
            className="btn-primary inline-flex items-center gap-2 mt-5"
          >
            <Phone size={18} />
            Call Now
          </a>
        </div>
      </main>
    </>
  );
}