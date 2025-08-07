import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Timer, 
  MessageCircle, 
  Zap, 
  Trophy,
  BookOpen,
  Users,
  Play,
  ArrowRight,
  Instagram,
  MessageSquare,
  Phone,
  Mail,
  FileText,
  Sparkles,
  Target,
  Coffee,
  Heart
} from "lucide-react";

type AppState = 'landing' | 'quiz' | 'result' | 'login';

export default function Index() {
  const [appState, setAppState] = useState<AppState>('landing');
  const [quizAnswers, setQuizAnswers] = useState<{ [key: string]: string }>({});
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const quizQuestions = [
    {
      id: 'seriousness',
      question: 'How serious are you about studies?',
      options: ['Just passing lol', 'Mid serious', 'All in bro']
    },
    {
      id: 'vibe',
      question: 'Pick your vibe:',
      options: ['Chill and Learn', 'Hardcore Grind']
    }
  ];

  const handleQuizAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setQuizAnswers({ ...quizAnswers, [quizQuestions[currentQuestion].id]: answer });
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(quizAnswers[quizQuestions[currentQuestion + 1].id] || '');
    } else {
      setAppState('result');
    }
  };

  const getResultLevel = () => {
    const seriousness = quizAnswers.seriousness;
    const vibe = quizAnswers.vibe;
    
    if (seriousness === 'All in bro' && vibe === 'Hardcore Grind') {
      return { level: 5, title: 'Level 5 Beast Mode', desc: 'Bro you\'re absolutely mental about studying. Respect.' };
    } else if (seriousness === 'All in bro' || vibe === 'Hardcore Grind') {
      return { level: 4, title: 'Level 4 Grinder', desc: 'You mean business. Time to unlock your potential.' };
    } else if (seriousness === 'Mid serious') {
      return { level: 3, title: 'Level 3 Hustler', desc: 'Solid vibes. You know what you want.' };
    } else {
      return { level: 2, title: 'Level 2 Chill Learner', desc: 'No pressure, just progress. Let\'s make it fun.' };
    }
  };

  const handleLogin = (provider: string) => {
    alert(`Logging in with ${provider}... Coming soon!`);
    console.log(`Login with ${provider}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-peach-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm border-b border-purple-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              ProBadha
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button className="text-gray-700 hover:text-purple-600 transition-colors font-medium">About</button>
              <button className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Features</button>
              <button className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Contact</button>
              <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-6 py-2 rounded-full">
                Login
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Landing Page */}
      {appState === 'landing' && (
        <>
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 md:py-24 text-center">
            <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-gradient-to-r from-peach-400 to-purple-400 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4 transform -rotate-1 shadow-lg animate-bounce">
              AI-Powered Study Buddy
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-xl px-6 py-3 mb-6 inline-block shadow-lg animate-pulse">
              <p className="text-sm font-medium text-gray-700">
                🏫 <span className="text-purple-600 font-semibold">Lal Chand Sharma Higher Secondary School</span>
              </p>
            </div>
              
              <h1 className="text-5xl md:text-7xl font-black text-gray-800 mb-6 leading-tight animate-fade-in-up">
                Your AI Study Buddy.
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent animate-pulse">
                  No Stress, Just Smarts.
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-8 font-medium">
                Personalized study plans that don't suck.
              </p>
              
              <Button
                onClick={() => setAppState('quiz')}
                className="bg-gradient-to-r from-purple-500 via-blue-500 to-peach-400 hover:from-purple-600 hover:via-blue-600 hover:to-peach-500 text-white px-12 py-6 text-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-bold animate-bounce hover:animate-none"
              >
                <Sparkles className="w-6 h-6 mr-3 animate-spin" />
                Take the 1-Min Quiz & Flex Your Brain
              </Button>
              
              <p className="text-gray-500 mt-4 text-sm">
                Stop overthinking, yaar.
              </p>
            </div>
          </section>

          {/* Quick Features */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              Why ProBadha hits different
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: <MessageCircle className="w-8 h-8 animate-pulse" />,
                  title: 'Ask AI Anything',
                  desc: 'in seconds',
                  gradient: 'from-purple-400 to-blue-400'
                },
                {
                  icon: <BookOpen className="w-8 h-8 animate-bounce" />,
                  title: 'Instant Notes',
                  desc: 'and Summaries',
                  gradient: 'from-blue-400 to-cyan-400'
                },
                {
                  icon: <Trophy className="w-8 h-8 animate-spin" />,
                  title: 'Daily XP and',
                  desc: 'Leaderboards',
                  gradient: 'from-cyan-400 to-green-400'
                },
                {
                  icon: <Timer className="w-8 h-8 animate-pulse" />,
                  title: 'Pomodoro',
                  desc: 'Focus Timer',
                  gradient: 'from-green-400 to-yellow-400'
                },
                {
                  icon: <Users className="w-8 h-8 animate-bounce" />,
                  title: 'Memes and Chill',
                  desc: 'Community',
                  gradient: 'from-yellow-400 to-peach-400'
                }
              ].map((feature, index) => (
                <Card key={index} className="group hover:scale-105 transition-all duration-300 border-0 shadow-lg hover:shadow-xl">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    <h3 className="font-bold text-gray-800 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="bg-gradient-to-r from-purple-500 via-blue-500 to-peach-400 rounded-3xl p-12 text-center text-white shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Padh le warna kal phir gaali khayega.
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Chill maar, ProBadha sambhal lega.
              </p>
              <Button 
                onClick={() => setAppState('quiz')}
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Let's Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </section>
        </>
      )}

      {/* Quiz Section */}
      {appState === 'quiz' && (
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-2xl border-0 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-center py-8">
                <CardTitle className="text-2xl md:text-3xl font-bold">
                  {quizQuestions[currentQuestion].question}
                </CardTitle>
                <div className="flex justify-center mt-4">
                  {quizQuestions.map((_, index) => (
                    <div 
                      key={index}
                      className={`w-3 h-3 rounded-full mx-1 ${
                        index <= currentQuestion ? 'bg-white' : 'bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              </CardHeader>
              
              <CardContent className="p-8">
                <div className="space-y-4 mb-8">
                  {quizQuestions[currentQuestion].options.map((option, index) => (
                    <div 
                      key={index}
                      className={`p-6 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                        selectedAnswer === option 
                          ? 'border-purple-500 bg-purple-50 shadow-lg' 
                          : 'border-gray-200 hover:border-purple-300 hover:bg-gray-50'
                      }`}
                      onClick={() => handleQuizAnswer(option)}
                    >
                      <div className="flex items-center">
                        <div className={`w-5 h-5 rounded-full border-2 mr-4 ${
                          selectedAnswer === option 
                            ? 'border-purple-500 bg-purple-500' 
                            : 'border-gray-300'
                        }`}>
                          {selectedAnswer === option && (
                            <div className="w-full h-full rounded-full bg-white m-0.5"></div>
                          )}
                        </div>
                        <span className="text-lg font-medium text-gray-800">{option}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <Button 
                    variant="outline" 
                    onClick={() => setAppState('landing')}
                    className="px-6 py-3"
                  >
                    Back
                  </Button>
                  
                  <Button 
                    onClick={handleNextQuestion}
                    disabled={!selectedAnswer}
                    className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 rounded-xl"
                  >
                    {currentQuestion === quizQuestions.length - 1 ? 'Show My Plan' : 'Next'}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Result Section */}
      {appState === 'result' && (
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-2xl border-0 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-green-500 to-blue-500 text-white text-center py-12">
                <div className="text-6xl mb-4">🏆</div>
                <CardTitle className="text-3xl md:text-4xl font-bold mb-4">
                  You're a {getResultLevel().title}
                </CardTitle>
                <p className="text-xl opacity-90">
                  {getResultLevel().desc}
                </p>
              </CardHeader>
              
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-6 mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Next move? Download your study plan and start dominating.
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                    <div>✅ Personalized AI recommendations</div>
                    <div>✅ Daily study schedule</div>
                    <div>✅ Progress tracking</div>
                    <div>✅ Community access</div>
                  </div>
                </div>
                
                <Button 
                  onClick={() => setAppState('login')}
                  className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-12 py-4 text-xl rounded-2xl shadow-xl w-full mb-4 font-bold"
                >
                  <Target className="w-6 h-6 mr-3" />
                  Unlock My Free Plan
                </Button>
                
                <Button 
                  variant="outline" 
                  onClick={() => setAppState('landing')}
                  className="w-full px-8 py-3"
                >
                  Take Quiz Again
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Login Section */}
      {appState === 'login' && (
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto">
            <Card className="shadow-2xl border-0 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-peach-400 text-white text-center py-8">
                <CardTitle className="text-2xl md:text-3xl font-bold">
                  No time to waste. Login here.
                </CardTitle>
              </CardHeader>
              
              <CardContent className="p-8">
                <div className="space-y-4">
                  <Button 
                    onClick={() => handleLogin('WhatsApp')}
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-6 text-lg rounded-xl shadow-lg flex items-center justify-center gap-4"
                  >
                    <Phone className="w-6 h-6" />
                    Continue with WhatsApp
                  </Button>
                  
                  <Button 
                    onClick={() => handleLogin('Telegram')}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-6 text-lg rounded-xl shadow-lg flex items-center justify-center gap-4"
                  >
                    <MessageSquare className="w-6 h-6" />
                    Continue with Telegram
                  </Button>
                  
                  <Button 
                    onClick={() => handleLogin('Google')}
                    className="w-full bg-red-500 hover:bg-red-600 text-white py-6 text-lg rounded-xl shadow-lg flex items-center justify-center gap-4"
                  >
                    <Mail className="w-6 h-6" />
                    Continue with Google
                  </Button>
                </div>
                
                <div className="mt-8 text-center">
                  <Button 
                    variant="outline" 
                    onClick={() => setAppState('result')}
                    className="px-6 py-3"
                  >
                    Back to Results
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-lg text-gray-300 mb-4 flex items-center justify-center gap-2">
              Made with late nights and too much coffee by ProBadha Team.
              <Coffee className="w-5 h-5 text-orange-400 animate-bounce" />
            </p>

            {/* Admin Contact Info */}
            <div className="bg-gray-800 rounded-xl p-6 mb-6 max-w-md mx-auto">
              <h3 className="text-white font-semibold mb-4 flex items-center justify-center gap-2">
                <span className="animate-pulse">🔧</span> Admin Contact
              </h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <a href="mailto:himanshubhatnagar.in@gmail.com" className="hover:text-white transition-colors">
                    himanshubhatnagar.in@gmail.com
                  </a>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4 text-green-400" />
                  <a href="tel:7011476556" className="hover:text-white transition-colors">
                    +91 7011476556
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto text-center">
            <a
              href="https://instagram.com/himanshubhatnagar.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-400 transition-colors flex items-center justify-center gap-2 font-medium transform hover:scale-110 duration-300"
            >
              <Instagram className="w-5 h-5 animate-pulse" />
              Instagram
            </a>

            <a
              href="https://discord.gg/himanshubhatnagar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors flex items-center justify-center gap-2 font-medium transform hover:scale-110 duration-300"
            >
              <MessageSquare className="w-5 h-5 animate-bounce" />
              Discord
            </a>

            <button
              onClick={() => console.log('Privacy Policy')}
              className="text-gray-400 hover:text-green-400 transition-colors flex items-center justify-center gap-2 font-medium transform hover:scale-110 duration-300"
            >
              <FileText className="w-5 h-5" />
              Privacy Policy
            </button>

            <button
              onClick={() => console.log('Contact Us')}
              className="text-gray-400 hover:text-purple-400 transition-colors flex items-center justify-center gap-2 font-medium transform hover:scale-110 duration-300"
            >
              <Mail className="w-5 h-5" />
              Contact Us
            </button>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-500 flex items-center justify-center gap-2">
              © 2024 ProBadha. Built with 
              <Heart className="w-4 h-4 text-red-400" />
              for students who want to level up.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
