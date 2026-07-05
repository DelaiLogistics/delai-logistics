'use client';

import { ArrowRight } from 'lucide-react';

const tags = [
  '北京冷链',
  '上海冷链',
  '西安冷链',
  '海南冷链',
];

export default function HeroTop() {
  return (
    <div className="max-w-xl">
      {/* Badge */}
      <div className="inline-flex items-center rounded-full bg-orange-50 px-5 py-3">
        <span className="mr-3 h-2.5 w-2.5 rounded-full bg-orange-500" />
        <span className="text-base font-semibold tracking-wide text-orange-600">
          DELAI LOGISTICS
        </span>
      </div>

      {/* Title */}
      <h1 className="mt-8 text-6xl font-extrabold leading-[1.15] tracking-tight text-slate-900">
        让每一份托付
        <br />
        准时、安全送达
      </h1>

      {/* Description */}
      <p className="mt-8 text-xl leading-10 text-slate-600">
        德莱物流成立于2013年，总部位于湖南长沙，
        专注国内空运、冷链运输、汽运配送及仓储服务，
        持续打造北京、上海、西安、海南四大精品冷链专线，
        为客户提供安全、高效、稳定的一站式物流解决方案。
      </p>

      {/* Tags */}
      <div className="mt-10 flex flex-wrap gap-4">
        {tags.map((tag) => (
          <div
            key={tag}
            className="rounded-full border border-slate-200 bg-white px-6 py-3 text-base font-medium text-slate-700 shadow-sm transition hover:border-orange-300 hover:shadow-md"
          >
            {tag}
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-12 flex gap-5">
        <button className="flex h-16 items-center rounded-2xl bg-orange-500 px-10 text-lg font-semibold text-white transition hover:bg-orange-600">
          获取物流方案
          <ArrowRight className="ml-3 h-5 w-5" />
        </button>

        <button className="flex h-16 items-center rounded-2xl border border-slate-300 bg-white px-10 text-lg font-semibold text-slate-700 transition hover:border-orange-500 hover:text-orange-500">
          联系我们
        </button>
      </div>
    </div>
  );
}