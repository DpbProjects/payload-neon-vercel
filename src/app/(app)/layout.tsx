import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './global.css'

// import Header from '@/components/Header'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Payload Vercel Starter',
  description: 'A Payload starter project with Next.js, Vercel Postgres, and Vercel Blob Storage.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
