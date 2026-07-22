'use client';

import Image from 'next/image';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';

const services = ['冷链运输', '国内空运', '汽运配送', '仓储服务'];

const routes = ['北京专线', '上海专线', '西安专线', '海南专线'];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-slate-100">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .footer-section {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>

      {/* Main content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">

          {/* Brand */}
          <div className="footer-section lg:col-span-1">
            <div className="h-10 md:h-12 inline-block">
              <Image
                src="/logo.svg"
                alt="德莱物流"
                width={180}
                height={48}
                className="h-full w-auto brightness-200 hover:brightness-300 transition-all duration-300"
              />
            </div>

            <p className="mt-4 md:mt-6 text-sm md:text-base leading-relaxed text-slate-300 hover:text-slate-200 transition-colors duration-300">
              德莱物流成立于2013年，总部位于湖南长沙，专注冷链运输、国内空运、汽运配送及仓储服务，重点打造北京、上海、西安、海南四大冷链专线，致力于成为湖南冷链零担物流头部企业。
            </p>
          </div>

          {/* Services */}
          <div className="footer-section" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-base md:text-lg font-semibold text-white">
              主营业务
            </h3>

            <ul className="mt-4 md:mt-6 space-y-2 md:space-y-3">
              {services.map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="flex items-center text-sm md:text-base text-slate-400 hover:text-white transition-all duration-300 group"
                  >
                    <ChevronRight className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Routes */}
          <div className="footer-section" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-base md:text-lg font-semibold text-white">
              冷链专线
            </h3>

            <ul className="mt-4 md:mt-6 space-y-2 md:space-y-3">
              {routes.map((item) => (
                <li key={item}>
                  <a
                    href="#routes"
                    className="flex items-center text-sm md:text-base text-slate-400 hover:text-white transition-all duration-300 group"
                  >
                    <ChevronRight className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-base md:text-lg font-semibold text-white">
              联系我们
            </h3>

            <div className="mt-4 md:mt-6 space-y-4">

              <div className="flex items-start gap-3 text-slate-400">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-400" />
                <p className="text-sm leading-6 md:text-base">
                  湖南省长沙市雨花区大桥三区6栋南三单元
                </p>
              </div>

              <a
                href="tel:4008007556"
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors duration-300"
              >
                <Phone className="h-5 w-5 flex-shrink-0 text-blue-400" />
                <span className="text-sm md:text-base">
                  4008007556
                </span>
              </a>

              <a
                href="mailto:service@dlccl.com"
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors duration-300"
              >
                <Mail className="h-5 w-5 flex-shrink-0 text-blue-400" />
                <span className="text-sm md:text-base">
                  service@dlccl.com
                </span>
              </a>

            </div>
          </div>

        </div>
      </div>

      <div className="border-t border-slate-700/50" />

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-slate-400 sm:flex-row sm:px-6 lg:px-8 md:text-sm">

        <p>
          © {new Date().getFullYear()} 湖南德莱物流有限公司 版权所有
        </p>

        <div className="flex items-center gap-6">
          <a
            href="/privacy"
            className="hover:text-white transition-colors duration-300"
          >
            隐私政策
          </a>

          <a
            href="/terms"
            className="hover:text-white transition-colors duration-300"
          >
            服务条款
          </a>
        </div>

      </div>
    </footer>
  );
}