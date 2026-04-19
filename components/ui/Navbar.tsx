export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#1a1a1a] bg-black/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-white font-bold text-xl tracking-widest">OTJ</span>
        <div className="hidden md:flex items-center gap-10 text-sm text-[#666]">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#strategies" className="hover:text-white transition-colors">Strategies</a>
          <a href="#milestones" className="hover:text-white transition-colors">Milestones</a>
        </div>
        <a
          href="mailto:invest@otjcapital.com"
          className="text-sm border border-white text-white px-5 py-2 hover:bg-white hover:text-black transition-all"
        >
          Invest
        </a>
      </div>
    </nav>
  )
}
