import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'

import './globals.css'

const jakarta_init = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-plus_jakarta_sans'
})

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
      <body
        className={`${jakarta_init.variable} plus_jakarta_sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
