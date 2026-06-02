import type { Metadata } from 'next';
import { WorkDetail } from '@/components/WorkDetail';

export const metadata: Metadata = {
  title: '中航商网 即时通讯应用系统平台 — 张斌',
  description:
    '基于私有云架构结合网易 SaaS / PaaS 服务，为中国航空工业集团从 0 到 1 构建专属 IM 协同系统。',
};

export default function ImSystemPage() {
  return <WorkDetail slug="im-system" />;
}
