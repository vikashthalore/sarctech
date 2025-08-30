import React from 'react';
import { FaArrowRight, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-teal-900 to-teal-700 text-white relative overflow-hidden w-full m-0 ">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none ">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.sarctechnology.com/assets/img/patterns/pattern1.png')] bg-repeat"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 grid grid-cols-1 md:grid-cols-2 items-center gap-10 relative z-10">
        
        {/* ================= LEFT CONTENT ================= */}
        <div className="space-y-6 text-center md:text-left">
          {/* Tagline */}
          <div 
            className="inline-block bg-lime-500 px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-pulse"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            Top #1 SEO & Marketing Agency
          </div>

          {/* Heading */}
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Best Company For Digital Marketing & Website Developer in{' '}
            <span className="text-lime-400 bg-clip-text bg-gradient-to-r from-lime-300 to-lime-500">
              Dehradun, India
            </span>
          </h1>

          {/* Subtitle */}
          <p 
            className="text-gray-200 text-lg max-w-lg"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            PPC Ads, Social Media Marketing & SEO Company with 10+ years of experience
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-wrap items-center gap-4 pt-4"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <a
              href="tel:+919636976474"
              className="bg-lime-500 hover:bg-lime-600 text-black font-semibold px-6 py-3 rounded-md flex items-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Call Now <FaPhoneAlt className="animate-pulse" />
            </a>
            <a
              href="#services"
              className="border-2 border-lime-400 hover:bg-lime-400 text-lime-400 hover:text-black font-semibold px-6 py-3 flex items-center gap-2 transition-all duration-300 transform hover:scale-105"
            >
              Explore Services <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center gap-6 pt-6" data-aos="fade-right" data-aos-delay="500">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-teal-800 font-bold">
                10+
              </div>
              <span>Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-teal-800 font-bold">
                500+
              </div>
              <span>Happy Clients</span>
            </div>
          </div>
        </div>

        {/* ================= RIGHT IMAGE & DECOR ================= */}
        <div className="relative flex justify-center items-center h-full min-h-[400px]">
          {/* Main Hero Image */}
          <img
            src="https://www.sarctechnology.com/assets/img/all-images/header-img8.png"
            alt="Digital Marketing Experts"
            className="z-10 max-w-[350px] md:max-w-md lg:max-w-lg transform hover:scale-105 transition-transform duration-500"
            data-aos="zoom-in"
          />

          {/* Decorative Floating Elements */}
          <div className="hidden md:block absolute top-10 right-[73%] z-20" data-aos="fade-down-right" data-aos-delay="300">
            <img
              src="https://www.sarctechnology.com/assets/img/icons/sound-icons3.svg"
              alt="Award Icon"
              className="w-20 md:w-24 animate-float hover:scale-110 transition-transform duration-200"
            />
          </div>
          
          <div className="absolute bottom-22 left-10 z-10" data-aos="fade-up-left" data-aos-delay="400">
            <img
              src="https://www.sarctechnology.com/assets/img/elements/elements11.svg"
              alt="Design Element"
              className="w-20 md:w-24 animate-spin-slow"
            />
          </div>
          
          <div className="absolute bottom-10 right-10 z-20" data-aos="fade-up-right" data-aos-delay="500">
            <img
              src="https://www.sarctechnology.com/assets/img/icons/lite-icons2.svg"
              alt="Innovation Icon"
              className="w-20 md:w-24 animate-pulse hover:scale-110 transition-transform"
            />
          </div>
          
          <div className="absolute bottom-0 left-10 z-20" data-aos="fade-up" data-aos-delay="600">
            <img
              src="https://www.sarctechnology.com/assets/img/all-images/auhtor-img1.png"
              alt="Certified Expert"
              className="w-24 md:w-28 animate-bounce-slow"
            />
          </div>
        </div>
      </div>

      {/* ================= FIXED FLOATING CONTACT ICONS ================= */}
      <div className="fixed bottom-6 left-6 flex flex-col gap-4 z-50">
        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 animate-bounce"
          data-aos="fade-right"
          data-aos-delay="700"
        >
          <FaWhatsapp className="text-white text-2xl" />
        </a>
        <a
          href="tel:+919636976474"
          className="bg-blue-500 hover:bg-blue-600 p-4 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 animate-bounce"
          data-aos="fade-right"
          data-aos-delay="800"
        >
          <FaPhoneAlt className="text-white text-2xl" />
        </a>
      </div>
    </section>
  );
};

export default Hero;