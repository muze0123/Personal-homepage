interface OrbProps {
  variant?: 'sky' | 'sunset';
  size?: number;
  style?: React.CSSProperties;
}

const gradients = {
  sky: 'linear-gradient(rgb(160, 181, 235), rgb(167, 252, 205))',
  sunset:
    'linear-gradient(rgba(255, 148, 115, 0.8) 7%, rgba(160, 181, 235, 0.8) 83.82%)',
};

export function Orb({ variant = 'sky', size = 300, style }: OrbProps) {
  return (
    <div
      aria-hidden="true"
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: gradients[variant],
        filter: 'blur(8px)',
        opacity: 0.4,
        pointerEvents: 'none',
        position: 'absolute',
        ...style,
      }}
    />
  );
}
