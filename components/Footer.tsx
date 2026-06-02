import Link from 'next/link';
import styles from './Footer.module.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerTop}>
          <div>
            <div className={styles.footerName}>张斌</div>
            <p className={styles.footerTag}>AI产品经理 / 资深产品经理</p>
          </div>
          <div className={styles.footerLinks}>
            <a href="mailto:zhangbinmuze@outlook.com">邮箱</a>
            <a href="https://github.com/muze0123" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://dohozz.vercel.app" target="_blank" rel="noopener noreferrer">
              在线 Demo
            </a>
            <Link href="/contact">联系</Link>
          </div>
        </div>
        <hr className="divider" />
        <div className={styles.footerBottom}>
          <span>
            &copy; {year} 张斌（Zhang Bin）
          </span>
          <span className={styles.footerBuilt}>
            本站由 Vibe Coding 搭建 &lt;/&gt;
          </span>
        </div>
      </div>
    </footer>
  );
}
