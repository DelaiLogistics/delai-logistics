'use client';

import {
  ClipboardList,
  Calculator,
  Truck,
  PackageCheck,
  ArrowRight,
} from 'lucide-react';

const steps = [
  {
    icon: ClipboardList,
    title: '需求沟通',
    desc: '了解货物类型、运输线路、时效要求及服务需求，为客户制定运输方案。',
  },
  {
    icon: Calculator,
    title: '方案报价',
    desc: '根据运输需求提供合理报价，并确认运输时间、车辆及运输计划。',
  },
  {
    icon: Truck,
    title: '运输配送',
    desc: '专业团队全程运输，实时跟踪货物状态，保障安全、准时送达。',
  },
  {
    icon: PackageCheck,
    title: '签收售后',
    desc: '货物安全交付，持续提供售后服务，不断优化客户物流体验。',
  },
];

export default function ServiceProcess() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-blue-50 px-5 py-2 text-sm font-semibold text-[#173A7A]">
            SERVICE PROCESS
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            服务流程
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            标准化运输流程，全程透明管理，让每一次托付更加放心。
          </p>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-4">

          {steps.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="relative rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#173A7A] hover:shadow-xl"
              >
                <div className="absolute right-8 top-8 text-6xl font-black text-slate-100">
                  0{index + 1}
                </div>

                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50">
                  <Icon className="h-8 w-8 text-[#173A7A]" />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {item.desc}
                </p>

                {index !== steps.length - 1 && (
                  <ArrowRight className="absolute -right-5 top-1/2 hidden h-8 w-8 -translate-y-1/2 text-[#173A7A] lg:block" />
                )}
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}