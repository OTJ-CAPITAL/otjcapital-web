'use client'
export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #E5E5E5', padding: '48px 32px', background: '#FFFFFF' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '32px' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-sg)', fontWeight: 700, fontSize: '14px', marginBottom: '16px' }}>OTJ Capital</div>
          <p style={{ fontSize: '13px', color: '#888', lineHeight: 1.6 }}>AI-powered quantitative fund.<br />Built in Africa, for the world.</p>
        </div>
        <div>
          <div style={{ fontFamily: 'var(--font-sg)', fontWeight: 600, fontSize: '12px', letterSpacing: '1px', color: '#888', marginBottom: '12px' }}>ECOSYSTEM</div>
          {[['OTJ App','https://otj.app'],['OTJ Holdings','https://otjholdings.com'],['OTJ Fellowship','https://otjfellowship.com']].map(([label,href]) => (
            <a key={label} href={href} style={{ display: 'block', fontSize: '13px', color: '#555', marginBottom: '8px' }}
              onMouseEnter={e => (e.currentTarget.style.color='#000')}
              onMouseLeave={e => (e.currentTarget.style.color='#555')}>{label}</a>
          ))}
        </div>
        <div>
          <div style={{ fontFamily: 'var(--font-sg)', fontWeight: 600, fontSize: '12px', letterSpacing: '1px', color: '#888', marginBottom: '12px' }}>CONTACT</div>
          <a href="mailto:invest@otjcapital.com" style={{ fontSize: '13px', color: '#555' }}>invest@otjcapital.com</a>
        </div>
      </div>
      <div style={{ maxWidth: '1280px', margin: '32px auto 0', paddingTop: '24px', borderTop: '1px solid #F0F0F0', fontSize: '12px', color: '#BBB' }}>
        © 2026 OTJ Capital. All rights reserved.
      </div>
    </footer>
  )
}
