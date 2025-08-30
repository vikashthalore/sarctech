import React, { useEffect } from "react";
import { FaCheck, FaChartLine, FaUsers, FaShieldAlt, FaTrophy } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WhyChooseUs() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });
  }, []);

  const features = [
    {
      icon: <FaTrophy className="text-teal-600" />,
      title: "14+ Years Experience",
      description: "Industry veterans with proven track record"
    },
    {
      icon: <FaUsers className="text-teal-600" />,
      title: "2,000+ Clients",
      description: "Trusted by businesses across India"
    },
    {
      icon: <FaChartLine className="text-teal-600" />,
      title: "Data-Driven Strategies",
      description: "Focused on delivering maximum ROI"
    },
    {
      icon: <FaShieldAlt className="text-teal-600" />,
      title: "100% Satisfaction",
      description: "Modern, scalable, and SEO-ready solutions"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 xl:gap-20">
        {/* Left Images - Creative Layout */}
        <div 
          className="relative w-full lg:w-1/2"
          data-aos="fade-right"
        >
          <div className="flex gap-6 items-center justify-center">
            {/* First circular image */}
            <div 
              className="w-40 h-56 md:w-48 md:h-64 overflow-hidden rounded-t-[47%] rounded-b-[47%] shadow-xl transform hover:scale-105 transition duration-500 border-4 border-white"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <img 
                src="https://www.sarctechnology.com/assets/img/all-images/team1.jpg" 
                alt="Our professional team" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Second circular image */}
            <div 
              className="w-40 h-56 md:w-48 md:h-64 overflow-hidden rounded-[47%] shadow-xl transform hover:scale-105 transition duration-500 border-4 border-white mt-12"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <img 
                src="https://www.sarctechnology.com/assets/img/all-images/team2.jpg" 
                alt="Client meeting" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Decorative element */}
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg hidden lg:block">
            <div className="flex items-center">
              <div className="bg-teal-100 p-3 rounded-full mr-3">
                <FaCheck className="text-teal-600 text-xl" />
              </div>
              <div>
                <p className="font-bold text-gray-800">Since 2010</p>
                <p className="text-sm text-gray-600">Trusted Digital Partner</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div 
          className="w-full lg:w-1/2 space-y-6"
          data-aos="fade-left"
        >
          <div className="inline-block bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-semibold">
            Why Choose Us
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Why <span className="text-teal-600">SARC TECHNOLOGY</span> Stands Out
          </h2>
          
          <p className="text-lg text-gray-600">
            As a premier digital marketing company in Uttarakhand, we deliver exceptional results through:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex items-start"
                data-aos="fade-up"
                data-aos-delay={100 * index}
              >
                <div className="bg-teal-50 p-3 rounded-full mr-4 flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="pt-6">
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
              Book Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}