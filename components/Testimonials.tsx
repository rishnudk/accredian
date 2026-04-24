"use client";

import { useState } from "react";
import Image from "next/image";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      company: "Bayer",
      logo: "/images/companys/bayer.svg",
      text: "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way."
    },
    {
      company: "Reliance",
      logo: "/images/companys/reliance.png",
      text: "Choosing Accredian for the learning & development of our employees was a beneficial decision. The value derived from the course is immense & their support team is always there to help our employees."
    },
    {
      company: "IBM",
      logo: "/images/companys/ibm.png",
      text: "The customized training programs provided by Accredian transformed our workforce capabilities. Their structured approach and engaging content delivery exceeded our expectations."
    }
  ];

  return (
    <section className="py-24 max-w-[1200px] mx-auto px-6 w-full flex flex-col items-center">
      <h2 className="text-3xl md:text-[2.5rem] font-bold text-gray-900 mb-3 tracking-tight text-center">
        Testimonials from <span className="text-blue-600">Our Partners</span>
      </h2>
      <p className="text-gray-700 mb-16 font-medium text-lg text-center">
        What <span className="text-blue-600">Our Clients</span> Are Saying
      </p>

      {/* Desktop View (shows 2 cards at a time) */}
      <div className="hidden md:block w-full overflow-hidden px-1 py-2">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(calc(-${activeIndex * 50}% - ${activeIndex * 12}px))` }} 
        >
          {testimonials.map((testimonial, idx) => (
            <div 
              key={idx} 
              className="flex-shrink-0 flex flex-col p-10 bg-white border border-gray-200 rounded-xl shadow-sm"
              style={{ width: 'calc(50% - 12px)', marginRight: idx !== testimonials.length - 1 ? '24px' : '0' }}
            >
              <div className="relative h-12 w-32 mb-6 flex justify-start items-center">
                <Image
                  src={testimonial.logo}
                  alt={testimonial.company}
                  fill
                  className="object-contain object-left"
                />
              </div>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile View (shows 1 card at a time) */}
      <div className="block md:hidden w-full overflow-hidden py-2">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(calc(-${activeIndex * 100}% - ${activeIndex * 16}px))` }} 
        >
          {testimonials.map((testimonial, idx) => (
            <div 
              key={idx} 
              className="flex-shrink-0 flex flex-col p-8 bg-white border border-gray-200 rounded-xl shadow-sm"
              style={{ width: '100%', marginRight: idx !== testimonials.length - 1 ? '16px' : '0' }}
            >
              <div className="relative h-10 w-28 mb-6 flex justify-start items-center">
                <Image
                  src={testimonial.logo}
                  alt={testimonial.company}
                  fill
                  className="object-contain object-left"
                />
              </div>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex items-center justify-center gap-2 mt-10">
        <button
          onClick={() => setActiveIndex(0)}
          className={`w-2 h-2 rounded-full transition-colors ${
            activeIndex === 0 ? "bg-blue-600" : "bg-gray-300 hover:bg-gray-400"
          }`}
          aria-label="Show first set"
        />
        <button
          onClick={() => setActiveIndex(1)}
          className={`w-2 h-2 rounded-full transition-colors ${
            activeIndex === 1 ? "bg-blue-600" : "bg-gray-300 hover:bg-gray-400"
          }`}
          aria-label="Show second set"
        />
        {/* Mobile only 3rd dot, since desktop max index is 1 for 3 items (showing 2 at a time) */}
        <button
          onClick={() => setActiveIndex(2)}
          className={`md:hidden w-2 h-2 rounded-full transition-colors ${
            activeIndex === 2 ? "bg-blue-600" : "bg-gray-300 hover:bg-gray-400"
          }`}
          aria-label="Show third set"
        />
      </div>
    </section>
  );
}
