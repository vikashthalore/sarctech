import React from 'react'
const services = [
  {
    title: 'Web Development',
    Description: 'At SARC TECHNOLOGY, our expert web development team creates modern, responsive websites for your business needs.',
    image: 'https://sarctechnology.com/assets/img/icons/service-icon4.svg'
  },
  {
    title: 'Pay-per-Click (PPC) Advertising',
    Description: 'Search engine PPC Ads are of the most effective digital marketing strategies',
    image: 'https://sarctechnology.com/assets/img/icons/service-icon2.svg'
  },
  {
    title: 'Search Engine Optimization (SEO)',
    Description: 'With years of experience in online marketing, we deliver top-notch SEO services.',
    image: 'https://sarctechnology.com/assets/img/icons/service-icon16.svg'
  },
  {
    title: 'Web Hosting',
    Description: 'we offers a complete range of web hosting sevices, including Shared Hosting. and Dedicated Servers--ensuring reliable performance and 24/7 support for your website.',
    image: 'https://sarctechnology.com/assets/img/icons/service-icon1.svg'
  },
  {
    title: 'Digital Marketing',
    Description: 'We craft targeted digital marketing strategies that increase your online visibility. drive quality traffic, and maximize ROI',
    image: 'https://sarctechnology.com/assets/img/icons/service-icon13.svg'
  },
  {
    title: 'Social Media Marketing',
    Description: 'We offers export Social Media marketing services to opimize your pages. engage your target audience, drive traffic, generate leads, and boost brand awareness.',
    image: 'https://sarctechnology.com/assets/img/icons/service-icon11.svg'
  },
  {
    title: 'Lead Generation',
    Description: "Looking to boost sales or expand your reach? SARC TECHNOLOGY's Lead Generation services deliver high-quality leads to help you grow faster and smarter",
    image: 'https://sarctechnology.com/assets/img/icons/service-icon12.svg'
  },
  {
    title: 'Business Branding',
    description: 'We specialize in creating unique brand identites that capture your vision, build emotional connection, and set you apart from the competion.',
    image: 'https://sarctechnology.com/assets/img/icons/service-icon14.svg'
  }

]

const ItSolution = () => {
  return (
    <section className='py-12 bg-white'>
      <div className='max-w-7xl mx-auto px-4'>
        {/* Heading */}
        <h2 className='text-2xl sm:text-4xl font-bold text-center mb-8'>
          Our Exclusive <span className='text-purple-600'>IT Solution</span> Services
        </h2>

        {/* Grid */}
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-10'>
          {services.map((service, index) =>(
            
            <div key={index}
            className='bg-purple-50 rounded-xl p-8 text-center shadow hover:shadow-lg transition'>
              {/* Image */}
              <h3 className='font-semibold text-lg mb-6 text-gray-600'>{service.title}</h3>
              <img
               src={service.image}
               alt={service.title}
               className="w-20 h-20 mx-auto mb-4 transform transition duration-500 hover:scale-125 hover:rotate-y-360 hover:shadow-xl animate-rotate-365  "
              />

               
               {/* Description */}
               <p className='text-gray-600 text-sm'>{service.Description}</p>
            </div>
          ))}
        </div>
        <div>

        </div>
      </div>
    </section>
  )
}

export default ItSolution
