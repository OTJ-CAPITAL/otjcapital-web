'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'

const milestones = [
  {
    date: 'Q2 2026',
    aum: '$500K AUM',
    description:
      'Live crypto trading. Track record begins. Every trade verifiable on OTJ App.',
    isActive: true,
    size: 'sm',
  },
  {
    date: 'Q3 2026',
    aum: '$5M AUM',
    description: '90-day auditable returns. Institutional conversations begin.',
    isActive: false,
    size: 'sm',
  },
  {
    date: 'Q4 2026',
    aum: '$10M AUM',
    description: 'OTJ Capital announced to the world. African equity deployment begins.',
    isActive: false,
    size: 'sm',
  },
  {
    date: '2028',
    aum: '$100M AUM',
    description: 'The flag is planted.',
    isActive: false,
    size: 'lg',
  },
]

export default function Roadmap() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="bg-[#080808] py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <p className="font-body text-[#C9A84C] text-[10px] tracking-[3px] uppercase mb-6">
          The Roadmap
        </p>

        {/* Headline */}
        <h2
          className="font-display font-bold text-white leading-[1.1] mb-20"
          style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
        >
          From $1,000 to $100,000,000.
        </h2>

        {/* Timeline — horizontal on desktop, vertical on mobile */}
        <div className="relative">
          {/* Connecting line — horizontal on desktop */}
          <div
            className="hidden md:block absolute top-[18px] left-0 right-0 h-px bg-[#1E1E1E]"
            style={{ zIndex: 0 }}
          />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="hidden md:block absolute top-[18px] left-0 right-0 h-px bg-[#C9A84C] origin-left"
            style={{ zIndex: 1 }}
          />

          {/* Milestones grid */}
          <motion.div
            ref={ref}
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 relative"
            style={{ zIndex: 2 }}
          >
            {milestones.map((m, i) => (
              <motion.div
                key={m.date}
                variants={fadeUp}
                className="flex flex-col"
              >
                {/* Dot + date row */}
                <div className="flex md:flex-col items-start md:items-start gap-4 md:gap-0 mb-4 md:mb-6">
                  {/* Dot */}
                  <div className={`relative flex-shrink-0 ${m.size === 'lg' ? 'mt-0.5' : 'mt-0.5'}`}>
                    {m.size === 'lg' ? (
                      <div className="w-9 h-9 rounded-full bg-[#C9A84C] flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-[#080808]" />
                      </div>
                    ) : (
                      <div
                        className={`w-5 h-5 rounded-full border-2 ${
                          m.isActive ? 'bg-[#C9A84C] border-[#C9A84C]' : 'bg-[#080808] border-[#2A2A2A]'
                        }`}
                      />
                    )}
                  </div>

                  {/* Date — only visible on mobile beside the dot */}
                  <span className="md:hidden font-mono text-[#C9A84C] text-sm font-bold">
                    {m.date}
                  </span>
                </div>

                {/* Date — visible on desktop below the dot */}
                <span className="hidden md:block font-mono text-[#C9A84C] text-xs font-bold tracking-wider mb-3">
                  {m.date}
                </span>

                {/* AUM */}
                <span
                  className={`font-display font-bold mb-3 ${
                    m.size === 'lg' ? 'text-2xl text-[#C9A84C]' : 'text-lg text-white'
                  }`}
                >
                  {m.aum}
                </span>

                {/* Description */}
                <p className="font-body text-[#888888] text-sm leading-relaxed">
                  {m.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
