import Header from '@/components/Header';
import Footer from '@/components/Footer';

import ContactHero from '@/components/contact/ContactHero';
import ContactInfo from '@/components/contact/ContactInfo';
import BranchList from '@/components/contact/BranchList';
import ContactMap from '@/components/contact/ContactMap';

export default function ContactPage() {
  return (
    <main className="bg-white">
      <Header />

      <ContactHero />

      <ContactInfo />

      <BranchList />

      <ContactMap />

      <Footer />
    </main>
  );
}