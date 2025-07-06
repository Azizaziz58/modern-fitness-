import React from 'react';
import { Dumbbell, Mail, Phone, MapPin, Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900/95 backdrop-blur-md border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-[#39FF14] to-[#007BFF] p-2 rounded-xl">
                <Dumbbell className="h-8 w-8 text-white" />
              </div>
              <span className="text-3xl font-bold gradient-text">
                FitPro
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed text-lg">
              Transform your body and mind with our comprehensive fitness programs, 
              expert nutrition plans, and world-class trainers.
            </p>
            <div className="flex space-x-4">
              {['Facebook', 'Instagram', 'Twitter', 'YouTube'].map((platform) => (
                <button
                  key={platform}
                  className="bg-gray-800 hover:bg-gradient-to-r hover:from-[#39FF14] hover:to-[#007BFF] p-3 rounded-xl transition-all transform hover:scale-110"
                  aria-label={platform}
                >
                  <div className="w-6 h-6 bg-gray-400 rounded"></div>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { label: 'Home', id: 'home' },
                { label: 'Workout Programs', id: 'workouts' },
                { label: 'Nutrition Plans', id: 'nutrition' },
                { label: 'Our Trainers', id: 'trainers' },
                { label: 'Pricing', id: 'pricing' },
                { label: 'Contact', id: 'contact' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-[#39FF14] transition-colors text-lg font-medium"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6">Programs</h3>
            <ul className="space-y-4">
              {[
                'HIIT Training',
                'Strength Building',
                'Cardio Flow',
                'Functional Training',
                'Weight Loss',
                'Muscle Gain',
                'Plant-Based Nutrition',
                'Personal Training'
              ].map((program) => (
                <li key={program}>
                  <span className="text-gray-400 hover:text-[#39FF14] transition-colors cursor-pointer text-lg font-medium">
                    {program}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-[#39FF14]" />
                <span className="text-gray-400 text-lg">support@fitpro.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-[#39FF14]" />
                <span className="text-gray-400 text-lg">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-[#39FF14]" />
                <span className="text-gray-400 text-lg">123 Fitness Ave, NY 10001</span>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-[#39FF14]/10 to-[#007BFF]/10 rounded-2xl border border-[#39FF14]/20">
              <h4 className="text-white font-bold text-lg mb-3">Newsletter</h4>
              <p className="text-gray-400 mb-4">
                Get weekly fitness tips and updates
              </p>
              <div className="flex space-x-3">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="flex-1 bg-gray-800 border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#39FF14]"
                />
                <button className="bg-gradient-to-r from-[#39FF14] to-[#007BFF] text-white px-6 py-3 rounded-xl font-bold hover:from-[#32e60f] hover:to-[#0056b3] transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-gray-400 text-lg">
              © 2025 FitPro. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400 text-lg">
              <span>Made with</span>
              <Heart className="h-5 w-5 text-red-500 fill-current" />
              <span>for fitness enthusiasts worldwide</span>
            </div>
            
            <div className="flex space-x-8 text-lg">
              <button className="text-gray-400 hover:text-[#39FF14] transition-colors font-medium">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-[#39FF14] transition-colors font-medium">
                Terms of Service
              </button>
              <button className="text-gray-400 hover:text-[#39FF14] transition-colors font-medium">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-[#39FF14] to-[#007BFF] text-white p-4 rounded-full shadow-2xl hover:from-[#32e60f] hover:to-[#0056b3] transition-all transform hover:scale-110 neon-glow z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    </footer>
  );
};

export default Footer;