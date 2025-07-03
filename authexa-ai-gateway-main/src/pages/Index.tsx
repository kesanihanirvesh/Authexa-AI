
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SolutionsSection from "@/components/SolutionsSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900">
      <Navigation />
      <br/>
      <HeroSection />
      <SolutionsSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
