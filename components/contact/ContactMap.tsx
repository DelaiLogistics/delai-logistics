'use client';

import {
  MapPinned,
  ArrowRight,
} from 'lucide-react';

const cities = [
  '长沙总部',
  '北京',
  '上海',
  '西安',
  '海口',
  '三亚',
];

export default function ContactMap() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="overflow-hidden rounded-[36px] bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-10 py-20 lg:px-20">

          <div className="grid items-center gap-16 lg:grid-cols-[1fr_420px]">

            {/* Left */}
            <div>

              <div className="inline-flex items-center rounded-full bg-orange-500/10 px-5 py-2">
                <span className="mr-2 h-2 w-2 rounded-full bg-orange-500" />

                <span className="text-sm font-semibold tracking-[0.2em] text-orange-400">
                  SERVICE NETWORK
                </span>
              </div>

              <h2 className="mt-8 text-5xl font-bold leading-tight text-white">
                服务覆盖全国
              </h2>

              <p className="mt-8 text-xl leading-10 text-slate-300">
                德莱物流持续完善全国物流网络，
                重点打造北京、上海、西安、海南四大精品冷链专线，
                为客户提供更加高效、安全、稳定的一站式物流服务。
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                {cities.map((city) => (

                  <div
                    key={city}
                    className="rounded-full border border-white/10 bg-white/10 px-5 py-3 text-white backdrop-blur"
                  >
                    {city}
                  </div>

                ))}

              </div>

            </div>

            {/* Right */}

            <div className="rounded-[30px] bg-white p-10">

              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-orange-50">

                <MapPinned className="h-12 w-12 text-orange-500" />

              </div>

              <h3 className="mt-8 text-center text-3xl font-bold text-slate-900">
                服务覆盖区域
              </h3>

              <p className="mt-5 text-center leading-8 text-slate-600">
                北京 · 上海 · 西安
                <br />
                长沙 · 海口 · 三亚
              </p>

              <div className="mt-10 rounded-2xl bg-orange-50 p-6 text-center">

                <div className="text-5xl font-bold text-orange-500">
                  6+
                </div>

                <div className="mt-3 text-slate-700">
                  核心直营网点
                </div>

              </div>

              <button className="mt-8 flex h-14 w-full items-center justify-center rounded-2xl bg-orange-500 text-lg font-semibold text-white transition hover:bg-orange-600">

                查看更多营业网点

                <ArrowRight className="ml-3 h-5 w-5" />

              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}