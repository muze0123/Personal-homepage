import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Orb } from '@/components/Orb';
import { Reveal } from '@/components/Reveal';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: '关于我 — 张斌',
};

const advantages = [
  '精通电商 SaaS 产品，独立负责 B/C 端产品从 0 到 1 搭建及全周期管理，熟悉达人营销、CRM、权限体系等架构设计。',
  '擅长将业务目标系统拆解为页面结构、用户流程、数据字段与验收标准，输出高质量 PRD 并推动研发高效执行。',
  '熟练使用 Cursor / Claude Code 构建开发闭环，可通过 Vibe Coding 搭建业务 MVP 与可交互 Demo，实现需求前置验证。',
  '具备 Prompt、工作流、Skill 创建及 MCP 应用能力，正深入学习 Agent 设计和 RAG 构建，将业务需求转化为 AI 产品方案。',
  '具备前后端基础认知，理解组件化开发、接口调用与 API 联调逻辑，降低跨职能沟通损耗。',
  '擅长推动产研、运营、销售多团队协同，具备标准化交付流程建立能力，善于在资源受限下保障产品质量与项目节奏。',
];

const skillGroups = [
  {
    group: '产品能力',
    tags: ['需求调研', 'PRD 撰写', '原型设计', '数据驱动', '商业化规划', '全周期管理'],
  },
  {
    group: 'AI 能力',
    tags: ['Prompt 工程', '工作流编排', 'Skill 创建', 'MCP 应用', 'Agent 设计', 'RAG 构建', 'AIGC 应用'],
  },
  {
    group: '技术能力',
    tags: ['Vibe Coding', 'Cursor', 'Claude Code', 'Codex', 'SQL', '接口联调'],
  },
  {
    group: '设计工具',
    tags: ['Axure', 'MockingBot', 'Figma', 'Sketch', 'Visio', 'Xmind', 'PS'],
  },
];

const courses = [
  '计算机科学与技术基础',
  '数据结构与算法',
  '软件工程',
  '用户界面设计',
  '项目管理与产品开发',
];

const hobbies = ['骑行', '读书', '游泳', '跑步', '登山'];

export default function AboutPage() {
  return (
    <div className="content section">
      {/* Hero */}
      <Reveal className={styles.aboutHero}>
        <div className={styles.aboutAvatar}>
          <Orb variant="sky" size={220} style={{ top: '-30px', left: '-30px', opacity: 0.4, zIndex: 0 }} />
          <Image
            src="/avatar.jpg"
            alt="张斌 头像"
            width={260}
            height={370}
            className={styles.avatarImg}
            priority
          />
        </div>
        <div className={styles.aboutIntro}>
          <span className="eyebrow">关于我</span>
          <h1>张斌</h1>
          <div className={styles.aboutTitle}>AI产品经理 / 资深产品经理</div>
          <p>
            我是一名复合型产品经理，7 年经验横跨电商 SaaS、跨境达人营销、ERP/CRM、企业 IM 等领域，具备 B/C 端产品从 0 到 1 独立搭建与全生命周期管理经验。
          </p>
          <p>
            我相信好产品始于对业务的深度理解——先吃透业务，再把目标拆解为清晰的产品方案，让研发"一看就懂"。进入 AI 时代，我熟练运用 Vibe Coding 将构想快速变为可交互 Demo，把需求验证前置，并持续探索 AI Agent、Prompt 工程在真实业务中的落地。
          </p>
          <div className={styles.aboutActions}>
            <a href="mailto:zhangbinmuze@outlook.com" className="btn btn-primary">
              发邮件给我 →
            </a>
            <a href="/AI产品经理／产品经理-张斌.pdf" className="btn btn-ghost" download>
              下载简历
            </a>
          </div>
        </div>
      </Reveal>

      <hr className="divider" style={{ margin: 'var(--spacing-72) 0' }} />

      {/* Advantages */}
      <section>
        <Reveal className="section-head">
          <span className="eyebrow">Personal Advantages</span>
          <h2>个人优势</h2>
        </Reveal>
        <div className={styles.advGrid}>
          {advantages.map((text, i) => (
            <Reveal key={i} className={`card-plain ${styles.advItem}`} delay={i * 0.05}>
              <span className={styles.advNum}>0{i + 1}</span>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Capability Map */}
      <section className="section-tight" style={{ marginTop: 'var(--spacing-72)' }}>
        <Reveal className="section-head">
          <span className="eyebrow">Capability Map</span>
          <h2>能力图谱</h2>
        </Reveal>
        <div className={styles.skillGrid}>
          {skillGroups.map((g, i) => (
            <Reveal key={g.group} className={styles.skillBlock} delay={i * 0.06}>
              <h3 className={styles.skillGroup}>{g.group}</h3>
              <div className={styles.skillTags}>
                {g.tags.map((t) => (
                  <span key={t} className="tag tag-ink">
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Education & Hobbies */}
      <section className="section-tight" style={{ marginTop: 'var(--spacing-72)' }}>
        <div className={styles.eduHobby}>
          <Reveal className={`card ${styles.eduCard}`}>
            <div className={styles.eduContent}>
              <span className="eyebrow">Education</span>
              <h3>浙江大学</h3>
              <div className={styles.eduDegree}>本科 · 信息管理与信息系统</div>
              <div className={styles.eduPeriod}>2017 – 2020</div>
              <p className={styles.eduHonor}>2018 年浙江大学优秀学生荣誉</p>
              <div className={styles.eduCourses}>
                {courses.map((c) => (
                  <span key={c} className="tag">
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.eduCertWrap}>
              <img
                src="/教育部学籍在线验证报告.png"
                alt="教育部学籍在线验证报告"
                className={styles.eduCert}
              />
            </div>
          </Reveal>

          <Reveal className={`card ${styles.hobbyCard}`} delay={0.08}>
            <span className="eyebrow">Hobby</span>
            <h3>兴趣爱好</h3>
            <div className={styles.hobbyList}>
              {hobbies.map((h) => (
                <span key={h} className={styles.hobbyPill}>
                  {h}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Bottom CTA */}
      <Reveal className={styles.aboutBottomCta} delay={0.1}>
        <h2>想进一步了解？</h2>
        <Link href="/work" className="btn btn-primary">
          看我做过的产品 →
        </Link>
      </Reveal>
    </div>
  );
}
