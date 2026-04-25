"use client";

import Link from "next/link";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { useState } from "react";
import EnquireModal from "./EnquireModal";

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer className="w-full bg-white pt-20 pb-8 border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6 w-full flex flex-col">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-8">
          {/* Logo & Socials */}
          <div className="flex flex-col">
            <Link href="/" className="text-blue-600 font-bold text-3xl tracking-tight leading-none mb-1">
              accredian
            </Link>
            <span className="text-gray-400 text-[10px] uppercase tracking-widest font-medium mb-6">
              credentials that matter
            </span>
            <div className="flex items-center gap-4 text-gray-700">
              <Link href="#" className="hover:text-blue-600 transition-colors">
                <FaFacebook className="w-[18px] h-[18px]" />
              </Link>
              <Link href="#" className="hover:text-blue-600 transition-colors">
                <FaLinkedin className="w-[18px] h-[18px]" />
              </Link>
              <Link href="#" className="hover:text-blue-600 transition-colors">
                <FaTwitter className="w-[18px] h-[18px]" />
              </Link>
              <Link href="#" className="hover:text-blue-600 transition-colors">
                <FaInstagram className="w-[18px] h-[18px]" />
              </Link>
              <Link href="#" className="hover:text-blue-600 transition-colors">
                <FaYoutube className="w-[20px] h-[20px]" />
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-start md:items-end">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-2.5 rounded-lg transition-colors shadow-sm mb-2 text-[15px]"
            >
              Enquire Now
            </button>
            <span className="text-gray-600 text-sm">Speak with our Advisor</span>
          </div>
        </div>

        <hr className="border-gray-300 mb-10" />

        {/* Middle Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-10 md:gap-0">
          <div className="flex flex-col">
            <h4 className="font-bold text-gray-900 mb-5 text-[17px]">Accredian</h4>
            <Link href="#" className="text-gray-600 hover:text-blue-600 mb-4 text-[15px]">About</Link>
            <Link href="#" className="text-gray-600 hover:text-blue-600 mb-4 text-[15px]">Blog</Link>
            <Link href="#" className="text-gray-600 hover:text-blue-600 text-[15px]">Why Accredian</Link>
          </div>

          <div className="flex flex-col md:max-w-md">
            <h4 className="font-bold text-gray-900 mb-5 text-[17px]">Contact Us</h4>
            <p className="text-gray-600 mb-4 text-[15px]">
              Email us: <a href="mailto:enterprise@accredian.com" className="text-blue-600 hover:underline">enterprise@accredian.com</a>
            </p>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18,<br className="hidden md:block" />
              Gurugram, Haryana
            </p>
          </div>
        </div>

        <hr className="border-gray-300 mb-8" />

        {/* Bottom Section */}
        <div className="flex items-center justify-center text-center">
          <p className="text-gray-600 text-sm">
            © 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
          </p>
        </div>

      </div>

      <EnquireModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </footer>
  );
}
