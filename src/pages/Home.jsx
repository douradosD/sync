﻿﻿﻿import BrandVideo from '../components/BrandVideo'
import Clients from '../components/Clients'
import Differentials from '../components/Differentials'
import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Portfolio from '../components/Portfolio'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top,rgba(91,140,255,0.16),transparent_42%)]" />
      <Navbar />
      <main>
        <Hero />
        <BrandVideo />
        <Clients />
        <Portfolio />
        <Services />
        <Differentials />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
