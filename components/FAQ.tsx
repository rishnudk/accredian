"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("About the Course");

  const categories = [
    "About the Course",
    "About the Delivery",
    "Miscellaneous",
  ];

  const questions: Record<string, string[]> = {
    "About the Course": [
      "What types of corporate training programs does Accredian offer?",
      "What domain specializations are available?",
    ],
    "About the Delivery": [
      "How are the training sessions conducted?",
      "Can the training schedule be customized?",
    ],
    "Miscellaneous": [
      "Do you provide completion certificates?",
      "How do we track employee progress?",
    ],
  };

  return (
    <section className="py-24 max-w-[1100px] mx-auto px-6 w-full flex flex-col items-center">
      <h2 className="text-3xl md:text-[2.5rem] font-bold text-gray-900 mb-16 tracking-tight text-center md:text-left w-full">
        Frequently Asked <span className="text-blue-600">Questions</span>
      </h2>

      <div className="flex flex-col md:flex-row w-full gap-8 md:gap-16 mb-20">
        {/* Left Side: Categories */}
        <div className="w-full md:w-[35%] flex flex-col gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`py-4 px-6 text-center font-bold rounded-lg transition-all border ${
                activeCategory === cat
                  ? "bg-white text-blue-600 border-transparent shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)]"
                  : "bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:text-gray-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Right Side: Questions */}
        <div className="w-full md:w-[65%] flex flex-col gap-2 pt-2">
          {(questions[activeCategory] || []).map((question, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-4 cursor-pointer group"
            >
              <h3 className="text-[16px] font-bold text-gray-900 pr-8 group-hover:text-blue-600 transition-colors">{question}</h3>
              <ChevronDown className="w-5 h-5 text-gray-500 shrink-0 group-hover:text-blue-600 transition-colors" />
            </div>
          ))}
        </div>
      </div>

      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors shadow-md text-lg">
        Enquire Now
      </button>
    </section>
  );
}
