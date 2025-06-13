
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface DanceClassesSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const DanceClassesSection = ({ scrollToSection }: DanceClassesSectionProps) => {
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

  return (
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
  );
};

export default DanceClassesSection;
