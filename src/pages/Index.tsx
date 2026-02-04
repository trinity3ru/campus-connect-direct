import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import Benefits from "@/components/Benefits";
import FreeStrategy from "@/components/FreeStrategy";
import HowWeWork from "@/components/HowWeWork";
import CaseStudies from "@/components/CaseStudies";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import LogoCarousel from "@/components/LogoCarousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <LogoCarousel />
        <CaseStudies />
        <WhyUs />
        <Benefits />
        <FreeStrategy />
        <HowWeWork />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
