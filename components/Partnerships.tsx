import Image from "next/image";

export default function Partnerships() {
  const companies = [
    { name: "Reliance", src: "/images/companys/reliance.png" },
    { name: "HCL", src: "/images/companys/hcl.png" },
    { name: "IBM", src: "/images/companys/ibm.png" },
    { name: "CRIF", src: "/images/companys/crif.png" },
    { name: "ADP", src: "/images/companys/adp.svg" },
  ];

  return (
    <section className="py-20 pb-32 max-w-[1200px] mx-auto px-6 w-full flex flex-col items-center text-center">
      <h2 className="text-3xl md:text-[2.5rem] font-bold text-gray-900 mb-3 tracking-tight">
        Our Proven <span className="text-blue-600">Partnerships</span>
      </h2>
      <p className="text-gray-700 mb-16 font-medium text-lg">
        Successful Collaborations With the <span className="text-blue-600">Industry's Best</span>
      </p>

      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
        {companies.map((company) => (
          <div key={company.name} className="relative h-16 w-32 md:w-36 flex items-center justify-center">
            <Image
              src={company.src}
              alt={company.name}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
