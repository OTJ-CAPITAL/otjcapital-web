import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'OTJ Capital — AI-Native Quantitative Hedge Fund',
  description: 'A systematic, AI-driven hedge fund targeting $100M AUM by 2028. Built in Nairobi, Kenya.',
  openGraph: {
    title: 'OTJ Capital',
    description: 'The AI runs the fund.',
    url: 'https://otjcapital.com',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
