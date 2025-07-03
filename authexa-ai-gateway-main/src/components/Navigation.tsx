
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between p-3 bg-slate-900/80 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-slate-700/50">
      <div className="flex items-center space-x-2">
        <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg shadow-blue-500/30"></div>
        <span className="text-lg font-bold text-slate-100">Authexa</span>
      </div>
      
      <div className="hidden md:flex items-center space-x-6">
        <a href="#solutions" className="text-sm text-slate-300 hover:text-blue-400 transition-colors">Solutions</a>
        <a href="#about" className="text-sm text-slate-300 hover:text-blue-400 transition-colors">About</a>
        <a href="#contact" className="text-sm text-slate-300 hover:text-blue-400 transition-colors">Contact</a>
        <Button variant="default" size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-blue-500/30">Get Started</Button>
      </div>
    </nav>
  );
};

export default Navigation;
