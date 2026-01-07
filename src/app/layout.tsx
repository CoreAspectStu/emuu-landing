import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Emuu - AI Voice Assistant for Aussie Tradies',
  description: 'Never miss a call again. AI-powered phone answering that books jobs 24/7 for plumbers, electricians, and tradies across Australia.',
  keywords: ['AI phone answering', 'tradesman', 'plumber', 'electrician', 'HVAC', 'Australia', 'job booking'],
  openGraph: {
    title: 'Emuu - AI Voice Assistant for Aussie Tradies',
    description: 'Never miss a call again. AI-powered phone answering that books jobs 24/7.',
    url: 'https://emuu.io',
    siteName: 'Emuu',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emuu - AI Voice Assistant for Aussie Tradies',
    description: 'Never miss a call again. AI-powered phone answering that books jobs 24/7.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Umami Analytics - replace data-website-id when configured */}
        <Script
          src="https://analytics.coreaspectai.com/script.js"
          data-website-id="087c548b-708c-42bf-9d9a-5704df7880f2"
          strategy="afterInteractive"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
