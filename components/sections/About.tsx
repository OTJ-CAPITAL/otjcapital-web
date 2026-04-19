export default function About() {
  return (
    <section id="about" className="py-32 px-6 border-b border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-start">
        <div>
          <p className="text-[#444] text-xs tracking-[0.3em] uppercase mb-6">About</p>
          <h2 className="text-5xl font-black text-white leading-tight">
            Africa's first AI hedge fund.
          </h2>
        </div>
        <div className="space-y-6 text-[#888] leading-relaxed">
          <p>
            Africa's financial markets are structurally mispriced. Retail participation in crypto and forex is growing faster here than anywhere else in the world, yet institutional-grade quantitative infrastructure barely exists.
          </p>
          <p>
            OTJ Capital is building that infrastructure — and capturing the alpha that comes with it. Our AI engine scans 34 instruments across crypto, forex, metals, and equities every hour. It generates signals, sizes positions by volatility-adjusted risk models, routes orders to the right exchange, and monitors every open trade automatically.
          </p>
          <p>
            We have a structural edge in African currency pairs — USD/KES, USD/ZAR, USD/NGN — markets where liquidity is thin, information moves slow, and local knowledge is real. That is our home market.
          </p>
          <p className="text-white font-medium">
            We are not building a trading tool. We are building a fund.
          </p>
        </div>
      </div>
    </section>
  )
}
