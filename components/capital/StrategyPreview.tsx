'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'

const phases = [
  { phase: 'Phase 1', status: 'LIVE NOW', color: '#C9A84C', rows: [
    ['Momentum', 'BTC/USDT · ETH/USDT · 1h'],
    ['Mean Reversion', 'BTC/USDT · ETH/USDT · 1h'],
    ['Funding Rate', 'BTC Perpetuals'],
  ]},
  { phase: 'Phase 2', status: 'Q3 2026', color: '#555555', rows: [
    ['African Equities', 'NSE · NGX · JSE'],
    ['African FX', 'USD/KES · USD/NGN · USD/ZAR'],
  ]},
  { phase: 'Phase 3', status: '2027', color: '#555555', rows: [
    ['Commodities', 'Gold · Oil · Coffee · Cocoa'],
    ['Stat Arbitrage', 'Cross-pair correlation'],
  ]},
]

export default function StrategyPreview() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} style={{ background: '#080808', padding: '120px 32px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <motion.div variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div variants={fadeUp} style={{ fontFamily: 'Space Grotesk', fontSize: '10px', color: '#C9A84C', letterSpacing: '3px', marginBottom: '16px' }}>STRATEGY</motion.div>
          <motion.h2 variants={fadeUp} style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 'clamp(32px, 4vw, 48px)', color: '#FFFFFF', marginBottom: '64px' }}>How the machine thinks.</motion.h2>
          <motion.div variants={staggerContainer} style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {phases.map((p, i) => (
              <motion.div key={i} variants={fadeUp} style={{ background: '#141414', border: '1px solid #1E1E1E', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ padding: '20px 32px', borderBottom: '1px solid #1E1E1E', display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <span style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '15px', color: '#FFFFFF' }}>{p.phase}</span>
                  <span style={{ fontFamily: 'JetBrains Mono', fontSize: '11px', color: p.color, border: `1px solid ${p.color}`, padding: '3px 10px', borderRadius: '2px' }}>{p.status}</span>
                </div>
                {p.rows.map(([name, markets], j) => (
                  <div key={j} style={{ padding: '16px 32px', display: 'flex', justifyContent: 'space-between', borderBottom: j < p.rows.length - 1 ? '1px solid #1E1E1E' : 'none' }}>
                    <span style={{ fontFamily: 'Space Grotesk', fontSize: '14px', color: '#FFFFFF' }}>{name}</span>
                    <span style={{ fontFamily: 'JetBrains Mono', fontSize: '13px', color: '#555555' }}>{markets}</span>
                  </div>
                ))}
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={fadeUp} style={{ marginTop: '40px' }}>
            <a href="#" style={{ color: '#C9A84C', fontFamily: 'Space Grotesk', fontSize: '14px', textDecoration: 'none', letterSpacing: '0.5px' }}>View Full Strategy →</a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
