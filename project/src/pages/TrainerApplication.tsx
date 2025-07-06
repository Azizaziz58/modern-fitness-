import React, { useState } from 'react';
import { ArrowLeft, Upload, CheckCircle, Award, User, Mail, Phone } from 'lucide-react';

interface TrainerApplicationProps {
  onBack: () => void;
}

const TrainerApplication: React.FC<TrainerApplicationProps> = ({ onBack }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    
    // Professional Info
    experience: '',
    specialties: [] as string[],
    certifications: [] as string[],
    education: '',
    
    // Application Details
    motivation: '',
    availability: '',
    hourlyRate: '',
    portfolio: '',
    references: ''
  });

  const steps = [
    { title: 'Personal Information', icon: User },
    { title: 'Professional Background', icon: Award },
    { title: 'Application Details', icon: CheckCircle }
  ];

  const specialtyOptions = [
    'HIIT Training', 'Strength Training', 'Cardio Training', 'Yoga', 'Pilates',
    'Bodybuilding', 'Powerlifting', 'Functional Training', 'Sports Performance',
    'Injury Rehabilitation', 'Weight Loss', 'Nutrition Coaching'
  ];

  const certificationOptions = [
    'NASM-CPT', 'ACSM-CPT', 'NSCA-CSCS', 'ACE-CPT', 'ISSA-CPT',
    'RYT-200', 'RYT-500', 'Nutrition Specialist', 'Sports Performance',
    'Corrective Exercise Specialist', 'Youth Exercise Specialist'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Trainer application:', formData);
    // Handle application submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleMultiSelect = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field as keyof typeof prev].includes(value)
        ? (prev[field as keyof typeof prev] as string[]).filter(item => item !== value)
        : [...(prev[field as keyof typeof prev] as string[]), value]
    }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-lg font-semibold text-gray-300 mb-3">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#39FF14] focus:border-transparent transition-all"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-lg font-semibold text-gray-300 mb-3">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#39FF14] focus:border-transparent transition-all"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-lg font-semibold text-gray-300 mb-3">
                  Email Address
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
            </div>

            <div>
              <label htmlFor="location" className="block text-lg font-semibold text-gray-300 mb-3">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#39FF14] focus:border-transparent transition-all"
                placeholder="City, State"
              />
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label htmlFor="experience" className="block text-lg font-semibold text-gray-300 mb-3">
                Years of Experience
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
                <option value="1-2">1-2 years</option>
                <option value="3-5">3-5 years</option>
                <option value="6-10">6-10 years</option>
                <option value="10+">10+ years</option>
              </select>
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-300 mb-3">
                Specialties (Select all that apply)
              </label>
              <div className="grid md:grid-cols-3 gap-3">
                {specialtyOptions.map(specialty => (
                  <button
                    key={specialty}
                    type="button"
                    onClick={() => handleMultiSelect('specialties', specialty)}
                    className={`p-3 rounded-xl border transition-all duration-300 text-sm ${
                      formData.specialties.includes(specialty)
                        ? 'bg-gradient-to-r from-[#39FF14]/20 to-[#007BFF]/20 border-[#39FF14] text-white'
                        : 'bg-white/5 border-white/20 text-gray-300 hover:border-white/40'
                    }`}
                  >
                    {specialty}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-300 mb-3">
                Certifications (Select all that apply)
              </label>
              <div className="grid md:grid-cols-3 gap-3">
                {certificationOptions.map(cert => (
                  <button
                    key={cert}
                    type="button"
                    onClick={() => handleMultiSelect('certifications', cert)}
                    className={`p-3 rounded-xl border transition-all duration-300 text-sm ${
                      formData.certifications.includes(cert)
                        ? 'bg-gradient-to-r from-[#39FF14]/20 to-[#007BFF]/20 border-[#39FF14] text-white'
                        : 'bg-white/5 border-white/20 text-gray-300 hover:border-white/40'
                    }`}
                  >
                    {cert}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="education" className="block text-lg font-semibold text-gray-300 mb-3">
                Education Background
              </label>
              <textarea
                id="education"
                name="education"
                value={formData.education}
                onChange={handleChange}
                rows={3}
                className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#39FF14] focus:border-transparent transition-all resize-vertical"
                placeholder="Describe your educational background..."
              ></textarea>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <label htmlFor="motivation" className="block text-lg font-semibold text-gray-300 mb-3">
                Why do you want to join our team?
              </label>
              <textarea
                id="motivation"
                name="motivation"
                value={formData.motivation}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#39FF14] focus:border-transparent transition-all resize-vertical"
                placeholder="Tell us about your motivation and passion for fitness..."
              ></textarea>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="availability" className="block text-lg font-semibold text-gray-300 mb-3">
                  Availability
                </label>
                <textarea
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#39FF14] focus:border-transparent transition-all resize-vertical"
                  placeholder="Describe your availability..."
                ></textarea>
              </div>
              <div>
                <label htmlFor="hourlyRate" className="block text-lg font-semibold text-gray-300 mb-3">
                  Desired Hourly Rate
                </label>
                <input
                  type="text"
                  id="hourlyRate"
                  name="hourlyRate"
                  value={formData.hourlyRate}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#39FF14] focus:border-transparent transition-all"
                  placeholder="e.g., $75/hour"
                />
              </div>
            </div>

            <div>
              <label htmlFor="portfolio" className="block text-lg font-semibold text-gray-300 mb-3">
                Portfolio/Website (Optional)
              </label>
              <input
                type="url"
                id="portfolio"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleChange}
                className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#39FF14] focus:border-transparent transition-all"
                placeholder="https://your-portfolio.com"
              />
            </div>

            <div>
              <label htmlFor="references" className="block text-lg font-semibold text-gray-300 mb-3">
                References
              </label>
              <textarea
                id="references"
                name="references"
                value={formData.references}
                onChange={handleChange}
                rows={3}
                className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#39FF14] focus:border-transparent transition-all resize-vertical"
                placeholder="Provide contact information for 2-3 professional references..."
              ></textarea>
            </div>

            <div className="bg-gradient-to-r from-[#39FF14]/10 to-[#007BFF]/10 rounded-2xl p-6 border border-[#39FF14]/20">
              <h3 className="text-xl font-bold mb-3">Upload Documents</h3>
              <p className="text-gray-300 mb-4">
                Please upload your certifications, resume, and any other relevant documents.
              </p>
              <button
                type="button"
                className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-xl font-bold transition-all flex items-center space-x-3"
              >
                <Upload className="h-5 w-5" />
                <span>Upload Files</span>
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

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
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-black mb-6">
              Become a <span className="gradient-text">FitPro Trainer</span>
            </h1>
            <p className="text-2xl text-gray-200 leading-relaxed">
              Join our team of elite fitness professionals and help others achieve their fitness goals.
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-8">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={index} className="flex items-center">
                    <div className={`flex items-center space-x-3 ${
                      index <= currentStep ? 'text-[#39FF14]' : 'text-gray-500'
                    }`}>
                      <div className={`p-3 rounded-full border-2 transition-all ${
                        index <= currentStep 
                          ? 'border-[#39FF14] bg-[#39FF14]/20' 
                          : 'border-gray-500 bg-gray-800'
                      }`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <span className="font-bold text-lg hidden md:block">{step.title}</span>
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`w-16 h-0.5 mx-4 ${
                        index < currentStep ? 'bg-[#39FF14]' : 'bg-gray-500'
                      }`}></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {steps[currentStep].title}
            </h2>

            <form onSubmit={handleSubmit}>
              {renderStepContent()}

              <div className="flex justify-between mt-12">
                <button
                  type="button"
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

                {currentStep === steps.length - 1 ? (
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-[#39FF14] to-[#007BFF] hover:from-[#32e60f] hover:to-[#0056b3] text-white px-12 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-2xl neon-glow flex items-center space-x-3"
                  >
                    <CheckCircle className="h-5 w-5" />
                    <span>Submit Application</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="bg-gradient-to-r from-[#39FF14] to-[#007BFF] hover:from-[#32e60f] hover:to-[#0056b3] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-2xl flex items-center space-x-3"
                  >
                    <span>Next</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerApplication;