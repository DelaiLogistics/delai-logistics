import {
  ShieldCheck,
  Snowflake,
  MapPinned,
  Truck,
  Clock3,
  Headset,
} from "lucide-react";

export default function Advantage() {
  const advantages = [
    {
      icon: Snowflake,
      title: "全程冷链温控",
      desc: "采用专业冷链运输设备，全程温度可控，保障货物品质。",
    },
    {
      icon: MapPinned,
      title: "GPS实时追踪",
      desc: "运输轨迹实时可查，让客户随时掌握货物运输状态。",
    },
    {
      icon: Truck,
      title: "专业冷藏车队",
      desc: "配备多种规格冷藏车辆，满足不同运输需求。",
    },
    {
      icon: ShieldCheck,
      title: "安全运输保障",
      desc: "规范运输流程，降低运输风险，提高货物安全性。",
    },
    {
      icon: Clock3,
      title: "时效稳定",
      desc: "依托北京、上海、西安、海南四大专线，实现稳定发运。",
    },
    {
      icon: Headset,
      title: "7×24小时服务",
      desc: "专业客服团队快速响应，为客户提供全过程服务支持。",
    },
  ];

  return (
    <section className="bg-slate-50 py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* 标题 */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-orange-500">
            WHY DELAI
          </span>

          <h2 className="mt-6 text-4xl font-bold text-blue-950 lg:text-5xl">
            为什么选择德莱冷链运输
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            多年冷链运输经验，依托专业运输团队、智能温控设备及成熟运营体系，
            为客户提供更加安全、稳定、高效的冷链物流解决方案。
          </p>
        </div>

        {/* 六大优势 */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {advantages.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 transition duration-300 group-hover:bg-orange-500">
                  <Icon
                    size={34}
                    className="text-blue-950 transition duration-300 group-hover:text-white"
                  />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-blue-950">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-600">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}