'use client';

import ServicesHeader from './services/ServicesHeader';
import ServiceCard from './services/ServiceCard';

export default function Services() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <ServicesHeader />

        <ServiceCard />
      </div>
    </section>
  );
}