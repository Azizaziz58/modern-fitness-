import React, { useState } from 'react';
import { ArrowLeft, Calendar, Clock, User, Phone, Mail, MessageCircle } from 'lucide-react';

interface NutritionConsultationProps {
  onBack: () => void;
}

const NutritionConsultation: React.FC<NutritionConsultationProps> = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goals: '',
    dietaryRestrictions: '',
    preferredDate: '',
    preferredTime: '',
    additionalInfo: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Consultation booking:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-900/95 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={onBack}
            className="flex items-center space-x-3 text-gray-300 hover:text-[#39FF14] transition-colors"
          >
            <ArrowLeft className="h-6 w-6" />
            <span className="text-lg font-medium">Back to Nutrition Plans</span>
          </button>
        </div>
      </div>

      <div 
        className="py-24 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-overlay"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&w=1920)'
        }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-black mb-6">
              Free Nutrition <span className="gradient-text">Consultation</span>
            </h1>
            <p className="text-2xl text-gray-200 leading-relaxed">
              Book a 15-minute consultation with our certified nutritionists to find the perfect plan for your goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Consultation Info */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold mb-8">What to Expect</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-[#39FF14] to-[#007BFF] p-3 rounded-xl">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">15-Minute Session</h3>
                    <p className="text-gray-300">Quick but comprehensive assessment of your nutrition needs</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-[#39FF14] to-[#007BFF] p-3 rounded-xl">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Certified Nutritionist</h3>
                    <p className="text-gray-300">Speak with a qualified nutrition expert</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-[#39FF14] to-[#007BFF] p-3 rounded-xl">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Personalized Recommendations</h3>
                    <p className="text-gray-300">Get tailored advice based on your goals and lifestyle</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-[#39FF14]/10 to-[#007BFF]/10 rounded-2xl border border-[#39FF14]/20">
                <h3 className="text-xl font-bold mb-3">100% Free</h3>
                <p className="text-gray-300">
                  This consultation is completely free with no obligation to purchase any plans.
                </p>
              </div>
            </div>

            {/* Booking Form */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold mb-8">Book Your Consultation</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-lg font-semibold text-gray-300 mb-3">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#39FF14] focus:border-transparent transition-all"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-lg font-semibold text-gray-300 mb-3">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#39FF14] focus:border-transparent transition-all"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-lg font-semibold text-gray-300 mb-3">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#39FF14] focus:border-transparent transition-all"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="preferredDate" className="block text-lg font-semibold text-gray-300 mb-3">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#39FF14] focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="preferredTime" className="block text-lg font-semibold text-gray-300 mb-3">
                      Preferred Time
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#39FF14] focus:border-transparent transition-all"
                    >
                      <option value="">Select time</option>
                      {timeSlots.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="goals" className="block text-lg font-semibold text-gray-300 mb-3">
                    Nutrition Goals
                  </label>
                  <textarea
                    id="goals"
                    name="goals"
                    value={formData.goals}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#39FF14] focus:border-transparent transition-all resize-vertical"
                    placeholder="Tell us about your nutrition goals..."
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="dietaryRestrictions" className="block text-lg font-semibold text-gray-300 mb-3">
                    Dietary Restrictions (Optional)
                  </label>
                  <input
                    type="text"
                    id="dietaryRestrictions"
                    name="dietaryRestrictions"
                    value={formData.dietaryRestrictions}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#39FF14] focus:border-transparent transition-all"
                    placeholder="Any allergies or dietary restrictions?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#39FF14] to-[#007BFF] text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-[#32e60f] hover:to-[#0056b3] transition-all transform hover:scale-105 shadow-2xl neon-glow flex items-center justify-center space-x-3"
                >
                  <Calendar className="h-6 w-6" />
                  <span>Book Free Consultation</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionConsultation;