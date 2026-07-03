'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Snowflake,
  Plane,
  Truck,
  Warehouse,
  ChevronDown,
} from 'lucide-react';

const stats = [
  {
    value: '2013',
    label: '成立时间',
  },
  {
    value: '4',
    label: '核心冷链专线',
  },
  {
    value: '24H',
    label: '快速响应',
  },
  {
    value: '365',
    label: '全年稳定运营',
  },
];

const tags = [
  '北京冷链',
  '上海冷链',
  '西安冷链',
  '海南冷链',
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F6F9FC]">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 h-full w-[42%] bg-[#173A7A]" />

        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-100 blur-3xl opacity-50" />

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-200 blur-3xl opacity-30" />
      </div>

      <div className="relative mx-auto flex min-h-[860px] max-w-7xl items-center px-6 lg:px-8">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <div className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-[#173A7A]">
              湖南冷链零担物流品牌
            </div>

            <h1 className="mt-8 text-5xl font-bold leading-tight text-slate-900 lg:text-7xl">
              专注冷链运输
              <br />
              成就每一次托付
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-9 text-slate-600">
              成立于2013年，总部位于湖南长沙。
              德莱物流专注冷链运输、国内空运、汽运配送及仓储服务，
              重点打造北京、上海、西安、海南四大冷链专线，
              致力于成为湖南冷链零担物流头部企业。
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {tags.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-md"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap gap-5">
              <Link
                href="#contact"
                className="inline-flex h-14 items-center rounded-full bg-[#173A7A] px-8 font-semibold text-white transition hover:bg-[#102C60]"
              >
                获取物流方案
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <Link
                href="#services"
                className="inline-flex h-14 items-center rounded-full border border-slate-300 bg-white px-8 font-semibold text-slate-700 transition hover:border-[#173A7A] hover:text-[#173A7A]"
              >
                查看业务
              </Link>
            </div>

            <div className="mt-20 grid grid-cols-2 gap-8 lg:grid-cols-4">
              {stats.map((item) => (
                <div key={item.label}>
                  <div className="text-4xl font-bold text-[#173A7A]">
                    {item.value}
                  </div>

                  <div className="mt-2 text-sm text-slate-500">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="overflow-hidden rounded-[36px] shadow-2xl">
              <Image
                src="/hero.png"
                alt="德莱物流"
                width={900}
                height={900}
                priority
                className="h-[680px] w-full object-cover"
              />
            </div>

            {/* Card 1 */}
            <div className="absolute -left-8 top-12 rounded-3xl bg-white p-6 shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
                  <Snowflake className="h-7 w-7 text-[#173A7A]" />
                </div>

                <div>
                  <div className="font-bold text-slate-900">
                    全程温控运输
                  </div>

                  <div className="text-sm text-slate-500">
                    冷链运输保障
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="absolute -right-8 bottom-12 rounded-3xl bg-white p-6 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Truck className="mx-auto h-8 w-8 text-[#173A7A]" />
                  <div className="mt-2 text-sm font-medium">
                    汽运配送
                  </div>
                </div>

                <div className="text-center">
                  <Plane className="mx-auto h-8 w-8 text-[#173A7A]" />
                  <div className="mt-2 text-sm font-medium">
                    国内空运
                  </div>
                </div>

                <div className="text-center">
                  <Warehouse className="mx-auto h-8 w-8 text-[#173A7A]" />
                  <div className="mt-2 text-sm font-medium">
                    仓储服务
                  </div>
                </div>

                <div className="text-center">
                  <Snowflake className="mx-auto h-8 w-8 text-[#173A7A]" />
                  <div className="mt-2 text-sm font-medium">
                    冷链专线
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-[#173A7A]" />
      </div>
    </section>
  );
}