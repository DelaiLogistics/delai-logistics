'use client';

import {
  MessageCircle,
  ClipboardList,
  Truck,
  Thermometer,
  MapPinned,
  CircleCheckBig,
} from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    title: '需求沟通',
    description: '了解货物类型、运输温区、发货时间及目的地，确认运输需求。',
  },
  {
    icon: ClipboardList,
    title: '制定方案',
    description: '根据运输距离、时效及货物特点，制定专属冷链运输方案。',
  },
  {
    icon: Truck,
    title: '车辆调度',
    description: '匹配适合车型，安排专业冷链车辆及驾驶人员按时到达。',
  },
  {
    icon: Thermometer,
    title: '装车测温',
    description: '装车前检测车厢温度，规范装卸流程，确保运输环境符合要求。',
  },
  {
    icon: MapPinned,
    title: '运输监控',
    description: '运输过程中实时监控车辆位置及温度变化，异常情况快速响应。',
  },
  {
    icon: CircleCheckBig,
    title: '安全签收',
    description: '货物准时送达，全程闭环管理，确保客户顺利完成签收。',
  },
];

export default function Process() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">
            SERVICE PROCESS
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 lg:text-5xl">
            专业冷链运输服务流程
          </h2>

          <p className="mt-6 text-lg leading-9 text-slate-600">
            从需求沟通到最终签收，每一个环节均建立标准化作业流程，
            以专业、高效、安全的服务保障每一次运输任务顺利完成。
          </p>
        </div>

        {/* Desktop */}
        <div className="relative mt-20 hidden lg:block">

          {/* Line */}
          <div className="absolute left-0 right-0 top-10 h-0.5 bg-slate-200"></div>

          <div className="grid grid-cols-6 gap-6">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={step.title} className="relative text-center">

                  <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full border-8 border-slate-50 bg-cyan-500 text-white shadow-lg">
                    <Icon size={34} />
                  </div>

                  <div className="mt-5 text-sm font-semibold tracking-widest text-cyan-600">
                    0{index + 1}
                  </div>

                  <h3 className="mt-2 text-xl font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

        {/* Mobile */}
        <div className="mt-16 lg:hidden">

          <div className="space-y-10">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="relative flex gap-6"
                >
                  <div className="relative flex flex-col items-center">

                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500 text-white">
                      <Icon size={24} />
                    </div>

                    {index !== steps.length - 1 && (
                      <div className="mt-2 h-full w-0.5 bg-slate-200"></div>
                    )}

                  </div>

                  <div className="pb-10">

                    <div className="text-sm font-semibold tracking-widest text-cyan-600">
                      0{index + 1}
                    </div>

                    <h3 className="mt-2 text-xl font-bold text-slate-900">
                      {step.title}
                    </h3>

                    <p className="mt-3 leading-8 text-slate-600">
                      {step.description}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}