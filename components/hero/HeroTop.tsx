'use client';

import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { heroData } from './heroData';

export default function HeroTop() {
  return (
    <div className="mx-auto w-full max-w-[560px] lg:mx-0 lg:pl-8 xl:pl-14">

      {/* Badge */}
      <div className="flex justify-center lg:justify-start">
        <div className="inline-flex items-center rounded-full bg-orange-100 px-4 py-2.5 sm:px-5">
          <span className="mr-2 h-2 w-2 rounded-full bg-orange-500" />

          <span className="text-xs font-semibold tracking-widest text-orange-600 sm:text-sm">
            {heroData.badge}
          </span>
        </div>
      </div>

      {/* Title */}
      <h1 className="mt-8 text-center text-[38px] font-extrabold leading-[1.12] tracking-[-0.03em] text-slate-900 sm:text-[48px] md:text-[56px] lg:text-left lg:text-[60px] xl:text-[70px]">

        {heroData.title1}

        <br />

        <span className="whitespace-nowrap text-[#1565C0]">
          {heroData.title2}
        </span>

      </h1>

      {/* Description */}
      <div className="mx-auto mt-8 max-w-[520px] text-center text-[16px] leading-8 text-slate-600 sm:text-[17px] lg:mx-0 lg:text-left lg:text-[18px] lg:leading-9">

        <p>成立于2013年，总部位于湖南长沙。专注冷链运输、</p>

        <p>国内空运、汽运配送及仓储服务，重点打造北京、</p>

        <p>上海、西安、海南四大冷链专线。</p>

      </div>

      {/* Phone */}
      <div className="mt-8 flex justify-center lg:justify-start">

        <div className="inline-flex h-14 items-center rounded-full border border-slate-200 bg-white px-6 shadow-lg sm:h-16 sm:px-8">

          <Phone className="mr-3 h-5 w-5 text-orange-500 sm:h-6 sm:w-6" />

          <span className="text-lg font-bold text-slate-900 sm:text-2xl">
            {heroData.phone}
          </span>

        </div>

      </div>

      {/* Buttons */}
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">

        <Link
          href="/contact"
          className="flex h-12 items-center justify-center rounded-xl bg-orange-500 px-8 text-base font-semibold text-white transition hover:bg-orange-600 sm:h-14 sm:min-w-[190px]"
        >
          立即咨询
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>

        <Link
          href="/contact"
          className="flex h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-8 text-base font-semibold text-slate-800 transition hover:bg-slate-50 sm:h-14 sm:min-w-[190px]"
        >
          联系我们
        </Link>

      </div>

    </div>
  );
}