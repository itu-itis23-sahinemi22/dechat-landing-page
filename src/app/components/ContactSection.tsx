'use client';

import { useState } from 'react';
import { useLang } from '../providers';
import { t } from '../translations';

export function ContactSection() {
  const { lang } = useLang();
  const contact = t[lang].contact;

  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent('DeChat Early Access');
    const body = encodeURIComponent(`Email: ${email}`);
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative px-6 md:px-10 lg:px-16 py-24 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0A0B0D 0%, #01024F 60%, #0a1a6e 100%)' }}
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(24,62,233,0.22) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-2xl mx-auto text-center">
        {/* Badge */}
        <span
          className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6"
          style={{ background: 'rgba(24,62,233,0.25)', color: '#a5b4fc' }}
        >
          {contact.pageTitle}
        </span>

        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4">
          {contact.pageTitle}
        </h2>
        <p className="text-lg mb-10" style={{ color: 'rgba(255,255,255,0.55)' }}>
          {contact.subtitle}
        </p>

        {submitted ? (
          <div
            className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl"
            style={{ background: 'rgba(24,62,233,0.2)', border: '1px solid rgba(74,108,247,0.4)' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a5b4fc" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className="text-base font-medium" style={{ color: '#a5b4fc' }}>
              {contact.form.successMsg}
            </span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              required
              placeholder={contact.form.emailPlaceholder}
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-xl text-sm outline-none"
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: '#fff',
              }}
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 whitespace-nowrap"
              style={{ background: 'var(--dc-accent)' }}
            >
              {contact.form.submit}
            </button>
          </form>
        )}

        <p className="mt-6 text-sm" style={{ color: 'rgba(255,255,255,0.3)' }}>
          {contact.emailDesc}{' '}
          <a
            href={`mailto:${contact.email}`}
            className="transition-opacity hover:opacity-80"
            style={{ color: 'rgba(255,255,255,0.5)' }}
          >
            {contact.email}
          </a>
        </p>
      </div>
    </section>
  );
}
