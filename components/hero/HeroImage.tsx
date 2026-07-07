'use client';

import Image from 'next/image';

export default function HeroImage() {
  return (
    <div className="relative w-full">

      {/* 手机端 */}
      <div className="block lg:hidden">
        <div className="mx-auto mt-8 max-w-[680px] overflow-hidden rounded-3xl shadow-xl">
          <Image
            src="/hero10_banner.jpg"
            alt="德莱物流"
            width={1800}
            height={1200}
            priority
            className="h-auto w-full object-contain"
          />
        </div>
      </div>

      {/* PC端 */}
      <div className="hidden lg:block">
        <div className="-ml-8 xl:-ml-12">
          <div className="overflow-hidden rounded-[40px] shadow-2xl">

            <Image
              src="/hero10_banner.jpg"
              alt="德莱物流"
              width={1800}
              height={1200}
              priority
              className="w-full h-auto object-contain"
            />

          </div>
        </div>
      </div>

    </div>
  );
}