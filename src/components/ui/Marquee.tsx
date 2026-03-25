'use client';

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

export default function Marquee({
  children,
  className = '',
  speed = 30,
}: MarqueeProps) {
  return (
    <div
      className={`group overflow-hidden ${className}`}
      style={{ '--marquee-speed': `${speed}s` } as React.CSSProperties}
    >
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden>
          {children}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee var(--marquee-speed, 30s) linear infinite;
        }
      `}</style>
    </div>
  );
}
