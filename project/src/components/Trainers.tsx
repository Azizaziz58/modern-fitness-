import React from 'react';
import { Star, Award, Calendar, MessageCircle, MapPin, Trophy } from 'lucide-react';

interface TrainersProps {
  onNavigate: (page: string, data?: any) => void;
}

const Trainers: React.FC<TrainersProps> = ({ onNavigate }) => {
  const trainers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      specialty: 'HIIT & Strength Training',
      experience: '8 years',
      rating: 4.9,
      sessions: '2.5k+',
      certifications: ['NASM-CPT', 'HIIT Specialist', 'Nutrition Coach'],
      bio: 'Former Olympic athlete turned fitness coach. Specializes in high-intensity training and strength building for all levels.',
      image: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=400',
      location: 'New York, NY',
      fullBio: 'Sarah is a former Olympic track and field athlete who transitioned into personal training after her competitive career. With 8 years of experience, she has helped thousands of clients achieve their fitness goals through her innovative HIIT and strength training programs.',
      achievements: ['Olympic Qualifier 2016', 'NASM Master Trainer', 'Top Rated Trainer 2023'],
      specialties: ['HIIT Training', 'Olympic Lifting', 'Sports Performance', 'Injury Prevention'],
      hourlyRate: '$120/hour',
      availability: 'Mon-Fri: 6AM-8PM, Sat: 8AM-4PM'
    },
    {
      id: 2,
      name: 'Mike Chen',
      specialty: 'Bodybuilding & Powerlifting',
      experience: '12 years',
      rating: 4.8,
      sessions: '4.2k+',
      certifications: ['NSCA-CSCS', 'Powerlifting Coach', 'Sports Nutrition'],
      bio: 'Competitive bodybuilder and powerlifter with over a decade of experience helping clients build serious muscle.',
      image: 'https://images.pexels.com/photos/3839432/pexels-photo-3839432.jpeg?auto=compress&cs=tinysrgb&w=400',
      location: 'Los Angeles, CA',
      fullBio: 'Mike is a competitive bodybuilder and powerlifter who has been training clients for over 12 years. His expertise in muscle building and strength development has helped countless individuals transform their physiques.',
      achievements: ['National Powerlifting Champion', 'IFBB Pro Card Holder', 'Strength Coach of the Year 2022'],
      specialties: ['Bodybuilding', 'Powerlifting', 'Muscle Hypertrophy', 'Competition Prep'],
      hourlyRate: '$150/hour',
      availability: 'Tue-Sat: 5AM-9PM, Sun: 10AM-6PM'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      specialty: 'Yoga & Mindfulness',
      experience: '6 years',
      rating: 5.0,
      sessions: '3.1k+',
      certifications: ['RYT-500', 'Meditation Teacher', 'Wellness Coach'],
      bio: 'Certified yoga instructor focused on connecting mind, body, and spirit through movement and mindfulness practices.',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
      location: 'Austin, TX',
      fullBio: 'Emma is a dedicated yoga instructor and wellness coach who believes in the transformative power of mindful movement. Her holistic approach combines traditional yoga practices with modern wellness techniques.',
      achievements: ['Yoga Alliance Certified', 'Mindfulness Teacher Training Graduate', 'Wellness Coach Certification'],
      specialties: ['Hatha Yoga', 'Vinyasa Flow', 'Meditation', 'Stress Management'],
      hourlyRate: '$90/hour',
      availability: 'Mon-Sun: 7AM-7PM'
    },
    {
      id: 4,
      name: 'David Thompson',
      specialty: 'Functional Training',
      experience: '10 years',
      rating: 4.9,
      sessions: '3.8k+',
      certifications: ['FMS Level 2', 'TRX Certified', 'Mobility Specialist'],
      bio: 'Movement specialist helping clients improve daily function and prevent injuries through targeted exercises.',
      image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=400',
      location: 'Miami, FL',
      fullBio: 'David is a movement specialist with 10 years of experience in functional training and injury prevention. His approach focuses on improving daily movement patterns and overall quality of life.',
      achievements: ['FMS Level 2 Certified', 'TRX Master Trainer', 'Mobility Specialist Certification'],
      specialties: ['Functional Movement', 'Injury Prevention', 'Mobility Training', 'Corrective Exercise'],
      hourlyRate: '$110/hour',
      availability: 'Mon-Fri: 6AM-8PM, Sat-Sun: 8AM-5PM'
    }
  ];

  return (
    <div 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-fixed bg-overlay"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=1920)'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 scroll-animate">
          <h2 className="text-5xl lg:text-7xl font-black mb-8">
            Expert
            <span className="gradient-text"> Trainers</span>
          </h2>
          <p className="text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Work with certified fitness professionals who are passionate about helping you achieve your goals. 
            Our trainers bring years of experience and proven results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mb-20">
          {trainers.map((trainer, index) => (
            <div
              key={trainer.id}
              className="group bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:transform hover:scale-105 scroll-animate"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start space-x-6">
                <div className="relative flex-shrink-0">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-32 h-32 rounded-2xl object-cover border-2 border-white/30 group-hover:border-[#39FF14] transition-all duration-300"
                  />
                  <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-[#39FF14] to-[#007BFF] rounded-full p-2">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-[#39FF14] transition-colors">
                        {trainer.name}
                      </h3>
                      <p className="text-[#39FF14] font-semibold text-lg">{trainer.specialty}</p>
                      <div className="flex items-center space-x-2 text-gray-400 mt-1">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{trainer.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 text-yellow-400">
                      <Star className="h-5 w-5 fill-current" />
                      <span className="text-lg font-bold text-white">{trainer.rating}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {trainer.bio}
                  </p>

                  <div className="flex items-center space-x-6 text-sm text-gray-400 mb-6">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5" />
                      <span className="font-medium">{trainer.experience}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MessageCircle className="h-5 w-5" />
                      <span className="font-medium">{trainer.sessions} sessions</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {trainer.certifications.map((cert, index) => (
                      <span
                        key={index}
                        className="bg-gradient-to-r from-[#39FF14]/20 to-[#007BFF]/20 border border-[#39FF14]/30 text-[#39FF14] px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <button 
                      onClick={() => onNavigate('book-session', trainer)}
                      className="flex-1 bg-gradient-to-r from-[#39FF14] to-[#007BFF] text-white py-3 px-6 rounded-xl font-bold hover:from-[#32e60f] hover:to-[#0056b3] transition-all transform hover:scale-105"
                    >
                      Book Session
                    </button>
                    <button 
                      onClick={() => onNavigate('trainer-profile', trainer)}
                      className="bg-white/20 hover:bg-white/30 text-white py-3 px-6 rounded-xl font-bold transition-all"
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#39FF14]/10 to-[#007BFF]/10 rounded-3xl p-12 border border-[#39FF14]/20 scroll-animate">
          <div className="text-center">
            <div className="bg-gradient-to-r from-[#39FF14] to-[#007BFF] p-4 rounded-2xl w-fit mx-auto mb-6">
              <Trophy className="h-12 w-12 text-white" />
            </div>
            <h3 className="text-4xl font-bold text-white mb-6">
              Want to Become a Trainer?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join our team of elite fitness professionals. We're always looking for passionate, 
              certified trainers to help our community achieve their fitness goals.
            </p>
            <button 
              onClick={() => onNavigate('trainer-application')}
              className="bg-gradient-to-r from-[#39FF14] to-[#007BFF] text-white px-12 py-5 rounded-full font-bold text-xl hover:from-[#32e60f] hover:to-[#0056b3] transition-all transform hover:scale-110 shadow-2xl neon-glow"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trainers;