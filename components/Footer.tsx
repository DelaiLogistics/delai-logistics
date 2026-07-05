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
          {/* Brand section */}
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
              德莱物流成立于2013年，总部位于湖南长沙。专注冷链运输、国内空运、汽运配送及仓储服务，致力于成为湖南冷链零担物流头部企业。
            </p>
          </div>

          {/* Services */}
          <div className="footer-section" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-base md:text-lg font-semibold text-white">主营业务</h3>
            <ul className="mt-4 md:mt-6 space-y-2 md:space-y-3">
              {services.map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="flex items-center text-sm md:text-base text-slate-400 hover:text-white transition-all duration-300 group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Routes */}
          <div className="footer-section" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-base md:text-lg font-semibold text-white">冷链专线</h3>
            <ul className="mt-4 md:mt-6 space-y-2 md:space-y-3">
              {routes.map((item) => (
                <li key={item}>
                  <a
                    href="#routes"
                    className="flex items-center text-sm md:text-base text-slate-400 hover:text-white transition-all duration-300 group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-base md:text-lg font-semibold text-white">联系我们</h3>
            <div className="mt-4 md:mt-6 space-y-3 md:space-y-4">
              <a href="#" className="flex items-start gap-3 text-slate-400 hover:text-white group transition-colors duration-300">
                <MapPin className="w-5 h-5 mt-0.5 text-blue-400 flex-shrink-0 group-hover:text-blue-300 transition-colors duration-300" />
                <p className="text-sm md:text-base">湖南省长沙市</p>
              </a>

              <a
                href="tel:0731-84605086"
                className="flex items-center gap-3 text-slate-400 hover:text-white group transition-colors duration-300"
              >
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 group-hover:text-blue-300 transition-colors duration-300" />
                <span className="text-sm md:text-base">0731-84605086</span>
              </a>

              <a
                href="mailto:info@delai56.com"
                className="flex items-center gap-3 text-slate-400 hover:text-white group transition-colors duration-300"
              >
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 group-hover:text-blue-300 transition-colors duration-300" />
                <span className="text-sm md:text-base">info@delai56.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-slate-700/50" />

      {/* Bottom bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs md:text-sm text-slate-400">
          <p className="hover:text-slate-300 transition-colors duration-300">
            © {new Date().getFullYear()} 湖南德莱物流有限公司 版权所有
          </p>

          <div className="flex items-center gap-4 md:gap-6">
            <a
              href="/privacy"
              className="hover:text-white transition-colors duration-300 relative group"
            >
              隐私政策
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="/terms"
              className="hover:text-white transition-colors duration-300 relative group"
            >
              服务条款
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}