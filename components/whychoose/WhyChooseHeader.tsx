'use client';

export default function WhyChooseHeader() {
  return (
    <div className="mx-auto mb-14 max-w-4xl text-center lg:mb-20">
      <div className="inline-flex items-center rounded-full border border-orange-100 bg-orange-50 px-4 py-2 sm:px-5">
        <span className="mr-2 h-2 w-2 rounded-full bg-orange-500" />

        <span className="text-xs font-semibold tracking-[0.22em] text-orange-600 sm:text-sm">
          WHY CHOOSE US
        </span>
      </div>

      <h2 className="mt-6 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:mt-8 lg:text-6xl">
        为什么选择德莱物流
      </h2>

      <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-orange-500 lg:mt-8 lg:w-20" />

      <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
        十余年冷链物流经验，覆盖全国运输网络，以专业团队、高效运输和稳定服务，
        为客户提供安全可靠的一站式物流解决方案。
      </p>
    </div>
  );
}