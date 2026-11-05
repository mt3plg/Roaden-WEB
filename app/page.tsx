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
import { legalLinks } from '@/lib/legal';

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

const APP_STORE_URL = 'https://apps.apple.com/ua/app/roaden/id6825975361?l=uk';

function AppleLogo() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.37 12.73c-.02-2.3 1.88-3.4 1.96-3.46-1.07-1.56-2.73-1.78-3.32-1.8-1.41-.14-2.76.83-3.48.83-.72 0-1.82-.81-3-.79-1.54.02-2.96.9-3.76 2.27-1.6 2.78-.41 6.9 1.15 9.16.76 1.1 1.67 2.34 2.86 2.3 1.15-.05 1.58-.74 2.97-.74 1.38 0 1.77.74 2.98.72 1.23-.02 2.01-1.12 2.77-2.23.87-1.28 1.23-2.52 1.25-2.58-.03-.01-2.4-.92-2.42-3.66ZM14.1 5.98c.63-.77 1.06-1.83.94-2.9-.91.04-2.02.61-2.67 1.37-.58.67-1.1 1.76-.96 2.8 1.02.08 2.06-.52 2.69-1.27Z" />
    </svg>
  );
}

function AppStoreButton({ className = '' }: { className?: string }) {
  return (
    <a
      className={`app-store-button ${className}`}
      href={APP_STORE_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Download Roaden on the App Store"
    >
      <AppleLogo />
      <span className="app-store-text">
        <small>Download on the</small>
        <span>App Store</span>
      </span>
    </a>
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
      <span>Donate</span>
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
              <AppStoreButton className="menu-download" />
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
        <AppStoreButton className="hero-download" />
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

      <footer className="legal-footer">
        <nav aria-label="Legal">
          {legalLinks.map(({ label, path }) => (
            <a key={path} href={path}>
              {label}
            </a>
          ))}
        </nav>
        <span>© {new Date().getFullYear()} Roaden</span>
      </footer>

    </main>
  );
}
