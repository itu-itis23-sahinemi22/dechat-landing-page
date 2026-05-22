'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLang } from './providers';
import { t } from './translations';

function AppStoreButton({ label }: { label: string }) {
  const isApple = label.toLowerCase().includes('app store') || label.toLowerCase().includes('indir') && !label.toLowerCase().includes('google');
  return (
    <a
      href="#"
      className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
      style={{ background: 'rgba(255,255,255,0.07)', borderColor: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)' }}
    >
      {isApple ? (
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
      ) : (
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.4l2.651 1.535a1 1 0 010 1.729l-2.651 1.534-2.534-2.534 2.534-2.265zM5.864 1.278L16.8 7.61l-2.302 2.302-8.634-8.634z" />
        </svg>
      )}
      <div>
        <p className="text-[9px] leading-none" style={{ color: 'rgba(255,255,255,0.55)' }}>
          {isApple ? 'Download on the' : 'GET IT ON'}
        </p>
        <p className="text-sm font-semibold text-white leading-tight">
          {isApple ? 'App Store (Soon)' : 'Google Play (Soon)'}
        </p>
      </div>
    </a>
  );
}

export function LandingPage() {
  const { lang } = useLang();
  const tx = t[lang];

  return (
    <section
      className="relative min-h-screen flex items-center pt-20 pb-16 px-6 md:px-10 lg:px-16 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0A0B0D 0%, #01024F 60%, #0a1a6e 100%)' }}
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Glow blobs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(24,62,233,0.18) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(24,62,233,0.12) 0%, transparent 70%)' }} />

      <div className="relative max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left: Text */}
          <div className="space-y-7">
  

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight">
              {tx.hero.title.map((line, i) => (
                <span key={i} className="block" style={i === 0 ? { color: '#183EE9' } : {}}>
                  {line}
                </span>
              ))}
            </h1>

            <p className="text-xl font-medium leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
              {tx.hero.subtitle}
            </p>

            <p className="text-base leading-relaxed max-w-md" style={{ color: 'rgba(255,255,255,0.5)' }}>
              {tx.hero.desc}
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              <AppStoreButton label={tx.hero.appStore} />
              <AppStoreButton label={tx.hero.googlePlay} />
            </div>

            <div className="flex items-center gap-6">
              <a href="#" className="text-sm font-medium transition-colors hover:opacity-80" style={{ color: '#183EE9' }}>
                {tx.hero.tryWeb}
              </a>
              <Link href="/features" className="text-sm font-medium transition-colors hover:opacity-80" style={{ color: 'rgba(255,255,255,0.45)' }}>
                {tx.hero.exploreFeatures}
              </Link>
            </div>
          </div>

          {/* Right: Phone */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 blur-3xl rounded-full" style={{ background: 'radial-gradient(circle, rgba(24,62,233,0.3) 0%, transparent 70%)' }} />
              <Image
                src="/phone.png"
                alt="DeChat App"
                width={420}
                height={680}
                className="relative drop-shadow-2xl w-full max-w-[380px] lg:max-w-[420px]"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none" style={{ background: 'linear-gradient(to top, var(--dc-bg), transparent)' }} />
    </section>
  );
}
