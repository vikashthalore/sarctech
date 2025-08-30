import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HeroSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section className="bg-gray-50 mx-4 sm:mx-8 py-10">
      <div
        className="max-w-5xl mx-auto text-center px-4"
        data-aos="fade-right"
      >
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 leading-snug">
          Best{" "}
          <span className="text-teal-700">
            SEO & Digital Marketing Company
          </span>{" "}
          in Dehradun, Haridwar, Uttarakhand –{" "}
          <span className="text-teal-700">SARC TECHNOLOGY</span>
        </h1>

        <p className="mt-6 text-gray-700 text-sm sm:text-base leading-relaxed">
          <strong className="text-teal-700">SARC TECHNOLOGY</strong> is recognized as
          the <strong>best digital marketing company in Dehradun, Uttarakhand</strong>,
          with over <strong>14 years of industry experience</strong>. We have helped
          hundreds of businesses grow by boosting their online presence, increasing
          leads, and maximizing conversions through powerful{" "}
          <strong>SEO</strong> and <strong>digital marketing strategies</strong>.
        </p>
      </div>
    </section>
  );
}
