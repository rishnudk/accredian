import { Headphones, ChevronRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 px-6 max-w-[1200px] mx-auto w-full">
      <div className="bg-[#1b71f0] rounded-[1.5rem] p-10 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm min-h-[160px]">
        
        {/* Background Rings */}
        <div className="absolute -bottom-[400px] left-[50%] -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-white/5 pointer-events-none"></div>
        <div className="absolute -bottom-[300px] left-[50%] -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-white/5 pointer-events-none"></div>
        <div className="absolute -bottom-[200px] left-[50%] -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-white/5 pointer-events-none"></div>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center md:items-center gap-6 z-10 w-full md:w-auto text-center md:text-left">
          {/* Icon */}
          <div className="bg-white rounded-2xl w-20 h-20 flex items-center justify-center shrink-0 shadow-sm border-[6px] border-blue-400/30">
            <Headphones className="w-9 h-9 text-blue-600 stroke-[2]" />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <h2 className="text-[1.6rem] md:text-[1.8rem] font-bold text-white mb-1 tracking-tight">
              Want to Learn More About Our Training Solutions?
            </h2>
            <p className="text-blue-50 text-[15px] font-medium">
              Get Expert Guidance for Your Team's Success!
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="z-10 shrink-0 mt-4 md:mt-0">
          <button className="bg-white hover:bg-gray-50 text-blue-600 font-bold px-8 py-3.5 rounded-lg flex items-center gap-2 transition-colors shadow-sm text-[16px]">
            Contact Us <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

      </div>
    </section>
  );
}
