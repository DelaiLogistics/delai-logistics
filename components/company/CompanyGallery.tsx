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
    <div className="mt-16 lg:mt-24">
      <div className="mb-8 lg:mb-10">
        <span className="text-xs font-semibold tracking-[0.22em] text-orange-500 sm:text-sm">
          BUSINESS SCENARIOS
        </span>

        <h3 className="mt-2 text-3xl font-bold text-slate-900 sm:mt-3 sm:text-4xl">
          德莱物流业务现场
        </h3>
      </div>

      <div className="grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
        {gallery.map((item) => (
          <div
            key={item.title}
            className="group overflow-hidden rounded-[24px] bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
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
                  sm:h-[260px]
                  lg:h-72
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-bold tracking-[0.18em] text-orange-500 sm:left-6 sm:top-6 sm:px-4 sm:py-2 sm:text-xs">
                {item.tag}
              </div>

              <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6">
                <h4 className="text-xl font-bold text-white sm:text-2xl">
                  {item.title}
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}