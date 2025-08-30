import React, { useState } from "react";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How can we help your business?",
      answer: (
        <>
          We have so many options that help your business to grow up such as:
          <br />
          <span className="block mt-2">• Digital Marketing Solutions & SEO</span>
          <span className="block">• Website Designing For Global Reach</span>
          <span className="block">• Lead Generation</span>
          <span className="block">
            All these services definitely help you to increase your sales.
          </span>
        </>
      ),
    },
    {
      question: "How long does it take to build a website?",
      answer: "Typically, it takes between 4 to 6 weeks depending on requirements.",
    },
    {
      question: "Do you provide SEO services?",
      answer: "Yes, we provide complete SEO solutions for businesses.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* FAQ Section */}
        <div>
          <h2 className="text-4xl font-bold text-center lg:text-left mb-8 text-gray-600">
            Frequently Asks Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-lg border ${
                  openIndex === index ? "bg-indigo-600 text-white" : "bg-white"
                } p-5 shadow`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <span className="text-xl font-semibold">{faq.question}</span>
                  <span className="text-2xl text-gray-800">
                    {openIndex === index ? "✖" : "＋"}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="mt-4 text-base leading-relaxed ">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
            alt="Team working"
            className="rounded-lg shadow-lg w-full max-w-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
