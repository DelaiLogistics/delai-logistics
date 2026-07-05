'use client';

import HeroTop from './HeroTop';
import HeroImage from './HeroImage';
import HeroStats from './HeroStats';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0F2D5C] via-[#173A7A] to-[#0F2D5C] pt-12 pb-20">

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <HeroTop />

        <HeroImage />

        <HeroStats />

      </div>

    </section>
  );
}