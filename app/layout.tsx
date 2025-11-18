import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
// import localFont from 'next/font/local'; // TODO: Uncomment when Satoshi + Cabinet Grotesk font files are added
import './globals.css';
import Navbar from './_components/Navbar';
import Footer from './_components/Footer';

// Inter - Secondary/body font (Google Fonts)
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// Satoshi - Primary UI font (local, fallback to Inter)
// NOTE: Font file not yet added. When available, place at public/fonts/Satoshi-Variable.woff2
// Until then, Inter will be used as the primary font via CSS fallback
const satoshi = {
  variable: '--font-satoshi',
};

// Cabinet Grotesk - Display font (local, fallback to Satoshi/Inter)
// NOTE: Font file not yet added. When available, place at public/fonts/CabinetGrotesk-Variable.woff2
// Until then, Inter will be used as the display font via CSS fallback
const cabinetGrotesk = {
  variable: '--font-cabinet',
};

export const metadata: Metadata = {
  // TODO: Update metadataBase when deploying to production (e.g., 'https://bester.com')
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  title: 'Bester – Self-Development Made Social',
  description: 'Ready to start your Bester life? Where AI meets community to help you grow — together. Join the waitlist and get 3 months Premium at launch.',
  keywords: ['self-development', 'AI', 'social', 'personal growth', 'habits', 'routines'],
  authors: [{ name: 'Bester' }],
  openGraph: {
    title: 'Bester – Self-Development Made Social',
    description: 'Ready to start your Bester life? Where AI meets community to help you grow — together.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bester – Self-Development Made Social',
    description: 'Ready to start your Bester life? Where AI meets community to help you grow — together.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${satoshi.variable} ${cabinetGrotesk.variable}`}>
      <body className="antialiased font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
