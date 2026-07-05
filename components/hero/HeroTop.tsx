'use client';

import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';
import { heroData } from './heroData';

export default function HeroTop() {
  return (
    <div className="mx-auto max-w-3xl lg:mx-0 lg:text-left text-center">

      <div className="inline-flex items-center rounded-full bg-orange-100 px-4 py-2">
        <span className="mr-2 h-2 w-2 rounded-full bg-orange-500" />
        <span className="text-sm font-semibold tracking-widest text-orange-600">
          {heroData.badge}
        </span>
      </div>

      <h1 className="mt-8 text-4xl font-bold leading-tight text-slate-900 md:text-6xl">
        {heroData.title1}
        <br />
        <span className="text-[#0F5EA8]">
          {heroData.title2}
        </span>
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-600 lg:mx-0 mx-auto">
        {heroData.description}
      </p>

      <div className="mt-8 flex justify-center lg:justify-start">
        <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-6 py-4 shadow-sm">
          <Phone className="h-6 w-6 text-orange-500" />
          <span className="text-2xl font-bold text-slate-900">
            {heroData.phone}
          </span>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row justify-center lg:justify-start">

        <Link
          href="/contact"
          className="flex items-center justify-center rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600"
        >
          立即咨询
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>

        <Link
          href="/contact"
          className="flex items-center justify-center rounded-xl border border-slate-300 px-8 py-4 font-semibold text-slate-800 transition hover:bg-slate-100"
        >
          联系我们
        </Link>

      </div>

    </div>
  );
}