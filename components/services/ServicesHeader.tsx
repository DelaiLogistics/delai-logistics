'use client';

export default function ServicesHeader() {
  return (
    <div className="mx-auto mb-14 max-w-4xl text-center lg:mb-20">
      {/* Badge */}
      <div className="inline-flex items-center rounded-full border border-orange-100 bg-orange-50 px-4 py-2 sm:px-5">
        <span className="mr-2 h-2 w-2 rounded-full bg-orange-500" />

        <span className="text-xs font-semibold tracking-[0.22em] text-orange-600 sm:text-sm">
          CORE BUSINESS
        </span>
      </div>

      {/* Title */}
      <h2 className="mt-6 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:mt-8 lg:text-6xl">
        核心业务服务
      </h2>

      {/* Divider */}
      <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-orange-500 lg:mt-8 lg:w-20" />

      {/* Description */}
      <div className="mx-auto mt-8 max-w-3xl">
        <p className="text-left text-base leading-8 text-slate-600 sm:text-center sm:text-[17px] sm:leading-9 lg:text-lg">
          德莱物流专注冷链运输、国内空运、汽运配送及仓储服务，
          持续完善全国物流网络，为客户提供安全、高效、稳定的一站式供应链物流解决方案。
        </p>
      </div>
    </div>
  );
}