'use client';

import { useLang } from '../providers';
import { t } from '../translations';

export default function HowItWorksPage() {
  const { lang } = useLang();
  const tx = t[lang];

  return (
    <div style={{ background: 'var(--dc-bg-subtle)' }} className="min-h-screen">
      {/* Page header */}
      <div className="pt-32 pb-16 px-6 md:px-10 lg:px-16 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--dc-accent)' }}>
          {tx.howItWorks.pageTitle}
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold" style={{ color: 'var(--dc-text-1)' }}>
          {tx.howItWorks.pageSubtitle}
        </h1>
      </div>

      {/* Steps */}
      <div className="px-6 md:px-10 lg:px-16 pb-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tx.howItWorks.steps.map((step, i) => (
              <div
                key={i}
                className="relative p-8 rounded-3xl border"
                style={{ background: 'var(--dc-card)', borderColor: 'var(--dc-border)' }}
              >
                <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--dc-text-1)' }}>
                  {step.title}
                </h2>
                <p className="text-base leading-relaxed" style={{ color: 'var(--dc-text-2)' }}>
                  {step.desc}
                </p>
                <div
                  className="absolute top-8 right-8 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                  style={{ background: 'var(--dc-accent)' }}
                >
                  {i + 1}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <a
              href="#"
              className="inline-block px-10 py-4 rounded-2xl text-base font-semibold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-1 hover:shadow-xl"
              style={{ background: 'var(--dc-accent)' }}
            >
              {tx.howItWorks.cta}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
