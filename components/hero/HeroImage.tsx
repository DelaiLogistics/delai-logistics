'use client';

import Image from 'next/image';
import {
  Plane,
  Snowflake,
  Truck,
  Warehouse,
} from 'lucide-react';

const services = [
  {
    icon: Snowflake,
    title: '冷链运输',
    desc: '全程温控',
  },
  {
    icon: Plane,
    title: '国内空运',
    desc: '快速直达',
  },
  {
    icon: Truck,
    title: '汽运配送',
    desc: '全国配送',
  },
  {
    icon: Warehouse,
    title: '仓储服务',
    desc: '仓配一体',
  },
];

export default function HeroImage() {
  return (
    <div className="relative">
      {/* Hero Image */}
      <div className="overflow-hidden rounded-[36px] bg-white shadow-[0_30px_70px_rgba(15,23,42,0.18)]">
        <div className="relative aspect-[16/10] w-full">
          <Image
            src="/hero10.jpg"
            alt="Delai Logistics"
            fill
            priority
            sizes="(min-width:1024px) 55vw,100vw"
            className="object-contain object-left bg-white"
          />
        </div>
      </div>

      {/* Floating Cards */}
      <div className="absolute -bottom-16 left-1/2 z-20 w-[92%] -translate-x-1/2 rounded-[30px] bg-white p-5 shadow-[0_25px_60px_rgba(15,23,42,0.12)]">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-slate-200">
          {services.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex flex-col items-center px-6 py-5 text-center"
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50">
                  <Icon className="h-8 w-8 text-orange-500" />
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-base text-slate-500">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Spacer */}
      <div className="h-28" />
    </div>
  );
}