'use client';

import WhyChooseHeader from './whychoose/WhyChooseHeader';
import WhyChooseGrid from './whychoose/WhyChooseGrid';

export default function WhyChoose() {
  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <WhyChooseHeader />

        <div className="mt-20">
          <WhyChooseGrid />
        </div>
      </div>
    </section>
  );
}