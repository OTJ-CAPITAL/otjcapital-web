'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'

const nodes = [
  { date: 'Q2 2026', milestone: '$500K AUM', body: 'Live crypto trading. Track record starts. Every trade on OTJ App.' },
  { date: 'Q3 2026', milestone: '$5M AUM', body: '90-day auditable returns. First institutional conversations.' },
  { date: 'Q4 2026', milestone: '$10M AUM', body: 'African equity strategies go live. Fund goes public.' },
  { date: '2028', milestone: '$100M AUM', body: 'The number that proves the thesis.' },
]

export default function Roadmap() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1, fallbackInView: true })
  return (
    <section id="roadmap" ref={ref} style={{ padding: '120px 32px', background: '#F5F5F5', borderBottom: '1px solid #E5E5E5' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <motion.div variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div variants={fadeUp} style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '2px', color: '#888', marginBottom: '16px' }}>ROADMAP</motion.div>
          <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-sg)', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 48px)', color: '#000', letterSpacing: '-1px', marginBottom: '64px' }}>$1,000 to $100,000,000.</motion.h2>
          <motion.div variants={staggerContainer} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0' }}>
            {nodes.map((n, i) => (
              <motion.div key={i} variants={fadeUp} style={{ padding: '40px 32px', borderLeft: i === 0 ? '1px solid #E5E5E5' : 'none', borderRight: '1px solid #E5E5E5', borderTop: '1px solid #E5E5E5', borderBottom: '1px solid #E5E5E5', background: '#fff' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#888', marginBottom: '16px' }}>{n.date}</div>
                <div style={{ fontFamily: 'var(--font-sg)', fontWeight: 800, fontSize: '24px', color: '#000', marginBottom: '12px', letterSpacing: '-0.5px' }}>{n.milestone}</div>
                <div style={{ fontFamily: 'var(--font-inter)', fontSize: '14px', color: '#666', lineHeight: 1.7 }}>{n.body}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
