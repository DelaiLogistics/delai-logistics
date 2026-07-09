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
    <section className="bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-20">

          <div className="inline-flex items-center rounded-full bg-orange-50 px-4 py-2 lg:px-5">
            <span className="mr-2 h-2 w-2 rounded-full bg-orange-500" />

            <span className="text-xs font-semibold tracking-[0.2em] text-orange-600 sm:text-sm lg:tracking-[0.25em]">
              REAL BUSINESS CASES
            </span>
          </div>

          <h2 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl lg:mt-8 lg:text-5xl">
            真实运输案例
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base lg:mt-8 lg:text-lg lg:leading-9">
            真实业务 · 真实现场 · 每一次运输，
            都是客户对德莱物流的信任托付。
          </p>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-8">

          {cases.map((item) => (

            <div
              key={item.title}
              className="group overflow-hidden rounded-2xl shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl lg:rounded-[28px]"
            >

              <div className="relative h-[180px] sm:h-[260px] lg:h-[330px] overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                {/* 黑色渐变 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                {/* 标签 */}
                <div className="absolute left-3 top-3 rounded-full bg-orange-500 px-2 py-1 text-[10px] font-semibold text-white sm:left-4 sm:top-4 sm:px-3 sm:py-1.5 sm:text-xs lg:left-6 lg:top-6 lg:px-4 lg:py-2 lg:text-sm">
                  {item.tag}
                </div>

                {/* 底部文字 */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 lg:bottom-6 lg:left-6 lg:right-6">

                  <h3 className="text-base font-bold leading-snug text-white sm:text-xl lg:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[11px] leading-4 text-white/90 sm:text-sm sm:leading-6 lg:mt-3 lg:text-base lg:leading-7">
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