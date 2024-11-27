import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: 'Oasis Blog',
  description: 'Conectando você às últimas novidades e tendências.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
