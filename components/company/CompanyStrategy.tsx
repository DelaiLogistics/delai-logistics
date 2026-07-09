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
    title: '五年战略规划',
    desc: '持续完善直营网点布局，提升数字化运营能力，打造现代化物流企业。',
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
    <div className="grid grid-cols-2 gap-4 lg:gap-6">
      {strategy.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="
              group
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-4
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-orange-200
              hover:shadow-xl

              sm:p-6
              lg:rounded-[28px]
              lg:p-8
            "
          >
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:gap-5">
              {/* Icon */}
              <div
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-orange-50
                  transition-all
                  duration-300
                  group-hover:bg-orange-500

                  sm:h-16
                  sm:w-16
                  sm:rounded-2xl
                "
              >
                <Icon
                  className="
                    h-6
                    w-6
                    text-orange-500
                    transition-all
                    duration-300
                    group-hover:text-white

                    sm:h-8
                    sm:w-8
                  "
                />
              </div>

              {/* Content */}
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-bold leading-snug text-slate-900 sm:text-xl lg:text-[28px]">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-slate-600 sm:mt-3 sm:text-base sm:leading-7 lg:leading-8">
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