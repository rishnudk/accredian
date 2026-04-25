import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrackRecord from "@/components/TrackRecord";
import Partnerships from "@/components/Partnerships";
import AccredianEdge from "@/components/AccredianEdge";
import DomainExpertise from "@/components/DomainExpertise";
import CourseSegmentation from "@/components/CourseSegmentation";
import SkillEnhancement from "@/components/SkillEnhancement";
import CatFramework from "@/components/CatFramework";
import DeliverResults from "@/components/DeliverResults";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans overflow-x-hidden">
      <Navbar />
      <main className="flex-1 w-full flex flex-col items-center">
        <Hero />
        <section id="stats" aria-label="Track Record">
          <TrackRecord />
        </section>
        <section id="clients" aria-label="Partnerships">
          <Partnerships />
        </section>
        <section id="accredian-edge" aria-label="Accredian Edge">
          <AccredianEdge />
        </section>
        <DomainExpertise />
        <CourseSegmentation />
        <section id="who-should-join" aria-label="Who Should Join">
          <SkillEnhancement />
        </section>
        <section id="cat" aria-label="CAT Framework">
          <CatFramework />
        </section>
        <section id="how-it-works" aria-label="How We Deliver Results">
          <DeliverResults />
        </section>
        <section id="faqs" aria-label="Frequently Asked Questions">
          <FAQ />
        </section>
        <section id="testimonials" aria-label="Testimonials">
          <Testimonials />
        </section>
        <CTA />
      </main>
      <Footer />
    </div>
  );
}







