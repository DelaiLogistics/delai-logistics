'use client';

import HeroTop from './hero/HeroTop';
import HeroImage from './hero/HeroImage';
import HeroStats from './hero/HeroStats';

export default function Hero() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <HeroTop />
            <HeroImage />
          </div>
        </div>
      </section>

      <HeroStats />
    </>
  );
}