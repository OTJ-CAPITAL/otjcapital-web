const rules = [
  { rule: 'Max AUM at risk per trade', value: '1%' },
  { rule: 'Max AUM per position', value: '5%' },
  { rule: 'Min reward:risk ratio', value: '2.5×' },
  { rule: 'Stop loss', value: '1.5× ATR' },
  { rule: 'Max hold time', value: '48 hrs' },
  { rule: 'Kill switch — drawdown', value: '15%' },
]

export default function Metrics() {
  return (
    <section className="py-32 px-6 border-b border-[#1a1a1a] bg-[#040404]">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#444] text-xs tracking-[0.3em] uppercase mb-6">Risk Management</p>
        <h2 className="text-5xl font-black text-white mb-4">Risk first. Always.</h2>
        <p className="text-[#666] mb-16 max-w-xl">Every position is sized by our risk model. The engine never takes a trade that violates these constraints — not once.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[#1a1a1a]">
          {rules.map((r) => (
            <div key={r.rule} className="bg-[#040404] p-8">
              <p className="text-3xl font-black text-white">{r.value}</p>
              <p className="text-[#444] text-sm mt-2">{r.rule}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
