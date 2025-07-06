import React, { useState } from 'react';
import { ArrowLeft, Calendar, Clock, CreditCard, Star, MapPin, Award } from 'lucide-react';

interface BookSessionProps {
  trainer: any;
  onBack: () => void;
}

const BookSession: React.FC<BookSessionProps> = ({ trainer, onBack }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [sessionType, setSessionType] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goals: '',
    experience: '',
    specialRequests: ''
  });

  if (!trainer) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Session booking:', { trainer: trainer.id, selectedDate, selectedTime, sessionType, formData });
    // Handle booking submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const sessionTypes = [
    { value: 'personal', label: 'Personal Training (1-on-1)', price: trainer.hourlyRate, duration: '60 min' },
    { value: 'consultation', label: 'Initial Consultation', price: '$50', duration: '30 min' },
    { value: 'group', label: 'Small Group Training', price: '$40/person', duration: '60 min' }
  ];

  const timeSlots = [
    '6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
    '6:00 PM', '7:00 PM', '8:00 PM'
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
            <span className="text-lg font-medium">Back to Trainers</span>
          </button>
        </div>
      </div>

      <div 
        className="py-24 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-overlay"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=1920)'
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-black mb-6">
              Book a Session with <span className="gradient-text">{trainer.name}</span>
            </h1>
            <p className="text-2xl text-gray-200">
              Schedule your personalized training session with our expert trainer
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Trainer Info */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <div className="flex items-start space-x-6 mb-8">
                <div className="relative">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-24 h-24 rounded-2xl object-cover border-2 border-white/30"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-[#39FF14] to-[#007BFF] rounded-full p-2">
                    <Award className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">{trainer.name}</h2>
                  <p className="text-[#39FF14] font-semibold text-lg mb-2">{trainer.specialty}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span>{trainer.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{trainer.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3">Specialties</h3>
                  <div className="flex flex-wrap gap-2">
                    {trainer.specialties?.map((specialty: string, index: number) => (
                      <span
                        key={index}
                        className="bg-gradient-to-r from-[#39FF14]/20 to-[#007BFF]/20 border border-[#39FF14]/30 text-[#39FF14] px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">Availability</h3>
                  <p className="text-gray-300">{trainer.availability}</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">Session Types</h3>
                  <div className="space-y-3">
                    {sessionTypes.map((type, index) => (
                      <button
                        key={type.value}
                        onClick={() => setSessionType(type.value)}
                        className={`w-full p-4 rounded-xl border transition-all duration-300 text-left ${
                          sessionType === type.value
                            ? 'bg-gradient-to-r from-[#39FF14]/20 to-[#007BFF]/20 border-[#39FF14] text-white'
                            : 'bg-white/5 border-white/20 text-gray-300 hover:border-white/40'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-bold">{type.label}</div>
                            <div className="text-sm text-gray-400">{type.duration}</div>
                          </div>
                          <div className="text-[#39FF14] font-bold">{type.price}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold mb-8">Book Your Session</h2>
              
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
                    <label htmlFor="selectedDate" className="block text-lg font-semibold text-gray-300 mb-3">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="selectedDate"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      required
                      className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#39FF14] focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="selectedTime" className="block text-lg font-semibold text-gray-300 mb-3">
                      Preferred Time
                    </label>
                    <select
                      id="selectedTime"
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
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
                  <label htmlFor="experience" className="block text-lg font-semibold text-gray-300 mb-3">
                    Fitness Experience
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#39FF14] focus:border-transparent transition-all"
                  >
                    <option value="">Select experience level</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="goals" className="block text-lg font-semibold text-gray-300 mb-3">
                    Fitness Goals
                  </label>
                  <textarea
                    id="goals"
                    name="goals"
                    value={formData.goals}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#39FF14] focus:border-transparent transition-all resize-vertical"
                    placeholder="Tell us about your fitness goals..."
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="specialRequests" className="block text-lg font-semibold text-gray-300 mb-3">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    rows={2}
                    className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#39FF14] focus:border-transparent transition-all resize-vertical"
                    placeholder="Any special requests or requirements?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={!sessionType}
                  className={`w-full py-4 px-8 rounded-xl font-bold text-lg transition-all flex items-center justify-center space-x-3 ${
                    !sessionType
                      ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-[#39FF14] to-[#007BFF] hover:from-[#32e60f] hover:to-[#0056b3] text-white transform hover:scale-105 shadow-2xl neon-glow'
                  }`}
                >
                  <CreditCard className="h-6 w-6" />
                  <span>Book Session</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookSession;