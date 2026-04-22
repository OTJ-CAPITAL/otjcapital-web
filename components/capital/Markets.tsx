'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'

const tags = ['Africa — Primary', 'SE Asia', 'Latam', 'S. Asia']

export default function Markets() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} style={{ background: '#0D0D0D', padding: '120px 32px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <motion.div variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div variants={fadeUp} style={{ fontFamily: 'Space Grotesk', fontSize: '10px', color: '#C9A84C', letterSpacing: '3px', marginBottom: '16px' }}>WHERE GROWTH LIVES</motion.div>
          <motion.h2 variants={fadeUp} style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 'clamp(32px, 4vw, 52px)', color: '#FFFFFF', marginBottom: '32px', lineHeight: 1.2 }}>
            The markets they<br />cannot enter.
          </motion.h2>
          <motion.p variants={fadeUp} style={{ fontFamily: 'Inter', fontSize: '18px', color: '#AAAAAA', maxWidth: '600px', lineHeight: 1.8, marginBottom: '48px' }}>
            Africa. Southeast Asia. Latin America. South Asia. These are not secondary markets. They are the thesis. The frontier that institutional quantitative infrastructure has never touched. Until now.
          </motion.p>
          <motion.div variants={staggerContainer} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {tags.map((tag, i) => (
              <motion.span key={i} variants={fadeUp} style={{ fontFamily: 'Space Grotesk', fontSize: '13px', color: '#FFFFFF', border: '1px solid #2A2A2A', padding: '8px 20px', borderRadius: '2px', cursor: 'default', transition: 'border-color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = '#C9A84C')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = '#2A2A2A')}>
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
