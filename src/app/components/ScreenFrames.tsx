'use client';

import Image from 'next/image';

export function PhoneFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className="relative shadow-2xl"
      style={{
        width: 260,
        borderRadius: 40,
        background: '#111215',
        padding: '10px 8px',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      {/* Top notch bar */}
      <div className="flex items-center justify-between px-3 mb-1" style={{ height: 28 }}>
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.45)' }}>9:41</span>
        <div
          style={{
            width: 72,
            height: 14,
            background: '#111215',
            borderRadius: 8,
          }}
        />
        <div className="flex gap-0.5 items-end">
          {[3, 4, 5, 5].map((h, i) => (
            <div
              key={i}
              style={{ width: 3, height: h * 2, background: 'rgba(255,255,255,0.45)', borderRadius: 1 }}
            />
          ))}
        </div>
      </div>

      {/* Screenshot */}
      <div style={{ borderRadius: 26, overflow: 'hidden' }}>
        <Image
          src={src}
          alt={alt}
          width={244}
          height={528}
          className="w-full h-auto block"
          style={{ display: 'block' }}
        />
      </div>

      {/* Home indicator */}
      <div className="flex items-center justify-center" style={{ height: 24 }}>
        <div style={{ width: 80, height: 4, background: 'rgba(255,255,255,0.25)', borderRadius: 2 }} />
      </div>
    </div>
  );
}

export function BrowserFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className="shadow-2xl"
      style={{
        borderRadius: 16,
        overflow: 'hidden',
        border: '1px solid var(--dc-border)',
        width: 840,
        maxWidth: '100%',
      }}
    >
      {/* Browser chrome */}
      <div
        className="flex items-center gap-2 px-4"
        style={{ background: '#f0f1f5', height: 40, borderBottom: '1px solid rgba(1,2,79,0.08)' }}
      >
        {/* Traffic lights */}
        <div className="flex items-center gap-1.5">
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FF5F57' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FFBD2E' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28C840' }} />
        </div>
        {/* Address bar */}
        <div
          className="flex-1 flex items-center gap-2 px-3"
          style={{ background: '#fff', borderRadius: 8, height: 26, marginLeft: 8 }}
        >
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#00C950' }} />
          <span style={{ fontSize: 11, color: '#707579' }}>app.dechat.io</span>
        </div>
      </div>

      {/* Screenshot */}
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={750}
        className="w-full h-auto block"
        style={{ display: 'block' }}
      />
    </div>
  );
}
