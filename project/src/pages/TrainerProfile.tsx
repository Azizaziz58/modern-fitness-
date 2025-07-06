import React from 'react';
import { ArrowLeft, Star, Award, Calendar, MessageCircle, MapPin, Trophy, Clock, Target } from 'lucide-react';

interface TrainerProfileProps {
  trainer: any;
  onBack: () => void;
}

const TrainerProfile: React.FC<TrainerProfileProps> = ({ trainer, onBack }) => {
  if (!trainer) return null;

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

      {/* Hero Section */}
      <div 
        className="relative py-24 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-overlay"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=1920)'
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="relative w-64 h-64 mx-auto lg:mx-0 mb-8">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full rounded-3xl object-cover border-4 border-white/30"
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-[#39FF14] to-[#007BFF] rounded-full p-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <h1 className="text-5xl font-black mb-4 gradient-text">
                {trainer.name}
              </h1>
              <p className="text-2xl text-[#39FF14] font-bold mb-4">{trainer.specialty}</p>
              
              <div className="flex items-center justify-center lg:justify-start space-x-6 mb-6 text-lg">
                <div className="flex items-center space-x-2">
                  <Star className="h-6 w-6 text-yellow-400 fill-current" />
                  <span className="font-bold">{trainer.rating}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-6 w-6 text-[#39FF14]" />
                  <span>{trainer.sessions} sessions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-6 w-6 text-[#39FF14]" />
                  <span>{trainer.location}</span>
                </div>
              </div>

              <p className="text-xl text-gray-200 leading-relaxed mb-8">
                {trainer.fullBio}
              </p>

              <button className="bg-gradient-to-r from-[#39FF14] to-[#007BFF] text-white px-12 py-5 rounded-full font-bold text-xl hover:from-[#32e60f] hover:to-[#0056b3] transition-all transform hover:scale-110 shadow-2xl neon-glow">
                Book Session Now
              </button>
            </div>

            <div className="space-y-8">
              {/* Stats */}
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Trainer Stats</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-black text-[#39FF14] mb-2">{trainer.experience}</div>
                    <div className="text-gray-300">Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-[#39FF14] mb-2">{trainer.sessions}</div>
                    <div className="text-gray-300">Sessions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-[#39FF14] mb-2">{trainer.rating}</div>
                    <div className="text-gray-300">Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-[#39FF14] mb-2">{trainer.hourlyRate}</div>
                    <div className="text-gray-300">Per Hour</div>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Availability</h3>
                <div className="flex items-center space-x-3 text-lg">
                  <Clock className="h-6 w-6 text-[#39FF14]" />
                  <span className="text-gray-300">{trainer.availability}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications & Achievements */}
      <div className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <h3 className="text-3xl font-bold mb-8">
                <Trophy className="inline h-8 w-8 text-[#39FF14] mr-3" />
                Certifications
              </h3>
              <div className="space-y-4">
                {trainer.certifications.map((cert: string, index: number) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl">
                    <div className="bg-gradient-to-r from-[#39FF14] to-[#007BFF] p-2 rounded-lg">
                      <Award className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-lg font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <h3 className="text-3xl font-bold mb-8">
                <Target className="inline h-8 w-8 text-[#39FF14] mr-3" />
                Achievements
              </h3>
              <div className="space-y-4">
                {trainer.achievements?.map((achievement: string, index: number) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl">
                    <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF4500] p-2 rounded-lg">
                      <Trophy className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-lg font-medium">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Specialties */}
      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Training <span className="gradient-text">Specialties</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainer.specialties?.map((specialty: string, index: number) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center hover:border-white/40 transition-all duration-300 hover:scale-105">
                <div className="bg-gradient-to-r from-[#39FF14] to-[#007BFF] p-4 rounded-xl w-fit mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{specialty}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-8">
            Ready to Start <span className="gradient-text">Training</span>?
          </h2>
          <p className="text-2xl text-gray-300 mb-12">
            Book your first session with {trainer.name} and begin your transformation journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-[#39FF14] to-[#007BFF] text-white px-12 py-5 rounded-full font-bold text-xl hover:from-[#32e60f] hover:to-[#0056b3] transition-all transform hover:scale-110 shadow-2xl neon-glow">
              Book Session
            </button>
            <button className="bg-white/20 hover:bg-white/30 text-white px-12 py-5 rounded-full font-bold text-xl transition-all">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerProfile;