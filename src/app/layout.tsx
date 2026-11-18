import type { Metadata } from 'next';
import { Outfit, Inter } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp';
import { MobileReserveBar } from '@/components/layout/MobileReserveBar';
import { JsonLd } from '@/components/seo/JsonLd';
import { siteGraph } from '@/lib/seo';
import { siteConfig } from '@/config/site';

const serif = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
  weight: ['400', '500', '600', '700'],
});

const sans = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} · Taxi à Chatou (78), 24h/24 7j/7`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  keywords: [
    'taxi Chatou',
    'taxi Chatou 78',
    'transfert aéroport Chatou',
    'taxi Croissy-sur-Seine',
    'taxi Rueil-Malmaison',
    'taxi Yvelines',
  ],
  alternates: {
    canonical: '/',
    languages: { 'fr-FR': '/', 'x-default': '/' },
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} · Taxi à Chatou (78), 24h/24 7j/7`,
    description: siteConfig.description,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} · Taxi à Chatou (78), 24h/24 7j/7`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: { index: true, follow: true },
};

const turnstileEnabled = Boolean(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${serif.variable} ${sans.variable}`}>
      <body className="pb-[84px] lg:pb-0">
        {/* Anti-spam Turnstile : préconnexion pour accélérer le chargement du widget (LCP). */}
        {turnstileEnabled && (
          <link rel="preconnect" href="https://challenges.cloudflare.com" crossOrigin="anonymous" />
        )}
        <JsonLd data={siteGraph()} />
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-[var(--radius)] focus:bg-ink-900 focus:px-5 focus:py-3 focus:text-sm focus:text-white"
        >
          Aller au contenu principal
        </a>
        <SiteHeader />
        <main id="contenu">{children}</main>
        <SiteFooter />
        <FloatingWhatsApp />
        <MobileReserveBar />
      </body>
    </html>
  );
}
