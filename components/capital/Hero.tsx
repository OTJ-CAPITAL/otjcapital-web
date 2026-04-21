'use client'

import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { goldLineDraw } from '@/lib/animations'

const metrics = [
  { number: '24/7', label: 'Market Coverage', isStatic: true },
  { number: 0, label: 'Emotional Decisions', isStatic: false, suffix: '' },
  { number: 100, label: '2028 AUM Target', isStatic: false, prefix: '$', suffix: 'M' },
  { number: 'Africa', label: 'Primary Market', isStatic: true },
]

export default function Hero() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section
      className="relative min-h-screen bg-[#080808] flex flex-col justify-center overflow-hidden"
      style={{
        backgroundImage: `
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 79px,
            #111111 79px,
            #111111 80px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 79px,
            #111111 79px,
            #111111 80px
          )
        `,
      }}
    >
      {/* Subtle gold glow at top center */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center top, rgba(201,168,76,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 w-full">
        {/* Tag */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-body text-[#C9A84C] text-[11px] tracking-[4px] uppercase mb-8"
        >
          Nairobi, Kenya — AI-Native Quantitative Hedge Fund
        </motion.p>

        {/* Headline */}
        <div className="mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display font-bold text-white leading-[1.0] mb-2"
            style={{ fontSize: 'clamp(48px, 8vw, 88px)' }}
          >
            The AI
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative inline-block"
          >
            <h1
              className="font-display font-bold text-white leading-[1.0]"
              style={{ fontSize: 'clamp(48px, 8vw, 88px)' }}
            >
              Runs The Fund.
            </h1>
            {/* Gold underline draws left-to-right */}
            <motion.div
              variants={goldLineDraw}
              initial="hidden"
              animate="visible"
              className="absolute bottom-1 left-0 right-0 h-[3px] bg-[#C9A84C]"
              style={{ originX: 0 }}
            />
          </motion.div>
        </div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="font-body text-[#888888] mb-10 leading-relaxed"
          style={{ fontSize: 'clamp(16px, 2vw, 20px)', maxWidth: '520px' }}
        >
          Every investment decision made by the machine.
          <br />No emotion. No bias. No sleep. Pure signal
          <br />from the markets Wall Street cannot touch.
        </motion.p>

        {/* CTA Row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          <a
            href="mailto:invest@otjcapital.com"
            className="inline-flex items-center h-12 px-7 bg-[#C9A84C] text-[#080808] font-display font-semibold text-sm rounded-[2px] hover:bg-[#E8C96A] transition-colors duration-200"
          >
            Invest With Us →
          </a>
          <a
            href="#strategy"
            className="inline-flex items-center h-12 px-7 bg-transparent border border-[#2A2A2A] text-white font-display font-semibold text-sm rounded-[2px] hover:border-[#C9A84C] transition-colors duration-200"
          >
            View Strategy
          </a>
        </motion.div>

        {/* Gold separator line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
          className="h-px bg-[#C9A84C] mb-8 origin-left"
          style={{ maxWidth: '640px' }}
        />

        {/* Metric Strip */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          style={{ maxWidth: '640px' }}
        >
          {metrics.map((m, i) => (
            <div key={i} className="flex flex-col gap-1">
              <span className="font-display font-bold text-white text-2xl">
                {m.isStatic ? (
                  m.number
                ) : inView ? (
                  <CountUp
                    start={0}
                    end={m.number as number}
                    duration={2}
                    prefix={m.prefix}
                    suffix={m.suffix}
                    delay={0.1 * i}
                  />
                ) : (
                  `${m.prefix ?? ''}0${m.suffix ?? ''}`
                )}
              </span>
              <span className="font-body text-[#555555] text-xs tracking-wide">{m.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-[#C9A84C] scroll-indicator origin-top" />
      </div>
    </section>
  )
}
