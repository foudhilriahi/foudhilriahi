import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Foudhil Riahi - Developer Galaxy',
  description: 'Full-stack software engineer specializing in Java, Spring Boot, Python, and Angular. Explore my cosmic portfolio of projects and experience.',
  openGraph: {
    title: 'Foudhil Riahi - Developer Galaxy',
    description: 'Full-stack software engineer specializing in Java, Spring Boot, Python, and Angular.',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Foudhil Riahi - Developer Galaxy',
    description: 'Full-stack software engineer specializing in Java, Spring Boot, Python, and Angular.',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
