export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[#1E1E1E]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Left: wordmark + tagline */}
          <div className="flex flex-col gap-4">
            <span className="font-display font-bold text-[#C9A84C] text-sm tracking-widest uppercase">
              OTJ CAPITAL
            </span>
            <p className="font-body text-sm text-[#555555]">Nairobi, Kenya — Est. 2026</p>
            <p className="font-body text-xs text-[#2A2A2A] uppercase tracking-widest mt-2">
              The AI runs the fund.
            </p>
          </div>

          {/* Middle: ecosystem links */}
          <div className="flex flex-col gap-4">
            <span className="font-body text-xs text-[#555555] uppercase tracking-[3px]">
              Ecosystem
            </span>
            <div className="flex flex-col gap-3">
              {[
                { label: 'otjholdings.com', href: 'https://otjholdings.com' },
                { label: 'otjcapital.com', href: 'https://otjcapital.com' },
                { label: 'otjfellowship.com', href: 'https://otjfellowship.com' },
                { label: 'otj.app', href: 'https://otj.app' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-body text-sm text-[#888888] hover:text-[#C9A84C] transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right: contact */}
          <div className="flex flex-col gap-4">
            <span className="font-body text-xs text-[#555555] uppercase tracking-[3px]">
              Contact
            </span>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:invest@otjcapital.com"
                className="font-body text-sm text-[#888888] hover:text-[#C9A84C] transition-colors duration-200"
              >
                invest@otjcapital.com
              </a>
              <a
                href="mailto:hello@otjholdings.com"
                className="font-body text-sm text-[#888888] hover:text-[#C9A84C] transition-colors duration-200"
              >
                hello@otjholdings.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1E1E1E] pt-8">
          <p className="font-body text-xs text-[#2A2A2A]">
            © 2026 OTJ Holdings. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
