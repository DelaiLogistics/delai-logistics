'use client';

import HeroTop from './hero/HeroTop';
import HeroImage from './hero/HeroImage';

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 md:py-14 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <HeroTop />
          <HeroImage />
        </div>
      </div>
    </section>
  );
}