import React from 'react'
import Navbar from './Navbar'
type Wrapperprops = {
    children: React.ReactNode
}
const Wrapper = ({ children }: Wrapperprops) => {
  return (
    <div className='flex flex-col'>
        <Navbar />
      <main className='px-5 md:px-[10%]'> 
        {children}
      </main>
    </div>
  )
}

export default Wrapper
