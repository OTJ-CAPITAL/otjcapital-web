'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'

export default function Markets() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1, fallbackInView: true })
  return (
    <section id="markets" ref={ref} style={{ padding: '120px 32px', borderBottom: '1px solid #E5E5E5' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <motion.div variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div variants={fadeUp} style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '2px', color: '#888', marginBottom: '32px' }}>WHERE WE OPERATE</motion.div>
          <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-sg)', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 52px)', color: '#000', letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: '32px' }}>
            The markets big funds<br />never bothered to learn.
          </motion.h2>
          <motion.p variants={fadeUp} style={{ fontSize: '18px', color: '#444', lineHeight: 1.8, maxWidth: '600px', marginBottom: '48px' }}>
            Africa has 1.4 billion people, rapidly growing capital markets, and almost no quantitative infrastructure. Southeast Asia, Latin America, and South Asia have the same story. These are not secondary markets. They are the thesis.
          </motion.p>
          <motion.div variants={staggerContainer} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {['Africa — Primary', 'Southeast Asia', 'Latin America', 'South Asia'].map((tag, i) => (
              <motion.span key={i} variants={fadeUp} style={{ fontFamily: 'var(--font-sg)', fontSize: '13px', fontWeight: 600, border: '1px solid #000', padding: '8px 20px', color: '#000' }}>{tag}</motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
