// eslint-disable-next-line no-unused-vars
import React from 'react'

const cards = () => {
  return (
      <>
          <div className=' w-full h-screen bg-zinc-800 flex gap-5 items-center px-32 '>
              <div className='Cardcontainer w-1/2 h-[50vh]'>
                  <div className='w-full h-full rounded-xl bg-[#004d43]'></div>
              </div>
              <div className='Cardcontainer w-1/2 h-[50vh] flex gap-5'>
                  <div className='w-1/2 h-full rounded-xl bg-[#192826]'></div>
                  <div className='w-1/2 h-full rounded-xl bg-[#192826]'></div>
              </div>
              
          </div> 
      </>
  )
}

export default cards