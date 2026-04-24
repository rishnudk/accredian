import Image from "next/image";

export default function CourseSegmentation() {
  const courses = [
    {
      title: "Program Specific",
      description: "Certificate, Executive, Post Graduate Certificate",
      image: "/images/courses/program_specific.png",
    },
    {
      title: "Industry Specific",
      description: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
      image: "/images/courses/industry_specific.png",
    },
    {
      title: "Topic Specific",
      description: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
      image: "/images/courses/topic_specific.png",
    },
    {
      title: "Level Specific",
      description: "Senior Leadership, Mid-Career Professionals, Freshers",
      image: "/images/courses/level_specific.png",
    },
  ];

  return (
    <section className="py-20 max-w-[1200px] mx-auto px-6 w-full flex flex-col items-center text-center">
      <h2 className="text-3xl md:text-[2.5rem] font-bold text-gray-900 mb-3 tracking-tight">
        Tailored <span className="text-blue-600">Course Segmentation</span>
      </h2>
      <p className="text-gray-700 mb-16 font-medium text-lg">
        Explore <span className="text-blue-600">Custom-fit Courses</span> Designed to Address Every Professional Focus
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {courses.map((course, index) => (
          <div 
            key={index}
            className="flex flex-col bg-white rounded-xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.12)] border border-gray-100 transition-shadow text-center"
          >
            <div className="relative w-full h-[180px]">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow items-center">
              <h3 className="text-lg md:text-xl font-bold text-blue-600 mb-2">{course.title}</h3>
              <p className="text-gray-600 text-sm font-medium leading-relaxed">{course.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
