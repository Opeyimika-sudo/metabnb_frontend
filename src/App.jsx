import React from 'react'
import './App.css'
import Header from '../src/components/Header'
import Hero from '../src/components/Hero'
import Logos from '../src/components/Logos'
import Inspirations from './components/Inspirations'
import Cta from './components/Cta'
import Footer from './components/Footer'


function App() {

  return (
    <div className="App">
      <Header />
      <Hero />
      <Logos />
      <Inspirations />
      <Cta />
      <Footer />
    </div>
  )
}

export default App
