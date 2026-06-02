'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Nav.module.css';

const navLinks = [
  { href: '/about', label: '关于我' },
  { href: '/experience', label: '职业历程' },
  { href: '/work', label: '项目案例' },
  { href: '/capabilities', label: '能力专题' },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.root}>
      <div className={styles.noticeBar}>
        <span className={styles.noticeDot} />
        <span>正在看新机会 · 杭州 · 产品 / AI产品经理</span>
      </div>
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <Link href="/" className={styles.brand}>
            <span className={styles.brandMark}>ZB</span>
            <span className={styles.brandName}>张斌</span>
          </Link>
          <button
            className={styles.navToggle}
            onClick={() => setOpen(!open)}
            aria-label="菜单"
          >
            <span />
            <span />
            <span />
          </button>
          <div className={`${styles.navLinks} ${open ? styles.open : ''}`}>
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`btn btn-ghost ${styles.navCta}`}
              onClick={() => setOpen(false)}
            >
              联系我 →
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
