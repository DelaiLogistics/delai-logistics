'use client';

import Image from 'next/image';

export default function HeroImage() {
  return (
    <div className="relative w-full">

      {/* 整体向左移动一点，不贴右边 */}
      <div className="-ml-6 xl:-ml-10">

        <div className="overflow-hidden rounded-[38px] bg-white shadow-2xl">

          <Image
            src="/hero10_banner.jpg"
            alt="德莱物流"
            width={1800}
            height={1125}
            priority
            className="w-full h-auto object-contain"
          />

        </div>

      </div>

    </div>
  );
}