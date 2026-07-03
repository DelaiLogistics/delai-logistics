'use client';

import {
  Apple,
  Beef,
  Milk,
  Pill,
  Store,
  UtensilsCrossed,
} from 'lucide-react';

const industries = [
  {
    icon: Apple,
    title: '生鲜果蔬',
    description:
      '满足蔬菜、水果等生鲜产品运输需求，保持新鲜品质，提升运输效率。',
    tags: ['冷藏运输', '城市配送'],
  },
  {
    icon: Beef,
    title: '冷冻食品',
    description:
      '适用于肉类、水产、速冻食品等货物，全程冷冻运输，保障产品品质。',
    tags: ['-18℃运输', '全程温控'],
  },
  {
    icon: Milk,
    title: '乳制品',
    description:
      '针对乳制品及冷藏饮品运输，确保运输过程温度稳定、安全送达。',
    tags: ['冷藏运输', '稳定时效'],
  },
  {
    icon: Pill,
    title: '医药冷链',
    description:
      '满足部分医药及健康产品运输要求，提供全程温控与运输监测服务。',
    tags: ['温控监测', '安全运输'],
  },
  {
    icon: Store,
    title: '商超配送',
    description:
      '服务连锁商超、社区零售及仓配一体客户，提升终端配送效率。',
    tags: ['仓配一体', '终端配送'],
  },
  {
    icon: UtensilsCrossed,
    title: '餐饮供应链',
    description:
      '为餐饮品牌、中央厨房及食品加工企业提供稳定、高效的冷链配送服务。',
    tags: ['食材配送', '专线运输'],
  },
];

export default function Industries() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">
            INDUSTRIES
          </span>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
            服务多个行业
            <br />
            满足不同冷链运输需求
          </h2>

          <p className="mt-6 text-lg leading-9 text-slate-600">
            不同行业对冷链运输的要求各不相同。
            德莱物流结合多年冷链运输经验，
            针对食品、生鲜、医药、商超及餐饮供应链等行业，
            提供更加专业、高效、安全的运输解决方案。
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 transition group-hover:bg-cyan-500 group-hover:text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mt-7 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition group-hover:bg-cyan-50 group-hover:text-cyan-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}