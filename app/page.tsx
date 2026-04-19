import Navbar from '@/components/ui/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Strategies from '@/components/sections/Strategies'
import Metrics from '@/components/sections/Metrics'
import Milestones from '@/components/sections/Milestones'
import Footer from '@/components/ui/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Strategies />
      <Metrics />
      <Milestones />
      <Footer />
    </main>
  )
}
