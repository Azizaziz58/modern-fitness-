import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Globe, Users } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      detail: 'support@fitpro.com',
      description: 'Send us an email anytime',
      color: 'from-[#39FF14] to-[#32e60f]'
    },
    {
      icon: Phone,
      title: 'Call Us',
      detail: '+1 (555) 123-4567',
      description: 'Mon-Fri 8AM-8PM EST',
      color: 'from-[#007BFF] to-[#0056b3]'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      detail: '123 Fitness Ave, NY 10001',
      description: 'Our headquarters',
      color: 'from-[#FF6B35] to-[#FF4500]'
    },
    {
      icon: Clock,
      title: 'Support Hours',
      detail: '24/7 Chat Support',
      description: 'Always here to help',
      color: 'from-[#39FF14] to-[#007BFF]'
    }
  ];

  const socialPlatforms = [
    { name: 'Facebook', members: '25k+' },
    { name: 'Instagram', members: '40k+' },
    { name: 'Twitter', members: '15k+' },
    { name: 'YouTube', members: '60k+' }
  ];

  return (
    <div 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-fixed bg-overlay"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/1552617/pexels-photo-1552617.jpeg?auto=compress&cs=tinysrgb&w=1920)'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 scroll-animate">
          <h2 className="text-5xl lg:text-7xl font-black mb-8">
            Get In
            <span className="gradient-text"> Touch</span>
          </h2>
          <p className="text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Have questions about our programs? Need help getting started? Our team is here to support 
            you every step of the way on your fitness journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 scroll-animate group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-6">
                    <div className={`bg-gradient-to-r ${info.color} p-4 rounded-xl group-hover:scale-110 transition-transform`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#39FF14] transition-colors">{info.title}</h3>
                      <p className="text-[#39FF14] font-bold text-lg mb-2">{info.detail}</p>
                      <p className="text-gray-400">{info.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="bg-gradient-to-r from-[#39FF14]/10 to-[#007BFF]/10 rounded-2xl p-8 border border-[#39FF14]/20 scroll-animate">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-gradient-to-r from-[#39FF14] to-[#007BFF] p-3 rounded-xl">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Live Chat</h3>
              </div>
              <p className="text-gray-300 mb-6 text-lg">
                Get instant answers to your questions with our live chat support.
              </p>
              <button className="bg-gradient-to-r from-[#39FF14] to-[#007BFF] text-white px-8 py-3 rounded-xl font-bold text-lg hover:from-[#32e60f] hover:to-[#0056b3] transition-all hover:scale-105">
                Start Chat
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20 scroll-animate">
              <h3 className="text-3xl font-bold text-white mb-8">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
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
                      className="w-full bg-white/10 border border-white/30 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#39FF14] focus:border-transparent transition-all text-lg"
                      placeholder="Enter your full name"
                    />
                  </div>
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
                      className="w-full bg-white/10 border border-white/30 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#39FF14] focus:border-transparent transition-all text-lg"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-lg font-semibold text-gray-300 mb-3">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-white/30 rounded-xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-[#39FF14] focus:border-transparent transition-all text-lg"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="membership">Membership Questions</option>
                    <option value="technical">Technical Support</option>
                    <option value="billing">Billing & Payments</option>
                    <option value="trainer">Trainer Questions</option>
                    <option value="nutrition">Nutrition Plans</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-lg font-semibold text-gray-300 mb-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-white/10 border border-white/30 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#39FF14] focus:border-transparent transition-all resize-vertical text-lg"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-[#39FF14] to-[#007BFF] text-white py-5 px-8 rounded-xl font-bold text-xl hover:from-[#32e60f] hover:to-[#0056b3] transition-all transform hover:scale-105 flex items-center justify-center space-x-3 shadow-2xl neon-glow"
                >
                  <span>Send Message</span>
                  <Send className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20 scroll-animate">
          <div className="text-center mb-10">
            <div className="bg-gradient-to-r from-[#39FF14] to-[#007BFF] p-4 rounded-2xl w-fit mx-auto mb-6">
              <Globe className="h-12 w-12 text-white" />
            </div>
            <h3 className="text-4xl font-bold text-white mb-6">
              Join Our Global Community
            </h3>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Follow us on social media for daily motivation, workout tips, healthy recipes, 
              and success stories from our amazing fitness community worldwide.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {socialPlatforms.map((platform, index) => (
              <button
                key={platform.name}
                className="bg-white/10 hover:bg-gradient-to-r hover:from-[#39FF14] hover:to-[#007BFF] border border-white/30 hover:border-transparent text-white px-6 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 group"
              >
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Users className="h-5 w-5" />
                  <span>{platform.members}</span>
                </div>
                <div className="group-hover:text-white transition-colors">{platform.name}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;