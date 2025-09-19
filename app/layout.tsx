import type { Metadata } from 'next'
import './globals.css'
import { DM_Sans, Inter } from 'next/font/google'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-dm-sans'
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Shipped Studio - Your Idea, Built And Launched In Weeks',
  description: 'Professional development studio that builds and launches your ideas in weeks. MVP development, landing pages, and full-stack solutions.',
  keywords: 'MVP development, landing page, web development, startup, software development',
  // openGraph: {
  //   title: 'Shipped Studio - Your Idea, Built And Launched In Weeks',
  //   description: 'Professional development studio that builds and launches your ideas in weeks. MVP development, landing pages, and full-stack solutions.',
  //   images: [
  //     {
  //       url: '/image.png',
  //       width: 1200,
  //       height: 630,
  //       alt: 'Shipped Studio - Your Idea, Built And Launched In Weeks',
  //     },
  //   ],
  //   type: 'website',
  // },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'Shipped Studio - Your Idea, Built And Launched In Weeks',
  //   description: 'Professional development studio that builds and launches your ideas in weeks. MVP development, landing pages, and full-stack solutions.',
  //   images: ['/image.png'],
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`antialiased ${dmSans.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  )
}
