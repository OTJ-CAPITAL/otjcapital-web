'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'
import CountUp from 'react-countup'

const stats = [
  { label: 'Strategies live', value: 3, suffix: '' },
  { label: 'Markets covered', value: 4, suffix: '' },
  { label: 'Hours of operation', value: 24, suffix: '/day' },
  { label: 'Human emotion', value: 0, suffix: '' },
]

export default function Hero() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1, fallbackInView: true })
  return (
    <section ref={ref} style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '100px 32px 80px', borderBottom: '1px solid #E5E5E5' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', width: '100%' }}>
        <motion.div variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div variants={fadeUp} style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '2px', color: '#888', marginBottom: '32px' }}>
            OTJ CAPITAL — QUANTITATIVE FUND
          </motion.div>
          <motion.h1 variants={fadeUp} style={{ fontFamily: 'var(--font-sg)', fontWeight: 800, fontSize: 'clamp(40px, 6vw, 80px)', color: '#000', lineHeight: 1.05, letterSpacing: '-2px', marginBottom: '32px' }}>
            We built an AI that<br />trades markets while<br />you sleep.
          </motion.h1>
          <motion.p variants={fadeUp} style={{ fontFamily: 'var(--font-inter)', fontSize: '20px', color: '#444', maxWidth: '560px', lineHeight: 1.7, marginBottom: '48px' }}>
            OTJ Capital runs fully automated quantitative strategies across crypto and emerging markets. No human emotion. No downtime. Every trade is logged and verifiable.
          </motion.p>
          <motion.div variants={fadeUp} style={{ display: 'flex', gap: '16px', marginBottom: '80px', flexWrap: 'wrap' }}>
            <a href="#invest" style={{ background: '#000', color: '#fff', padding: '14px 32px', fontFamily: 'var(--font-sg)', fontWeight: 600, fontSize: '15px' }}>Talk to us about investing</a>
            <a href="#strategy" style={{ border: '1px solid #000', color: '#000', padding: '14px 32px', fontFamily: 'var(--font-sg)', fontWeight: 600, fontSize: '15px' }}>How it works</a>
          </motion.div>
          <motion.div variants={staggerContainer} style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0', borderTop: '1px solid #E5E5E5', paddingTop: '40px' }}>
            {stats.map((s, i) => (
              <motion.div key={i} variants={fadeUp} style={{ paddingRight: '32px', borderRight: i < 3 ? '1px solid #E5E5E5' : 'none', marginRight: i < 3 ? '32px' : '0' }}>
                <div style={{ fontFamily: 'var(--font-sg)', fontWeight: 800, fontSize: '36px', color: '#000', marginBottom: '4px' }}>
                  {inView ? <><CountUp end={s.value} duration={1.5} />{s.suffix}</> : `0${s.suffix}`}
                </div>
                <div style={{ fontFamily: 'var(--font-inter)', fontSize: '13px', color: '#888' }}>{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
