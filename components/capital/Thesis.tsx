'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'

export default function Thesis() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section className="bg-[#080808] py-28 px-6">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-[800px] mx-auto"
      >
        {/* Label */}
        <motion.p
          variants={fadeUp}
          className="font-body text-[#C9A84C] text-[10px] tracking-[3px] uppercase mb-6"
        >
          The Edge
        </motion.p>

        {/* Headline */}
        <motion.h2
          variants={fadeUp}
          className="font-display font-bold text-white leading-[1.1] mb-10"
          style={{ fontSize: 'clamp(36px, 5vw, 52px)' }}
        >
          Wall Street cannot
          <br />go where we go.
        </motion.h2>

        {/* Body paragraphs */}
        <motion.div variants={fadeUp} className="flex flex-col gap-6 mb-12">
          <p className="font-body text-[#AAAAAA] text-lg leading-[1.8]">
            The world's largest hedge funds are trapped by their own size. When you manage
            $10 billion, you cannot enter markets that move $50 million a day. The alpha is
            real — but it is inaccessible to them. We are small enough to capture it.
          </p>
          <p className="font-body text-[#AAAAAA] text-lg leading-[1.8]">
            Africa, Southeast Asia, and Latin America represent the fastest-growing capital
            markets on earth. Nairobi. Lagos. Ho Chi Minh. Buenos Aires. These markets trade
            on structural inefficiencies that persist precisely because no sophisticated
            quantitative capital has arrived. We arrive first, with machine-speed execution.
          </p>
          <p className="font-body text-[#AAAAAA] text-lg leading-[1.8]">
            The asymmetry is structural. We hold a compounding edge: AI that never sleeps,
            markets that are inefficient by design, and a location advantage that no
            New York or London fund can replicate. This is not a strategy. It is a position.
          </p>
        </motion.div>

        {/* Pull quote */}
        <motion.blockquote
          variants={fadeUp}
          className="pl-6 border-l-[3px] border-[#C9A84C]"
        >
          <p className="font-display font-semibold text-white text-xl leading-[1.5] mb-3">
            "The best capital allocation decisions are made by systems — not sentiment."
          </p>
          <cite className="font-body text-[#555555] text-sm not-italic">
            — OTJ Capital, Core Thesis
          </cite>
        </motion.blockquote>
      </motion.div>
    </section>
  )
}
