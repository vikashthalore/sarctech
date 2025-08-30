import React, { useEffect } from "react";
import { FaCheck, FaChartLine, FaSearch, FaUsers, FaShieldAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SeoSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });
  }, []);

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Images - Image Collage */}
        <div 
          className="relative grid grid-cols-2 gap-4 md:gap-6 h-full"
          data-aos="fade-right"
        >
          {/* Main large image */}
          <div 
            className="col-span-2 rounded-xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition duration-500"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <img
              src="https://www.sarctechnology.com/images/about.jpg"
              alt="Digital marketing team"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Smaller images */}
          <div 
            className="rounded-xl overflow-hidden shadow-lg transform hover:scale-[1.05] transition duration-500"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <img
              src="https://www.sarctechnology.com/assets/img/all-images/new-img/about11-img1.png"
              alt="SEO strategy meeting"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div 
            className="rounded-xl overflow-hidden shadow-lg transform hover:scale-[1.05] transition duration-500"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img
              src="https://www.sarctechnology.com/assets/img/all-images/new-img/about11-img2.png"
              alt="Data analysis"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Content */}
        <div 
          className="space-y-6"
          data-aos="fade-left"
        >
          <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Digital Marketing Solutions
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Why Your Business Needs{" "}
            <span className="text-green-600 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              SEO & Digital Marketing
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 mt-4">
            In today's digital-first world, traditional marketing no longer delivers 
            the desired results. Most users ignore generic ads and engage only with 
            content that aligns with their interests and search intent.
          </p>
          
          <ul className="mt-8 space-y-4">
            {[
              { 
                icon: <FaSearch className="text-blue-500 text-xl" />,
                text: "Achieve top rankings on search engines and increase visibility"
              },
              { 
                icon: <FaUsers className="text-blue-500 text-xl" />,
                text: "Attract targeted, qualified traffic to your website"
              },
              { 
                icon: <FaChartLine className="text-blue-500 text-xl" />,
                text: "Improve conversion rates and generate high-quality leads"
              },
              { 
                icon: <FaShieldAlt className="text-blue-500 text-xl" />,
                text: "Build fast, secure, and user-friendly websites that convert"
              }
            ].map((item, index) => (
              <li 
                key={index}
                className="flex items-start space-x-4 p-3 hover:bg-gray-50 rounded-lg transition"
                data-aos="fade-up"
                data-aos-delay={100 * index}
              >
                <div className="flex-shrink-0 mt-1">{item.icon}</div>
                <span className="text-gray-700">{item.text}</span>
              </li>
            ))}
          </ul>

          <div className="pt-6" data-aos="fade-up" data-aos-delay="500">
            <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              Get Your Free SEO Audit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}