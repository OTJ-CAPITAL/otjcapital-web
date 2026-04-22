'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'

export default function Thesis() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} style={{ background: '#080808', padding: '120px 32px' }}>
      <motion.div variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'}
        style={{ maxWidth: '800px', margin: '0 auto' }}>
        <motion.div variants={fadeUp} style={{ fontFamily: 'Space Grotesk', fontSize: '10px', color: '#C9A84C', letterSpacing: '3px', marginBottom: '24px' }}>THE EDGE</motion.div>
        <motion.h2 variants={fadeUp} style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 'clamp(36px, 4vw, 52px)', color: '#FFFFFF', marginBottom: '48px', lineHeight: 1.2 }}>
          Wall Street cannot<br />go where we go.
        </motion.h2>
        <motion.div variants={fadeUp} style={{ fontFamily: 'Inter', fontSize: '18px', color: '#AAAAAA', lineHeight: 1.9, marginBottom: '48px' }}>
          <p style={{ marginBottom: '24px' }}>The largest quantitative funds in the world — Renaissance, Two Sigma, Citadel — collectively manage hundreds of billions. Their problem is not strategy. It is scale.</p>
          <p style={{ marginBottom: '24px' }}>A $50 billion fund cannot take a meaningful position on the Nigerian Stock Exchange. The market is too small. Their order moves the price before they are filled.</p>
          <p>We can. That asymmetry is structural. It is durable. It compounds.</p>
        </motion.div>
        <motion.blockquote variants={fadeUp} style={{ borderLeft: '3px solid #C9A84C', paddingLeft: '24px', marginTop: '48px' }}>
          <p style={{ fontFamily: 'Space Grotesk', fontSize: '18px', color: '#FFFFFF', marginBottom: '12px', lineHeight: 1.6 }}>
            "The best capital allocation decisions are made<br />by systems — not sentiment."
          </p>
          <cite style={{ fontFamily: 'Inter', fontSize: '13px', color: '#555555', fontStyle: 'normal' }}>— OTJ Capital, Core Thesis</cite>
        </motion.blockquote>
      </motion.div>
    </section>
  )
}
