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
  CheckCircle
} from "lucide-react";

export default function Index() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    { icon: "📚", title: "Ask AI Questions", desc: "Get instant answers to any study doubt" },
    { icon: "📷", title: "Scan Doubts", desc: "Just click a photo and get solutions" },
    { icon: "📄", title: "Upload Books → Get Notes", desc: "Turn textbooks into smart notes automatically" },
    { icon: "⏱", title: "Pomodoro Timer & XP", desc: "Study smart with rewards and gamification" },
    { icon: "📲", title: "Login via WhatsApp/Google/Telegram", desc: "Easy login with your favorite apps" },
    { icon: "📊", title: "Progress Tracker & Leaderboard", desc: "Compete with friends and track growth" },
    { icon: "🌐", title: "Hindi/Local Language Support", desc: "Study in your comfortable language" },
    { icon: "🎮", title: "Games, Spin-n-Win, Badges", desc: "Make learning fun with rewards" },
    { icon: "🔄", title: "Fun Mode: Memes, Reels, Posts", desc: "Educational content that's actually fun" }
  ];

  const benefits = [
    { icon: <Zap className="w-8 h-8" />, title: "Instant Learning", desc: "Get answers in seconds, not hours" },
    { icon: <Target className="w-8 h-8" />, title: "Personalized Study", desc: "AI adapts to your learning style" },
    { icon: <Award className="w-8 h-8" />, title: "Gamified Progress", desc: "Earn XP, badges, and rewards" },
    { icon: <Users className="w-8 h-8" />, title: "Community Learning", desc: "Learn together with classmates" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-skyblue-50 to-peach-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 via-skyblue-400/20 to-peach-400/20"></div>
        <div className="relative container mx-auto px-4 py-12 md:py-20">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Animated Icons */}
            <div className="flex justify-center items-center gap-4 mb-8">
              <div className="animate-bounce delay-100">
                <MessageCircle className="w-8 h-8 md:w-12 md:h-12 text-purple-500" />
              </div>
              <div className="animate-bounce delay-200">
                <BookOpen className="w-10 h-10 md:w-16 md:h-16 text-skyblue-500" />
              </div>
              <div className="animate-bounce delay-300">
                <Brain className="w-8 h-8 md:w-12 md:h-12 text-peach-500" />
              </div>
              <div className="animate-bounce delay-400">
                <Timer className="w-8 h-8 md:w-12 md:h-12 text-purple-500" />
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-600 via-skyblue-600 to-peach-500 bg-clip-text text-transparent mb-4">
              Probadha
            </h1>
            
            {/* Tagline */}
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-8 font-medium">
              Your AI Study Buddy ✨
            </p>
            
            {/* Subtext */}
            <p className="text-base md:text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Transform your Class 9 studies with AI-powered learning. Get instant doubt solving, 
              personalized notes, and gamified progress tracking.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-500 to-skyblue-500 hover:from-purple-600 hover:to-skyblue-600 text-white px-8 py-6 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Play className="w-5 h-5 mr-2" />
                Start Learning
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-purple-400 text-purple-600 hover:bg-purple-50 px-8 py-6 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Smartphone className="w-5 h-5 mr-2" />
                Login with WhatsApp
              </Button>
              <Button 
                variant="ghost" 
                size="lg"
                className="text-gray-600 hover:text-purple-600 px-8 py-6 text-lg rounded-2xl transition-all duration-300"
              >
                View Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Probadha Section */}
      <section className="py-16 md:py-24 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Why Choose Probadha? 🚀
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the future of learning with AI-powered tools designed specifically for Class 9 students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-purple-50/50 border-purple-200">
                <CardContent className="p-6 text-center">
                  <div className="text-purple-500 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-skyblue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Amazing Features 🎯
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to excel in your studies, all in one powerful app
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white/80 backdrop-blur-sm border-skyblue-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-purple-600 via-skyblue-500 to-peach-400">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Studies? 📚✨
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Join thousands of Class 9 students who are already excelling with Probadha's AI-powered learning platform
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                size="lg" 
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                <CheckCircle className="w-5 h-5 mr-2" />
                Start Learning Now
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-6 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Smartphone className="w-5 h-5 mr-2" />
                Quick WhatsApp Login
              </Button>
            </div>

            <div className="flex justify-center items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-current" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>50K+ Students</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 fill-current" />
                <span>Loved by Teachers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-skyblue-400 bg-clip-text text-transparent mb-4">
                Probadha
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Your AI Study Buddy for Class 9. Study smarter, not harder ✨
              </p>
              <div className="flex gap-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <MessageCircle className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Globe className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Smartphone className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Probadha. Made with ❤️ for Class 9 students. Study smarter, not harder ✨
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
