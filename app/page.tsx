import Navigation from '@/components/shared/Navigation'
import Footer from '@/components/shared/Footer'
import Hero from '@/components/capital/Hero'
import Thesis from '@/components/capital/Thesis'
import HowItWorks from '@/components/capital/HowItWorks'
import StrategyPreview from '@/components/capital/StrategyPreview'
import Markets from '@/components/capital/Markets'
import FAQ from '@/components/capital/FAQ'
import Roadmap from '@/components/capital/Roadmap'
import InvestCTA from '@/components/capital/InvestCTA'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Thesis />
      <HowItWorks />
      <StrategyPreview />
      <Markets />
      <FAQ />
      <Roadmap />
      <InvestCTA />
      <Footer />
    </main>
  )
}
