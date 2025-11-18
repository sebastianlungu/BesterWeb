import type { Metadata } from 'next';
import './globals.css';
import Navbar from './_components/Navbar';
import Footer from './_components/Footer';

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
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
