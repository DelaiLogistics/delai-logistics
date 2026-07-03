'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: '首页', href: '/' },
  { name: '业务服务', href: '#services' },
  { name: '冷链专线', href: '#routes' },
  { name: '仓储配送', href: '#warehouse' },
  { name: '服务优势', href: '#advantages' },
  { name: '关于德莱', href: '#about' },
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
            ? 'bg-white/95 shadow-md backdrop-blur-xl'
            : 'bg-white/90 backdrop-blur-lg'
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-8">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="德莱物流"
              width={220}
              height={56}
              priority
              className="h-12 w-auto lg:h-14"
            />
          </Link>

          {/* PC Nav */}
          <nav className="hidden items-center gap-10 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-[15px] font-medium text-slate-700 transition duration-300 hover:text-[#173A7A]
                after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0
                after:bg-[#173A7A] after:transition-all hover:after:w-full"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="rounded-full bg-[#173A7A] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#102C60]"
            >
              获取报价
            </a>
          </div>

          {/* Mobile */}
          <button
            onClick={() => setOpen(true)}
            className="rounded-lg p-2 text-slate-700 lg:hidden"
          >
            <Menu size={28} />
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
          className="absolute inset-0 bg-black/40"
          onClick={() => setOpen(false)}
        />

        <div
          className={`absolute right-0 top-0 h-full w-[82%] max-w-sm bg-white transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex h-[72px] items-center justify-between border-b px-6">
            <Image
              src="/logo.svg"
              alt="德莱物流"
              width={170}
              height={42}
              className="h-10 w-auto"
            />

            <button onClick={() => setOpen(false)}>
              <X size={28} />
            </button>
          </div>

          <nav className="px-6 py-5">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block border-b border-slate-100 py-5 text-base text-slate-700 transition hover:text-[#173A7A]"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="absolute bottom-8 left-6 right-6">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex h-12 items-center justify-center rounded-full bg-[#173A7A] text-white font-semibold transition hover:bg-[#102C60]"
            >
              获取报价
            </a>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-[72px]" />
    </>
  );
}