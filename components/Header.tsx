'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

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
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto';
  }, [open]);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 shadow-lg backdrop-blur-xl'
            : 'bg-white/90 backdrop-blur-lg'
        }`}
      >
        <div className="mx-auto flex h-16 md:h-[72px] max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo.svg"
              alt="德莱物流"
              width={220}
              height={56}
              priority
              className="h-10 md:h-12 lg:h-14 w-auto transition-transform duration-300 group-hover:scale-110"
            />
          </Link>

          {/* PC Nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-300 hover:text-blue-600 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-blue-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </nav>

          {/* Right */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors duration-300"
            >
              在线咨询
            </a>
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              获取报价
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="rounded-lg p-2 text-slate-700 lg:hidden hover:bg-slate-100 transition-colors duration-300"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-300 ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />

        <div
          className={`absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Mobile Header */}
          <div className="flex h-16 items-center justify-between border-b border-slate-200 px-4">
            <Image
              src="/logo.svg"
              alt="德莱物流"
              width={170}
              height={42}
              className="h-10 w-auto"
            />

            <button
              onClick={() => setOpen(false)}
              className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 transition-colors duration-300"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile Nav */}
          <nav className="px-4 py-6 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-lg text-base font-medium text-slate-700 transition-all duration-300 hover:bg-blue-50 hover:text-blue-600"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile CTA */}
          <div className="absolute bottom-8 left-4 right-4 space-y-3">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex h-12 items-center justify-center rounded-lg border-2 border-slate-200 text-slate-700 font-semibold transition-all duration-300 hover:border-blue-600 hover:text-blue-600"
            >
              在线咨询
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex h-12 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              获取报价
            </a>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-16 md:h-[72px]" />
    </>
  );
}