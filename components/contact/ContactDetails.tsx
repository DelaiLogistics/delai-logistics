'use client';

import {
  Phone,
  Smartphone,
  MapPin,
  Mail,
  Globe,
  MessageCircle,
} from 'lucide-react';

const items = [
  {
    icon: Phone,
    title: '固定电话',
    value: '0731-84685086',
  },
  {
    icon: Smartphone,
    title: '联系电话',
    value: '19908499946 / 19911386855',
  },
  {
    icon: MapPin,
    title: '总部地址',
    value: '湖南省长沙市雨花区大桥三区6栋南三单元',
  },
  {
    icon: Mail,
    title: '客服邮箱',
    value: 'service@dlccl.com',
  },
  {
    icon: Globe,
    title: '官方网站',
    value: 'www.dlccl.com',
  },
  {
    icon: MessageCircle,
    title: '微信公众号',
    value: '湖南德莱物流有限公司',
  },
];

export default function ContactDetails() {
  return (
    <div className="mt-12 space-y-6">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="flex items-start gap-5 border-b border-slate-200 pb-6"
          >
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-orange-50">
              <Icon className="h-8 w-8 text-orange-500" />
            </div>

            <div className="flex-1">
              <p className="text-sm text-slate-500">
                {item.title}
              </p>

              <p className="mt-2 text-2xl font-semibold leading-9 text-slate-900">
                {item.value}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}