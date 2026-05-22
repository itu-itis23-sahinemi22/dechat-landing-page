'use client';

import React from 'react';
import { useLang } from '../providers';
import { t } from '../translations';
import { PhoneFrame, BrowserFrame } from '../components/ScreenFrames';

const featureScreens = [
  <PhoneFrame key="chat"      src="/ss-mobile-temp2.png" alt="DeChat messaging screen" />,
  <BrowserFrame key="web"    src="/ss1.png"              alt="DeChat web app"          />,
  <PhoneFrame key="contacts"  src="/ss-mobile-temp.png"  alt="DeChat contacts list"    />,
];

const INLINE_LINKS: { keyword: string; href: string }[] = [
  { keyword: 'XMTP', href: 'https://xmtp.org' },
  { keyword: 'Alchemy API', href: 'https://www.alchemy.com' },
];

function renderText(text: string): React.ReactNode {
  const link = INLINE_LINKS.find((l) => text.includes(l.keyword));
  if (!link) return text;
  const parts = text.split(link.keyword);
  return (
    <>
      {parts[0]}
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'var(--dc-accent)', textDecoration: 'underline' }}
      >
        {link.keyword}
      </a>
      {parts[1]}
    </>
  );
}

export default function FeaturesPage() {
  const { lang } = useLang();
  const tx = t[lang];

  return (
    <div style={{ background: 'var(--dc-bg)' }}>
      {/* Page header */}
      <div
        className="pt-32 pb-16 px-6 md:px-10 lg:px-16 text-center"
        style={{ background: 'linear-gradient(to bottom, var(--dc-bg-subtle), var(--dc-bg))' }}
      >
        <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--dc-accent)' }}>
          {tx.features.pageTitle}
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold" style={{ color: 'var(--dc-text-1)' }}>
          {tx.features.pageSubtitle}
        </h1>
      </div>

      {/* Feature rows */}
      <div className="px-6 md:px-10 lg:px-16 pb-28">
        <div className="max-w-7xl mx-auto space-y-28">
          {tx.features.items.map((feature, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-24`}
              >
                {/* Screenshot */}
                <div className="flex-shrink-0 flex items-center justify-center">
                  <div className="relative">
                    <div
                      className="absolute -inset-10 rounded-full blur-3xl opacity-25 pointer-events-none"
                      style={{ background: 'radial-gradient(circle, #183EE9, transparent)' }}
                    />
                    <div className="relative">{featureScreens[index]}</div>
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1 max-w-xl">
                  <span
                    className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5"
                    style={{ background: 'var(--dc-badge-bg)', color: 'var(--dc-badge-text)' }}
                  >
                    {feature.badge}
                  </span>
                  <h2
                    className="text-4xl md:text-5xl font-extrabold leading-tight mb-5"
                    style={{ color: 'var(--dc-text-1)', whiteSpace: 'pre-line' }}
                  >
                    {feature.title}
                  </h2>
                  <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--dc-text-2)' }}>
                    {renderText(feature.desc)}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium" style={{ color: 'var(--dc-accent)' }}>
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {renderText(feature.detail)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
