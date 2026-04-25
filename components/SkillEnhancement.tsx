import Image from "next/image";
import { MonitorCheck, MonitorX, GraduationCap, Briefcase } from "lucide-react";

export default function SkillEnhancement() {
  return (
    <section className="py-20 px-6 max-w-[1300px] mx-auto w-full">
      <div className="bg-[#1b71f0] rounded-3xl p-10 md:p-14 lg:p-20 relative overflow-hidden flex flex-col lg:flex-row justify-between items-start min-h-[450px]">
        {/* Left Side Content */}
        <div className="w-full lg:w-5/12 text-white z-10 flex flex-col relative h-full min-h-[150px] lg:min-h-[350px]">
          <div className="relative z-20">
            <p className="text-lg mb-2 font-medium">Who Should Join?</p>
            <h2 className="text-3xl md:text-[2.5rem] font-bold mb-8 leading-[1.2] tracking-tight">
              Strategic Skill Enhancement
            </h2>
          </div>
          
          {/* Image - hidden on md and smaller screens */}
          <div className="hidden lg:block absolute -bottom-[120px] -left-10 w-[450px] h-[350px] z-10 pointer-events-none">
             <Image
                src="/images/imagehuman.png"
                alt="Professional in enterprise training environment"
                fill
                sizes="450px"
                className="object-contain object-bottom"
                loading="lazy"
              />
          </div>
        </div>

        {/* Right Side Content - 2x2 Grid */}
        <div className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-14 z-20 mt-10 lg:mt-0 lg:pl-16">
          <div className="flex flex-col">
            <MonitorCheck className="w-12 h-12 text-white mb-5 stroke-[1.5]" />
            <h3 className="text-white font-bold text-xl mb-3">Tech Professionals</h3>
            <p className="text-blue-100 text-[15px] leading-relaxed">
              Enhance expertise, embrace tech, drive innovation.
            </p>
          </div>
          
          <div className="flex flex-col">
            <MonitorX className="w-12 h-12 text-white mb-5 stroke-[1.5]" />
            <h3 className="text-white font-bold text-xl mb-3">Non-Tech Professionals</h3>
            <p className="text-blue-100 text-[15px] leading-relaxed">
              Adapt digitally, collaborate in tech environments.
            </p>
          </div>

          <div className="flex flex-col">
            <GraduationCap className="w-12 h-12 text-white mb-5 stroke-[1.5]" />
            <h3 className="text-white font-bold text-xl mb-3">Emerging Professionals</h3>
            <p className="text-blue-100 text-[15px] leading-relaxed">
              Develop powerful skills for rapid career growth.
            </p>
          </div>

          <div className="flex flex-col">
            <Briefcase className="w-12 h-12 text-white mb-5 stroke-[1.5]" />
            <h3 className="text-white font-bold text-xl mb-3">Senior Professionals</h3>
            <p className="text-blue-100 text-[15px] leading-relaxed">
              Strengthen leadership, enhance strategic decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
