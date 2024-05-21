// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Freatured from './components/Freatured'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

function App() {

const locomotiveScroll = new LocomotiveScroll();


  return (
    <>
      <div className={` w-full min-h-screen  text-white `}>
        <Navbar />
        <LandingPage />
        <Marquee />
        <About />
        <Eyes />
        <Freatured />
        <Cards />
        <Footer/>
      </div>
     
    </>
    
  )
}

export default App
