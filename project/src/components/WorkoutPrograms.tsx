import React from 'react';
import { Zap, Clock, Users, Target, ArrowRight, Flame, Dumbbell, Heart } from 'lucide-react';

interface WorkoutProgramsProps {
  onNavigate: (page: string, data?: any) => void;
}

const WorkoutPrograms: React.FC<WorkoutProgramsProps> = ({ onNavigate }) => {
  const programs = [
    {
      id: 1,
      title: 'HIIT Burn',
      description: 'High-intensity interval training for maximum calorie burn and explosive fitness gains.',
      duration: '30 min',
      level: 'Intermediate',
      participants: '12k+',
      color: 'from-[#FF6B35] to-[#FF4500]',
      icon: Flame,
      features: ['Full body workout', 'Equipment-free', '6 weeks program', 'Nutrition guide'],
      image: 'https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&w=800',
      fullDescription: 'Transform your body with our scientifically-designed HIIT program that combines explosive movements with strategic rest periods for maximum calorie burn and cardiovascular improvement.',
      workouts: [
        { name: 'Week 1-2: Foundation', description: 'Build your base with fundamental movements' },
        { name: 'Week 3-4: Intensity', description: 'Increase intensity and complexity' },
        { name: 'Week 5-6: Peak Performance', description: 'Push your limits with advanced circuits' }
      ]
    },
    {
      id: 2,
      title: 'Strength Builder',
      description: 'Progressive strength training to build lean muscle and increase functional power.',
      duration: '45 min',
      level: 'Beginner',
      participants: '8.5k+',
      color: 'from-[#007BFF] to-[#0056b3]',
      icon: Dumbbell,
      features: ['Muscle building', 'Progressive overload', '8 weeks program', 'Form tutorials'],
      image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=800',
      fullDescription: 'Build serious strength and muscle with our progressive training program designed for beginners to intermediate lifters.',
      workouts: [
        { name: 'Week 1-2: Movement Mastery', description: 'Learn proper form and technique' },
        { name: 'Week 3-4: Strength Foundation', description: 'Build your strength base' },
        { name: 'Week 5-6: Progressive Overload', description: 'Increase weights and intensity' },
        { name: 'Week 7-8: Peak Strength', description: 'Test your new strength limits' }
      ]
    },
    {
      id: 3,
      title: 'Cardio Flow',
      description: 'Dynamic cardio sequences for endurance, heart health, and mental clarity.',
      duration: '35 min',
      level: 'All Levels',
      participants: '15k+',
      color: 'from-[#39FF14] to-[#32e60f]',
      icon: Heart,
      features: ['Cardio focus', 'Stress relief', '12 weeks program', 'Heart rate zones'],
      image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800',
      fullDescription: 'Improve your cardiovascular health and endurance with our comprehensive cardio program that adapts to all fitness levels.',
      workouts: [
        { name: 'Week 1-3: Cardio Base', description: 'Build your aerobic foundation' },
        { name: 'Week 4-6: Endurance Building', description: 'Increase duration and intensity' },
        { name: 'Week 7-9: Peak Cardio', description: 'Advanced cardio challenges' },
        { name: 'Week 10-12: Maintenance', description: 'Sustain your cardio fitness' }
      ]
    }
  ];

  return (
    <div 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-fixed bg-overlay"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=1920)'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 scroll-animate">
          <h2 className="text-5xl lg:text-7xl font-black mb-8">
            Workout
            <span className="gradient-text"> Programs</span>
          </h2>
          <p className="text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Choose from our scientifically-designed workout programs tailored to your fitness level and goals.
            Each program includes detailed instructions, progress tracking, and expert guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <div
                key={program.id}
                className="group bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-500 hover:transform hover:scale-105 scroll-animate"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Program Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className={`absolute top-4 right-4 bg-gradient-to-r ${program.color} p-3 rounded-xl group-hover:scale-110 transition-transform`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-[#39FF14] transition-colors">
                    {program.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                    {program.description}
                  </p>

                  <div className="flex items-center space-x-6 mb-6 text-sm text-gray-400">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5" />
                      <span className="font-medium">{program.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Target className="h-5 w-5" />
                      <span className="font-medium">{program.level}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5" />
                      <span className="font-medium">{program.participants}</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {program.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3 text-gray-300">
                        <div className="w-2 h-2 bg-[#39FF14] rounded-full"></div>
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => onNavigate('workout-detail', program)}
                    className={`group/btn w-full bg-gradient-to-r ${program.color} text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3 hover:shadow-2xl hover:scale-105`}
                  >
                    <span>Start Program</span>
                    <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center scroll-animate">
          <p className="text-xl text-gray-300 mb-8">Can't decide? Take our fitness assessment to find your perfect program.</p>
          <button 
            onClick={() => onNavigate('fitness-assessment')}
            className="bg-gradient-to-r from-[#39FF14] to-[#007BFF] text-white px-12 py-5 rounded-full font-bold text-xl hover:from-[#32e60f] hover:to-[#0056b3] transition-all transform hover:scale-110 shadow-2xl neon-glow"
          >
            Take Assessment
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkoutPrograms;