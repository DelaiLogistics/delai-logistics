import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Company from '@/components/Company';
import Services from '@/components/Services';
import WhyChoose from '@/components/WhyChoose';
import BusinessCases from '@/components/BusinessCases';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-white">
      <Header />

      <Hero />

      <Company />

      <Services />

      <WhyChoose />

      <BusinessCases />

      <section id="contact">
        <ContactCTA />
      </section>

      <Footer />
    </main>
  );
}