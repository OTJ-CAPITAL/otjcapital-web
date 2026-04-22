'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Copy } from 'lucide-react'
import { fadeUp, staggerContainer } from '@/lib/animations'

const ANNUAL_RETURN = 0.82
const SHARPE = 1.84
const MIN = 50000
const MAX = 1000000
const STEP = 10000

function formatUSD(n: number) {
  return '$' + n.toLocaleString('en-US')
}

export default function InvestCTA() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1, fallbackInView: true })
  const [amount, setAmount] = useState(250000)
  const [copied, setCopied] = useState(false)

  const projected = Math.round(amount * (1 + ANNUAL_RETURN))
  const gain = projected - amount

  function handleCopy() {
    navigator.clipboard.writeText('invest@otjcapital.com')
    setCopied(true)
  }

  useEffect(() => {
    if (!copied) return
    const t = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(t)
  }, [copied])

  return (
    <section id="invest" ref={ref} style={{ padding: '120px 32px', borderBottom: '1px solid #E5E5E5' }}>
      <motion.div variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'} style={{ maxWidth: '700px', margin: '0 auto' }}>
        <motion.div variants={fadeUp} style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '2px', color: '#888', marginBottom: '32px' }}>FOR INVESTORS</motion.div>
        <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-sg)', fontWeight: 800, fontSize: 'clamp(32px, 5vw, 60px)', color: '#000', letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: '24px' }}>
          We are raising our<br />first outside capital.
        </motion.h2>
        <motion.p variants={fadeUp} style={{ fontSize: '18px', color: '#444', lineHeight: 1.8, marginBottom: '40px' }}>
          We have a live system, a growing track record, and a clear path to scale. If you understand what we are building, reach out. We are not hard to find.
        </motion.p>

        {/* Investment return calculator */}
        <motion.div variants={fadeUp} style={{ background: '#F5F5F5', border: '1px solid #E5E5E5', padding: '40px', marginBottom: '48px' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '2px', color: '#888', marginBottom: '24px' }}>
            RUN THE NUMBERS.
          </div>

          {/* Amount display */}
          <div style={{ fontFamily: 'var(--font-sg)', fontWeight: 800, fontSize: 'clamp(32px, 4vw, 52px)', color: '#000', lineHeight: 1, marginBottom: '8px' }}>
            {formatUSD(amount)}
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#888', letterSpacing: '1px', marginBottom: '24px' }}>
            INVESTMENT AMOUNT
          </div>

          {/* Slider */}
          <input
            type="range"
            min={MIN}
            max={MAX}
            step={STEP}
            value={amount}
            onChange={e => setAmount(Number(e.target.value))}
            style={{ width: '100%', accentColor: '#000', marginBottom: '32px', cursor: 'pointer' }}
          />

          {/* Projections */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: '#555' }}>
              Projected return: <span style={{ color: '#000', fontWeight: 700 }}>{formatUSD(projected)}</span>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: '#555' }}>
              Net gain: <span style={{ color: '#000', fontWeight: 700 }}>+{formatUSD(gain)}</span>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: '#555' }}>
              Sharpe Ratio: <span style={{ color: '#000', fontWeight: 700 }}>{SHARPE}</span>
            </div>
          </div>

          {/* Disclaimer */}
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#aaa', marginTop: '24px', lineHeight: 1.6 }}>
            * Based on historical 82% annual return. Past performance does not guarantee future results.
          </div>
        </motion.div>

        {/* Email CTA row */}
        <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <a href="mailto:invest@otjcapital.com" style={{ display: 'inline-block', background: '#000', color: '#fff', padding: '16px 40px', fontFamily: 'var(--font-sg)', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}>
            invest@otjcapital.com →
          </a>
          <button
            onClick={handleCopy}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0',
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: copied ? '#000' : '#888',
              transition: 'color 0.15s ease',
            }}
            onMouseEnter={e => { if (!copied) (e.currentTarget as HTMLButtonElement).style.color = '#000' }}
            onMouseLeave={e => { if (!copied) (e.currentTarget as HTMLButtonElement).style.color = '#888' }}
          >
            <Copy size={14} />
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </motion.div>
      </motion.div>
    </section>
  )
}
