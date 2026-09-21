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
  metadataBase: new URL('https://routemate.app'),
  title: 'RouteMate — More roads. Better people.',
  description: 'RouteMate connects people through the roads they share.',
  openGraph: {
    title: 'RouteMate — More roads. Better people.',
    description: 'RouteMate connects people through the roads they share.',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'RouteMate — More roads. Better people.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RouteMate — More roads. Better people.',
    description: 'RouteMate connects people through the roads they share.',
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
