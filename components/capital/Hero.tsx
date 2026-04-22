'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer, goldLineDraw } from '@/lib/animations'

const metrics = [
  { value: '24/7', label: 'Market Coverage' },
  { value: '0', label: 'Emotional Decisions' },
  { value: '$100M', label: '2028 AUM Target' },
  { value: 'Africa', label: 'Primary Market' },
]

export default function Hero() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section style={{
      minHeight: '100vh', background: '#080808', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', padding: '120px 32px 80px', position: 'relative', overflow: 'hidden'
    }}>
      {/* Grid background */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.4,
        backgroundImage: 'linear-gradient(#111111 1px, transparent 1px), linear-gradient(90deg, #111111 1px, transparent 1px)',
        backgroundSize: '64px 64px', pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          {/* Tag */}
          <motion.div variants={fadeUp} style={{ fontFamily: 'Space Grotesk', fontSize: '11px', color: '#C9A84C', letterSpacing: '4px', marginBottom: '32px' }}>
            NAIROBI, KENYA — AI-NATIVE QUANTITATIVE HEDGE FUND
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={fadeUp} style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 'clamp(48px, 7vw, 88px)', lineHeight: 1.05, marginBottom: '32px', color: '#FFFFFF' }}>
            The AI<br />
            <span style={{ position: 'relative', display: 'inline-block' }}>
              Runs The Fund.
              <motion.div variants={goldLineDraw} style={{ position: 'absolute', bottom: '-4px', left: 0, right: 0, height: '2px', background: '#C9A84C', transformOrigin: 'left' }} />
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p variants={fadeUp} style={{ fontFamily: 'Inter', fontSize: '20px', color: '#888888', maxWidth: '520px', lineHeight: 1.7, marginBottom: '48px' }}>
            Every investment decision made by the machine.<br />
            No emotion. No bias. No sleep. Pure signal<br />
            from the markets Wall Street cannot touch.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} style={{ display: 'flex', gap: '16px', marginBottom: '64px', flexWrap: 'wrap' }}>
            <a href="#invest" style={{ background: '#C9A84C', color: '#080808', padding: '14px 32px', fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '15px', textDecoration: 'none', borderRadius: '2px' }}>
              Invest With Us →
            </a>
            <a href="#strategy" style={{ border: '1px solid #2A2A2A', color: '#FFFFFF', padding: '14px 32px', fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '15px', textDecoration: 'none', borderRadius: '2px' }}>
              View Strategy
            </a>
          </motion.div>

          {/* Gold divider */}
          <motion.div variants={fadeUp} style={{ height: '1px', background: '#C9A84C', width: '100%', maxWidth: '600px', marginBottom: '40px' }} />

          {/* Metrics */}
          <motion.div variants={staggerContainer} style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px', maxWidth: '600px' }}>
            {metrics.map((m, i) => (
              <motion.div key={i} variants={fadeUp}>
                <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '24px', color: '#FFFFFF', marginBottom: '4px' }}>{m.value}</div>
                <div style={{ fontFamily: 'Inter', fontSize: '12px', color: '#555555', letterSpacing: '0.5px' }}>{m.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: '-40px', left: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '1px', height: '40px', background: '#C9A84C', animation: 'pulse-down 2s ease-in-out infinite' }} />
        </div>
      </div>
    </section>
  )
}
