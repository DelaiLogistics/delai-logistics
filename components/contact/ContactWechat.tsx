'use client';

import Image from 'next/image';
import {
  BadgeCheck,
  Clock3,
  Phone,
} from 'lucide-react';

export default function ContactWechat() {
  return (
    <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-10 shadow-sm">

      <div className="text-center">

        <h3 className="text-3xl font-bold text-slate-900">
          官方客服微信
        </h3>

        <p className="mt-4 leading-8 text-slate-600">
          扫码添加客服微信
          <br />
          获取物流报价、运输咨询及售后服务
        </p>

      </div>

      <div className="mt-8 flex justify-center">

        <Image
          src="/wechat.jpg"
          alt="德莱物流官方客服"
          width={230}
          height={230}
          priority
          className="rounded-3xl border border-slate-200 bg-white p-3 shadow-lg"
        />

      </div>

      <div className="mt-10 space-y-5">

        <div className="flex items-center">

          <BadgeCheck className="mr-4 h-6 w-6 text-orange-500" />

          <span className="text-slate-700">
            全国物流运输咨询
          </span>

        </div>

        <div className="flex items-center">

          <Clock3 className="mr-4 h-6 w-6 text-orange-500" />

          <span className="text-slate-700">
            7 × 24 小时在线服务
          </span>

        </div>

        <div className="flex items-center">

          <Phone className="mr-4 h-6 w-6 text-orange-500" />

          <span className="text-slate-700">
            10 分钟快速报价
          </span>

        </div>

      </div>

    </div>
  );
}