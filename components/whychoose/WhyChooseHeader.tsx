'use client';

export default function WhyChooseHeader() {
  return (
    <div className="mx-auto mb-20 max-w-3xl text-center">
      <div className="inline-flex items-center rounded-full bg-orange-50 px-5 py-2">
        <span className="mr-2 h-2 w-2 rounded-full bg-orange-500" />

        <span className="text-sm font-semibold tracking-[0.2em] text-orange-600">
          WHY CHOOSE DELAI
        </span>
      </div>

      <h2 className="mt-8 text-5xl font-bold text-slate-900">
        为什么选择德莱物流
      </h2>

      <p className="mt-8 text-lg leading-9 text-slate-600">
        十余年专注冷链运输、国内空运、汽运配送及仓储服务，
        打造安全、高效、稳定的一站式供应链物流解决方案，
        持续为客户创造更高价值。
      </p>
    </div>
  );
}