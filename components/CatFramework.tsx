import Image from "next/image";

export default function CatFramework() {
  return (
    <section className="py-24 w-full flex flex-col items-center text-center bg-[#fcfdff]">
      <div className="max-w-[1200px] mx-auto px-6 w-full flex flex-col items-center">
        <h2 className="text-3xl md:text-[2.5rem] font-bold text-gray-900 mb-3 tracking-tight">
          The <span className="text-blue-600">CAT Framework</span>
        </h2>
        <p className="text-gray-700 mb-16 font-medium text-lg">
          Our Proven Approach to <span className="text-blue-600">Learning Excellence</span>
        </p>

        <div className="w-full max-w-5xl">
          <Image
            src="/images/catV2.svg"
            alt="The CAT Framework Concept, Application, Tools"
            width={1000}
            height={400}
            sizes="(max-width: 1000px) 100vw, 1000px"
            className="w-full h-auto object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
