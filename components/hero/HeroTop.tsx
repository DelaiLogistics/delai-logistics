'use client';

import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { heroData } from './heroData';

export default function HeroTop() {
  return (
    <div className="pl-10 xl:pl-14">

      {/* Badge */}
      <div className="inline-flex items-center rounded-full bg-orange-100 px-6 py-3">
        <span className="mr-3 h-2.5 w-2.5 rounded-full bg-orange-500"></span>

        <span className="text-base font-semibold tracking-wide text-orange-600">
          {heroData.badge}
        </span>
      </div>

      {/* Title */}
      <h1 className="mt-10 text-[72px] font-extrabold leading-[1.05] tracking-[-0.04em] text-slate-900">
        {heroData.title1}

        <br />

        <span className="text-[#1565C0] whitespace-nowrap">
          {heroData.title2}
        </span>
      </h1>

      {/* Description */}
      <div className="mt-10 max-w-[560px] space-y-2 text-[20px] leading-[2] text-slate-600">
        <p>
          成立于2013年，总部位于湖南长沙。专注冷链运输、
        </p>

        <p>
          国内空运、汽运配送及仓储服务，重点打造北京、
        </p>

        <p>
          上海、西安、海南四大冷链专线。
        </p>
      </div>

      {/* Phone */}
      <div className="mt-12">
        <div className="inline-flex h-[76px] items-center rounded-full border border-slate-200 bg-white px-10 shadow-xl">

          <Phone className="mr-5 h-8 w-8 text-orange-500" />

          <span className="text-[28px] font-bold tracking-wide text-slate-900">
            {heroData.phone}
          </span>

        </div>
      </div>

      {/* Buttons */}
      <div className="mt-12 flex gap-6">

        <Link
          href="/contact"
          className="flex h-[66px] min-w-[220px] items-center justify-center rounded-2xl bg-orange-500 text-xl font-semibold text-white transition hover:bg-orange-600"
        >
          立即咨询

          <ArrowRight className="ml-3 h-6 w-6" />
        </Link>

        <Link
          href="/contact"
          className="flex h-[66px] min-w-[220px] items-center justify-center rounded-2xl border border-slate-300 bg-white text-xl font-semibold text-slate-800 transition hover:bg-slate-50"
        >
          联系我们
        </Link>

      </div>

    </div>
  );
}