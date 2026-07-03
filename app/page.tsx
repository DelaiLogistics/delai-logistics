import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Company from "@/components/Company";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import ServiceProcess from "@/components/ServiceProcess";
import TransportNetwork from "@/components/TransportNetwork";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Company />
        <Services />
        <WhyChoose />
        <ServiceProcess />
        <TransportNetwork />
        <Contact />
      </main>

      <Footer />
    </>
  );
}