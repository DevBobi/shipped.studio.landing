import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shipped Studio - Your Idea, Built And Launched In Weeks',
  description: 'Professional development studio that builds and launches your ideas in weeks. MVP development, landing pages, and full-stack solutions.',
  keywords: 'MVP development, landing page, web development, startup, software development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
