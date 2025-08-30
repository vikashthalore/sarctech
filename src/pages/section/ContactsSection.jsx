import React from "react";

const ContactSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 ">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-4">Contact Info</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-6">
          {/* Contact Information */}
          <div className="space-y-8 m-8 mb-18 bg-green-950 p-10 ">
            <div>
              <h3 className="text-xl font-semibold mb-8">Our Location</h3>
              <p className="text-gray-300">
                75711, Rajpur Road, Ravindrapuri,<br />
                New Raj Plaza, Dillaran Chowk,<br />
                Dalmadan, Uttarakhand
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-300">Phone Number</h3>
              <p className="text-gray-300">+91-8880169539</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Email Address</h3>
              <p className="text-gray-300">info@sarcfachnology.com</p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="m-8 bg-white p-8 lg:p-6">
            <h3 className="text-xl text-black font-semibold mb-6">Get In Touch</h3>
            <p className="text-gray-500 text-sm mb-6">
              *All fields are mandatory. Kindly fill the correct data
            </p>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-gray-700 mb-2">Select Service</label>
                <select
                  id="service"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="seo">SEO</option>
                  <option value="google-ads">Google Ads</option>
                  <option value="social-media">Social Media Marketing</option>
                  <option value="web-design">Web Design</option>
                </select>
              </div>
              
              <button
                type="submit"
                className="w-30 bg-lime-400 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-600 hover:text-white transition duration-300 font-medium"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;