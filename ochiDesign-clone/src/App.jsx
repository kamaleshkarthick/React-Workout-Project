// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Freatured from './components/Freatured'
import Cards from './components/Cards'

function App() {
  

  return (
    <>
      <div className={` w-full min-h-screen  text-white `}>
        <Navbar />
        <LandingPage />
        <Marquee />
        <About />
        <Eyes />
        <Freatured />
        <Cards/>
      </div>
     
    </>
    
  )
}

export default App
