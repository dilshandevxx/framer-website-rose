import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white text-black font-sans selection:bg-black selection:text-white">
      <Navbar />
      <Hero />
      <Projects />
      <Services />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
