import React from 'react';
import { Apple, Clock, ChefHat, Leaf, ArrowRight, CheckCircle, Utensils, Scale } from 'lucide-react';

interface NutritionPlansProps {
  onNavigate: (page: string, data?: any) => void;
}

const NutritionPlans: React.FC<NutritionPlansProps> = ({ onNavigate }) => {
  const plans = [
    {
      id: 1,
      title: 'Muscle Gain',
      description: 'High-protein meal plans designed to support muscle growth and recovery.',
      calories: '2800-3200',
      meals: '6 meals/day',
      icon: ChefHat,
      color: 'from-[#FF6B35] to-[#FF4500]',
      features: ['High protein content', 'Post-workout nutrition', 'Bulk cooking guides', 'Supplement timing'],
      popular: false,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      fullDescription: 'Fuel your muscle growth with our comprehensive nutrition plan designed specifically for building lean muscle mass.',
      mealPlan: [
        { meal: 'Breakfast', description: 'High-protein breakfast to kickstart your day' },
        { meal: 'Mid-Morning Snack', description: 'Quick protein boost between meals' },
        { meal: 'Lunch', description: 'Balanced meal with complex carbs and protein' },
        { meal: 'Pre-Workout', description: 'Energy-boosting snack before training' },
        { meal: 'Post-Workout', description: 'Recovery meal with protein and carbs' },
        { meal: 'Dinner', description: 'Nutrient-dense evening meal' }
      ]
    },
    {
      id: 2,
      title: 'Fat Loss',
      description: 'Balanced, calorie-controlled meals that keep you satisfied while promoting fat loss.',
      calories: '1800-2200',
      meals: '5 meals/day',
      icon: Scale,
      color: 'from-[#39FF14] to-[#32e60f]',
      features: ['Calorie controlled', 'High satiety foods', 'Flexible options', 'Progress tracking'],
      popular: true,
      image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=800',
      fullDescription: 'Achieve sustainable fat loss with our scientifically-designed meal plans that keep you satisfied while creating a caloric deficit.',
      mealPlan: [
        { meal: 'Breakfast', description: 'Nutrient-dense, low-calorie start to your day' },
        { meal: 'Mid-Morning Snack', description: 'Healthy snack to maintain energy' },
        { meal: 'Lunch', description: 'Balanced, filling meal with lean protein' },
        { meal: 'Afternoon Snack', description: 'Light snack to prevent overeating' },
        { meal: 'Dinner', description: 'Satisfying, low-calorie evening meal' }
      ]
    },
    {
      id: 3,
      title: 'Plant-Based',
      description: 'Complete plant-based nutrition plans with all essential nutrients and proteins.',
      calories: '2000-2400',
      meals: '5 meals/day',
      icon: Leaf,
      color: 'from-[#007BFF] to-[#0056b3]',
      features: ['100% plant-based', 'Complete proteins', 'Vitamin B12 included', 'Sustainable choices'],
      popular: false,
      image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=800',
      fullDescription: 'Thrive on a plant-based diet with our complete nutrition plans that ensure you get all essential nutrients for optimal health.',
      mealPlan: [
        { meal: 'Breakfast', description: 'Plant-powered breakfast with complete proteins' },
        { meal: 'Mid-Morning Snack', description: 'Nutrient-rich plant-based snack' },
        { meal: 'Lunch', description: 'Hearty plant-based meal with legumes and grains' },
        { meal: 'Afternoon Snack', description: 'Energy-boosting plant snack' },
        { meal: 'Dinner', description: 'Satisfying plant-based dinner' }
      ]
    }
  ];

  const nutritionFeatures = [
    'Personalized meal plans based on your goals',
    'Weekly grocery lists and prep guides',
    'Macro and calorie tracking tools',
    'Recipe variations for dietary restrictions',
    'Professional nutritionist support',
    'Mobile app with meal reminders'
  ];

  return (
    <div 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-fixed bg-overlay"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&w=1920)'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 scroll-animate">
          <h2 className="text-5xl lg:text-7xl font-black mb-8">
            Nutrition
            <span className="gradient-text"> Plans</span>
          </h2>
          <p className="text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Fuel your fitness journey with our expert-designed nutrition plans. Each plan is crafted by 
            certified nutritionists to complement your workout routine and lifestyle.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 mb-20">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={plan.id}
                className={`relative group bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border transition-all duration-500 hover:transform hover:scale-105 scroll-animate ${
                  plan.popular ? 'border-[#39FF14]/50 ring-2 ring-[#39FF14]/30' : 'border-white/20 hover:border-white/40'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-[#39FF14] to-[#007BFF] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Plan Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={plan.image} 
                    alt={plan.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className={`absolute top-4 right-4 bg-gradient-to-r ${plan.color} p-3 rounded-xl group-hover:scale-110 transition-transform`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-[#39FF14] transition-colors">
                    {plan.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                    {plan.description}
                  </p>

                  <div className="flex items-center space-x-6 mb-6 text-sm text-gray-400">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-[#39FF14] rounded-full"></div>
                      <span className="font-medium">{plan.calories} cal</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5" />
                      <span className="font-medium">{plan.meals}</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3 text-gray-300">
                        <CheckCircle className="h-5 w-5 text-[#39FF14] flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => onNavigate('nutrition-plan-detail', plan)}
                    className={`group/btn w-full ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-[#39FF14] to-[#007BFF] hover:from-[#32e60f] hover:to-[#0056b3]' 
                        : `bg-gradient-to-r ${plan.color}`
                    } text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3 hover:shadow-2xl hover:scale-105`}
                  >
                    <span>Choose Plan</span>
                    <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20 scroll-animate">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-6 text-white">
                Why Choose Our Nutrition Plans?
              </h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Our nutrition plans are developed by certified nutritionists and tailored to support your specific fitness goals. 
                Each plan includes everything you need to succeed.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {nutritionFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 text-gray-300">
                    <CheckCircle className="h-5 w-5 text-[#39FF14] flex-shrink-0" />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#39FF14]/20 to-[#007BFF]/20 rounded-2xl p-8 border border-[#39FF14]/30">
              <h4 className="text-2xl font-bold text-white mb-4">Free Consultation</h4>
              <p className="text-gray-300 mb-6 text-lg">
                Not sure which plan is right for you? Book a free 15-minute consultation with our nutritionists.
              </p>
              <button 
                onClick={() => onNavigate('nutrition-consultation')}
                className="bg-white text-gray-900 px-8 py-3 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionPlans;