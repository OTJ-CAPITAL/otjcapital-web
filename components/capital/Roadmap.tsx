'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'

const nodes = [
  { date: 'Q2 2026', aum: '$500K AUM', desc: 'Live crypto trading. Track record begins. Every trade verifiable on OTJ App.' },
  { date: 'Q3 2026', aum: '$5M AUM', desc: '90-day auditable returns. Institutional conversations begin.' },
  { date: 'Q4 2026', aum: '$10M AUM', desc: 'OTJ Capital announced to the world. African equity deployment begins.' },
  { date: '2028', aum: '$100M AUM', desc: 'The flag is planted.', large: true },
]

export default function Roadmap() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} style={{ background: '#080808', padding: '120px 32px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <motion.div variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div variants={fadeUp} style={{ fontFamily: 'Space Grotesk', fontSize: '10px', color: '#C9A84C', letterSpacing: '3px', marginBottom: '16px' }}>THE ROADMAP</motion.div>
          <motion.h2 variants={fadeUp} style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 'clamp(32px, 4vw, 48px)', color: '#FFFFFF', marginBottom: '80px' }}>From $1,000 to $100,000,000.</motion.h2>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: '16px', left: '16px', right: '16px', height: '2px', background: '#1E1E1E', zIndex: 0 }} />
            <motion.div variants={staggerContainer} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px', position: 'relative', zIndex: 1 }}>
              {nodes.map((n, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <div style={{ width: n.large ? '20px' : '14px', height: n.large ? '20px' : '14px', borderRadius: '50%', background: '#C9A84C', marginBottom: '24px', border: '2px solid #C9A84C', boxShadow: '0 0 16px rgba(201,168,76,0.3)' }} />
                  <div style={{ fontFamily: 'JetBrains Mono', fontSize: '12px', color: '#C9A84C', marginBottom: '8px' }}>{n.date}</div>
                  <div style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '18px', color: '#FFFFFF', marginBottom: '12px' }}>{n.aum}</div>
                  <div style={{ fontFamily: 'Inter', fontSize: '14px', color: '#555555', lineHeight: 1.7 }}>{n.desc}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
