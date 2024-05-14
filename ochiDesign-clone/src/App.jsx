// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'

function App() {
  

  return (
    <>
      <div className={` w-full h-screen bg-[#040404] text-white `}>
        <Navbar />
        <LandingPage />
        <Marquee/>
      </div>
     
    </>
    
  )
}

export default App
