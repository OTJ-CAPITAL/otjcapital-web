'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'

const cards = [
  { num: '01', title: 'Quantitative', body: 'Every signal derived from data. No gut feelings. No opinions. The model decides.' },
  { num: '02', title: 'AI-Native', body: 'Not retrofitted with AI. Born AI-first. The intelligence is structural, not supplemental.' },
  { num: '03', title: 'Tireless', body: 'Monitors every market. Executes every signal. 24 hours a day. No exceptions.' },
]

export default function HowItWorks() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} id="strategy" style={{ background: '#0D0D0D', borderTop: '1px solid #1E1E1E', padding: '120px 32px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <motion.div variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div variants={fadeUp} style={{ fontFamily: 'Space Grotesk', fontSize: '10px', color: '#C9A84C', letterSpacing: '3px', marginBottom: '16px' }}>THE MACHINE</motion.div>
          <motion.h2 variants={fadeUp} style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 'clamp(32px, 4vw, 48px)', color: '#FFFFFF', marginBottom: '64px' }}>Every decision. Data-driven.</motion.h2>
          <motion.div variants={staggerContainer} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {cards.map((c, i) => (
              <motion.div key={i} variants={fadeUp} style={{ background: '#141414', border: '1px solid #1E1E1E', padding: '40px 32px', borderRadius: '4px', transition: 'border-color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = '#C9A84C')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = '#1E1E1E')}>
                <div style={{ fontFamily: 'JetBrains Mono', fontSize: '13px', color: '#C9A84C', marginBottom: '16px' }}>{c.num}</div>
                <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '20px', color: '#FFFFFF', marginBottom: '16px' }}>{c.title}</h3>
                <p style={{ fontFamily: 'Inter', fontSize: '15px', color: '#888888', lineHeight: 1.7 }}>{c.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
