const milestones = [
  { stage: 'Seed', amount: '$10,000', date: 'Q2 2026', active: true },
  { stage: 'First Close', amount: '$500,000', date: 'Q3 2026', active: false },
  { stage: 'Preseed', amount: '$2,000,000', date: 'Q4 2026', active: false },
  { stage: 'Series A', amount: '$20,000,000', date: '2027', active: false },
  { stage: 'Target AUM', amount: '$100,000,000', date: '2028', active: false },
]

export default function Milestones() {
  return (
    <section id="milestones" className="py-32 px-6 border-b border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#444] text-xs tracking-[0.3em] uppercase mb-6">Roadmap</p>
        <h2 className="text-5xl font-black text-white mb-16">The path to $100M.</h2>
        <div className="space-y-px bg-[#1a1a1a]">
          {milestones.map((m) => (
            <div key={m.stage} className={`flex items-center justify-between px-8 py-6 ${m.active ? 'bg-white' : 'bg-black'}`}>
              <div className="flex items-center gap-6">
                <span className={`text-xs tracking-widest uppercase ${m.active ? 'text-black' : 'text-[#444]'}`}>{m.stage}</span>
                <span className={`text-2xl font-black ${m.active ? 'text-black' : 'text-white'}`}>{m.amount}</span>
              </div>
              <span className={`text-sm ${m.active ? 'text-black font-semibold' : 'text-[#444]'}`}>{m.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
