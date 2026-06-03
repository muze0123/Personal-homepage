'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Orb } from '@/components/Orb';
import { Reveal } from '@/components/Reveal';
import { Lightbox } from '@/components/Lightbox';
import { getWorkProject, getWorkProjectName } from '@/lib/workData';
import type { ScreenshotItem } from '@/lib/workData';
import styles from './WorkDetail.module.css';

interface WorkDetailProps {
  slug: string;
}

export function WorkDetail({ slug }: WorkDetailProps) {
  const project = getWorkProject(slug);
  const [lightbox, setLightbox] = useState<ScreenshotItem | null>(null);

  if (!project) {
    return (
      <div className="content section" style={{ textAlign: 'center' }}>
        <h1>项目未找到</h1>
        <Link href="/work" className="link">
          ← 返回项目案例
        </Link>
      </div>
    );
  }

  const nextName = getWorkProjectName(project.nextProject);

  return (
    <div className="content section">
      <Link href="/work" className={`link ${styles.back}`}>
        ← 返回项目案例
      </Link>

      {/* Head */}
      <Reveal className={styles.head}>
        {project.flagship && <span className={styles.flagBadge}>旗舰案例</span>}
        <h1>{project.name}</h1>
        <div className={styles.meta}>
          <span>{project.role}</span>
          <span className={styles.dot}>·</span>
          <span>{project.period}</span>
          <span className={styles.dot}>·</span>
          <span>{project.industry}</span>
        </div>
        <div className={styles.tags}>
          {project.tags.map((t) => (
            <span key={t} className="tag tag-ink">
              {t}
            </span>
          ))}
        </div>
        {(project.demoUrl || project.githubUrl) && (
          <div className={styles.cta}>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                在线体验 Demo ↗
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                GitHub 仓库 ↗
              </a>
            )}
          </div>
        )}
        {project.demoLinks && project.demoLinks.length > 0 && (
          <div className={styles.demoLinks}>
            {project.demoLinks.map((dl) => (
              <a
                key={dl.name}
                href={dl.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.demoLink}
              >
                {dl.name} ↗
              </a>
            ))}
          </div>
        )}
      </Reveal>

      {/* Mobile Screenshots */}
      {project.mobileScreenshots && project.mobileScreenshots.length > 0 && (
        <Reveal className={styles.shotMobileRow} delay={0.05}>
          {project.mobileScreenshots.map((item, i) => (
            <div key={i} className={styles.shotMobileWrap}>
              <img
                src={item.src}
                alt={item.label}
                className={styles.shotMobile}
                onClick={() => setLightbox(item)}
              />
              <div className={styles.shotCaption}>
                <span className={styles.shotCaptionLabel}>{item.label}</span>
                {item.desc && <span className={styles.shotCaptionDesc}>{item.desc}</span>}
              </div>
            </div>
          ))}
        </Reveal>
      )}

      {/* Screenshot grid */}
      {project.screenshots && project.screenshots.length > 0 ? (
        <Reveal className={styles.shotGrid} delay={0.05}>
          {project.screenshots.map((item, i) => (
            <div key={i}>
              <img
                src={item.src}
                alt={item.label}
                className={styles.shotImg}
                onClick={() => setLightbox(item)}
              />
              <div className={styles.shotCaption}>
                <span className={styles.shotCaptionLabel}>{item.label}</span>
                {item.desc && <span className={styles.shotCaptionDesc}>{item.desc}</span>}
              </div>
            </div>
          ))}
        </Reveal>
      ) : (
        <Reveal className={styles.shot} delay={0.05}>
          {project.screenshot ? (
            <div>
              <img
                src={project.screenshot.src}
                alt={project.screenshot.label}
                className={styles.shotImg}
                onClick={() => setLightbox(project.screenshot!)}
              />
              <div className={styles.shotCaption}>
                <span className={styles.shotCaptionLabel}>{project.screenshot.label}</span>
                {project.screenshot.desc && <span className={styles.shotCaptionDesc}>{project.screenshot.desc}</span>}
              </div>
            </div>
          ) : (
            <>
              <Orb variant="sky" size={240} style={{ top: '-50px', right: '-40px', opacity: 0.4 }} />
              <div className={styles.shotInner}>
                <div className={styles.shotLabel}>{project.name}</div>
                <div className={styles.shotHint}>产品截图待补 · 占位中</div>
              </div>
            </>
          )}
        </Reveal>
      )}

      {/* Background */}
      <Reveal className={styles.section}>
        <span className="eyebrow">Background</span>
        <h2>项目背景</h2>
        <p>{project.background}</p>
      </Reveal>

      {/* What I Did */}
      <Reveal className={styles.section} delay={0.05}>
        <span className="eyebrow">What I Did</span>
        <h2>我做了什么</h2>
        {Array.isArray(project.whatIDid)
          ? project.whatIDid.map((text, i) => <p key={i}>{text}</p>)
          : <p>{project.whatIDid}</p>}
        <div className={styles.modules}>
          {project.modules.map((m) => (
            <span key={m} className="tag">
              {m}
            </span>
          ))}
        </div>
      </Reveal>

      {/* Detail Sections */}
      {project.detailSections?.map((section, i) => (
        <Reveal key={i} className={styles.section} delay={0.05 + i * 0.03}>
          <span className="eyebrow">{section.title}</span>
          <h2>{section.title}</h2>
          <p>{section.content}</p>
          {section.items && (
            <ul className={`${styles.list} ${styles.results}`} style={{ marginTop: 'var(--spacing-16)' }}>
              {section.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          )}
        </Reveal>
      ))}

      {/* AI Capability */}
      {project.aiCapability && (
        <Reveal className={styles.section} delay={0.05}>
          <span className="eyebrow">AI Capability</span>
          <h2>{project.aiCapability.title}</h2>
          <ul className={styles.list}>
            {project.aiCapability.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </Reveal>
      )}

      {/* Vibe Coding */}
      {project.vibeCoding && (
        <Reveal className={`card ${styles.vibe}`} delay={0.05}>
          <span className="eyebrow">{project.vibeCoding.title}</span>
          <h2>把需求亲手做成可运行的 Demo</h2>
          <p>{project.vibeCoding.desc}</p>
        </Reveal>
      )}

      {/* Results */}
      <Reveal className={styles.section} delay={0.05}>
        <span className="eyebrow">Results</span>
        <h2>成果与数据</h2>
        <ul className={`${styles.list} ${styles.results}`}>
          {project.results.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </Reveal>

      {/* Next */}
      <Reveal className={styles.next} delay={0.05}>
        <Link href={`/work/${project.nextProject}`} className={`card-plain ${styles.nextCard}`}>
          <span className="eyebrow">下一个项目</span>
          <h3>{nextName} →</h3>
        </Link>
        <Link href="/contact" className={`card ${styles.contactCard}`}>
          <span className="eyebrow">对我的经历感兴趣？</span>
          <h3>联系我 →</h3>
        </Link>
      </Reveal>

      {/* Lightbox */}
      <Lightbox item={lightbox} onClose={() => setLightbox(null)} />
    </div>
  );
}
