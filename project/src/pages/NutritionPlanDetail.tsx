import React from 'react';
import { ArrowLeft, Clock, CheckCircle, Download, Calendar, Utensils } from 'lucide-react';

interface NutritionPlanDetailProps {
  plan: any;
  onBack: () => void;
}

const NutritionPlanDetail: React.FC<NutritionPlanDetailProps> = ({ plan, onBack }) => {
  if (!plan) return null;

  const IconComponent = plan.icon;

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

      {/* Hero Section */}
      <div 
        className="relative py-24 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-overlay"
        style={{ backgroundImage: `url(${plan.image})` }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className={`bg-gradient-to-r ${plan.color} p-4 rounded-2xl w-fit mb-6`}>
                <IconComponent className="h-12 w-12 text-white" />
              </div>
              <h1 className="text-6xl font-black mb-6 gradient-text">
                {plan.title} Plan
              </h1>
              <p className="text-2xl text-gray-200 mb-8 leading-relaxed">
                {plan.fullDescription}
              </p>
              <div className="flex items-center space-x-8 mb-8 text-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-[#39FF14] rounded-full"></div>
                  <span>{plan.calories} calories</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-6 w-6 text-[#39FF14]" />
                  <span>{plan.meals}</span>
                </div>
              </div>
              <button className={`bg-gradient-to-r ${plan.color} text-white px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-all shadow-2xl neon-glow`}>
                Choose This Plan
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Plan Features</h3>
              <div className="space-y-4">
                {plan.features.map((feature: string, index: number) => (
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

      {/* Meal Plan Structure */}
      <div className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Daily <span className="gradient-text">Meal Plan</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {plan.mealPlan.map((meal: any, index: number) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
                <div className="bg-gradient-to-r from-[#39FF14] to-[#007BFF] p-3 rounded-xl w-fit mb-4">
                  <Utensils className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{meal.meal}</h3>
                <p className="text-gray-300">{meal.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20">
            <h3 className="text-3xl font-bold text-center mb-12">
              What's <span className="gradient-text">Included</span>
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-r from-[#39FF14] to-[#007BFF] p-4 rounded-2xl w-fit mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2">Weekly Meal Plans</h4>
                <p className="text-gray-300">Detailed meal plans for every week</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-[#39FF14] to-[#007BFF] p-4 rounded-2xl w-fit mx-auto mb-4">
                  <Download className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2">Shopping Lists</h4>
                <p className="text-gray-300">Organized grocery lists for easy shopping</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-[#39FF14] to-[#007BFF] p-4 rounded-2xl w-fit mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2">Prep Guides</h4>
                <p className="text-gray-300">Step-by-step meal preparation guides</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-8">
            Start Your <span className="gradient-text">Nutrition Journey</span>
          </h2>
          <p className="text-2xl text-gray-300 mb-12">
            Get access to this comprehensive nutrition plan and transform your eating habits.
          </p>
          
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20 mb-12">
            <div className="text-6xl font-black text-white mb-4">$29<span className="text-2xl text-gray-400">/month</span></div>
            <p className="text-xl text-gray-300 mb-8">Full access to {plan.title} nutrition plan</p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center space-x-3 text-gray-300">
                <CheckCircle className="h-5 w-5 text-[#39FF14] flex-shrink-0" />
                <span>Personalized meal plans</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <CheckCircle className="h-5 w-5 text-[#39FF14] flex-shrink-0" />
                <span>Weekly shopping lists</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <CheckCircle className="h-5 w-5 text-[#39FF14] flex-shrink-0" />
                <span>Nutritionist support</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <CheckCircle className="h-5 w-5 text-[#39FF14] flex-shrink-0" />
                <span>Mobile app access</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className={`bg-gradient-to-r ${plan.color} text-white px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-all shadow-2xl neon-glow`}>
              Start Free Trial
            </button>
            <button className="bg-white/20 hover:bg-white/30 text-white px-12 py-5 rounded-full font-bold text-xl transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionPlanDetail;