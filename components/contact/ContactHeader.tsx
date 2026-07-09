'use client';

export default function ContactHeader() {
  return (
    <div>
      {/* Badge */}
      <div className="inline-flex items-center rounded-full bg-orange-50 px-4 py-2 sm:px-5">
        <span className="mr-2 h-2 w-2 rounded-full bg-orange-500" />

        <span className="text-xs font-semibold tracking-[0.2em] text-orange-600 sm:text-sm">
          CONTACT INFORMATION
        </span>
      </div>

      {/* Title */}
      <h2 className="mt-6 text-[30px] font-bold leading-tight tracking-tight whitespace-nowrap text-slate-900 sm:mt-8 sm:text-5xl">
        湖南德莱物流有限公司
      </h2>

      {/* Description */}
      <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:mt-6 sm:text-lg sm:leading-9">
        欢迎咨询冷链运输、国内空运、汽运配送及仓储服务，
        德莱物流将为您提供专业、高效、安全的一站式物流解决方案。
      </p>
    </div>
  );
}