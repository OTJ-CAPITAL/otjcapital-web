export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-16 border-b border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto w-full">
        <p className="text-[#444] text-sm tracking-[0.3em] uppercase mb-8">Nairobi, Kenya · Est. 2026</p>
        <h1 className="text-[clamp(3rem,10vw,9rem)] font-black leading-none tracking-tighter text-white">
          OTJ<br />CAPITAL
        </h1>
        <div className="mt-8 max-w-xl">
          <p className="text-[#888] text-xl leading-relaxed">
            An AI-native quantitative hedge fund. We deploy systematic trading strategies across crypto, forex, metals, and equities — autonomously, 24/7, from Nairobi.
          </p>
        </div>
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:invest@otjcapital.com"
            className="inline-block bg-white text-black font-semibold px-8 py-4 text-sm tracking-wide hover:bg-[#e0e0e0] transition-colors"
          >
            Request Access
          </a>
          <a
            href="#about"
            className="inline-block border border-[#333] text-white px-8 py-4 text-sm tracking-wide hover:border-white transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-[#1a1a1a] pt-12">
          {[
            { label: 'Target AUM',    value: '$100M' },
            { label: 'Timeline',      value: '2028' },
            { label: 'Asset Classes', value: '4' },
            { label: 'Strategies',    value: '42' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-[#444] text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
