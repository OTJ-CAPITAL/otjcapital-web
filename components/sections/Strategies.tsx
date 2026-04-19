const strategies = [
  {
    name: 'EMA Momentum',
    tag: 'Trend Following',
    markets: 'Crypto · Forex · Metals · Equities',
    description: 'Enters when EMA(12) crosses above EMA(26) with RSI between 40–65 and a positive MACD histogram. All three signals must align before a position opens.',
  },
  {
    name: 'Bollinger Mean Reversion',
    tag: 'Statistical Reversion',
    markets: 'Crypto · Forex · Metals · Equities',
    description: 'Buys when price touches the lower Bollinger Band, RSI is below 35, and z-score is below −1.5. Captures statistically extreme oversells across all asset classes.',
  },
  {
    name: 'Volatility Breakout',
    tag: 'Momentum Confirmation',
    markets: 'Crypto · Forex · Metals · Equities',
    description: 'Enters when price moves more than 2× ATR in a single candle with 1.5× average volume. Confirms explosive moves with hard evidence before sizing in.',
  },
  {
    name: 'Funding Rate',
    tag: 'Derivatives Edge',
    markets: 'BTC · ETH Perpetuals',
    description: 'Shorts when perpetual funding is extremely positive (overleveraged longs) and longs when it turns sharply negative. A structural edge unique to crypto derivatives.',
  },
]

export default function Strategies() {
  return (
    <section id="strategies" className="py-32 px-6 border-b border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#444] text-xs tracking-[0.3em] uppercase mb-6">Strategies</p>
        <h2 className="text-5xl font-black text-white mb-4">How we generate alpha.</h2>
        <p className="text-[#666] mb-16 max-w-xl">
          Four systematic strategies. 42 deployments across 34 instruments. Every signal is logged, every trade is recorded, and every strategy is scored weekly by the AI reflection engine.
        </p>
        <div className="grid md:grid-cols-2 gap-px bg-[#1a1a1a]">
          {strategies.map((s) => (
            <div key={s.name} className="bg-black p-8">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-[#444] tracking-widest uppercase">{s.tag}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{s.name}</h3>
              <p className="text-[#c9a84c] text-xs mb-4 tracking-wide">{s.markets}</p>
              <p className="text-[#666] text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
