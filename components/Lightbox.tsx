'use client';

import { useEffect, useCallback } from 'react';
import type { ScreenshotItem } from '@/lib/workData';
import styles from './Lightbox.module.css';

interface LightboxProps {
  item: ScreenshotItem | null;
  onClose: () => void;
}

export function Lightbox({ item, onClose }: LightboxProps) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (!item) return;
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [item, handleKey]);

  if (!item) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <button className={styles.close} onClick={onClose} aria-label="关闭">
        ✕
      </button>
      <div className={styles.body} onClick={(e) => e.stopPropagation()}>
        <img src={item.src} alt={item.label} className={styles.img} />
        <div className={styles.caption}>
          <div className={styles.label}>{item.label}</div>
          {item.desc && <div className={styles.desc}>{item.desc}</div>}
        </div>
      </div>
    </div>
  );
}
