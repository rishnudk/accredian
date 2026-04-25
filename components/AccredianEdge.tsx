import Image from "next/image";

export default function AccredianEdge() {
  return (
    <section className="py-20 max-w-[1200px] mx-auto px-6 w-full flex flex-col items-center text-center">
      <h2 className="text-3xl md:text-[2.5rem] font-bold text-gray-900 mb-3 tracking-tight">
        The <span className="text-blue-600">Accredian Edge</span>
      </h2>
      <p className="text-gray-700 mb-16 font-medium text-lg">
        Key Aspects of <span className="text-blue-600">Our Strategic Training</span>
      </p>

      <div className="w-full">
        <Image
          src="/images/accredian-edge.svg"
          alt="The Accredian Edge Diagram"
          width={1200}
          height={500}
          sizes="(max-width: 1200px) 100vw, 1200px"
          className="w-full h-auto object-contain"
          loading="lazy"
        />
      </div>
    </section>
  );
}
