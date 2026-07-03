'use client';

import {
  MapPinned,
  ArrowRight,
  Truck,
  Warehouse,
} from 'lucide-react';

const routes = [
  {
    city: '北京',
    description: '华北核心冷链专线',
  },
  {
    city: '上海',
    description: '华东冷链运输网络',
  },
  {
    city: '西安',
    description: '西北区域配送中心',
  },
  {
    city: '海南',
    description: '岛内冷链运输专线',
  },
];

export default function Network() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">
            TRANSPORT NETWORK
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 lg:text-5xl">
            核心冷链运输网络
          </h2>

          <p className="mt-6 text-lg leading-9 text-slate-600">
            依托长沙总部，重点打造北京、上海、西安、海南四大冷链专线，
            实现干线运输、城市配送及仓储联动，为客户提供更加稳定高效的物流服务。
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.3fr_1fr]">

          {/* Left */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-10">

            <div className="flex items-center gap-3">
              <MapPinned className="text-cyan-600" size={28} />
              <h3 className="text-2xl font-bold text-slate-900">
                长沙总部
              </h3>
            </div>

            <div className="mt-12 space-y-8">

              {routes.map((item) => (
                <div
                  key={item.city}
                  className="flex items-center gap-5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 text-white font-bold">
                    {item.city}
                  </div>

                  <ArrowRight className="text-cyan-500" />

                  <div>
                    <div className="font-semibold text-slate-900">
                      {item.description}
                    </div>

                    <div className="text-slate-500">
                      长沙 ⇋ {item.city}
                    </div>
                  </div>
                </div>
              ))}

            </div>

          </div>

          {/* Right */}
          <div className="space-y-6">

            <div className="rounded-3xl border border-slate-200 p-8 shadow-sm">
              <Truck className="text-cyan-600" size={32} />

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                干线运输
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                核心城市专线运输，
                提供稳定时效及全程冷链保障。
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-8 shadow-sm">
              <Warehouse className="text-cyan-600" size={32} />

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                仓配联动
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                仓储、运输、配送协同运作，
                满足客户一体化供应链需求。
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}