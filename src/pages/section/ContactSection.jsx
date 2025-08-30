import React, { useEffect } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });
  }, []);

  const contactMethods = [
    {
      icon: <FaPhoneAlt className="text-2xl" />,
      title: "Call Us",
      detail: "+91 1234567890",
      link: "tel:+911234567890",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <FaWhatsapp className="text-2xl" />,
      title: "WhatsApp",
      detail: "+91 9876543210",
      link: "https://wa.me/919876543210",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email Us",
      detail: "info@sarctechnology.com",
      link: "mailto:info@sarctechnology.com",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Visit Us",
      detail: "Dehradun, Uttarakhand",
      link: "https://maps.google.com",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <section className="bg-gradient-to-r from-teal-800 to-teal-600 py-16 md:py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-teal-400"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 rounded-full bg-teal-300"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Get professional digital marketing and SEO services in Dehradun & Haridwar from Uttarakhand's trusted experts
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${method.color} p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mb-4">
                {method.icon}
              </div>
              <h3 className="font-semibold text-lg mb-1">{method.title}</h3>
              <p className="text-sm">{method.detail}</p>
            </a>
          ))}
        </div>

        <div className="text-center" data-aos="fade-up" data-aos-delay="400">
          <a
            href="tel:+911234567890"
            className="inline-flex items-center gap-3 bg-lime-400 hover:bg-lime-500 text-black font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <FaPhoneAlt className="animate-pulse" />
            Call Now: +91 1234567890
          </a>
        </div>
      </div>
    </section>
  );
}