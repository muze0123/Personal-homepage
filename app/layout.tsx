import type { Metadata } from 'next';
import './globals.css';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: '张斌 Zhang Bin — AI产品经理 / 资深产品经理',
  description:
    '13 年互联网产品经验，从顺丰 IT 支持到网易系 IM，再到电商 SaaS 资深产品经理，如今专注 AI 产品化方向。精通电商 SaaS 产品的 0→1 搭建与全周期管理，并能用 Cursor / Claude Code 把需求亲手做成可运行的 Demo。',
  keywords: '张斌,AI产品经理,产品经理,电商SaaS,Vibe Coding,达人营销,杭州',
  openGraph: {
    title: '张斌 — AI产品经理 / 资深产品经理',
    description: '13 年产品老兵，能把需求亲手做成可运行的产品。',
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: '张斌 — AI产品经理 / 资深产品经理',
    description: '13 年产品老兵，能把需求亲手做成可运行的产品。',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Noto+Serif+SC:wght@400;600&family=Inter:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
