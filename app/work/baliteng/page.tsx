import type { Metadata } from 'next';
import { WorkDetail } from '@/components/WorkDetail';

export const metadata: Metadata = {
  title: '百礼腾 数智平台 — 张斌',
  description:
    '基于头部礼企资源打造全链路数智化 SaaS 平台，帮助企业实现数字资产沉淀与商业价值最大化。',
};

export default function BalitengPage() {
  return <WorkDetail slug="baliteng" />;
}
