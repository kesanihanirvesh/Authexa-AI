
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Computer, Brain, Sparkles, TrendingUp, Users, Zap } from "lucide-react";

const SolutionsSection = () => {
  const stats = [
    { icon: TrendingUp, label: "Open Incidents", value: "24", color: "from-blue-500 to-cyan-500" },
    { icon: Users, label: "In Progress", value: "12", color: "from-purple-500 to-pink-500" },
    { icon: Zap, label: "Resolved Today", value: "48", color: "from-green-500 to-emerald-500" },
    { icon: Bot, label: "AI Agents Active", value: "8", color: "from-orange-500 to-red-500" }
  ];

  const solutions = [
    {
      icon: Bot,
      title: "Customer Service Agents",
      description: "24/7 intelligent customer support that understands context, resolves issues, and escalates when needed.",
      features: ["Natural language processing", "Multi-channel support", "Sentiment analysis", "Smart routing"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Computer,
      title: "Process Automation",
      description: "Streamline complex business processes with AI agents that handle repetitive tasks and workflows.",
      features: ["Document processing", "Data entry automation", "Workflow optimization", "Error reduction"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Brain,
      title: "Decision Intelligence",
      description: "AI-powered analytics and insights that help you make data-driven decisions in real-time.",
      features: ["Predictive analytics", "Risk assessment", "Market analysis", "Performance optimization"],
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="solutions" className="py-20 px-6 bg-gradient-to-br from-slate-900 via-blue-900/50 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm shadow-xl shadow-slate-900/50 hover:shadow-2xl transition-all duration-300 group">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-slate-100 group-hover:text-white transition-colors">
                      {stat.value}
                    </p>
                    <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                      {stat.label}
                    </p>
                  </div>
                  <div className={`w-10 h-10 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center shadow-lg`}>
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl shadow-blue-500/30 transform rotate-12 hover:rotate-0 transition-transform duration-300">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4 relative">
            AI Solutions for Every Industry
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Our AI agents are designed to solve real business challenges across various industries, 
            delivering measurable results and ROI.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="bg-slate-800/40 border-slate-700/50 backdrop-blur-sm shadow-2xl shadow-slate-900/50 hover:shadow-3xl hover:shadow-blue-900/30 transition-all duration-300 group relative overflow-hidden hover:transform hover:scale-105 hover:-translate-y-2">
              {/* Card Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <CardHeader className="relative">
                <div className="relative mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-xl flex items-center justify-center shadow-2xl shadow-blue-500/30 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  {/* Glowing effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${solution.color} rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                </div>
                <CardTitle className="text-xl text-slate-100 group-hover:text-white transition-colors duration-300">{solution.title}</CardTitle>
                <CardDescription className="text-slate-300 leading-relaxed">
                  {solution.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                      <div className={`w-3 h-3 bg-gradient-to-r ${solution.color} rounded-full mr-3 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
