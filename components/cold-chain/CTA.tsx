'use client';

import Link from 'next/link';
import {
  ArrowRight,
  Thermometer,
  Truck,
  ShieldCheck,
  Headphones,
} from 'lucide-react';

const advantages = [
  {
    icon: Thermometer,
    title: '全程温控',
  },
  {
    icon: Truck,
    title: '核心专线',
  },
  {
    icon: ShieldCheck,
    title: '安全运输',
  },
  {
    icon: Headphones,
    title: '快速响应',
  },
];

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 py-24">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur lg:p-16">

          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">

            {/* Left */}
            <div>

              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                READY TO START
              </span>

              <h2 className="mt-6 text-4xl font-bold leading-tight text-white lg:text-5xl">
                让每一次冷链运输
                <br />
                都值得信赖
              </h2>

              <p className="mt-8 text-lg leading-9 text-slate-300">
                德莱物流专注冷链运输十余年，
                为食品、生鲜、医药及供应链企业提供专业、高效、安全的物流服务。
                欢迎联系我们，为您制定专属运输方案。
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-7 py-4 font-semibold text-white transition hover:bg-cyan-400"
                >
                  获取运输方案
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/contact"
                  className="rounded-xl border border-white/20 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
                >
                  联系德莱物流
                </Link>

              </div>

            </div>

            {/* Right */}
            <div className="grid grid-cols-2 gap-5">

              {advantages.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition hover:border-cyan-400 hover:bg-white/10"
                  >
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500 text-white">
                      <Icon size={28} />
                    </div>

                    <h3 className="mt-5 text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}