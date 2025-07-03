import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Spline from '@splinetool/react-spline';

const HeroSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      
      {/* Spline 3D Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <Spline scene="https://prod.spline.design/jnkpqJS4L657ZhCx/scene.splinecode" />
      </div>

      {/* Glow Effects */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-500/10 rounded-full blur-2xl"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            <span className="block text-slate-100 drop-shadow-2xl">AI Agents That</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x bg-300% drop-shadow-2xl">
              Transform
            </span>
            <span className="block text-slate-100 drop-shadow-2xl">Your Business</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Authexa delivers cutting-edge AI agentic solutions that automate workflows, 
            enhance decision-making, and drive unprecedented business growth through intelligent automation.
          </p>
<br />
<br />

          <div className="flex flex-col sm:flex-row gap-10 justify-center">
  <a
    href="https://preview--incident-ai-pilot.lovable.app/"
    rel="noopener noreferrer"
  >
    <Button 
      size="lg" 
      className="text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-2xl shadow-blue-900/50 transform hover:scale-105 transition-all duration-300"
    >
      <span className="flex items-center gap-2">
        Start Your AI Journey
        <ArrowRight className="w-5 h-5" />
      </span>
    </Button>
  </a>
</div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
