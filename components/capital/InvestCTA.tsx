'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'

export default function InvestCTA() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section className="bg-[#C9A84C] py-28 px-6">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-4xl mx-auto text-center"
      >
        {/* Headline */}
        <motion.h2
          variants={fadeUp}
          className="font-display font-bold text-[#080808] leading-[1.0] mb-8"
          style={{ fontSize: 'clamp(40px, 6vw, 64px)' }}
        >
          Ready to be early?
        </motion.h2>

        {/* Body */}
        <motion.p
          variants={fadeUp}
          className="font-body text-[#2A2A2A] text-xl leading-[1.7] mb-4 max-w-2xl mx-auto"
        >
          The founding investor base is being assembled now. This window — the one where
          you get in before the track record is public, before the institutional money
          arrives — is finite.
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="font-body text-[#555555] text-base leading-[1.7] mb-12 max-w-xl mx-auto"
        >
          Every great fund was once a bet. The founders who took it early never forgot
          that they did. The window is closing. Reach out.
        </motion.p>

        {/* CTA button */}
        <motion.a
          variants={fadeUp}
          href="mailto:invest@otjcapital.com"
          className="inline-flex items-center h-14 px-10 bg-transparent border-2 border-[#080808] text-[#080808] font-display font-bold text-base rounded-[2px] hover:bg-[#080808] hover:text-[#C9A84C] transition-all duration-300"
        >
          invest@otjcapital.com →
        </motion.a>
      </motion.div>
    </section>
  )
}
