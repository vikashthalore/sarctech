import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

// import AOS from "aos";
// import "aos/dist/aos.css";

const About = () => {
  useEffect (() =>{
    AOS.init({ duration : 800, once : false })
  }, [])
  return (
   <section className="w-full bg-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-purple-100 to-pink-100 py-20 text-center">
        <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
        <p className="mt-2 text-gray-600">
          Home <span className="text-purple-600">› About Us</span>
        </p>
      </div>

      {/* Company Info Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Delivering Excellence in{" "}
            <span className="text-purple-600">Digital Marketing</span> &{" "}
            <span className="text-purple-600">Website Development</span>
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            At <strong>SARC Technology</strong>, we’ve been empowering businesses
            with cutting-edge digital solutions for over{" "}
            <span className="font-bold text-purple-600">14 years</span>. 
            Our mission is simple: to help brands grow online with smart 
            strategies, innovative designs, and result-driven campaigns.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            From startups to enterprises, we have worked with 100+ clients across 
            industries, delivering impactful results in SEO, Social Media, Paid 
            Advertising, and Custom Web Development.
          </p>
          <button className="px-6 py-3 bg-purple-600 text-white rounded-xl shadow-md hover:bg-purple-700 transition">
            Learn More
          </button>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center">
          <img
            src="https://img.freepik.com/free-vector/creative-team-concept-illustration_114360-1726.jpg"
            alt="About Us"
            className="rounded-2xl shadow-lg w-[90%]"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-purple-600">14+</h3>
            <p className="text-gray-600">Years of Experience</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-purple-600">100+</h3>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-purple-600">200+</h3>
            <p className="text-gray-600">Projects Delivered</p>
          </div>
        </div>
      </div>

      <div
  className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center"
  data-aos="fade-left"
  data-aos-delay="200"
>
  {/* Left Image */}
  <div className="flex justify-center">
    <img
      src="https://sarctechnology.com/assets/img/all-images/new-img/about-img2-h14.png"
      alt="About"
      className="w-full max-w-md rounded-lg shadow-lg"
    />
  </div>

  {/* Right Text */}
  <div>
    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
      Your Success is Our Achievement
    </h2>
    <p className="text-base text-gray-700 leading-relaxed">
      At <span className="font-semibold text-green-600">SARC Technology</span>, 
      a trusted digital marketing agency in Dehradun, we believe true partnership 
      goes beyond contracts. We work as an extension of your team—raising red 
      flags when necessary, offering expert guidance, and maintaining a transparent, 
      collaborative process to deliver meaningful results.
      <br /> <br />
      Our strength lies in our <span className="font-semibold">talented people</span>. 
      Each member of our team—whether they specialize in SEO, social media marketing, 
      or website development—takes full ownership of their work. This culture of 
      responsibility and innovation sets us apart as a leading digital marketing 
      company in Uttarakhand.
      <br /> <br />
      With a results-driven mindset, our team ensures that every project we handle 
      is delivered on time, meets your goals, and maintains the highest standards 
      of quality. Whether you're looking for a{" "}
      <span className="font-semibold">website development company in Dehradun</span> 
      or complete digital marketing solutions, we are committed to your success.
    </p>
  </div>
</div>

{/* Our Expertise */}
<div className="md:col-end-12 overflow-hidden w-[80%] mx-auto my-auto ">
  <h1 className="flex justify-center text-3xl font-bold text-blue-800 mb-6">
    Our Expertise
  </h1>

  {/* Grid 12 col partition */}
  <div
  className='col-span-6 border-gray-400 p-6 rounded cursor-pointer hover:text-white hover:bg-blue-500 transition ease-in-out duration-300'
  data-aos="fade-left"
  data-aos-delay="200"
  >
  <div className='flex items-center gap-4'>
    <div className='h-12 w-12 flex items-center justify-center rounded-full '>
      <img src="https://sarctechnology.com/assets/img/icons/works-icons7.svg" alt="Website Development"
      className='p-2 h-12 w-12' />
    </div>
    <div className='text-left hover:text-white '>
      <h2 className='font-bold text-lg mb-2'> Website Development </h2>
        <p className='text-sm text-gray-700 transition duration-300 '>
          As a best Website Development Company in Dehradun, we craft stunning, responsive, and SEO-friendly websites designed to you business needs. Whether you're a growing startup or a well-established enterpries, SARC Technology delivers secure, scalable, and performance-optimized platforms that help you stand out online.
        </p>    
    </div>
  </div>  
  </div>
 {/* Second Card (10 col width) */}
 <div
 className='col-span-6 border p-lg rounded-lg cursor-pointer hover:text-white hover:bg-blue-500 transition ease-in-out duration-300 bg-blue-600 text-white'
 data-aos="fade-left"
 data-aos-delay="400"
 >
  <div className='flex items-center gap-4'>
    <div className='h-12 w-12 flex items-center justify-center rounded-full bg-white border '>
      <img
       src="https://sarctechnology.com/assets/img/icons/works-icons8.svg" alt=""
       className='p-2' />
    </div>
    <div className='text-left'>
      <h2 className='font-bold text-lg mb-4'>Website development </h2>
      <p className='text-sm text-gray-700 hover:text-white transition duration-300'>
        As a best Website Development Company in Dehradun, we craft stunning, responsive, and SEO-friendly websites designed to your business needs. Whether you're a growing starting startup or a well-established enterprise, SARC Technology delivers secure, scalable, and performance-optimized platforms that help you stand out online
      </p>
    </div>
  </div>
 </div>
</div>

    </section>
  )
}

export default About

