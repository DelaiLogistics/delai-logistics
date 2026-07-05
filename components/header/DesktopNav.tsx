'use client';

const navItems = [
  {
    name: '首页',
    href: '/',
  },
  {
    name: '业务服务',
    href: '#services',
  },
  {
    name: '运输案例',
    href: '#cases',
  },
  {
    name: '联系我们',
    href: '/contact',
  },
];

export default function DesktopNav() {
  return (
    <nav className="hidden lg:flex items-center gap-2">

      {navItems.map((item) => (

        <a
          key={item.name}
          href={item.href}
          className="group relative rounded-lg px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-300 hover:text-blue-600"
        >
          {item.name}

          <span className="absolute bottom-0 left-4 right-4 h-0.5 origin-left scale-x-0 rounded-full bg-blue-600 transition-transform duration-300 group-hover:scale-x-100" />
        </a>

      ))}

    </nav>
  );
}