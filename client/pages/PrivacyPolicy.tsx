import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Shield, Coffee, Mail, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-peach-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm border-b border-purple-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              ProBadha
            </div>
            
            <Button 
              onClick={() => navigate('/')}
              variant="outline"
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </div>
        </div>
      </nav>

      {/* Privacy Policy Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold mb-6 transform -rotate-1 shadow-lg animate-bounce">
              <Shield className="w-5 h-5 inline mr-2" />
              Privacy Policy
            </div>
            <p className="text-gray-600 text-lg">Last updated: August 2025</p>
          </div>

          {/* Privacy Policy Sections */}
          <div className="space-y-8">
            
            {/* Section 1 */}
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-purple-100 to-blue-100">
                <CardTitle className="text-2xl text-gray-800">1. Who are we?</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  We're students from <span className="font-semibold text-purple-600">Lal Chand Sharma Higher Secondary School</span> – chill and serious (depending on exam dates). This website "ProBodha" is made for helping students like us get smarter, sharper, and school-ready (without crying).
                </p>
              </CardContent>
            </Card>

            {/* Section 2 */}
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-blue-100 to-cyan-100">
                <CardTitle className="text-2xl text-gray-800">2. What info do we collect?</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 text-lg mb-4 font-semibold">Not much. Seriously.</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">When you visit the site, we might collect:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      Your browser type
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      Basic device info
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      Which page you visited
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      And if you clicked on "Insta" even though we said not to.
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-3">We do NOT collect:</h4>
                  <ul className="space-y-2 text-red-700">
                    <li className="flex items-center gap-2">
                      <span className="text-red-500">❌</span>
                      Your passwords
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-red-500">❌</span>
                      Your personal photos
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-red-500">❌</span>
                      Your history (we ain't snitches)
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Section 3 */}
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-cyan-100 to-green-100">
                <CardTitle className="text-2xl text-gray-800">3. What do we do with your info?</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 text-lg mb-4 font-semibold">Mostly nothing scary.</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                    <span>We use analytics to improve the site (basically, see what's working and what's flop).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                    <span>We may send updates (like: "Kal test hai, padh le bhai").</span>
                  </li>
                </ul>
                <p className="text-gray-700 mt-4 font-semibold">That's it. No shady business.</p>
              </CardContent>
            </Card>

            {/* Section 4 */}
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-green-100 to-yellow-100">
                <CardTitle className="text-2xl text-gray-800">4. Third-party links (a.k.a Discord, Insta, etc.)</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
                    <h4 className="font-semibold text-pink-800 mb-2">Instagram:</h4>
                    <p className="text-pink-700">Bro, Insta abhi inactive hai. Hum padhe likhe bacche hai abhi.</p>
                    <p className="text-pink-700 mt-2">If you still click it, a message will pop up saying:</p>
                    <div className="bg-pink-100 border border-pink-300 rounded p-2 mt-2 font-mono text-sm">
                      "Insta kam chal raha, thoda pad bhi le."
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">Discord:</h4>
                    <p className="text-blue-700">Chill zone + study zone. Join karo but gaali mat do warna ban ho jaoge.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 5 */}
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-yellow-100 to-orange-100">
                <CardTitle className="text-2xl text-gray-800">5. Contact Info</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 text-lg mb-4">Agar privacy ke naam pe kuch tension ho ya kuch doubt ho toh contact karo:</p>
                
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-orange-600" />
                    <span className="font-semibold">Email:</span>
                    <a href="mailto:himanshubhatnagar.in@gmail.com" className="text-orange-600 hover:underline">
                      himanshubhatnagar.in@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-orange-600" />
                    <span className="font-semibold">Phone:</span>
                    <a href="tel:7011476556" className="text-orange-600 hover:underline">
                      7011476556
                    </a>
                  </div>
                </div>
                
                <p className="text-gray-700 mt-4 italic">Ab please WhatsApp mat bhejna, direct bol diya na.</p>
              </CardContent>
            </Card>

            {/* Section 6 */}
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-orange-100 to-red-100">
                <CardTitle className="text-2xl text-gray-800">6. Security (Kya data safe hai?)</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Website school ke baccho ne banayi hai, lekin responsibly.<br />
                  Jo bhi data hai (very little), vo protected hai – koi bakchodi allowed nahi.
                </p>
              </CardContent>
            </Card>

            {/* Section 7 */}
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-red-100 to-purple-100">
                <CardTitle className="text-2xl text-gray-800">7. Changes to this policy</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Kuch bhi major change hua toh hum clearly bata denge – hidden nahi rakhenge.<br />
                  Agar koi friend keh de "policy change ho gayi", toh check kar lena bhai – shayad sach ho.
                </p>
              </CardContent>
            </Card>

            {/* Section 8 */}
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-purple-100 to-pink-100">
                <CardTitle className="text-2xl text-gray-800">8. Final Words</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                  Hum privacy ko lightly nahi lete. Lekin over-serious bhi nahi banate.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Enjoy the site, study smart, and don't click on every button jaise tum YouTube ke shorts dekhte ho.
                </p>
              </CardContent>
            </Card>

            {/* Final Section */}
            <div className="text-center py-12">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-2xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
                  🔚 That's it.
                </h2>
                <p className="text-xl mb-6 opacity-90">
                  Privacy safe hai. Website bhi safe hai. Bas padho aur chill maro responsibly.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button 
                    onClick={() => navigate('/')}
                    className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg rounded-xl font-bold"
                  >
                    Back to ProBadha
                  </Button>
                  
                  <div className="flex items-center gap-2 text-yellow-200">
                    <Coffee className="w-5 h-5 animate-bounce" />
                    <span className="text-sm">Made with coffee & care</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
