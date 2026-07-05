'use client';

import Image from 'next/image';

const cases = [
  {
    image: '/case1.jpg',
    tag: '国内空运',
    title: '高效直达 · 安全准时',
    desc: '快速响应，保障货物时效。',
  },
  {
    image: '/case2.jpg',
    tag: '仓储服务',
    title: '专业仓储 · 智能管理',
    desc: '标准化仓储管理，保障货物安全。',
  },
  {
    image: '/case3.jpg',
    tag: '汽运配送',
    title: '全国运输 · 安全可靠',
    desc: '覆盖全国运输网络，高效配送。',
  },
  {
    image: '/case4.jpg',
    tag: '冷链运输',
    title: '全程温控 · 品质保障',
    desc: '全程温控运输，保障生鲜品质。',
  },
  {
    image: '/case5.jpg',
    tag: '机场装机',
    title: '专业装卸 · 高效作业',
    desc: '规范流程，确保货物安全装机。',
  },
  {
    image: '/case6.jpg',
    tag: '运输现场',
    title: '真实业务 · 客户信赖',
    desc: '每一次运输，都是客户的信任托付。',
  },
];

export default function BusinessCases() {
  return (
    <section className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">

          <div className="inline-flex items-center rounded-full bg-orange-50 px-5 py-2">
            <span className="mr-2 h-2 w-2 rounded-full bg-orange-500" />

            <span className="text-sm font-semibold tracking-[0.25em] text-orange-600">
              REAL BUSINESS CASES
            </span>
          </div>

          <h2 className="mt-8 text-5xl font-bold text-slate-900">
            真实运输案例
          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-600">
            真实业务 · 真实现场 · 每一次运输，
            都是客户对德莱物流的信任托付。
          </p>
        </div>

        {/* Gallery */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {cases.map((item) => (

            <div
              key={item.title}
              className="group overflow-hidden rounded-[28px] shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="relative h-[330px] overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                {/* 黑色渐变 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                {/* 标签 */}
                <div className="absolute left-6 top-6 rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white">
                  {item.tag}
                </div>

                {/* 底部文字 */}
                <div className="absolute bottom-6 left-6 right-6">

                  <h3 className="text-3xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-base leading-7 text-white/90">
                    {item.desc}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}