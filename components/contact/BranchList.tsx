'use client';

import {
  Building2,
  Phone,
  MapPin,
} from 'lucide-react';

const branches = [
  {
    city: '长沙总部',
    phone: '0731-84685086',
    mobile: '19908499946 / 19911386855',
    address: '长沙市长沙县黄江大道989号一力物流园C区6栋109-112',
  },
  {
    city: '长沙营业部',
    phone: '0731-84062289',
    mobile: '19908499946',
    address: '长沙市长沙县黄江大道989号一力物流园C区6栋',
  },
  {
    city: '北京营业部',
    phone: '',
    mobile: '',
    address: '北京冷链专线',
  },
  {
    city: '上海营业部',
    phone: '',
    mobile: '',
    address: '上海冷链专线',
  },
  {
    city: '西安营业部',
    phone: '',
    mobile: '',
    address: '西安冷链专线',
  },
  {
    city: '海口 / 三亚营业部',
    phone: '',
    mobile: '',
    address: '海南冷链专线',
  },
];

export default function BranchList() {
  return (
    <section
      id="branches"
      className="bg-slate-50 py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <div className="inline-flex items-center rounded-full bg-orange-50 px-5 py-2">
            <span className="mr-2 h-2 w-2 rounded-full bg-orange-500" />

            <span className="text-sm font-semibold tracking-[0.2em] text-orange-600">
              BRANCH OFFICES
            </span>
          </div>

          <h2 className="mt-8 text-5xl font-bold text-slate-900">
            全国营业网点
          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-600">
            德莱物流持续完善全国直营网点布局，
            为客户提供更加高效、稳定、安全的物流运输服务。
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {branches.map((item) => (

            <div
              key={item.city}
              className="rounded-[28px] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50">
                <Building2 className="h-8 w-8 text-orange-500" />
              </div>

              <h3 className="mt-8 text-2xl font-bold text-slate-900">
                {item.city}
              </h3>

              {item.phone && (
                <div className="mt-6 flex items-center">
                  <Phone className="mr-3 h-5 w-5 text-orange-500" />
                  <span>{item.phone}</span>
                </div>
              )}

              {item.mobile && (
                <div className="mt-4 flex items-center">
                  <Phone className="mr-3 h-5 w-5 text-orange-500" />
                  <span>{item.mobile}</span>
                </div>
              )}

              <div className="mt-5 flex items-start">
                <MapPin className="mr-3 mt-1 h-5 w-5 shrink-0 text-orange-500" />

                <span className="leading-7 text-slate-600">
                  {item.address}
                </span>
              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}