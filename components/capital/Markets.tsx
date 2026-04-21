'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'

const markets = [
  { label: 'Africa — Primary', active: true },
  { label: 'SE Asia', active: false },
  { label: 'Latam', active: false },
  { label: 'S. Asia', active: false },
]

// Gold dot positions on the SVG world map (approximate)
const dots = [
  { cx: 300, cy: 195, label: 'Africa', size: 6 },
  { cx: 460, cy: 185, label: 'SE Asia', size: 5 },
  { cx: 175, cy: 225, label: 'LATAM', size: 5 },
  { cx: 420, cy: 175, label: 'S. Asia', size: 5 },
]

export default function Markets() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="bg-[#0D0D0D] border-t border-[#1E1E1E] py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <motion.div
            ref={ref}
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.p
              variants={fadeUp}
              className="font-body text-[#C9A84C] text-[10px] tracking-[3px] uppercase mb-6"
            >
              Where Growth Lives
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="font-display font-bold text-white leading-[1.1] mb-8"
              style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
            >
              The markets they
              <br />cannot enter.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="font-body text-[#AAAAAA] text-lg leading-[1.8] mb-6"
            >
              The structural inefficiencies that create extraordinary returns exist precisely
              because institutional capital cannot access them. Africa's equity markets grow
              at 3x the rate of mature markets. Southeast Asia's digital economy adds $100B
              annually. Latin America and South Asia are the final frontiers of uncorrelated alpha.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="font-body text-[#888888] text-base leading-[1.8] mb-10"
            >
              We are not here by accident. We are here by design — local intelligence,
              AI execution, and a first-mover position in markets that will define
              the next decade of global capital flows.
            </motion.p>

            {/* Market tags */}
            <motion.div
              variants={staggerContainer}
              className="flex flex-wrap gap-3"
            >
              {markets.map((m) => (
                <motion.span
                  key={m.label}
                  variants={fadeUp}
                  className={`font-body text-sm px-4 py-2 rounded-[2px] border transition-colors duration-300 cursor-default ${
                    m.active
                      ? 'border-[#C9A84C] text-[#C9A84C] bg-[rgba(201,168,76,0.06)]'
                      : 'border-[#2A2A2A] text-[#888888] hover:border-[#C9A84C] hover:text-[#C9A84C]'
                  }`}
                >
                  {m.label}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: world map SVG */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-[16/9] bg-[#141414] border border-[#1E1E1E] rounded-[4px] overflow-hidden">
              {/* Simplified SVG world map */}
              <svg
                viewBox="0 0 600 340"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Subtle grid */}
                <defs>
                  <pattern id="mapGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#1E1E1E" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="600" height="340" fill="url(#mapGrid)" />

                {/* Simplified continent shapes */}
                {/* North America */}
                <path
                  d="M 70 60 L 90 50 L 120 55 L 145 70 L 155 100 L 150 130 L 130 150 L 110 145 L 85 130 L 65 110 L 60 85 Z"
                  fill="#1E1E1E" stroke="#2A2A2A" strokeWidth="0.5"
                />
                {/* Central America */}
                <path
                  d="M 110 150 L 130 155 L 125 170 L 115 175 L 105 165 Z"
                  fill="#1E1E1E" stroke="#2A2A2A" strokeWidth="0.5"
                />
                {/* South America */}
                <path
                  d="M 130 175 L 175 170 L 195 185 L 200 220 L 185 250 L 165 270 L 145 260 L 130 240 L 120 210 L 118 190 Z"
                  fill="#1E1E1E" stroke="#2A2A2A" strokeWidth="0.5"
                />
                {/* Europe */}
                <path
                  d="M 255 55 L 285 50 L 305 60 L 300 85 L 280 90 L 260 80 Z"
                  fill="#1E1E1E" stroke="#2A2A2A" strokeWidth="0.5"
                />
                {/* Africa */}
                <path
                  d="M 265 100 L 305 95 L 335 105 L 345 135 L 340 170 L 320 195 L 300 210 L 275 200 L 258 175 L 252 145 L 255 115 Z"
                  fill="#1E1E1E" stroke="#2A2A2A" strokeWidth="0.5"
                />
                {/* Middle East */}
                <path
                  d="M 335 95 L 365 90 L 375 115 L 355 130 L 335 120 Z"
                  fill="#1E1E1E" stroke="#2A2A2A" strokeWidth="0.5"
                />
                {/* South Asia */}
                <path
                  d="M 375 105 L 415 100 L 430 120 L 420 150 L 405 160 L 385 145 L 370 125 Z"
                  fill="#1E1E1E" stroke="#2A2A2A" strokeWidth="0.5"
                />
                {/* Russia / North Asia */}
                <path
                  d="M 305 40 L 400 30 L 500 40 L 510 75 L 450 80 L 390 70 L 330 75 L 305 60 Z"
                  fill="#1E1E1E" stroke="#2A2A2A" strokeWidth="0.5"
                />
                {/* SE Asia */}
                <path
                  d="M 435 130 L 480 120 L 510 135 L 510 160 L 490 170 L 460 165 L 440 150 Z"
                  fill="#1E1E1E" stroke="#2A2A2A" strokeWidth="0.5"
                />
                {/* Australia */}
                <path
                  d="M 460 195 L 510 185 L 540 200 L 545 230 L 520 250 L 480 248 L 455 230 L 450 210 Z"
                  fill="#1E1E1E" stroke="#2A2A2A" strokeWidth="0.5"
                />

                {/* Gold pulsing dots */}
                {/* Africa */}
                <circle cx="300" cy="155" r="8" fill="rgba(201,168,76,0.15)">
                  <animate attributeName="r" values="8;14;8" dur="2.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.5;0.1;0.5" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="300" cy="155" r="5" fill="#C9A84C" />

                {/* SE Asia */}
                <circle cx="472" cy="145" r="6" fill="rgba(201,168,76,0.15)">
                  <animate attributeName="r" values="6;11;6" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.5;0.1;0.5" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="472" cy="145" r="4" fill="#C9A84C" opacity="0.8" />

                {/* LATAM */}
                <circle cx="165" cy="215" r="6" fill="rgba(201,168,76,0.15)">
                  <animate attributeName="r" values="6;11;6" dur="2.8s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.5;0.1;0.5" dur="2.8s" repeatCount="indefinite" />
                </circle>
                <circle cx="165" cy="215" r="4" fill="#C9A84C" opacity="0.8" />

                {/* S. Asia */}
                <circle cx="405" cy="130" r="6" fill="rgba(201,168,76,0.15)">
                  <animate attributeName="r" values="6;11;6" dur="3.2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.5;0.1;0.5" dur="3.2s" repeatCount="indefinite" />
                </circle>
                <circle cx="405" cy="130" r="4" fill="#C9A84C" opacity="0.8" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
