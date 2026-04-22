'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'

const nodes = [
  {
    date: 'Q2 2026',
    milestone: '$500K AUM',
    body: 'Live crypto trading. Track record starts. Every trade on OTJ App.',
    pct: 100,
    status: 'ACTIVE',
    live: true,
  },
  {
    date: 'Q3 2026',
    milestone: '$5M AUM',
    body: '90-day auditable returns. First institutional conversations.',
    pct: 40,
    status: 'Q3 2026',
    live: false,
  },
  {
    date: 'Q4 2026',
    milestone: '$10M AUM',
    body: 'African equity strategies go live. Fund goes public.',
    pct: 10,
    status: 'Q4 2026',
    live: false,
  },
  {
    date: '2028',
    milestone: '$100M AUM',
    body: 'The number that proves the thesis.',
    pct: 0,
    status: '2028',
    live: false,
  },
]

export default function Roadmap() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1, fallbackInView: true })
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="roadmap" ref={ref} style={{ padding: '120px 32px', background: '#F5F5F5', borderBottom: '1px solid #E5E5E5' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <motion.div variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div variants={fadeUp} style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '2px', color: '#888', marginBottom: '16px' }}>ROADMAP</motion.div>
          <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-sg)', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 48px)', color: '#000', letterSpacing: '-1px', marginBottom: '64px' }}>$1,000 to $100,000,000.</motion.h2>
          <motion.div variants={staggerContainer} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0' }}>
            {nodes.map((n, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  position: 'relative',
                  padding: '40px 32px 0 32px',
                  borderLeft: i === 0 ? '1px solid #E5E5E5' : 'none',
                  borderRight: '1px solid #E5E5E5',
                  borderTop: '1px solid #E5E5E5',
                  borderBottom: '1px solid #E5E5E5',
                  background: '#fff',
                  boxShadow: hovered === i ? '0 4px 24px rgba(0,0,0,0.08)' : 'none',
                  transition: 'box-shadow 0.2s ease',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* LIVE dot indicator */}
                {n.live && (
                  <div style={{ position: 'absolute', top: '16px', right: '16px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#22c55e', letterSpacing: '1px' }}>LIVE</span>
                  </div>
                )}

                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#888', marginBottom: '8px' }}>{n.date}</div>

                {/* Status tag */}
                <div style={{
                  display: 'inline-block',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  letterSpacing: '1px',
                  border: '1px solid #000',
                  padding: '2px 8px',
                  marginBottom: '16px',
                  background: n.status === 'ACTIVE' ? '#000' : 'transparent',
                  color: n.status === 'ACTIVE' ? '#fff' : '#000',
                  alignSelf: 'flex-start',
                }}>
                  {n.status}
                </div>

                <div style={{ fontFamily: 'var(--font-sg)', fontWeight: 800, fontSize: '24px', color: '#000', marginBottom: '12px', letterSpacing: '-0.5px' }}>{n.milestone}</div>
                <div style={{ fontFamily: 'var(--font-inter)', fontSize: '14px', color: '#666', lineHeight: 1.7, marginBottom: '32px', flexGrow: 1 }}>{n.body}</div>

                {/* Progress bar track */}
                <div style={{ height: '3px', background: '#E5E5E5', width: '100%', position: 'absolute', bottom: 0, left: 0 }}>
                  <motion.div
                    initial={{ width: '0%' }}
                    animate={{ width: inView ? `${n.pct}%` : '0%' }}
                    transition={{ duration: 1, delay: i * 0.15, ease: 'easeOut' }}
                    style={{ height: '3px', background: '#000' }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
