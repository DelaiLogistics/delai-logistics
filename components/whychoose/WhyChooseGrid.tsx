'use client';

import {
  Snowflake,
  Plane,
  Truck,
  Warehouse,
  Clock3,
  ShieldCheck,
} from 'lucide-react';

const advantages = [
  {
    icon: Snowflake,
    title: '全程温控运输',
    desc: '全程冷链监控，确保货物品质安全。',
  },
  {
    icon: Plane,
    title: '国内空运',
    desc: '覆盖全国主要机场，高时效运输。',
  },
  {
    icon: Truck,
    title: '全国运输网络',
    desc: '北京、上海、西安、海南精品专线。',
  },
  {
    icon: Warehouse,
    title: '仓储配送',
    desc: '仓储、中转、分拣、配送一体化。',
  },
  {
    icon: Clock3,
    title: '24小时服务',
    desc: '快速响应客户需求，全程贴心服务。',
  },
  {
    icon: ShieldCheck,
    title: '安全可靠',
    desc: '专业团队运营，为客户提供稳定物流保障。',
  },
];

export default function WhyChooseGrid() {
  return (
    <div
      className="
        grid
        grid-cols-2
        gap-4
        lg:grid-cols-3
        lg:gap-6
      "
    >
      {advantages.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="
              group
              flex
              h-full
              flex-col
              rounded-3xl
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
              lg:p-8
            "
          >
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                bg-orange-50
                transition
                group-hover:bg-orange-500

                sm:h-16
                sm:w-16
              "
            >
              <Icon
                className="
                  h-6
                  w-6
                  text-orange-500
                  transition
                  group-hover:text-white

                  sm:h-8
                  sm:w-8
                "
              />
            </div>

            <h3
              className="
                mt-4
                text-base
                font-bold
                text-slate-900

                sm:mt-6
                sm:text-xl
                lg:text-2xl
              "
            >
              {item.title}
            </h3>

            <p
              className="
                mt-3
                flex-1
                text-xs
                leading-5
                text-slate-600

                sm:mt-4
                sm:text-[15px]
                sm:leading-7

                lg:text-base
                lg:leading-8
              "
            >
              {item.desc}
            </p>
          </div>
        );
      })}
    </div>
  );
}