'use client';

const stats = [
  {
    value: '13+',
    label: '行业经验',
  },
  {
    value: '300+',
    label: '直营网点',
  },
  {
    value: '1000+',
    label: '企业客户',
  },
  {
    value: '24H',
    label: '在线服务',
  },
];

export default function HeroStats() {
  return (
    <section className="bg-white pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-y-10 rounded-[32px] border border-slate-100 bg-white px-10 py-12 shadow-[0_20px_60px_rgba(15,23,42,0.05)] lg:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={item.label}
              className={`text-center ${
                index !== stats.length - 1
                  ? 'lg:border-r lg:border-slate-200'
                  : ''
              }`}
            >
              <div className="text-6xl font-extrabold tracking-tight text-orange-500">
                {item.value}
              </div>

              <div className="mt-4 text-lg font-medium text-slate-600">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}