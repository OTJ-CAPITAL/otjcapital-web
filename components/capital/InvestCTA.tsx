'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'

export default function InvestCTA() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="invest" ref={ref} style={{ background: '#C9A84C', padding: '120px 32px' }}>
      <motion.div variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'}
        style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <motion.h2 variants={fadeUp} style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 'clamp(40px, 5vw, 64px)', color: '#080808', marginBottom: '24px' }}>
          Ready to be early?
        </motion.h2>
        <motion.p variants={fadeUp} style={{ fontFamily: 'Inter', fontSize: '18px', color: 'rgba(8,8,8,0.7)', marginBottom: '48px', lineHeight: 1.7 }}>
          We are building our founding investor base. If you understand what we are building — reach out now. The window does not stay open.
        </motion.p>
        <motion.a variants={fadeUp} href="mailto:invest@otjcapital.com" style={{ display: 'inline-block', border: '1px solid #080808', color: '#080808', padding: '16px 40px', fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '15px', textDecoration: 'none', borderRadius: '2px' }}>
          invest@otjcapital.com →
        </motion.a>
      </motion.div>
    </section>
  )
}
