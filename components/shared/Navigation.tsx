'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'Strategy', href: '#strategy' },
  { label: 'Performance', href: '#performance' },
  { label: 'Team', href: '#team' },
  { label: 'Fellowship', href: 'https://otjfellowship.com' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b border-[#1E1E1E] transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md bg-[#080808]/90' : 'bg-[#080808]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <a href="/" className="font-display font-bold text-[#C9A84C] text-sm tracking-widest uppercase">
          OTJ CAPITAL
        </a>

        {/* Center nav links — hidden on mobile */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-sm text-[#888888] hover:text-white transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA button */}
        <a
          href="mailto:invest@otjcapital.com"
          className="hidden md:inline-flex items-center h-10 px-5 bg-[#C9A84C] text-[#080808] font-display font-semibold text-sm rounded-[2px] hover:bg-[#E8C96A] transition-colors duration-200"
        >
          Invest With Us →
        </a>

        {/* Mobile: just show CTA */}
        <a
          href="mailto:invest@otjcapital.com"
          className="md:hidden inline-flex items-center h-9 px-4 bg-[#C9A84C] text-[#080808] font-display font-semibold text-xs rounded-[2px]"
        >
          Invest →
        </a>
      </div>
    </nav>
  )
}
