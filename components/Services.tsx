'use client';

import ServicesHeader from './services/ServicesHeader';
import ServiceCard from './services/ServiceCard';

export default function Services() {
  return (
    <section
      id="services"
      className="bg-white py-20 lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <ServicesHeader />

        <ServiceCard />
      </div>
    </section>
  );
}