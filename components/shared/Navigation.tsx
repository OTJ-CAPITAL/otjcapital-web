'use client'
import { useEffect, useState } from 'react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(8,8,8,0.9)' : '#080808',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: '1px solid #1E1E1E',
      padding: '0 32px', height: '64px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      transition: 'all 0.3s ease'
    }}>
      <span style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '18px', color: '#C9A84C', letterSpacing: '1px' }}>
        OTJ CAPITAL
      </span>
      <div style={{ display: 'flex', gap: '40px' }} className="nav-links">
        {['Strategy', 'Performance', 'Team', 'Fellowship'].map(item => (
          <a key={item} href={`#${item.toLowerCase()}`} style={{ color: '#888888', fontSize: '14px', textDecoration: 'none', fontFamily: 'Inter', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
            onMouseLeave={e => (e.currentTarget.style.color = '#888888')}>
            {item}
          </a>
        ))}
      </div>
      <a href="#invest" style={{
        background: '#C9A84C', color: '#080808', padding: '10px 24px',
        fontSize: '14px', fontWeight: 600, textDecoration: 'none',
        fontFamily: 'Space Grotesk', borderRadius: '2px', transition: 'all 0.2s'
      }}
        onMouseEnter={e => (e.currentTarget.style.background = '#E8C96A')}
        onMouseLeave={e => (e.currentTarget.style.background = '#C9A84C')}>
        Invest With Us →
      </a>
    </nav>
  )
}
