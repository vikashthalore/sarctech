import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function MarketingSection() {
  useEffect(() => {
    Aos.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="relative bg-white py-10 sm:py-14 lg:py-20">
      {/* Heading */}
      <div className="container mx-auto px-4" data-aos="fade-up">
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
            Over <span className="text-emerald-700">14 years</span> of experience in
          </h2>
          <h3 className="text-emerald-700 text-lg sm:text-xl lg:text-2xl font-bold mt-1">
            Website Development & Digital Marketing | Social Media Marketing & SEO
          </h3>
        </div>
      </div>

      {/* First Purple Card */}
      <div
        className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center bg-purple-600 text-white rounded-lg p-6 sm:p-8 lg:p-10 gap-6 lg:gap-12"
        data-aos="fade-right"
      >
        {/* Left Content */}
        <div>
          <h4 className="text-base sm:text-lg lg:text-xl font-bold mb-4">
            What Do Clients Look for in a Good Digital Marketing Company?
          </h4>
          <p className="mb-4 text-xs sm:text-sm lg:text-base text-purple-100">
            When searching for a reliable and result-driven digital marketing company
            in Dehradun, most businesses ask important questions such as:
          </p>

          <div className="flex flex-col gap-3">
            {[
              "Which is the best digital marketing company in India?",
              "Who offers the best digital marketing services in Dehradun?",
              "Which agency provides top SEO and social media marketing services?",
              "Who is the best digital marketing agency in Dehradun for long-term growth?",
            ].map((item, idx) => (
              <span
                key={idx}
                className="px-3 py-1 border border-purple-300 rounded-full text-xs sm:text-sm lg:text-base hover:bg-red-300 cursor-pointer transition-colors duration-200"
              >
                {item}
              </span>
            ))}
          </div>

          <p className="mt-4 text-purple-100 text-xs sm:text-sm lg:text-base">
            The answer is clear: SARC Technology.
          </p>
        </div>

        {/* Right Illustration */}
        <div className="flex justify-center" data-aos="fade-left">
          <img
            src="https://www.sarctechnology.com/assets/img/all-images/choose-img1.png"
            alt="Illustration"
            className="w-full max-w-[260px] sm:max-w-sm"
          />
        </div>
      </div>

      {/* Second Purple Card */}
      <div
        className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center bg-purple-600 text-white rounded-lg p-6 sm:p-8 lg:p-10 gap-6 lg:gap-12 mt-8"
        data-aos="fade-up"
      >
        {/* Left Content */}
        <div>
          <h4 className="text-base sm:text-lg lg:text-xl font-bold mb-4">
            Why SARC Technology Is the Best Choice for Digital Marketing and Web Development
          </h4>
          <p className="mb-4 text-xs sm:text-sm lg:text-base text-purple-100">
            Business owners prefer working with experienced companies that deliver proven results. SARC Technology stands out with its extensive experience in:
          </p>

          <div className="flex flex-col gap-3">
            {[
              "Digital marketing services in Dehradun",
              "Professional website designing",
              "Search Engine Optimization (SEO)",
              "Social media marketing services in Dehradun",
              "Bulk SMS and Web Hosting solutions",
            ].map((item, idx) => (
              <span
                key={idx}
                className="px-3 py-1 border border-purple-300 rounded-full text-xs sm:text-sm lg:text-base hover:bg-red-300 cursor-pointer transition-colors duration-200"
              >
                {item}
              </span>
            ))}
          </div>

          <p className="mt-4 text-purple-100 text-xs sm:text-sm lg:text-base">
            Our team understands the digital landscape and crafts strategies tailored to your business needs. That’s why we’re known as the best digital marketing and website designing company in Dehradun.
          </p>
        </div>

        {/* Right Illustration */}
        <div className="flex justify-center" data-aos="fade-left">
          <img
            src="https://www.sarctechnology.com/assets/img/all-images/choose-img4.png"
            alt="Illustration"
            className="w-full max-w-[260px] sm:max-w-sm"
          />
        </div>
      </div>
    </section>
  );
}
