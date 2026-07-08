'use client';

import Image from 'next/image';

const gallery = [
  {
    image: '/hero8.jpg',
    tag: 'AIR FREIGHT',
    title: '国内空运',
  },
  {
    image: '/hero11.JPG',
    tag: 'WAREHOUSE',
    title: '仓储服务',
  },
  {
    image: '/hero1.jpg',
    tag: 'TRUCKING',
    title: '汽运配送',
  },
  {
    image: '/hero2.jpg',
    tag: 'COLD CHAIN',
    title: '冷链运输',
  },
];

export default function CompanyGallery() {
  return (
    <section className="mt-16 lg:mt-24">
      {/* 标题 */}
      <div className="mb-8 text-center lg:mb-10">
        <span className="inline-flex items-center rounded-full border border-orange-100 bg-orange-50 px-4 py-2 text-xs font-semibold tracking-[0.22em] text-orange-600 sm:text-sm">
          BUSINESS SCENARIOS
        </span>

        <h3 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          🔥🔥🔥 德莱物流业务现场 TEST
        </h3>

        <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-orange-500" />
      </div>

      {/* 图片 */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {gallery.map((item) => (
          <div
            key={item.title}
            className="group overflow-hidden rounded-[28px] bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="relative overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                width={700}
                height={700}
                className="
                  h-[220px]
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                  sm:h-[250px]
                  lg:h-[280px]
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

              <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-bold tracking-[0.18em] text-orange-500 backdrop-blur sm:left-5 sm:top-5 sm:px-4 sm:py-2 sm:text-xs">
                {item.tag}
              </div>

              <div className="absolute bottom-5 left-5">
                <h4 className="text-xl font-bold text-white sm:text-2xl">
                  {item.title}
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}