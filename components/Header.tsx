'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: '首页', href: '#' },
  { name: '业务服务', href: '#services' },
  { name: '冷链专线', href: '#routes' },
  { name: '服务优势', href: '#advantages' },
  { name: '联系我们', href: '#contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 shadow-lg backdrop-blur-xl'
            : 'bg-white/90 backdrop-blur-lg'
        }`}
      >
        <div className="mx-auto flex h-[64px] lg:h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="德莱物流"
              width={200}
              height={52}
              priority
              className="h-9 sm:h-10 lg:h-12 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group relative px-4 py-2 text-sm font-medium text-slate-700 transition hover:text-blue-600"
              >
                {item.name}
                <span className="absolute bottom-0 left-4 right-4 h-0.5 scale-x-0 rounded-full bg-blue-600 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              className="rounded-lg px-6 py-2.5 text-sm font-semibold text-slate-700 transition hover:text-blue-600"
            >
              在线咨询
            </a>

            <a
              href="tel:4008007556"
              className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              获取报价
            </a>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-xl hover:bg-slate-100 lg:hidden"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}

      <div
        className={`fixed inset-0 z-[60] transition lg:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div
          onClick={() => setOpen(false)}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        />

        <aside
          className={`absolute right-0 top-0 flex h-full w-[84%] max-w-[360px] flex-col bg-white transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex h-16 items-center justify-between border-b px-5">
            <Image
              src="/logo.svg"
              alt="德莱物流"
              width={170}
              height={42}
              className="h-9 w-auto"
            />

            <button
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-slate-100"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex-1 px-5 py-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-4 text-[17px] font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div
            className="space-y-3 border-t p-5"
            style={{
              paddingBottom: 'max(20px, env(safe-area-inset-bottom))',
            }}
          >
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex h-12 items-center justify-center rounded-xl border font-semibold text-slate-700"
            >
              在线咨询
            </a>

            <a
              href="tel:4008007556"
              onClick={() => setOpen(false)}
              className="flex h-12 items-center justify-center rounded-xl bg-blue-600 font-semibold text-white"
            >
              获取报价
            </a>
          </div>
        </aside>
      </div>

      <div className="h-[64px] lg:h-[72px]" />
    </>
  );
}