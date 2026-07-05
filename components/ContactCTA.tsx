'use client';

import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="overflow-hidden rounded-[36px] bg-gradient-to-r from-[#0F2D5C] via-[#173A7A] to-[#0F2D5C] px-10 py-24 shadow-2xl">

          <div className="mx-auto max-w-4xl text-center">

            <div className="inline-flex items-center rounded-full bg-white/10 px-5 py-2 backdrop-blur">
              <span className="mr-2 h-2 w-2 rounded-full bg-orange-400" />

              <span className="text-sm font-semibold tracking-[0.2em] text-orange-300">
                START YOUR LOGISTICS JOURNEY
              </span>
            </div>

            <h2 className="mt-8 text-5xl font-bold leading-tight text-white lg:text-6xl">
              准备开启您的物流合作？
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-10 text-slate-300">
              专注冷链运输、国内空运、汽运配送及仓储服务，
              德莱物流期待成为您长期、稳定、值得信赖的物流合作伙伴。
            </p>

            <div className="mt-10 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-8 py-4 backdrop-blur">

              <Phone className="mr-3 h-6 w-6 text-orange-400" />

              <span className="text-2xl font-bold tracking-wide text-white">
                0731-84685086
              </span>

            </div>

            <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

              <a
                href="tel:073184685086"
                className="flex h-14 items-center rounded-2xl bg-orange-500 px-10 text-lg font-semibold text-white transition hover:bg-orange-600"
              >
                立即咨询

                <ArrowRight className="ml-3 h-5 w-5" />
              </a>

              <Link
                href="/contact"
                className="flex h-14 items-center rounded-2xl border border-white/20 px-10 text-lg font-semibold text-white transition hover:bg-white/10"
              >
                联系我们
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}