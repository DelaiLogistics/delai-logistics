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
      className="bg-[#F7F9FC] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="text-center">

          <span className="inline-flex rounded-full bg-blue-50 px-5 py-2 text-sm font-semibold text-[#173A7A]">
            TRANSPORT NETWORK
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            四大冷链精品专线
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            以长沙为中心，打造北京、上海、西安、海南四大核心冷链专线，
            为客户提供更加高效、安全、稳定的运输服务。
          </p>

        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">

          {/* Left */}

          <div className="overflow-hidden rounded-[36px] bg-white shadow-xl">

            <Image
              src="/map-china.jpg"
              alt="运输网络"
              width={1200}
              height={900}
              className="h-full min-h-[620px] w-full object-cover"
            />

          </div>

          {/* Right */}

          <div className="space-y-6">

            {routes.map((item) => (

              <div
                key={item.city}
                className="group rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >

                <div className="flex justify-between">

                  <div>

                    <div className="flex items-center gap-4">

                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50">

                        <MapPin className="h-8 w-8 text-[#173A7A]" />

                      </div>

                      <div>

                        <h3 className="text-2xl font-bold text-slate-900">
                          {item.city}冷链专线
                        </h3>

                        <p className="mt-1 text-slate-500">
                          {item.route}
                        </p>

                      </div>

                    </div>

                    <div className="mt-8 flex flex-wrap gap-6">

                      <div className="flex items-center gap-2 text-slate-600">

                        <Truck className="h-5 w-5 text-[#173A7A]" />

                        全国运输

                      </div>

                      <div className="flex items-center gap-2 text-slate-600">

                        <Snowflake className="h-5 w-5 text-[#173A7A]" />

                        全程温控

                      </div>

                      <div className="flex items-center gap-2 text-slate-600">

                        <Clock3 className="h-5 w-5 text-[#173A7A]" />

                        {item.time}

                      </div>

                    </div>

                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 transition group-hover:bg-[#173A7A]">

                    <ArrowRight className="h-5 w-5 text-[#173A7A] group-hover:text-white" />

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-20 rounded-[36px] bg-[#173A7A] p-12">

          <div className="grid gap-10 text-center text-white md:grid-cols-4">

            <div>

              <div className="text-5xl font-bold">
                2013
              </div>

              <p className="mt-3 text-blue-200">
                公司成立
              </p>

            </div>

            <div>

              <div className="text-5xl font-bold">
                4+
              </div>

              <p className="mt-3 text-blue-200">
                核心专线
              </p>

            </div>

            <div>

              <div className="text-5xl font-bold">
                24H
              </div>

              <p className="mt-3 text-blue-200">
                快速响应
              </p>

            </div>

            <div>

              <div className="text-5xl font-bold">
                365
              </div>

              <p className="mt-3 text-blue-200">
                全年运营
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}