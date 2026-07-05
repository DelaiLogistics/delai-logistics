'use client';

export default function ContactHeader() {
  return (
    <div>
      <div className="inline-flex items-center rounded-full bg-orange-50 px-5 py-2">
        <span className="mr-2 h-2 w-2 rounded-full bg-orange-500" />

        <span className="text-sm font-semibold tracking-[0.2em] text-orange-600">
          CONTACT INFORMATION
        </span>
      </div>

      <h2 className="mt-8 text-5xl font-bold text-slate-900">
        湖南德莱物流有限公司
      </h2>

      <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-600">
        欢迎咨询冷链运输、国内空运、汽运配送及仓储服务，
        德莱物流将为您提供专业、高效、安全的一站式物流解决方案。
      </p>
    </div>
  );
}