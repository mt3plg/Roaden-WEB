'use client';

import { ArrowUpRight, Mail, Music2, Send } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.4" cy="6.7" r="1" fill="currentColor" />
    </svg>
  );
}

const contacts = [
  {
    label: 'Instagram',
    value: '@roadenapp',
    href: 'https://www.instagram.com/roadenapp/',
    icon: InstagramIcon,
  },
  {
    label: 'Email',
    value: 'roadenapp@gmail.com',
    href: 'mailto:roadenapp@gmail.com',
    icon: Mail,
  },
  {
    label: 'Telegram',
    value: 'Roaden channel',
    href: 'https://t.me/+YchW_ySrsRZkYTJi',
    icon: Send,
  },
  {
    label: 'TikTok',
    value: '@roadenapp',
    href: 'https://www.tiktok.com/@roadenapp',
    icon: Music2,
  },
];

function BrandIcon() {
  return (
    <img aria-hidden="true" className="brand-icon" src="/roaden-icon.png" alt="" />
  );
}

function SupportButton({ className = '' }: { className?: string }) {
  return (
    <a
      className={`support-button ${className}`}
      href="https://donatello.to/roaden/about"
      target="_blank"
      rel="noreferrer"
    >
      <span>Support the project</span>
      <ArrowUpRight aria-hidden="true" />
    </a>
  );
}

export default function Home() {
  return (
    <main id="top" className="site-shell">
      <div className="hero-image" aria-hidden="true" />
      <div className="cinema-overlay" aria-hidden="true" />
      <div className="ambient ambient-one" aria-hidden="true" />

      <header className="topbar">
        <a className="brand" href="#top" aria-label="Roaden — на головну">
          <BrandIcon />
          <span>Roaden</span>
        </a>

        <div className="top-actions">
          <SupportButton className="header-support" />
          <Sheet>
            <SheetTrigger className="menu-trigger" aria-label="Відкрити меню">
              <span />
              <span />
            </SheetTrigger>
            <SheetContent className="route-menu" showCloseButton>
              <SheetHeader className="route-menu-header">
                <SheetTitle className="route-menu-title">Roaden</SheetTitle>
                <SheetDescription className="route-menu-description">Driven by people. Built for the road.</SheetDescription>
              </SheetHeader>
              <nav className="route-menu-nav" aria-label="Контакти Roaden">
                {contacts.map(({ label, href }) => (
                  <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                    <span>{label}</span>
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                ))}
              </nav>
              <SupportButton className="menu-support" />
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <section className="hero-copy" aria-labelledby="hero-title">
        <h1 id="hero-title" className="eyebrow">
          <span>More roads</span>
          <span>Better people</span>
        </h1>
        <div className="route-line" aria-hidden="true"><i /></div>
      </section>

      <section className="contact-panel" aria-label="Зв’язатися з Roaden">
        <div className="contact-row">
          {contacts.map(({ label, value, href, icon: Icon }) => (
            <a
              className="contact-card"
              href={href}
              key={label}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              aria-label={`${label}: ${value}`}
            >
              <span className="contact-icon" aria-hidden="true">
                <Icon />
              </span>
              <span className="contact-label">{label}</span>
              <span className="contact-value">{value}</span>
            </a>
          ))}
        </div>
        <SupportButton className="footer-support" />
      </section>

    </main>
  );
}
