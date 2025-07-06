import React, { useState } from 'react';
import { ArrowLeft, Play, Clock, Target, Users, CheckCircle, Calendar, Download } from 'lucide-react';

interface WorkoutDetailProps {
  program: any;
  onBack: () => void;
}

const WorkoutDetail: React.FC<WorkoutDetailProps> = ({ program, onBack }) => {
  const [selectedWeek, setSelectedWeek] = useState(0);

  if (!program) return null;

  const IconComponent = program.icon;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-900/95 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={onBack}
            className="flex items-center space-x-3 text-gray-300 hover:text-[#39FF14] transition-colors"
          >
            <ArrowLeft className="h-6 w-6" />
            <span className="text-lg font-medium">Back to Programs</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div 
        className="relative py-24 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-overlay"
        style={{ backgroundImage: `url(${program.image})` }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className={`bg-gradient-to-r ${program.color} p-4 rounded-2xl w-fit mb-6`}>
                <IconComponent className="h-12 w-12 text-white" />
              </div>
              <h1 className="text-6xl font-black mb-6 gradient-text">
                {program.title}
              </h1>
              <p className="text-2xl text-gray-200 mb-8 leading-relaxed">
                {program.fullDescription}
              </p>
              <div className="flex items-center space-x-8 mb-8 text-lg">
                <div className="flex items-center space-x-2">
                  <Clock className="h-6 w-6 text-[#39FF14]" />
                  <span>{program.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Target className="h-6 w-6 text-[#39FF14]" />
                  <span>{program.level}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-6 w-6 text-[#39FF14]" />
                  <span>{program.participants}</span>
                </div>
              </div>
              <button className={`bg-gradient-to-r ${program.color} text-white px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-all shadow-2xl neon-glow flex items-center space-x-3`}>
                <Play className="h-6 w-6" />
                <span>Start Program Now</span>
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Program Features</h3>
              <div className="space-y-4">
                {program.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-[#39FF14] flex-shrink-0" />
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Program Structure */}
      <div className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Program <span className="gradient-text">Structure</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {program.workouts.map((workout: any, index: number) => (
              <button
                key={index}
                onClick={() => setSelectedWeek(index)}
                className={`p-6 rounded-2xl border transition-all duration-300 ${
                  selectedWeek === index
                    ? 'bg-gradient-to-r from-[#39FF14]/20 to-[#007BFF]/20 border-[#39FF14] text-white'
                    : 'bg-white/10 border-white/20 text-gray-300 hover:border-white/40'
                }`}
              >
                <div className="text-lg font-bold mb-2">{workout.name}</div>
                <div className="text-sm">{workout.description}</div>
              </button>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">
                {program.workouts[selectedWeek]?.name}
              </h3>
              <p className="text-xl text-gray-300">
                {program.workouts[selectedWeek]?.description}
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-r from-[#39FF14] to-[#007BFF] p-4 rounded-2xl w-fit mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2">Schedule</h4>
                <p className="text-gray-300">3-4 workouts per week</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-[#39FF14] to-[#007BFF] p-4 rounded-2xl w-fit mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2">Duration</h4>
                <p className="text-gray-300">{program.duration} per session</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-[#39FF14] to-[#007BFF] p-4 rounded-2xl w-fit mx-auto mb-4">
                  <Download className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2">Resources</h4>
                <p className="text-gray-300">Video guides & PDFs</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-8">
            Ready to <span className="gradient-text">Transform</span>?
          </h2>
          <p className="text-2xl text-gray-300 mb-12">
            Join thousands of others who have achieved amazing results with this program.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className={`bg-gradient-to-r ${program.color} text-white px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-all shadow-2xl neon-glow`}>
              Start Free Trial
            </button>
            <button className="bg-white/20 hover:bg-white/30 text-white px-12 py-5 rounded-full font-bold text-xl transition-all">
              View Pricing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetail;