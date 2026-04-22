'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { useState } from 'react'

const steps = [
  {
    num: '01',
    title: 'Data in.',
    body: 'The system ingests price data, order book depth, funding rates, and macroeconomic signals across 40+ instruments in real time.',
  },
  {
    num: '02',
    title: 'Signal generated.',
    body: 'Quantitative models — momentum, mean reversion, statistical arbitrage — score every opportunity against historical performance.',
  },
  {
    num: '03',
    title: 'Trade executed.',
    body: 'When a signal clears the risk threshold, the system executes automatically. No human approval required. No hesitation.',
  },
  {
    num: '04',
    title: 'Everything logged.',
    body: 'Every entry, exit, size, P&L, and AI rationale is recorded. Investors can see it all in OTJ App in real time.',
  },
]

export default function HowItWorks() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1, fallbackInView: true })
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section id="strategy" ref={ref} style={{ padding: '120px 32px', borderBottom: '1px solid #E5E5E5' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <motion.div variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div
            variants={fadeUp}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '2px',
              color: '#888',
              marginBottom: '16px',
            }}
          >
            HOW IT WORKS
          </motion.div>
          <motion.h2
            variants={fadeUp}
            style={{
              fontFamily: 'var(--font-sg)',
              fontWeight: 800,
              fontSize: 'clamp(28px, 4vw, 48px)',
              color: '#000',
              letterSpacing: '-1px',
              marginBottom: '40px',
            }}
          >
            Four steps. Zero humans.
          </motion.h2>

          {/* Signal flow visual */}
          <motion.div
            variants={fadeUp}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0',
              marginBottom: '48px',
            }}
          >
            {steps.map((_, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                <motion.div
                  animate={{ x: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.3, ease: 'easeInOut' }}
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: '#000',
                  }}
                />
                {i < steps.length - 1 && (
                  <div
                    style={{
                      width: '60px',
                      height: '1px',
                      background: '#E5E5E5',
                      margin: '0 4px',
                    }}
                  />
                )}
              </div>
            ))}
          </motion.div>

          {/* Step cards */}
          <motion.div
            variants={staggerContainer}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '0',
            }}
          >
            {steps.map((s, i) => {
              const isHovered = hoveredCard === i
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  onMouseEnter={() => setHoveredCard(i)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    padding: '40px 32px',
                    borderLeft: i === 0 ? '1px solid #E5E5E5' : 'none',
                    borderRight: '1px solid #E5E5E5',
                    borderTop: '1px solid #E5E5E5',
                    borderBottom: '1px solid #E5E5E5',
                    background: isHovered ? '#000' : '#fff',
                    transition: 'background 0.2s, color 0.2s',
                    cursor: 'default',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '12px',
                      color: isHovered ? '#fff' : '#BBB',
                      marginBottom: '20px',
                      transition: 'color 0.2s',
                    }}
                  >
                    {s.num}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-sg)',
                      fontWeight: 700,
                      fontSize: '22px',
                      color: isHovered ? '#fff' : '#000',
                      marginBottom: '16px',
                      transition: 'color 0.2s',
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '15px',
                      color: isHovered ? '#ccc' : '#555',
                      lineHeight: 1.7,
                      transition: 'color 0.2s',
                    }}
                  >
                    {s.body}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
