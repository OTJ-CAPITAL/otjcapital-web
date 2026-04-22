import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'OTJ Capital — AI-Native Quantitative Hedge Fund',
  description: 'Every investment decision made by the machine. No emotion. No bias. No sleep.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
