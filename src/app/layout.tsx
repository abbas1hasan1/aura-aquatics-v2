import type { Metadata } from 'next';
import { Inter_Tight } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { COMPANY } from '@/lib/constants';
import './globals.css';

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
});

export const metadata: Metadata = {
  title: {
    default: `${COMPANY.name} | ${COMPANY.tagline}`,
    template: `%s | ${COMPANY.name}`,
  },
  description: COMPANY.description,
  keywords: [
    'pool management',
    'lifeguard staffing',
    'pool maintenance',
    'Houston pools',
    'swim lessons',
    'pool cleaning',
    'aquatic management',
    'Texas pool services',
  ],
  authors: [{ name: COMPANY.name }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: COMPANY.url,
    siteName: COMPANY.name,
    title: `${COMPANY.name} | ${COMPANY.tagline}`,
    description: COMPANY.description,
    images: [
      {
        url: '/images/hero-pool.jpg',
        width: 1200,
        height: 630,
        alt: COMPANY.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY.name} | ${COMPANY.tagline}`,
    description: COMPANY.description,
    images: ['/images/hero-pool.jpg'],
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
    <html lang="en" className={interTight.className}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
