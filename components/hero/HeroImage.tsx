'use client';

import Image from 'next/image';

export default function HeroImage() {
  return (
    <div className="relative">

      <div className="overflow-hidden rounded-[32px] shadow-2xl">

        <Image
          src="/hero10.jpg"
          alt="德莱物流"
          width={1600}
          height={1000}
          priority
          className="w-full object-cover"
        />

      </div>

    </div>
  );
}