'use client';

import {
  Snowflake,
  Plane,
  Truck,
  Warehouse,
  Clock3,
  ShieldCheck,
} from 'lucide-react';

const advantages = [
  {
    icon: Snowflake,
    title: '全程温控运输',
    desc: '全程冷链监控，确保货物品质安全。',
  },
  {
    icon: Plane,
    title: '国内空运',
    desc: '覆盖全国主要机场，高时效运输。',
  },
  {
    icon: Truck,
    title: '全国运输网络',
    desc: '北京、上海、西安、海南精品专线。',
  },
  {
    icon: Warehouse,
    title: '仓储配送',
    desc: '仓储、中转、分拣、配送一体化。',
  },
  {
    icon: Clock3,
    title: '24小时服务',
    desc: '快速响应客户需求，全程贴心服务。',
  },
  {
    icon: ShieldCheck,
    title: '安全可靠',
    desc: '专业团队运营，为客户提供稳定物流保障。',
  },
];

export default function WhyChooseGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {advantages.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="group rounded-3xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-orange-200 hover:shadow-2xl"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 transition group-hover:bg-orange-500">
              <Icon className="h-8 w-8 text-orange-500 transition group-hover:text-white" />
            </div>

            <h3 className="mt-8 text-2xl font-bold text-slate-900">
              {item.title}
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              {item.desc}
            </p>
          </div>
        );
      })}
    </div>
  );
}