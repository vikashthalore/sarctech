import React from "react";

const testimonials = [
  {
    name: "Amit Upadhay",
    text: "If you're searching for a reliable digital marketing company in Dehradun, SARC Technology is the name. They helped me grow through effective Google Ads and SEO. Best decision I made!",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",
  },
  {
    name: "Mukesh Gupta",
    text: "We partnered with SARC Technology — the best digital marketing agency in Dehradun — for our institute's branding. From website designing to SEO, everything was handled smoothly.",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",
  },
  {
    name: "Rajesh Prasad",
    text: "SARC Technology provided excellent support for our business. Their team executed our digital marketing plan in record time.",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-12 overflow-hidden">
      <h2 className="text-center text-3xl font-bold mb-8">Testimonials</h2>
      
      <div className="relative w-full overflow-hidden">
        {/* Sliding Track */}
        <div className="flex animate-slide whitespace-nowrap will-change-transform hover:[animation-play-state:paused]">
          {/* Duplicate the testimonials array for seamless looping */}
          {[...testimonials, ...testimonials].map((t, i) => (
            <div 
              key={i}
              className="w-80 mx-4 p-6 bg-white rounded-lg shadow flex-shrink-0"
            >
              <p className="text-gray-700 mb-4">"{t.text}"</p>
              <div className="flex items-center justify-between">
                <h4 className="font-bold">{t.name}</h4>
                <img src={t.img} alt="Google" className="w-6 h-6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}