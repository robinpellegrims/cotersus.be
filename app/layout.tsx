import 'tailwindcss/tailwind.css';
import './globals.css';
import { Fjalla_One, Montserrat, Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const fjalla = Fjalla_One({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fjalla',
  weight: '400',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// For SEO metadata, always use the production URL to ensure canonical URLs
// This prevents preview/staging URLs from being indexed by search engines
const getOriginUrl = () => {
  // Use custom environment variable if explicitly set
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  // Always use production URL for SEO metadata
  return 'https://www.cotersus.be';
};

const origin = getOriginUrl();

export const metadata = {
  metadataBase: new URL(origin),
  title: {
    default: 'Cotersus IT Consulting | Quality Software Development',
    template: '%s | Cotersus',
  },
  description:
    'Belgian IT consulting company specializing in full-stack development, developer coaching, and digital solutions. Expert in React, Angular, Next.js, and TypeScript.',
  keywords: [
    'IT consulting Belgium',
    'software development',
    'full-stack development',
    'React development',
    'Angular development',
    'Next.js',
    'TypeScript',
    'developer coaching',
    'Belgian tech consulting',
    'quality software',
  ],
  authors: [{ name: 'Cotersus' }],
  creator: 'Cotersus',
  publisher: 'Cotersus',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_BE',
    url: origin,
    siteName: 'Cotersus',
    title: 'Cotersus IT Consulting | Quality Software Development',
    description:
      'Belgian IT consulting company specializing in full-stack development, developer coaching, and digital solutions. Expert in React, Angular, Next.js, and TypeScript.',
    images: [
      {
        url: '/logo-og.png',
        width: 466,
        height: 508,
        alt: 'Cotersus Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cotersus IT Consulting | Quality Software Development',
    description:
      'Belgian IT consulting company specializing in full-stack development, developer coaching, and digital solutions.',
    creator: '@robinpel',
    site: '@cotersusIT',
    images: ['/logo-og.png'],
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
    google: '', // Add Google Search Console verification code here
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Cotersus',
    url: origin,
    logo: `${origin}/logo-og.png`,
    description:
      'Belgian IT consulting company specializing in full-stack development, developer coaching, and digital solutions.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Beigemsesteenweg 387',
      addressLocality: 'Beigem',
      postalCode: '1852',
      addressCountry: 'BE',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@cotersus.be',
      contactType: 'Customer Service',
      availableLanguage: ['en', 'nl'],
    },
    sameAs: [
      'https://bsky.app/profile/cotersus.be',
      'https://x.com/CotersusIT',
      'https://www.linkedin.com/company/88920103',
    ],
  };

  return (
    <html
      lang="en"
      className={`${fjalla.variable} ${montserrat.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') ||
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.classList.add(theme);
              })();
            `,
          }}
        />
      </head>
      <body className="bg-white text-gray-900 dark:bg-zinc-800 dark:text-zinc-100 font-inter transition-colors duration-300">
        <div className="flex min-h-screen flex-col">{children}</div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
