'use client';

import { useState } from 'react';
import { useLang } from '../providers';
import { t } from '../translations';

export function ContactSection() {
  const { lang } = useLang();
  const contact = t[lang].contact;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`DeChat Contact: ${name}`);
    const body = encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  const inputStyle: React.CSSProperties = {
    background: 'var(--dc-card)',
    border: '1px solid var(--dc-border)',
    color: 'var(--dc-text-1)',
    borderRadius: '0.75rem',
    padding: '0.75rem 1rem',
    width: '100%',
    outline: 'none',
    fontSize: '0.875rem',
  };

  return (
    <section
      id="contact"
      className="px-6 md:px-10 lg:px-16 py-20"
      style={{ background: 'linear-gradient(to bottom, var(--dc-bg), var(--dc-bg-subtle))' }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
            style={{ color: 'var(--dc-text-1)' }}
          >
            {contact.pageTitle}
          </h2>
          <p className="mt-4 text-lg" style={{ color: 'var(--dc-text-2)' }}>
            {contact.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Email card */}
          <div
            className="flex flex-col justify-center rounded-2xl p-8 gap-5"
            style={{ background: 'var(--dc-card)', border: '1px solid var(--dc-border)' }}
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{ background: 'var(--dc-badge-bg)' }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--dc-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: 'var(--dc-text-2)' }}>
                {contact.emailLabel}
              </p>
              <a
                href={`mailto:${contact.email}`}
                className="text-lg font-semibold transition-opacity hover:opacity-70"
                style={{ color: 'var(--dc-accent)' }}
              >
                {contact.email}
              </a>
              <p className="mt-2 text-sm" style={{ color: 'var(--dc-text-2)' }}>
                {contact.emailDesc}
              </p>
            </div>
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--dc-text-1)' }}>
                {contact.form.name}
              </label>
              <input
                type="text"
                required
                placeholder={contact.form.namePlaceholder}
                value={name}
                onChange={e => setName(e.target.value)}
                style={inputStyle}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--dc-text-1)' }}>
                {contact.form.email}
              </label>
              <input
                type="email"
                required
                placeholder={contact.form.emailPlaceholder}
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={inputStyle}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--dc-text-1)' }}>
                {contact.form.message}
              </label>
              <textarea
                required
                rows={5}
                placeholder={contact.form.messagePlaceholder}
                value={message}
                onChange={e => setMessage(e.target.value)}
                style={{ ...inputStyle, resize: 'none' }}
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: 'var(--dc-accent)' }}
            >
              {contact.form.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
