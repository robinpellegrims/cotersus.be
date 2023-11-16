import 'tailwindcss/tailwind.css';
import { Fjalla_One, Montserrat } from 'next/font/google';
import Script from 'next/script';

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

const origin = 'https://www.cotersus.be';

export const metadata = {
  title: 'Cotersus IT Consulting',
  description:
    'Cotersus is an IT Consulting company from Belgium specialized in software development.',
  openGraph: {
    type: 'website',
    locale: 'en_BE',
    url: origin,
    siteName: 'Cotersus',
    images: [{ url: `${origin}/logo.png`, height: 508, width: 466 }],
  },
  twitter: {
    creator: '@robinpel',
    site: '@cotersusIT',
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fjalla.variable} ${montserrat.variable}`}>
      <Script
        src="https://cdn.counter.dev/script.js"
        data-id="b19ec735-673b-47f5-8575-7d5bc6417ab8"
        data-utcoffset="1"
      />
      <body className="bg-zinc-800 text-zinc-100">
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0"></header>
          <main className="grow overflow-y-auto">{children}</main>
          <footer></footer>
        </div>
      </body>
    </html>
  );
}
