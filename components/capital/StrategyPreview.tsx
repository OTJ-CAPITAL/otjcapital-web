'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'

const phases = [
  {
    phase: 'Phase 1',
    status: 'LIVE NOW',
    statusColor: 'text-[#C9A84C] border-[#C9A84C]/30 bg-[#C9A84C]/10',
    strategies: [
      { name: 'Momentum', detail: 'BTC/USDT · ETH/USDT · 1h' },
      { name: 'Mean Reversion', detail: 'BTC/USDT · ETH/USDT · 1h' },
      { name: 'Funding Rate', detail: 'BTC Perpetuals' },
    ],
  },
  {
    phase: 'Phase 2',
    status: 'Q3 2026',
    statusColor: 'text-[#888888] border-[#2A2A2A] bg-[#1E1E1E]',
    strategies: [
      { name: 'African Equities', detail: 'NSE · NGX · JSE' },
      { name: 'African FX', detail: 'USD/KES · USD/NGN · USD/ZAR' },
    ],
  },
  {
    phase: 'Phase 3',
    status: '2027',
    statusColor: 'text-[#555555] border-[#1E1E1E] bg-[#111111]',
    strategies: [
      { name: 'Commodities', detail: 'Gold · Oil · Coffee · Cocoa' },
      { name: 'Stat Arbitrage', detail: 'Cross-pair correlation' },
    ],
  },
]

export default function StrategyPreview() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="strategy" className="bg-[#080808] py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <p className="font-body text-[#C9A84C] text-[10px] tracking-[3px] uppercase mb-6">
          Strategy
        </p>

        {/* Headline */}
        <h2
          className="font-display font-bold text-white leading-[1.1] mb-16"
          style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
        >
          How the machine thinks.
        </h2>

        {/* Phase grid */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-col gap-6 mb-12"
        >
          {phases.map((ph) => (
            <motion.div
              key={ph.phase}
              variants={fadeUp}
              className="bg-[#141414] border border-[#1E1E1E] rounded-[4px] p-8 hover:border-[#C9A84C] transition-colors duration-300"
            >
              {/* Phase header */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="font-display font-bold text-white text-sm">{ph.phase}</span>
                <span className={`font-mono text-xs px-3 py-1 rounded-[2px] border ${ph.statusColor} tracking-widest`}>
                  {ph.status}
                </span>
              </div>

              {/* Strategies table */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {ph.strategies.map((s) => (
                  <div key={s.name} className="flex flex-col gap-1 py-3 border-t border-[#1E1E1E]">
                    <span className="font-display font-semibold text-white text-sm">{s.name}</span>
                    <span className="font-mono text-[#555555] text-xs">{s.detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Link */}
        <motion.a
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          href="#"
          className="inline-flex items-center font-display font-semibold text-[#C9A84C] text-sm hover:text-[#E8C96A] transition-colors duration-200 group"
        >
          View Full Strategy →
        </motion.a>
      </div>
    </section>
  )
}
