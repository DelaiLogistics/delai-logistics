'use client';

import {
  CalendarDays,
  MapPinned,
  Headset,
  Clock3,
} from 'lucide-react';

const stats = [
  {
    icon: CalendarDays,
    value: '2013',
    label: '成立时间',
  },
  {
    icon: MapPinned,
    value: '4',
    label: '核心专线',
  },
  {
    icon: Headset,
    value: '24H',
    label: '客服响应',
  },
  {
    icon: Clock3,
    value: '365',
    label: '全年服务',
  },
];

export default function HeroStats() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">

          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50">
                  <Icon className="h-8 w-8 text-[#0F5EA8]" />
                </div>

                <div className="text-4xl font-bold text-[#0F5EA8]">
                  {item.value}
                </div>

                <div className="mt-3 text-base font-medium text-slate-600">
                  {item.label}
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}