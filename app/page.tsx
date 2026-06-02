import Link from 'next/link';
import { Orb } from '@/components/Orb';
import { Reveal } from '@/components/Reveal';
import styles from './page.module.css';

const stats = [
  { value: '13年', label: '产品经验' },
  { value: '30w+', label: '达人资源池' },
  { value: '8w+', label: '日均高并发数据' },
  { value: '+10%', label: 'GMV / ROI 双增长' },
  { value: '100%', label: '版本按期交付率' },
];

const trinity = [
  {
    idx: '01',
    title: '懂业务',
    desc: '13 年沉淀，精通电商 SaaS，独立负责 B/C 端产品从 0 到 1 搭建及全周期管理，熟悉达人营销、CRM、权限体系等架构设计。',
  },
  {
    idx: '02',
    title: '能落地 AI',
    desc: '具备 Prompt、工作流、Skill 创建及 MCP 应用能力，深入 Agent 设计与 RAG 构建。AI 潜力评分、智能建联、周期化自动邀约等功能已落地上线。',
  },
  {
    idx: '03',
    title: '会写代码',
    desc: '熟练 Cursor / Claude Code 开发闭环，通过 Vibe Coding 把需求拆解为页面结构、组件逻辑、接口字段与验收标准，快速交付可运行 Demo / MVP。',
  },
];

const projects = [
  {
    slug: 'seekark',
    industry: '直播电商 · 达人营销 SaaS',
    name: 'Seekark 时浪 达人营销智能运营平台',
    summary:
      '从 0 到 1 构建一站式多平台达人营销智能运营 SaaS，覆盖达人、创意、BI、投放全链路。',
    tags: ['SaaS', '直播电商', 'AIGC'],
  },
  {
    slug: 'baliteng',
    industry: '礼品行业 · 全链路数智化 SaaS',
    name: '百礼腾 数智平台',
    summary:
      '基于头部礼企资源打造全链路数智化 SaaS 平台，帮助企业实现数字资产沉淀与商业价值最大化。',
    tags: ['SaaS', '供应链', 'ERP'],
  },
  {
    slug: 'im-system',
    industry: '企业服务 · IM 协同系统',
    name: '中航商网 即时通讯应用系统平台',
    summary:
      '基于私有云架构结合网易 SaaS / PaaS 服务，为中国航空工业集团从 0 到 1 构建专属 IM 协同系统。',
    tags: ['IM', '企业协同', '私有云'],
  },
];

const dohozzModules = ['达人库', '批量建联', '寄样管理', '履约追踪', '合作单', '绩效归属'];

export default function HomePage() {
  return (
    <div className={styles.home}>
      {/* Hero */}
      <section className={styles.hero}>
        <Orb variant="sky" size={420} style={{ top: '-80px', right: '-120px', opacity: 0.45 }} />
        <Orb variant="sunset" size={260} style={{ bottom: '-60px', left: '-80px', opacity: 0.3 }} />
        <div className={`content ${styles.heroInner}`}>
          <span className="eyebrow fade-up">AI产品经理 / 资深产品经理</span>
          <h1 className={`${styles.heroTitle} fade-up delay-1`}>
            资深产品力 × AI 工程力，把构想变成可用的产品
          </h1>
          <p className={`${styles.heroSub} fade-up delay-2`}>
            电商SaaS资深 · AI产品化 · Vibe Coding
          </p>
          <div className={`${styles.heroCta} fade-up delay-3`}>
            <Link href="/work" className="btn btn-primary">
              查看项目案例 →
            </Link>
            <a href="/AI产品经理／产品经理-张斌.pdf" className="btn btn-ghost" download>
              下载简历
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className={`section-tight ${styles.statsBand}`}>
        <div className="content">
          <div className={styles.statsGrid}>
            {stats.map((s, i) => (
              <Reveal key={s.label} className={styles.stat} delay={i * 0.05}>
                <div className={styles.statValue}>{s.value}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trinity */}
      <section className="section">
        <div className="content">
          <Reveal className="section-head">
            <span className="eyebrow">差异化 · 三位一体</span>
            <h2>
              我不只是写 PRD 的人，
              <br />
              我能把 PRD 变成可运行的产品。
            </h2>
          </Reveal>
          <div className={styles.trinityGrid}>
            {trinity.map((t, i) => (
              <Reveal key={t.idx} className={`card ${styles.trinityCard}`} delay={i * 0.08}>
                <div className={styles.trinityIndex}>{t.idx}</div>
                <h3>{t.title}</h3>
                <p>{t.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DOHOZZ Spotlight */}
      <section className="section">
        <div className="content">
          <Reveal className={styles.spotlight}>
            <div className={styles.spotlightText}>
              <span className="eyebrow">旗舰案例 · 可在线体验</span>
              <h2>DOHOZZ 达人智能运营管理平台</h2>
              <p>
                一站式跨境达人营销智能决策 SaaS，重新定义达人全生命周期管理，并用 Vibe
                Coding 搭出可演示 Web Demo。
              </p>
              <div className={styles.spotlightTags}>
                {['SaaS', '跨境电商', 'AI Agent', 'Vibe Coding', '0→1'].map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
              <div className={styles.spotlightCta}>
                <a
                  href="https://dohozz.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  在线体验 Demo ↗
                </a>
                <Link href="/work/dohozz" className="btn btn-ghost">
                  查看完整案例 →
                </Link>
              </div>
            </div>
            <div className={styles.spotlightVisual}>
              <Orb variant="sky" size={200} style={{ top: '-40px', right: '-30px', opacity: 0.5 }} />
              <div className={styles.visualCard}>
                <div className={styles.visualLabel}>DOHOZZ</div>
                <div className={styles.visualModules}>
                  {dohozzModules.map((m) => (
                    <span key={m}>{m}</span>
                  ))}
                </div>
                <div className={styles.visualFlow}>找达人 → 建联 → 寄样 → 转化 → 复盘</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Project Grid */}
      <section className="section">
        <div className="content">
          <Reveal className={`section-head ${styles.sectionHeadRow}`}>
            <h2>更多产品</h2>
            <Link href="/work" className="link">
              查看全部 →
            </Link>
          </Reveal>
          <div className={styles.projGrid}>
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <Link href={`/work/${p.slug}`} className={`card-plain ${styles.projCard}`}>
                  <div className={styles.projIndustry}>{p.industry}</div>
                  <h3 className={styles.projName}>{p.name}</h3>
                  <p className={styles.projSummary}>{p.summary}</p>
                  <div className={styles.projTags}>
                    {p.tags.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About + Final CTA */}
      <section className="section">
        <div className="content">
          <Reveal className={`card ${styles.aboutCta}`}>
            <span className="eyebrow">关于我</span>
            <p className={styles.aboutText}>
              13 年互联网产品经验，从顺丰 IT 支持到网易系 IM，再到电商 SaaS
              资深产品经理，如今专注 AI 产品化方向。精通电商 SaaS 产品的 0→1
              搭建与全周期管理，并能用 Cursor / Claude Code 把需求亲手做成可运行的 Demo。
            </p>
            <Link href="/about" className="link">
              了解更多 →
            </Link>
          </Reveal>

          <Reveal className={styles.finalCta} delay={0.1}>
            <h2>在找产品 / AI产品经理？</h2>
            <p>杭州 · 产品经理 / AI产品经理 · 期望 20–25K</p>
            <div className={styles.finalCtaBtns}>
              <Link href="/contact" className="btn btn-primary">
                联系我 →
              </Link>
              <a href="/AI产品经理／产品经理-张斌.pdf" className="btn btn-ghost" download>
                下载简历
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
