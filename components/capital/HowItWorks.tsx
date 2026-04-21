'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'

const cards = [
  {
    number: '01',
    title: 'QUANTITATIVE',
    body: 'Every signal derived from data. No gut feelings. No opinions. The model decides.',
  },
  {
    number: '02',
    title: 'AI-NATIVE',
    body: 'Not retrofitted with AI. Born AI-first. The intelligence is structural, not supplemental.',
  },
  {
    number: '03',
    title: 'TIRELESS',
    body: 'Monitors every market. Executes every signal. 24 hours a day. No exceptions.',
  },
]

export default function HowItWorks() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="bg-[#0D0D0D] border-t border-[#1E1E1E] py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <p className="font-body text-[#C9A84C] text-[10px] tracking-[3px] uppercase mb-6">
          The Machine
        </p>

        {/* Headline */}
        <h2
          className="font-display font-bold text-white leading-[1.1] mb-16"
          style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
        >
          Every decision. Data-driven.
        </h2>

        {/* Cards */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {cards.map((card) => (
            <motion.div
              key={card.number}
              variants={fadeUp}
              className="group bg-[#141414] border border-[#1E1E1E] rounded-[4px] p-8 hover:border-[#C9A84C] transition-colors duration-300"
            >
              {/* Number */}
              <span className="font-mono text-[#C9A84C] text-sm font-bold block mb-6 tracking-wider">
                {card.number}
              </span>

              {/* Title */}
              <h3 className="font-display font-bold text-white text-xl tracking-wide mb-4 uppercase">
                {card.title}
              </h3>

              {/* Body */}
              <p className="font-body text-[#888888] text-sm leading-relaxed">
                {card.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
