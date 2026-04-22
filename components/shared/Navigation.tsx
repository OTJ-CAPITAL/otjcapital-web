'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth < 768)
    checkWidth()
    window.addEventListener('resize', checkWidth)
    return () => window.removeEventListener('resize', checkWidth)
  }, [])

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Close menu on resize to desktop
  useEffect(() => {
    if (!isMobile) setMenuOpen(false)
  }, [isMobile])

  const navLinks = ['Strategy', 'Markets', 'Roadmap']

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled ? 'rgba(255,255,255,0.95)' : '#FFFFFF',
          borderBottom: scrolled ? '1px solid #E5E5E5' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
          transition: 'all 0.2s',
          padding: '0 32px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-sg)',
            fontWeight: 700,
            fontSize: '16px',
            letterSpacing: '-0.5px',
          }}
        >
          OTJ Capital
        </span>

        {/* Desktop nav */}
        {!isMobile && (
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            {navLinks.map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{ fontFamily: 'var(--font-inter)', fontSize: '14px', color: '#555', textDecoration: 'none' }}
              >
                {item}
              </a>
            ))}
            <a
              href="#invest"
              style={{
                background: '#000',
                color: '#fff',
                padding: '8px 18px',
                fontSize: '14px',
                fontFamily: 'var(--font-sg)',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              Invest
            </a>
          </div>
        )}

        {/* Hamburger button (mobile) */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '22px',
              color: '#111',
              padding: '4px 8px',
              lineHeight: 1,
              fontFamily: 'var(--font-sg)',
            }}
            aria-label="Toggle menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        )}
      </nav>

      {/* Mobile overlay */}
      {isMobile && menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '60px',
            left: 0,
            right: 0,
            background: '#fff',
            borderBottom: '1px solid #E5E5E5',
            padding: '24px 32px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            zIndex: 99,
          }}
        >
          {navLinks.map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '16px',
                color: '#111',
                textDecoration: 'none',
                fontWeight: 500,
              }}
            >
              {item}
            </a>
          ))}
          <a
            href="#invest"
            onClick={() => setMenuOpen(false)}
            style={{
              background: '#000',
              color: '#fff',
              padding: '12px 20px',
              fontSize: '15px',
              fontFamily: 'var(--font-sg)',
              fontWeight: 600,
              textDecoration: 'none',
              display: 'inline-block',
              alignSelf: 'flex-start',
            }}
          >
            Invest
          </a>
        </div>
      )}
    </>
  )
}
