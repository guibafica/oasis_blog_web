import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'OASIS Blog',
  description: 'Conectando você às últimas novidades e tendências',
  keywords: [
    'OASIS',
    'blog',
    'tecnologia',
    'nextjs',
    'css, javascript',
    'tailwind',
    'reactjs',
    'artigos'
  ]
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
