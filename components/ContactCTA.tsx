'use client';

import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="overflow-hidden rounded-[28px] bg-gradient-to-r from-[#0F2D5C] via-[#173A7A] to-[#0F2D5C] px-6 py-16 shadow-2xl sm:px-10 sm:py-20 lg:rounded-[36px] lg:px-14 lg:py-24">

          <div className="mx-auto max-w-4xl text-center">

            {/* Badge */}
            <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 backdrop-blur sm:px-5">
              <span className="mr-2 h-2 w-2 rounded-full bg-orange-400" />

              <span className="text-xs font-semibold tracking-[0.22em] text-orange-300 sm:text-sm">
                START YOUR LOGISTICS JOURNEY
              </span>
            </div>

            {/* Title */}
            <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:mt-8 lg:text-6xl">
              准备开启您的物流合作？
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:mt-8 sm:text-lg sm:leading-9 lg:text-xl lg:leading-10">
              专注冷链运输、国内空运、汽运配送及仓储服务，
              德莱物流期待成为您长期、稳定、值得信赖的物流合作伙伴。
            </p>

            {/* Phone */}
            <div className="mt-8 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-6 py-3 backdrop-blur sm:mt-10 sm:px-8 sm:py-4">

              <Phone className="mr-3 h-5 w-5 text-orange-400 sm:h-6 sm:w-6" />

              <span className="text-xl font-bold tracking-wide text-white sm:text-2xl">
                4008007556
              </span>

            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:justify-center">

              <a
                href="tel:4008007556"
                className="flex h-14 w-full items-center justify-center rounded-2xl bg-orange-500 px-8 text-lg font-semibold text-white transition hover:bg-orange-600 sm:w-auto sm:px-10"
              >
                立即咨询
                <ArrowRight className="ml-3 h-5 w-5" />
              </a>

              <Link
                href="/contact"
                className="flex h-14 w-full items-center justify-center rounded-2xl border border-white/20 px-8 text-lg font-semibold text-white transition hover:bg-white/10 sm:w-auto sm:px-10"
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