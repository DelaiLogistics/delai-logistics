'use client';

import { Building2, Mail, MapPin, Phone, Send } from 'lucide-react';

const contactItems = [
  {
    icon: Building2,
    title: '公司名称',
    value: '湖南德莱物流有限公司',
  },
  {
    icon: MapPin,
    title: '公司地址',
    value: '湖南省长沙市雨花区大桥三区6栋南三单元',
  },
  {
    icon: Phone,
    title: '联系电话',
    value: '0731-84685086',
  },
  {
    icon: Mail,
    title: '客服邮箱',
    value: 'service@dlccl.com',
  },
];

export default function Contact() {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .contact-item {
          animation: slideInLeft 0.6s ease-out forwards;
        }
        .contact-form {
          animation: slideInRight 0.6s ease-out forwards;
        }
      `}</style>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Left - Contact Info */}
          <div className="space-y-6 md:space-y-8">
            <div className="inline-flex rounded-full bg-white/10 border border-white/20 px-4 md:px-5 py-2 text-xs md:text-sm font-semibold text-blue-100 backdrop-blur">
              CONTACT US
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                获取您的专属
                <span className="block mt-2">物流方案</span>
              </h2>
            </div>

            <p className="text-base md:text-lg text-blue-100 leading-relaxed max-w-lg">
              无论是冷链运输、国内空运、汽运配送还是仓储服务，德莱物流都将根据您的业务需求，提供专业、高效、安全的一站式物流解决方案。
            </p>

            {/* Contact Items */}
            <div className="space-y-4 md:space-y-6 pt-4">
              {contactItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="contact-item flex items-start gap-4 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                      <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-semibold text-white">{item.title}</h3>
                      <p className="mt-1 text-sm md:text-base text-blue-100 group-hover:text-white transition-colors duration-300">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="contact-form rounded-2xl md:rounded-3xl bg-white/95 backdrop-blur border border-white/20 p-6 md:p-10 shadow-2xl hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">在线留言</h3>
            <p className="mt-2 md:mt-3 text-sm md:text-base text-slate-600">提交需求，我们将尽快与您联系。</p>

            <form className="mt-6 md:mt-8 space-y-4 md:space-y-6">
              <div>
                <label htmlFor="name" className="text-xs md:text-sm font-medium text-slate-700 block mb-2">
                  您的姓名
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="请输入姓名"
                  className="w-full h-11 md:h-12 rounded-lg border border-slate-200 px-4 md:px-5 text-sm md:text-base outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/30 focus:shadow-lg placeholder:text-slate-400"
                />
              </div>

              <div>
                <label htmlFor="phone" className="text-xs md:text-sm font-medium text-slate-700 block mb-2">
                  联系电话
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="请输入电话号码"
                  className="w-full h-11 md:h-12 rounded-lg border border-slate-200 px-4 md:px-5 text-sm md:text-base outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/30 focus:shadow-lg placeholder:text-slate-400"
                />
              </div>

              <div>
                <label htmlFor="company" className="text-xs md:text-sm font-medium text-slate-700 block mb-2">
                  公司名称
                </label>
                <input
                  id="company"
                  type="text"
                  placeholder="请输入公司名称"
                  className="w-full h-11 md:h-12 rounded-lg border border-slate-200 px-4 md:px-5 text-sm md:text-base outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/30 focus:shadow-lg placeholder:text-slate-400"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-xs md:text-sm font-medium text-slate-700 block mb-2">
                  运输需求
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="请输入您的运输需求..."
                  className="w-full rounded-lg border border-slate-200 px-4 md:px-5 py-3 md:py-4 text-sm md:text-base outline-none transition resize-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/30 focus:shadow-lg placeholder:text-slate-400"
                />
              </div>

              <button
                type="submit"
                className="w-full h-11 md:h-12 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold text-sm md:text-base transition hover:shadow-lg hover:-translate-y-0.5 duration-300 flex items-center justify-center gap-2 group"
              >
                <span>提交需求</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}