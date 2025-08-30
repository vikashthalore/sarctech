import React from 'react'
// import { FaAlignRight, FaArrowAltCircleRight, FaArrowRight } from 'react-icons/fa'
import ItSolution from './section/ItSolution'
import DescPage from './section/DescPage'

const Services = () => {
  return (
    <div className='bg-white'>
    <section class="bg-[#f3f0ff] relative w-full h-64 flex flex-col items-center justify-center text-center overflow-hidden m-0 p-0">
  {/* <!-- Left Shape --> */}
  <div class="absolute top-33 left-0 transform -translate-y-1/2 -translate-x-1/2 w-21 h-21 bg-purple-500 rounded-full shadow-lg animate-bounce"></div>

  {/* <!-- Right Shape --> */}
  <div class="absolute top-20 right-2 transform  text-pink-500 text-9xl animate-spin [animation-duration:8s] h-18 w-auto">*</div>

  {/* <!-- Content --> */}
  <h1 class="text-4xl font-bold sm:text-sm max-md:text-2xl lg:text-3xl text-gray-900">Services</h1>
  <p class="text-gray-800 mt-2 flex items-center gap-2">
    <a href="#" class="text-gray-600 hover:text-gray-900">Home</a>
    <span>&gt;</span>
    <span class="font-semibold">Services</span>
  </p>

</section>
<div className='border-red-800 bg-red-50'>
<ItSolution />
<DescPage />

</div>
</div>
  )
}

export default Services
