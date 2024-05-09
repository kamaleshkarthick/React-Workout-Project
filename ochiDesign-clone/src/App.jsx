// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'

function App() {
  

  return (
    <>
      <div className={` w-screen h-screen bg-[#040404] text-white`}>
        <Navbar />
        <LandingPage/>
      </div>
    </>
  )
}

export default App
