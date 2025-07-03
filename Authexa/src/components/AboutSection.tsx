
import { TrendingUp, Users, Award, Clock } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: TrendingUp, value: "99.9%", label: "Uptime Guarantee", color: "from-blue-500 to-blue-600" },
    { icon: Users, value: "500+", label: "Successful Deployments", color: "from-purple-500 to-purple-600" },
    { icon: Award, value: "85%", label: "Average Cost Reduction", color: "from-green-500 to-green-600" },
    { icon: Clock, value: "24/7", label: "Expert Support", color: "from-orange-500 to-orange-600" }
  ];

  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-blue-300/10 to-purple-300/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-gradient-to-tr from-purple-300/10 to-pink-300/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Pioneering the
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Future </span>
                of AI Agents
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At Authexa, we're not just building AI tools – we're creating intelligent agents 
                that think, learn, and act like your best employees. Our cutting-edge agentic AI 
                technology empowers businesses to achieve unprecedented levels of automation and efficiency.
              </p>
            </div>

            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-gray-100">
                  <div className="flex items-center mb-3">
                    <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300 origin-left`}>
                    {stat.value}
                  </h3>
                  <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">{stat.label}</p>
                  
                  {/* Glowing effect on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`}></div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Enhanced 3D Visual Element */}
          <div className="relative">
            {/* Main 3D Card */}
            <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-500 group">
              <div className="aspect-square bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
                  <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full"></div>
                  <div className="absolute bottom-8 left-8 w-12 h-12 bg-white/10 rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/5 rounded-full"></div>
                </div>

                <div className="h-full flex flex-col justify-center relative z-10">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">Why Choose Authexa?</h3>
                  </div>
                  
                  <ul className="space-y-4">
                    {[
                      "Cutting-edge AI technology",
                      "Seamless integration",
                      "Scalable solutions",
                      "Expert support team"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center group-hover:translate-x-2 transition-transform duration-300" style={{transitionDelay: `${index * 100}ms`}}>
                        <div className="w-3 h-3 bg-white rounded-full mr-4 shadow-lg animate-pulse"></div>
                        <span className="text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-white/20 rounded-full animate-pulse"></div>
              </div>

              {/* 3D Shadow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl transform translate-x-4 translate-y-4 -z-10 blur-sm"></div>
            </div>

            {/* Floating Geometric Shapes */}
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 transform rotate-45 rounded-lg shadow-2xl animate-float opacity-80"></div>
            <div className="absolute -bottom-4 -right-8 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full shadow-2xl animate-float-delayed opacity-70"></div>
            <div className="absolute top-8 -right-12 w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 transform rotate-12 rounded-lg shadow-xl animate-bounce opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
