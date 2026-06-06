import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import About from "@/components/About";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import CallButton from "@/components/CallButton";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />

      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <About />
        <Process />
        <Gallery />
        <Testimonials />
        <Contact />
        <CTA />
      </main>

      <Footer />
      <CallButton />
    </>
  );
}