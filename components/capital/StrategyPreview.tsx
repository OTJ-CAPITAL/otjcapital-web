'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'

const phases = [
  { phase: 'Phase 1', tag: 'LIVE NOW', rows: [['Momentum','BTC/USDT · ETH/USDT · 1h'],['Mean Reversion','BTC/USDT · ETH/USDT · 4h'],['Funding Rate Arb','BTC Perpetuals']] },
  { phase: 'Phase 2', tag: 'Q3 2026', rows: [['African Equities','NSE · NGX · JSE'],['African FX','USD/KES · USD/NGN · USD/ZAR']] },
  { phase: 'Phase 3', tag: '2027', rows: [['Commodities','Gold · Oil · Coffee · Cocoa'],['Statistical Arb','Cross-pair correlation']] },
]

export default function StrategyPreview() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1, fallbackInView: true })
  return (
    <section ref={ref} style={{ padding: '120px 32px', background: '#F5F5F5', borderBottom: '1px solid #E5E5E5' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <motion.div variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div variants={fadeUp} style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '2px', color: '#888', marginBottom: '16px' }}>STRATEGY MATRIX</motion.div>
          <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-sg)', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 48px)', color: '#000', letterSpacing: '-1px', marginBottom: '64px' }}>What we trade. And when.</motion.h2>
          <motion.div variants={staggerContainer} style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {phases.map((p, i) => (
              <motion.div key={i} variants={fadeUp} style={{ border: '1px solid #E5E5E5', marginBottom: '-1px', background: '#FFF' }}>
                <div style={{ padding: '16px 32px', borderBottom: '1px solid #E5E5E5', display: 'flex', alignItems: 'center', gap: '16px', background: i === 0 ? '#000' : '#fff' }}>
                  <span style={{ fontFamily: 'var(--font-sg)', fontWeight: 700, fontSize: '14px', color: i === 0 ? '#fff' : '#000' }}>{p.phase}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: i === 0 ? '#aaa' : '#888', border: `1px solid ${i === 0 ? '#555' : '#ddd'}`, padding: '2px 8px' }}>{p.tag}</span>
                </div>
                {p.rows.map(([name, markets], j) => (
                  <div key={j} style={{ padding: '14px 32px', display: 'flex', justifyContent: 'space-between', borderBottom: j < p.rows.length - 1 ? '1px solid #F0F0F0' : 'none' }}>
                    <span style={{ fontFamily: 'var(--font-sg)', fontSize: '14px', color: '#111' }}>{name}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#888' }}>{markets}</span>
                  </div>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
