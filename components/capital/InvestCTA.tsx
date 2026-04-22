'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'

export default function InvestCTA() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1, fallbackInView: true })
  return (
    <section id="invest" ref={ref} style={{ padding: '120px 32px', borderBottom: '1px solid #E5E5E5' }}>
      <motion.div variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'} style={{ maxWidth: '700px', margin: '0 auto' }}>
        <motion.div variants={fadeUp} style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '2px', color: '#888', marginBottom: '32px' }}>FOR INVESTORS</motion.div>
        <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-sg)', fontWeight: 800, fontSize: 'clamp(32px, 5vw, 60px)', color: '#000', letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: '24px' }}>
          We are raising our<br />first outside capital.
        </motion.h2>
        <motion.p variants={fadeUp} style={{ fontSize: '18px', color: '#444', lineHeight: 1.8, marginBottom: '40px' }}>
          We have a live system, a growing track record, and a clear path to scale. If you understand what we are building, reach out. We are not hard to find.
        </motion.p>
        <motion.a variants={fadeUp} href="mailto:invest@otjcapital.com" style={{ display: 'inline-block', background: '#000', color: '#fff', padding: '16px 40px', fontFamily: 'var(--font-sg)', fontWeight: 700, fontSize: '16px' }}>
          invest@otjcapital.com →
        </motion.a>
      </motion.div>
    </section>
  )
}
