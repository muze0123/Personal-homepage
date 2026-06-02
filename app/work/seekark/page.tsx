import type { Metadata } from 'next';
import { WorkDetail } from '@/components/WorkDetail';

export const metadata: Metadata = {
  title: 'Seekark 时浪 达人营销智能运营平台 — 张斌',
  description:
    '从 0 到 1 构建一站式多平台达人营销智能运营 SaaS，覆盖达人、创意、BI、投放全链路。',
};

export default function SeekarkPage() {
  return <WorkDetail slug="seekark" />;
}
