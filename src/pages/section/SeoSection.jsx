import React from "react";
// import seoImage from "../assets/seo-image.png"; // replace with your image path

export default function SeoSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src="https://www.sarctechnology.com/assets/img/all-images/about-img3.png"
            alt="SEO illustration"
            className="max-w-sm w-full"
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Grow Your Business with the Top SEO Company in Uttarakhand
          </h2>
          
          <p className="text-gray-600 mb-4">
            At SARC TECHNOLOGY, we believe that no business can succeed today without a solid digital presence.
            With our expert SEO services in Dehradun, Haridwar, and across Uttarakhand, we ensure your business
            stands out in search engine results and reaches the customers that matter most.
          </p>
          <p className="text-gray-600">
            Whether you need help with SEO, Google Ads, social media campaigns, or website design,
            our experienced team is here to grow your business online.
          </p>
        </div>

      </div>
    </section>
  );
}
