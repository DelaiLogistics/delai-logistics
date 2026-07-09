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
    desc: '全程温控运输，保障生鲜、食品、医药等货物品质安全。',
  },
  {
    icon: Plane,
    title: '国内空运',
    desc: '覆盖全国主要机场，高时效航空物流，当日快速中转。',
  },
  {
    icon: Truck,
    title: '汽运配送',
    desc: '整车、零担、专线运输，全国配送，运输网络覆盖全国。',
  },
  {
    icon: Warehouse,
    title: '仓储服务',
    desc: '提供仓储、中转、分拣、配送一体化供应链服务。',
  },
];

export default function ServiceCard() {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {services.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="
              group
              flex
              h-full
              flex-col
              rounded-[26px]
              border
              border-slate-200
              bg-white
              p-4
              shadow-md
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-orange-200
              hover:shadow-2xl
              sm:p-5
              lg:p-8
            "
          >
            {/* Icon */}
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                bg-orange-50
                transition-all
                duration-300
                group-hover:bg-orange-500
                lg:h-16
                lg:w-16
              "
            >
              <Icon className="h-6 w-6 text-orange-500 transition-all duration-300 group-hover:text-white lg:h-8 lg:w-8" />
            </div>

            {/* Title */}
            <h3 className="mt-5 text-lg font-bold text-slate-900 lg:mt-8 lg:text-2xl">
              {item.title}
            </h3>

            {/* Description */}
            <p className="mt-3 flex-1 text-sm leading-6 text-slate-600 lg:mt-5 lg:text-base lg:leading-8">
              {item.desc}
            </p>

            {/* Link */}
            <div className="mt-5 inline-flex items-center text-sm font-semibold text-orange-500 transition-all duration-300 group-hover:translate-x-1 lg:mt-8 lg:text-base">
              了解更多
              <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </div>
        );
      })}
    </div>
  );
}