import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
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
  X,
  Clock,
  Eye,
  Home,
  Info,
  PhoneCall,
  Mail,
  User,
  Phone,
  Send,
  RotateCcw
} from "lucide-react";

type TestState = 'landing' | 'testing' | 'result' | 'registration';
type Level = 'Elementary' | 'Pre-Intermediate' | 'Intermediate' | 'Upper-Intermediate' | 'Advanced' | 'Proficient';

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  level: Level;
}

const questions: Question[] = [
  {
    id: 1,
    question: "_____ name's Kate. She's from Paris.",
    options: ["Her", "His", "She"],
    correct: 0,
    level: "Elementary"
  },
  {
    id: 2,
    question: "I _____ a student.",
    options: ["am", "is", "are"],
    correct: 0,
    level: "Elementary"
  },
  {
    id: 3,
    question: "Where _____ you from?",
    options: ["are", "is", "do"],
    correct: 0,
    level: "Elementary"
  },
  {
    id: 4,
    question: "She _____ English and French.",
    options: ["speak", "speaks", "speaking"],
    correct: 1,
    level: "Elementary"
  },
  {
    id: 5,
    question: "I _____ television every evening.",
    options: ["watch", "watches", "watching"],
    correct: 0,
    level: "Elementary"
  },
  {
    id: 6,
    question: "_____ he British? No, he _____.",
    options: ["Is / isn't", "Are / aren't", "Do / don't"],
    correct: 0,
    level: "Pre-Intermediate"
  },
  {
    id: 7,
    question: "I _____ breakfast at 8 o'clock every morning.",
    options: ["have", "has", "having"],
    correct: 0,
    level: "Pre-Intermediate"
  },
  {
    id: 8,
    question: "She _____ to work by bus.",
    options: ["go", "goes", "going"],
    correct: 1,
    level: "Pre-Intermediate"
  },
  {
    id: 9,
    question: "_____ do you live? In London.",
    options: ["What", "Where", "Who"],
    correct: 1,
    level: "Pre-Intermediate"
  },
  {
    id: 10,
    question: "I _____ like coffee. I prefer tea.",
    options: ["don't", "doesn't", "am not"],
    correct: 0,
    level: "Pre-Intermediate"
  },
  {
    id: 11,
    question: "If I _____ you, I would accept the offer.",
    options: ["am", "was", "were"],
    correct: 2,
    level: "Intermediate"
  },
  {
    id: 12,
    question: "She has _____ lived in three different countries.",
    options: ["already", "yet", "still"],
    correct: 0,
    level: "Intermediate"
  },
  {
    id: 13,
    question: "The report _____ by tomorrow morning.",
    options: ["must finish", "must be finished", "must finishing"],
    correct: 1,
    level: "Intermediate"
  },
  {
    id: 14,
    question: "I wish I _____ speak French fluently.",
    options: ["can", "could", "will"],
    correct: 1,
    level: "Intermediate"
  },
  {
    id: 15,
    question: "_____ the weather was bad, we decided to go out.",
    options: ["Although", "Because", "Since"],
    correct: 0,
    level: "Upper-Intermediate"
  },
  {
    id: 16,
    question: "She's been working here _____ five years.",
    options: ["since", "for", "during"],
    correct: 1,
    level: "Upper-Intermediate"
  },
  {
    id: 17,
    question: "I'd rather you _____ smoke in here.",
    options: ["don't", "didn't", "won't"],
    correct: 1,
    level: "Upper-Intermediate"
  },
  {
    id: 18,
    question: "Had I known about the traffic, I _____ earlier.",
    options: ["would leave", "would have left", "will leave"],
    correct: 1,
    level: "Advanced"
  },
  {
    id: 19,
    question: "The proposal _____ by the committee next week.",
    options: ["will review", "will be reviewed", "will have reviewed"],
    correct: 1,
    level: "Advanced"
  },
  {
    id: 20,
    question: "Not only _____ late, but he also forgot his presentation.",
    options: ["he was", "was he", "he is"],
    correct: 1,
    level: "Proficient"
  }
];

