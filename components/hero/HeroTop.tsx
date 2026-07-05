'use client';

import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';
import { heroData } from './heroData';

export default function HeroTop() {
  return (
    <div className="mx-auto max-w-3xl text-center">

      <div className="inline-flex items-center rounded-full bg-orange-100 px-4 py-2">
        <span className="mr-2 h-2 w-2 rounded-full bg-orange-500" />
        <span className="text-sm font-semibold tracking-widest text-orange-600">
          {heroData.badge}
        </span>
      </div>

      <h1 className="mt-8 text-4xl font-bold leading-tight text-white md:text-6xl">
        {heroData.title1}
        <br />
        {heroData.title2}
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-blue-100 md:text-xl">
        {heroData.description}
      </p>

      <div className="mt-8 flex justify-center">
        <div className="flex items-center gap-3 rounded-full bg-white/10 px-6 py-4 backdrop-blur">
          <Phone className="h-6 w-6 text-orange-400" />
          <span className="text-2xl font-bold text-white">
            {heroData.phone}
          </span>
        </div>
      </div>

      <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

        <Link
          href="/contact"
          className="flex items-center justify-center rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600"
        >
          立即咨询
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>

        <Link
          href="/contact"
          className="flex items-center justify-center rounded-xl border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-slate-900"
        >
          联系我们
        </Link>

      </div>

    </div>
  );
}