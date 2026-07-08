'use client';

import CompanyHeader from './company/CompanyHeader';
import CompanyStrategy from './company/CompanyStrategy';
import CompanyGallery from './company/CompanyGallery';

export default function Company() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <CompanyHeader />

        <div className="mt-14 lg:mt-20">
          <CompanyStrategy />
        </div>

        <div className="mt-16 lg:mt-24">
          <CompanyGallery />
        </div>
      </div>
    </section>
  );
}