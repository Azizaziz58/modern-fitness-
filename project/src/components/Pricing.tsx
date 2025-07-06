import React from 'react';
import { Check, Star, Crown, Zap, Shield, Sparkles } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      id: 1,
      name: 'Basic',
      price: 29,
      period: '/month',
      description: 'Perfect for beginners starting their fitness journey',
      icon: Zap,
      color: 'from-gray-600 to-gray-700',
      popular: false,
      features: [
        'Access to basic workout programs',
        'Nutrition tracking tools',
        'Community support forum',
        'Mobile app access',
        'Progress tracking'
      ]
    },
    {
      id: 2,
      name: 'Pro',
      price: 59,
      period: '/month',
      description: 'Most popular choice for serious fitness enthusiasts',
      icon: Star,
      color: 'from-[#39FF14] to-[#007BFF]',
      popular: true,
      features: [
        'All Basic plan features',
        'Premium workout programs',
        'Personalized meal plans',
        'Live group classes',
        '1-on-1 trainer consultations',
        'Advanced analytics',
        'Priority support'
      ]
    },
    {
      id: 3,
      name: 'Elite',
      price: 99,
      period: '/month',
      description: 'Ultimate package for maximum results and support',
      icon: Crown,
      color: 'from-[#FF6B35] to-[#FF4500]',
      popular: false,
      features: [
        'All Pro plan features',
        'Unlimited 1-on-1 sessions',
        'Custom workout creation',
        'Supplement recommendations',
        'Body composition analysis',
        'Injury prevention programs',
        '24/7 trainer support',
        'Exclusive masterclasses'
      ]
    }
  ];

  const faqs = [
    {
      question: 'Can I change my plan anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.'
    },
    {
      question: 'Is there a free trial?',
      answer: 'We offer a 7-day free trial for all new members to explore our platform.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and digital wallets.'
    }
  ];

  return (
    <div 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-fixed bg-overlay"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=1920)'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 scroll-animate">
          <h2 className="text-5xl lg:text-7xl font-black mb-8">
            Choose Your
            <span className="gradient-text"> Plan</span>
          </h2>
          <p className="text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Select the perfect plan for your fitness journey. All plans include our mobile app, 
            progress tracking, and access to our supportive community.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 mb-20">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={plan.id}
                className={`relative group bg-white/10 backdrop-blur-md rounded-3xl p-10 border transition-all duration-500 hover:transform hover:scale-105 scroll-animate ${
                  plan.popular 
                    ? 'border-[#39FF14]/50 ring-2 ring-[#39FF14]/30 scale-110' 
                    : 'border-white/20 hover:border-white/40'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[#39FF14] to-[#007BFF] text-white px-8 py-3 rounded-full text-lg font-bold shadow-2xl flex items-center space-x-2">
                      <Sparkles className="h-5 w-5" />
                      <span>Most Popular</span>
                    </span>
                  </div>
                )}

                <div className={`bg-gradient-to-r ${plan.color} p-4 rounded-2xl w-fit mb-8 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-3xl font-bold text-white mb-3">{plan.name}</h3>
                <p className="text-gray-400 mb-8 text-lg">{plan.description}</p>

                <div className="mb-10">
                  <div className="flex items-baseline">
                    <span className="text-6xl font-black text-white">${plan.price}</span>
                    <span className="text-gray-400 ml-3 text-xl">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-4">
                      <Check className="h-6 w-6 text-[#39FF14] flex-shrink-0" />
                      <span className="text-gray-300 text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-5 px-8 rounded-2xl font-bold text-xl transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-[#39FF14] to-[#007BFF] hover:from-[#32e60f] hover:to-[#0056b3] text-white transform hover:scale-105 shadow-2xl neon-glow'
                      : 'bg-white/20 hover:bg-white/30 text-white hover:bg-gradient-to-r hover:from-[#39FF14] hover:to-[#007BFF]'
                  }`}
                >
                  Get Started
                </button>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20 scroll-animate">
            <div className="bg-gradient-to-r from-[#39FF14] to-[#007BFF] p-4 rounded-2xl w-fit mb-6">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-6">Money-Back Guarantee</h3>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              We're confident you'll love our platform. If you're not completely satisfied within 
              the first 30 days, we'll refund your money, no questions asked.
            </p>
            <div className="flex items-center space-x-4">
              <div className="bg-[#39FF14]/20 p-4 rounded-full">
                <Check className="h-8 w-8 text-[#39FF14]" />
              </div>
              <div>
                <div className="text-white font-bold text-xl">30-Day Guarantee</div>
                <div className="text-gray-400">Risk-free trial period</div>
              </div>
            </div>
          </div>

          <div className="space-y-8 scroll-animate">
            <h3 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h3>
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all">
                <h4 className="text-xl font-bold text-white mb-4">{faq.question}</h4>
                <p className="text-gray-300 text-lg leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;