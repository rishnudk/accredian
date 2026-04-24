import { TrendingUp, Presentation, MonitorPlay } from "lucide-react";

export default function DeliverResults() {
  const steps = [
    {
      number: 1,
      icon: TrendingUp,
      title: "Skill Gap Analysis",
      description: "Assess team skill gaps and developmental needs.",
    },
    {
      number: 2,
      icon: Presentation,
      title: "Customized Training Plan",
      description: "Create a tailored roadmap addressing organizational goals.",
    },
    {
      number: 3,
      icon: MonitorPlay,
      title: "Flexible Program Delivery",
      description: "Deliver adaptable programs aligned with industry and organizational needs.",
    },
  ];

  return (
    <section className="py-20 w-full flex flex-col items-center text-center bg-white">
      <div className="max-w-[1200px] mx-auto px-6 w-full flex flex-col items-center">
        <h2 className="text-3xl md:text-[2.5rem] font-bold text-gray-900 mb-3 tracking-tight">
          How We <span className="text-blue-600">Deliver Results</span> That Matter?
        </h2>
        <p className="text-gray-700 mb-16 font-medium text-lg">
          A Structured Three-Step Approach to <span className="text-blue-600">Skill Development</span>
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-center w-full relative max-w-5xl">
          
          <div className="hidden lg:block w-[5px] h-[100px] bg-blue-600 rounded-full shrink-0"></div>
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex flex-col lg:flex-row items-center w-full lg:w-auto my-4 lg:my-0">
                <div className="bg-[#f2f7ff] rounded-xl border border-blue-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] p-8 relative flex flex-col items-center justify-start text-center w-full lg:w-[300px] min-h-[250px] mx-4 lg:mx-4">
                  {/* Number Badge */}
                  <div className="absolute top-4 left-4 bg-white text-gray-900 font-bold rounded-full w-8 h-8 flex items-center justify-center shadow-sm text-sm border border-gray-100">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="bg-blue-600 text-white rounded-full w-[60px] h-[60px] flex items-center justify-center mb-6 mt-2 shadow-md">
                    <Icon className="w-7 h-7 stroke-[2]" />
                  </div>

                  {/* Text */}
                  <h3 className="font-bold text-gray-900 text-lg mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-[14px] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Vertical Bar between cards */}
                <div className="hidden lg:block w-[5px] h-[100px] bg-blue-600 rounded-full shrink-0"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
