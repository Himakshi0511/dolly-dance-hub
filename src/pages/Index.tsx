
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Star, Users, Award } from "lucide-react";

const Index = () => {
  const danceforms = [
    {
      name: "Hip Hop",
      description: "Urban street dance with energetic moves and rhythmic beats",
      icon: "🎤",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Freestyle",
      description: "Express yourself with creative and spontaneous dance movements",
      icon: "🕺",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Belly Dance",
      description: "Graceful Middle Eastern dance focusing on torso movements",
      icon: "💃",
      color: "from-rose-500 to-orange-500"
    },
    {
      name: "Folk Dance",
      description: "Traditional cultural dances celebrating heritage and community",
      icon: "🌾",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Bollywood",
      description: "Vibrant Indian cinema dance combining classical and modern styles",
      icon: "🎬",
      color: "from-yellow-500 to-red-500"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Dance with Dolly
            </h1>
            <div className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-purple-600 transition-colors">Home</button>
              <button onClick={() => scrollToSection('classes')} className="text-gray-700 hover:text-purple-600 transition-colors">Classes</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-purple-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-purple-600 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
              ✨ Premier Dance Academy
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent animate-fade-in">
              Dance with Dolly
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in">
              Where passion meets rhythm and dreams take flight through dance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg"
                onClick={() => scrollToSection('classes')}
              >
                Explore Classes
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-purple-300 text-purple-600 hover:bg-purple-50 px-8 py-3 text-lg"
                onClick={() => scrollToSection('contact')}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="flex justify-center mb-2">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800">500+</h3>
              <p className="text-gray-600">Happy Students</p>
            </div>
            <div className="animate-fade-in">
              <div className="flex justify-center mb-2">
                <Award className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800">5</h3>
              <p className="text-gray-600">Dance Forms</p>
            </div>
            <div className="animate-fade-in">
              <div className="flex justify-center mb-2">
                <Star className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800">10+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dance Classes Section */}
      <section id="classes" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Dance Forms
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover your passion through our diverse range of dance styles, each designed to bring out your unique expression
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {danceforms.map((dance, index) => (
              <Card key={dance.name} className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-white/80 backdrop-blur-sm animate-fade-in">
                <CardHeader className="text-center">
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r ${dance.color} flex items-center justify-center text-3xl`}>
                    {dance.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800">{dance.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center text-lg leading-relaxed">
                    {dance.description}
                  </CardDescription>
                  <Button 
                    className="w-full mt-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                    onClick={() => scrollToSection('contact')}
                  >
                    Join Class
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-purple-100 to-pink-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              About Dance with Dolly
            </h2>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Welcome to Dance with Dolly, where movement becomes magic and every step tells a story. Our academy is a vibrant community dedicated to nurturing dancers of all ages and skill levels.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Under the visionary leadership of co-founder <strong>Himakshi Thakre</strong>, we offer comprehensive training in five dynamic dance forms, creating an environment where creativity flourishes and confidence soars.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-purple-600 mb-2">Our Mission</h3>
                  <p className="text-gray-600">To inspire and empower dancers through exceptional training, fostering creativity, discipline, and self-expression.</p>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-pink-600 mb-2">Our Vision</h3>
                  <p className="text-gray-600">To be the premier dance academy that transforms lives through the art of movement and rhythm.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to start your dance journey? Contact us today and let's dance together!
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <Card className="p-6 hover:shadow-lg transition-shadow border-0 bg-white/80 backdrop-blur-sm">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                    <p className="text-gray-600">+91 74700307688</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow border-0 bg-white/80 backdrop-blur-sm">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">himakshithakre0511@gmail.com</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow border-0 bg-white/80 backdrop-blur-sm">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Location</h3>
                    <p className="text-gray-600">Minal Residency</p>
                  </div>
                </div>
              </Card>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Ready to Dance?</h3>
              <p className="text-purple-100 mb-6 leading-relaxed">
                Join our vibrant community of dancers and discover the joy of movement. Whether you're a beginner or an experienced dancer, we have the perfect class for you.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Star className="h-5 w-5 mr-2 text-yellow-300" />
                  Professional instructors
                </li>
                <li className="flex items-center">
                  <Star className="h-5 w-5 mr-2 text-yellow-300" />
                  Flexible class schedules
                </li>
                <li className="flex items-center">
                  <Star className="h-5 w-5 mr-2 text-yellow-300" />
                  All skill levels welcome
                </li>
                <li className="flex items-center">
                  <Star className="h-5 w-5 mr-2 text-yellow-300" />
                  Performance opportunities
                </li>
              </ul>
              <Button 
                size="lg" 
                className="w-full bg-white text-purple-600 hover:bg-gray-50 font-semibold"
              >
                Start Your Journey
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Dance with Dolly
            </h3>
            <p className="text-gray-300 mb-6">Co-founded by Himakshi Thakre</p>
            <div className="flex justify-center space-x-8 text-gray-400">
              <span>Hip Hop</span>
              <span>•</span>
              <span>Freestyle</span>
              <span>•</span>
              <span>Belly Dance</span>
              <span>•</span>
              <span>Folk</span>
              <span>•</span>
              <span>Bollywood</span>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700">
              <p className="text-gray-400">
                © 2024 Dance with Dolly. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
