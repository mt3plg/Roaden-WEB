import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://routemate.vladyslav-tsyndrin-p.chatgpt.site'),
  title: 'Roaden — More roads. Better people.',
  description: 'Roaden connects people through the roads they share.',
  icons: {
    icon: '/roaden-icon.png',
    apple: '/roaden-icon.png',
  },
  openGraph: {
    title: 'Roaden — More roads. Better people.',
    description: 'Roaden connects people through the roads they share.',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Roaden — More roads. Better people.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roaden — More roads. Better people.',
    description: 'Roaden connects people through the roads they share.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
