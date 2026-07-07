'use client';

import HeroTop from './hero/HeroTop';
import HeroImage from './hero/HeroImage';

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1680px] px-8 py-20 xl:px-16">

        <div className="grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">

          <HeroTop />

          <HeroImage />

        </div>

      </div>
    </section>
  );
}