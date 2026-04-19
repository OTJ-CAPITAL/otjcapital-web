export default function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a] py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <p className="text-white font-bold text-lg tracking-widest">OTJ CAPITAL</p>
          <p className="text-[#444] text-sm mt-1">Nairobi, Kenya</p>
          <p className="text-[#444] text-sm">The AI runs the fund.</p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-[#444]">
          <a href="mailto:invest@otjcapital.com" className="hover:text-white transition-colors">invest@otjcapital.com</a>
          <a href="https://otj.app" className="hover:text-white transition-colors">Investor Dashboard →</a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-[#111] text-[#333] text-xs">
        © {new Date().getFullYear()} OTJ Capital. All rights reserved. Not an offer to invest.
      </div>
    </footer>
  )
}
