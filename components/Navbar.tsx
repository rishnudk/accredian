import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full bg-white shadow-sm sticky top-0 z-50">
      <nav className="flex items-center justify-between px-6 py-4 max-w-[1400px] mx-auto">
        <div className="flex flex-col items-start justify-center">
          <Link href="/" className="text-[#1D4ED8] font-bold text-3xl tracking-tight leading-none">
            accredian
          </Link>
          <span className="text-gray-400 text-[10px] uppercase tracking-widest mt-1 font-medium">
            credentials that matter
          </span>
        </div>
        <div className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-gray-800">
          <Link href="#" className="text-blue-600 border-[1.5px] border-blue-600 rounded-md px-4 py-1.5 hover:bg-blue-50 transition-colors">Home</Link>
          <Link href="#" className="hover:text-blue-600 transition-colors">Stats</Link>
          <Link href="#" className="hover:text-blue-600 transition-colors">Clients</Link>
          <Link href="#" className="hover:text-blue-600 transition-colors">Accredian Edge</Link>
          <Link href="#" className="hover:text-blue-600 transition-colors">CAT</Link>
          <Link href="#" className="hover:text-blue-600 transition-colors">How It Works</Link>
          <Link href="#" className="hover:text-blue-600 transition-colors">FAQs</Link>
          <Link href="#" className="hover:text-blue-600 transition-colors">Testimonials</Link>
        </div>
      </nav>
    </div>
  );
}
