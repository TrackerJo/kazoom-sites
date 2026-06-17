import { useReveal } from './lib/useReveal'
import { Nav } from './sections/Nav'
import { Hero } from './sections/Hero'
import { Proof } from './sections/Proof'
import { HowItWorks } from './sections/HowItWorks'
import { Showcase } from './sections/Showcase'
import { Testimonials } from './sections/Testimonials'
import { Pricing } from './sections/Pricing'
import { FinalCta } from './sections/FinalCta'
import { Footer } from './sections/Footer'

function App() {
  const root = useReveal<HTMLDivElement>()

  return (
    <div ref={root}>
      <Nav />
      <main>
        <Hero />
        <Proof />
        <HowItWorks />
        <Showcase />
        <Testimonials />
        <Pricing />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}

export default App
