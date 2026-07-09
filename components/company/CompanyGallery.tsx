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
      <div className="mb-8 text-center lg:mb-12">
        <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-orange-600 sm:text-sm">
          BUSINESS SCENARIOS
        </span>

        <h3 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
          德莱物流业务现场
        </h3>

        <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-orange-500" />
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:gap-8">
        {gallery.map((item) => (
          <div
            key={item.title}
            className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="relative">
              <Image
                src={item.image}
                alt={item.title}
                width={700}
                height={700}
                className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-110 lg:aspect-[5/4]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              <div className="absolute left-2 top-2 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold tracking-[0.18em] text-orange-500 shadow sm:left-4 sm:top-4 sm:px-4 sm:py-2 sm:text-xs lg:left-6 lg:top-6 lg:px-5 lg:py-2.5 lg:text-sm">
                {item.tag}
              </div>

              <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 lg:bottom-6 lg:left-6">
                <h4 className="text-lg font-bold text-white sm:text-2xl lg:text-4xl">
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