'use client';

import {
  ArrowRight,
  Building2,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#173A7A] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-16 lg:grid-cols-2">

          {/* Left */}

          <div>

            <span className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-blue-100">
              CONTACT US
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-white lg:text-5xl">
              获取您的专属物流方案
            </h2>

            <p className="mt-8 text-lg leading-9 text-blue-100">
              无论是冷链运输、国内空运、汽运配送还是仓储服务，
              德莱物流都将根据您的业务需求，
              提供专业、高效、安全的一站式物流解决方案。
            </p>

            <div className="mt-12 space-y-6">

              <div className="flex items-start gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                  <Building2 className="h-7 w-7 text-white" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white">
                    公司名称
                  </h3>

                  <p className="mt-2 text-blue-100">
                    湖南德莱物流有限公司
                  </p>
                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                  <MapPin className="h-7 w-7 text-white" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white">
                    公司地址
                  </h3>

                  <p className="mt-2 text-blue-100">
                    湖南省长沙市（请填写详细地址）
                  </p>
                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                  <Phone className="h-7 w-7 text-white" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white">
                    联系电话
                  </h3>

                  <p className="mt-2 text-blue-100">
                    请填写公司联系电话
                  </p>
                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                  <Mail className="h-7 w-7 text-white" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white">
                    邮箱
                  </h3>

                  <p className="mt-2 text-blue-100">
                    请填写公司邮箱
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="rounded-[32px] bg-white p-10 shadow-2xl">

            <h3 className="text-3xl font-bold text-slate-900">
              在线留言
            </h3>

            <p className="mt-3 text-slate-500">
              提交需求，我们将尽快与您联系。
            </p>

            <form className="mt-10 space-y-6">

              <input
                type="text"
                placeholder="您的姓名"
                className="h-14 w-full rounded-2xl border border-slate-200 px-5 outline-none transition focus:border-[#173A7A]"
              />

              <input
                type="text"
                placeholder="联系电话"
                className="h-14 w-full rounded-2xl border border-slate-200 px-5 outline-none transition focus:border-[#173A7A]"
              />

              <input
                type="text"
                placeholder="公司名称"
                className="h-14 w-full rounded-2xl border border-slate-200 px-5 outline-none transition focus:border-[#173A7A]"
              />

              <textarea
                rows={6}
                placeholder="请输入您的运输需求..."
                className="w-full rounded-2xl border border-slate-200 p-5 outline-none transition focus:border-[#173A7A]"
              />

              <button
                type="submit"
                className="flex h-14 w-full items-center justify-center rounded-2xl bg-[#173A7A] text-lg font-semibold text-white transition hover:bg-[#102C60]"
              >
                提交需求

                <ArrowRight className="ml-2 h-5 w-5" />
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}