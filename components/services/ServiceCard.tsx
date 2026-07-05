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
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
      {services.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="group rounded-[30px] border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-orange-200 hover:shadow-2xl"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 transition group-hover:bg-orange-500">
              <Icon className="h-8 w-8 text-orange-500 transition group-hover:text-white" />
            </div>

            <h3 className="mt-8 text-2xl font-bold text-slate-900">
              {item.title}
            </h3>

            <p className="mt-5 leading-8 text-slate-600">
              {item.desc}
            </p>

            <div className="mt-8 inline-flex items-center font-semibold text-orange-500 transition group-hover:translate-x-1">
              了解更多
              <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </div>
        );
      })}
    </div>
  );
}