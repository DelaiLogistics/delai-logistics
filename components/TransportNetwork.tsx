'use client';

import Image from 'next/image';
import {
  ArrowRight,
  Clock3,
  MapPin,
  Snowflake,
  Truck,
} from 'lucide-react';

const routes = [
  {
    city: '北京',
    route: '长沙 ⇄ 北京',
    time: '约24小时',
  },
  {
    city: '上海',
    route: '长沙 ⇄ 上海',
    time: '约18小时',
  },
  {
    city: '西安',
    route: '长沙 ⇄ 西安',
    time: '约20小时',
  },
  {
    city: '海南',
    route: '长沙 ⇄ 海南',
    time: '约36小时',
  },
];

export default function TransportNetwork() {
  return (
    <section
      id="routes"
      className="bg-[#F7F9FC] py-20 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center">

          <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-[#173A7A] sm:px-5 sm:text-sm">
            TRANSPORT NETWORK
          </span>

          <h2 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            四大冷链精品专线
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 lg:mt-6 lg:text-lg">
            以长沙为中心，打造北京、上海、西安、海南四大核心冷链专线，
            为客户提供更加高效、安全、稳定的运输服务。
          </p>

        </div>

        {/* Content */}
        <div className="mt-12 grid gap-8 lg:mt-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">

          {/* Map */}
          <div className="overflow-hidden rounded-[28px] bg-white shadow-xl lg:rounded-[36px]">

            <Image
              src="/map-china.jpg"
              alt="运输网络"
              width={1200}
              height={900}
              className="h-[260px] w-full object-cover sm:h-[420px] lg:h-full lg:min-h-[620px]"
            />

          </div>

          {/* Routes */}
          <div className="space-y-4 lg:space-y-6">

            {routes.map((item) => (

              <div
                key={item.city}
                className="group rounded-2xl bg-white p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl lg:rounded-3xl lg:p-8"
              >

                <div className="flex justify-between gap-4">

                  <div className="flex-1">

                    <div className="flex items-center gap-3 lg:gap-4">

                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 lg:h-16 lg:w-16 lg:rounded-2xl">

                        <MapPin className="h-6 w-6 text-[#173A7A] lg:h-8 lg:w-8" />

                      </div>

                      <div>

                        <h3 className="text-lg font-bold text-slate-900 lg:text-2xl">
                          {item.city}冷链专线
                        </h3>

                        <p className="mt-1 text-sm text-slate-500 lg:text-base">
                          {item.route}
                        </p>

                      </div>

                    </div>

                    <div className="mt-5 flex flex-wrap gap-4 lg:mt-8 lg:gap-6">

                      <div className="flex items-center gap-2 text-sm text-slate-600 lg:text-base">
                        <Truck className="h-4 w-4 text-[#173A7A] lg:h-5 lg:w-5" />
                        全国运输
                      </div>

                      <div className="flex items-center gap-2 text-sm text-slate-600 lg:text-base">
                        <Snowflake className="h-4 w-4 text-[#173A7A] lg:h-5 lg:w-5" />
                        全程温控
                      </div>

                      <div className="flex items-center gap-2 text-sm text-slate-600 lg:text-base">
                        <Clock3 className="h-4 w-4 text-[#173A7A] lg:h-5 lg:w-5" />
                        {item.time}
                      </div>

                    </div>

                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 transition group-hover:bg-[#173A7A] lg:h-12 lg:w-12">

                    <ArrowRight className="h-4 w-4 text-[#173A7A] group-hover:text-white lg:h-5 lg:w-5" />

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Bottom Stats */}
        <div className="mt-12 rounded-[28px] bg-[#173A7A] p-8 lg:mt-20 lg:rounded-[36px] lg:p-12">

          <div className="grid grid-cols-2 gap-8 text-center text-white lg:grid-cols-4 lg:gap-10">

            <div>
              <div className="text-3xl font-bold lg:text-5xl">
                2013
              </div>

              <p className="mt-2 text-sm text-blue-200 lg:mt-3 lg:text-base">
                公司成立
              </p>
            </div>

            <div>
              <div className="text-3xl font-bold lg:text-5xl">
                4+
              </div>

              <p className="mt-2 text-sm text-blue-200 lg:mt-3 lg:text-base">
                核心专线
              </p>
            </div>

            <div>
              <div className="text-3xl font-bold lg:text-5xl">
                24H
              </div>

              <p className="mt-2 text-sm text-blue-200 lg:mt-3 lg:text-base">
                快速响应
              </p>
            </div>

            <div>
              <div className="text-3xl font-bold lg:text-5xl">
                365
              </div>

              <p className="mt-2 text-sm text-blue-200 lg:mt-3 lg:text-base">
                全年运营
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}