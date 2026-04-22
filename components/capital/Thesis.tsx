'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'

export default function Thesis() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1, fallbackInView: true })
  return (
    <section ref={ref} style={{ padding: '120px 32px', background: '#F5F5F5', borderBottom: '1px solid #E5E5E5' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <motion.div variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div variants={fadeUp} style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '2px', color: '#888', marginBottom: '48px' }}>THE EDGE</motion.div>
          <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-sg)', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 52px)', color: '#000', lineHeight: 1.2, letterSpacing: '-1px', marginBottom: '40px' }}>
            Institutional quant infrastructure<br />has never touched Africa.
          </motion.h2>
          <motion.div variants={staggerContainer} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
            <motion.p variants={fadeUp} style={{ fontSize: '17px', color: '#444', lineHeight: 1.8 }}>
              The largest hedge funds in the world use quantitative models to trade US and European markets. Those markets are saturated. Every edge gets arbed away within months.
            </motion.p>
            <motion.p variants={fadeUp} style={{ fontSize: '17px', color: '#444', lineHeight: 1.8 }}>
              African equity markets, African FX, and emerging market crypto have the same inefficiencies Wall Street exploited in the 1990s. We are the first AI-native fund built specifically to capture them.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
