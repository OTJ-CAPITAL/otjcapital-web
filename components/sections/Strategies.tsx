const strategies = [
  {
    name: 'EMA Momentum',
    tag: 'Trend Following',
    description: 'Buys when EMA(12) crosses above EMA(26) with RSI between 40–65 and positive MACD histogram. Signals align before any position opens.',
  },
  {
    name: 'Bollinger Mean Reversion',
    tag: 'Statistical Reversion',
    description: 'Buys when price touches the lower Bollinger Band, RSI below 35, and z-score below −1.5. Captures statistical extremes.',
  },
  {
    name: 'Volatility Breakout',
    tag: 'Phase 2',
    description: 'ATR-based breakout confirmation with volume. Captures explosive moves at key levels. Launching Q3 2026.',
  },
]

export default function Strategies() {
  return (
    <section id="strategies" className="py-32 px-6 border-b border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#444] text-xs tracking-[0.3em] uppercase mb-6">Strategies</p>
        <h2 className="text-5xl font-black text-white mb-16">How we generate alpha.</h2>
        <div className="grid md:grid-cols-3 gap-px bg-[#1a1a1a]">
          {strategies.map((s) => (
            <div key={s.name} className="bg-black p-8">
              <span className="text-xs text-[#444] tracking-widest uppercase">{s.tag}</span>
              <h3 className="text-xl font-bold text-white mt-3 mb-4">{s.name}</h3>
              <p className="text-[#666] text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
