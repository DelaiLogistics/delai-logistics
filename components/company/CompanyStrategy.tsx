'use client';

import {
  Target,
  Trophy,
  MapPinned,
  Globe,
} from 'lucide-react';

const strategy = [
  {
    icon: Target,
    title: '★★★★★测试★★★★★',
    desc: '如果这里变了，说明手机已经加载了最新代码。',
  },
  {
    icon: Trophy,
    title: '打造湖南冷链零担物流头部企业',
    desc: '坚持专业冷链发展路线，持续提升品牌影响力与市场竞争力。',
  },
  {
    icon: MapPinned,
    title: '四大精品冷链专线',
    desc: '北京｜上海｜西安｜海南，全国重点城市高效直达。',
  },
  {
    icon: Globe,
    title: '全国一站式供应链物流服务',
    desc: '冷链运输、国内空运、汽运配送、仓储服务一体化解决方案。',
  },
];

export default function CompanyStrategy() {
  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
      {strategy.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl lg:p-8"
          >
            <div className="flex items-start gap-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-orange-50 transition-all duration-300 group-hover:bg-orange-500">
                <Icon className="h-8 w-8 text-orange-500 transition-all duration-300 group-hover:text-white" />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="text-[28px] font-bold leading-[1.25] tracking-[-0.02em] text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-[17px] leading-8 text-slate-600">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}