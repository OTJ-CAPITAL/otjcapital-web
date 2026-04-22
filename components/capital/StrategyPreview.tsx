'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { useState } from 'react'

const phases = [
  {
    phase: 'Phase 1',
    tag: 'LIVE NOW',
    rows: [
      ['Momentum', 'BTC/USDT · ETH/USDT · 1h'],
      ['Mean Reversion', 'BTC/USDT · ETH/USDT · 4h'],
      ['Funding Rate Arb', 'BTC Perpetuals'],
    ],
    detail:
      'Currently running momentum and mean-reversion strategies on BTC/USDT and ETH/USDT. Funding rate arbitrage is active on BTC perpetuals. All signals are executed automatically.',
    lastSignal: '2026-04-22 14:32:01 — BUY BTC/USDT 0.042 @ $94,120',
  },
  {
    phase: 'Phase 2',
    tag: 'Q3 2026',
    rows: [
      ['African Equities', 'NSE · NGX · JSE'],
      ['African FX', 'USD/KES · USD/NGN · USD/ZAR'],
    ],
    detail:
      'Expansion into African equity markets across NSE (Nigeria), NGX (Nigeria), and JSE (South Africa). FX strategies targeting the Naira, Shilling, and Rand pairs.',
    lastSignal: null,
  },
  {
    phase: 'Phase 3',
    tag: '2027',
    rows: [
      ['Commodities', 'Gold · Oil · Coffee · Cocoa'],
      ['Statistical Arb', 'Cross-pair correlation'],
    ],
    detail:
      'Commodity strategies covering soft commodities (Coffee, Cocoa) and hard commodities (Gold, Oil). Statistical arbitrage across correlated emerging market pairs.',
    lastSignal: null,
  },
]

export default function StrategyPreview() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1, fallbackInView: true })
  const [activePhase, setActivePhase] = useState(0)
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section
      ref={ref}
      style={{ padding: '120px 32px', background: '#F5F5F5', borderBottom: '1px solid #E5E5E5' }}
    >
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
            STRATEGY MATRIX
          </motion.div>
          <motion.h2
            variants={fadeUp}
            style={{
              fontFamily: 'var(--font-sg)',
              fontWeight: 800,
              fontSize: 'clamp(28px, 4vw, 48px)',
              color: '#000',
              letterSpacing: '-1px',
              marginBottom: '64px',
            }}
          >
            What we trade. And when.
          </motion.h2>
          <motion.div variants={staggerContainer} style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {phases.map((p, i) => {
              const isActive = activePhase === i
              const isHovered = hovered === i
              const headerBg = i === 0 ? '#000' : isActive ? '#111' : isHovered ? '#F9F9F9' : '#fff'
              const headerColor = i === 0 || isActive ? '#fff' : '#000'

              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  style={{ border: '1px solid #E5E5E5', marginBottom: '-1px', background: '#FFF' }}
                >
                  {/* Clickable header row */}
                  <div
                    onClick={() => setActivePhase(isActive ? -1 : i)}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      padding: '16px 32px',
                      borderBottom: '1px solid #E5E5E5',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: headerBg,
                      cursor: 'pointer',
                      transition: 'background 0.15s',
                      userSelect: 'none',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-sg)',
                          fontWeight: 700,
                          fontSize: '14px',
                          color: headerColor,
                          transition: 'color 0.15s',
                        }}
                      >
                        {p.phase}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '11px',
                          color: i === 0 || isActive ? '#aaa' : '#888',
                          border: `1px solid ${i === 0 || isActive ? '#555' : '#ddd'}`,
                          padding: '2px 8px',
                          transition: 'color 0.15s, border-color 0.15s',
                        }}
                      >
                        {p.tag}
                      </span>
                    </div>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '12px',
                        color: i === 0 || isActive ? '#aaa' : '#888',
                        transition: 'transform 0.2s',
                        display: 'inline-block',
                        transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}
                    >
                      ▾
                    </span>
                  </div>

                  {/* Static strategy rows */}
                  {p.rows.map(([name, markets], j) => (
                    <div
                      key={j}
                      style={{
                        padding: '14px 32px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        borderBottom: j < p.rows.length - 1 ? '1px solid #F0F0F0' : 'none',
                      }}
                    >
                      <span style={{ fontFamily: 'var(--font-sg)', fontSize: '14px', color: '#111' }}>
                        {name}
                      </span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#888' }}>
                        {markets}
                      </span>
                    </div>
                  ))}

                  {/* Expandable detail */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        key="detail"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div
                          style={{
                            padding: '20px 32px 24px',
                            borderTop: '1px solid #E5E5E5',
                            background: '#FAFAFA',
                          }}
                        >
                          <p
                            style={{
                              fontFamily: 'var(--font-inter)',
                              fontSize: '14px',
                              color: '#444',
                              lineHeight: 1.7,
                              marginBottom: p.lastSignal ? '16px' : '0',
                            }}
                          >
                            {p.detail}
                          </p>
                          {p.lastSignal && (
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                marginTop: '4px',
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: 'var(--font-mono)',
                                  fontSize: '11px',
                                  letterSpacing: '1px',
                                  color: '#888',
                                  textTransform: 'uppercase',
                                }}
                              >
                                Last Signal
                              </span>
                              <span
                                style={{
                                  fontFamily: 'var(--font-mono)',
                                  fontSize: '12px',
                                  color: '#111',
                                  background: '#F0F0F0',
                                  padding: '4px 12px',
                                }}
                              >
                                {p.lastSignal}
                              </span>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
