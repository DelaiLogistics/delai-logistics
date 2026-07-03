'use client';

import {
  ShieldCheck,
  Snowflake,
  Clock3,
  MapPinned,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

const advantages = [
  {
    icon: Snowflake,
    title: '专业冷链运输',
    desc: '全程温控运输，保障生鲜、食品、乳制品及医药产品运输品质。',
  },
  {
    icon: Clock3,
    title: '快速响应',
    desc: '专业客服快速响应，根据客户需求制定运输解决方案。',
  },
  {
    icon: MapPinned,
    title: '全国运输网络',
    desc: '以长沙为中心，覆盖全国主要城市及重点冷链线路。',
  },
  {
    icon: ShieldCheck,
    title: '安全可靠',
    desc: '规范运输流程，全程跟踪，确保货物安全准时送达。',
  },
];

const features = [
  '2013年成立，十余年行业经验',
  '北京、上海、西安、海南四大冷链专线',
  '冷链运输、空运、汽运、仓储一体化',
  '专业物流团队，全流程服务',
  '支持企业定制物流解决方案',
  '全年稳定运营，快速响应客户需求',
];

export default function WhyChoose() {
  return (
    <section
      id="advantages"
      className="bg-white py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left */}

          <div>

            <span className="inline-flex rounded-full bg-blue-50 px-5 py-2 text-sm font-semibold text-[#173A7A]">
              WHY CHOOSE DELAI
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
              为什么选择
              <br />
              德莱物流
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              德莱物流始终坚持以客户需求为中心，
              持续提升运输效率与服务品质，
              为客户提供更加专业、安全、高效的一站式物流解决方案。
            </p>

            <div className="mt-10 grid gap-5">

              {features.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <CheckCircle2 className="h-6 w-6 text-[#173A7A]" />

                  <span className="text-slate-700">
                    {item}
                  </span>
                </div>
              ))}

            </div>

            <a
              href="#contact"
              className="mt-12 inline-flex items-center rounded-full bg-[#173A7A] px-8 py-4 font-semibold text-white transition hover:bg-[#102C60]"
            >
              获取物流方案

              <ArrowRight className="ml-2 h-5 w-5" />
            </a>

          </div>

          {/* Right */}

          <div className="grid gap-6 sm:grid-cols-2">

            {advantages.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-slate-200 bg-[#F8FAFC] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#173A7A] hover:bg-white hover:shadow-xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 transition group-hover:bg-[#173A7A]">

                    <Icon className="h-8 w-8 text-[#173A7A] group-hover:text-white" />

                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-600">
                    {item.desc}
                  </p>

                </div>
              );
            })}

          </div>

        </div>
      </div>
    </section>
  );
}