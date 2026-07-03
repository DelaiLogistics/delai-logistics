'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
  ChevronRight,
} from 'lucide-react';

const services = [
  '冷链运输',
  '国内空运',
  '汽运配送',
  '仓储服务',
];

const routes = [
  '北京专线',
  '上海专线',
  '西安专线',
  '海南专线',
];

export default function Footer() {
  return (
    <footer className="bg-[#0F274F] text-white">

      {/* Top */}

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-4 lg:px-8">

        {/* Logo */}

        <div>

          <Image
            src="/logo.svg"
            alt="德莱物流"
            width={220}
            height={60}
            className="h-14 w-auto brightness-0 invert"
          />

          <p className="mt-8 leading-8 text-blue-100">
            德莱物流成立于2013年，总部位于湖南长沙，
            专注冷链运输、国内空运、汽运配送及仓储服务，
            致力于成为湖南冷链零担物流头部企业。
          </p>

        </div>

        {/* 服务 */}

        <div>

          <h3 className="text-xl font-semibold">
            主营业务
          </h3>

          <ul className="mt-8 space-y-5">

            {services.map((item) => (
              <li key={item}>
                <Link
                  href="#services"
                  className="flex items-center text-blue-100 transition hover:text-white"
                >
                  <ChevronRight className="mr-2 h-4 w-4" />

                  {item}
                </Link>
              </li>
            ))}

          </ul>

        </div>

        {/* 专线 */}

        <div>

          <h3 className="text-xl font-semibold">
            冷链专线
          </h3>

          <ul className="mt-8 space-y-5">

            {routes.map((item) => (
              <li key={item}>
                <Link
                  href="#routes"
                  className="flex items-center text-blue-100 transition hover:text-white"
                >
                  <ChevronRight className="mr-2 h-4 w-4" />

                  {item}
                </Link>
              </li>
            ))}

          </ul>

        </div>

        {/* 联系 */}

        <div>

          <h3 className="text-xl font-semibold">
            联系我们
          </h3>

          <div className="mt-8 space-y-6">

            <div className="flex items-start gap-4">

              <MapPin className="mt-1 h-5 w-5 text-blue-300" />

              <p className="leading-7 text-blue-100">
                湖南省长沙市
                <br />
                （请填写详细地址）
              </p>

            </div>

            <div className="flex items-center gap-4">

              <Phone className="h-5 w-5 text-blue-300" />

              <span className="text-blue-100">
                请填写联系电话
              </span>

            </div>

            <div className="flex items-center gap-4">

              <Mail className="h-5 w-5 text-blue-300" />

              <span className="text-blue-100">
                请填写企业邮箱
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-blue-200 lg:flex-row lg:px-8">

          <p>
            © {new Date().getFullYear()} 湖南德莱物流有限公司 版权所有
          </p>

          <div className="flex items-center gap-6">

            <Link
              href="/privacy"
              className="transition hover:text-white"
            >
              隐私政策
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-white"
            >
              服务条款
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}