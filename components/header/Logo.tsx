'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3"
    >
      <Image
        src="/logo.svg"
        alt="湖南德莱物流有限公司"
        width={60}
        height={60}
        priority
        className="h-10 w-auto transition duration-300 group-hover:scale-105 md:h-12 lg:h-14"
      />

      <div className="hidden sm:block leading-tight">
        <h1 className="text-base font-bold text-slate-900 lg:text-lg">
          湖南德莱物流有限公司
        </h1>

        <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-slate-500 lg:text-[11px]">
          DELAI COLD CHAIN LOGISTICS
        </p>
      </div>
    </Link>
  );
}