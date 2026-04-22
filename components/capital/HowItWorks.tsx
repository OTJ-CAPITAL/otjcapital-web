'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'

const steps = [
  { num: '01', title: 'Data in.', body: 'The system ingests price data, order book depth, funding rates, and macroeconomic signals across 40+ instruments in real time.' },
  { num: '02', title: 'Signal generated.', body: 'Quantitative models — momentum, mean reversion, statistical arbitrage — score every opportunity against historical performance.' },
  { num: '03', title: 'Trade executed.', body: 'When a signal clears the risk threshold, the system executes automatically. No human approval required. No hesitation.' },
  { num: '04', title: 'Everything logged.', body: 'Every entry, exit, size, P&L, and AI rationale is recorded. Investors can see it all in OTJ App in real time.' },
]

export default function HowItWorks() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1, fallbackInView: true })
  return (
    <section id="strategy" ref={ref} style={{ padding: '120px 32px', borderBottom: '1px solid #E5E5E5' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <motion.div variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div variants={fadeUp} style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '2px', color: '#888', marginBottom: '16px' }}>HOW IT WORKS</motion.div>
          <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-sg)', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 48px)', color: '#000', letterSpacing: '-1px', marginBottom: '64px' }}>Four steps. Zero humans.</motion.h2>
          <motion.div variants={staggerContainer} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0' }}>
            {steps.map((s, i) => (
              <motion.div key={i} variants={fadeUp} style={{ padding: '40px 32px', borderLeft: i === 0 ? '1px solid #E5E5E5' : 'none', borderRight: '1px solid #E5E5E5', borderTop: '1px solid #E5E5E5', borderBottom: '1px solid #E5E5E5' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#BBB', marginBottom: '20px' }}>{s.num}</div>
                <h3 style={{ fontFamily: 'var(--font-sg)', fontWeight: 700, fontSize: '22px', color: '#000', marginBottom: '16px' }}>{s.title}</h3>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '15px', color: '#555', lineHeight: 1.7 }}>{s.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
