'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useLang } from '../providers';
import { t } from '../translations';

type FaqItem = {
  q: string;
  a: string;
  links?: Record<string, string | undefined>;
};

function renderAnswer(a: string, links?: Record<string, string | undefined>): React.ReactNode {
  if (!links) return a;
  const entry = Object.entries(links).find(([, v]) => v !== undefined);
  if (!entry) return a;

  const keyword = entry[0];
  const href = entry[1] as string;
  const parts = a.split(keyword);
  if (parts.length === 1) return a;

  return (
    <>
      {parts[0]}
      <a
        href={href}
        onClick={(e) => {
          e.preventDefault();
          const id = href.replace('#', '');
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            el.click();
          }
        }}
        style={{ color: 'var(--dc-accent)', textDecoration: 'underline', cursor: 'pointer' }}
      >
        {keyword}
      </a>
      {parts.slice(1).join(keyword)}
    </>
  );
}

function FaqRow({
  item,
  id,
  index,
  open,
  onToggle,
}: {
  item: FaqItem;
  id: string;
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  const num = String(index + 1).padStart(2, '0');
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && rowRef.current) {
      setTimeout(() => {
        rowRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 50);
    }
  }, [open]);

  return (
    <div ref={rowRef} id={id} className="border-b" style={{ borderColor: 'var(--dc-border)' }}>
      <button
        className="w-full flex items-center justify-between gap-4 py-6 text-left"
        onClick={onToggle}
      >
        <span className="flex items-center gap-3">
          <span
            className="text-sm font-bold tabular-nums flex-shrink-0"
            style={{ color: 'var(--dc-accent)', minWidth: '2rem' }}
          >
            {num}
          </span>
          <span className="text-base md:text-lg font-semibold" style={{ color: 'var(--dc-text-1)' }}>
            {item.q}
          </span>
        </span>
        <span
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
          style={{
            background: open ? 'var(--dc-accent)' : 'var(--dc-badge-bg)',
            transform: open ? 'rotate(45deg)' : 'none',
            transition: 'transform 0.25s ease, background 0.2s ease',
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M6 2v8M2 6h8"
              stroke={open ? '#fff' : 'var(--dc-accent)'}
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>

      <div
        style={{
          maxHeight: open ? '400px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.35s ease',
        }}
      >
        <p className="pb-6 text-base leading-relaxed" style={{ color: 'var(--dc-text-2)' }}>
          {renderAnswer(item.a, item.links)}
        </p>
      </div>
    </div>
  );
}

export default function FaqPage() {
  const { lang } = useLang();
  const tx = t[lang];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function handleToggle(i: number) {
    setOpenIndex((prev) => (prev === i ? null : i));
  }

  return (
    <div style={{ background: 'var(--dc-bg)' }} className="min-h-screen">
      <div
        className="pt-32 pb-16 px-6 md:px-10 lg:px-16 text-center"
        style={{ background: 'linear-gradient(to bottom, var(--dc-bg-subtle), var(--dc-bg))' }}
      >
        <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--dc-accent)' }}>
          {tx.faq.pageTitle}
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold" style={{ color: 'var(--dc-text-1)' }}>
          {tx.faq.pageSubtitle}
        </h1>
      </div>

      <div className="px-6 md:px-10 lg:px-16 pb-28">
        <div className="max-w-3xl mx-auto">
          {tx.faq.items.map((item, i) => (
            <FaqRow
              key={i}
              item={item}
              id={`q${i + 1}`}
              index={i}
              open={openIndex === i}
              onToggle={() => handleToggle(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
