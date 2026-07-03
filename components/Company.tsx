'use client';

import Image from 'next/image';
import { Award, Building2, CalendarDays, MapPinned } from 'lucide-react';

const stats = [
  {
    value: '2013',
    label: '公司成立',
    icon: CalendarDays,
  },
  {
    value: '4',
    label: '核心冷链专线',
    icon: MapPinned,
  },
  {
    value: '24H',
    label: '快速响应',
    icon: Building2,
  },
  {
    value: '365',
    label: '全年稳定运营',
    icon: Award,
  },
];

export default function Company() {
  return (
    <section
      id="about"
      className="bg-[#F7F9FC] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* 图片 */}

          <div className="relative">

            <Image
              src="/about.jpg"
              alt="德莱物流"
              width={900}
              height={700}
              className="rounded-[32px] object-cover shadow-2xl"
            />

            <div className="absolute -bottom-10 left-8 rounded-3xl bg-white p-8 shadow-2xl">

              <div className="text-5xl font-bold text-[#173A7A]">
                12+
              </div>

              <div className="mt-2 text-slate-600">
                年物流行业经验
              </div>

            </div>

          </div>

          {/* 内容 */}

          <div>

            <span className="inline-flex rounded-full bg-blue-50 px-5 py-2 text-sm font-semibold text-[#173A7A]">
              ABOUT DELAI
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
              关于德莱物流
            </h2>

            <p className="mt-8 text-lg leading-9 text-slate-600">
              德莱物流成立于2013年，总部位于湖南长沙，
              专注冷链运输、国内空运、汽运配送及仓储服务，
              持续打造北京、上海、西安、海南四大冷链专线，
              为客户提供安全、高效、稳定的一站式物流解决方案。
            </p>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              公司始终坚持客户至上、服务为本，
              持续提升运输效率和服务品质，
              致力于成为湖南冷链零担物流头部企业。
            </p>

            <div className="mt-12 grid grid-cols-2 gap-6">

              {stats.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="rounded-3xl bg-white p-7 shadow-lg"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">

                      <Icon className="h-7 w-7 text-[#173A7A]" />

                    </div>

                    <div className="mt-6 text-4xl font-bold text-slate-900">
                      {item.value}
                    </div>

                    <div className="mt-2 text-slate-500">
                      {item.label}
                    </div>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}