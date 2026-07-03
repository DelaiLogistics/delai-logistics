'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-32 lg:flex lg:items-center lg:justify-between">

        {/* Left */}
        <div className="max-w-2xl">

          <span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium tracking-wide text-cyan-300">
            COLD CHAIN LOGISTICS
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight text-white lg:text-6xl">
            全程温控
            <br />
            安全送达每一次托付
          </h1>

          <p className="mt-8 text-lg leading-9 text-slate-300">
            德莱物流专注冷链运输十余年，
            建立北京、上海、西安、海南四大核心冷链专线，
            提供从干线运输、城市配送到仓储的一体化冷链物流解决方案，
            为食品、生鲜、医药等行业提供稳定、高效、安全的运输保障。
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/contact"
              className="rounded-xl bg-cyan-500 px-7 py-4 font-semibold text-white transition hover:bg-cyan-400"
            >
              获取运输方案
            </Link>

            <Link
              href="/network"
              className="rounded-xl border border-white/20 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              查看运输网络
            </Link>

          </div>

          <div className="mt-12 flex flex-wrap gap-8">

            <div>
              <div className="text-3xl font-bold text-cyan-400">10+</div>
              <div className="mt-2 text-slate-400">年冷链运输经验</div>
            </div>

            <div>
              <div className="text-3xl font-bold text-cyan-400">4</div>
              <div className="mt-2 text-slate-400">核心冷链专线</div>
            </div>

            <div>
              <div className="text-3xl font-bold text-cyan-400">24H</div>
              <div className="mt-2 text-slate-400">运输监控</div>
            </div>

          </div>

        </div>

        {/* Right */}
        <div className="mt-20 lg:mt-0">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

            <div className="space-y-6">

              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-slate-400">运输状态</span>
                <span className="font-semibold text-green-400">
                  运输中
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-400">当前温度</span>
                <span className="text-2xl font-bold text-white">
                  2℃
                </span>
              </div>

              <div className="h-2 rounded-full bg-slate-700">
                <div className="h-2 w-2/3 rounded-full bg-cyan-400"></div>
              </div>

              <div className="grid grid-cols-2 gap-5 pt-4">

                <div className="rounded-xl bg-slate-900/60 p-5">
                  <div className="text-sm text-slate-400">
                    起始地
                  </div>

                  <div className="mt-2 text-lg font-semibold text-white">
                    长沙
                  </div>
                </div>

                <div className="rounded-xl bg-slate-900/60 p-5">
                  <div className="text-sm text-slate-400">
                    目的地
                  </div>

                  <div className="mt-2 text-lg font-semibold text-white">
                    上海
                  </div>
                </div>

                <div className="rounded-xl bg-slate-900/60 p-5">
                  <div className="text-sm text-slate-400">
                    温控范围
                  </div>

                  <div className="mt-2 text-lg font-semibold text-cyan-300">
                    -18℃ ~ 8℃
                  </div>
                </div>

                <div className="rounded-xl bg-slate-900/60 p-5">
                  <div className="text-sm text-slate-400">
                    全程GPS
                  </div>

                  <div className="mt-2 text-lg font-semibold text-cyan-300">
                    实时追踪
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}