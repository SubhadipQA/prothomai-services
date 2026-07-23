import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
});

export const metadata = {
  title: 'Prothom Analytica — Websites & Digital Growth for Local Businesses',
  description: 'Affordable website building, Google ranking, social media setup & content services for local shops and small businesses. Starting at ₹4,999.',
  keywords: ['website for local business', 'small business website', 'Google ranking', 'SEO services India', 'affordable website', 'local shop online', 'digital marketing', 'Prothom Analytica'],
  authors: [{ name: 'Prothom Analytica' }],
  creator: 'Prothom Analytica',
  metadataBase: new URL('https://services.prothomai.com'),
  icons: {
    icon: '/images/logo-icon.svg',
  },
  openGraph: {
    title: 'Prothom Analytica — Websites & Digital Growth for Local Businesses',
    description: 'Affordable website building, Google ranking, social media setup & content services for local shops and small businesses.',
    url: 'https://services.prothomai.com',
    siteName: 'Prothom Analytica',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prothom Analytica — Digital Growth for Local Businesses',
    description: 'Affordable website building & Google ranking for local shops. Starting at ₹4,999.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Prothom Analytica',
    description: 'Website building, Google ranking, and digital marketing services for local businesses',
    url: 'https://services.prothomai.com',
    telephone: '+919242404198',
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
    sameAs: [],
    openingHours: 'Mo-Sa 10:00-19:00',
    serviceType: ['Website Design', 'SEO', 'Social Media Marketing', 'Content Writing'],
  };

  return (
    <html lang="en" className={jakarta.variable}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0F4CBB" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-jakarta bg-offwhite text-ink">
        {children}
      </body>
    </html>
  );
}