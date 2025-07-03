
const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900/30 to-slate-900 text-slate-200 py-12 px-6 border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg shadow-blue-500/30"></div>
              <span className="text-xl font-bold text-slate-100">Authexa</span>
            </div>
            <p className="text-slate-400">
              Transforming businesses with intelligent AI agents and cutting-edge agentic solutions.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-slate-100">Solutions</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Customer Service</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Process Automation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Decision Intelligence</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-slate-100">Company</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-slate-100">Support</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700/50 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2024 Authexa. All rights reserved. Powered by AI innovation.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
