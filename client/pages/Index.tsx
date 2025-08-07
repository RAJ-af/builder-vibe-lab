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
  Menu
} from "lucide-react";

export default function Index() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="bg-gray-900 text-white py-4 px-4 md:px-8">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <span className="text-sm text-gray-300">Features</span>
            <span className="text-sm text-gray-300">Our Services</span>
          </div>
          
          <div className="text-2xl font-bold text-white">
            PROBADHA
          </div>
          
          <div className="flex items-center space-x-8">
            <span className="text-sm text-gray-300">About Us</span>
            <span className="text-sm text-gray-300">Contact Us</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-16 h-16 bg-yellow-400 rounded-lg transform rotate-12 opacity-80"></div>
          <div className="absolute top-32 right-20 w-12 h-12 bg-blue-400 rounded-full opacity-70"></div>
          <div className="absolute bottom-40 left-20 w-8 h-8 bg-pink-400 rounded-full opacity-60"></div>
          <div className="absolute top-40 left-1/4 w-6 h-6 bg-green-400 rounded-lg transform rotate-45 opacity-50"></div>
          <div className="absolute bottom-60 right-1/4 w-10 h-10 bg-purple-400 rounded-lg transform -rotate-12 opacity-60"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-20 md:py-32 text-center">
          {/* Floating Icons */}
          <div className="flex justify-center items-center gap-8 mb-12 relative">
            <div className="absolute -top-10 -left-20 transform rotate-12">
              <div className="w-16 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded opacity-80"></div>
              </div>
            </div>
            
            <div className="absolute -top-8 right-10 transform -rotate-12">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
            </div>
            
            <div className="absolute top-16 -right-16 transform rotate-45">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                <Brain className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <div className="absolute -bottom-8 -left-10 transform -rotate-45">
              <div className="w-16 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="text-white">CREATE NEW</span><br />
            <span className="text-yellow-400">EXPERIENCE</span> <span className="text-white">WITH</span><br />
            <span className="text-white">WAYS OF</span><br />
            <span className="text-white">PERFECT </span>
            <span className="text-blue-400">LEARNING</span>
          </h1>
        </div>
      </section>

      {/* Special Programs Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 relative">
            <div className="absolute top-0 right-20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">OUR SPECIAL </span>
              <span className="text-blue-400">PROGRAMS</span>
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold">
              <span className="text-white">FOR YOUR </span>
              <span className="bg-green-400 text-black px-4 py-2 rounded-full inline-block transform -rotate-2">EDUCATION</span>
            </h3>
            
            <div className="absolute top-8 right-4">
              <div className="w-12 h-16 bg-red-500 rounded-lg transform rotate-12"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Virtual Class Card */}
            <Card className="bg-gradient-to-br from-yellow-400 to-orange-500 border-none text-black relative overflow-hidden h-80">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    <Camera className="w-8 h-8 text-black" />
                  </div>
                </div>
                <div className="mt-auto">
                  <h3 className="text-2xl font-bold mb-3">Virtual Class</h3>
                  <p className="text-sm opacity-80">
                    Join online learning sessions for advanced
                    AI learning experience
                  </p>
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-purple-500 rounded-full opacity-60"></div>
              </CardContent>
            </Card>

            {/* Scholarship Program Card */}
            <Card className="bg-gradient-to-br from-blue-500 to-purple-600 border-none text-white relative overflow-hidden h-80">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="mt-auto">
                  <h3 className="text-2xl font-bold mb-3">Scholarship Program</h3>
                  <p className="text-sm opacity-80">
                    Get financial aid for excellent students
                    with scholarship benefits
                  </p>
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full opacity-60"></div>
              </CardContent>
            </Card>

            {/* Student Monitoring Card */}
            <Card className="bg-gradient-to-br from-pink-500 to-purple-600 border-none text-white relative overflow-hidden h-80">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="mt-auto">
                  <h3 className="text-2xl font-bold mb-3">Student Monitoring</h3>
                  <p className="text-sm opacity-80">
                    Track progress and academic performance
                    insights and educational monitoring
                  </p>
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-400 rounded-full opacity-60"></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Easy to Use Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="text-white">OUR PROGRAM IS </span>
              <span className="bg-green-400 text-black px-4 py-2 rounded-full inline-block">EASY</span>
              <span className="text-white"> TO USE</span><br />
              <span className="text-white">AND USEFUL FOR THE FUTURE</span>
            </h2>
            
            <div className="absolute top-0 right-10">
              <div className="w-12 h-12 bg-blue-400 rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Side - Features */}
            <div className="space-y-8">
              <div className="flex gap-4">
                <Button className="bg-yellow-400 text-black hover:bg-yellow-500">Virtual Class</Button>
                <Button className="bg-blue-500 text-white hover:bg-blue-600">Scholarship Program</Button>
                <Button className="bg-pink-500 text-white hover:bg-pink-600">Student Monitoring</Button>
              </div>
              
              <div className="bg-yellow-400 text-black p-8 rounded-2xl relative">
                <h3 className="text-3xl font-bold mb-4">LEARNING VIRTUALLY EVERYWHERE.</h3>
                <p className="text-lg opacity-80 mb-6">
                  We Provide learning virtually for students everywhere and
                  also provide recording which allows students distance their
                  choice class.
                </p>
                
                <div className="absolute -top-4 -right-4">
                  <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold transform rotate-12">
                    TOTALLY FREE
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Interface Preview */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-6 shadow-2xl">
                <div className="bg-gray-100 rounded-2xl p-6 h-80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <Monitor className="w-12 h-12 text-gray-600 mx-auto" />
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-blue-400 rounded-full opacity-70"></div>
              <div className="absolute -bottom-8 -right-8 w-12 h-12 bg-purple-400 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gray-100 text-black py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-50"></div>
        
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 60 }).map((_, i) => (
              <div key={i} className="border border-gray-300"></div>
            ))}
          </div>
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="text-pink-500">LET'S</span> <span className="text-blue-500">UNLOCK</span><br />
            <span className="text-black">YOUR </span>
            <span className="text-blue-500">POTENTIAL</span><br />
            <span className="text-black">WITH </span>
            <span className="text-yellow-500">PROBADHA</span>
          </h2>

          {/* Decorative Elements */}
          <div className="absolute top-10 left-20">
            <div className="w-16 h-20 bg-yellow-400 rounded-lg transform rotate-12"></div>
          </div>
          
          <div className="absolute bottom-20 right-20">
            <div className="w-12 h-12 bg-blue-400 rounded-full"></div>
          </div>
          
          <div className="absolute top-20 right-1/4">
            <div className="w-8 h-8 bg-pink-400 rounded-lg transform rotate-45"></div>
          </div>

          <div className="flex justify-center mt-12">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg rounded-xl">
              Get Started Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">PROBADHA</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Copyright 2024 PROBADHA. All Rights Reserved.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Programs</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
