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
            Africa's financial markets are structurally mispriced. Retail participation in crypto and forex is growing faster than anywhere in the world, yet institutional-grade quantitative infrastructure barely exists.
          </p>
          <p>
            OTJ Capital is building that infrastructure — and capturing the alpha that comes with it. Our AI engine scans markets every hour, generates signals from multiple quantitative strategies, sizes positions by volatility-adjusted risk models, and executes orders automatically.
          </p>
          <p className="text-white font-medium">
            We are not building a trading tool. We are building a fund.
          </p>
        </div>
      </div>
    </section>
  )
}
