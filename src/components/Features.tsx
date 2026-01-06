
import React from 'react';

const Features: React.FC = () => {
  const detailedFeatures = [
    {
      title: "Smart Auto-Mod",
      description: "AI-powered detection for spam, raids, and toxic behavior. Customizable filters that learn from your community.",
      icon: "🛡️",
      accent: "from-blue-500 to-indigo-600"
    },
    {
      title: "Visual XP Cards",
      description: "Beautifully rendered rank cards that users can customize. Automatic role rewards based on activity.",
      icon: "🏆",
      accent: "from-blue-400 to-cyan-500"
    },
    {
      title: "Real-time Metrics",
      description: "Deep insights into server growth, message density, and member retention via the web dashboard.",
      icon: "📊",
      accent: "from-indigo-500 to-purple-600"
    },
    {
      title: "Custom AI Personas",
      description: "Create AI bots with specific personalities using our Gemini-powered engine to entertain your users.",
      icon: "🧠",
      accent: "from-blue-600 to-blue-400"
    },
    {
      title: "Global Economy",
      description: "A cross-server marketplace where users can trade, gamble, and collect rare digital items.",
      icon: "💎",
      accent: "from-cyan-600 to-blue-500"
    },
    {
      title: "Streamer Alerts",
      description: "Seamlessly integrate Twitch, YouTube, and Kick notifications directly into your server channels.",
      icon: "🎥",
      accent: "from-blue-500 to-indigo-400"
    }
  ];

  return (
    <section id="features" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold tracking-[0.4em] text-blue-500 uppercase mb-4">Core Capabilities</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white mb-6">Built for the next generation of communities.</h3>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg">
            Pixtoka isn't just another bot. It's a comprehensive infrastructure for your digital home.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {detailedFeatures.map((feature, idx) => (
            <div key={idx} className="relative group p-8 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.accent} flex items-center justify-center text-3xl mb-6 shadow-lg shadow-blue-500/10`}>
                {feature.icon}
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">{feature.title}</h4>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
              <div className="mt-6 flex items-center text-blue-400 font-semibold text-sm cursor-pointer group-hover:text-blue-300">
                Learn more <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
