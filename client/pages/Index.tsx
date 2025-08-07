import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Brain, 
  Timer, 
  MessageCircle, 
  Camera, 
  Upload, 
  Smartphone, 
  TrendingUp, 
  Globe, 
  Gamepad2, 
  Heart, 
  Zap, 
  Target, 
  Award,
  Star,
  Users,
  ArrowRight,
  Play,
  CheckCircle,
  GraduationCap,
  BarChart3,
  Monitor,
  Menu,
  X
} from "lucide-react";

export default function Index() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProgram, setActiveProgram] = useState('virtual');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (section: string) => {
    console.log(`Navigating to: ${section}`);
    // Smooth scroll to section (you can implement this)
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleCTAClick = (action: string) => {
    console.log(`CTA clicked: ${action}`);
    // Handle different CTA actions
    switch (action) {
      case 'start-learning':
        alert('Welcome to Probadha! Starting your learning journey...');
        break;
      case 'demo':
        alert('Demo coming soon! Stay tuned...');
        break;
      case 'get-started':
        alert('Ready to get started? Let\'s begin your educational journey!');
        break;
      default:
        console.log('Unknown action:', action);
    }
  };

  const handleProgramClick = (program: string) => {
    setActiveProgram(program);
    console.log(`Selected program: ${program}`);
  };

  const programs = [
    {
      id: 'virtual',
      title: 'Virtual Class',
      desc: 'Join online learning sessions for advanced AI learning experience',
      icon: Camera,
      gradient: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-yellow-400',
      hoverColor: 'hover:bg-yellow-500'
    },
    {
      id: 'scholarship',
      title: 'Scholarship Program',
      desc: 'Get financial aid for excellent students with scholarship benefits',
      icon: GraduationCap,
      gradient: 'from-blue-500 to-purple-600',
      bgColor: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600'
    },
    {
      id: 'monitoring',
      title: 'Student Monitoring',
      desc: 'Track progress and academic performance insights and educational monitoring',
      icon: BarChart3,
      gradient: 'from-pink-500 to-purple-600',
      bgColor: 'bg-pink-500',
      hoverColor: 'hover:bg-pink-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 overflow-x-hidden">
      {/* Navigation */}
      <nav className="bg-gray-900 text-white py-4 px-4 md:px-8 relative z-50 transition-all duration-300">
        <div className="container mx-auto flex justify-between items-center">
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavClick('features')}
              className="text-sm text-gray-300 hover:text-white transition-colors duration-300 hover:scale-105 transform"
            >
              Features
            </button>
            <button 
              onClick={() => handleNavClick('programs')}
              className="text-sm text-gray-300 hover:text-white transition-colors duration-300 hover:scale-105 transform"
            >
              Our Services
            </button>
          </div>
          
          <div className="text-2xl font-bold text-white cursor-pointer hover:scale-105 transition-transform duration-300">
            PROBADHA
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavClick('about')}
              className="text-sm text-gray-300 hover:text-white transition-colors duration-300 hover:scale-105 transform"
            >
              About Us
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className="text-sm text-gray-300 hover:text-white transition-colors duration-300 hover:scale-105 transform"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gray-800 border-t border-gray-700 py-4 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col space-y-4 px-4">
              <button onClick={() => handleNavClick('features')} className="text-gray-300 hover:text-white text-left">Features</button>
              <button onClick={() => handleNavClick('programs')} className="text-gray-300 hover:text-white text-left">Our Services</button>
              <button onClick={() => handleNavClick('about')} className="text-gray-300 hover:text-white text-left">About Us</button>
              <button onClick={() => handleNavClick('contact')} className="text-gray-300 hover:text-white text-left">Contact Us</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          {/* Animated Background Elements */}
          <div className="absolute top-20 left-10 w-16 h-16 bg-yellow-400 rounded-lg transform rotate-12 opacity-80 animate-pulse"></div>
          <div className="absolute top-32 right-20 w-12 h-12 bg-blue-400 rounded-full opacity-70 animate-bounce delay-300"></div>
          <div className="absolute bottom-40 left-20 w-8 h-8 bg-pink-400 rounded-full opacity-60 animate-ping delay-500"></div>
          <div className="absolute top-40 left-1/4 w-6 h-6 bg-green-400 rounded-lg transform rotate-45 opacity-50 animate-pulse delay-700"></div>
          <div className="absolute bottom-60 right-1/4 w-10 h-10 bg-purple-400 rounded-lg transform -rotate-12 opacity-60 animate-bounce delay-1000"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-20 md:py-32 text-center">
          {/* Floating Icons with Enhanced Animations */}
          <div className={`flex justify-center items-center gap-8 mb-12 relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="absolute -top-10 -left-20 transform rotate-12 animate-bounce delay-100 hover:scale-110 transition-transform duration-300 cursor-pointer">
              <div className="w-16 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl">
                <div className="w-8 h-8 bg-white rounded opacity-80"></div>
              </div>
            </div>
            
            <div className="absolute -top-8 right-10 transform -rotate-12 animate-bounce delay-200 hover:scale-110 transition-transform duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl">
                <Globe className="w-6 h-6 text-white" />
              </div>
            </div>
            
            <div className="absolute top-16 -right-16 transform rotate-45 animate-bounce delay-300 hover:scale-110 transition-transform duration-300 cursor-pointer">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl">
                <Brain className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <div className="absolute -bottom-8 -left-10 transform -rotate-45 animate-bounce delay-400 hover:scale-110 transition-transform duration-300 cursor-pointer">
              <div className="w-16 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="text-white hover:text-gray-300 transition-colors duration-300">CREATE NEW</span><br />
            <span className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300 animate-pulse">EXPERIENCE</span> <span className="text-white hover:text-gray-300 transition-colors duration-300">WITH</span><br />
            <span className="text-white hover:text-gray-300 transition-colors duration-300">WAYS OF</span><br />
            <span className="text-white hover:text-gray-300 transition-colors duration-300">PERFECT </span>
            <span className="text-blue-400 hover:text-blue-300 transition-colors duration-300 animate-pulse">LEARNING</span>
          </h1>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mt-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Button 
              onClick={() => handleCTAClick('start-learning')}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              <Play className="w-5 h-5 mr-2" />
              Start Learning Now
            </Button>
            
            <Button 
              onClick={() => handleCTAClick('demo')}
              variant="outline" 
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              <Monitor className="w-5 h-5 mr-2" />
              View Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Special Programs Section */}
      <section id="programs" className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="absolute top-0 right-20 animate-spin-slow">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">OUR SPECIAL </span>
              <span className="text-blue-400 hover:text-blue-300 transition-colors duration-300">PROGRAMS</span>
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold">
              <span className="text-white">FOR YOUR </span>
              <span className="bg-green-400 text-black px-4 py-2 rounded-full inline-block transform -rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300 cursor-pointer">EDUCATION</span>
            </h3>
            
            <div className="absolute top-8 right-4 animate-bounce">
              <div className="w-12 h-16 bg-red-500 rounded-lg transform rotate-12 hover:rotate-6 transition-transform duration-300"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {programs.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <Card 
                  key={program.id}
                  className={`group bg-gradient-to-br ${program.gradient} border-none text-white relative overflow-hidden h-80 cursor-pointer transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-2xl animate-in slide-in-from-bottom duration-700`}
                  style={{ animationDelay: `${index * 200}ms` }}
                  onClick={() => handleProgramClick(program.id)}
                >
                  <CardContent className="p-8 h-full flex flex-col relative z-10">
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="mt-auto">
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-yellow-100 transition-colors duration-300">{program.title}</h3>
                      <p className="text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                        {program.desc}
                      </p>
                    </div>
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-white/20 rounded-full opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300"></div>
                  </CardContent>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Easy to Use Section */}
      <section id="features" className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="text-white">OUR PROGRAM IS </span>
              <span className="bg-green-400 text-black px-4 py-2 rounded-full inline-block hover:scale-105 transition-transform duration-300 cursor-pointer">EASY</span>
              <span className="text-white"> TO USE</span><br />
              <span className="text-white">AND USEFUL FOR THE FUTURE</span>
            </h2>
            
            <div className="absolute top-0 right-10 animate-pulse">
              <div className="w-12 h-12 bg-blue-400 rounded-full hover:scale-110 transition-transform duration-300"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Side - Features */}
            <div className="space-y-8">
              <div className="flex flex-wrap gap-4">
                {programs.map((program) => (
                  <Button 
                    key={program.id}
                    onClick={() => handleProgramClick(program.id)}
                    className={`${program.bgColor} text-white ${program.hoverColor} transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl ${
                      activeProgram === program.id ? 'ring-4 ring-white/50 scale-105' : ''
                    }`}
                  >
                    {program.title}
                  </Button>
                ))}
              </div>
              
              <div className="bg-yellow-400 text-black p-8 rounded-2xl relative transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
                <h3 className="text-3xl font-bold mb-4">LEARNING VIRTUALLY EVERYWHERE.</h3>
                <p className="text-lg opacity-80 mb-6">
                  We Provide learning virtually for students everywhere and
                  also provide recording which allows students distance their
                  choice class.
                </p>
                
                <div className="absolute -top-4 -right-4">
                  <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold transform rotate-12 hover:rotate-6 hover:scale-105 transition-all duration-300 cursor-pointer animate-pulse">
                    TOTALLY FREE
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Interface Preview */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-6 shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-3xl">
                <div className="bg-gray-100 rounded-2xl p-6 h-80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {[
                        { color: 'bg-blue-500', delay: '0ms' },
                        { color: 'bg-green-500', delay: '100ms' },
                        { color: 'bg-purple-500', delay: '200ms' },
                        { color: 'bg-pink-500', delay: '300ms' }
                      ].map((item, index) => (
                        <div 
                          key={index}
                          className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center cursor-pointer transform hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-lg hover:shadow-xl animate-bounce`}
                          style={{ animationDelay: item.delay }}
                        >
                          <Users className="w-8 h-8 text-white" />
                        </div>
                      ))}
                    </div>
                    <Monitor className="w-12 h-12 text-gray-600 mx-auto hover:text-gray-800 transition-colors duration-300" />
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-blue-400 rounded-full opacity-70 animate-ping"></div>
              <div className="absolute -bottom-8 -right-8 w-12 h-12 bg-purple-400 rounded-full opacity-60 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="about" className="bg-gray-100 text-black py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-50"></div>
        
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 gap-4 h-full animate-pulse">
            {Array.from({ length: 60 }).map((_, i) => (
              <div key={i} className="border border-gray-300 hover:border-gray-500 transition-colors duration-300"></div>
            ))}
          </div>
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <h2 className={`text-4xl md:text-6xl font-bold mb-8 leading-tight transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="text-pink-500 hover:text-pink-400 transition-colors duration-300">LET'S</span> <span className="text-blue-500 hover:text-blue-400 transition-colors duration-300">UNLOCK</span><br />
            <span className="text-black hover:text-gray-800 transition-colors duration-300">YOUR </span>
            <span className="text-blue-500 hover:text-blue-400 transition-colors duration-300">POTENTIAL</span><br />
            <span className="text-black hover:text-gray-800 transition-colors duration-300">WITH </span>
            <span className="text-yellow-500 hover:text-yellow-400 transition-colors duration-300 animate-pulse">PROBADHA</span>
          </h2>

          {/* Enhanced Decorative Elements */}
          <div className="absolute top-10 left-20 animate-bounce">
            <div className="w-16 h-20 bg-yellow-400 rounded-lg transform rotate-12 hover:rotate-6 hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg"></div>
          </div>
          
          <div className="absolute bottom-20 right-20 animate-pulse">
            <div className="w-12 h-12 bg-blue-400 rounded-full hover:scale-110 transition-transform duration-300 cursor-pointer shadow-lg"></div>
          </div>
          
          <div className="absolute top-20 right-1/4 animate-spin-slow">
            <div className="w-8 h-8 bg-pink-400 rounded-lg transform rotate-45 hover:rotate-90 hover:scale-125 transition-all duration-300 cursor-pointer shadow-lg"></div>
          </div>

          <div className={`flex justify-center mt-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Button 
              onClick={() => handleCTAClick('get-started')}
              className="bg-purple-600 hover:bg-purple-700 text-white px-12 py-6 text-xl rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 font-bold"
            >
              <CheckCircle className="w-6 h-6 mr-3" />
              Get Started Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 hover:text-yellow-400 transition-colors duration-300 cursor-pointer">PROBADHA</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Copyright 2024 PROBADHA. All Rights Reserved.
              </p>
              <p className="text-gray-500 text-sm">
                Transforming education with AI-powered learning solutions
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => handleNavClick('about')} className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-2 transform">About Us</button></li>
                <li><button onClick={() => handleNavClick('features')} className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-2 transform">Features</button></li>
                <li><button onClick={() => handleNavClick('programs')} className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-2 transform">Programs</button></li>
                <li><button onClick={() => console.log('Pricing page')} className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-2 transform">Pricing</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><button onClick={() => console.log('Contact form')} className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-2 transform">Contact Us</button></li>
                <li><button onClick={() => console.log('Terms page')} className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-2 transform">Terms of Service</button></li>
                <li><button onClick={() => console.log('Privacy page')} className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-2 transform">Privacy Policy</button></li>
                <li><button onClick={() => console.log('Help center')} className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-2 transform">Help Center</button></li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <div className="flex gap-2">
              {[0, 1, 2, 3].map((index) => (
                <button
                  key={index}
                  onClick={() => console.log(`Page ${index + 1}`)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                    index === 2 ? 'bg-white shadow-lg' : 'bg-gray-600 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Custom CSS for additional animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .hover\\:shadow-3xl:hover {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  );
}
