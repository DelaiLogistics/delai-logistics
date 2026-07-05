'use client';

import Image from 'next/image';

export default function HeroImage() {
  return (
    <div className="relative mx-auto mt-14 w-full max-w-6xl">

      <div className="overflow-hidden rounded-[28px] shadow-2xl">

        <Image
          src="/hero10.jpg"
          alt="德莱物流"
          width={1600}
          height={900}
          priority
          className="h-[240px] w-full object-cover sm:h-[360px] md:h-[500px] lg:h-[620px]"
        />

      </div>

      <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/10" />

    </div>
  );
}