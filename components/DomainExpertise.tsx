import { Lightbulb, Brain, Users, BarChart, Settings, Globe, Banknote } from "lucide-react";

export default function DomainExpertise() {
  const domains = [
    { name: "Product & Innovation Hub", icon: Lightbulb },
    { name: "Gen-AI Mastery", icon: Brain },
    { name: "Leadership Elevation", icon: Users },
    { name: "Tech & Data Insights", icon: BarChart },
    { name: "Operations Excellence", icon: Settings },
    { name: "Digital Enterprise", icon: Globe },
    { name: "Fintech Innovation Lab", icon: Banknote },
  ];

  return (
    <section className="py-20 pb-32 max-w-[1200px] mx-auto px-6 w-full flex flex-col items-center text-center">
      <h2 className="text-3xl md:text-[2.5rem] font-bold text-gray-900 mb-3 tracking-tight">
        Our <span className="text-blue-600">Domain Expertise</span>
      </h2>
      <p className="text-gray-700 mb-16 font-medium text-lg">
        <span className="text-blue-600">Specialized Programs</span> Designed to Fuel Innovation
      </p>

      <div className="flex flex-wrap justify-center gap-6 max-w-[950px]">
        {domains.map((domain, index) => {
          const Icon = domain.icon;
          return (
            <div 
              key={index} 
              className="bg-white rounded-[1rem] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.12)] transition-shadow border border-gray-50 flex flex-col items-center justify-center p-8 w-full sm:w-[280px] min-h-[140px]"
            >
              <Icon className="w-10 h-10 text-blue-600 mb-5 stroke-[1.5]" />
              <h3 className="font-bold text-gray-900 text-[15px]">{domain.name}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}
