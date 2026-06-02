import type { Metadata } from 'next';
import { Orb } from '@/components/Orb';
import { Reveal } from '@/components/Reveal';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: '联系 — 张斌',
};

export default function ContactPage() {
  return (
    <div className="content section">
      {/* Hero */}
      <Reveal className={styles.contactHero}>
        <Orb variant="sky" size={300} style={{ top: '-100px', right: '-80px', opacity: 0.35 }} />
        <span className="eyebrow">Contact</span>
        <h1>正在找下一段旅程</h1>
        <p>
          如果你的团队在找懂业务、能落地 AI、还能 Vibe Coding
          做出产品的产品经理，欢迎联系我。
        </p>
      </Reveal>

      {/* Intent card */}
      <Reveal className={`card ${styles.intentCard}`} delay={0.05}>
        <div className={styles.intentItem}>
          <span className={styles.intentLabel}>求职意向</span>
          <span className={styles.intentValue}>产品经理 / AI产品经理</span>
        </div>
        <div className={styles.intentItem}>
          <span className={styles.intentLabel}>期望城市</span>
          <span className={styles.intentValue}>杭州</span>
        </div>
        <div className={styles.intentItem}>
          <span className={styles.intentLabel}>期望薪资</span>
          <span className={styles.intentValue}>20–25K</span>
        </div>
        <div className={styles.intentItem}>
          <span className={styles.intentLabel}>当前状态</span>
          <span className={styles.intentValue}>
            <span className={styles.statusDot} />
            看新机会
          </span>
        </div>
      </Reveal>

      {/* Contact grid */}
      <div className={styles.contactGrid}>
        <Reveal className={`card-plain ${styles.contactBlock}`} delay={0.05}>
          <span className="eyebrow">邮箱</span>
          <a href="mailto:zhangbinmuze@outlook.com" className={styles.contactEmail}>
            zhangbinmuze@outlook.com
          </a>
          <p className={styles.contactNote}>优先通过邮件联系，我会尽快回复。</p>
        </Reveal>

        <Reveal className={`card-plain ${styles.contactBlock}`} delay={0.1}>
          <span className="eyebrow">简历</span>
          <p className={styles.contactNote}>完整工作经历与项目细节。</p>
          <a href="/AI产品经理／产品经理-张斌.pdf" className="btn btn-primary" download>
            下载 PDF 简历
          </a>
        </Reveal>

        <Reveal className={`card-plain ${styles.contactBlock}`} delay={0.15}>
          <span className="eyebrow">作品与外链</span>
          <div className={styles.contactExternal}>
            <a href="https://github.com/muze0123" target="_blank" rel="noopener noreferrer">
              GitHub →
            </a>
            <a href="https://dohozz.vercel.app" target="_blank" rel="noopener noreferrer">
              DOHOZZ 在线 Demo →
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
