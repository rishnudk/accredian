"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import EnquireModal from "./EnquireModal";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="px-6 py-12 max-w-[1400px] mx-auto w-full">
      <div className="relative bg-[#f0f6ff] rounded-[3rem] overflow-hidden flex flex-col md:flex-row items-center justify-between min-h-[550px] shadow-sm">
        {/* Left Content */}
        <div className="p-10 md:p-16 lg:p-24 z-10 flex flex-col items-start w-full md:w-[55%]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-gray-900 mb-6">
            Next-Gen <span className="text-blue-600">Expertise</span><br />
            For Your <span className="text-blue-600">Enterprise</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-800 mb-10 max-w-lg font-medium">
            Cultivate high-performance teams through expert learning.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500 fill-white" />
              <span className="font-semibold text-gray-800 text-[15px]">Tailored Solutions</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500 fill-white" />
              <span className="font-semibold text-gray-800 text-[15px]">Industry Insights</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500 fill-white" />
              <span className="font-semibold text-gray-800 text-[15px]">Expert Guidance</span>
            </div>
          </div>

          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors shadow-md text-lg"
          >
            Enquire Now
          </button>
        </div>

        {/* Right Content / Image */}
        <div className="w-full md:w-[45%] h-[350px] md:h-full relative md:absolute bottom-0 right-0 z-0 mt-8 md:mt-0">
          <div className="relative w-full h-full">
            <Image
              src="/hero.webp"
              alt="Enterprise professionals collaborating on training solutions"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-contain object-bottom md:object-right-bottom"
              priority
            />
          </div>
        </div>
      </div>

      <EnquireModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}