export default function Index() {
  const [testState, setTestState] = useState<TestState>('landing');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState<Level>('Elementary');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comments: '',
    agreement: false
  });

  const calculateResults = () => {
    let correctAnswers = 0;
    let levelScores: { [key in Level]: number } = {
      'Elementary': 0,
      'Pre-Intermediate': 0,
      'Intermediate': 0,
      'Upper-Intermediate': 0,
      'Advanced': 0,
      'Proficient': 0
    };

    questions.forEach((question) => {
      if (answers[question.id] === question.correct) {
        correctAnswers++;
        levelScores[question.level]++;
      }
    });

    setScore(correctAnswers);
    
    // Determine level based on performance
    if (correctAnswers >= 18) setLevel('Proficient');
    else if (correctAnswers >= 15) setLevel('Advanced');
    else if (correctAnswers >= 12) setLevel('Upper-Intermediate');
    else if (correctAnswers >= 9) setLevel('Intermediate');
    else if (correctAnswers >= 6) setLevel('Pre-Intermediate');
    else setLevel('Elementary');
  };

  const handleStartTest = () => {
    setTestState('testing');
    setCurrentQuestion(0);
    setAnswers({});
    setSelectedAnswer(null);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setAnswers({ ...answers, [questions[currentQuestion].id]: answerIndex });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(answers[questions[currentQuestion + 1].id] ?? null);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(answers[questions[currentQuestion - 1].id] ?? null);
    }
  };

  const handleQuestionJump = (questionIndex: number) => {
    setCurrentQuestion(questionIndex);
    setSelectedAnswer(answers[questions[questionIndex].id] ?? null);
  };

  const handleFinishTest = () => {
    calculateResults();
    setTestState('result');
  };

  const handleNavigation = (section: string) => {
    console.log(`Navigating to: ${section}`);
    setIsMenuOpen(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone && formData.agreement) {
      alert('Thank you for your interest! We will contact you soon with course details.');
      console.log('Form submitted:', formData);
    } else {
      alert('Please fill in all required fields and accept the agreement.');
    }
  };

  const getLevelColor = (levelName: Level) => {
    const colors = {
      'Elementary': 'bg-red-100 text-red-800 border-red-200',
      'Pre-Intermediate': 'bg-orange-100 text-orange-800 border-orange-200',
      'Intermediate': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'Upper-Intermediate': 'bg-blue-100 text-blue-800 border-blue-200',
      'Advanced': 'bg-green-100 text-green-800 border-green-200',
      'Proficient': 'bg-purple-100 text-purple-800 border-purple-200'
    };
    return colors[levelName];
  };

  const completedQuestions = Object.keys(answers).length;

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-orange-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => handleNavigation('home')}
                className="text-gray-700 hover:text-orange-600 transition-colors duration-300 flex items-center gap-2"
              >
                <Home className="w-4 h-4" />
                Home
              </button>
              <button 
                onClick={() => handleNavigation('about')}
                className="text-gray-700 hover:text-orange-600 transition-colors duration-300 flex items-center gap-2"
              >
                <Info className="w-4 h-4" />
                About
              </button>
              <button 
                onClick={() => handleNavigation('programs')}
                className="text-gray-700 hover:text-orange-600 transition-colors duration-300 flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                Programs/Courses
              </button>
            </div>
            
            <div className="text-2xl font-bold text-orange-600">
              English Level Test
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => handleNavigation('contact')}
                className="text-gray-700 hover:text-orange-600 transition-colors duration-300 flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                Contact/Support
              </button>
              <div className="text-sm text-gray-600">
                📞 +1-800-123-4567
              </div>
            </div>

            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-orange-200">
              <div className="flex flex-col space-y-4">
                <button onClick={() => handleNavigation('home')} className="text-gray-700 hover:text-orange-600 text-left flex items-center gap-2">
                  <Home className="w-4 h-4" /> Home
                </button>
                <button onClick={() => handleNavigation('about')} className="text-gray-700 hover:text-orange-600 text-left flex items-center gap-2">
                  <Info className="w-4 h-4" /> About
                </button>
                <button onClick={() => handleNavigation('programs')} className="text-gray-700 hover:text-orange-600 text-left flex items-center gap-2">
                  <BookOpen className="w-4 h-4" /> Programs/Courses
                </button>
                <button onClick={() => handleNavigation('contact')} className="text-gray-700 hover:text-orange-600 text-left flex items-center gap-2">
                  <PhoneCall className="w-4 h-4" /> Contact/Support
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Landing Page */}
      {testState === 'landing' && (
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full text-lg font-semibold mb-6 transform -rotate-2 shadow-lg">
              Express-test
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              English Knowledge Level Test
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Test your English level quickly and get a personalized recommendation.
            </p>

            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-md mx-auto mb-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Test Features:</h3>
              <ul className="space-y-3 text-left">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Test is completely free</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>20 questions total</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Detects your level accurately</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Get instant results</span>
                </li>
              </ul>
            </div>

            <Button 
              onClick={handleStartTest}
              className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-6 text-xl rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Play className="w-6 h-6 mr-3" />
              Start Test
            </Button>
          </div>

          {/* Visual Level Map */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">English Proficiency Levels</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { level: 'Elementary', description: 'Basic words and phrases', color: 'red' },
                { level: 'Pre-Intermediate', description: 'Simple conversations', color: 'orange' },
                { level: 'Intermediate', description: 'Daily communication', color: 'yellow' },
                { level: 'Upper-Intermediate', description: 'Complex topics', color: 'blue' },
                { level: 'Advanced', description: 'Fluent expression', color: 'green' },
                { level: 'Proficient', description: 'Near-native level', color: 'purple' }
              ].map((item, index) => (
                <Card key={index} className={`border-2 border-${item.color}-200 hover:shadow-lg transition-all duration-300`}>
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 bg-${item.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <div className={`w-8 h-8 bg-${item.color}-500 rounded-full`}></div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.level}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Business English Flow */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for Business English?</h2>
            <p className="text-xl mb-6">Advance your career with professional English skills</p>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3"
            >
              Learn More About Our Courses
            </Button>
          </div>
        </div>
      )}

      {/* Testing Interface */}
      {testState === 'testing' && (
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Question Interface */}
            <div className="lg:col-span-3">
              <Card className="shadow-lg">
                <CardHeader className="bg-orange-500 text-white">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl">
                      Question {currentQuestion + 1}/20
                    </CardTitle>
                    <Badge variant="secondary" className="bg-white text-orange-500">
                      {completedQuestions}/20 completed
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-8">
                    {questions[currentQuestion].question}
                  </h2>
                  
                  <div className="space-y-4 mb-8">
                    {questions[currentQuestion].options.map((option, index) => (
                      <div 
                        key={index}
                        className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                          selectedAnswer === index 
                            ? 'border-orange-500 bg-orange-50' 
                            : 'border-gray-200 hover:border-orange-300 hover:bg-gray-50'
                        }`}
                        onClick={() => handleAnswerSelect(index)}
                      >
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="answer"
                            value={index}
                            checked={selectedAnswer === index}
                            onChange={() => handleAnswerSelect(index)}
                            className="w-5 h-5 text-orange-500"
                          />
                          <span className="text-lg">{option}</span>
                        </label>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <Button 
                      variant="outline" 
                      onClick={handlePrevious}
                      disabled={currentQuestion === 0}
                      className="px-6 py-3"
                    >
                      Previous
                    </Button>
                    
                    <div className="flex gap-4">
                      {currentQuestion === questions.length - 1 ? (
                        <Button 
                          onClick={handleFinishTest}
                          className="bg-green-500 hover:bg-green-600 text-white px-8 py-3"
                          disabled={Object.keys(answers).length < questions.length}
                        >
                          Finish Test
                        </Button>
                      ) : (
                        <Button 
                          onClick={handleNext}
                          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3"
                        >
                          Next
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Question Navigator */}
            <div className="lg:col-span-1">
              <Card className="shadow-lg sticky top-8">
                <CardHeader className="bg-gray-100">
                  <CardTitle className="text-lg text-center">Question Navigator</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="grid grid-cols-4 gap-2">
                    {questions.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuestionJump(index)}
                        className={`w-12 h-12 rounded-lg text-sm font-semibold transition-all duration-300 ${
                          index === currentQuestion
                            ? 'bg-orange-500 text-white shadow-md'
                            : answers[questions[index].id] !== undefined
                            ? 'bg-green-100 text-green-700 border-2 border-green-300'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {index + 1}
                      </button>
                    ))}
                  </div>
                  
                  <div className="mt-6 text-sm space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-orange-500 rounded"></div>
                      <span>Current</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-green-100 border-2 border-green-300 rounded"></div>
                      <span>Answered</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-gray-100 rounded"></div>
                      <span>Not answered</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      )}

      {/* Results Page */}
      {testState === 'result' && (
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-xl">
              <CardHeader className="bg-gradient-to-r from-green-500 to-blue-600 text-white text-center py-8">
                <CardTitle className="text-3xl mb-4">Test Results</CardTitle>
                <div className="text-6xl font-bold mb-2">{score}/20</div>
                <div className="text-xl">Correct Answers</div>
              </CardHeader>
              
              <CardContent className="p-8 text-center">
                <div className="mb-8">
                  <div className="text-2xl font-semibold text-gray-800 mb-4">Your English Level:</div>
                  <Badge className={`text-2xl px-6 py-3 ${getLevelColor(level)}`}>
                    {level}
                  </Badge>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-semibold mb-4">Level Description:</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {level === 'Elementary' && "You understand basic English words and phrases. Focus on building vocabulary and basic grammar."}
                    {level === 'Pre-Intermediate' && "You can handle simple conversations and everyday topics. Continue practicing with more complex sentences."}
                    {level === 'Intermediate' && "You communicate well in most daily situations. Work on advanced grammar and expand your vocabulary."}
                    {level === 'Upper-Intermediate' && "You handle complex topics confidently. Focus on fluency and natural expression."}
                    {level === 'Advanced' && "You express yourself fluently and accurately. Polish your skills for professional contexts."}
                    {level === 'Proficient' && "Excellent! You have near-native proficiency. Consider specialized courses for specific goals."}
                  </p>
                </div>

                <div className="space-y-4">
                  <Button 
                    onClick={() => setTestState('registration')}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg w-full"
                  >
                    <GraduationCap className="w-5 h-5 mr-3" />
                    Enroll in Course
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    onClick={() => setTestState('landing')}
                    className="w-full px-8 py-4"
                  >
                    <RotateCcw className="w-5 h-5 mr-3" />
                    Take Test Again
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Registration Form */}
      {testState === 'registration' && (
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-xl">
              <CardHeader className="bg-orange-500 text-white text-center py-6">
                <CardTitle className="text-2xl">Get Detailed Results & Enroll in Course</CardTitle>
                <p className="text-orange-100 mt-2">Fill in your details to receive personalized recommendations</p>
              </CardHeader>
              
              <CardContent className="p-8">
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-base font-semibold">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-2 p-3 text-base"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-base font-semibold">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-2 p-3 text-base"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-base font-semibold">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="mt-2 p-3 text-base"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="comments" className="text-base font-semibold">
                      Additional Comments (Optional)
                    </Label>
                    <Textarea
                      id="comments"
                      value={formData.comments}
                      onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                      className="mt-2 p-3 text-base"
                      placeholder="Any specific goals or questions about the course?"
                      rows={4}
                    />
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="agreement"
                      checked={formData.agreement}
                      onCheckedChange={(checked) => setFormData({ ...formData, agreement: !!checked })}
                      className="mt-1"
                    />
                    <Label htmlFor="agreement" className="text-sm text-gray-600 leading-relaxed">
                      I agree to receive course information and updates via email and phone. 
                      I understand my information will be used to provide personalized English learning recommendations. *
                    </Label>
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-4 text-lg"
                    disabled={!formData.name || !formData.email || !formData.phone || !formData.agreement}
                  >
                    <Send className="w-5 h-5 mr-3" />
                    Submit Details & Get Course Info
                  </Button>
                </form>
                
                <div className="mt-8 text-center">
                  <Button 
                    variant="outline" 
                    onClick={() => setTestState('result')}
                    className="px-6 py-3"
                  >
                    Back to Results
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Contact Info Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <PhoneCall className="w-4 h-4" />
                  <span>+1-800-123-4567</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>info@englishtest.com</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <button onClick={() => handleNavigation('about')} className="block text-gray-300 hover:text-white transition-colors">About Us</button>
                <button onClick={() => handleNavigation('programs')} className="block text-gray-300 hover:text-white transition-colors">Our Programs</button>
                <button onClick={() => handleNavigation('contact')} className="block text-gray-300 hover:text-white transition-colors">Support</button>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex justify-center space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-500 transition-colors">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-300 transition-colors">
                  <span className="text-sm font-bold">t</span>
                </div>
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-500 transition-colors">
                  <span className="text-sm font-bold">y</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8">
            <p className="text-gray-400">
              © 2024 English Level Test. All rights reserved. 
              Test your English level and advance your career today!
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
