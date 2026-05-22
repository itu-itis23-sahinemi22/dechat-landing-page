'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '../providers';
import { t } from '../translations';

export function Footer() {
  const { lang } = useLang();
  const tx = t[lang];

  const linkHrefs: Record<string, string> = {
    Özellikler: '/features',
    Features: '/features',
    'Nasıl Çalışır': '/how-it-works',
    'How It Works': '/how-it-works',
    SSS: '/faq',
    FAQ: '/faq',
    İletişim: '/#contact',
    Contact: '/#contact',
  };

  return (
    <footer
      className="px-6 md:px-10 lg:px-16 pt-14 pb-10"
      style={{ background: 'linear-gradient(to bottom, var(--dc-bg), var(--dc-bg-subtle))' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="DeChat" width={42} height={42} className="object-contain" />
            <div>
              <p className="text-lg font-bold" style={{ color: 'var(--dc-text-1)' }}>
                De<span style={{ color: 'var(--dc-accent)' }}>Chat</span>
              </p>
              <p className="text-xs" style={{ color: 'var(--dc-text-2)' }}>{tx.footer.tagline}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#ff0000' }} />
            <span className="text-xs font-medium" style={{ color: '#ff0000' }}>{tx.footer.networkActive}</span>
          </div>
          <p className="text-xs" style={{ color: 'var(--dc-text-2)' }}>© {tx.footer.rights}</p>
        </div>

        <nav>
          <ul className="flex flex-wrap gap-8">
            {tx.footer.links.map((link) => (
              <li key={link}>
                <Link
                  href={linkHrefs[link] ?? '#'}
                  className="text-sm transition-colors hover:opacity-70"
                  style={{ color: 'var(--dc-text-2)' }}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
