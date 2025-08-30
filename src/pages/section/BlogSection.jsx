import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BlogSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  const blogs = [
    {
      id: 1,
      category: "GOOGLE ADS VS INSTAGRAM ADS",
      title: "Digital Marketing Company in Dehradun - SARC Technology",
      author: "Admin",
      authorImage: "https://www.sarctechnology.com/assets/img/blog-img/blog-27.png",
      date: "6 August 2025",
      excerpt: "In today's competitive market, businesses in Dehradun are rapidly shifting towards...",
      tags: ["Google Ads"]
    },
    {
      id: 2,
      category: "DIGITAL MARKETING",
      title: "Google Ads vs Instagram Ads - What Works Better for Dehradun",
      author: "Admin",
      authorImage: "https://www.sarctechnology.com/assets/img/blog-img/blog-26.png",
      date: "6 August 2025",
      excerpt: "If you're a business owner in Dehradun, you've likely asked yourself...",
      tags: []
    },
    {
      id: 3,
      category: "WHY SARC TECHNOLOGY",
      title: "Why SARC Technology is the Best Digital Marketing Company",
      author: "Admin",
      authorImage: "https://www.sarctechnology.com/assets/img/blog-img/blog-25.png",
      date: "4 August 2025",
      excerpt: "If you're searching for the best digital marketing company in Dehradun...",
      tags: []
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-12" data-aos="fade-down">
          Our Blogs
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div 
              key={blog.id}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Blog Image */}
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img 
                  src={blog.authorImage} 
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                {/* Category and Date */}
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                    {blog.category}
                  </span>
                  <span className="text-xs text-gray-500">
                    {blog.date}
                  </span>
                </div>
                
                {/* Title */}
                <h2 className="text-xl font-bold mb-3 leading-tight">
                  {blog.title}
                </h2>
                
                {/* Tags */}
                {blog.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.map((tag, i) => (
                      <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                
                {/* Excerpt */}
                <p className="text-gray-600 mb-4">
                  {blog.excerpt}
                </p>
                
                {/* Author and Read More */}
                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                  <div className="flex items-center">
                    <img 
                      src={blog.authorImage} 
                      alt={blog.author}
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <span className="text-sm text-gray-600">{blog.author}</span>
                  </div>
                  <a 
                    href="#" 
                    className="text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors duration-300 inline-flex items-center"
                  >
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;