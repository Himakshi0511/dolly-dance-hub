
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Star, Users, Award } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  const danceforms = [
    {
      name: "Bollywood",
      description: "Vibrant Indian cinema dance combining classical and modern styles",
      icon: "🎬",
      color: "from-yellow-500 to-red-500",
      image: "/lovable-uploads/cfeabff7-b509-42ae-b044-b4ea9f501770.png"
    },
    {
      name: "Freestyle",
      description: "Express yourself with creative and spontaneous dance movements",
      icon: "🕺",
      color: "from-blue-500 to-cyan-500",
      image: "/lovable-uploads/98e47371-dd07-4df6-8530-0b53875304fe.png"
    },
    {
      name: "Belly Dance",
      description: "Graceful Middle Eastern dance focusing on torso movements",
      icon: "💃",
      color: "from-rose-500 to-orange-500",
      image: "/lovable-uploads/80ff03e4-93cd-4324-ab8f-0b1a4210226e.png"
    },
    {
      name: "Classical",
      description: "Traditional dance forms with precise techniques and cultural heritage",
      icon: "🏛️",
      color: "from-emerald-500 to-teal-500",
      image: "/lovable-uploads/74ae3221-25f2-485c-9d05-f1bad194130c.png"
    },
    {
      name: "Folk",
      description: "Cultural dances celebrating regional traditions and community spirit",
      icon: "🌾",
      color: "from-amber-500 to-yellow-500",
      image: "/lovable-uploads/d67beba6-b69e-441a-8ea5-3173fdc4c716.png"
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
              Dolly Dance Hub
            </h1>
            <div className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-purple-600 transition-colors">Home</button>
              <button onClick={() => scrollToSection('classes')} className="text-gray-700 hover:text-purple-600 transition-colors">Classes</button>
              <button onClick={() => scrollToSection('team')} className="text-gray-700 hover:text-purple-600 transition-colors">Our Team</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-purple-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-purple-600 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Background Image */}
      <section 
        id="home" 
        className="pt-20 pb-16 relative min-h-screen flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(139, 69, 19, 0.7), rgba(139, 69, 19, 0.5)), url('/lovable-uploads/3a8b00bd-2cd3-4026-ac7f-d50073771ca1.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
              ✨ Premier Dance Studio
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl animate-fade-in">
              Dolly Dance Hub
            </h1>
            <p className="text-xl md:text-2xl text-white drop-shadow-lg mb-8 animate-fade-in">
              Where passion meets rhythm and dreams take flight through dance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg shadow-2xl"
                onClick={() => scrollToSection('classes')}
              >
                Explore Classes
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 text-lg shadow-2xl backdrop-blur-sm"
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
              Discover your passion through our five specialized dance styles, each designed to bring out your unique expression
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {danceforms.map((dance, index) => (
              <Card key={dance.name} className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-white/80 backdrop-blur-sm animate-fade-in overflow-hidden">
                {dance.image && (
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={dance.image} 
                      alt={dance.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                )}
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

      {/* Our Team Section */}
      <section id="team" className="py-20 bg-gradient-to-r from-indigo-100 to-purple-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Dance Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet our talented dancers who bring passion and energy to every performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-96">
                <img 
                  src="/lovable-uploads/7a6f5173-fadf-4f6e-b9c3-1585e8ce1d33.png" 
                  alt="Classical Dance Team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">Classical Dance Ensemble</h3>
                  <p className="text-lg opacity-90">Traditional elegance in motion</p>
                </div>
              </div>
            </Card>
            
            <Card className="overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-96">
                <img 
                  src="/lovable-uploads/72742a0c-1ab4-4343-9bfd-c13a5e312613.png" 
                  alt="Folk Dance Team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">Folk Dance Troupe</h3>
                  <p className="text-lg opacity-90">Celebrating cultural heritage</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-purple-100 to-pink-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              About Dolly Dance Hub
            </h2>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Welcome to Dolly Dance Hub, where movement becomes magic and every step tells a story. Our studio is a vibrant community dedicated to nurturing dancers of all ages and skill levels.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Under the visionary leadership of co-founder <strong>Himakshi Thakre</strong>, we offer comprehensive training in three dynamic dance forms, creating an environment where creativity flourishes and confidence soars.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-purple-600 mb-2">Our Mission</h3>
                  <p className="text-gray-600">To inspire and empower dancers through exceptional training, fostering creativity, discipline, and self-expression.</p>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-pink-600 mb-2">Our Vision</h3>
                  <p className="text-gray-600">To be the premier dance studio that transforms lives through the art of movement and rhythm.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to start your dance journey? Fill out the form below and let's dance together!
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
            
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Dolly Dance Hub
            </h3>
            <p className="text-gray-300 mb-6">Co-founded by Himakshi Thakre</p>
            <div className="flex justify-center space-x-8 text-gray-400">
              <span>Bollywood</span>
              <span>•</span>
              <span>Freestyle</span>
              <span>•</span>
              <span>Belly Dance</span>
              <span>•</span>
              <span>Classical</span>
              <span>•</span>
              <span>Folk</span>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700">
              <p className="text-gray-400">
                © 2024 Dolly Dance Hub. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
