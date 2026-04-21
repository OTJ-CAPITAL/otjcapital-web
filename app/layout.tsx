import type { Metadata } from 'next'
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'OTJ Capital — AI-Native Quantitative Hedge Fund',
  description: 'A systematic, AI-driven hedge fund targeting $100M AUM by 2028. Built in Nairobi, Kenya. Every investment decision made by the machine.',
  openGraph: {
    title: 'OTJ Capital — The AI Runs The Fund.',
    description: 'Every investment decision made by the machine. No emotion. No bias. No sleep.',
    url: 'https://otjcapital.com',
    siteName: 'OTJ Capital',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-body bg-[#080808] text-white">{children}</body>
    </html>
  )
}
