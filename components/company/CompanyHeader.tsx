'use client';

export default function CompanyHeader() {
  return (
    <div className="mx-auto max-w-4xl text-center">
      {/* Badge */}
      <div className="inline-flex items-center rounded-full bg-orange-50 px-4 py-2 sm:px-5">
        <span className="mr-2 h-2 w-2 rounded-full bg-orange-500" />

        <span className="text-xs font-semibold tracking-[0.22em] text-orange-600 sm:text-sm">
          COMPANY STRATEGY
        </span>
      </div>

      {/* Title */}
      <h2 className="mt-6 text-3xl font-bold leading-tight text-slate-900 sm:mt-8 sm:text-4xl lg:text-6xl">
        公司五年战略

        <span className="mt-2 block text-orange-500 sm:mt-3">
          打造湖南冷链零担物流头部企业
        </span>
      </h2>

      {/* Divider */}
      <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-orange-500 sm:mt-8 sm:w-20" />

      {/* Content */}
      <div className="mx-auto mt-8 max-w-4xl space-y-5 text-left text-base leading-8 text-slate-600 sm:mt-10 sm:text-center sm:text-lg sm:leading-9">
        <p>
          德莱物流坚持“专注冷链、深耕湖南、服务全国”的发展战略，
          持续完善北京、上海、西安、海南四大精品冷链专线，
          围绕冷链运输、国内空运、汽运配送及仓储服务四大业务板块，
          打造高效、安全、稳定的一站式供应链物流体系。
        </p>

        <p>
          未来五年，公司将持续提升直营网点布局、数字化运营能力及客户服务水平，
          不断提升运输效率与客户体验，致力于成为湖南冷链零担物流头部企业，
          为客户创造更高价值。
        </p>
      </div>
    </div>
  );
}