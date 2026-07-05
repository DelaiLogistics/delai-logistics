'use client';

import HeroTop from './hero/HeroTop';
import HeroImage from './hero/HeroImage';
import HeroStats from './hero/HeroStats';

export default function Hero() {
  return (
    <>
      <section className="overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-24 lg:px-8 lg:pt-24">
          <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.15fr]">
            <HeroTop />
            <HeroImage />
          </div>
        </div>
      </section>

      <HeroStats />
    </>
  );
}