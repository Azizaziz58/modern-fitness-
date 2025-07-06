import React from 'react';
import { Play, ArrowRight, Star, Zap, Target, Users } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { icon: Users, value: '50K+', label: 'Active Members' },
    { icon: Target, value: '98%', label: 'Success Rate' },
    { icon: Zap, value: '24/7', label: 'Expert Support' }
  ];

  return (
    <div 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed bg-overlay"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920)'
      }}
    >
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          {/* Trust indicators */}
          <div className="flex items-center justify-center space-x-2 mb-8 scroll-animate">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-gray-300 text-lg">Trusted by 50,000+ fitness enthusiasts</span>
          </div>

          {/* Main heading */}
          <h1 className="text-6xl lg:text-8xl font-black mb-8 leading-tight scroll-animate">
            Transform Your
            <span className="block gradient-text animate-pulse">
              Body & Mind
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-2xl lg:text-3xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed scroll-animate font-light">
            Join the ultimate fitness revolution with personalized workouts, expert nutrition plans, 
            and world-class trainers dedicated to your success.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-8 justify-center mb-16 scroll-animate">
            <button 
              onClick={() => scrollToSection('workouts')}
              className="group bg-gradient-to-r from-[#39FF14] to-[#007BFF] text-white px-12 py-5 rounded-full font-bold text-xl hover:from-[#32e60f] hover:to-[#0056b3] transition-all transform hover:scale-110 flex items-center space-x-3 shadow-2xl neon-glow"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </button>

            <button className="group flex items-center space-x-4 text-white hover:text-[#39FF14] transition-all">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full group-hover:bg-[#39FF14]/20 transition-all group-hover:scale-110">
                <Play className="h-8 w-8 ml-1" />
              </div>
              <span className="font-semibold text-xl">Watch Success Stories</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto scroll-animate">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="bg-gradient-to-r from-[#39FF14] to-[#007BFF] p-4 rounded-xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-black text-white mb-2 group-hover:text-[#39FF14] transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-gray-300 font-medium text-lg">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#39FF14] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;