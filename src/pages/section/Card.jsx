import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Card = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const services = [
    {
      id: "01",
      title: "Digital Marketing",
      desc: "Grow your business, brand or website with our expert Digital Marketing services that deliver extraordinary results.",
      image: "https://www.sarctechnology.com/assets/img/all-images/service-img2.png",
      bg: "bg-yellow-100",
      icon: "📈"
    },
    {
      id: "02",
      title: "SEO Services",
      desc: "Boost your online visibility with our comprehensive SEO strategies tailored for your business needs.",
      image: "https://www.sarctechnology.com/assets/img/all-images/service-img3.png",
      bg: "bg-blue-100",
      icon: "🔍"
    },
    {
      id: "03",
      title: "Social Media Marketing",
      desc: "Engage your audience and grow your brand with our targeted social media campaigns.",
      image: "https://www.sarctechnology.com/assets/img/all-images/service-img4.png",
      bg: "bg-purple-100",
      icon: "💬"
    },
    {
      id: "04",
      title: "Web Development",
      desc: "Build stunning, high-performance websites that convert visitors into customers.",
      image: "https://www.sarctechnology.com/assets/img/all-images/service-img1.png",
      bg: "bg-green-100",
      icon: "💻"
    },
  ];

  return (
    <div className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Best Digital Marketing Company in Dehradun
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            SARC Technology delivers cutting-edge digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map(({ id, title, desc, image, bg, icon }, index) => (
            <div
              key={id}
              className={`rounded-xl p-6 ${bg} flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2 `}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-2xl">{icon}</span>
                <span className="text-lg font-semibold text-gray-700 bg-white px-3 py-1 rounded-full shadow">
                  {id}
                </span>
              </div>
              
              <div className="w-full h-40 mb-6 overflow-hidden rounded-lg">
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-full object-contain transition-transform duration-500 hover:scale-110" 
                />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{desc}</p>
              
              <a 
                href="#contact" 
                className="mt-auto text-sm font-semibold text-blue-600 hover:text-blue-800 flex items-center"
              >
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;