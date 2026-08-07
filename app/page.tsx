import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import Trusted from "../components/home/Trusted";
import Services from "../components/home/Services";
import Portfolio from "../components/home/Portfolio";
import Process  from "@/components/home/Process";
import Technologies from "@/components/home/Technologies";
import Testimonials from "@/components/home/Testimonials";
import Pricing from "@/components/home/Pricing";
import FAQ from "@/components/home/FAQ";
import Contact from "@/components/home/Contact";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Trusted />
      <Services />
      <Portfolio />
      <Process />
      <Technologies />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />

    </>
  );
}