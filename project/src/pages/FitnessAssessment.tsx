import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle, Target, Zap, Heart } from 'lucide-react';

interface FitnessAssessmentProps {
  onBack: () => void;
}

const FitnessAssessment: React.FC<FitnessAssessmentProps> = ({ onBack }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 'experience',
      title: 'What is your fitness experience level?',
      type: 'single',
      options: [
        { value: 'beginner', label: 'Beginner - New to fitness' },
        { value: 'intermediate', label: 'Intermediate - 6+ months experience' },
        { value: 'advanced', label: 'Advanced - 2+ years experience' }
      ]
    },
    {
      id: 'goals',
      title: 'What are your primary fitness goals?',
      type: 'multiple',
      options: [
        { value: 'weight_loss', label: 'Weight Loss' },
        { value: 'muscle_gain', label: 'Muscle Gain' },
        { value: 'endurance', label: 'Improve Endurance' },
        { value: 'strength', label: 'Build Strength' },
        { value: 'flexibility', label: 'Increase Flexibility' },
        { value: 'general_fitness', label: 'General Fitness' }
      ]
    },
    {
      id: 'time_commitment',
      title: 'How much time can you dedicate to workouts?',
      type: 'single',
      options: [
        { value: '30min', label: '30 minutes or less' },
        { value: '45min', label: '30-45 minutes' },
        { value: '60min', label: '45-60 minutes' },
        { value: '60plus', label: 'More than 60 minutes' }
      ]
    },
    {
      id: 'frequency',
      title: 'How often can you work out per week?',
      type: 'single',
      options: [
        { value: '2-3', label: '2-3 times per week' },
        { value: '4-5', label: '4-5 times per week' },
        { value: '6-7', label: '6-7 times per week' }
      ]
    },
    {
      id: 'equipment',
      title: 'What equipment do you have access to?',
      type: 'multiple',
      options: [
        { value: 'bodyweight', label: 'Bodyweight only' },
        { value: 'dumbbells', label: 'Dumbbells' },
        { value: 'resistance_bands', label: 'Resistance Bands' },
        { value: 'gym', label: 'Full gym access' },
        { value: 'home_gym', label: 'Home gym setup' }
      ]
    }
  ];

  const handleAnswer = (questionId: string, value: any) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getRecommendation = () => {
    const { experience, goals, time_commitment } = answers;
    
    if (goals?.includes('weight_loss') && time_commitment === '30min') {
      return {
        program: 'HIIT Burn',
        reason: 'Perfect for weight loss with short, intense workouts',
        icon: Zap,
        color: 'from-[#FF6B35] to-[#FF4500]'
      };
    } else if (goals?.includes('muscle_gain') || goals?.includes('strength')) {
      return {
        program: 'Strength Builder',
        reason: 'Ideal for building muscle and increasing strength',
        icon: Target,
        color: 'from-[#007BFF] to-[#0056b3]'
      };
    } else {
      return {
        program: 'Cardio Flow',
        reason: 'Great for overall fitness and endurance',
        icon: Heart,
        color: 'from-[#39FF14] to-[#32e60f]'
      };
    }
  };

  if (showResults) {
    const recommendation = getRecommendation();
    const IconComponent = recommendation.icon;

    return (
      <div className="min-h-screen bg-gray-900 text-white">
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

        <div className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20">
              <div className={`bg-gradient-to-r ${recommendation.color} p-6 rounded-2xl w-fit mx-auto mb-8`}>
                <IconComponent className="h-16 w-16 text-white" />
              </div>
              
              <h1 className="text-5xl font-black mb-6">
                Your Perfect <span className="gradient-text">Match</span>
              </h1>
              
              <h2 className="text-4xl font-bold mb-6 text-[#39FF14]">
                {recommendation.program}
              </h2>
              
              <p className="text-2xl text-gray-300 mb-12">
                {recommendation.reason}
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white/10 rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-2">Experience Level</h3>
                  <p className="text-gray-300 capitalize">{answers.experience}</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-2">Time Commitment</h3>
                  <p className="text-gray-300">{answers.time_commitment}</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-2">Frequency</h3>
                  <p className="text-gray-300">{answers.frequency} times/week</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className={`bg-gradient-to-r ${recommendation.color} text-white px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-all shadow-2xl neon-glow`}>
                  Start This Program
                </button>
                <button 
                  onClick={onBack}
                  className="bg-white/20 hover:bg-white/30 text-white px-12 py-5 rounded-full font-bold text-xl transition-all"
                >
                  View All Programs
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
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

      <div className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-black mb-6">
              Fitness <span className="gradient-text">Assessment</span>
            </h1>
            <p className="text-2xl text-gray-300">
              Answer a few questions to find your perfect workout program
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>Question {currentStep + 1} of {questions.length}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-[#39FF14] to-[#007BFF] h-3 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {currentQuestion.title}
            </h2>

            <div className="space-y-4 mb-12">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={option.value}
                  onClick={() => {
                    if (currentQuestion.type === 'single') {
                      handleAnswer(currentQuestion.id, option.value);
                    } else {
                      const currentAnswers = answers[currentQuestion.id] || [];
                      const newAnswers = currentAnswers.includes(option.value)
                        ? currentAnswers.filter((a: string) => a !== option.value)
                        : [...currentAnswers, option.value];
                      handleAnswer(currentQuestion.id, newAnswers);
                    }
                  }}
                  className={`w-full p-6 rounded-2xl border transition-all duration-300 text-left ${
                    (currentQuestion.type === 'single' && answers[currentQuestion.id] === option.value) ||
                    (currentQuestion.type === 'multiple' && answers[currentQuestion.id]?.includes(option.value))
                      ? 'bg-gradient-to-r from-[#39FF14]/20 to-[#007BFF]/20 border-[#39FF14] text-white'
                      : 'bg-white/5 border-white/20 text-gray-300 hover:border-white/40 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium">{option.label}</span>
                    {((currentQuestion.type === 'single' && answers[currentQuestion.id] === option.value) ||
                      (currentQuestion.type === 'multiple' && answers[currentQuestion.id]?.includes(option.value))) && (
                      <CheckCircle className="h-6 w-6 text-[#39FF14]" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            <div className="flex justify-between">
              <button
                onClick={prevStep}
                disabled={currentStep === 0}
                className={`flex items-center space-x-3 px-8 py-4 rounded-xl font-bold text-lg transition-all ${
                  currentStep === 0
                    ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                    : 'bg-white/20 hover:bg-white/30 text-white'
                }`}
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Previous</span>
              </button>

              <button
                onClick={nextStep}
                disabled={!answers[currentQuestion.id]}
                className={`flex items-center space-x-3 px-8 py-4 rounded-xl font-bold text-lg transition-all ${
                  !answers[currentQuestion.id]
                    ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-[#39FF14] to-[#007BFF] hover:from-[#32e60f] hover:to-[#0056b3] text-white hover:scale-105 shadow-2xl'
                }`}
              >
                <span>{currentStep === questions.length - 1 ? 'Get Results' : 'Next'}</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitnessAssessment;