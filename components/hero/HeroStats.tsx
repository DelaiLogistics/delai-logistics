'use client';

import { heroData } from './heroData';

export default function HeroStats() {
  return (
    <section className="bg-red-500 pb-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 lg:grid-cols-4 lg:px-8">

        {heroData.stats.map((item) => (
          <div
            key={item.label}
            className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="text-4xl font-bold text-[#0F5EA8] md:text-5xl">
              {item.value}
            </div>

            <div className="mt-3 text-base font-medium text-slate-500">
              {item.label}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}