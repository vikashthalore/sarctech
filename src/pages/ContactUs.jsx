import React, { useState } from 'react'

const ContactUs = () => {
 const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">Get in Touch with SARC Technology</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Contact Information */}
          <div className="lg:w-2/5 bg-white rounded-lg shadow-lg p-8 h-fit">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">Phone Number</h3>
                <p className="text-gray-600">+91-8899169539</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">Email Address</h3>
                <p className="text-gray-600">info@sarctechnology.com</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">Address</h3>
                <p className="text-gray-600">75/11, Rajpur Road, Ravindrapuri, Dehradun, Uttarakhand</p>
              </div>
            </div>
            
            <div className="mt-8">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-700 text-sm">Looking forward to hearing from you and assisting with your technology needs.</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-3/5 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Get In Touch</h2>
            <p className="text-gray-500 text-sm mb-6">*All fields are mandatory. Kindly fill the correct data</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border text-gray-800 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border text-gray-800 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email address"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border text-gray-800 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                  Select Service
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border text-gray-800 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option className='text-gray-500' value="">Select a service</option>
                  <option className='text-gray-700' value="web-development">Web Development</option>
                  <option className='text-gray-700' value="app-development">App Development</option>
                  <option className='text-gray-700' value="app-development">App Development</option>
                  <option className='text-gray-700' value="app-development">App Development</option>
                  <option className='text-gray-700' value="digital-marketing">Digital Marketing</option>
                  <option className='text-gray-700' value="consulting">IT Consulting</option>
                  <option className='text-gray-700' value="other">Other</option>
                </select>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ContactUs
