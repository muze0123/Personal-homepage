import type { Metadata } from 'next';
import Link from 'next/link';
import { Orb } from '@/components/Orb';
import { Reveal } from '@/components/Reveal';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: '能力 — 张斌',
};

const vibeCodingFlow = [
  { step: '拆需求', desc: '把业务目标拆解为页面结构、用户流程' },
  { step: '定字段', desc: '梳理组件逻辑、接口字段与验收标准' },
  { step: 'AI 搭建', desc: '用 Cursor / Claude Code 快速搭可运行 Demo' },
  { step: '验证', desc: '前置验证交互路径、功能优先级与卖点' },
];

const aiMethods = [
  {
    title: 'Prompt 工程',
    desc: '设计稳定可复用的提示词，驱动模型产出符合业务预期的结果。',
  },
  {
    title: '工作流编排',
    desc: '将多步任务拆解为可编排的工作流，串联模型与工具调用。',
  },
  {
    title: 'Skill 创建',
    desc: '把专业工作流沉淀为可复用的 Skill，提升交付一致性。',
  },
  {
    title: 'MCP 应用',
    desc: '通过 MCP 连接外部数据与工具，扩展 AI 的实际作业能力。',
  },
  {
    title: 'Agent 设计',
    desc: '正深入构建具备规划与工具使用能力的 Agent。',
  },
  {
    title: 'RAG 构建',
    desc: '正深入学习检索增强生成，让 AI 基于私有知识作答。',
  },
];

const tools = [
  'Vibe Coding',
  'Cursor',
  'Claude Code',
  'Codex',
  'VS',
  '简单SQL',
  'API接口联调',
  'Axure',
  'Figma',
  'Stitch',
  'Lovart',
  'Pencil',
  'MockingBot',
  'Sketch',
  'Visio',
  'Xmind',
  'PS',
];

export default function CapabilitiesPage() {
  return (
    <div className="content section">
      <Reveal className="section-head">
        <span className="eyebrow">Capabilities</span>
        <h1 style={{ fontSize: 'var(--text-heading-lg)' }}>不止于写 PRD</h1>
        <p className={`sub ${styles.capSub}`}>
          我把两件事做成了差异化：一是产品从 0 到 1 搭建及全周期管理，二是用 Vibe
          Coding 把需求亲手做成可运行的产品。
        </p>
      </Reveal>

      {/* Vibe Coding Workflow */}
      <section className={styles.capBlock}>
        <Reveal>
          <span className="eyebrow">01 · Vibe Coding 工作流</span>
          <h2 className={styles.capH2}>从需求到可运行 Demo，我自己就能闭环</h2>
        </Reveal>
        <div className={styles.flow}>
          {vibeCodingFlow.map((item, i) => (
            <Reveal key={item.step} className={styles.flowNode} delay={i * 0.08}>
              <div className={styles.flowCard}>
                <span className={styles.flowIdx}>0{i + 1}</span>
                <div className={styles.flowStep}>{item.step}</div>
                <p>{item.desc}</p>
              </div>
              {i < vibeCodingFlow.length - 1 && (
                <span className={styles.flowArrow}>→</span>
              )}
            </Reveal>
          ))}
        </div>
        <Reveal className={`card ${styles.capProof}`} delay={0.1}>
          <Orb variant="sky" size={180} style={{ top: '-40px', right: '-30px', opacity: 0.4 }} />
          <div className={styles.capProofInner}>
            <span className="eyebrow">实证</span>
            <p className={styles.proofText}>
              在 DOHOZZ
              项目中，我基于 Cursor / Claude Code
              搭出覆盖达人库、批量建联、寄样、履约、绩效、看板的可演示 Web Demo，
              在正式开发前就验证了交互路径与商业化卖点。
            </p>
            <a
              href="https://dohozz.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              在线体验 DOHOZZ Demo ↗
            </a>
          </div>
        </Reveal>
      </section>

      {/* AI Product Methods */}
      <section className={styles.capBlock}>
        <Reveal>
          <span className="eyebrow">02 · AI 产品方法</span>
          <h2 className={styles.capH2}>把业务需求转化为 AI 产品方案</h2>
        </Reveal>
        <div className={styles.aiGrid}>
          {aiMethods.map((m, i) => (
            <Reveal key={m.title} className={`card-plain ${styles.aiCard}`} delay={i * 0.05}>
              <h3>{m.title}</h3>
              <p>{m.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Toolbox */}
      <section className={styles.capBlock}>
        <Reveal>
          <span className="eyebrow">03 · 工具箱</span>
          <h2 className={styles.capH2}>趁手的工具</h2>
        </Reveal>
        <Reveal className={styles.toolbox} delay={0.05}>
          {tools.map((t) => (
            <span key={t} className={`tag tag-ink ${styles.toolboxTag}`}>
              {t}
            </span>
          ))}
        </Reveal>
      </section>

      {/* Bottom CTA */}
      <Reveal className={styles.capCta} delay={0.1}>
        <h2>这些能力，能为你的团队做什么？</h2>
        <Link href="/contact" className="btn btn-primary">
          聊聊 →
        </Link>
      </Reveal>
    </div>
  );
}
