'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { useState } from 'react'

const tabs = [
  {
    label: 'Africa (Primary)',
    detail:
      'Primary focus. Nigerian Stock Exchange (NGX), Johannesburg Stock Exchange (JSE), Egyptian Exchange (EGX). FX: USD/NGN, USD/KES, USD/ZAR. Pop: 1.4B.',
  },
  {
    label: 'Southeast Asia',
    detail:
      'Secondary expansion target. Bursa Malaysia, Stock Exchange of Thailand, Ho Chi Minh Stock Exchange. Growing middle class, underserved by quant funds.',
  },
  {
    label: 'Latin America',
    detail:
      'Tier 2 target. B3 (Brazil), BMV (Mexico). High volatility = high signal density.',
  },
  {
    label: 'South Asia',
    detail:
      'Long-term. NSE India, BSE India. Enormous market, increasingly accessible to foreign quant strategies.',
  },
]

export default function Markets() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1, fallbackInView: true })
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="markets" ref={ref} style={{ padding: '120px 32px', borderBottom: '1px solid #E5E5E5' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <motion.div variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div
            variants={fadeUp}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '2px',
              color: '#888',
              marginBottom: '32px',
            }}
          >
            WHERE WE OPERATE
          </motion.div>
          <motion.h2
            variants={fadeUp}
            style={{
              fontFamily: 'var(--font-sg)',
              fontWeight: 800,
              fontSize: 'clamp(28px, 4vw, 52px)',
              color: '#000',
              letterSpacing: '-1.5px',
              lineHeight: 1.1,
              marginBottom: '32px',
            }}
          >
            The markets big funds<br />never bothered to learn.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            style={{
              fontSize: '18px',
              color: '#444',
              lineHeight: 1.8,
              maxWidth: '600px',
              marginBottom: '48px',
            }}
          >
            Africa has 1.4 billion people, rapidly growing capital markets, and almost no quantitative infrastructure. Southeast Asia, Latin America, and South Asia have the same story. These are not secondary markets. They are the thesis.
          </motion.p>

          {/* Filter tabs */}
          <motion.div
            variants={fadeUp}
            style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '0' }}
          >
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                style={{
                  fontFamily: 'var(--font-sg)',
                  fontSize: '13px',
                  fontWeight: 600,
                  border: '1px solid #000',
                  padding: '8px 20px',
                  cursor: 'pointer',
                  background: activeTab === i ? '#000' : '#fff',
                  color: activeTab === i ? '#fff' : '#000',
                  transition: 'background 0.15s, color 0.15s',
                  outline: 'none',
                }}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>

          {/* Detail panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              style={{
                marginTop: '24px',
                padding: '24px 28px',
                border: '1px solid #E5E5E5',
                background: '#F9F9F9',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '15px',
                  color: '#333',
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {tabs[activeTab].detail}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
