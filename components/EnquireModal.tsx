"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface EnquireModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnquireModal({ isOpen, onClose }: EnquireModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-[900px] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row h-auto max-h-[90vh]">
        
        {/* Left Side - Image (hidden on mobile) */}
        <div className="hidden md:block md:w-1/2 relative bg-gray-100">
          <Image
            src="/images/form-image.webp"
            alt="Enquire Now"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-8 md:p-10 overflow-y-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-[28px] font-bold text-slate-800">Enquire Now</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <input
                type="text"
                placeholder="Enter Name"
                className="w-full border-b border-gray-300 py-3 text-gray-700 focus:outline-none focus:border-blue-600 transition-colors bg-transparent placeholder-gray-400 text-[15px]"
              />
            </div>
            
            <div>
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full border-b border-gray-300 py-3 text-gray-700 focus:outline-none focus:border-blue-600 transition-colors bg-transparent placeholder-gray-400 text-[15px]"
              />
            </div>
            
            {/* Phone Input */}
            <div className="flex border-b border-gray-300 focus-within:border-blue-600 transition-colors relative">
              <div className="flex items-center gap-2 py-3 pr-3">
                <span className="text-lg">🇮🇳</span>
                <span className="text-gray-700 text-[15px] font-medium">+91</span>
                <span className="text-gray-400 text-[10px] ml-1">▼</span>
              </div>
              <input
                type="tel"
                className="w-full py-3 pl-2 text-gray-700 focus:outline-none bg-transparent text-[15px]"
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Enter company name"
                className="w-full border-b border-gray-300 py-3 text-gray-700 focus:outline-none focus:border-blue-600 transition-colors bg-transparent placeholder-gray-400 text-[15px]"
              />
            </div>

            <div className="relative">
              <select 
                defaultValue="" 
                className="w-full border-b border-gray-300 py-3 text-gray-700 focus:outline-none focus:border-blue-600 transition-colors appearance-none bg-transparent cursor-pointer text-[15px]"
              >
                <option value="" disabled hidden className="text-gray-400">Select Domain</option>
                <option value="data-science">Data Science</option>
                <option value="product-management">Product Management</option>
                <option value="business-analytics">Business Analytics</option>
              </select>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                <span className="text-gray-400 text-[10px]">▼</span>
              </div>
            </div>

            <div>
              <input
                type="number"
                placeholder="Enter No. of candidates"
                className="w-full border-b border-gray-300 py-3 text-gray-700 focus:outline-none focus:border-blue-600 transition-colors bg-transparent placeholder-gray-400 text-[15px]"
              />
            </div>

            <div className="relative">
              <select 
                defaultValue="" 
                className="w-full border-b border-gray-300 py-3 text-gray-700 focus:outline-none focus:border-blue-600 transition-colors appearance-none bg-transparent cursor-pointer text-[15px]"
              >
                <option value="" disabled hidden className="text-gray-400">Select Mode of Delivery *</option>
                <option value="online">Online</option>
                <option value="offline">Offline</option>
                <option value="hybrid">Hybrid</option>
              </select>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                <span className="text-gray-400 text-[10px]">▼</span>
              </div>
            </div>

            <div>
              <input
                type="text"
                placeholder="Eg: Gurgoan, Delhi, India"
                className="w-full border-b border-gray-300 py-3 text-gray-700 focus:outline-none focus:border-blue-600 transition-colors bg-transparent placeholder-gray-400 text-[15px]"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-lg transition-colors shadow-md text-lg"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
