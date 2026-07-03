'use client';

import {
  Snowflake,
  Plane,
  Truck,
  Warehouse,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Snowflake,
    title: '冷链运输',
    description:
      '提供专业冷藏、冷冻运输服务，全程温控管理，保障生鲜食品、乳制品、医药等货物运输品质。',
  },
  {
    icon: Plane,
    title: '国内空运',
    description:
      '依托全国航空运输网络，实现快速、安全、高效的国内航空货运，满足时效要求高的运输需求。',
  },
  {
    icon: Truck,
    title: '汽运配送',
    description:
      '覆盖全国主要城市配送网络，支持整车、零担及城市配送服务，为客户提供灵活运输方案。',
  },
  {
    icon: Warehouse,
    title: '仓储服务',
    description:
      '提供仓储管理、货物中转、分拣包装、库存管理等一体化供应链仓储解决方案。',
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-white py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-blue-50 px-5 py-2 text-sm font-semibold text-[#173A7A]">
            BUSINESS SERVICES
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            核心业务
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            深耕物流行业十余年，围绕冷链运输、国内空运、汽运配送及仓储服务，
            为客户提供更加专业、安全、高效的一站式物流解决方案。
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#173A7A] hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 transition-all duration-300 group-hover:bg-[#173A7A]">

                  <Icon className="h-8 w-8 text-[#173A7A] transition-all duration-300 group-hover:text-white" />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {service.description}
                </p>

                <button className="mt-8 flex items-center font-semibold text-[#173A7A] transition-all duration-300 group-hover:translate-x-1">
                  了解更多

                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            );
          })}

        </div>

        <div className="mt-20 rounded-[32px] bg-[#173A7A] px-10 py-14 text-white lg:flex lg:items-center lg:justify-between">

          <div>

            <p className="text-blue-200">
              DELAI LOGISTICS
            </p>

            <h3 className="mt-3 text-3xl font-bold">
              为您的货物提供更专业、更高效的物流解决方案
            </h3>

            <p className="mt-5 max-w-2xl text-blue-100 leading-8">
              从冷链运输到全国配送，从仓储管理到航空运输，
              德莱物流致力于打造值得信赖的一站式物流服务平台。
            </p>

          </div>

          <a
            href="#contact"
            className="mt-10 inline-flex h-14 items-center rounded-full bg-white px-8 font-semibold text-[#173A7A] transition hover:scale-105 lg:mt-0"
          >
            获取物流方案

            <ArrowRight className="ml-2 h-5 w-5" />
          </a>

        </div>

      </div>
    </section>
  );
}