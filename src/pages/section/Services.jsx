import React from 'react';

const ServiceCard = ({ title, imageUrl }) => (
  <li className="flex items-center shrink-0 mx-4 group w-64 sm:w-72 md:w-80 lg:w-96 cursor-pointer">
    <div className="w-32 h-20 mr-4 flex-shrink-0 relative overflow-hidden rounded-xl shadow-md">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
        <span className="text-white font-medium">Learn more →</span>
      </div>
    </div>
    <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
      {title}
    </h3>
  </li>
);

const ServicesScroller = () => {
  const topRowServices = [
    { title: "Branding Design", imageUrl: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80&w=1740" },
    { title: "Digital Marketing", imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1740" },
    { title: "SaaS Landing", imageUrl: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=1740" },
    { title: "SEO Strategy", imageUrl: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=1740" },
    { title: "Web Development", imageUrl: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1740" },
    { title: "UI/UX Design", imageUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=1740" },
    { title: "Content Creation", imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1740" },
  ];

  const bottomRowServices = [
    { title: "E-commerce", imageUrl: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&q=80&w=1740" },
    { title: "App Development", imageUrl: "https://images.unsplash.com/photo-1607703703520-bb638e84caf2?auto=format&fit=crop&q=80&w=1587" },
    { title: "Cloud Services", imageUrl: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&q=80&w=1740" },
    { title: "Data Analytics", imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1740" },
    { title: "Cybersecurity", imageUrl: "https://images.unsplash.com/photo-1562813592-7a7638a43fdb?auto=format&fit=crop&q=80&w=1622" },
    { title: "Social Media", imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=1674" },
    { title: "AI Integration", imageUrl: "https://images.unsplash.com/photo-1677756119517-756a188d2278?auto=format&fit=crop&q=80&w=1740" },
  ];

  return (
    <div className="w-full py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            Explore Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        {/* Top Scrolling Row */}
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          
          <div className="w-full inline-flex flex-nowrap overflow-hidden">
            <ul className="flex items-center py-4 animate-infinite-scroll-right group-hover:[animation-play-state:paused]">
              {[...topRowServices, ...topRowServices].map((service, index) => (
                <ServiceCard key={`top-${index}`} {...service} />
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Scrolling Row */}
        <div className="relative group mt-8">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          
          <div className="w-full inline-flex flex-nowrap overflow-hidden">
            <ul className="flex items-center py-4 animate-infinite-scroll-left group-hover:[animation-play-state:paused]">
              {[...bottomRowServices, ...bottomRowServices].map((service, index) => (
                <ServiceCard key={`bottom-${index}`} {...service} />
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-16">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
            View All Services
          </button>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll-right {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-left {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-infinite-scroll-right {
          animation: scroll-right 40s linear infinite;
        }
        .animate-infinite-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
        .animate-pause {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default ServicesScroller;