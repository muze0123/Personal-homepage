import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/Reveal';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: '项目案例 — 张斌',
};

const works = [
  {
    slug: 'dohozz',
    industry: '跨境电商 · 达人营销 SaaS',
    period: '2025.08 – 至今',
    name: 'DOHOZZ 达人智能运营管理平台',
    summary:
      '一站式跨境达人营销智能决策 SaaS，重新定义达人全生命周期管理，并用 Vibe Coding 搭出可演示 Web Demo。',
    tags: ['SaaS', '跨境电商', 'AI Agent', 'Vibe Coding', '0→1'],
    flagship: true,
  },
  {
    slug: 'seekark',
    industry: '直播电商 · 达人营销 SaaS',
    period: '2023.10 – 2025.07',
    name: 'Seekark 时浪 达人营销智能运营平台',
    summary:
      '从 0 到 1 构建一站式多平台达人营销智能运营 SaaS，覆盖达人、创意、BI、投放全链路。',
    tags: ['SaaS', '直播电商', 'AIGC', '多平台', '0→1'],
    flagship: false,
  },
  {
    slug: 'baliteng',
    industry: '礼品行业 · 全链路数智化 SaaS',
    period: '2021.04 – 2023.08',
    name: '百礼腾 数智平台',
    summary:
      '基于头部礼企资源打造全链路数智化 SaaS 平台，帮助企业实现数字资产沉淀与商业价值最大化。',
    tags: ['SaaS', '供应链', 'ERP', 'CRM', 'B2B2C'],
    flagship: false,
  },
  {
    slug: 'im-system',
    industry: '企业服务 · IM 协同系统',
    period: '2020.01 – 2021.04',
    name: '中航商网 即时通讯应用系统平台',
    summary:
      '基于私有云架构结合网易 SaaS / PaaS 服务，为中国航空工业集团从 0 到 1 构建专属 IM 协同系统。',
    tags: ['IM', '企业协同', '私有云', '0→1', '信息安全'],
    flagship: false,
  },
];

export default function WorkPage() {
  return (
    <div className="content section">
      <Reveal className="section-head">
        <span className="eyebrow">Work</span>
        <h1 style={{ fontSize: 'var(--text-heading-lg)' }}>做过的产品</h1>
        <p className={`sub ${styles.heroSub}`}>
          13 年里，我从 0 到 1 搭过电商 SaaS、达人营销平台、礼品数智平台、企业 IM
          系统。 每个项目都覆盖从架构设计到全周期管理，其中 DOHOZZ 还用 Vibe Coding
          做出了可在线体验的 Demo。
        </p>
      </Reveal>

      <div className={styles.workList}>
        {works.map((w, i) => (
          <Reveal key={w.slug} delay={i * 0.06}>
            <Link
              href={`/work/${w.slug}`}
              className={`card-plain ${styles.workCard} ${w.flagship ? styles.flagship : ''}`}
            >
              {w.flagship && <span className={styles.flagBadge}>旗舰案例 · 可在线体验</span>}
              <div className={styles.workMeta}>
                <span className={styles.workIndustry}>{w.industry}</span>
                <span className={styles.workPeriod}>{w.period}</span>
              </div>
              <h2 className={styles.workName}>{w.name}</h2>
              <p className={styles.workSummary}>{w.summary}</p>
              <div className={styles.workFooter}>
                <div className={styles.workTags}>
                  {w.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
                <span className={styles.workArrow}>查看案例 →</span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
