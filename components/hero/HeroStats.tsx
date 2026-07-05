'use client';

import { heroData } from './heroData';

export default function HeroStats() {
  return (
    <div className="mx-auto mt-12 grid max-w-6xl grid-cols-2 gap-4 lg:grid-cols-4">

      {heroData.stats.map((item) => (

        <div
          key={item.label}
          className="rounded-2xl border border-white/10 bg-white/10 p-6 text-center backdrop-blur"
        >
          <div className="text-3xl font-bold text-white md:text-4xl">
            {item.value}
          </div>

          <div className="mt-2 text-sm tracking-wide text-blue-100">
            {item.label}
          </div>
        </div>

      ))}

    </div>
  );
}