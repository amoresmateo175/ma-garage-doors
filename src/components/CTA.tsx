export default function CTA() {
  return (
    <section className="py-20 bg-[var(--primary)] text-white text-center">
      <div className="container-custom">
        <h2 className="text-4xl font-bold">
          Need Garage Door Service Today?
        </h2>

        <p className="mt-4 text-white/80">
          Fast response for residential and commercial garage door repairs and installations.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href="tel:+1416555123" className="btn-primary">
            Call Now
          </a>

          <a href="#contact" className="btn-secondary bg-white text-[var(--primary)]">
            Request Estimate
          </a>
        </div>
      </div>
    </section>
  );
}