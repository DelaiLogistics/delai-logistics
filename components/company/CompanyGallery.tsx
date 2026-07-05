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
    <div className="mt-24">
      <div className="mb-10">
        <span className="text-sm font-semibold tracking-[0.25em] text-orange-500">
          BUSINESS SCENARIOS
        </span>

        <h3 className="mt-3 text-4xl font-bold text-slate-900">
          德莱物流业务现场
        </h3>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {gallery.map((item) => (
          <div
            key={item.title}
            className="group overflow-hidden rounded-[28px] bg-white shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="relative overflow-hidden">

              <Image
                src={item.image}
                alt={item.title}
                width={700}
                height={700}
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              <div className="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-2 text-xs font-bold tracking-widest text-orange-500">
                {item.tag}
              </div>

              <div className="absolute bottom-6 left-6">
                <h4 className="text-2xl font-bold text-white">
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