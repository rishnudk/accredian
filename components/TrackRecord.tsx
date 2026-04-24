export default function TrackRecord() {
  return (
    <section className="py-20 max-w-[1200px] mx-auto px-6 w-full flex flex-col items-center text-center">
      <h2 className="text-3xl md:text-[2.5rem] font-bold text-gray-900 mb-3 tracking-tight">
        Our <span className="text-blue-600">Track Record</span>
      </h2>
      <p className="text-gray-700 mb-16 font-medium text-lg">
        The Numbers Behind <span className="text-blue-600">Our Success</span>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 w-full md:divide-x-[1.5px] divide-gray-200">
        <div className="flex flex-col items-center px-4">
          <div className="bg-[#eef4ff] text-blue-600 font-bold text-xl px-8 py-2.5 rounded-full mb-6">
            10K+
          </div>
          <p className="text-[15px] text-gray-900 font-semibold max-w-[240px] leading-relaxed">
            Professionals Trained For Exceptional Career Success
          </p>
        </div>

        <div className="flex flex-col items-center px-4">
          <div className="bg-[#eef4ff] text-blue-600 font-bold text-xl px-8 py-2.5 rounded-full mb-6">
            200+
          </div>
          <p className="text-[15px] text-gray-900 font-semibold max-w-[240px] leading-relaxed">
            Sessions Delivered With Unmatched Learning Excellence
          </p>
        </div>

        <div className="flex flex-col items-center px-4">
          <div className="bg-[#eef4ff] text-blue-600 font-bold text-xl px-8 py-2.5 rounded-full mb-6">
            5K+
          </div>
          <p className="text-[15px] text-gray-900 font-semibold max-w-[240px] leading-relaxed">
            Active Learners Engaged In Dynamic Courses
          </p>
        </div>
      </div>
    </section>
  );
}
