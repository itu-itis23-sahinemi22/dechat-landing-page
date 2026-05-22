'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useLang, useTheme } from '../providers';
import { t, type Lang } from '../translations';

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang } = useLang();
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const isHero = pathname === '/';
  const tx = t[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navBg = isHero
    ? scrolled ? 'rgba(10,11,13,0.88)' : 'transparent'
    : scrolled ? 'var(--dc-nav-bg-scrolled)' : 'var(--dc-nav-bg)';

  const borderBottom = isHero
    ? scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none'
    : `1px solid var(--dc-nav-border)`;

  const textColor = isHero ? 'rgba(255,255,255,0.65)' : 'var(--dc-nav-text)';
  const textHover = isHero ? '#fff' : 'var(--dc-nav-hover)';
  const logoNameColor = isHero ? '#fff' : 'var(--dc-logo-color)';
  const iconColor = isHero ? 'rgba(255,255,255,0.65)' : 'var(--dc-nav-text)';

  const isActive = (href: string) => pathname === href;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ background: navBg, backdropFilter: 'blur(12px)', borderBottom }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image src="/logo.png" alt="DeChat" width={38} height={38} className="object-contain" />
          <span className="text-xl font-bold transition-colors" style={{ color: logoNameColor }}>
            De<span style={{ color: 'var(--dc-accent)' }}>Chat</span>
          </span>
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { href: '/features', label: tx.nav.features },
            { href: '/how-it-works', label: tx.nav.howItWorks },
            { href: '/faq', label: tx.nav.faq },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium transition-colors"
              style={{ color: isActive(href) ? 'var(--dc-accent)' : textColor }}
              onMouseEnter={e => (e.currentTarget.style.color = isActive(href) ? 'var(--dc-accent)' : textHover)}
              onMouseLeave={e => (e.currentTarget.style.color = isActive(href) ? 'var(--dc-accent)' : textColor)}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right: theme toggle + lang toggle + download */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="w-8 h-8 flex items-center justify-center rounded-lg transition-colors"
            style={{ color: iconColor }}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* Lang toggle */}
          <div
            className="flex items-center rounded-xl overflow-hidden border"
            style={{ borderColor: isHero ? 'rgba(255,255,255,0.15)' : 'var(--dc-lang-border)' }}
          >
            {(['tr', 'en'] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className="px-3 py-1.5 text-xs font-semibold uppercase transition-all duration-200"
                style={{
                  background: lang === l ? 'var(--dc-accent)' : 'transparent',
                  color: lang === l ? '#fff' : textColor,
                }}
              >
                {l}
              </button>
            ))}
          </div>

          <a
            href="#"
            className="hidden sm:block px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
            style={{ background: 'var(--dc-accent)' }}
          >
            {tx.nav.download}
          </a>
        </div>
      </div>
    </header>
  );
}
