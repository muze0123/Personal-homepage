import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        padding: 'var(--spacing-80) var(--spacing-32)',
        textAlign: 'center',
      }}
    >
      <h1
        style={{
          fontSize: 'var(--text-display)',
          fontFamily: 'var(--font-serif)',
          color: 'var(--color-ink)',
          marginBottom: 'var(--spacing-16)',
        }}
      >
        404
      </h1>
      <p
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-body)',
          color: 'var(--color-pale-stone)',
          marginBottom: 'var(--spacing-32)',
        }}
      >
        页面不存在 / Page not found
      </p>
      <Link href="/" className="btn btn-primary">
        返回首页 →
      </Link>
    </div>
  );
}
