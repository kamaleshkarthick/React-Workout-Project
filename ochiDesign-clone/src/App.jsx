// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'

function App() {
  

  return (
    <>
      <div className={` w-full min-h-screen bg-[#000000] text-white `}>
        <Navbar />
        <LandingPage />
        <Marquee />
        <About/>
      </div>
     
    </>
    
  )
}

export default App
