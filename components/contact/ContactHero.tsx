'use client';

import { ArrowRight } from 'lucide-react';

export default function ContactHero() {
  return (
    <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-4xl text-center">

          <div className="inline-flex items-center rounded-full bg-orange-500/10 px-5 py-2">
            <span className="mr-2 h-2 w-2 rounded-full bg-orange-500" />

            <span className="text-sm font-semibold tracking-[0.2em] text-orange-400">
              CONTACT US
            </span>
          </div>

          <h1 className="mt-8 text-5xl font-bold leading-tight text-white lg:text-6xl">
            联系我们
          </h1>

          <p className="mt-8 text-xl leading-10 text-slate-300">
            无论您需要冷链运输、国内空运、汽运配送还是仓储服务，
            德莱物流都将以专业、高效、安全的服务，
            为您提供值得信赖的一站式物流解决方案。
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

            <a
              href="tel:4008007556"
              className="flex h-14 items-center rounded-2xl bg-orange-500 px-8 text-lg font-semibold text-white transition hover:bg-orange-600"
            >
              立即拨打电话
              <ArrowRight className="ml-3 h-5 w-5" />
            </a>

            <a
              href="#branches"
              className="flex h-14 items-center rounded-2xl border border-white/20 px-8 text-lg font-semibold text-white transition hover:bg-white/10"
            >
              查看营业网点
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}