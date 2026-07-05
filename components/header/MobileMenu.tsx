'use client';

import { Menu, X } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
}

interface MobileMenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  navItems: NavItem[];
}

export default function MobileMenu({
  open,
  setOpen,
  navItems,
}: MobileMenuProps) {
  return (
    <>
      {/* 打开按钮 */}
      <button
        onClick={() => setOpen(true)}
        className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 lg:hidden"
      >
        <Menu size={24} />
      </button>

      {/* 抽屉 */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-300 lg:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />

        <div
          className={`absolute right-0 top-0 h-full w-[82%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Header */}
          <div className="flex h-16 items-center justify-between border-b px-5">

            <span className="text-lg font-bold text-slate-900">
              德莱物流
            </span>

            <button
              onClick={() => setOpen(false)}
              className="rounded-lg p-2 hover:bg-slate-100"
            >
              <X size={22} />
            </button>

          </div>

          {/* 菜单 */}
          <nav className="space-y-2 p-5">

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-base font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
              >
                {item.name}
              </a>
            ))}

          </nav>

          {/* 按钮 */}
          <div className="absolute bottom-6 left-5 right-5 space-y-3">

            <a
              href="/contact"
              onClick={() => setOpen(false)}
              className="flex h-12 items-center justify-center rounded-xl border border-slate-300 font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
            >
              在线咨询
            </a>

            <a
              href="/contact"
              onClick={() => setOpen(false)}
              className="flex h-12 items-center justify-center rounded-xl bg-blue-600 font-semibold text-white transition hover:bg-blue-700"
            >
              获取报价
            </a>

          </div>

        </div>

      </div>
    </>
  );
}