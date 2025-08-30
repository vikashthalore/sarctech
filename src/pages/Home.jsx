import React from 'react'
import Hero from './section/Hero'
import Card from './section/Card'
import ServicesGrid from './section/Services'
// import Handle from './section/Handle'
import OurCard from './section/OurCard'
import Best from './section/Best'
import SeoSection from './section/Seopage'
import MarketingSection from './section/MarketingSection'
import WhyUs from './section/WhyUs'
import ContactSection from './section/ContactSection'
import SeoSectio from './section/SeoSection'
import Testimonials from './section/testimonia'
import BlogSection from './section/BlogSection'
import ContactsSection from './section/ContactsSection'
const Home = () => {
  return (
    <div className='bg-white m-0 '>
      <Hero className='overflow-x-hidden' />
      <Card />
      <ServicesGrid />
      {/* <Handle /> */}
      <OurCard />
      <Best />
      <SeoSection />
      <MarketingSection />
      <WhyUs />
      <ContactSection />
      <SeoSectio />
      <Testimonials />
      <BlogSection />
      <ContactsSection />
    </div>
  )
}

export default Home
