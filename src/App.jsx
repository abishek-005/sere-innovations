import React from 'react'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Features from './components/Features'
import Benefits from './components/Benefits'
import TrustCredibility from './components/TrustCredibility'
import WhoItIsFor from './components/WhoItIsFor'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="app-container">
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Benefits />
      <TrustCredibility />
      <WhoItIsFor />
      <CTASection />
      <Footer />
    </div>
  )
}

export default App
