import type { Metadata } from 'next';
import { Cormorant_Garamond, Outfit } from 'next/font/google';
import { siteConfig } from '@/lib/site';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    'architecture',
    'construction',
    'interior design',
    'residential construction',
    'commercial projects',
    'ArchStudio',
  ],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: 'website',
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable}`}>
      <body className="font-body bg-slate-950 text-white antialiased">{children}</body>
    </html>
  );
}
