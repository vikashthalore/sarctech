import React, { useState } from 'react'

// const {opener, setOpner} = useState(false)

// const toggleFAQ = () => {
//   setOpner(!opener)
// }
const Navbar = () => {
  const [opener, setOpner] = useState(false)

  const toggleFAQ = () => {
    setOpner(!opener)
  }
    

  return (
    <div className='bg-teal-900 text-white p-2 mb-0 sticky fixed'>
        <div className='flex text-center items-center m-1 justify-between'>
            <div>
                <div className=' font-extrabold text-2xl list-none '><li><a href="/"><span className='text-lime-400 hover:text-gray-700 '>SARC</span> Technology</a></li></div>
            </div>
            <ul className='hidden lg:flex flex-row gap-3 font-semibold text-xl md:   '>
                <li className='flex text-center hover:text-lime-400 '><a href="/">Home</a></li>
                <li className='hover:text-lime-400'><a href="/about">About</a></li>
                <li className='hover:text-lime-400'><a href="/services">Services</a></li>
                <li className='hover:text-lime-400'><a href="contact">ContactUs</a></li>
                <li><a href="marketingcompany">Best Digital Marketing Company</a></li>
            </ul>
            <button className='hidden md:block text-2xl font-semibold px-4 py-2 rounded bg-lime-400 
            text-gray-900 hover:text-gray-700 cursor-pointer 
            hover:bg-white transition delay-105 duration-300 ease-in-out 
            
            '>Portfolio</button>
             {/* Mobile Menu Toggle */}
        <button
          onClick={toggleFAQ}
          className="md:hidden text-3xl px-4 py-2 hover:text-lime-400 transition"
          aria-label="Toggle menu"
        >
          {opener ? "X" : "☰"}  
        </button>
            {/* <button className=' cursor-pointer h-12 font-lg py-2 px-7 transition md:hidden'><span className='flex text-3xl items-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-130 '
            onClick={toggleFAQ}
            aria-label='Toggle Menu'> ☰ </span></button> */}
        </div>
        {/* responsive deisgn  */}
        <div className={`md:hidden ${opener ? 'block' : 'hidden'}`}>
          <ul className='flex flex-col *:mt-0 text-center gap-3 font-semibold text-xl bg-teal-400 *:text-white p-3'>
             <li className='' ><a href="/about">About</a></li>
             <li><a href="/services">Services</a></li>
             <li><a href="/contact">ContactUs</a></li>
             <li><a href="/marketingcompany">Best Digital Markketing Company</a></li>
          </ul>
        </div>
        

     
    </div>
  )
}

export default Navbar


