import type { Metadata } from 'next';
import { WorkDetail } from '@/components/WorkDetail';

export const metadata: Metadata = {
  title: 'DOHOZZ 达人智能运营管理平台 — 张斌',
  description:
    '一站式跨境达人营销智能决策 SaaS，重新定义达人全生命周期管理，并用 Vibe Coding 搭出可演示 Web Demo。',
};

export default function DohozzPage() {
  return <WorkDetail slug="dohozz" />;
}
