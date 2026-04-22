'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'
import CountUp from 'react-countup'
import { useEffect, useState } from 'react'

const stats = [
  { label: 'Strategies live', value: 3, suffix: '' },
  { label: 'Markets covered', value: 4, suffix: '' },
  { label: 'Hours of operation', value: 24, suffix: '/day' },
  { label: 'Human emotion', value: 0, suffix: '' },
]

type Pair = { symbol: string; price: number; delta: number }

const INITIAL_PRICES: Pair[] = [
  { symbol: 'BTC/USDT', price: 94000, delta: 0 },
  { symbol: 'ETH/USDT', price: 1800, delta: 0 },
  { symbol: 'SOL/USDT', price: 150, delta: 0 },
  { symbol: 'BNB/USDT', price: 600, delta: 0 },
]

function drift(price: number): { price: number; delta: number } {
  const change = (Math.random() - 0.5) * 2 * 0.003 // ±0.3%
  const newPrice = price * (1 + change)
  return { price: newPrice, delta: change * 100 }
}

export default function Hero() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1, fallbackInView: true })
  const [pairs, setPairs] = useState<Pair[]>(INITIAL_PRICES)
  const [hoverPrimary, setHoverPrimary] = useState(false)
  const [hoverSecondary, setHoverSecondary] = useState(false)

  useEffect(() => {
    const id = setInterval(() => {
      setPairs(prev =>
        prev.map(p => {
          const { price, delta } = drift(p.price)
          return { ...p, price, delta }
        })
      )
    }, 3000)
    return () => clearInterval(id)
  }, [])

  const tickerItems = [...pairs, ...pairs] // duplicate for seamless loop

  return (
    <section
      ref={ref}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '100px 32px 80px',
        borderBottom: '1px solid #E5E5E5',
      }}
    >
      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
      <div style={{ maxWidth: '900px', margin: '0 auto', width: '100%' }}>
        <motion.div variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div
            variants={fadeUp}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '2px',
              color: '#888',
              marginBottom: '20px',
            }}
          >
            OTJ CAPITAL — QUANTITATIVE FUND
          </motion.div>

          {/* Live ticker strip */}
          <motion.div
            variants={fadeUp}
            style={{
              background: '#F5F5F5',
              border: '1px solid #E5E5E5',
              overflow: 'hidden',
              marginBottom: '32px',
              padding: '10px 0',
            }}
          >
            <div
              style={{
                display: 'flex',
                width: 'max-content',
                animation: 'ticker 20s linear infinite',
              }}
            >
              {tickerItems.map((p, i) => (
                <span
                  key={i}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    color: '#111',
                    padding: '0 32px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {p.symbol}&nbsp;
                  <span style={{ fontWeight: 600 }}>
                    ${p.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                  &nbsp;
                  <span style={{ color: p.delta >= 0 ? '#22c55e' : '#ef4444' }}>
                    {p.delta >= 0 ? '+' : ''}
                    {p.delta.toFixed(3)}%
                  </span>
                </span>
              ))}
            </div>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            style={{
              fontFamily: 'var(--font-sg)',
              fontWeight: 800,
              fontSize: 'clamp(40px, 6vw, 80px)',
              color: '#000',
              lineHeight: 1.05,
              letterSpacing: '-2px',
              marginBottom: '32px',
            }}
          >
            We built an AI that<br />trades markets while<br />you sleep.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '20px',
              color: '#444',
              maxWidth: '560px',
              lineHeight: 1.7,
              marginBottom: '48px',
            }}
          >
            OTJ Capital runs fully automated quantitative strategies across crypto and emerging markets. No human emotion. No downtime. Every trade is logged and verifiable.
          </motion.p>

          <motion.div
            variants={fadeUp}
            style={{ display: 'flex', gap: '16px', marginBottom: '80px', flexWrap: 'wrap' }}
          >
            <a
              href="#invest"
              onMouseEnter={() => setHoverPrimary(true)}
              onMouseLeave={() => setHoverPrimary(false)}
              style={{
                background: hoverPrimary ? '#fff' : '#000',
                color: hoverPrimary ? '#000' : '#fff',
                border: hoverPrimary ? '1px solid #000' : '1px solid #000',
                padding: '14px 32px',
                fontFamily: 'var(--font-sg)',
                fontWeight: 600,
                fontSize: '15px',
                transition: 'background 0.15s, color 0.15s',
                cursor: 'pointer',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              Talk to us about investing
            </a>
            <a
              href="#strategy"
              onMouseEnter={() => setHoverSecondary(true)}
              onMouseLeave={() => setHoverSecondary(false)}
              style={{
                border: '1px solid #000',
                color: hoverSecondary ? '#fff' : '#000',
                background: hoverSecondary ? '#000' : '#fff',
                padding: '14px 32px',
                fontFamily: 'var(--font-sg)',
                fontWeight: 600,
                fontSize: '15px',
                transition: 'background 0.15s, color 0.15s',
                cursor: 'pointer',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              How it works
            </a>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '0',
              borderTop: '1px solid #E5E5E5',
              paddingTop: '40px',
            }}
          >
            {stats.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                style={{
                  paddingRight: '32px',
                  borderRight: i < 3 ? '1px solid #E5E5E5' : 'none',
                  marginRight: i < 3 ? '32px' : '0',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-sg)',
                    fontWeight: 800,
                    fontSize: '36px',
                    color: '#000',
                    marginBottom: '4px',
                  }}
                >
                  {inView ? <><CountUp end={s.value} duration={1.5} />{s.suffix}</> : `0${s.suffix}`}
                </div>
                <div style={{ fontFamily: 'var(--font-inter)', fontSize: '13px', color: '#888' }}>
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
