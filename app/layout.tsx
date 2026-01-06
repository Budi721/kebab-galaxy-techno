import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Kebab Galaxy - Kebab Lezat untuk Anda',
  description: 'Kebab Galaxy menyajikan kebab lezat dengan cita rasa autentik. Pesan sekarang via WhatsApp!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={inter.variable}>
      <body className="min-h-screen bg-white antialiased">{children}</body>
    </html>
  )
}



