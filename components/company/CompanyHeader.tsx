'use client';

export default function CompanyHeader() {
  return (
    <div className="mx-auto max-w-4xl text-center">
      {/* Badge */}
      <div className="inline-flex items-center rounded-full bg-orange-50 px-5 py-2">
        <span className="mr-2 h-2 w-2 rounded-full bg-orange-500" />
        <span className="text-sm font-semibold tracking-[0.2em] text-orange-600">
          COMPANY STRATEGY
        </span>
      </div>

      {/* Title */}
      <h2 className="mt-8 text-5xl font-bold leading-tight text-slate-900 lg:text-6xl">
        公司五年战略
        <span className="mt-3 block text-orange-500">
          打造湖南冷链零担物流头部企业
        </span>
      </h2>

      {/* Divider */}
      <div className="mx-auto mt-8 h-1 w-20 rounded-full bg-orange-500" />

      {/* Content */}
      <div className="mx-auto mt-10 max-w-4xl space-y-6 text-lg leading-9 text-slate-600">
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