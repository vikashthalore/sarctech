import React, { useEffect } from "react";
import { FaChartLine, FaSearch, FaBullseye, FaRegCheckCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MarketingSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });
  }, []);

  const benefits = [
    {
      icon: <FaChartLine className="text-teal-600 text-xl" />,
      title: "Increased Brand Visibility",
      description: "Get noticed by your target audience across multiple digital channels"
    },
    {
      icon: <FaSearch className="text-teal-600 text-xl" />,
      title: "Improved Online Credibility",
      description: "Build trust with potential customers through strategic positioning"
    },
    {
      icon: <FaBullseye className="text-teal-600 text-xl" />,
      title: "Faster Growth",
      description: "Achieve measurable results with data-driven marketing strategies"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Content */}
        <div className="space-y-6">
          <div 
            className="inline-block bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-semibold"
            data-aos="fade-right"
          >
            Digital Marketing Solutions
          </div>
          
          <h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            Get Instant Results with Targeted{" "}
            <span className="text-teal-600">Online Marketing</span>
          </h2>
          
          <p 
            className="text-lg text-gray-600"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Unlike outdated advertising methods, our digital marketing services connect you with 
            potential customers actively searching for your products or services. With the right 
            strategy, your business can experience rapid growth.
          </p>
          
          <div 
            className="space-y-4 pt-4"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-start p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex-shrink-0 mt-1 mr-4">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div 
            className="pt-4"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
              Get Your Free Marketing Audit
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div 
          className="relative"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <img
            src="https://www.sarctechnology.com/assets/img/all-images/new-img/about11-img1.png"
            alt="Marketing team analyzing data"
            className="rounded-xl shadow-xl w-full max-w-md mx-auto transform hover:scale-[1.02] transition duration-500"
          />
          <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg hidden md:block">
            <div className="flex items-center">
              <div className="bg-teal-100 p-3 rounded-full mr-3">
                <FaRegCheckCircle className="text-teal-600 text-2xl" />
              </div>
              <div>
                <p className="font-bold text-gray-800">10+ Years</p>
                <p className="text-sm text-gray-600">Marketing Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}