'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'

const faqs = [
  {
    q: 'Is OTJ Capital regulated?',
    a: 'We are structurally based in Nigeria. We are building toward regulatory recognition in both Nigeria (SEC) and South Africa (FSCA). Until then, all investors are treated as sophisticated / professional investors under private placement rules.',
  },
  {
    q: 'What is the minimum investment?',
    a: 'The minimum allocation is $50,000 USD equivalent. This may increase as AUM grows.',
  },
  {
    q: 'How do I see my returns?',
    a: 'Every investor gets access to OTJ App — a real-time dashboard showing every open position, trade, signal, and cumulative return. Nothing is hidden.',
  },
  {
    q: 'How is the trading automated?',
    a: 'All strategies run on a proprietary system connected to Binance Futures and OANDA FX. There is no human discretion at the point of execution. The AI executes based on pre-defined signal thresholds.',
  },
  {
    q: 'Can I withdraw at any time?',
    a: 'Withdrawals are processed in the next monthly cycle. We target a 30-day notice period. Capital is never locked beyond one month.',
  },
  {
    q: 'What happens if the AI loses money?',
    a: 'Every strategy has a maximum drawdown threshold. If the system breaches -15%, it halts automatically until reviewed. All risk parameters are written, auditable, and visible in OTJ App.',
  },
]

export default function FAQ() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1, fallbackInView: true })
  const [activeQ, setActiveQ] = useState<number | null>(null)

  return (
    <section id="faq" ref={ref} style={{ padding: '120px 32px', background: '#F5F5F5', borderBottom: '1px solid #E5E5E5' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <motion.div variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div variants={fadeUp} style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '2px', color: '#888', marginBottom: '16px' }}>
            INVESTOR FAQ
          </motion.div>
          <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-sg)', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 48px)', color: '#000', letterSpacing: '-1px', marginBottom: '64px' }}>
            Questions we get.
          </motion.h2>

          <motion.div variants={staggerContainer}>
            {faqs.map((item, i) => {
              const isOpen = activeQ === i
              return (
                <motion.div key={i} variants={fadeUp} style={{ borderTop: '1px solid #E5E5E5', borderLeft: '1px solid #E5E5E5', borderRight: '1px solid #E5E5E5', borderBottom: i === faqs.length - 1 ? '1px solid #E5E5E5' : 'none', background: '#fff' }}>
                  <button
                    onClick={() => setActiveQ(isOpen ? null : i)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '24px 28px',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      gap: '16px',
                    }}
                  >
                    <span style={{ fontFamily: 'var(--font-sg)', fontWeight: 700, fontSize: '16px', color: '#000', lineHeight: 1.4 }}>
                      {item.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      style={{ fontFamily: 'var(--font-mono)', fontSize: '20px', color: '#000', flexShrink: 0, lineHeight: 1, display: 'inline-block' }}
                    >
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div style={{ padding: '0 28px 28px 28px', fontFamily: 'var(--font-inter)', fontSize: '15px', color: '#444', lineHeight: 1.8 }}>
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
