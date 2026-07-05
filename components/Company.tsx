'use client';

import CompanyHeader from './company/CompanyHeader';
import CompanyStrategy from './company/CompanyStrategy';
import CompanyGallery from './company/CompanyGallery';

export default function Company() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <CompanyHeader />

        <div className="mt-20">
          <CompanyStrategy />
        </div>

        <CompanyGallery />

      </div>
    </section>
  );
}