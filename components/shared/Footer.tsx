'use client'

export default function Footer() {
  return (
    <footer style={{ background: '#080808', borderTop: '1px solid #1E1E1E', padding: '64px 32px 32px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '48px' }}>
        <div>
          <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '18px', color: '#C9A84C', marginBottom: '12px' }}>OTJ CAPITAL</div>
          <div style={{ color: '#555555', fontSize: '14px', lineHeight: '1.8' }}>
            <div>Nairobi, Kenya — Est. 2026</div>
            <div>The AI runs the fund.</div>
          </div>
        </div>
        <div>
          <div style={{ color: '#888888', fontSize: '11px', letterSpacing: '3px', marginBottom: '16px', fontFamily: 'Space Grotesk' }}>ECOSYSTEM</div>
          {[['OTJ Holdings', 'https://otjholdings.com'], ['OTJ Capital', 'https://otjcapital.com'], ['OTJ Fellowship', 'https://otjfellowship.com'], ['OTJ App', 'https://otj.app']].map(([name, url]) => (
            <a key={name} href={url} style={{ display: 'block', color: '#555555', fontSize: '14px', textDecoration: 'none', marginBottom: '8px', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#C9A84C')}
              onMouseLeave={e => (e.currentTarget.style.color = '#555555')}>
              {name} →
            </a>
          ))}
        </div>
        <div>
          <div style={{ color: '#888888', fontSize: '11px', letterSpacing: '3px', marginBottom: '16px', fontFamily: 'Space Grotesk' }}>CONTACT</div>
          <a href="mailto:invest@otjcapital.com" style={{ display: 'block', color: '#555555', fontSize: '14px', textDecoration: 'none', marginBottom: '8px' }}>invest@otjcapital.com</a>
          <a href="mailto:hello@otjholdings.com" style={{ display: 'block', color: '#555555', fontSize: '14px', textDecoration: 'none' }}>hello@otjholdings.com</a>
        </div>
      </div>
      <div style={{ maxWidth: '1280px', margin: '48px auto 0', paddingTop: '24px', borderTop: '1px solid #1E1E1E', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ color: '#555555', fontSize: '13px' }}>© 2026 OTJ Holdings. All rights reserved.</span>
        <span style={{ color: '#555555', fontSize: '12px' }}>This material is for informational purposes only and does not constitute investment advice.</span>
      </div>
    </footer>
  )
}
